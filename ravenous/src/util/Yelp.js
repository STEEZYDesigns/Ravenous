const apiKey = ""; //without an API key we cannot use this application.

export let Yelp = {
    search(term, location, sortBy) {
        // a fetch request is a promise.
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {
            headers: { 
                Authorization: `Bearer ${apiKey}`
            },
        }).then(response => { //end fetch. begin then( to process response to JSON )
            return response.json();
        }).then((jsonResponse) => { //begin second then()
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    console.log(business.image_url);
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
                        reviewCount: business.review_count               
                    };
                });
            }
        }); //end second then
    }
}

//export default Yelp;




