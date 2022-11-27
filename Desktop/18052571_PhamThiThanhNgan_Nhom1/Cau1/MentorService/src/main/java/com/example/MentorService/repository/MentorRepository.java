package com.example.MentorService.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.MentorService.entity.Mentor;

@Repository
public interface MentorRepository extends JpaRepository<Mentor, String> {

}
