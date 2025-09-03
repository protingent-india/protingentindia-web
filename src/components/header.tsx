import { HeaderMenuList, Logo } from "@/components";

// --------------------------------------------------------------

const Header = () => {
    return (
        <div id="header" className="w-full flex justify-center py-7 sticky top-0 z-[1000] bg-white" >
            <div className="w-full max-w-[1450px] flex justify-between" >
                <Logo />
                <HeaderMenuList />
            </div>
        </div>
    )
}

export default Header;