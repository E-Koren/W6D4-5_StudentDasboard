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

  render() {
    const projectsArray = [...new Set(this.state.data.map((x) => x.project))];

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
                    projectsArray={projectsArray}
                  />
                )}
              />
              <Route
                path="/evelyn"
                component={() => (
                  <Student
                    title={`Evelyn`}
                    studentData={this.filteredStudents(2)}
                    projectsArray={projectsArray}
                  />
                )}
              />
              <Route
                path="/floris"
                component={() => (
                  <Student
                    title={`Floris`}
                    studentData={this.filteredStudents(3)}
                    projectsArray={projectsArray}
                  />
                )}
              />
              <Route
                path="/hector"
                component={() => (
                  <Student
                    title={`Hector`}
                    studentData={this.filteredStudents(4)}
                    projectsArray={projectsArray}
                  />
                )}
              />
              <Route
                path="/martina"
                component={() => (
                  <Student
                    title={`Martina`}
                    studentData={this.filteredStudents(5)}
                    projectsArray={projectsArray}
                  />
                )}
              />
              <Route
                path="/maurits"
                component={() => (
                  <Student
                    title={`Maurits`}
                    studentData={this.filteredStudents(6)}
                    projectsArray={projectsArray}
                  />
                )}
              />
              <Route
                path="/rahima"
                component={() => (
                  <Student
                    title={`Rahima`}
                    studentData={this.filteredStudents(7)}
                    projectsArray={projectsArray}
                  />
                )}
              />
              <Route
                path="/sandra"
                component={() => (
                  <Student
                    title={`Sandra`}
                    studentData={this.filteredStudents(8)}
                    projectsArray={projectsArray}
                  />
                )}
              />
              <Route
                path="/wietske"
                component={() => (
                  <Student
                    title={`Wietske`}
                    studentData={this.filteredStudents(9)}
                    projectsArray={projectsArray}
                  />
                )}
              />
              <Route
                path="/storm"
                component={() => (
                  <Student
                    title={`Storm`}
                    studentData={this.filteredStudents(10)}
                    projectsArray={projectsArray}
                  />
                )}
              />
              <Route path="/">
                <SudentOverview
                  projectsArray={projectsArray}
                  data={this.state.data}
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
