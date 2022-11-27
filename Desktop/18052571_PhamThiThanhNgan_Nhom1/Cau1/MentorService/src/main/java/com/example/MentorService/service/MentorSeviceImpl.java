package com.example.MentorService.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.MentorService.entity.Mentor;
import com.example.MentorService.repository.MentorRepository;

import jakarta.transaction.Transactional;

@Service
@Transactional
public class MentorSeviceImpl implements MentorService{
	
	@Autowired
	private MentorRepository repo;
	@Override
	public Mentor getCustomer(String id) {
		// TODO Auto-generated method stub
		Mentor cus = null;
		cus = repo.findById(id).get();
		return cus;
	}

	@Override
	public Mentor addCustomer(Mentor cus) {
		// TODO Auto-generated method stub
		return repo.save(cus);
	}

}
