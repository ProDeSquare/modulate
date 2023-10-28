import format from "@/helpers/format";

type HistoryArgs = "price" | "percentile" | "computed";

type HistoryType = Record<HistoryArgs, number>;

const History = ({ history }: { history: HistoryType[] }) => {
  localStorage.setItem("history", JSON.stringify(history));

  return (
    <>
      <div className="border-t border-teal-100 md:w-8/12"></div>

      <h3 className="font-bold mt-3 md:mt-2 text-3xl md:text-4xl leading-8">
        Previous Computations<span className="text-teal-500">.</span>
      </h3>

      <div>
        <ul className="mt-3 flex flex-wrap text-teal-700 -mx-1">
          {history.map((computation: HistoryType, index: number) => (
            <li className="w-6/12" key={index}>
              <ul className="bg-teal-100 border hover:bg-teal-50 border-teal-200 transition-colors duration-300 rounded m-1 px-3 py-2 flex flex-col tracking-tight md:tracking-normal">
                <ul className="flex justify-between text-sm gap-1">
                  <li className="truncate">{computation.price}/-</li>
                  <li className="font-bold">{computation.percentile}%</li>
                </ul>

                <li className="text-xl font-bold mt-1 text-teal-800 truncate">
                  {format(computation.computed)}
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default History;
