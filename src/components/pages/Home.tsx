import { useState, ChangeEvent, FormEvent } from "react";
import History from "@/components/partials/History";
import Result from "@/components/partials/Result";

type FormFields = {
  percentile: number;
  price: number;
};

interface ComputedValues extends FormFields {
  computed: number;
}

const Home = () => {
  const inputClasses: Array<string> = [
    "w-full",
    "px-4",
    "py-3",
    "border",
    "border-teal-100",
    "mt-1",
  ];

  const [formData, setFormData] = useState<FormFields>({
    percentile: 0,
    price: 0,
  });

  const [multipleOfTen, setMultipleOfTen] = useState<boolean>(false);
  const [computedValue, setComputedValue] = useState<number>(0);
  const [previousComputation, setPreviousComputation] = useState({
    price: 0,
    percentile: 0,
  });
  const [rounded, setRounded] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [history, setHistory] = useState<ComputedValues[]>(
    JSON.parse(localStorage.getItem("history") || "[]")
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;

    setFormData((prevData: FormFields) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const clearHistory = (): void => {
    localStorage.removeItem("history");
    setHistory([]);
  };

  const computeValue = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!formData.percentile || !formData.price || loading) return;

    try {
      setLoading(true);

      let calculated: number =
        parseFloat(formData.price.toString()) +
        (formData.price * formData.percentile) / 100;

      if (rounded) calculated = Math.floor(calculated);
      if (multipleOfTen) calculated = Math.round(calculated / 10) * 10;

      setPreviousComputation({
        price: formData.price,
        percentile: formData.percentile,
      });
      setComputedValue(calculated);

      setHistory([
        {
          price: formData.price,
          percentile: formData.percentile,
          computed: calculated,
        },
        ...history,
      ]);

      setFormData((prevData: FormFields) => ({
        ...prevData,
        price: 0,
      }));
    } catch {
      //
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="flex-1 md:w-6/12">
        <div className="p-5 bg-teal-50">
          <h3 className="text-2xl md:text-3xl font-bold border-b border-teal-100 md:border-none pb-1 md:pb-0">
            Calculate
            <span className="text-teal-500">.</span>
          </h3>

          <p className="my-3 leading-relaxed">
            Fill in the form below to compute the adjusted value after adding or
            subtracting a percentage from your number. Get precise results
            instantly!
          </p>

          <div>
            <form action="#" onSubmit={computeValue}>
              <div className="mb-3">
                <label className="text-gray-700" htmlFor="percentile">
                  Percentile (%)
                </label>

                <input
                  type="number"
                  placeholder="75"
                  className={inputClasses.join(" ")}
                  id="percentile"
                  name="percentile"
                  onChange={handleInputChange}
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
                  name="price"
                  onChange={handleInputChange}
                  value={formData.price || ""}
                />
              </div>

              <div className="flex gap-4">
                <div className="mb-3 flex gap-2">
                  <input
                    type="checkbox"
                    id="multiple"
                    name="multiple_of_10"
                    onChange={() => setMultipleOfTen(!multipleOfTen)}
                  />

                  <label className="text-gray-700" htmlFor="multiple">
                    Multiple of 10
                  </label>
                </div>

                <div className="mb-3 flex gap-2">
                  <input
                    type="checkbox"
                    id="round"
                    name="rounded"
                    onChange={() => setRounded(!rounded)}
                  />

                  <label className="text-gray-700" htmlFor="round">
                    Round figure
                  </label>
                </div>
              </div>

              <div className="mt-4">
                <button
                  className="bg-gray-900 text-white px-6 py-3 hover:bg-gray-700 transition-colors ease-in"
                  type="submit"
                >
                  {loading ? "Computing" : "Compute"}
                  <span className="text-teal-500 font-bold">.</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <div className="flex-1 p-5 md:w-6/12">
        <section>
          <Result
            price={previousComputation.price}
            percentile={previousComputation.percentile}
            computed={computedValue ? computedValue : 0}
          />
        </section>

        {history.length > 0 && (
          <section className="mt-5">
            <History history={history} />

            <button
              className="text-red-900 bg-red-200 hover:bg-red-100 px-4 py-1 mt-3 rounded border border-red-300 transition-colors duration-300"
              onClick={clearHistory}
            >
              Clear
            </button>
          </section>
        )}
      </div>
    </>
  );
};

export default Home;
