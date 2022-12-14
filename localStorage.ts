export default function factory(namespace: string): LSFactory {
    return new LSFactory(namespace)
}

type SerializablePrimitiveValue = string | number | boolean | null;
type SerializableValue =
    SerializablePrimitiveValue |
    SerializablePrimitiveValue[] |
    Record<string, SerializablePrimitiveValue> |
    {toJSON(): SerializableValue};

export class LSFactory {
    readonly namespace: string;
    constructor(namespace: string) {
        this.namespace = namespace;
    }

    async get<T extends SerializableValue>(name: string): Promise<T | null> {
        return JSON.parse(localStorage.getItem(this.getKey(name))) ?? 'null';
    }

    async set(name: string, value: string): Promise<void> {
        localStorage.setItem(this.getKey(name), value);
    }

    async remove(name): Promise<void> {
        localStorage.removeItem(this.getKey(name));
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