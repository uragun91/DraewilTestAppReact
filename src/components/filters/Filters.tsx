import * as React from 'react';
import { FiltersGroup } from '../filters-group/FiltersGroup';

export type FilterValue = IFiltersValue['employeeDepartment'] | IFiltersValue['employeeStatus']

export interface IFiltersValue {
  employeeStatus:  'any' | 'active' | 'not active',
  employeeDepartment: 'any' | 'IT' | 'HR' | 'Sales' | 'Marketing' | 'Accounting and Finance'
}

interface IProps {
  filterValueChanged: (filtersValue: IFiltersValue) => void;
  initialFiltersValue: IFiltersValue
}

interface IState {
  filtersValue: IFiltersValue;
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

  public componentDidUpdate(prevProps: IProps) {
    if (Object.values(prevProps.initialFiltersValue).toString() !== Object.values(this.props.initialFiltersValue).toString()) {
      this.setState({filtersValue: this.props.initialFiltersValue})
    }
  }

  public onFilterChanged(filterGroup: keyof IFiltersValue) {
    return (value: FilterValue): void => {
      const newFiltersValue: IFiltersValue = { ...this.state.filtersValue, [filterGroup]: value };

      this.props.filterValueChanged(newFiltersValue);
      this.setState({ filtersValue: newFiltersValue });
    }
  }

  public render() {
    return (
      <div>

        <FiltersGroup
          title={employeeStatusKey}
          filtersList={this.possibleFiltersValues[employeeStatusKey]}
          filterChanged={this.onFilterChanged('employeeStatus')}
        />
        <FiltersGroup
          title={employeeDepartmentKey}
          filtersList={this.possibleFiltersValues[employeeDepartmentKey]}
          filterChanged={this.onFilterChanged('employeeDepartment')}
        />

        <pre>
          { JSON.stringify(this.state, null, 2) }
        </pre>

      </div>
    );
  }
}
