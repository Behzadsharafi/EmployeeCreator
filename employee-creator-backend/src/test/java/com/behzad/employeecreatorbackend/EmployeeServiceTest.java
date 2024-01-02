package com.behzad.employeecreatorbackend;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.modelmapper.ModelMapper;

import com.behzad.employeecreatorbackend.employee.EmployeeRepository;
import com.behzad.employeecreatorbackend.employee.EmployeeService;

@ExtendWith(MockitoExtension.class)
public class EmployeeServiceTest {
	
	@Mock
	private EmployeeRepository employeeRepository;
	
	@Mock
	private ModelMapper mapper;
	
	@InjectMocks
	private EmployeeService underTest;
	
	@Test
	void findAll_ReturnsAllData() {
		underTest.findAll();
		Mockito.verify(employeeRepository).findAll();
	}
	
	
}
