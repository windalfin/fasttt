import React, { useRef, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SvgChart, SVGRenderer } from '@wuba/react-native-echarts';
import * as echarts from 'echarts/core';
import {
    GaugeChart
} from 'echarts/charts';

import { useTheme } from '@/hooks';

echarts.use([
    GaugeChart,
    SVGRenderer,
]);

const E_HEIGHT = 300;
const E_WIDTH = 300;

function FastingProgressGauge({ progress, isFasting, elapsedSeconds, getCurrentStage }) {
    const { Colors } = useTheme();
    const chartRef = useRef<any>(null);

    const formatTime = (seconds: number) => {
        seconds = Math.floor(seconds);
        const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
        const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
        const s = (seconds % 60).toString().padStart(2, '0');
        return `${h}:${m}:${s}`;
    };

    const option = {
        series: [
            {
                name: 'Fasting Progress',
                type: 'gauge',
                startAngle: 90,
                endAngle: -270,
                pointer: {
                    show: false
                },
                detail: {
                    formatter: `${formatTime(elapsedSeconds)}\n${getCurrentStage(progress * 2880)}`,
                    fontSize: 20,
                    offsetCenter: [0, '60%']
                },
                data: [{
                    value: progress * 100,
                    // name: 'Progress',
                    detail: {
                        valueAnimation: true,
                        offsetCenter: ['0%', '-20%']
                    }
                }],
                axisLine: {
                    lineStyle: {
                        color: isFasting ? [[0.0, Colors.progressCircleColor], [1, Colors.progressCircleBackgroundColorActive]] : [[0.0, Colors.progressCircleColor], [1, Colors.progressCircleBackgroundColorInactive]],
                        width: 30
                    }
                },
                splitLine: {
                    show: false,
                    distance: 0,
                    length: 10
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false,
                    distance: 50
                },
                progress: {
                    show: true,
                    overlap: false,
                    roundCap: true,
                    clip: false,
                    itemStyle: {
                        borderWidth: 1,
                        borderColor: '#464646'
                    }
                },
            }
        ]
    };

    const [chartInstance, setChartInstance] = useState(null);

    // Initialization
    useEffect(() => {
        if (chartRef.current && !chartInstance) {
            const chart = echarts.init(chartRef.current, 'light', {
                renderer: 'svg',
                width: E_WIDTH,
                height: E_HEIGHT,
            });
            setChartInstance(chart); // Store the chart instance in the state
        }
    }, []);

    // Data Update
    useEffect(() => {
        if (chartInstance) {
            chartInstance.setOption(option);
        }
    }, [progress, isFasting, elapsedSeconds, chartInstance]);

    return (
        <View style={styles.chartContainer}>
            <SvgChart ref={chartRef} />
        </View>
    );
};

const styles = StyleSheet.create({
    chartContainer: {
        //     flex: 1,
        //     justifyContent: 'center',
        //     alignItems: 	'center'
    }
});

export default FastingProgressGauge;
