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

function Student(props) {
  const style = { width: "95%", height: "200px", marginLeft: "20px" };
  return (
    <div style={style}>
      <h2 className="dash-title">{props.title}</h2>
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
            data={props.studentData}
            x="studentData.project"
            y={["rating"]}
          />
          <VictoryBar
            barRatio={1}
            barWidth={6}
            data={props.studentData}
            x="studentData.project"
            y={["difficulty"]}
          />
        </VictoryGroup>
      </VictoryChart>
    </div>
  );
}

export default Student;
