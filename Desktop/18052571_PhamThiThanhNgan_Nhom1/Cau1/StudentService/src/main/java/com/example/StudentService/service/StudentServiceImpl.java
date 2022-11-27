package com.example.StudentService.service;

import org.springframework.http.MediaType;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.StudentService.dto.MentorDTO;
import com.example.StudentService.dto.StudentDTO;
import com.example.StudentService.entity.Student;
import com.example.StudentService.repository.StudentRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class StudentServiceImpl  implements StudentService{
	
	@Autowired
	private StudentRepository repo;
	
	@Autowired
	private RestTemplate restTemplate;

	@Override
	public StudentDTO getStudentDTO(String id) {
		HttpHeaders headers = new HttpHeaders();
		
	      headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
	      HttpEntity<String> entity = new HttpEntity<String>(headers);
	      Student o = repo.findById(id).get();
	      MentorDTO mentorDTO = restTemplate.exchange("http://localhost:8080/mentor"
	    		  .concat("/")
	    		  .concat(o.getMentorId()),
	    		  HttpMethod.GET, 
					 entity, 
					 MentorDTO.class
					).getBody();
	      StudentDTO studentDTO = new StudentDTO(o.getStudentId(), o.getName(), o.getAge(), mentorDTO);
		return studentDTO;
	}

	@Override
	public Student addStudent(Student student) {
		// TODO Auto-generated method stub
		return repo.save(student);
	}
	
	
}
