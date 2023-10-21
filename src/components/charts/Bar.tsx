import { ResponsiveBar } from "@nivo/bar";
import { Data } from "../../types";

interface Props {
  data: Data;
}

export const Bar = ({ data }: Props) => {
  return <ResponsiveBar
    data={data}
    margin={{ top: 10, right: 30, bottom: 30, left: 30 }}
    padding={0.1}
    colors={{ scheme: 'category10' }}
    borderWidth={1}
    borderRadius={5}
    enableGridY={false}
    labelTextColor={{
      from: 'color',
      modifiers: [
        [
          'brighter',
          5
        ]
      ]
    }}
    theme={{
      textColor: '#eee'
    }}
  />;
}
