import * as React from 'react';
import './Filters.css'
import { FiltersGroup } from '../filters-group/FiltersGroup';

interface IProps {
  filterValueChanged: (filtersValue: IFilters) => void;
  initialFiltersValue: IFilters
}

interface IState {
  filtersValue: IFilters;
}

const employeeStatusKey: string = 'Employee Status'
const employeeDepartmentKey: string = 'Employee Department'

export class Filters extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {
    filterValueChanged: () => {},
    initialFiltersValue: { employeeStatus: 'any', employeeDepartment: 'any' }
  };

  public state: IState = {
    filtersValue: this.props.initialFiltersValue,
  };

  public possibleFiltersValues: {[key: string]: FilterValue[] } = {
    [employeeStatusKey]: ['any', 'not active', 'active'],
    [employeeDepartmentKey]: ['any', 'IT', 'HR', 'Sales', 'Marketing', 'Accounting and Finance']
  }

  public onFilterChanged(filterGroup: keyof IFilters) {
    return (value: FilterValue): void => {
      const newFiltersValue: IFilters = { ...this.state.filtersValue, [filterGroup]: value };

      this.props.filterValueChanged(newFiltersValue);
      this.setState({ filtersValue: newFiltersValue });
    }
  }

  public render() {
    return (
      <div className="filters-wrapper">

        <FiltersGroup
          title={ employeeStatusKey }
          filtersList={ this.possibleFiltersValues[employeeStatusKey] }
          initialFilterValue={ this.state.filtersValue.employeeStatus }
          filterChanged={ this.onFilterChanged('employeeStatus') }
        />
        <FiltersGroup
          title={ employeeDepartmentKey }
          filtersList={ this.possibleFiltersValues[employeeDepartmentKey] }
          initialFilterValue={ this.state.filtersValue.employeeDepartment }
          filterChanged={ this.onFilterChanged('employeeDepartment') }
        />

        <pre>
          { JSON.stringify(this.state, null, 2) }
        </pre>

      </div>
    );
  }
}
