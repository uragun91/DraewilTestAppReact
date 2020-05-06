import * as React from 'react';
import { Employee } from '../../dto/Employee';

interface IProps {
  employee: Employee
}

export class EmployeeCard extends React.Component<IProps> {

  render() {
    return (
      <div className="employee-card">
        <img src={this.props.employee.picture} alt={this.props.employee.fullName} />
        <div className="employee-description">
          <div className="employee-description-item">
            <div className="employee-description-key">Name</div>
            <div className="employee-description-divider"></div>
            <div className="employee-description-value">{this.props.employee.fullName}</div>
          </div>

          <div className="employee-description-item">
            <div className="employee-description-key">Age</div>
            <div className="employee-description-divider"></div>
            <div className="employee-description-value">{this.props.employee.age}</div>
          </div>

          <div className="employee-description-item">
            <div className="employee-description-key">Gender</div>
            <div className="employee-description-divider"></div>
            <div className="employee-description-value">{this.props.employee.fullName}</div>
          </div>

          <div className="employee-description-item">
            <div className="employee-description-key">Department</div>
            <div className="employee-description-divider"></div>
            <div className="employee-description-value">{this.props.employee.fullName}</div>
          </div>

          <div className="employee-description-item">
            <div className="employee-description-key">Position</div>
            <div className="employee-description-divider"></div>
            <div className="employee-description-value">{this.props.employee.fullName}</div>
          </div>
        </div>
      </div>
    );
  }

}
