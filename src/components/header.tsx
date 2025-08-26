import { HeaderMenuList, Logo } from "@/components";

// --------------------------------------------------------------

const Header = () => {
    return (
        <div className="w-full flex justify-center py-9" >
            <div className="w-full max-w-[1450px] flex justify-between" >
                <Logo />
                <HeaderMenuList />
            </div>
        </div>
    )
}

export default Header;