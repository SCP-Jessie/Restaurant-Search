import React from 'react';
import './Business.css';

class Business extends React.Component {

	render() {

		const { business } = this.props;

		let reviewGram = '';
		if (business.reviewCount !== 1) {
			reviewGram = 's';
		}

		return (
			<div className="Business">
				<div className="image-container">
					<img src={business.imageSrc} />
				</div>
				<h2>{business.name}</h2>
				<div className="Business-price">
					{business.price}
				</div>
				<div className="Business-information">
					<div className="Business-address">
						<p>{business.address}</p>
						<p>{business.city}</p>
						<p>{business.state} {business.zipCode}</p>
						<p>Phone: {business.phone}</p>
					</div>
					<div className="Business-reviews">
						<h3>{business.category}</h3>
						<h3 className="rating">{business.rating} stars</h3>
						<p>{business.reviewCount} review{reviewGram}</p>
					</div>
				</div>
			</div>
		);
	}

}

export default Business;