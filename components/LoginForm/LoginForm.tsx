// *** Dependency Inversion Principle ***

// import api from '~/common/api'
//
// const LoginForm = () => {
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//
//     const handleSubmit = async (evt) => {
//         evt.preventDefault()
//         await api.login(email, password)
//     }
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
//             <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
//             <button type="submit">Log in</button>
//         </form>
//     )
// }

type Props = {
    onSubmit: (email: string, password: string) => Promise<void>
}

const LoginForm = ({ onSubmit }: Props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        await onSubmit(email, password)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            <button type="submit">Log in</button>
        </form>
    )
}