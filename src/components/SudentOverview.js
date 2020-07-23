import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryAxis,
  VictoryLabel,
  VictoryZoomContainer,
} from "victory";

const WIDTH = 1000;
const HEIGHT = 500;

function StudentOverview(props) {
  const style = { width: "95%", height: "200px", marginLeft: "20px" };
  return (
    <div style={style}>
      <h2 className="dash-title">Overview all students</h2>
      <VictoryChart
        containerComponent={<VictoryZoomContainer zoomDimension="x" />}
        width={WIDTH}
        height={HEIGHT}
      >
        <VictoryAxis
          dependentAxis
          tickValues={["1", "2", "3", "4", "5"]}
          domain={[0, 5]}
        />
        <VictoryAxis
          tickValues={props.projectsArray}
          domain={[0, 8]}
          tickLabelComponent={
            <VictoryLabel
              angle={45}
              verticalAnchor="middle"
              textAnchor="start"
            />
          }
        />
        <VictoryGroup offset={10} colorScale={"qualitative"}>
          <VictoryBar
            barRatio={1}
            barWidth={6}
            data={props.data}
            x="data.project"
            y={["rating"]}
          />
          <VictoryBar
            barRatio={1}
            barWidth={6}
            data={props.data}
            x="data.project"
            y={["difficulty"]}
          />
        </VictoryGroup>
      </VictoryChart>
    </div>
  );
}

export default StudentOverview;
