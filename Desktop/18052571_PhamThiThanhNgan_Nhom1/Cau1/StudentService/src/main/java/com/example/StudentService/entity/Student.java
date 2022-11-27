package com.example.StudentService.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="students")
public class Student {
	@Id
	@Column(name = "studentId", columnDefinition = "varchar(9)")
	private String studentId;
	private String name;
	private double age;
	private String mentorId;
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
	public String getMentorId() {
		return mentorId;
	}
	public void setMentorId(String mentorId) {
		this.mentorId = mentorId;
	}
	@Override
	public String toString() {
		return "Student [studentId=" + studentId + ", name=" + name + ", age=" + age + ", mentorId=" + mentorId + "]";
	}
	public Student(String studentId, String name, double age, String mentorId) {
		super();
		this.studentId = studentId;
		this.name = name;
		this.age = age;
		this.mentorId = mentorId;
	}
	public Student() {
		super();
	}
	
	
}
