document.getElementById("button").addEventListener("click", randomJokes);

function randomJokes() {
    let url = "http://api.serri.codefactory.live/random/";
    const request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function() {
        let result = JSON.parse(request.responseText);
        console.log(result);
        //you need to address the property result.joke
        document.getElementById("content").innerHTML = `Joke of the day: ${result.id_joke} - ${result.joke}`;
    }
    request.send();
}