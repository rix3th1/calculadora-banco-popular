import Calc from "@/components/Calc";
import FormInputs from "@/components/FormInputs";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col">
      <h1 className="font-bold lg:text-4xl mt-10 mb-5 text-center sm:text-2xl">
        Calculadora de capital Banco Popular
      </h1>

      <Calc>
        <FormInputs />
      </Calc>
    </main>
  );
}
