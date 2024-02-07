import { useState } from 'react';
import './App.css';

const App = () => {
  const [allBtnClicked, setAllbtnClicked] = useState('');

  const handleclick = (event) => {

    console.log(event.target.value);

    let strBtn = event.target.value;

    let newSettingString = allBtnClicked + strBtn;

    let symbols = '+-/*.';

    for (let i = 0; i < newSettingString.length; i++) {
      if (
        symbols.includes(newSettingString[i]) &&
        symbols.includes(newSettingString[i + 1])
      ) {
        console.log('inside if');
        newSettingString = newSettingString.slice(0, -1);
        alert('No two symbols can be together');
      }
    }

    let exampleNum = newSettingString;

    let numString = '123456789';

    for (let i = 0; i < exampleNum.length; i++) {

      if (
        !symbols.includes(exampleNum[i]) &&
        !symbols.includes(exampleNum[i + 1])
      ) {

        if (
          (exampleNum[i] == '0' && numString.includes(exampleNum[i + 1])) ||
          exampleNum[i + 1] == '0'
        ) {

          let add = '';
          let flag = false;

          for (let j = 0; j < exampleNum.length; j++) {
            if (j !== i) {
              add += exampleNum[j];
              flag = true;
            }
          }

          if (flag) {
            exampleNum = add;
            break;
          }
        }
      }
    }

    setAllbtnClicked(exampleNum);

  };

  const handleClickDelete = () => {

    let newStr = allBtnClicked.slice(0, -1);
    console.log(newStr);
    setAllbtnClicked(newStr);

  };

  return (

    <div className="container">

      <div className="calc-display">
        <p>
          {allBtnClicked}
        </p>
      </div>

      <div className="calc-btn">

        <button value="ac" onClick={() => setAllbtnClicked('')}>
          AC
        </button>

        <button
          onClick={() => {
            handleClickDelete();
            console.log('delete last number');
          }}
          value="del"
        >
          Del
        </button>

        <button onClick={handleclick} value="+">
          +
        </button>

        <button onClick={handleclick} value="1">
          1
        </button>

        <button onClick={handleclick} value="2">
          2
        </button>

        <button onClick={handleclick} value="3">
          3
        </button>

        <button onClick={handleclick} value="4">
          4
        </button>

        <button onClick={handleclick} value="5">
          5
        </button>

        <button onClick={handleclick} value="6">
          6
        </button>

        <button onClick={handleclick} value="7">
          7
        </button>

        <button onClick={handleclick} value="8">
          8
        </button>

        <button onClick={handleclick} value="9">
          9
        </button>

        <button onClick={handleclick} value="0">
          0
        </button>

        <button onClick={handleclick} value="-">
          -
        </button>

        <button onClick={handleclick} value="/">
          /
        </button>

        <button onClick={handleclick} value="*">
          *
        </button>

        <button
          onClick={() => {
            let evalAns = eval(allBtnClicked).toString();
            console.log(evalAns);
            if (evalAns == 'NaN') {
              setAllbtnClicked('Not a Number');
            } else {
              setAllbtnClicked(evalAns);
            }
          }}
          value="="
        >
          =
        </button>

        <button onClick={handleclick} value=".">
          .
        </button>
      </div>
    </div>
  );
};

export default App;