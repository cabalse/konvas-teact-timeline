import { addMinutes, differenceInMinutes, subMinutes } from "date-fns";
import { Layer, Stage } from "react-konva";
import TimeBar from "./time-bar";
import TimeAxis from "./time-axis";

const PADDING = 20;
const StartX = PADDING;

type Props = {
  width: number;
  height: number;
  startDate: Date;
  endDate: Date;
  data: { start1: Date; end1: Date; start2: Date; end2: Date };
};

const TimeLine = ({ width, height, startDate, endDate, data }: Props) => {
  const timeLine = {
    start: subMinutes(startDate, 30),
    end: addMinutes(endDate, 30),
  };
  const minutes = differenceInMinutes(timeLine.end, timeLine.start);
  const timeUnits = (width - PADDING * 2) / minutes;

  return (
    <Stage width={width} height={height}>
      <Layer>
        <TimeBar
          x={StartX}
          y={0}
          timeLineStart={startDate}
          startDate={data.start1}
          endDate={data.end1}
          timeUnits={timeUnits}
          height={20}
        />
        <TimeBar
          x={StartX}
          y={50}
          timeLineStart={startDate}
          startDate={data.start2}
          endDate={data.end2}
          timeUnits={timeUnits}
          height={20}
        />
        <TimeAxis
          x={StartX}
          y={100}
          startTime={startDate}
          endTime={endDate}
          timeUnits={timeUnits}
        />
      </Layer>
    </Stage>
  );
};

export default TimeLine;
