import { StorageEngine } from './interface'

export default class SessionStorageEngine implements StorageEngine{
    get(key: string): ReturnType<StorageEngine['get']> {
        return localStorage.getItem(key)
    }
    set(key: string, value: string): ReturnType<StorageEngine['set']> {
        localStorage.setItem(key, value)
    }
    remove(key: string): ReturnType<StorageEngine['remove']> {
        localStorage.removeItem(key)
    }
}