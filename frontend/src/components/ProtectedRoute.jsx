import { Navigate } from "react-router-dom"
import axios from 'axios'
import { useEffect , useState } from 'react'

export default function ProtectedRoute({children}) {
    const [isAuthenticated, setIsAuthenticated] = useState(null)

    useEffect(() => {
        const checkAuthentication = async () => {
            const token = localStorage.getItem('token')
            if(!token) {
                setIsAuthenticated(false)
                return
            }

            try{
                const response = await axios.get('/api/auth/verify', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                if(response.status === 200) {
                    setIsAuthenticated(true)
                }
            }
            catch (e) {
                setIsAuthenticated(false)
            }
        }
        checkAuthentication()
    }, [])

    if(isAuthenticated === null) {
        return(
        <div>
                Loading...
        </div>
        )
    }
    return isAuthenticated ? children : <Navigate to="/login" />
}