import { EngineTypes } from '../enums/EngineTypes'
import { StorageEngine, SerializableValue } from '../types/cookie-types'
import LSFactory from '../index'
import IStorageOptions from '../interface/IStorageOptions'

export default function factory(namespace: string, opt?: StorageEngine): LSFactory {
    return new LSFactory(namespace)
}


