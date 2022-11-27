package com.example.MentorService.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.MentorService.entity.Mentor;
import com.example.MentorService.service.MentorService;

@RestController
@RequestMapping("/mentor")
public class MentorController {
	@Autowired
	private MentorService service;
	@GetMapping("/{id}")
	public Mentor getOn(@PathVariable String id) {
		return service.getCustomer(id);
	}
	@PostMapping()
	public Mentor addBill(@RequestBody Mentor cus) {
		return service.addCustomer(cus);
	}

}
