import LocalStorage from './modules/moduleLocalStorage'
import Server from './modules/moduleServer'

// SRP - не нужно делать классы где есть всё (разделяй)
// OCP - достягается с помощью композиции (просто добавляются новые методы)
// LCP - можно унаследоваться

class Widget {
    localStorage = new LocalStorage();
    server = new Server();
    // localStorage.load()
    render() {}
    mount() {}
}