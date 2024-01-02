package com.behzad.employeecreatorbackend.employee;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.Getter;
import lombok.Setter;

public class CreateEmployeeDTO {

	@Getter
	@Setter
	@NotBlank(message = "First name is mandatory")
	String firstName;

	@Getter
	@Setter
	String middleName;

	@Getter
	@Setter
	@NotBlank(message = "Last name is mandatory")
	String lastName;

	@Getter
	@Setter
	@NotBlank(message = "Email is mandatory")
	String email;

	@Getter
	@Setter
	@NotBlank(message = "Phone is mandatory")
	String phone;

	@Getter
	@Setter
	@NotBlank(message = "Address is mandatory")
	String address;

	@Getter
	@Setter
	@NotBlank(message = "Contract type is mandatory")
	String contractType;

	@Getter
	@Setter
	@NotNull(message = "Start date is mandatory")
	@DateTimeFormat(pattern = "yyyy-MM-dd")
//	@JsonFormat(pattern = "YYYY-MM-DD")
	LocalDate startDate;

	@Getter
	@Setter
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	LocalDate finishDate;

	@Getter
	@Setter
	@NotBlank(message = "Employment type is mandatory")
	String employmentType;

	@Getter
	@Setter
	@NotNull(message = "Working hour is mandatory")
	@Positive(message = "Working hour must be positive")
	Float hoursPerWeek;

	public CreateEmployeeDTO(String firstName, String middleName, String lastName, String email, String phone,
			String address, String contractType, LocalDate startDate, LocalDate finishDate, String employmentType,
			Float hoursPerWeek) {
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;
		this.address = address;
		this.contractType = contractType;
		this.startDate = startDate;
		this.finishDate = finishDate;
		this.employmentType = employmentType;
		this.hoursPerWeek = hoursPerWeek;
	}

}