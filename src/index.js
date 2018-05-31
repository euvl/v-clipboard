/**
 * Copyright (c) 2017 - 2018 - Yev Vlasenko
 */
const cssText = "position:fixed;pointer-events:none;z-index:-9999;opacity:0;";
const copyErrorMessage = "Failed to copy value to clipboard. Unknown type.";

const $clipboard = text => {
  if (typeof text !== "string") {
    try {
      text = JSON.stringify(text);
    } catch (e) {
      throw copyErrorMessage;
    }
  }

  const textArea = document.createElement("textarea");
  let success = false;

  textArea.value = text;
  textArea.style.cssText = cssText;

  document.body.appendChild(textArea);
  textArea.select();

  try {
    success = document.execCommand("copy");
  } catch (err) {
    console.warn(err);
  }

  document.body.removeChild(textArea);

  return success;
};

export default {
  install(Vue) {
    Vue.prototype.$clipboard = $clipboard;

    const generateId = (id => () => "$" + id++)(1);
    const handlers = {};

    const removeHandler = id => {
      if (id) {
        handlers[id] = null;
        delete handlers[id];
      }
    };

    const addHandler = func => {
      const id = generateId();
      handlers[id] = func;

      return id;
    };

    Vue.directive("clipboard", {
      bind(el, binding, vnode) {
        const { arg, value } = binding;

        switch (arg) {
          case "error":
            const errorHandlerId = addHandler(value);
            el.dataset.clipboardErrorHandler = errorHandlerId;
            return;

          case "success":
            const successHandlerId = addHandler(value);
            el.dataset.clipboardSuccessHandler = successHandlerId;
            return;

          default:
            const clickEventHandler = event => {
              if (binding.hasOwnProperty("value")) {
                const payload = {
                  value: typeof value === "function" ? value() : value,
                  event
                };

                const handlerId = $clipboard(payload.value)
                  ? el.dataset.clipboardSuccessHandler
                  : el.dataset.clipboardErrorHandler;

                const handler = handlers[handlerId];

                if (handler) {
                  handler(payload);
                }
              }
            };

            const clickEventHandlerId = addHandler(clickEventHandler);

            el.dataset.clipboardClickHandler = clickEventHandlerId;
            el.addEventListener("click", handlers[clickEventHandlerId]);

            return;
        }
      },

      unbind(el, binding, vnode) {
        const {
          clipboardSuccessHandler,
          clipboardErrorHandler,
          clipboardClickHandler
        } = el.dataset;

        removeHandler(clipboardSuccessHandler);
        removeHandler(clipboardErrorHandler);

        if (clipboardClickHandler) {
          el.removeEventListener("click", handlers[clipboardClickHandler]);
          removeHandler(clipboardClickHandler);
        }
      }
    });
  }
};
