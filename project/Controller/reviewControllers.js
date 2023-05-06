class Review {
    constructor(reviewUrl) {
      this.reviewUrl = reviewUrl;
      this.review_array = [];
    }

    fetchReview() {
      const reviewRequest = new XMLHttpRequest();
      reviewRequest.open('GET', this.reviewUrl, true);
      console.log(reviewRequest);
      // Use an arrow function to preserve the 'this' context
      reviewRequest.onload = () => {
          this.review_array = JSON.parse(reviewRequest.responseText);
          console.log("ok");
          console.log(this.review_array);
          this.displayReviews();
      };
  
      reviewRequest.send();
  }
  // This method displays the movies tiles that filters based on "Now Showing" or "Coming Soon"
  displayReviews() {
    const table = document.getElementById("reviewTable");
    let reviewCount = 0;
    let message = "";
      
    table.innerHTML = "";
    const totalReviews = this.review_array.length;
      
    for (let count = 0; count < totalReviews; count++) {
           
      const name = this.review_array[count].name;
      const review = this.review_array[count].review;
      const rating = this.review_array[count].rating;
      const cell ='<div style="background-color: #333;"><table border="0" style="width:100%;"><tr><td width="60px"><img src="./../images/profile.png" style="padding: 10px;"></td> <td> <h5 style="text-align:left;">'+ name +'</h5><h5 style="text-align:left;">'+ review +'</h5></td><td><h5 style="text-align:right;">'+rating+'</h5></td><td width="35px"><img src="./../images/star.png" style="width:30px; height:30px;"/></td></tr></table></div><br>'
      table.insertAdjacentHTML("beforeend", cell);
            reviewCount++;
    }
    message = reviewCount + " Reviews ";
    document.getElementById("reviewsummary").textContent = message;
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
      alert("Reviews added!");
      document.getElementById("reviewname").value = "";
      document.getElementById("reviewemail").value = "";
      document.getElementById("review").value = "";
      makeActive();
    };
    addReview.send(JSON.stringify(reviewData));
  }
    
}

const review = new Review("/review");