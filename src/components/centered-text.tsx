import Konva from "konva";
import { useEffect, useRef, useState } from "react";
import { Text } from "react-konva";

type Props = {
  text: string;
  x: number;
  y: number;
};

const CenteredText = ({ text, x, y }: Props) => {
  const ref = useRef<Konva.Text>(null);
  const [xOffset, setXOffset] = useState(x);

  useEffect(() => {
    if (!ref.current) return;
    const width = ref.current.width();
    setXOffset(width / 2);
  }, [text]);

  return (
    <Text
      key={text + x + y}
      ref={ref}
      x={x - xOffset}
      y={y}
      text={text}
      fill={"black"}
    />
  );
};

export default CenteredText;
