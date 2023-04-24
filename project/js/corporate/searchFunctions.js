function searchStaffAccount() {
    var input, filter, table, tr, td, a, i, txtValue;
    input = document.getElementById("staffSearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("getStaffAccount");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        x = tr[i].getElementsByTagName("a")[0];
        txtValue = x.textContent || x.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}


function searchCustomerAccount() {
    var input, filter, table, tr, td, a, i, txtValue;
    input = document.getElementById("customerSearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("getCustomerAccount");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        x = tr[i].getElementsByTagName("a")[0];
        txtValue = x.textContent || x.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}

function searchMovies() {
    var input, filter, table, tr, td, a, i, txtValue;
    input = document.getElementById("movieSearch");
    filter = input.value.toUpperCase();
    table = document.getElementById("getMovies");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        x = tr[i].getElementsByTagName("a")[0];
        txtValue = x.textContent || x.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
        } else {
            tr[i].style.display = "none";
        }
    }
}