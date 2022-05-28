import { AdvantagesProps } from "./Advantages.props"
import styles from './Advantages.module.scss'
import { priceRu } from '../../helpers/helpers';
import { Card } from "../Card/Card"
import CheckIcon from './check.svg'

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
    return (
       <>
       {advantages.map((a) => 
       <div key={a._id} className = {styles.advantage}>
           <CheckIcon/>
           <div className={styles.title}>{a.title}</div>
           <hr className={styles.line}></hr>
           <div className="">{a.description}</div>
       </div>
       )}
       </>
    )
}