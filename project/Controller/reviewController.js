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
        generateReviews();
    };
    ViewReviewRequest.send();
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

