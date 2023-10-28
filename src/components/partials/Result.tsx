import format from "@/helpers/format";

type ResultProps = {
  price: number;
  computed: number;
  percentile: number;
};

const Result = ({ price, percentile, computed }: ResultProps) => (
  <>
    <h3 className="text-3xl md:text-4xl font-bold">
      Result
      <span className="text-teal-500">.</span>
    </h3>

    <p className="text-6xl flex tracking-tight mt-2">
      <span className="text-gray-700 truncate">
        {computed > 0 ? format(computed) : "--"}
      </span>
      <span className="text-gray-200 select-none">/-</span>
    </p>

    {price > 0 && (
      <p className="mt-4 text-teal-800 leading-relaxed">
        The resulting value of{" "}
        <span className="font-bold break-words">{price}</span>, computed with
        the incorporation of a percentage{" "}
        {percentile >= 0 ? "increase" : "decrease"} of{" "}
        <span className="font-bold break-words">{percentile}</span>, stands as{" "}
        <span className="font-bold break-words">{format(computed)}</span>.
      </p>
    )}
  </>
);

export default Result;
