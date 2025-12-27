import Image from "next/image"
import Link from "next/link"

const header = () => {
  return (
    <nav className="backdrop-blur-[2px] sticky top-0 p-5 z-10">
        <div className="flex justify-between items-center">
            <Image src="/favicon.png" alt="logo" width={40} height={40} />  
            <div className="space-x-5">
                <Link className="hover:text-white/50" href="#home">Home</Link>
                <Link className="hover:text-white/50" href="#aboutus">About us</Link>
                <Link className="hover:text-white/50" href="#services">Services</Link>
                <Link className="hover:text-white/50" href="#experiences">Experiences</Link>
                <Link className="hover:text-white/50" href="#contactus">Contact us</Link>
            </div>    
            <button>Get in touch</button>
        </div>
    </nav>
  )
}

export default header
