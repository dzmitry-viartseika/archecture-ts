const UserItem = ({ user }) => {
    return (
        <li>
            <img src={user.avatarUrl} />
            <p>{user.fullName}</p>
            <small>{user.role}</small>
        </li>
    )
}