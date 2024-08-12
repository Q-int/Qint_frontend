import React from 'react';
import { ResponsivePie } from '@nivo/pie';

export const Piechart = ({ data }) => {
    const handle = {
        padClick: (data) => {
            console.log(data);
        },
        legendClick: (data) => {
            console.log(data);
        },
    };

    return (
        <div style={{ width: '600px', height: '500px', margin: '0' }}>
            <ResponsivePie
                data={data}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                padAngle={1.8}
                cornerRadius={8}
                colors={['#5BFF57', '#FF3263']}
                borderWidth={2}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor="#000000"
                arcLabelsRadiusOffset={0.55}
                arcLabel={(d) => `${d.value}%`}
                theme={{
                    labels: {
                        text: {
                            fontSize: 25,
                            fontWeight: 700,
                            fill: '#000000',
                        },
                    },
                    legends: {
                        text: {
                            fontSize: 19,
                            fontWeight: 700,
                            fill: '#000000',
                        },
                    },
                }}
                onClick={handle.padClick}
                // arcLinkLabels 관련 속성을 통해 연결된 텍스트 숨김
                arcLinkLabelsSkipAngle={360} // 모든 연결된 텍스트 숨김
                arcLinkLabelsTextColor="transparent"
                arcLinkLabelsThickness={0}
                arcLinkLabelsColor="transparent"
                legends={[
                    {
                        anchor: 'top-left',
                        direction: 'column',
                        justify: false,
                        translateX: 0,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemWidth: 80,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        symbolSize: 18,
                        symbolShape: 'circle',
                        symbolBorderColor: 'none',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000000',
                                },
                            },
                        ],
                        onClick: handle.legendClick,
                    },
                ]}
            />
        </div>
    );
};

