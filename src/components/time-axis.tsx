import { addMinutes } from "date-fns";
import { Line } from "react-konva";
import CenteredText from "./centered-text";

const HEIGHT = 20;
const PADDING = 5;

type Props = {
  x: number;
  y: number;
  startTime: Date;
  endTime: Date;
  timeUnits: number;
};

const TimeAxis = ({ x, y, startTime, endTime, timeUnits }: Props) => {
  const startHour = startTime.getHours();
  const endHour = addMinutes(endTime, 60).getHours();

  const hours = Array.from(
    { length: endHour - startHour + 1 },
    (_, i) => i + startHour
  );

  const quarters = Array.from(
    { length: (endHour - startHour + 1) * 4 - 3 },
    (_, i) => i + startHour
  );

  const getX = (index: number, minutes: number) => {
    return x + index * minutes * timeUnits;
  };

  return (
    <>
      {hours.map((hour, i) => (
        <>
          <CenteredText
            key={"text" + i}
            x={getX(i, 60)}
            y={y + HEIGHT + PADDING}
            text={hour.toString() + ":00"}
          />
          <Line
            key={"line" + i}
            points={[getX(i, 60), y, getX(i, 60), y + HEIGHT]}
            stroke={"black"}
            strokeWidth={2}
          />
        </>
      ))}
      {quarters.map((_, i) => (
        <Line
          key={"quarter" + i}
          points={[getX(i, 15), y + 2, getX(i, 15), y + HEIGHT - 2]}
          stroke={"black"}
          strokeWidth={1}
        />
      ))}
      <Line
        points={[
          x,
          y + HEIGHT / 2,
          x + (hours.length - 1) * 60 * timeUnits,
          y + HEIGHT / 2,
        ]}
        stroke={"black"}
        strokeWidth={2}
      />
    </>
  );
};

export default TimeAxis;
