import { Employee } from "../dto/Employee";

class ApiService {
  private baseUrl = '/'

  public getEmployees(filters: IFilters): Promise<Employee[]> {
    return Promise.resolve([])
  }
}

const apiService = new ApiService();
export default apiService