import { useState } from "react"
import { AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import {Link} from "react-scroll"
import logo from "/images/groottekstlogowit.png"

const Header : React.FC = () =>{

    const [nav, setNav] = useState(false);

    const handleNav = () =>{
        setNav(!nav);
    }

    return(
        <>
            <header className="bg-catalpa-green text-white py-4 items-center fixed w-full">
                    <img src={logo} alt="big catalpa logo" className="w-60 md:w-80 m-auto mb-2"/>
                    <nav className="hidden md:flex justify-center">
                    <ul className="sofia flex space-x-16">
                        <li>
                            <Link to="missie" spy={true} smooth={true} offset={-150} duration={300} onClick={handleNav} className="cursor-pointer">Missie</Link>
                        </li>
                        <li>
                            <Link to="plaats" spy={true} smooth={true} offset={-150} duration={300} onClick={handleNav} className="cursor-pointer">De Plek</Link>
                        </li>
                        <li>
                            <Link to="groenehaven" spy={true} smooth={true} offset={-150} duration={300} onClick={handleNav} className="cursor-pointer">Groene Haven</Link>
                        </li>
                        <li>
                            <Link to="plaats" spy={true} smooth={true} offset={-150} duration={300} onClick={handleNav} className="cursor-pointer">Wie ben ik</Link>
                        </li>
                    </ul>
                    </nav>
                    
                    <div className="md:hidden">
                       <div onClick={handleNav} className="">
                                {!nav ? <AiOutlineClose size={25} className=" fixed top-20 right-4"/> : <AiOutlineMenu size={25} className="fixed top-20 right-4"/>}
                        </div>
                        <nav className={!nav ? "sofia bg-catalpa-green h-full text-white fixed w-[60%] ease-in-out duration-250" : "fixed -left-[-100%]"}>
                            <ul className="uppercase p-4 space-y-8">
                                <li>
                                    <Link to="missie" spy={true} smooth={true} offset={-125} duration={300} className="p-4 border-b  border-white" onClick={handleNav}>Missie</Link>
                                </li>
                                <li>
                                    <Link to="plaats" spy={true} smooth={true} offset={-125} duration={300} className="p-4 border-b  border-white" onClick={handleNav}>de plek</Link>
                                </li>
                                <li>
                                    <Link to="groenehaven" spy={true} smooth={true} offset={-125} duration={300} className="p-4 border-b  border-white" onClick={handleNav}>groene haven</Link>
                                </li>
                                <li><a className="p-4 " href="#">Wie Ben Ik</a></li>
                            </ul>
                        </nav> 
                    </div>
                    
            </header>          
        </>
    )
}

export default Header
