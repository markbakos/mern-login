import { useState } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [token, setToken] = useState('');

    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post( 'https://mern-login-backend-vwgd.onrender.com/api/auth/login', {
                username,
                password
            })
            setToken(response.data.token)
            setMessage('')
            localStorage.setItem('username', username)
            localStorage.setItem('token', response.data.token)
            navigate('/protected')
        } catch (e) {
            setMessage(e.response.data.message || 'Login failed')
            setPassword('')
        }
    }

    return (

        <div className="bg-indigo-300 h-screen overflow-hidden flex flex-col items-center justify-center">
            <h1 className="text-5xl my-3 select-none">Login</h1>
            <div className="w-[95vw] h-[80vh] sm:w-[30vw] sm:h-[70vh] bg-indigo-600 rounded-lg flex flex-col items-center justify-center">
                <form
                    className="flex flex-col items-center justify-center gap-4"
                    onSubmit={handleLogin}>
                    <input
                        className="rounded-lg text-center h-[2rem] text-2xl sm:text-lg"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        className="rounded-lg text-center h-[2rem] text-2xl sm:text-lg"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        className="bg-slate-500 hover:bg-slate-600 text-white text-xl rounded-lg w-[8rem] h-[2rem] transition"
                        type="submit">Login
                    </button>

                    <Link to="/register">
                        <p className="text-white text-xl hover:text-slate-300 transition">Don't have an account?</p>
                    </Link>
                    <Link to="/"><button
                        className="w-[10rem] h-[4rem] bg-indigo-400 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded mr-2 my-3 transition">
                        Home
                    </button></Link>
                </form>
                {message && <p className="text-xl text-red-500">{message}</p>}
            </div>
        </div>
    )
}

export default Login