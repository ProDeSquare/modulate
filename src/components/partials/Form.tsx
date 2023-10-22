const Form = () => {
  const inputClasses: Array<string> = [
    "w-full",
    "px-4",
    "py-3",
    "border",
    "border-teal-100",
    "mt-1",
  ];

  return (
    <>
      <section className="p-5 bg-teal-50 flex-1 md:w-6/12">
        <h3 className="text-2xl md:text-3xl font-bold border-b md:border-none pb-1 md:pb-0">
          Calculate
        </h3>

        <p className="my-3 leading-relaxed">
          Fill in the form below to compute the adjusted value after adding or
          subtracting a percentage from your number. Get precise results
          instantly!
        </p>

        <div>
          <form action="#">
            <div className="mb-3">
              <label className="text-gray-700" htmlFor="percentile">
                Percentile (%)
              </label>

              <input
                type="number"
                placeholder="75"
                className={inputClasses.join(" ")}
                id="percentile"
              />
            </div>

            <div className="mb-3">
              <label className="text-gray-700" htmlFor="price">
                Price/Value
              </label>

              <input
                type="number"
                placeholder="2390"
                className={inputClasses.join(" ")}
                id="price"
              />
            </div>

            <div className="flex gap-4">
              <div className="mb-3 flex gap-2">
                <input type="checkbox" id="multiple" />

                <label className="text-gray-700" htmlFor="multiple">
                  Multiple of 10
                </label>
              </div>

              <div className="mb-3 flex gap-2">
                <input type="checkbox" id="round" />

                <label className="text-gray-700" htmlFor="round">
                  Round figure
                </label>
              </div>
            </div>

            <div className="mt-4">
              <button
                className="bg-gray-900 text-white px-6 py-3 hover:bg-teal-700 transition-colors ease-in"
                type="submit"
              >
                Compute
                <span className="text-teal-500 font-bold">.</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="flex-1 p-5">
        <h3 className="text-3xl md:text-4xl font-bold">
          Result
          <span className="text-teal-500">.</span>
        </h3>

        <p className="text-6xl flex tracking-tight mt-2">
          <span className="text-gray-700 truncate">--</span>
          <span className="text-gray-300 select-none">/-</span>
        </p>
      </section>
    </>
  );
};

export default Form;
