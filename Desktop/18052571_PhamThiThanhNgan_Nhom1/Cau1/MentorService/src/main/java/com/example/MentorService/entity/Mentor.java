package com.example.MentorService.entity;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="mentors")
public class Mentor implements Serializable{
	@Id
	@Column(name="mentorId",columnDefinition = "varchar(9)")
	private String mentorId;
	private String name;
	private String address;
	public String getMentorId() {
		return mentorId;
	}
	public void setMentorId(String mentorId) {
		this.mentorId = mentorId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	@Override
	public String toString() {
		return "Mentor [mentorId=" + mentorId + ", name=" + name + ", address=" + address + "]";
	}
	
	public Mentor() {
		super();
	}
	public Mentor(String mentorId, String name, String address) {
		super();
		this.mentorId = mentorId;
		this.name = name;
		this.address = address;
	}
	
	
}
