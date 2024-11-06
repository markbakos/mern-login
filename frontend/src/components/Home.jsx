import {Link} from 'react-router-dom'

const Home = () =>{

    return (
        <div className="bg-indigo-300 h-screen overflow-hidden flex flex-col items-center justify-center">
            <h1 className="text-5xl my-3 select-none">Home</h1>
            <div className="flex flex-col sm:flex-row">
                <Link to="/login">
                    <button className="w-[10rem] h-[4rem] bg-indigo-400 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded mr-2 my-3 transition">Login</button>
                </Link>
                <Link to="/register">
                    <button className="w-[10rem] h-[4rem] bg-indigo-400 hover:bg-indigo-500 text-white font-bold py-2 px-4 rounded mr-2 my-3 transition">Register</button>
                </Link>

            </div>
        </div>
    )
}

export default Home