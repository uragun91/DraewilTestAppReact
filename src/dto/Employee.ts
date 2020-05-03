import { EmployeeName } from "./EmployeeName";

export class Employee {
  constructor(
    public _id: 'string',
    public name: EmployeeName = new EmployeeName(),
    public age: number = 0,
    public gender: Gender = 'male',
    public isActive: boolean = false,
    public department: Department = 'IT'
  ) { }

  public get activeStatus(): ActiveStatus {
    return this.isActive ? 'active' : 'not active'
  }
}