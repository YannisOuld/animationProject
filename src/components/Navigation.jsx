import Logo from '../assets/logo.webp'

const Navigation = () => {

    return (
        <div className='relative w-full h-24 bg-slate-700 flex justify-between items-center px-5'>
            <img src={Logo} alt="logo du site" className=' w-20  h-20 rounded-full' />
            <nav className='w-1/3' >
                <ul className='flex justify-between items-center font-bold text-xl mx-8'>
                    <li><a href="#" className='text-white text-lg mx-2' >Accueil</a></li>
                    <li><a href="#" className='text-white text-lg mx-2' >Portfolio</a></li>
                    <li><a href="#" className='text-white text-lg mx-2' >Tarifs</a></li>
                    <li><a href="#" className='text-white text-lg mx-2' >Contact</a></li>
                </ul>

            </nav>
        </div>
    );
};

export default Navigation;