import { SearchProps } from "./Search.props"
import styles from './Search.module.scss'
import cn from "classnames"
import { Input } from "../Input/Input"
import { Button } from "../Button/Button"
import { useState } from "react"
import GlassIcon from './glass.svg'
import { useRouter } from "next/router"

export const Search = ({ className, ...props }: SearchProps): JSX.Element => {

    const [search, setSearch] = useState<string>('')

    const router = useRouter();

    const handleKeyDown = (e: KeyboardEvent) => {
         if(e.key == 'Enter') {
             goToSearch()
         }
    }

    const goToSearch = () => {
        router.push({
            pathname: '/search',
            query: {
                q: search
            }
        })
    }
    return (
        <div className={cn(className, styles.search)} {...props}>
            <Input onKeyDown={handleKeyDown} className={styles.input} placeholder="Поиск..." value={search} onChange={(e) => setSearch(e.target.value)} />
            <Button
                appearance="primary"
                className={styles.button}
                onClick={goToSearch}
            >
                <GlassIcon />
            </Button>
        </div>
    )
}