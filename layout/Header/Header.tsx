import { HeaderProps } from "./Header.props"
import styles from './Header.module.scss'
import cn from "classnames"
export const Header = ({ ...props }: HeaderProps): JSX.Element => {
    return (
        <div {...props}>
                Header
                </div>
    )
}