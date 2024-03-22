"use client";

import { calc } from "@/libs/calc";
import { useState } from "react";

function Calc() {
  const [formData, setFormData] = useState({
    capital: "",
    days: "",
  });

  const [infoCapital, setInfoCapital] = useState([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setInfoCapital(calc(+formData.capital, +formData.days) as any);
  };

  return (
    <main className="flex justify-center items-center flex-col">
      <h1 className="font-bold lg:text-4xl my-10 text-center sm:text-2xl">
        Calculadora de capital Banco Popular
      </h1>

      <form onSubmit={onSubmit} className="flex flex-col gap-5">
        <input
          type="number"
          className="p-2 rounded-md text-black"
          name="capital"
          placeholder="Ingrese el capital inicial"
          onChange={onChange}
          autoFocus
          required
        />
        <input
          type="number"
          className="p-2 rounded-md text-black"
          name="days"
          placeholder="Ingrese el número de días"
          onChange={onChange}
          required
        />

        <button className="bg-blue-500 text-white p-2 rounded-md" type="submit">
          Calcular
        </button>
      </form>

      {formData.capital && formData.days && infoCapital.length !== 0 && (
        <>
          <h2 className="text-2xl font-bold mt-10">
            Días Totales {formData.days}
          </h2>
          <h2 className="text-2xl font-bold">
            Ganancias Totales {infoCapital.toReversed()[0]["Ganancia"]} Aprox.
          </h2>
          <h2 className="text-2xl font-bold">
            Capital Final {infoCapital.toReversed()[0]["Capital Final"]} Aprox.
          </h2>
        </>
      )}
      {infoCapital.length !== 0 && (
        <section className="mt-10 mx-20 bg-slate-900 rounded-lg p-5">
          {infoCapital.map((info: any, i: number) => (
            <div key={i} className="flex flex-col">
              <pre>{JSON.stringify(info, null, 2)}</pre>
            </div>
          ))}
        </section>
      )}
    </main>
  );
}

export default Calc;
