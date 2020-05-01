import React from 'react';
import './App.css';
import { Filters, IFiltersValue } from './components/filters/Filters';

class App extends React.Component {

  public filtersValue: IFiltersValue = {
    employeeDepartment: 'Accounting and Finance',
    employeeStatus: 'active'
  }

  public componentDidMount() {
    setTimeout(() => {
      this.filtersValue = {...this.filtersValue, employeeStatus: 'not active'}
      console.log(this.filtersValue)
    }, 5000)
  }

  render() {
      return (
      <div className="App">
        <header className="app-header">
        </header>
        <section className="filters">
          <Filters initialFiltersValue={this.filtersValue} />
        </section>
        <section className="employees-list"></section>
      </div>
    );
  }
}

export default App;
