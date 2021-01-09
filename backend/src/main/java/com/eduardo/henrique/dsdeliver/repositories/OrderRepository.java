package com.eduardo.henrique.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eduardo.henrique.dsdeliver.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{

}
