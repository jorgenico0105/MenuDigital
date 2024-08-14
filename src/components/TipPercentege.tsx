import { Dispatch,SetStateAction } from "react"
const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]
type setTipProps={
   setTip: Dispatch<SetStateAction<number>>
   tip:number
}
export default function TipPercentege({setTip,tip}:setTipProps) {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>
      <form>
        {tipOptions.map(tipOp=>(
          <div key={tipOp.id} className="flex gap-2">
            <label htmlFor=" " id={tipOp.id}>{tipOp.label}</label>
            <input type="radio" id={tipOp.id} value={tipOp.value} name="tip" onChange={e=>setTip(+e.target.value)}checked={tipOp.value===tip}/>
          </div>
        ))}
      </form>
    </div>
  )
}
