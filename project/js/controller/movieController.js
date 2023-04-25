class Movies {
    constructor(movieUrl) {
      this.movieUrl = movieUrl;
      this.movieArray = [];
      this.comingSoon = "Coming Soon";
      this.nowShowing = "Now Showing";
    }
  
    // This method calls the movies api and gets all the movies that are showing in Shaw Theatres for Showing Now and Coming Soon
    getMovieData() {
      const request = new XMLHttpRequest();
      request.open("GET", this.movieUrl, true);
  
      // This function will be called when data returns from the web api
      request.onload = () => {
        // Get all the movies records into our movie array
        this.movieArray = JSON.parse(request.responseText);
  
        // Call the function to display all movies tiles for "Now Showing"
        this.displayMovies(this.comingSoon);
        this.displayMovies2(this.nowShowing);
      };
  
      // This command starts the calling of the movies web api
      request.send();
    }

    // This method displays the movies tiles that filters based on "Now Showing" or "Coming Soon"
    displayMovies(comingSoon) {
      const table = document.getElementById("moviesTable");
      let movieCount = 0;
      let message = "";
  
      table.innerHTML = "";
      const totalMovies = this.movieArray.length;
  
      for (let count = 0; count < totalMovies; count++) {
        if (this.movieArray[count].availability === comingSoon) {
          const thumbnail = "products/" + this.movieArray[count].thumb;
          const title = this.movieArray[count].title;
  
          const cell =
            '<div>                                                                                                                                                                                                   \
                              <div class="flip-container" >                                                                                                                                                                                       \
                                  <div class="flipper">                                                                                                                                                                                           \
                                      <div class="front">                                                                                                                                                                                         \
                                          <a id="movies" class="movies" href="#" data-toggle="modal" data-target="#movieModal" item=' +
            count +
            '>                                                                                                \
                                              <img class="img-fluid img-thumbnail" src="./../images/'+thumbnail+'" />                                                                                                                                       \
                                          </a>                                                                                                                                                                                                    \
                                      </div>                                                                                                                                                                                                      \
                                      <div class="back">                                                                                                                                                                                          \
                                          <div class="bg-dark mystyle text-center py-3" style="text-align:center;" >                                                                                                                                                         \
                                              <span>' +
            title +
            "<br>" +
            "(" +
            this.movieArray[count].genre +
            ')</span><br>                                                                                                                                                                      \
                                              <button item="' +
            count +
            '" type="button" class="button" style="width:60%; border-radius:25px;" onClick="movies.showMovieDetails(this)" >See More</button>       \
                                          </div>                                                                                                                                                                                                  \
                                      </div>                                                                                                                                                                                                      \
                                  </div>                                                                                                                                                                                                          \
                              </div>                                                                                                                                                                                                              \
                          </div>';
  
          table.insertAdjacentHTML("beforeend", cell);
          movieCount++;
        }
      }
  
      message = movieCount + " Movies " + comingSoon;
      document.getElementById("summary").textContent = message;
      document.getElementById("parent").textContent = "";
    }

        // This method displays the movies tiles that filters based on "Now Showing" or "Coming Soon"
        displayMovies2(nowShowing) {
          const table = document.getElementById("moviesTable2");
          let movieCount = 0;
          let message = "";
      
          table.innerHTML = "";
          const totalMovies = this.movieArray.length;
      
          for (let count = 0; count < totalMovies; count++) {
            if (this.movieArray[count].availability === nowShowing) {
              const thumbnail = "products/" + this.movieArray[count].thumb;
              const title = this.movieArray[count].title;
      
              const cell =
                '<div class="scroll">                                                                                                                                                                                                   \
                                  <div class="flip-container" >                                                                                                                                                                                       \
                                      <div class="flipper">                                                                                                                                                                                           \
                                          <div class="front">                                                                                                                                                                                         \
                                              <a id="movies" class="movies" href="#" data-toggle="modal" data-target="#movieModal" item=' +
                count +
                '>                                                                                                \
                                                  <img class="img-fluid img-thumbnail" src="./../images/' + thumbnail +'" />                                                                                                                                       \
                                              </a>                                                                                                                                                                                                    \
                                          </div>                                                                                                                                                                                                      \
                                          <div class="back">                                                                                                                                                                                          \
                                              <div class="bg-dark mystyle text-center py-3" style="text-align:center;" >                                                                                                                                                         \
                                                  <span>' +
                title +
                "<br>" +
                "(" +
                this.movieArray[count].genre +
                ')</span><br>                                                                                                                                                                      \
                                                  <button item="' +
                count +
                '" type="button" class="button" style="width:60%; border-radius:25px;" onClick="movies.showMovieDetails(this)" >See More</button>       \
                                              </div>                                                                                                                                                                                                  \
                                          </div>                                                                                                                                                                                                      \
                                      </div>                                                                                                                                                                                                          \
                                  </div>                                                                                                                                                                                                              \
                              </div>';
      
              table.insertAdjacentHTML("beforeend", cell);
              movieCount++;
            }
          }
      
          message = movieCount + " Movies " + nowShowing;
          document.getElementById("summary2").textContent = message;
          document.getElementById("parent2").textContent = "";
        }

    showMovieDetails(element)
    {
        var item = element.getAttribute("item");
        console.log(item);
        const currentIndex = item;
        console.log(this.movieArray[item]._id);
        // console.log("movie_array[item].title");
        document.getElementById("movieId").innerHTML=this.movieArray[item]._id;
        document.getElementById("movieTitle").innerHTML=this.movieArray[item].title;
        document.getElementById("moviePoster").src='./../images/products/' + this.movieArray[item].poster;
        document.getElementById("movieThumb").innerHTML='./../images/products/' + this.movieArray[item].thumb;
        document.getElementById("genre").innerHTML="<strong>Genre: </strong><br>"+this.movieArray[item].genre;
        document.getElementById("director").innerHTML="<br><strong>Story: </strong><br>"+this.movieArray[item].story;
        document.getElementById("release").innerHTML="<strong>Cast: </strong><br>"+this.movieArray[item].cast;
        document.getElementById("release").innerHTML="<br><strong>Advice: </strong><br>"+this.movieArray[item].advice;

        document.getElementById("trailer1").src=this.movieArray[item].video1;
        document.getElementById("trailer2").src=this.movieArray[item].video2;

        document.getElementById("buy").href=this.movieArray[item].buy;

        var movieModal = document.getElementById("movieModal");
        movieModal.style.display="block";
    }

    updateMovie(currentIndex) {
        console.log(document.getElementById("movieId").innerHTML);
        currentIndex = document.getElementById("movieId").innerHTML;
        console.log(currentIndex);
        const edit_movie_url = this.movieUrl + "/" + document.getElementById("movieId").innerHTML;
        const response = confirm("Are you sure you want to edit your information?");
        
        const thumb = document.getElementById("thumb1").value;
        const poster = document.getElementById("poster1").value;
        
        const editedMovie = {
            thumbnail: thumb,
            poster: poster,
        };
        console.log(editedMovie);
        
        if (response == true) {
            const updateMovie = new XMLHttpRequest();
            updateMovie.open("PUT", edit_movie_url, true);
            updateMovie.setRequestHeader("Content-Type", "application/json");
    
            //Update the movie object in the movieArray
            this.movieArray[currentIndex].thumb = thumb;
            this.movieArray[currentIndex].poster = poster;
    
            updateMovie.onload = function () {
                alert("Your movie information has been edited.");
            };
    
            // Send the updated movie object as a JSON string
            updateMovie.send(JSON.stringify(this.movieArray[currentIndex]));
        }
    }
    addMovie(){
      const newMovie = new XMLHttpRequest();
      newMovie.open('POST', this.movieUrl, true);
  
      const title = document.getElementById("createMovieTitle").value;
      const advice = document.getElementById("createMovieAdvice").value;
      const genre = document.getElementById("createMovieGenre").value;
      const duration = document.getElementById("createMovieDuration").value;
  
      const movieData = {
          "title": username,
          "advice": password,
          "genre": genre,
          "duration": duration
      }

      console.log(movieData)
      newMovie.setRequestHeader("Content-Type", "application/json");
      newMovie.onload = function () {
        alert("Movie Added");
        document.getElementById("createMovieTitle").value = "";
        document.getElementById("createMovieAdvice").value = "";
        document.getElementById("createMovieGenre").value = "";
        document.getElementById("createMovieDuration").value = "";
        
      };
      newMovie.send(JSON.stringify(movieData));
    }
    
}
  
  // Instantiate a Movies object and call the getMovieData method
  const movies = new Movies('/movies');
