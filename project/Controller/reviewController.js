let review_array = []

class ViewReviewController {
  constructor(ViewReviewUrl) {
    this.ViewReviewUrl = ViewReviewUrl;
    this.view_review_array = [];
  }

  fetchReview() {
    const ViewReviewRequest = new XMLHttpRequest();
    ViewReviewRequest.open('GET', this.ViewReviewUrl, true);
    console.log(ViewReviewRequest);
    // Use an arrow function to preserve the 'this' context
    ViewReviewRequest.onload = () => {
        review_array = JSON.parse(ViewReviewRequest.responseText);
        console.log("ok");
        console.log("array length: "+ review_array.length);
        this.generateReviews();
    };
    ViewReviewRequest.send();
  }
  generateReviews() {
    const table = document.getElementById("reviewTable");
    let ViewReviewCount = 0;
    let message = "";
    
    table.innerHTML = "";
    const totalReviews = review_array.length;
    
    for (let count = 0; count < totalReviews; count++) {     
      const name = review_array[count].name;
      const review = review_array[count].review;
      const rating = review_array[count].rating;
      const cell ='<div style="background-color: #333;"><table border="0" style="width:100%;"><tr><td width="60px"><img src="./../images/profile.png" style="padding: 10px;"></td> <td> <h5 style="text-align:left;">'+ name +'</h5><h5 style="text-align:left;">'+ review +'</h5></td><td><h5 style="text-align:right;">'+rating+'</h5></td><td width="35px"><img src="./../images/star.png" style="width:30px; height:30px;"/></td></tr></table></div><br>'
      table.insertAdjacentHTML("beforeend", cell);
      ViewReviewCount++;
    }

    message = ViewReviewCount + " Reviews ";
    document.getElementById("reviewsummary").textContent = message;
  }
}
const viewreview = new ViewReviewController("/review");

class CreateReviewController {

  constructor(AddReviewUrl) {
    this.AddReviewUrl = AddReviewUrl;
    this.add_review_array = [];
  }
  
  addReview() {
    const addReview = new XMLHttpRequest();
    addReview.open('POST', this.AddReviewUrl, true);

    const name = document.getElementById("reviewname").value;
    const email = document.getElementById("reviewemail").value;
    const rating = document.getElementById("reviewrating").value;
    const review = document.getElementById("review").value;

    const addreviewData = {
        "name": name,
        "email": email,
        "rating": rating,
        "review": review
    }

    console.log(addreviewData)

    addReview.setRequestHeader("Content-Type", "application/json");
    addReview.onload = function () {
      alert("Reviews added!");
      document.getElementById("reviewname").value = "";
      document.getElementById("reviewemail").value = "";
      document.getElementById("review").value = "";
      document.getElementById("feedbackpage").style.display="none";
      reviewPage();
    };
    addReview.send(JSON.stringify(addreviewData));
  }

}

const createreview = new CreateReviewController("/review");

