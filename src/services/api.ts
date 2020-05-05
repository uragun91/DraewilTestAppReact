import { Employee } from "../dto/Employee";
import axios, { AxiosResponse } from 'axios'

class ApiService {
  private baseUrl = 'http://localhost:3001'

  public getEmployees(filters: IFilters): Promise<Employee[]> {
    const url = `${this.baseUrl}/employees`
    return  axios.get<Employee[]>(url)
      .then((response: AxiosResponse) => {
        return response.data.map(Employee.build)
      })
  }
}

const apiService = new ApiService();
export default apiService