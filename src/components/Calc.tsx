"use client";

import { calculate } from "@/libs/actions";
import { useFormState, useFormStatus } from "react-dom";

function Calc({ children }: { children: React.ReactElement }) {
  const [result, dispatch] = useFormState(calculate, undefined);
  const { pending } = useFormStatus();

  return (
    <>
      <form action={dispatch} className="flex flex-col gap-5">
        {children}

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md disabled:bg-blue-400 disabled:cursor-not-allowed"
          aria-disabled={pending}
        >
          {pending ? "Cargando..." : "Calcular"}
        </button>
      </form>

      {result && result?.length !== 0 && (
        <>
          <h2 className="text-sm font-bold mt-10">
            Días Totales {result?.toReversed()[0]["Día No."]}
          </h2>
          <h2 className="text-sm font-bold">
            Ganancias Totales {result?.toReversed()[0]["Ganancia"]} Aprox.
          </h2>
          <h2 className="text-sm font-bold">
            Capital Final {result?.toReversed()[0]["Capital Final"]} Aprox.
          </h2>

          <section className="mt-10 mx-20 bg-slate-900 rounded-lg p-5">
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

export default Calc;
