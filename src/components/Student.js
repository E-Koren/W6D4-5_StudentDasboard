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

class Student extends React.Component {
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
        barRatio={1}
        barWidth={6}
        data={this.props.studentData}
        x="studentData.project"
        y={["difficulty"]}
      />
    ) : null;

    const ratingBar = this.state.rating ? (
      <VictoryBar
        barRatio={1}
        barWidth={6}
        data={this.props.studentData}
        x="studentData.project"
        y={["rating"]}
      />
    ) : null;

    const style = { width: "95%", height: "200px", marginLeft: "20px" };
    return (
      <div style={style}>
        <h2 className="dash-title">{this.props.title}</h2>

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
            tickValues={this.props.projectsArray}
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
            {difficultyBar}
            {ratingBar}
          </VictoryGroup>
        </VictoryChart>
      </div>
    );
  }
}

export default Student;
