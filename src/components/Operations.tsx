type Props = {
  currentDigits: string,
  onChangeOperations: (operation: string | null) => void,
  clearDisplay: (value: number) => void
}

export default function Operations({ currentDigits, onChangeOperations, clearDisplay }: Props) {
  function handleOperationsClick(operation: string) {
    // function to look at if * is in the disaply, don't add aditional *.
    // current implemmentation breaks the test.
    if (
      currentDigits.charAt(currentDigits.length - 1) === "*" ||
      currentDigits.charAt(currentDigits.length - 1) === "/" ||
      currentDigits.charAt(currentDigits.length - 1) === "+" ||
      currentDigits.charAt(currentDigits.length - 1) === "-"
      ) {
      onChangeOperations('' + currentDigits.slice(0, currentDigits.length - 1) + operation)
    } else {
      onChangeOperations('' + currentDigits + operation)
    }
    
    if (operation === "clear") {
      clearDisplay(0)
    }
    if (operation === "=") {
      console.log(currentDigits)
    }
  }

  return (
    <>
      <button id="clear" className="btn-ac span-two"
      onClick={() => handleOperationsClick('clear')}>AC</button>
      <button id="delete" className="btn-del span-two"
      onClick={() => handleOperationsClick('delete')}>AC</button>
      <button id="equals" className="btn-equal span-two"
      onClick={() => handleOperationsClick('=')}>=</button>
      <button id="add" className="btn-add"
      onClick={() => handleOperationsClick('+')}>+</button>
      <button id="subtract" className="btn-sub"
      onClick={() => handleOperationsClick('-')}>-</button>
      <button id="multiply" className="btn-mul"
      onClick={() => handleOperationsClick('*')}>*</button>
      <button id="divide" className="btn-div"
      onClick={() => handleOperationsClick('/')}>/</button>
    </>
  )
}