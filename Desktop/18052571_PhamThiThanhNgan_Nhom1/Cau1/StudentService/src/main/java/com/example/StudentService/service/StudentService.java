package com.example.StudentService.service;

import org.springframework.stereotype.Service;

import com.example.StudentService.dto.StudentDTO;
import com.example.StudentService.entity.Student;

@Service
public interface StudentService {
	StudentDTO getStudentDTO(String id);
	Student addStudent(Student student);
}
