import {EngineTypes} from "../enums/EngineTypes";

export type SerializablePrimitiveValue = string | number | boolean | null;

export type SerializableValue =
    SerializablePrimitiveValue |
    SerializablePrimitiveValue[] |
    Record<string, SerializablePrimitiveValue> |
    {toJSON(): SerializableValue};


export type StorageEngine = EngineTypes.localStorage | EngineTypes.sessionStorage