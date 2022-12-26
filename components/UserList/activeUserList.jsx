// before refactoring
// const ActiveUsersList = () => {
//     const [users, setUsers] = useState([])
//
//     useEffect(() => {
//         // 1) GET USERS
//         const loadUsers = async () => {
//             const response = await fetch('/some-api')
//             const data = await response.json()
//             setUsers(data)
//         }
//
//         loadUsers()
//     }, [])
//
//     // 2) SET DATE
//     const weekAgo = new Date();
//     weekAgo.setDate(weekAgo.getDate() - 7);
//
//     // 3) RENDER AND FILTERED WITH CONDITIONS
//     return (
//         <ul>
//             {users.filter(user => !user.isBanned && user.lastActivityAt >= weekAgo).map(user =>
//                 <li key={user.id}>
//                     <img src={user.avatarUrl} />
//                     <p>{user.fullName}</p>
//                     <small>{user.role}</small>
//                 </li>
//             )}
//         </ul>
//     )
// }

// const ActiveUsersList = () => {
//     const { users } = useUsers()
//
//     const weekAgo = new Date()
//     weekAgo.setDate(weekAgo.getDate() - 7)
//
//     return (
//         <ul>
//             {users.filter(user => !user.isBanned && user.lastActivityAt >= weekAgo).map(user =>
//                 <li key={user.id}>
//                     <img src={user.avatarUrl} />
//                     <p>{user.fullName}</p>
//                     <small>{user.role}</small>
//                 </li>
//             )}
//         </ul>
//     )
// }

// const ActiveUsersList = () => {
//     const { users } = useUsers()
//
//     const weekAgo = new Date()
//     weekAgo.setDate(weekAgo.getDate() - 7)
//
//     return (
//         <ul>
//             {users.filter(user => !user.isBanned && user.lastActivityAt >= weekAgo).map(user =>
//                 <UserItem key={user.id} user={user} />
//             )}
//         </ul>
//     )
// }

// const getOnlyActive = (users) => {
//     const weekAgo = new Date()
//     weekAgo.setDate(weekAgo.getDate() - 7)
//
//     return users.filter(user => !user.isBanned && user.lastActivityAt >= weekAgo)
// }
//
// const ActiveUsersList = () => {
//     const { users } = useUsers()
//
//     return (
//         <ul>
//             {getOnlyActive(users).map(user =>
//                 <UserItem key={user.id} user={user} />
//             )}
//         </ul>
//     )
// }


const getOnlyActive = (users) => {
    const weekAgo = new Date()
    weekAgo.setDate(weekAgo.getDate() - 7)

    return users.filter(user => !user.isBanned && user.lastActivityAt >= weekAgo)
}
const useActiveUsers = () => {
    const { users } = useUsers()

    const activeUsers = useMemo(() => {
        return getOnlyActive(users)
    }, [users])

    return { activeUsers }
}

const ActiveUsersList = () => {
    const { activeUsers } = useActiveUsers()

    return (
        <ul>
            {activeUsers.map(user =>
                <UserItem key={user.id} user={user} />
            )}
        </ul>
    )
}