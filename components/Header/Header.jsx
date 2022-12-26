// const Header = () => {
//     const { pathname } = useRouter()
//
//     return (
//         <header>
//             <Logo />
//             <Actions>
//                 {pathname === '/dashboard' && <Link to="/events/new">Create event</Link>}
//                 {pathname === '/' && <Link to="/dashboard">Go to dashboard</Link>}
//             </Actions>
//         </header>
//     )
// }
//
// const HomePage = () => (
//     <>
//         <Header />
//         <OtherHomeStuff />
//     </>
// )
//
// const DashboardPage = () => (
//     <>
//         <Header />
//         <OtherDashboardStuff />
//     </>
// )

const Header = ({ children }) => (
    <header>
        <Logo />
        <Actions>
            {children}
        </Actions>
    </header>
)

const HomePage = () => (
    <>
        <Header>
            <Link to="/dashboard">Go to dashboard</Link>
        </Header>
        <OtherHomeStuff />
    </>
)


const DashboardPage = () => (
    <>
        <Header>
            <Link to="/events/new">Create event</Link>
        </Header>
        <OtherDashboardStuff />
    </>
)