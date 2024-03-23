"use client";

import { calc } from "@/libs/calc";
import { useState } from "react";

function Calc() {
  const [formData, setFormData] = useState({
    capital: "",
    days: "",
  });

  const [version, setVersion] = useState<"v1" | "v2">("v2");

  const [infoCapital, setInfoCapital] = useState([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setInfoCapital(calc(+formData.capital, +formData.days, version) as any);
  };

  return (
    <main className="flex justify-center items-center flex-col">
      <h1 className="font-bold lg:text-4xl mt-10 mb-5 text-center sm:text-2xl">
        Calculadora de capital Banco Popular
      </h1>

      <div className="flex items-center justify-center gap-2 my-5">
        <label
          htmlFor="version"
          className="block text-sm font-medium text-gray-900 dark:text-white"
        >
          Versión
        </label>
        <select
          id="version"
          name="version"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={(e) => setVersion(e.target.value as any)}
          value={version}
        >
          <option value="v1">1</option>
          <option value="v2">2</option>
        </select>
      </div>

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
          <h2 className="text-sm font-bold mt-10">
            Días Totales {formData.days}
          </h2>
          <h2 className="text-sm font-bold">
            Ganancias Totales {infoCapital.toReversed()[0]["Ganancia"]} Aprox.
          </h2>
          <h2 className="text-sm font-bold">
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
