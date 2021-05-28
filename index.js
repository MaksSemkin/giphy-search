// https://api.giphy.com/v1/gifs/search?api_key=[API_KEY]&q=[QUERY]&limit=[LIMIT]&offset=[OFFSET]
var req = null;
function clear(){
 let cl = document.getElementById('results');
while(cl.firstChild){
  cl.removeChild(cl.firstChild)
}
}
function queryGif(evt) {
  clear();  
  console.log(evt.target.value);
     req = evt.target.value;
    queryPic(req);
}

function results(link,preview){
  
  
  var ul = document.getElementById('results');
  var li = document.createElement('li');
  var a = document.createElement('a');
  var img = document.createElement('img');
  img.src = preview;
  a.href = link;
  a.appendChild(img);
  a.setAttribute('class','image');
  li.appendChild(a);
  ul.appendChild(li)
  }


let API_KEY = "zcOt7W7gpJIOj8zgAwE15EZHM7U6xlsJ";
let QUERY = req;
let LIMIT = 10;
let OFFSET = 0;

function formRequestDefault(evt){
        evt.preventDefault();
        evt.stopPropagation();
        
}

let formRequest=document.getElementsByTagName('form')[0];
formRequest.addEventListener('submit',formRequestDefault,false);


let query = document.getElementById('search');
query.addEventListener("search", queryGif, true);


function queryPic (req){
fetch('https://api.giphy.com/v1/gifs/search?api_key='+API_KEY+'&q='+req+'&limit='+LIMIT+'&offset='+OFFSET+'')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    var pics = data.data;
      console.log(pics);
      pics.forEach(element =>{results(element.url,element.images.original.url) 
      });
       
    });
  };

