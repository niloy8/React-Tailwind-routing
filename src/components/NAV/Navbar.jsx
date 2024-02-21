import { useState } from "react";
import Link from "./Link";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
const routes = [
    { id: 1, name: 'Home', path: '/' },
    { id: 2, name: 'About', path: '/about' },
    { id: 3, name: 'Services', path: '/services' },
    { id: 4, name: 'Products', path: '/products' },
    { id: 5, name: 'Contact', path: '/contact' }
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <span className="md:hidden text-2xl" onClick={() => { setOpen(!open) }}>
                {open ? <RxCross1></RxCross1> : <CiMenuBurger />}
            </span>
            <ul className="md:flex">
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </div>
    );
};

export default Navbar;