import { differenceInMinutes, getMinutes } from "date-fns";
import { Line, Rect } from "react-konva";
import CenteredText from "./centered-text";

const LINE_HEIGHT = 30;
const PADDING = 5;

type Props = {
  x: number;
  y: number;
  timeLineStart: Date;
  startDate: Date;
  endDate: Date;
  timeUnits: number;
  height: number;
};

const TimeBar = ({
  x,
  y,
  timeLineStart,
  startDate,
  endDate,
  timeUnits,
  height,
}: Props) => {
  const barStartX =
    differenceInMinutes(startDate, timeLineStart) * timeUnits + x;
  const width = differenceInMinutes(endDate, startDate) * timeUnits;

  return (
    <>
      <Rect x={barStartX} y={y} width={width} height={height} fill={"grey"} />
      <Line
        points={[barStartX, y, barStartX, LINE_HEIGHT + y]}
        stroke={"black"}
        strokeWidth={2}
      />
      <CenteredText
        x={barStartX}
        y={LINE_HEIGHT + PADDING + y}
        text={
          startDate.getHours().toString() +
          ":" +
          (getMinutes(startDate) < 10 ? "0" : "") +
          getMinutes(startDate).toString()
        }
      />
      <Line
        points={[barStartX + width, y, barStartX + width, LINE_HEIGHT + y]}
        stroke={"black"}
        strokeWidth={2}
      />
      <CenteredText
        x={barStartX + width}
        y={LINE_HEIGHT + PADDING + y}
        text={
          endDate.getHours().toString() +
          ":" +
          (getMinutes(endDate) < 10 ? "0" : "") +
          getMinutes(endDate).toString()
        }
      />
    </>
  );
};

export default TimeBar;
