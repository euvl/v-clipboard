export declare const Clipboard: {
    /**
     * Requests Navigator API persmission to clipboard.
     */
    requestClipboardPermission(): Promise<PermissionStatus>;
    /**
     * Writes to cliboard using Navigator API.
     */
    writeClipboard(value: string): Promise<boolean>;
    /**
     * Writes to clipboard using old-school execCommand('copy').
     */
    writeClipboardExecCommand(value: string): boolean;
    /**
     * Maes an attempt to copy data to the clipboard.
     */
    copy(input: any): Promise<true | undefined>;
};
