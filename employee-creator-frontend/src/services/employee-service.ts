import instance from "./axios";

const hostDomain = `http://localhost:8080/`;
import axios from "axios";

export class Employees {
  public static async get(): Promise<any[]> {
    const data = await instance.get("/employees");
    console.log(data.data);
    return data.data;
  }
}
