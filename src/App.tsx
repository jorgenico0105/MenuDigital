
import MenItem from "./components/MenItem"
import Ordercontents from "./components/Ordercontents";
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
import OrderTotal from "./components/OrderTotal";
import TipPercentege from "./components/TipPercentege";

function App() {
  const { orden,tip,setTip,addItem,removeItem,placeOrder } = useOrder();

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">Calculadora de Propinas y Consumo</h1>
      </header>
      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="font-black text-4xl">Menu</h2>
          <div className="space-y-3 mt-10">
            {menuItems.map(item => (
              <MenItem
                key={item.id}
                item={item}
                addItem={addItem} // Pasa la función correctamente
              />
            ))}
          </div>
        </div> 
        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
          <Ordercontents
          orden={orden}
          removeItem={removeItem}
          >
          </Ordercontents>
          <TipPercentege
          setTip={setTip}
          tip={tip}
          >

          </TipPercentege>
          <OrderTotal
          orden={orden}
          tip={tip}
          placeOrder={placeOrder}
          >
          </OrderTotal>
        </div>
      </main>
    </>
  )
}

export default App;
