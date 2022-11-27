package com.example.MentorService.service;

import org.springframework.stereotype.Service;

import com.example.MentorService.entity.Mentor;

@Service
public interface MentorService {
	Mentor getCustomer(String id);
	Mentor addCustomer(Mentor cus);
}
