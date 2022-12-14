import IStorageOptions from './interface/IStorageOptions';
import {SerializableValue} from './types/cookie-types';
import { EngineTypes } from './enums/EngineTypes';

export default class LSFactory {
    readonly namespace: string;
    readonly engine: string
    constructor(namespace: string, opt?: IStorageOptions) {
        this.namespace = namespace;
        this.engine = opt?.engine ?? 'localStorage';
    }

    async get<T extends SerializableValue>(name: string): Promise<T | null> {
        const key = this.getKey(name)
        let rawData;
        switch (this.engine) {
            case EngineTypes.localStorage:
                rawData = localStorage.getItem(key);
                break;
            case EngineTypes.sessionStorage:
                rawData = sessionStorage.getItem(key);
                break;
        }
        return JSON.parse(localStorage.getItem(this.getKey(name))) ?? 'null';
    }

    async set(name: string, value: string): Promise<void> {
        const key = this.getKey(name)
        const data = JSON.stringify(value)
        switch (this.engine) {
            case EngineTypes.localStorage:
                localStorage.setItem(key, data)
                break;
            case EngineTypes.sessionStorage:
                sessionStorage.setItem(key, data)
                break;
        }
    }

    async remove(name): Promise<void> {
        const key = this.getKey(name)
        switch (this.engine) {
            case EngineTypes.localStorage:
                localStorage.removeItem(key);
                break;
            case EngineTypes.sessionStorage:
                sessionStorage.removeItem(key)
                break;
        }
    }

    private getKey(key: string): string {
        return `[[${this.namespace}]]-${key}`;
    }
}

// export default function factory(namespace: string) {
//     function getKey(key: string): string {
//         return `[[${namespace}]]-${key}`;
//     }
//     return {
//         get(name: string): string | null {
//             return localStorage.getItem(getKey(name));
//         },
//         set(name: string, value: string): void {
//             localStorage.setItem(getKey(name), value);
//         },
//         remove(name): void {
//             localStorage.removeItem(getKey(name));
//         }
//     }
// }