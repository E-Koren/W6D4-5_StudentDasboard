import React from "react";
import { VictoryBar, VictoryChart, VictoryGroup, VictoryAxis } from "victory";

function StudentOverview() {
  return (
    <div>
      <VictoryChart>
        <VictoryAxis dependentAxis />
        <VictoryAxis />
        <VictoryGroup offset={30} colorScale={"qualitative"}>
          <VictoryBar />
          <VictoryBar />
        </VictoryGroup>
      </VictoryChart>
    </div>
  );
}

export default StudentOverview;
