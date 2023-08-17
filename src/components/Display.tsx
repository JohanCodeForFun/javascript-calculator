type Props = {
  display: number,
  showOperation: string
}

export default function display({ display, showOperation }: Props) {
  return (
    <>
      <div id="display" className="output">
        <div className="current-operand">
          { display } { showOperation }
        </div>
      </div>
    </>
  )
}