import { StorageEngine } from './interface'

export default class LocalStorageEngine implements StorageEngine{
    get(key: string): ReturnType<StorageEngine['get']> {
        return sessionStorage.getItem(key)
    }
    set(key: string, value: string): ReturnType<StorageEngine['set']> {
        sessionStorage.setItem(key, value)
    }
    remove(key: string): ReturnType<StorageEngine['remove']> {
        sessionStorage.removeItem(key)
    }
}