import React from "react";
import Paper from "../Paper/Paper";
import styles from "./EmployeeForm.module.scss";
import Input from "../Input/Input";
import * as yup from "yup";
import { schema } from "../../scripts/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// export type FormData = {
//   firstName: string;
//   middleName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   address: string;
//   contractType: string;
//   startDate: Date;
//   finishDate: Date;
//   employmentType: string;
//   hoursPerWeek: number;
// };

// type FormData = {
//   firstName: string;
//   middleName: string;
//   lastName: string;
//   email: string;
//   age: number;
//   password: string;
//   confirmPassword: string;
// };

interface FormData extends yup.InferType<typeof schema> {
  employmentType: "Full-Time" | "Part-Time";
  contractType: "Permanent" | "Contract";
}

const EmployeeForm = () => {
  // const schema: ZodType<FormData> = z
  //   .object({
  //     firstName: z.string().min(2).max(30),
  //     lastName: z.string().min(2).max(30),
  //     email: z.string().email(),
  //     age: z.number(),
  //     password: z.string().min(5).max(20),
  //     confirmPassword: z.string().min(5).max(20),
  //   })
  //   .refine((data) => data.password === data.confirmPassword, {
  //     message: "Passwords do not match",
  //     path: ["confirmPassword"],
  //   });
  // const schema: ZodType<FormData> = z.object({
  //   firstName: z.string().min(2).max(30),
  //   middleName: z.string().min(2).max(30),
  //   lastName: z.string().min(2).max(30),
  //   email: z.string().email(),
  //   phone: z.string(),
  //   address: z.string(),
  //   contractType: z.string(),
  //   startDate: z.date(),
  //   finishDate: z.date(),
  //   employmentType: z.string(),
  //   hoursPerWeek: z.number(),
  // });

  const { register, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const submitData = (data: FormData) => {
    console.log("IT WORKED", data);
  };

  return (
    <Paper className={styles.card}>
      <form className={styles.form} onSubmit={handleSubmit(submitData)}>
        {/* <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" {...register("firstName")} />
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" {...register("lastName")} />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" {...register("email")} />
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          {...register("age", { valueAsNumber: true })}
        />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register("password")} />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          {...register("confirmPassword")}
        />
        <input type="submit" /> */}

        <h3 className={styles.form__heading}>Personal Information</h3>
        <Input
          // register={{ ...register("firstName") }}
          register={register}
          name="firstName"
          type="text"
          label="First Name"
        />
        <Input
          // register={{ ...register("middleName") }}
          register={register}
          name="middleName"
          type="text"
          label="Middle Name"
        />
        <Input
          // register={{ ...register("lastName") }}
          register={register}
          name="lastName"
          type="text"
          label="Last Name"
        />
        <h3 className={styles.form__heading}>Contact Details</h3>
        <Input
          // register={{ ...register("email") }}
          register={register}
          name="email"
          type="email"
          label="Email"
        />
        <Input
          // register={{ ...register("phone") }}
          register={register}
          name="phone"
          type="phone"
          label="Phone"
        />
        <Input
          // register={{ ...register("address") }}
          register={register}
          name="address"
          type="address"
          label="Address"
        />
        <h3 className={styles.form__heading}>Employee Status</h3>

        <div className={styles.form__radioSection}>
          <legend>Contract Type</legend>
          <Input
            // register={{ ...register("contractType") }}
            register={register}
            name="permanent"
            type="radio"
            label="Permanent"
          />
          <Input
            // register={{ ...register("contractType") }}
            register={register}
            name="contract"
            type="radio"
            label="Contract"
          />
        </div>
        <Input
          // register={{ ...register("startDate") }}
          register={register}
          name="startDate"
          type="date"
          label="Start Date"
        />
        <Input
          // register={{ ...register("finishDate") }}
          register={register}
          name="finishDate"
          type="date"
          label="Finish Date"
        />

        <div className={styles.form__radioSection}>
          <legend>Employment Type</legend>
          <Input
            // register={{ ...register("employmentType") }}
            register={register}
            name="fullTime"
            type="radio"
            label="Full-Time"
          />
          <Input
            // register={{ ...register("employmentType") }}
            register={register}
            name="partTime"
            type="radio"
            label="Part-Time"
          />
        </div>
        <Input
          // register={{ ...register("hoursPerWeek") }}
          register={register}
          name="hoursPerWeek"
          type="number"
          label="Hours Per Week"
        />
        <button type="submit">Submit</button>
      </form>
    </Paper>
  );
};

export default EmployeeForm;
