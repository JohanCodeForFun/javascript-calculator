export default function Operations() {
  function handleOperationsClick(operation) {
    console.log(operation)
  }

  return (
    <>
      <button id="clear" className="btn-ac span-two"
      onClick={() => handleOperationsClick('clear')}>AC</button>
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