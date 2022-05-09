import { LayoutProps } from "./Layout.props"
import styles from './Layout.module.scss'
import { Header } from "./Header/Header"
import { SideBar } from "./SideBar/SideBar"
import { Footer } from "./Footer/Footer"
import { FunctionComponent } from "react"
import { AppContextProvider, IAppContext } from "../context/app.context"

const Layout = ({ children }: LayoutProps): JSX.Element => {
    return (
        <div className={styles.wrapper}>
            <Header className={styles.header} />
            <SideBar className={styles.sidebar} />
            <div className={styles.body}>
                {children}
            </div>
            <Footer className={styles.footer} />
        </div>
    )
}

export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FunctionComponent<T>) => { // HOC
    return function withLayoutComponent(props: T): JSX.Element {
        return (
            <AppContextProvider menu={props.menu} firstCategory = {props.firstCategory}>
                <Layout>
                    <Component {...props} />
                </Layout>
            </AppContextProvider>
        )
    }
}