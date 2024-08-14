import { useState, useEffect } from "react"

import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {
    const initialOrder=()=>{
        const localStorageOrden=localStorage.getItem('orden')
        return localStorageOrden ? JSON.parse(localStorageOrden) : []
      }
    
    const [orden, setOrden] = useState<OrderItem[]>(initialOrder)
    const [tip,setTip]=useState(0)
    useEffect(()=>{
        localStorage.setItem('orden',JSON.stringify(orden))//cada que cambie cart ejecuta una funcion 
      },[orden])
    const addItem = (item: MenuItem) => {
        const itemExist=orden.find(orderitem=>orderitem.id===item.id)
        if (itemExist){
            console.log('Ya existe')
            const updateOrder = orden.map(orderItem=>orderItem.id===item.id ?{...orderItem,quantity:orderItem.quantity+1} : orderItem)
            setOrden(updateOrder)
        }else{
            const newItem: OrderItem = { ...item, quantity: 1 }
            setOrden([...orden, newItem])
        }
    }
    const removeItem=(id: OrderItem['id'])=>{
        setOrden(orden.filter(item => item.id !==id))
    }
    const placeOrder=()=>{
        setOrden([])
        setTip(0)
    }
    return {
        orden,
        tip,
        setTip,
        addItem,
        placeOrder,
        removeItem,
    }

}
