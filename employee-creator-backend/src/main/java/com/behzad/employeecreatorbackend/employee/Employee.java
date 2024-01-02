package com.behzad.employeecreatorbackend.employee;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "employee")
public class Employee {
	
	@Getter
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	private Long id;

	@Getter
	@Setter
	@Column
	private String firstName;

	@Getter
	@Setter
	@Column(nullable = true) // optional
	private String middleName;

	@Getter
	@Setter
	@Column
	private String lastName;

	@Getter
	@Setter
	@Column(unique = true, nullable = false)
	private String email;

	@Getter
	@Setter
	@Column(unique = true, nullable = false)
	private String phone;

	@Getter
	@Setter
	@Column
	private String address;

	@Getter
	@Setter
	@Column
	private String contractType;

	@Getter
	@Setter
	@Column
	private LocalDate startDate;

	@Getter
	@Setter
	@Column(nullable = true)
	private LocalDate finishDate;

	@Getter
	@Setter
	@Column
	private String employmentType;

	@Getter
	@Setter
	@Column
	private Float hoursPerWeek;


	public Employee() {
	}

	public Employee(String firstName, String middleName, String lastName, String email, String phone, String address,
			String contractType, LocalDate startDate, LocalDate finishDate, String employmentType, Float hoursPerWeek) {
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