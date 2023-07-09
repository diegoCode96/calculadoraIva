import { useState } from "react";
import { motion } from "framer-motion";

import "./App.css";

function App() {
  const [valorProducto, setValorProducto] = useState("");
  const [items, setItems] = useState("");
  // const [iva, setIVA] = useState(0);
  const [costo, setCosto] = useState("");
  const [ganancias, setGanancias] = useState({
    30: 0,
    25: 0,
    20: 0,
    15: 0,
    10: 0,
    5: 0,
  });

  const handleReset = () => {
    setValorProducto("");
    setCosto("");
    setItems("");
    setGanancias({
      30: 0,
      25: 0,
      20: 0,
      15: 0,
      10: 0,
      5: 0,
    });
  };

  const handleInputChange = (e) => {
    setValorProducto(e.target.value);
  };

  const handleInputItem = (e) => {
    setItems(e.target.value);
  };

  // const calcularIVA = () => {
  //   const ivaCalculado = parseFloat(valorProducto) * 0.12;
  //   setIVA(ivaCalculado);
  // };

  const costoConIva = (e) => {
    e.preventDefault();
    const costoCalculado = parseFloat(valorProducto) * 0.12;
    const valor = parseFloat(valorProducto) + costoCalculado;
    const itemsValor = valor / parseFloat(items);
    setCosto(itemsValor.toFixed(2));
  };

  const calcularGanancias = () => {
    const valor = costo;
    console.log(valor);

    const gananciasCalculadas = {
      30: valor / 0.7692,
      25: valor / 0.8,
      20: valor / 0.833,
      15: valor / 0.8695,
      10: valor / 0.909,
      5: valor / 0.9523,
    };
    setGanancias(gananciasCalculadas);
  };

  return (
    <main className="min-w-screen min-h-screen bg-gradient-to-r from-[#20002c] to-[#cbb4d4] grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2">
      <section className="flex flex-col gap-8 p-4">
        <h1 className="text-2xl -pt-16 sm:pt-4 sm:text-5xl text-gray-200 uppercase text-center font-bold">
          Calculadora de IVA y Ganancias
        </h1>

        <form className="col-[1] grid grid-cols-[2fr_1fr] gap-4 p-2">
          <label className="place-self-end items-center sm:place-self-end text-gray-200 text-lg sm:text-xl capitalize font-semibold">
            Valor del producto:
          </label>
          <input
            className="place-self-center py-2 px-2 w-[8rem] h-[3rem] rounded-lg text-gray-900 font-bold text-lg"
            type="number"
            value={valorProducto}
            onChange={handleInputChange}
            required
          />

          <label className="place-self-end text-gray-200 items-center text-lg sm:text-xl capitalize font-semibold">
            items:
          </label>
          <input
            className="place-self-center py-2 px-2 w-[8rem] h-[3rem] rounded-lg text-gray-900 font-bold text-lg"
            type="number"
            value={items}
            onChange={handleInputItem}
            required
          />

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-purple-900 w-[10rem] p-4 place-self-center shadow-xl text-gray-200 uppercase sm:ml-14 font-bold mt-6 rounded-xl"
            onClick={costoConIva}
          >
            Costo
          </motion.button>
          <div className="flex flex-col justify-center items-center">
            <p className="cols-[2] text-gray-300 p-2 ">Costo con iva: </p>
            <motion.span
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
              className="text-gray-200 text-5xl font-bold text-center"
            >
              ${costo}
            </motion.span>
          </div>
        </form>
      </section>
      <section className="flex justify-center sm:justify-end col-[1] sm:col-auto row-[1] sm:row-auto">
        <div className="-mt-5">
          <img className="w-[12rem] sm:w-[20rem]" src="images/fondo.png" alt="" />
        </div>
      </section>
      {/* <button onClick={calcularIVA}>Calcular IVA (12%)</button> */}
      <div className="sm:col-span-2 grid grid-cols-1 sm:grid-cols-[1fr_3fr]  ">
        <div className="flex flex-col place-items-center sm:place-items-end pt-5">
          <h2 className=" text-gray-200 text-3xl ">Precio de Venta</h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-purple-900 w-[10rem] p-4 shadow-xl text-gray-200 uppercase font-bold mt-6 rounded-xl"
            onClick={calcularGanancias}
          >
            Precios
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-purple-900 w-[10rem] p-4 shadow-xl text-gray-200 uppercase font-bold mt-6 rounded-xl"
            onClick={handleReset}
          >
            Reset
          </motion.button>
        </div>

        {/* 
      <p>IVA (12%): {iva}</p> */}

        <ul className="px-5 mt-4 sm:mt-[5rem] flex gap-5 flex-wrap justify-center sm:justify-normal items-center">
        <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-[10rem] h-[10rem] flex flex-col justify-center items-center gap-4 bg-gray-400/10 rounded-xl shadow-lg hover:bg-purple-500/20"
          >
            <span className="text-gray-300 text-xl ">Precio tienda</span>{" "}
            <span className="text-gray-300 font-bold text-lg">
              <span className="font-medium">Ganancia</span> 30%
            </span>
            <span className="text-gray-200 font-bold text-3xl">
              ${ganancias["30"].toFixed(2)}
            </span>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-[10rem] h-[10rem] flex flex-col justify-center items-center gap-4 bg-gray-400/10 rounded-xl shadow-lg hover:bg-purple-500/20"
          >
            <span className="text-gray-300 text-xl ">Precio tienda</span>{" "}
            <span className="text-gray-300 font-bold text-lg">
              <span className="font-medium">Ganancia</span> 25%
            </span>
            <span className="text-gray-200 font-bold text-3xl">
              ${ganancias["25"].toFixed(2)}
            </span>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-[10rem] h-[10rem] flex flex-col justify-center items-center gap-4 bg-gray-400/10 rounded-xl shadow-lg"
          >
            <span className="text-gray-300 text-xl ">Precio tienda</span>{" "}
            <span className="text-gray-300 font-bold text-lg">
              <span className="font-medium">Ganancia</span> 20%
            </span>
            <span className="text-gray-200 font-bold text-3xl">
              ${ganancias["20"].toFixed(2)}
            </span>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-[10rem] h-[10rem] flex flex-col justify-center items-center gap-4 bg-gray-400/10 rounded-xl shadow-lg"
          >
            <span className="text-gray-300 text-xl ">Precio tienda</span>{" "}
            <span className="text-gray-300 font-bold text-lg">
              <span className="font-medium">Ganancia</span> 15%
            </span>
            <span className="text-gray-200 font-bold text-3xl">
              ${ganancias["15"].toFixed(2)}
            </span>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-[10rem] h-[10rem] flex flex-col justify-center items-center gap-4 bg-gray-400/10 rounded-xl shadow-lg hover:bg-purple-500/20"
          >
            <span className="text-gray-300 text-xl ">Precio bulto</span>{" "}
            <span className="text-gray-300 font-bold text-lg">
              <span className="font-medium">Ganancia</span> 10%
            </span>
            <span className="text-gray-200 font-bold text-3xl">
              ${ganancias["10"].toFixed(2)}
            </span>
          </motion.li>

          <motion.li
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-[10rem] h-[10rem] flex flex-col justify-center items-center gap-4 bg-gray-400/10 rounded-xl shadow-lg"
          >
            <span className="text-gray-300 text-xl ">Precio bulto</span>{" "}
            <span className="text-gray-300 font-bold text-lg">
              <span className="font-medium">Ganancia</span> 5%
            </span>
            <span className="text-gray-200 font-bold text-3xl">
              ${ganancias["5"].toFixed(2)}
            </span>
          </motion.li>
        </ul>
        <motion.footer whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <p className="text-gray-200/30 px-4">
            Desarrollado por :
            <a
              className="font-bold text-gray-100/50 underline"
              href="https://portfoliodiegodev.netlify.app/"
              target="_blank"
            >
              {" "}
              Diego dev👽
            </a>
          </p>
        </motion.footer>
      </div>
    </main>
  );
}
export default App;
