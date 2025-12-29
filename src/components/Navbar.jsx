import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);




  const controlNavbar = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 200) {
      // Niche scroll - Hide (Opacity 0)
      setIsVisible(false);
    } else {
      // Upar scroll - Show (Opacity 100)
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const navItems = [
    { name: 'Home', active: true },
    { name: 'Why Choose Us', active: false },
    { name: 'Government (SLED & Federal)', active: false },
    { name: 'Our Services', active: false },
    { name: 'Industries', active: false },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out   h-32
      ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <div className="w-full h-full  mx-auto flex justify-between  md:justify-evenly px-4 " >
        <div className='h-full'>
          <img src="https://static.wixstatic.com/media/dd1a7d_36d1807ebf5742179915ebf8b0fb84fb~mv2.png/v1/crop/x_746,y_574,w_2237,h_2639/fill/w_222,h_256,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Frame%208.png" alt=""
            className='h-full'
          />
        </div>


        <ul className="md:flex  h-full items-center   overflow-hidden hidden  ">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`px-6 py-4 text-sm font-bold uppercase tracking-tight cursor-pointer hover:bg-black hover:text-white   transition-colors
                ${item.active
                  ? 'bg-[#333333] text-white'
                  : 'text-black hover:bg-black bg-gray-200'
                }`}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <div className='h-full  md:hidden flex items-center'>
          <Menu size={40} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;