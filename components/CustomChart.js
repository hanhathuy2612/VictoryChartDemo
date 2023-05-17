import React, {useEffect, useRef} from 'react';
import * as echarts from 'echarts/core';
import {LineChart, ScatterChart} from 'echarts/charts';
import {GraphicComponent, GridComponent, TitleComponent, TooltipComponent} from 'echarts/components';
import {SkiaChart, SVGRenderer} from 'wrn-echarts';

echarts.use([
    SVGRenderer,
    LineChart,
    GridComponent,
    GraphicComponent,
    ScatterChart,
    TitleComponent,
    TooltipComponent
]);


const CustomChart = () => {
    const skiaRef = useRef(null);
    const option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                name: 'My Series',
                type: 'scatter',
                data: [120, 200, 150, 80, 70, 110, 130],
                // symbol: 'image://https://icons.iconarchive.com/icons/google/noto-emoji-animals-nature/256/22221-cat-icon.png',
                symbol: 'triangle',
                symbolSize: 20
            },
        ],
    }
    useEffect(() => {

        let chart;
        if (skiaRef.current) {
            chart = echarts.init(skiaRef.current, 'light', {
                renderer: 'svg',
                width: 400,
                height: 400,
            });
            chart.setOption(option);
        }
        return () => chart?.dispose();
    }, [option]);

    return <SkiaChart ref={skiaRef}/>;
};

export default CustomChart;
