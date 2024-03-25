function FormInputs() {
  return (
    <>
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
          defaultValue="v2"
        >
          <option value="v1">1</option>
          <option value="v2">2</option>
        </select>

        <a
          href={`/api/${2}`}
          className="text-sm text-blue-600 dark:text-blue-500 underline"
        >
          Mostrar
        </a>
      </div>

      <input
        type="number"
        className="p-2 rounded-md text-black"
        name="capital"
        placeholder="Ingrese el capital inicial"
        autoFocus
        required
      />
      <input
        type="number"
        className="p-2 rounded-md text-black"
        name="days"
        placeholder="Ingrese el número de días"
        required
      />

      <button className="bg-blue-500 text-white p-2 rounded-md" type="submit">
        Calcular
      </button>
    </>
  );
}

export default FormInputs;
