const Navbar = () => {
    return(
        <nav className="container absolute top-0 bg-[#050922] py-8 flex items-center justify-between text-[#F1F1F1]">
            <h1 className="uppercase font-semibold text-xl">My Portfolio <span>.</span></h1>
            <ul className="flex items-center gap-10 text-sm uppercase">
                <li>Home</li>
                <li>Projects</li>
                <li>About me</li>
                <li>Products</li>
            </ul>
        </nav>
    )
}

export default Navbar