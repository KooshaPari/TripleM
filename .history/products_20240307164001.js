function loadListings() {
    const pCont = document.querySelector
	console.log('Grabbing JSON...')
    fetch('cars.json')
      .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .then(json => {
            json.cars.forEach(car => {
                const listing = `
                <div class="col-md-6 col-lg-4">
                    <div class="team-box">
                        <div class="team-img">
                            <img src="assets/img/vehicles/tm5" alt="Team" />
                            <div class="team-content">
                                <h3 class="team-title"><a href="team-details.html">Kevin Martin</a></h3>
                                <span class="team-desig">Engine Expert</span>
                            </div>
                        </div>
                        <div class="th-social" data-bg-src="assets/img/update_1/bg/pattern_bg_2.png"></div>
                    </div>
          </div>`;
            })
            console.log(json);
            document.
            
        })
        .catch(function() {
            console.log("An error occurred while fetching the JSON file.");
        });
}
}
