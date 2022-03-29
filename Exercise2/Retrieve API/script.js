window.addEventListener("load", retreiveData);

function retreiveData() {
    let url = "http://localhost:3000/xampp/htdocs/Day44_API/Classwork/Exercise2/displayAll.php";
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function() {
        //get only the data with .data property
        let result = JSON.parse(request.responseText).data;
        console.log(result);
        for (value of result) {
            document.getElementById("result").innerHTML += `<div class="card m-3" style="width: 18rem;">
            <img src="${value.picture}" class="card-img-top boximage" alt="${value.name}" width="70px" height="180px">
            <div class="card-footer">${value.name}</div>
            <div class="card-text">Price: EUR ${value.price}</div>
            </div>`
        }
    }
    request.send();
}