import { EngineTypes } from './modules/Cookies/enums/EngineTypes'
import factory from './modules/Cookies/class/classCookie';

const ls = factory('user', EngineTypes.localStorage)
