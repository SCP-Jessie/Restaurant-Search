package com.clownfish.restaurantsearch;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class DiningPlaceController {

	private static final Logger logger = LoggerFactory.getLogger(DiningPlaceController.class);

	private static final String apiKey = "Your API key goes here";
	private static final String url = "https://api.yelp.com/v3/businesses/search?term=%s&location=%s&sort_by=%s";

	@GetMapping("/search")
	public String searchYelp(@RequestParam String term, @RequestParam String location, @RequestParam String sortBy) {

		final HttpHeaders headers = new HttpHeaders();
		headers.set("Authorization", "Bearer " + apiKey);

		final HttpEntity<String> entity = new HttpEntity<String>(headers);

		RestTemplate restTemplate = new RestTemplate();

		logger.info(String.format(url, term, location, sortBy));

		ResponseEntity<String> response = restTemplate.exchange(
				String.format(url, term, location, sortBy).replaceAll("\"", ""), HttpMethod.GET, entity, String.class);

		logger.info(response.getBody());

		return response.getBody().toString();
	}
}
