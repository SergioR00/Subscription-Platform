import { createBrowserRouter} from 'react-router-dom'
import App from './views/App'
import Login from './views/Login'
import SignUp from './views/SignUp'
import Memberships from './views/Memberships'
import Payment from './views/Payment'


export const router = createBrowserRouter([
    {
        path: '/',
        children: [
            {
                index: true,
                element: <App/>
            },
            {
                path: "login",
                element: <Login/>
            },
            {
                path: "signup",
                element: <SignUp/>
            },
            {
                path: "memberships",
                element: <Memberships/>
            },
            {
                path: "payment",
                element: <Payment/>
            }
        ]
    }
])