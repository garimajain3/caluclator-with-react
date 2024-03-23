import styles from './Display.module.css'
const Display = ({displayvalue}) =>{
    return (
        <input className={styles.calculatorInput} type="text" value={displayvalue}  readOnly/>
    )
}

export default Display