import { CircularProgress } from "@nextui-org/progress";

const ProgressCircle = ({percentage, label}) => {
  return (
    <div className="flex flex-col items-center gap-2">
    <CircularProgress
          classNames={{
            svg: "w-20 h-20 drop-shadow-md",
            indicator: "stroke-[#01B2F6]",
            track: "stroke-white/10",
            value: "text-3xl font-semibold text-white",
          }}
          value={percentage}
          strokeWidth={4}
          showValueLabel={false}
        />
        <h1 className="text-white font-semibold text-md">{label}</h1>
        </div>
  );
}

export default ProgressCircle