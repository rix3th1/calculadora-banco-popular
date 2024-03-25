function FormInputs() {
  return (
    <>
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

        <a href={`/api/${2}`} className="text-sm text-[#11B719] underline">
          Mostrar
        </a>
      </div>

      <input
        type="number"
        className="font-light rounded-lg border-0 p-3 text-gray-900 ring-1 placeholder:text-gray-400 placeholder:text-sm placeholder:font-extralight ring-gray-300 focus:ring-zinc-600"
        name="capital"
        placeholder="Ingrese el capital inicial"
        autoFocus
        required
      />
      <input
        type="number"
        className="font-light rounded-lg border-0 p-3 text-gray-900 ring-1 placeholder:text-gray-400 placeholder:text-sm placeholder:font-extralight ring-gray-300 focus:ring-zinc-600"
        name="days"
        placeholder="Ingrese el número de días"
        required
      />
    </>
  );
}

export default FormInputs;
