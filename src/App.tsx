import React from 'react';
import './App.css';
import { Filters, IFiltersValue } from './components/filters/Filters';

interface IState {
  filtersValue: IFiltersValue
}

class App extends React.Component {

  public state: IState = {
    filtersValue: {
      employeeDepartment: 'Accounting and Finance',
      employeeStatus: 'active'
    }
  }

  public componentDidMount() {
    setTimeout(() => {
      this.setState((state: IState) => {
        return {
          filtersValue: {
            ...state.filtersValue,
            employeeStatus: 'not active'
          }
        }
      })
    }, 3000)
  }

  render() {
      return (
      <div className="App">
        <header className="app-header">
        </header>
        <div className="app-content">
          <section className="filters">
            <Filters initialFiltersValue={this.state.filtersValue} />
          </section>
          <section className="employees-list"></section>
        </div>
      </div>
    );
  }
}

export default App;
