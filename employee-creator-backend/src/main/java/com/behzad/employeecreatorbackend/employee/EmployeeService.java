package com.behzad.employeecreatorbackend.employee;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

@Service // identyify this is service layer
@Transactional // each database updating request is a transaction
public class EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;

	@Autowired
	private ModelMapper modelMapper;

	protected boolean emailAlreadyExits(String email) {
		return this.employeeRepository.existsByEmail(email);
	}

	protected boolean phoneAlreadyExists(String phone) {
		return this.employeeRepository.existsByPhone(phone);
	}

	public List<Employee> findAll() {
		return this.employeeRepository.findAll();
	}

	public Optional<Employee> findById(Long id) {
		Optional<Employee> foundEmployee = this.employeeRepository.findById(id);

		return foundEmployee;
	}

	public Employee create(CreateEmployeeDTO data) {
		Employee newEmployee = modelMapper.map(data, Employee.class);
		Employee created = this.employeeRepository.save(newEmployee);

		return created;
	}

	public boolean deleteById(Long id) {
		Optional<Employee> foundEmployee = this.findById(id);
		if (foundEmployee.isEmpty())
			return false;
		this.employeeRepository.delete(foundEmployee.get());
		return true;
	}

	public Optional<Employee> updateById(Long id, UpdateEmployeeDTO data) {
		Optional<Employee> foundEmployee = this.findById(id);

		if (foundEmployee.isPresent()) {
			Employee toUpdate = foundEmployee.get();

			modelMapper.map(data, toUpdate);
			Employee updatedEmployee = this.employeeRepository.save(toUpdate);

			return Optional.of(updatedEmployee);
		}

		return foundEmployee;
	}

}