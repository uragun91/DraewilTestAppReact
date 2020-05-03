/// <reference types="react-scripts" />

type Department = 'IT' | 'HR' | 'Sales' | 'Marketing' | 'Accounting and Finance'
type ActiveStatus = 'active' | 'not active'

type Gender = 'male' | 'female'

interface IFiltersValue {
  employeeStatus:  'any' | ActiveStatus,
  employeeDepartment: 'any' | Department
}

type FilterValue = IFiltersValue['employeeDepartment'] | IFiltersValue['employeeStatus']
