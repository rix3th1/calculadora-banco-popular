"use client";

import { calculate } from "@/libs/actions";
import { useFormState, useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-[#11B719] hover:bg-[#11B719]/90 transition-colors text-white p-2 rounded-md disabled:opacity-90 disabled:cursor-not-allowed text-sm"
      disabled={pending}
    >
      {pending ? "Calculando..." : "Calcular"}
    </button>
  );
}

function CalcForm() {
  const [state, dispatch] = useFormState(calculate, undefined);
  const result = state?.result;
  const version = state?.version;

  return (
    <>
      <form action={dispatch} className="flex flex-col gap-5">
        <div className="flex items-center justify-center gap-2 my-5">
          <label
            htmlFor="version"
            className="block text-sm font-medium text-gray-900"
          >
            Versión
          </label>
          <select
            id="version"
            name="version"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block"
            defaultValue="v2"
          >
            <option value="v1">1</option>
            <option value="v2">2</option>
          </select>

          <a
            href={`/api/${version || "v2"}`}
            className="text-sm text-[#11B719] underline"
          >
            Mostrar
          </a>
        </div>

        <input
          type="number"
          className="font-light rounded-lg border-0 p-3 text-gray-900 ring-1 placeholder:text-gray-400 placeholder:text-sm placeholder:font-extralight ring-gray-300 focus:ring-zinc-600"
          name="capital"
          placeholder="Ingrese el capital inicial"
          max={50000000}
          autoFocus
          required
        />
        <input
          type="number"
          className="font-light rounded-lg border-0 p-3 text-gray-900 ring-1 placeholder:text-gray-400 placeholder:text-sm placeholder:font-extralight ring-gray-300 focus:ring-zinc-600"
          name="days"
          max={1826}
          placeholder="Ingrese el número de días"
          required
        />

        <SubmitButton />
      </form>

      {result && result?.length !== 0 && (
        <>
          <section className="text-center text-gray-600">
            <h2 className="text-sm font-bold mt-10">
              Días Totales{" "}
              <span className="font-bold text-[#11B719]">
                {result?.toReversed()[0]["Día No."]}
              </span>
            </h2>
            <h2 className="text-sm font-bold">
              Ganancias Totales{" "}
              <span className="font-bold text-[#11B719]">
                {result?.toReversed()[0]["Ganancia"]}
              </span>{" "}
              Aprox.
            </h2>
            <h2 className="text-sm font-bold">
              Capital Final{" "}
              <span className="font-bold text-[#11B719]">
                {result?.toReversed()[0]["Capital Final"]}
              </span>{" "}
              Aprox.
            </h2>
          </section>

          <section className="text-gray-600 mt-10 mx-20 bg-[#11B719]/10 rounded-xl p-5 selection:bg-[#11B719]/90 selection:text-white mb-10">
            {result?.map((info: any, i: number) => (
              <div key={i} className="flex flex-col">
                <pre>{JSON.stringify(info, null, 2)}</pre>
              </div>
            ))}
          </section>
        </>
      )}
    </>
  );
}

export default CalcForm;
