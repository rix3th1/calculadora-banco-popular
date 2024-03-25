import CalcForm from "@/components/CalcForm";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center flex-col">
      <Image
        className="mt-14 m-10"
        src="/bp-logotipo-horizontal.svg"
        alt="logo"
        width={250}
        height={250}
      />

      <h1 className="font-normal lg:text-xl mb-5 text-center sm:text-2xl text-zinc-600">
        Simulador de capital de inversión{" "}
        <span className="font-bold text-[#11B719]">Banco Popular</span>
      </h1>

      <CalcForm />
    </main>
  );
}
