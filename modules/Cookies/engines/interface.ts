export interface StorageEngine {
    get(key: string): Promise<string | null | undefined> | string
    set(name: string, value: string): Promise<void> | void
    remove(key: string): Promise<void> | void
}