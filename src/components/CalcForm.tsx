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

function CalcForm({ children }: { children: React.ReactElement }) {
  const [result, dispatch] = useFormState(calculate, undefined);

  return (
    <>
      <form action={dispatch} className="flex flex-col gap-5">
        {children}

        <SubmitButton />
      </form>

      {result && result?.length !== 0 && (
        <>
          <section className="text-center text-gray-600">
            <h2 className="text-sm font-bold mt-10">
              Días Totales {result?.toReversed()[0]["Día No."]}
            </h2>
            <h2 className="text-sm font-bold">
              Ganancias Totales {result?.toReversed()[0]["Ganancia"]} Aprox.
            </h2>
            <h2 className="text-sm font-bold">
              Capital Final {result?.toReversed()[0]["Capital Final"]} Aprox.
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
