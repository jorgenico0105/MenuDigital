import {  OrderItem } from "../types"
import { FormatCurrency } from "../helpers"
type orderContentProps = {
    orden: OrderItem[];// Añadimos 'addItem' a las props
    removeItem: (id:OrderItem['id']) => void;
}
export default function Ordercontents({ orden,removeItem }: orderContentProps) {
    return (
        <div>
            <h2 className='font-black text-4xl'> Consumo </h2>
            <div className="space-y-3 mt-10">
                {orden.length === 0 ?
                    <p className="text-center">No hay Productos pedidos</p>
                    : (orden.map(item=>(
                        <div key={item.id} className="flex justify-between items-center border-t border-gray-100 py-5 last-of-type:border-b">
                            <div>    
                                <p className="text-lg">{item.name} - {FormatCurrency(item.price)}</p>
                                <p className="font-black">
                                    Cantidad: {item.quantity}-{FormatCurrency(item.quantity*item.price)}
                                </p>
                                </div>    
                            <button onClick={()=>removeItem(item.id)} className="bg-red-500 h-8 w-8 rounded-full hover:bg-red-700 text-white font-black">
                                X
                            </button>
                        </div>
                        
                    )))
                }
            </div>
        </div>
    )
}
