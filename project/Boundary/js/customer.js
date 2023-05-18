function openSearchModal() {
    var modal = document.getElementById("searchModal");
    modal.style.display = "block";
    movies.getMovieData4Customer();
  }
  
  function closeSearchModal() {
    var modal = document.getElementById("searchModal");
    modal.style.display = "none";
  }