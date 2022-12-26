const useUsers = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const loadUsers = async () => {
            const response = await fetch('/some-api')
            const data = await response.json()
            setUsers(data)
        }

        loadUsers()
    }, [])

    return { users }
}