import { SideBarProps } from "./SideBar.props"
import styles from './SideBar.module.scss'
import { Menu } from "../Menu/Menu"
import Logo from '../Logo.svg'
import cn from "classnames"
import { Search } from "../../components"


export const SideBar = ({ className, ...props }: SideBarProps): JSX.Element => {
    return (
        <div {...props} className = {cn(className, styles.sidebar)}>
            <Logo className = {styles.logo}/>
            <Search />
            <Menu />
        </div>
    )
}