// import {
//   CreateEmployeeDTO,
//   Employee,
//   UpdateEmployeeDTO,
// } from "../scripts/interfaces";
// import { duration, toDateString } from "../scripts/scripts";
// import instance from "./axios";

// export class Employees {
//   public static async get(): Promise<Employee[]> {
//     const data = await instance.get("/employees");

//     return data.data;
//   }

//   public static async find(id: number): Promise<Employee> {
//     const data = await instance.get(`/employees/${id}`);
//     const employee: Employee = data.data;
//     employee.startDate = new Date(employee.startDate);
//     employee.finishDate =
//       employee.finishDate !== null && employee.finishDate !== undefined
//         ? new Date(employee.finishDate)
//         : null;
//     employee.duration = duration(employee);
//     return employee;
//   }

//   public static async createEmployee(
//     registerPayLoad: CreateEmployeeDTO
//   ): Promise<any> {
//     const data = await instance.post("/employees", registerPayLoad);
//     return data;
//   }

//   public static async updateEmployee(
//     id: Employee["id"],
//     updatePayLoad: UpdateEmployeeDTO
//   ): Promise<any> {
//     const formattedData = {
//       ...updatePayLoad,
//       startDate:
//         updatePayLoad.startDate !== null &&
//         updatePayLoad.startDate !== undefined
//           ? toDateString(updatePayLoad.startDate as Date)
//           : null,
//       finishDate:
//         updatePayLoad.finishDate !== null &&
//         updatePayLoad.finishDate !== undefined
//           ? toDateString(updatePayLoad.finishDate as Date)
//           : null,
//     };

//     const data = await instance.patch(`/employees/${id}`, formattedData);
//     return data;
//   }

//   public static async delete(id: number): Promise<any> {
//     const data = await instance.delete(`/employees/${id}`);
//     console.log(data.request.status);
//     return data.request;
//   }
// }
