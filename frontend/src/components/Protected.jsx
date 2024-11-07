const Protected = () =>{
    return (
        <div className="bg-indigo-300 h-screen overflow-hidden flex flex-col items-center justify-center">
            <h1 className="text-5xl my-3 select-none">Welcome, {localStorage.getItem('username')}!</h1>
            <div className="flex flex-col sm:flex-row"></div>
        </div>
    )
}

export default Protected