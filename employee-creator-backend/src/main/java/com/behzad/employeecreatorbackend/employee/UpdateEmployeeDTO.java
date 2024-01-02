package com.behzad.employeecreatorbackend.employee;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;

import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Positive;
import lombok.Getter;
import lombok.Setter;

public class UpdateEmployeeDTO {
	
	@Getter
	@Setter
	@Pattern(regexp = "^(?=\\S).*$", message = "First name cannot be empty")
	String firstName;

	@Getter
	@Setter
	@Pattern(regexp = "^(?=\\S).*$", message = "Middle name cannot be empty")
	String middleName;

	@Getter
	@Setter
	@Pattern(regexp = "^(?=\\S).*$", message = "Last name cannot be empty")
	String lastName;

	@Getter
	@Setter
	@Pattern(regexp = "^(?=\\S).*$", message = "Email cannot be empty")
	String email;

	@Getter
	@Setter
	@Pattern(regexp = "^(?=\\S).*$", message = "Phone cannot be empty")
	String phone;

	@Getter
	@Setter
	@Pattern(regexp = "^(?=\\S).*$", message = "Address cannot be empty")
	String address;

	@Getter
	@Setter
	@Pattern(regexp = "^(?=\\S).*$", message = "Contract type cannot be empty")
	String contractType;

	@Getter
	@Setter
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	LocalDate startDate;

	@Getter
	@Setter
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	LocalDate finishDate;

	@Getter
	@Setter
	@Pattern(regexp = "^(?=\\S).*$", message = "Employment type cannot be empty")
	String employmentType;

	@Getter
	@Setter
	@Positive
	Float hoursPerWeek;

}