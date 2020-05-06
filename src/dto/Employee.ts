import { EmployeeName } from "./EmployeeName";

export class Employee {
  constructor(
    public _id: 'string',
    public name: EmployeeName = new EmployeeName(),
    public picture: string = '',
    public age: number = 0,
    public gender: Gender = 'male',
    public isActive: boolean = false,
    public department: Department = 'IT'
  ) { }

  public get activeStatus(): ActiveStatus {
    return this.isActive ? 'active' : 'not active'
  }

  public get fullName(): string {
    return `${this.name.firstName} ${this.name.lastName}`
  }

  public static build(data: any = {}): Employee {


    return new Employee(
      data._id || '',
      EmployeeName.build(data.name),
      data.picture,
      data.age || 0,
      data.gender,
      !!data.isActive,
      data.department
    )
  }
}
