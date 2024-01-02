package com.behzad.employeecreatorbackend.employee;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.behzad.employeecreatorbackend.exceptions.NotFoundException;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/employees")
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;

	@GetMapping
	public ResponseEntity<List<Employee>> getAll() {
		List<Employee> allEmployees = this.employeeService.findAll();
		return new ResponseEntity<>(allEmployees, HttpStatus.OK);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Employee> getById(@PathVariable Long id) {
		Optional<Employee> foundEmployee = this.employeeService.findById(id);

		if (foundEmployee.isEmpty()) {
			throw new NotFoundException(String.format("Employee with id %s not found", id));
		}
		return new ResponseEntity<>(foundEmployee.get(), HttpStatus.OK);
	}

	@PostMapping
	public ResponseEntity<Employee> createEmployee(@Valid @RequestBody CreateEmployeeDTO data) {

		String enteredPhone = data.getPhone();
		String enteredEmail = data.getEmail();

		boolean phoneExists = this.employeeService.phoneAlreadyExists(enteredPhone);
		boolean emailExists = this.employeeService.emailAlreadyExits(enteredEmail);

		if (phoneExists && emailExists) {
			throw new DataIntegrityViolationException(
					"Employee with phone " + enteredPhone + " and email " + enteredEmail + " already exists.");
		} else if (phoneExists) {
			throw new DataIntegrityViolationException("Employee with phone " + enteredPhone + " already exists.");

		} else if (emailExists) {
			throw new DataIntegrityViolationException("Employee with email " + enteredEmail + " already exists.");

		}

		Employee createdEmployee = this.employeeService.create(data);

		return new ResponseEntity<>(createdEmployee, HttpStatus.CREATED);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Employee> deleteById(@PathVariable Long id) {
		boolean deleted = this.employeeService.deleteById(id);


		if(deleted == true) {
			return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
		}
		
		throw new NotFoundException(String
				.format("Employee with id: %d does not exist, could not delete", id));
	}

	@PatchMapping("/{id}")
	public ResponseEntity<Employee> updateById(@PathVariable Long id, @Valid @RequestBody UpdateEmployeeDTO data) {

		Optional<Employee> updated = this.employeeService.updateById(id, data);
		if (updated.isEmpty()) {
			throw new NotFoundException(String.format("Employee with id %s not found, could not update", id));
		}

		return new ResponseEntity<Employee>(updated.get(), HttpStatus.OK);
	}

}