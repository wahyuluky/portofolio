import { Link, useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const scrollToSection = (id) => {
    // kalau bukan di home, pindah dulu ke home
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        } else {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }
    };

  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <h1 className="text-2xl font-bold">Devlog</h1>
        <div className="flex gap-7">
            <Link to="/">Beranda</Link>
            <Link to="/about">Tentang</Link>
            <Link to="/projects">Proyek</Link>
            <button onClick={() => scrollToSection("kontak")} className="sm:text-lg text-base font-light">Kontak</button>
        </div>
        <div className="flex items-center gap-3">
            <a href="https://github.com/wahyuluky">
                <i className="ri-github-fill ri-2x"></i>
            </a>
            <a href="#">
                <i className="ri-instagram-fill ri-2x"></i>
            </a>
            <a href="medium.com/@wahyulukita19">
                <i className="ri-medium-fill ri-2x"></i>
            </a>
            <a href="www.linkedin.com/in/wahyu-lukytaningtyas-a429aa217">
                <i className="ri-linkedin-fill ri-2x"></i>
            </a>
        </div>
    </div>
  )
}

export default Footer