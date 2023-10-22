const Form = () => {
  const inputClasses: Array<string> = [
    "w-full",
    "px-4",
    "py-3",
    "border",
    "mt-1",
  ];

  return (
    <section className="p-5 bg-gray-100 w-full">
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

          <div className="mb-3 flex gap-2">
            <input type="checkbox" id="multiple" />

            <label className="text-gray-700" htmlFor="multiple">
              Multiple of 10
            </label>
          </div>

          <div className="mt-4">
            <button
              className="bg-gray-900 text-white px-6 py-3 hover:bg-gray-700 transition-colors ease-in"
              type="submit"
            >
              Compute.
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
