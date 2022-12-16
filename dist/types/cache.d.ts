export declare class Cache {
    private seed;
    private data;
    private id;
    add(value: Function, id?: string): string;
    get(id: string): Function | undefined;
    delete(id: string): void;
}
