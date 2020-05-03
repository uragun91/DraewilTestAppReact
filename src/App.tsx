import React from 'react';
import './App.css';
import { Filters } from './components/filters/Filters';
import { Employee } from './dto/Employee';

interface IState {
  filtersValue: IFiltersValue,
  employees: Employee[]
}

class App extends React.Component {

  public state: IState = {
    filtersValue: {
      employeeDepartment: 'Accounting and Finance',
      employeeStatus: 'active'
    },
    employees: []
  }

  public onFiltersChanged = (newFilterValue: IFiltersValue) => {
    // load users

    // this.setState(() => {
    //   return { filtersValue: newFilterValue }
    // })
  }

  render() {
    return (
      <div className="App">
        <header className="app-header">
        </header>
        <div className="app-content">
          <section className="filters">
            <Filters initialFiltersValue={this.state.filtersValue} filterValueChanged={this.onFiltersChanged} />
          </section>
          <section className="employees-list"></section>
        </div>
      </div>
    );
  }
}

export default App;
