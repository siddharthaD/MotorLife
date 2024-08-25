import './App.css'
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import About from "./components/About.tsx";
import Home from "./components/Home.tsx"
export default function App() {
    return <BrowserRouter>
            <div className="flex flex-col justify-between h-screen">
            <nav className="w-full mx-auto flex justify-end shadow rounded p-9 items-baseline font-semibold text-slate-700 gap-3.5">
                <div className="text-3xl mr-auto font-block text-gray-900">#VANLIFE</div>
                <Link className="hover:text-gray-950 active:text-gray-950" to="/">Home</Link>
                <Link className="hover:text-gray-950 active:text-gray-950" to="/about">About us</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
            </Routes>
            <footer className="w-full justify-self-end p-4 text-center text-sm text-gray-400 bg-gray-800">
                &#169; 2024 #VANLIFE
            </footer>
            </div>
        </BrowserRouter>
}

