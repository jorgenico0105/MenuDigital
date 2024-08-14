import { useMemo } from "react"
import { OrderItem } from "../types"
import { FormatCurrency } from "../helpers"
type ordebTotalProps={
    orden:OrderItem[]
    tip:number
    placeOrder:() => void
}

export default function OrderTotal({orden,tip,placeOrder}:ordebTotalProps) {
    const subTotalAmount = useMemo(()=>orden.reduce((total,item)=>total+(item.quantity*item.price),0),[orden])//Se usa use memo para operaciones que requieren calculos y que solo se tiene que hacer cunado uno de los elemtos del componente cambien, esta realiza clauclos y obtinene valores mas noe stados 
    const tipAmount=useMemo(()=>subTotalAmount*tip,[tip,orden])
    const totalAmount=useMemo(()=>subTotalAmount+tipAmount,[tip,orden])
    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y Propinas: </h2>
                <p>SubTotal a Pagar: {' '}
                    <span className="font-bold">{FormatCurrency(subTotalAmount)}</span>
                </p>
                <p>Propina: {' '}
                    <span className="font-bold">{FormatCurrency(tipAmount)}</span>
                </p>
                <p className="font-bold">Total a Pagar: {' '}
                    <span className="font-bold">{FormatCurrency(totalAmount)}</span>
                </p>
            </div>
            <button className="w-full bg-black p-3 text-white mt-10 uppercase font-bold disabled:opacity-10 " disabled={totalAmount===0} onClick={()=>placeOrder()}>
                Guardar Orden
            </button>
        </>
        )
        }
