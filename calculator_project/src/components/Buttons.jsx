import styles from './Buttons.module.css'

const Buttons = ({onClickButton}) => {
    let a = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
    return (
        <div className={styles.buttonClass}>
            {a.map((items)=>(
                <button className={styles.button}
                onClick={()=>{onClickButton(items)}}
                >{items}
                
                </button>
            ))}
        
        

      </div>
    )
}

export default Buttons