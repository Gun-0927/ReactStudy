package com.example.JsonGenerator.gen;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class Gernerate {
	
	@RequestMapping("/getJson")
	public Object getJson() {
		List<JsonDto> jdtos = new ArrayList<>();
		for(int i=1;i<3;i++) {
			JsonDto jdto = new JsonDto();
			jdto.setId(Integer.toString(i));
			jdto.setName("tester"+i);
			jdto.setPostDate(new Date());
			jdtos.add(jdto);
		}
		return jdtos;
	}
}
