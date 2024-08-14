import type { MenuItem } from '../types'

type MenuItemProps = {
  item: MenuItem;
  addItem: (item:MenuItem) => void;  // Añadimos 'addItem' a las props
}

export default function MenuItem({ item, addItem }: MenuItemProps) {
  return (
    <div>
      <button
        className='border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between rounded-lg'
        onClick={()=> addItem(item)}  // Ejecuta la función cuando se hace clic
        
      >
        <p>{item.name}</p>
        <p className='font-black'>${item.price}</p>
      </button>
    </div>
  )
}
