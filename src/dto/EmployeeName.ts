export class EmployeeName {
  constructor(
    public firstName: string = '',
    public lasteName: string = ''
  ) { }

  public static build(data: any = {}): EmployeeName {
    return new EmployeeName(
      data.firstName || '',
      data.lastName || ''
    )
  }
}
