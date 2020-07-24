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

class StudentOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      rating: true,
      difficulty: true,
    };
  }

  handleDifficulty = () => {
    if (this.state.difficulty === true) {
      this.setState({
        difficulty: false,
      });
    } else {
      this.setState({
        difficulty: true,
      });
    }
  };

  handleRating = () => {
    if (this.state.rating === true) {
      this.setState({
        rating: false,
      });
    } else {
      this.setState({
        rating: true,
      });
    }
  };

  render() {
    const difficultyBar = this.state.difficulty ? (
      <VictoryBar
        style={{
          data: { fill: "#c43a31" },
        }}
        barRatio={1}
        barWidth={6}
        data={this.props.difficultyList}
        x="data.project"
        y={["difficulty"]}
      />
    ) : null;

    const ratingBar = this.state.rating ? (
      <VictoryBar
        style={{
          data: { fill: "#ADFF2F" },
        }}
        barRatio={1}
        barWidth={6}
        data={this.props.ratingList}
        x="data.project"
        y={["rating"]}
      />
    ) : null;

    const style = { width: "95%", height: "200px", marginLeft: "20px" };
    return (
      <div style={style}>
        <h2 className="dash-title">Overview all students</h2>

        <label>
          <input
            type="checkbox"
            name="difficulty"
            checked={this.state.difficulty.value}
            onClick={() => this.handleDifficulty()}
          />{" "}
          Hide difficulty
        </label>

        <label>
          <input
            type="checkbox"
            name="rating"
            checked={this.state.rating.value}
            onClick={() => this.handleRating()}
          />{" "}
          Hide rating
        </label>

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
            tickValues={this.props.projectsList}
            tickLabelComponent={
              <VictoryLabel
                angle={45}
                verticalAnchor="middle"
                textAnchor="start"
              />
            }
            fixLabelOverlap
          />
          <VictoryGroup offset={10} colorScale={"qualitative"}>
            {ratingBar}
            {difficultyBar}
          </VictoryGroup>
        </VictoryChart>
      </div>
    );
  }
}
export default StudentOverview;
