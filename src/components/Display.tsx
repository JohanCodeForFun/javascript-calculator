type Props = {
  display: number
}

export default function display({ display }: Props) {
  return (
    <>
      <div id="display" className="output">
        <div className="current-operand">
          { display }
        </div>
      </div>
    </>
  )
}