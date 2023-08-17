type Props = {
  currentDigits: number | string,
  onChangeDigits: (digit: number | string) => void
}

export default function Digits({ currentDigits, onChangeDigits }: Props) {
  function handleDigitsClick(digit: number | string) {
    if (currentDigits === 0) {
      onChangeDigits(digit)
    } else {
      onChangeDigits('' + currentDigits + digit)
    }
  }

  return (
    <>
      <button id="zero" onClick={() => handleDigitsClick(0)}>0</button>
      <button id="one" onClick={() => handleDigitsClick(1)}>1</button>
      <button id="two" onClick={() => handleDigitsClick(2)}>2</button>
      <button id="three" onClick={() => handleDigitsClick(3)}>3</button>
      <button id="four" onClick={() => handleDigitsClick(4)}>4</button>
      <button id="five" onClick={() => handleDigitsClick(5)}>5</button>
      <button id="six" onClick={() => handleDigitsClick(6)}>6</button>
      <button id="seven" onClick={() => handleDigitsClick(7)}>7</button>
      <button id="eight" onClick={() => handleDigitsClick(8)}>8</button>
      <button id="nine" onClick={() => handleDigitsClick(9)}>9</button>
      <button id="decimal" onClick={() => handleDigitsClick(".")}>.</button>
    </>
  )
}