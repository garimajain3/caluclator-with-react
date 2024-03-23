import { Button } from 'bootstrap'
import styles from './App.module.css'
import Display from './components/Display'
import Buttons from './components/Buttons'
import { useContext, useState } from 'react';

function App() {

  const [cal , setCalVal] = useState("");

  const buttonClicked = (buttonText) =>{
    // console.log(buttonText)
    if (buttonText === 'C'){
      setCalVal("");
    }
    else if(buttonText === '='){
      let result = eval(cal);
      setCalVal(result);
    }
    else{
      let newcal = cal + buttonText
      setCalVal(newcal);

    }
  };

  return (
    <div className={styles.calculatorContainer}>
      <Display displayvalue = {cal}></Display>
      <Buttons onClickButton = {buttonClicked}></Buttons>


    </div>
  )
}

export default App
