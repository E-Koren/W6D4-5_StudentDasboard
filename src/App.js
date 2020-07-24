import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import data from "./components/Data";
import SudentOverview from "./components/SudentOverview";
import Student from "./components/Student";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data,
    };
  }

  filteredStudents = (student_id) => {
    const student = this.state.data.filter(
      (student) => student.id === student_id
    );
    return student;
  };

  averageRatingDifficulty = (project, category) => {
    const filteredProjects = data.filter((evaluation) => {
      return evaluation.project === project;
    });
    const averageScore =
      filteredProjects
        .map((evaluation) => {
          return evaluation[category];
        })
        .reduce((total, num) => {
          return total + num;
        }) / filteredProjects.length;
    return averageScore;
  };

  render() {
    const projectsList = [...new Set(this.state.data.map((x) => x.project))];

    const ratingList = projectsList.map((project) => {
      return {
        project: project,
        rating: this.averageRatingDifficulty(project, "rating"),
      };
    });

    const difficultyList = projectsList.map((project) => {
      return {
        project: project,
        difficulty: this.averageRatingDifficulty(project, "difficulty"),
      };
    });

    const names = [...new Set(this.state.data.map((x) => x.name))];
    const nameItems = names.map((name, index) => {
      let url = name.toLowerCase();
      return (
        <li className="list-item" key={index}>
          <Link to={url}>{name}</Link>
        </li>
      );
    });

    return (
      <Router>
        <div>
          <header>STUDENT DASHBOARD</header>
          <nav>
            <ul className="list">
              <li>
                <Link className="list-item" to="/">
                  All Students
                </Link>
              </li>
              {nameItems}
            </ul>
          </nav>
          <main>
            <Switch>
              <Route
                path="/aranka"
                component={() => (
                  <Student
                    title={`Aranka`}
                    studentData={this.filteredStudents(1)}
                    projectsList={projectsList}
                  />
                )}
              />
              <Route
                path="/evelyn"
                component={() => (
                  <Student
                    title={`Evelyn`}
                    studentData={this.filteredStudents(2)}
                    projectsList={projectsList}
                  />
                )}
              />
              <Route
                path="/floris"
                component={() => (
                  <Student
                    title={`Floris`}
                    studentData={this.filteredStudents(3)}
                    projectsList={projectsList}
                  />
                )}
              />
              <Route
                path="/hector"
                component={() => (
                  <Student
                    title={`Hector`}
                    studentData={this.filteredStudents(4)}
                    projectsList={projectsList}
                  />
                )}
              />
              <Route
                path="/martina"
                component={() => (
                  <Student
                    title={`Martina`}
                    studentData={this.filteredStudents(5)}
                    projectsList={projectsList}
                  />
                )}
              />
              <Route
                path="/maurits"
                component={() => (
                  <Student
                    title={`Maurits`}
                    studentData={this.filteredStudents(6)}
                    projectsList={projectsList}
                  />
                )}
              />
              <Route
                path="/rahima"
                component={() => (
                  <Student
                    title={`Rahima`}
                    studentData={this.filteredStudents(7)}
                    projectsList={projectsList}
                  />
                )}
              />
              <Route
                path="/sandra"
                component={() => (
                  <Student
                    title={`Sandra`}
                    studentData={this.filteredStudents(8)}
                    projectsList={projectsList}
                  />
                )}
              />
              <Route
                path="/wietske"
                component={() => (
                  <Student
                    title={`Wietske`}
                    studentData={this.filteredStudents(9)}
                    projectsList={projectsList}
                  />
                )}
              />
              <Route
                path="/storm"
                component={() => (
                  <Student
                    title={`Storm`}
                    studentData={this.filteredStudents(10)}
                    projectsList={projectsList}
                  />
                )}
              />
              <Route path="/">
                <SudentOverview
                  projectsList={projectsList}
                  ratingList={ratingList}
                  difficultyList={difficultyList}
                />
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
