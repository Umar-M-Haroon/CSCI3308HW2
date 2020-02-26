var tweets = { "interest1": [], "interest2": [], "interest3": [] }
var id_counter = 0
function addCard(id) {

    var cardBody = document.getElementById(id);

    var tweet = document.createElement("div");
    tweet.classList.add("card");
    var tweetImage = document.createElement("img");
    tweetImage.classList.add("card-img-top");
    tweetImage.src = "./iu.png";
    tweetImage.alt = "Card Image Cap"
    tweetImage.width = 200

    var cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.innerText = "TEST TWEET TITLE!"

    var cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.innerText = "Tweet Description";

    var deleteButton = document.createElement("a");
    deleteButton.href = "";
    // deleteButton.classList.add("btn btn-primary");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function() {deleteTweet(tweet)};


    tweet.id = id_counter;
    tweets[id] = id_counter;
    id_counter += 1;
    tweet.innerText = id_counter;

    tweet.append(tweetImage)
    tweet.append(cardTitle);
    tweet.append(cardText);
    tweet.append(deleteButton);
    cardBody.appendChild(tweet);
}

function deleteTweet(id) {
    id.parentNode.removeChild(id)
}