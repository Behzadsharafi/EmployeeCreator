interface BaseEmployee {
  firstName: string;
  middleName?: string | null;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  employmentType: "Full-Time" | "Part-Time";
  startDate: Date;
  finishDate?: Date | null;
  contractType: "Permanent" | "Contract";
  hoursPerWeek: number;
}

export interface Employee extends BaseEmployee {
  id: number;
  duration: number;
}

export interface CreateEmployeeDTO extends BaseEmployee {
  employmentType: "Full-Time" | "Part-Time";
}

export interface UpdateEmployeeDTO extends Partial<BaseEmployee> {}
