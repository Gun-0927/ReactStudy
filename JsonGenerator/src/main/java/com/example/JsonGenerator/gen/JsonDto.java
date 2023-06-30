package com.example.JsonGenerator.gen;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class JsonDto {
	private String id;
	private String name;
	private Date postDate;
}
