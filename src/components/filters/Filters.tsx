import * as React from 'react';

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

export class Filters extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {
    filterValueChanged: () => {},
    initialFiltersValue: { employeeStatus: 'any', employeeDepartment: 'any' }
  };

  public state: IState = {
    filtersValue: this.props.initialFiltersValue,
  };

  public componentDidUpdate() {
    console.log('props received') // <--- this one doesn't fire when the value of initialFiltersValue in App.tsx updated
  }

  public onFilterValueClick(filter: 'employeeStatus' | 'employeeDepartment', value: IFiltersValue['employeeDepartment'] & IFiltersValue['employeeStatus']) {
    const newFiltersValue: IFiltersValue = { ...this.state.filtersValue, [filter]: value };

    this.props.filterValueChanged(newFiltersValue);
    this.setState({ filtersValue: newFiltersValue });
  }

  public render() {
    return (
      <div>
        <p> Filters component works </p>
        <pre>
          { JSON.stringify(this.state, null, 2) }
        </pre>
      </div>
    );
  }
}
