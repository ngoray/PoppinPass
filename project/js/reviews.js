class Review {
    constructor(reviewUrl) {
      this.reviewUrl = reviewUrl;
      this.review_array = [];
    }

    fetchReview() {

        var request = new XMLHttpRequest();
        request.open('GET', this.reviewUrl, true);
    
    
        //This function will be called when data returns from the web api
        request.onload = function () {
         
            //get all the movies records into our movie array
            this.review_array = JSON.parse(request.responseText);
            console.log("ok");
            console.log(this.review_array);
    
    
            //call the function so as to display all movies tiles for "Now Showing"
            // displayMovies(category);
        };
        //This command starts the calling of the movies web api
        request.send();
    }
  
    addReview() {
      const addReview = new XMLHttpRequest();
      addReview.open('POST', this.reviewUrl, true);
  
      const name = document.getElementById("reviewname").value;
      const email = document.getElementById("reviewemail").value;
      const rating = document.getElementById("reviewrating").value;
      const review = document.getElementById("review").value;

  
      const reviewData = {
          "name": name,
          "email": email,
          "rating": rating,
          "review": review
      }
  
      console.log(reviewData)
  
      addReview.setRequestHeader("Content-Type", "application/json");
      addReview.onload = function () {
         fetchReview();
      };
      addReview.send(JSON.stringify(reviewData));
    }
}