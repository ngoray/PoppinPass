class Movies {
    constructor(movieUrl,moviesuspendURL,searchUrl) {
      this.movieUrl = movieUrl;
      this.moviesuspendURL = moviesuspendURL;
      this.searchUrl = searchUrl
      this.movieArray = [];
      this.comingSoon = "Coming Soon";
      this.nowShowing = "Now Showing";
    }

    searchMovies(){
      var input, filter, table, tr, td, a, i, txtValue;
        input = document.getElementById("movieSearch");
        filter = input.value.toUpperCase();
        table = document.getElementById("getMovies");
        const searchmovie = new XMLHttpRequest();

        if (filter === null)
        {
          document.getElementById("manageMovies").style.display="none";
          viewUserAccount()
        }

        else{
          const search1 = "%" +filter + "%"
          console.log ("search: " + search1);
          searchmovie.open('POST', this.searchUrl, true);

        const searchdata = {
          "search": search1
        }

        console.log("search data: "+ JSON.stringify(searchdata))

        searchmovie.setRequestHeader("Content-Type", "application/json");
        searchmovie.onload = function () {
          this.movieArray= []
          this.movieArray = JSON.parse(searchmovie.responseText);
          console.log("array length" + this.movieArray.length);
          document.getElementById("manageMovies").style.display="none";
          document.getElementById("getMovies").style.display="block";
          

          const table = document.getElementById("getMovies");
          let movieCount = 0;
          let message = "";
          table.innerHTML = "";
          const totalmovies = this.movieArray.length;
  
          for (let count = 0; count < totalmovies; count++)
          {
              const id = this.movieArray[count]._id;
              const title = this.movieArray[count].title;
              const advice = this.movieArray[count].advice;
              const genre = this.movieArray[count].availability;
              const duration = this.movieArray[count].duration;
  
  
              const cell ='<td style="width: 20%;">\
                            <strong id="movie_id" style="display:none;">\
                              '+id+'\
                            </strong>\
                            <a>\
                              '+title+'\
                            </a>\
                          </td>\
                          <td>\
                            <a>\
                              '+genre+'\
                            </a>\
                            <a id="movie_suspend" style="display:none;">Suspended</a>\
                          </td>\
                          <td  width="10%">\
                            <button item = '+count+' style="background-color:#333333a0;" onclick="movies.showMovieDetails2(this)">\
                              <img src="./../images/edit.png" width="30px" height="30px">\
                            </button>\
                            <button item = '+count+' style="background-color:#333333a0;" onclick="movies.updateMovieStatus(this)">\
                              <img src="./../images/delete.png" width="30px" height="30px">\
                            </button>\
                          </td>'
  
              table.insertAdjacentHTML("beforeend", cell);
              movieCount++;
          }
        };
        searchmovie.send(JSON.stringify(searchdata));
      }

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

    addMovie(){
      const newMovie = new XMLHttpRequest();
      newMovie.open('POST', this.movieUrl, true);
  
      const story = document.getElementById("createMovieStory").value;
      const video1 = document.getElementById("createMovieVideo1").value;
      const thumb = document.getElementById("picMovie").value;
      const video2 = document.getElementById("createMovieVideo2").value;
      const poster = document.getElementById("picMovie").value;
      const cast = document.getElementById("createMovieCast").value;
      const director = document.getElementById("createMovieDirector").value;
      const title = document.getElementById("createMovieTitle").value;
      const advice = document.getElementById("createMovieAdvice").value;
      const genre = document.getElementById("createMovieGenre").value;
      const duration = document.getElementById("createMovieDuration").value;
      const release = document.getElementById("createMovieRelease").value;
      const availability = document.getElementById("createMovieAvaliability").value;
      console.log("HERE" + title,advice,genre,duration);
  
      const movieData = {
          "story": story,
          "video1": video1,
          "thumb": thumb,
          "video2": video2,
          "poster": poster,
          "title": title,
          "advice": advice,
          "cast": cast,
          "director": director,
          "genre": genre,
          "duration": duration,
          "release": release,
          "availability": availability
      }

      console.log("MOVIE DATA = "+ movieData);
      newMovie.setRequestHeader("Content-Type", "application/json");
      newMovie.onload = function () {
        alert("Movie Added");
        document.getElementById("createMovieStory").value = "";
        document.getElementById("createMovieVideo1").value = "";
        document.getElementById("createMovieVideo2").value = "";
        document.getElementById("createMovieCast").value = "";
        document.getElementById("createMovieDirector").value = "";
        document.getElementById("createMovieRelease").value = "";
        document.getElementById("createMovieTitle").value = "";
        document.getElementById("createMovieAdvice").value = "";
        document.getElementById("createMovieGenre").value = "";
        document.getElementById("createMovieDuration").value = "";
        
        document.getElementById("createMovietable").style.display = "none";
        document.getElementById("manageMovies").style.display = "none";
        mMovies();
      };
      newMovie.send(JSON.stringify(movieData));
    }

    //everything below is used for manager page instead of homepage
    getMovieData2() {
      const request = new XMLHttpRequest();
      request.open("GET", this.movieUrl, true);
  
      // This function will be called when data returns from the web api
      request.onload = () => {
        // Get all the movies records into our movie array
        this.movieArray = JSON.parse(request.responseText);
  
        // Call the function to display all movies tiles for "Now Showing"
        this.displayMovies4Manager();
      };
  
      // This command starts the calling of the movies web api
      request.send();
    }

    displayMovies4Manager() {
        const table = document.getElementById("getMovies");
        let movieCount = 0;
        let message = "";
        table.innerHTML = "";
        const totalmovies = this.movieArray.length;

        for (let count = 0; count < totalmovies; count++)
        {
            const id = this.movieArray[count]._id;
            const title = this.movieArray[count].title;
            const advice = this.movieArray[count].advice;
            const genre = this.movieArray[count].availability;
            const duration = this.movieArray[count].duration;


            const cell ='<td style="width: 20%;">\
                          <strong id="movie_id" style="display:none;">\
                            '+id+'\
                          </strong>\
                          <a>\
                            '+title+'\
                          </a>\
                        </td>\
                        <td>\
                          <a>\
                            '+genre+'\
                          </a>\
                          <a id="movie_suspend" style="display:none;">Suspended</a>\
                        </td>\
                        <td  width="10%">\
                          <button item = '+count+' style="background-color:#333333a0;" onclick="movies.showMovieDetails2(this)">\
                            <img src="./../images/edit.png" width="30px" height="30px">\
                          </button>\
                          <button item = '+count+' style="background-color:#333333a0;" onclick="movies.updateMovieStatus(this)">\
                            <img src="./../images/delete.png" width="30px" height="30px">\
                          </button>\
                        </td>'

            table.insertAdjacentHTML("beforeend", cell);
            movieCount++;
        }
    
    }

//MANAGER EDIT MOVIE NOT DONE DONT CLICK
    showMovieDetails2(element)
    {
        var item = element.getAttribute("item");
        console.log(item);
        const currentIndex = item;
        console.log(this.movieArray[item]._id);
        // console.log("movie_array[item].title");
        document.getElementById("updateMovieId").value=this.movieArray[item]._id;
        document.getElementById("updateMovieTitle").value=this.movieArray[item].title;
        document.getElementById("updateMovieStory").innerHTML=this.movieArray[item].story;
        document.getElementById("updateMoviePic").src='./../images/products/' + this.movieArray[item].poster;
        document.getElementById("updatepicMovie").value=this.movieArray[item].poster;
        document.getElementById("updateMovieAvaliability").value = this.movieArray[item].availability;
        document.getElementById("updateMovieAdvice").value = this.movieArray[item].advice;
        document.getElementById("updateMovieGenre").value = this.movieArray[item].genre;
        document.getElementById("updateMovieRelease").value= this.movieArray[item].release;
        document.getElementById("updateMovieDirector").value=this.movieArray[item].director;
        document.getElementById("updateMovieDuration").value=this.movieArray[item].duration;

        document.getElementById("updateMovieVideo1").value=this.movieArray[item].video1;
        document.getElementById("updateMovieVideo2").value=this.movieArray[item].video2;

        document.getElementById("updateMovieCast").value=this.movieArray[item].cast;

        var movieModal = document.getElementById("updateMovietable");
        movieModal.style.display="block";
    }

    updateMovie4manager(currentIndex){
      var id = parseInt(document.getElementById("updateMovieId").value);
      console.log("id: "+ id);
    var currentIndex = -1;
    for (var i = 0; i < this.movieArray.length; i++) {
        if (id == this.movieArray[i]._id) {   
        currentIndex = i;
        break; // Exit the loop once a match is found
     }
    }

      const edit_movie_url = this.movieUrl + "/" + id;
      const response = confirm("Are you sure you want to edit this movie?");

        const title = document.getElementById("updateMovieTitle").value;
        const story = document.getElementById("updateMovieStory").innerHTML;
        const moviepic = document.getElementById("updatepicMovie").value;
        const avail = document.getElementById("updateMovieAvaliability").value;
        const advice = document.getElementById("updateMovieAdvice").value;
        const genre = document.getElementById("updateMovieGenre").value;
        const release = document.getElementById("updateMovieRelease").value;
        const director = document.getElementById("updateMovieDirector").value;
        const duration =document.getElementById("updateMovieDuration").value;

        const video1 = document.getElementById("updateMovieVideo1").value;
        const video2 = document.getElementById("updateMovieVideo2").value;

        const cast = document.getElementById("updateMovieCast").value;

        const editedMovie = {
          _id: id,
          title: title,
          story: story,
          poster: moviepic,
          availability: avail,
          advice: advice,
          genre: genre,
          release: release,
          director:director,
          duration: duration,
          video1: video1,
          video2: video2,
          cast: cast
        };

        console.log("array title: " + this.movieArray[currentIndex].title);
        if (response == true) {
          const updatemovie = new XMLHttpRequest();
          updatemovie.open("PUT", edit_movie_url, true);
          updatemovie.setRequestHeader("Content-Type", "application/json");

          console.log("array title: " + this.movieArray[currentIndex].title);
          this.movieArray[currentIndex].title = title;
          this.movieArray[currentIndex].story = story;
          this.movieArray[currentIndex].poster = moviepic;
          this.movieArray[currentIndex].availability = avail;
          this.movieArray[currentIndex].advice = advice;
          this.movieArray[currentIndex].genre = genre;
          this.movieArray[currentIndex].release = release;
          this.movieArray[currentIndex].director = director;
          this.movieArray[currentIndex].duration = duration;
          this.movieArray[currentIndex].video1 = video1;
          this.movieArray[currentIndex].video2 = video2;
          this.movieArray[currentIndex].cast = cast;

  
          updatemovie.onload = function () {
              alert("The movie information has been edited");
              document.getElementById("updateMovietable").style.display ="none";
              document.getElementById("manageMovies").style.display ="none";
  
              mMovies();
          };
  
          updatemovie.send(JSON.stringify(editedMovie));
          }

    }

    updateMovieStatus(element) {
      var item = element.getAttribute("item");
      console.log(item); // check the value of "item"
      console.log(this.movieArray[item]); // check the movie object at the specified index
      var id = this.movieArray[item]._id;
      console.log(id);
      const edit_movie_url = this.moviesuspendURL + "/" + id;
      
      const response = confirm("Are you sure you want to edit your information?");
        
      const availability = document.getElementById("movie_suspend").innerHTML;
        
      const editedMovie = {
            availability: availability
        };
        console.log(editedMovie);
        
      if (response == true) {
            const updateMovie = new XMLHttpRequest();
            updateMovie.open("PUT", edit_movie_url, true);
            updateMovie.setRequestHeader("Content-Type", "application/json");
    
            //Update the movie object in the movieArray
            this.movieArray[item].availability = availability;
    
            updateMovie.onload = function () {
                alert("Your movie information has been edited.");
                document.getElementById("manageMovies").style.display = "none";
                mMovies();
            };
    
            // Send the updated movie object as a JSON string
            updateMovie.send(JSON.stringify(this.movieArray[item]));
        }
    }


    
}
  
  // Instantiate a Movies object and call the getMovieData method
  const movies = new Movies('/movies', '/movie', '/searchmovie');
