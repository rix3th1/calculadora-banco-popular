import CalcForm from "@/components/CalcForm";
import FormInputs from "@/components/FormInputs";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col">
      <h1 className="font-bold lg:text-4xl mt-10 mb-5 text-center sm:text-2xl text-zinc-700">
        Calculadora de capital Banco Popular
      </h1>

      <CalcForm>
        <FormInputs />
      </CalcForm>
    </main>
  );
}
