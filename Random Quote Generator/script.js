const api_url = "https://api.quotable.io/random";
const author = document.getElementById("author");
const quote = document.getElementById("quote");

async function getquotes(url){
    const response = await fetch(url);
    var data = await response.json();
    console.log(data);
    quote.innerHTML = data.content;
    author.innerHTML = "- " + data.author;
}

getquotes(api_url);

function tweet(){
    window.open( href="https://twitter.com/intent/tweet?text=" + quote.innerHTML + author.innerHTML, "tweet window" );
}