package com.example.StudentService.controller;

import java.time.LocalTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.StudentService.dto.StudentDTO;
import com.example.StudentService.entity.Student;
import com.example.StudentService.service.StudentService;

@RequestMapping("/student")
@RestController
public class StudentController {
	
	@Autowired
	private StudentService service;
	
	
	@GetMapping("/{id}")
//	@Retry(name="customer")
	public StudentDTO getOne(@PathVariable String id) {
  
	    
		return service.getStudentDTO(id);
	}
	//cau 1c
	@PostMapping()
	public Student addBill(@RequestBody Student o) {
		return service.addStudent(o);
	}

}
