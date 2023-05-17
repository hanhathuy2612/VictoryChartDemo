import React from 'react';
import {View} from 'react-native';
import {ECharts} from 'react-native-echarts-wrapper';

const CustomEChartV3 = () => {
    const option = {
        title: {
            text: 'My Chart',
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                type: 'line',
                data: [820, 932, 901, 934, 1290, 1330, 1320],
            },
        ],
    };

    return (
        <View>
            <ECharts option={option}/>
        </View>
    );
};

export default CustomEChartV3;
