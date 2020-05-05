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

  public static build(data: any = {}): Employee {


    return new Employee(
      data._id || '',
      EmployeeName.build(data.name),
      data.age || 0,
      data.gender,
      !!data.isActive,
      data.department
    )
  }
}
