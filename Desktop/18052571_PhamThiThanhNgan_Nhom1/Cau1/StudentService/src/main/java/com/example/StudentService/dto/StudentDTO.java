package com.example.StudentService.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


public class StudentDTO {
	
	private String studentId;
	private String name;
	private double age;
	private MentorDTO mentor;
	public String getStudentId() {
		return studentId;
	}
	public void setStudentId(String studentId) {
		this.studentId = studentId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getAge() {
		return age;
	}
	public void setAge(double age) {
		this.age = age;
	}
	public MentorDTO getMentor() {
		return mentor;
	}
	public void setMentor(MentorDTO mentor) {
		this.mentor = mentor;
	}
	@Override
	public String toString() {
		return "StudentDTO [studentId=" + studentId + ", name=" + name + ", age=" + age + ", mentor=" + mentor + "]";
	}
	public StudentDTO(String studentId, String name, double age, MentorDTO mentor) {
		super();
		this.studentId = studentId;
		this.name = name;
		this.age = age;
		this.mentor = mentor;
	}
	public StudentDTO() {
		super();
	}
	
	
}
