import React from 'react';
import './App.css';
import { Filters } from './components/filters/Filters';
import { Employee } from './dto/Employee';
import apiService from './services/api';

interface IState {
  filters: IFilters,
  employees: Employee[]
}

class App extends React.Component {

  public state: IState = {
    filters: {
      employeeDepartment: 'Accounting and Finance',
      employeeStatus: 'active'
    },
    employees: []
  }

  public componentDidMount() {
    this.getEmployees(this.state.filters)
  }

  public onFiltersChanged = (newFilters: IFilters) => {

    this.setState((): Partial<IState> => {
      return { filters: newFilters }
    })
    this.getEmployees(newFilters)
  }

  private getEmployees(filters: IFilters): void {
    apiService.getEmployees(filters)
      .then((employees: Employee[]) => {
        this.setState({ employees })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="app-header">
        </header>
        <div className="app-content">
          <section className="filters">
            <Filters initialFiltersValue={ this.state.filters } filterValueChanged={ this.onFiltersChanged } />
          </section>
          <section className="employees-list">

          </section>
        </div>
      </div>
    );
  }
}

export default App;
