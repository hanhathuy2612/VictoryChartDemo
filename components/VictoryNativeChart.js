import React from 'react';
import {
    VictoryArea,
    VictoryAxis,
    VictoryChart,
    VictoryScatter,
    VictoryTheme, VictoryVoronoiContainer,
    VictoryZoomContainer
} from "victory-native";
import {Image, StyleSheet, View} from "react-native";
import {lockAsync, OrientationLock} from 'expo-screen-orientation';

lockAsync(OrientationLock.LANDSCAPE).then();

const point = (x, y, img) => {
    return {
        x: x,
        y: y,
        image: img
    };
}

const data = [
    point(30, 20, 'https://www.softexia.com/wp-content/uploads/2019/04/Apache-HTTP-Server.png'),
    point(20, 20, 'https://cdn.iconscout.com/icon/free/png-512/free-react-1-282599.png'),
    point(32, 34, 'data:image/jpeg;base64,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'),
    point(23, 50, 'data:image/jpeg;base64,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')
];
const MyGrid = () => {
    const diagonalPath = ({x, y}) => `M ${x} ${y} L ${x + 10} ${y - 10}`;

    return (
        <View style={styles.grid}>
            <VictoryAxis crossAxis/>
            <VictoryAxis dependentAxis/>
            <View style={styles.diagonalGrid}>
                {[...Array(6)].map((_, i) => (
                    <View
                        key={i}
                        style={[
                            styles.diagonalLine,
                            {transform: [{translateX: i * 50}]},
                        ]}
                    />
                ))}
            </View>
        </View>
    );
};

const VictoryNativeChart = () => {
    const diagonalPath = ({x, y}) => `M ${x} ${y} L ${x + 10} ${y - 10}`;
    return (
        <View style={styles.container}>
            <View>

            </View>
            <VictoryChart
                theme={VictoryTheme.material}
                containerComponent={
                    <VictoryZoomContainer/>
                }
                domain={{x: [0, 60], y: [0, 60]}}
                width={600}
                height={300}
            >
                <VictoryAxis
                    crossAxis
                    label="==================== X ===================="
                    style={{
                        axisLabel: {padding: 30},
                        tickLabels: {fontSize: 10}
                    }}
                    tickFormat={(t) => `${Math.round(t)} %`}
                />
                <VictoryAxis
                    dependentAxis
                    label="==================== Y ===================="
                    style={{
                        ticks: {stroke: "red", size: 5},
                        axisLabel: {padding: 40},
                        grid: {stroke: ({tick}) => tick === 0 || tick === 10 ? "yellow" : tick === 11 || tick === 20 ? "red" : 'orange'}
                    }}
                    tickFormat={(t) => `${Math.round(t)} %`}
                />

                <VictoryAxis
                    crossAxis
                    orientation='top'
                    tickFormat={(t) => `${Math.round(t)} %`}
                />

                <VictoryScatter
                    dataComponent={<CatPoint/>}
                    data={data}
                    size={10}
                >
                </VictoryScatter>
                <VictoryArea
                    data={[
                        { x: 0, y: 10, y0: 0 },
                        { x: 60, y: 10, y0: 0 },
                    ]}
                    style={{
                        data: { fill: "yellow" }
                    }}
                />
                <VictoryArea
                    data={[
                        { x: 0, y: 20, y0: 10 },
                        { x: 60, y: 20, y0: 10 }
                    ]}
                    style={{
                        data: { fill: "#c43a31" }
                    }}/>
            </VictoryChart>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fdfdfd",
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 1,
        flexDirection: 'row',
        paddingHorizontal: 20
    },
    title: {
        fontSize: 12
    },
    grid: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
    },
    diagonalGrid: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        transform: [{rotate: '45deg'}],
    },
    diagonalLine: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: 2,
        height: '100%',
        backgroundColor: '#ccc',
    },
});

class CatPoint extends React.Component {
    render() {
        const {x, y, datum} = this.props;
        return (
            <Image source={{
                uri: datum.image,
                width: 50,
                height: 50
            }}
                   style={{
                       position: 'absolute',
                       top: y,
                       left: x,
                       transform: [{translateX: -25}, {translateY: -25}]
                   }}
            ></Image>
        );
    }
}

export default VictoryNativeChart;
