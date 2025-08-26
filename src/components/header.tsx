import { HeaderMenuList, Logo } from "@/components";

// --------------------------------------------------------------

const Header = () => {
    return (
        <div className="w-full flex justify-center py-7" >
            <div className="w-full max-w-[1400px] flex justify-between" >
                <Logo />
                <HeaderMenuList />
            </div>
        </div>
    )
}

export default Header;