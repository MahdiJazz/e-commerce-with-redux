import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import icon from '../assets/logo.png';
import cart from '../assets/shopping-cart.png';
import "../App.css";

const Navbar = () => {
    const items = useSelector((state) => state.cart);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`containers ${isScrolled ? 'bg-cyan-100' : 'bg-none'} ${isScrolled ? 'fixed' : 'absolute'} top-0 left-1 right-1 z-50 transition-colors duration-300  `}>
            <div className="containers mx-auto flex  sm:flex-row justify-between w-full items-center py-2 px-0">

                <Link to="/" className="flex items-center space-x-2 mb-2 sm:mb-0">
                    <img src={icon} alt="Logo" className="h-8 sm:h-10" />
                    <span className="text-sm font-bold text-black sm:text-lg">Jazz Shop :)</span>
                </Link>

                <div className="flex flex-row items-center right-8 space-x-4 ml-auto">
                    <Link to="/cart" className="flex right-2 items-center relative">
                        <img className='w-6 h-6' src={cart} alt="Cart" />
                        <span className="absolute top-0 right-1 transform  translate-x-1/2 -translate-y-1/2 bg-cyan-200  text-red-400 font-bold text-xs sm:text-base rounded-full p-1">
                            {items.length}
                        </span>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
