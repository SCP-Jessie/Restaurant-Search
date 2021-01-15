const Yelp = {
	searchYelp(term, location, sortBy) {

		//     return new Promise((resolve, reject) => {
		//         resolve( [{
		//             id: "E8RJkjfdcwgtyoPMjQ_Olg",
		//             imageSrc: '',
		//             rating: 4,
		//             price: "$",
		//             phone: "+14152520800",
		//             reviewCount: 1738,
		//             name: "Four Barrel Coffee",
		//             city: "San Francisco",
		//             state: "CA",
		//             address: "375 Valencia St",
		//             zipCode: "94103"
		//         }]
		//         );

		//     });

		return fetch(`http://localhost:8080/search?term=${term}&location=${location}&sortBy=${sortBy}`).then((response) => {
			return response.json();
		}).then((jsonResponse) => {
			if (jsonResponse.businesses) {
				return jsonResponse.businesses.map((business) => {
					return {
						id: business.id,
						imageSrc: business.image_url,
						name: business.name,
						address: business.location.address1,
						city: business.location.city,
						state: business.location.state,
						zipCode: business.location.zip_code,
						category: business.categories[0].title,
						rating: business.rating,
						reviewCount: business.review_count,
						price: price,
						phone: display_phone
					};
				});
			}
		})
	}

}

export default Yelp;