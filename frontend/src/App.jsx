import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Home from "./components/Home.jsx";
import Protected from "./components/Protected.jsx";
import ProtectedRoute  from "./components/ProtectedRoute.jsx";

function App() {
  return (
    <Router>
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/protected" element={
                    <ProtectedRoute>
                        <Protected />
                    </ProtectedRoute>
                }/>
            </Routes>
        </div>
    </Router>
  )
}

export default App
