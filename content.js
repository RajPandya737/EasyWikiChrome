console.log("ready to go");

var tabURL = window.location.href;
var queryString = window.location.search;

function callback(data){
    console.log(data);
}


if (tabURL.includes("https://en.wikipedia.org")){
    console.log(tabURL);
    navigator.clipboard.writeText(tabURL).then(() => {
        alert("successfully copied");
        window.open("https://easywiki.kaamidev.com/")}).catch(() => {
        alert("something went wrong");});
}
