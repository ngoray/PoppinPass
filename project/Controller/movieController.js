let movie_array = [];

class Movies {
    constructor(movieUrl,moviesuspendURL,searchUrl) {
      this.movieUrl = movieUrl;
      this.moviesuspendURL = moviesuspendURL;
      this.searchUrl = searchUrl
      this.comingSoon = "Coming Soon";
      this.nowShowing = "Now Showing";
    }

    getMovieDataST() {
      const request = new XMLHttpRequest();
      request.open("GET", this.movieUrl, true);
  
      // This function will be called when data returns from the web api
      request.onload = () => {
        // Get all the movies records into our movie array
        movie_array = JSON.parse(request.responseText);

        console.log("movie_array: "+ movie_array);
        // Call the function to display all movies tiles for "Now Showing"
        this.displayMovieDataST();

      };
  
      // This command starts the calling of the movies web api
      request.send();
    }

    displayMovieDataST(){
      const table = document.getElementById("createMovieST");
      const table2 = document.getElementById("updateMovieST");
      console.log("movie array length: "+ movie_array.length);
        let upCount = 0;
        let message = "";
        table.innerHTML = "";
        table2.innerHTML = "";
        const totalup = movie_array.length;
  
        for (let count = 0; count < totalup; count++)
        {
            const title = movie_array[count].title;
            const cell ='<option value="'+title+'">'+title+'</option>'
  
            table.insertAdjacentHTML("beforeend", cell);
            table2.insertAdjacentHTML("beforeend", cell);
            upCount++;
        }


    }


  


    //SHOW MOVIE DETAILS FOR CUSTOMER
    showMovieDetails(element){
        var item = element.getAttribute("item");
        console.log(item);
        const currentIndex = item;
        console.log(movie_array[item]._id);
        // console.log("movie_array[item].title");
        document.getElementById("movieId").innerHTML=movie_array[item]._id;
        document.getElementById("movieTitle").innerHTML=movie_array[item].title;
        document.getElementById("moviePoster").src='./../images/products/' + movie_array[item].poster;
        document.getElementById("movieThumb").innerHTML='./../images/products/' + movie_array[item].thumb;
        document.getElementById("genre").innerHTML="<strong>Genre: </strong><br>"+movie_array[item].genre;
        document.getElementById("director").innerHTML="<br><strong>Story: </strong><br>"+movie_array[item].story;
        document.getElementById("release").innerHTML="<strong>Cast: </strong><br>"+movie_array[item].cast;
        document.getElementById("release").innerHTML="<br><strong>Advice: </strong><br>"+movie_array[item].advice;

        document.getElementById("trailer1").src=movie_array[item].video1;
        document.getElementById("trailer2").src=movie_array[item].video2;

        document.getElementById("buy").href=movie_array[item].buy;

        var movieModal = document.getElementById("movieModal");
        movieModal.style.display="block";
    }


    //SHOW MOVIE DETAILS FOR MANAGER
    showMovieDetails2(element){
        var item = element.getAttribute("item");
        console.log(item);
        const currentIndex = item;
        console.log(movie_array[item]._id);
        // console.log("movie_array[item].title");
        document.getElementById("updateMovieId").value=movie_array[item]._id;
        document.getElementById("updateMovieTitle").value=movie_array[item].title;
        document.getElementById("updateMovieStory").innerHTML=movie_array[item].story;
        document.getElementById("updateMoviePic").src='./../images/products/' + movie_array[item].poster;
        document.getElementById("updatepicMovie").value=movie_array[item].poster;
        document.getElementById("updateMovieAvaliability").value = movie_array[item].availability;
        document.getElementById("updateMovieAdvice").value = movie_array[item].advice;
        document.getElementById("updateMovieGenre").value = movie_array[item].genre;
        document.getElementById("updateMovieRelease").value= movie_array[item].release;
        document.getElementById("updateMovieDirector").value=movie_array[item].director;
        document.getElementById("updateMovieDuration").value=movie_array[item].duration;

        document.getElementById("updateMovieVideo1").value=movie_array[item].video1;
        document.getElementById("updateMovieVideo2").value=movie_array[item].video2;

        document.getElementById("updateMovieCast").value=movie_array[item].cast;

        var movieModal = document.getElementById("updateMovietable");
        movieModal.style.display="block";
    }
    
}
  const movies = new Movies('/movies', '/movie', '/searchmovie');


// DONE
class CreateMovieController {
  constructor(movieUrl,moviesuspendURL,searchUrl) {
    this.movieUrl = movieUrl;
    this.moviesuspendURL = moviesuspendURL;
    this.searchUrl = searchUrl
  
    this.comingSoon = "Coming Soon";
    this.nowShowing = "Now Showing";
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
}
const createmoviecontroller = new CreateMovieController('/movies', '/movie', '/searchmovie');
// DONE
class ViewMovieController {
  constructor(movieUrl,moviesuspendURL,searchUrl) {
    this.movieUrl = movieUrl;
    this.moviesuspendURL = moviesuspendURL;
    this.searchUrl = searchUrl
    this.comingSoon = "Coming Soon";
    this.nowShowing = "Now Showing";
  }

     //everything below is used for manager page instead of homepage
     getMovieData4Manager() {
      const request = new XMLHttpRequest();
      request.open("GET", this.movieUrl, true);
  
      // This function will be called when data returns from the web api
      request.onload = () => {
        // Get all the movies records into our movie array
        movie_array = JSON.parse(request.responseText);
  
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
        const totalmovies = movie_array.length;

        for (let count = 0; count < totalmovies; count++)
        {
            const id = movie_array[count]._id;
            const title = movie_array[count].title;
            const advice = movie_array[count].advice;
            const genre = movie_array[count].availability;
            const duration = movie_array[count].duration;


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
                          <button item = '+count+' style="background-color:#333333a0;" onclick="suspendmoviescontroller.suspendMovieStatus(this)">\
                            <img src="./../images/delete.png" width="30px" height="30px">\
                          </button>\
                        </td>'

            table.insertAdjacentHTML("beforeend", cell);
            movieCount++;
        }
    
    }
}
const viewmoviecontroller = new ViewMovieController('/movies', '/movie', '/searchmovie');
//DONE
class CustomerViewMovieController {
  constructor(movieUrl,moviesuspendURL,searchUrl) {
    this.movieUrl = movieUrl;
    this.moviesuspendURL = moviesuspendURL;
    this.searchUrl = searchUrl
    this.comingSoon = "Coming Soon";
    this.nowShowing = "Now Showing";
  }

      
      getMovieData() {
        const request = new XMLHttpRequest();
        request.open("GET", this.movieUrl, true);
    
        
        request.onload = () => {
         
          movie_array = JSON.parse(request.responseText);
    
          this.displayMovies(this.comingSoon);
          this.displayMovies2(this.nowShowing);
        };
    
       
        request.send();
      }
  
     
      displayMovies(comingSoon) {
        const table = document.getElementById("moviesTable");
        let movieCount = 0;
        let message = "";
    
        table.innerHTML = "";
        const totalMovies = movie_array.length;
    
        for (let count = 0; count < totalMovies; count++) {
          if (movie_array[count].availability === comingSoon) {
            const thumbnail = "products/" + movie_array[count].thumb;
            const title = movie_array[count].title;
    
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
              movie_array[count].genre +
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
  
          displayMovies2(nowShowing) {
            const table = document.getElementById("moviesTable2");
            let movieCount = 0;
            let message = "";
        
            table.innerHTML = "";
            const totalMovies = movie_array.length;
        
            for (let count = 0; count < totalMovies; count++) {
              if (movie_array[count].availability === nowShowing) {
                const thumbnail = "products/" + movie_array[count].thumb;
                const title = movie_array[count].title;
        
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
                  movie_array[count].genre +
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
}
const customerviewmoviecontroller = new CustomerViewMovieController('/movies', '/movie', '/searchmovie');
// DONE
class UpdateMovieController {
  constructor(movieUrl,moviesuspendURL,searchUrl) {
    this.movieUrl = movieUrl;
    this.moviesuspendURL = moviesuspendURL;
    this.searchUrl = searchUrl
    this.comingSoon = "Coming Soon";
    this.nowShowing = "Now Showing";
  }

  updateMovie4manager(currentIndex){
    var id = parseInt(document.getElementById("updateMovieId").value);
    console.log("id: "+ id);
  var currentIndex = -1;
  for (var i = 0; i < movie_array.length; i++) {
      if (id == movie_array[i]._id) {   
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

      console.log("array title: " + movie_array[currentIndex].title);
      if (response == true) {
        const updatemovie = new XMLHttpRequest();
        updatemovie.open("PUT", edit_movie_url, true);
        updatemovie.setRequestHeader("Content-Type", "application/json");

        console.log("array title: " + movie_array[currentIndex].title);
        movie_array[currentIndex].title = title;
        movie_array[currentIndex].story = story;
        movie_array[currentIndex].poster = moviepic;
        movie_array[currentIndex].availability = avail;
        movie_array[currentIndex].advice = advice;
        movie_array[currentIndex].genre = genre;
        movie_array[currentIndex].release = release;
        movie_array[currentIndex].director = director;
        movie_array[currentIndex].duration = duration;
        movie_array[currentIndex].video1 = video1;
        movie_array[currentIndex].video2 = video2;
        movie_array[currentIndex].cast = cast;


        updatemovie.onload = function () {
            alert("The movie information has been edited");
            document.getElementById("updateMovietable").style.display ="none";
            document.getElementById("manageMovies").style.display ="none";

            mMovies();
        };

        updatemovie.send(JSON.stringify(editedMovie));
        }

  }

}
const updatemoviecontroller = new UpdateMovieController('/movies', '/movie', '/searchmovie');
// DONE
class SuspendMoviesController {
  constructor(movieUrl,moviesuspendURL,searchUrl) {
    this.movieUrl = movieUrl;
    this.moviesuspendURL = moviesuspendURL;
    this.searchUrl = searchUrl
    this.comingSoon = "Coming Soon";
    this.nowShowing = "Now Showing";
  }

  suspendMovieStatus(element) {
    var item = element.getAttribute("item");
    console.log(item); // check the value of "item"
    console.log(movie_array[item]); // check the movie object at the specified index
    var id = movie_array[item]._id;
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
          movie_array[item].availability = availability;
  
          updateMovie.onload = function () {
              alert("Your movie information has been edited.");
              document.getElementById("manageMovies").style.display = "none";
              mMovies();
          };
  
          // Send the updated movie object as a JSON string
          updateMovie.send(JSON.stringify(movie_array[item]));
      }
  }

}
const suspendmoviescontroller = new SuspendMoviesController('/movies', '/movie', '/searchmovie');

class SearchMoviesController {
  constructor(movieUrl,moviesuspendURL,searchUrl) {
    this.movieUrl = movieUrl;
    this.moviesuspendURL = moviesuspendURL;
    this.searchUrl = searchUrl
    this.comingSoon = "Coming Soon";
    this.nowShowing = "Now Showing";
  }
}
const searchmoviescontroller = new SearchMoviesController('/movies', '/movie', '/searchmovie');