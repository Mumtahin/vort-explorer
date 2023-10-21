import { ResponsivePie } from '@nivo/pie';
import { Data, PieData } from '../../types';

interface Props {
  data: Data;
}

export const Pie = ({ data }: Props) => {
  return (
    <ResponsivePie
      data={data as any as PieData}
      margin={{ top: 20, right: 60, bottom: 40, left: 60 }}
      innerRadius={0.5}
      padAngle={1.2}
      cornerRadius={5}
      activeOuterRadiusOffset={8}
      colors={{ scheme: 'purple_blue' }}
      borderWidth={1}
      borderColor={{
        from: 'color',
        modifiers: [
          [
            'brighter',
            0.2
          ]
        ]
      }}
      enableArcLinkLabels={false}
    // arcLinkLabelsTextColor='#ffffff'
    // onClick={(data) => {
    //   filterMapByChartItem(data["id"]);
    // }}
    />

  );

};
