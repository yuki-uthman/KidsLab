
let Toto = window.Toto.default;

let options = {
  verbose: false,
  autoStart: true,
  state: {
    speed: 0.5
  }
};


var element = document.getElementById("toto");

if(element == undefined){
  element = document.createElement("canvas")
  element.id = "toto"
  document.body.append(element)
  console.warn("Turtle helper could not find an existing canvas element. Created a custom one", element)
}

if(element.getAttribute("width") == undefined || element.getAttribute("height") == undefined){
  element.width = window.innerWidth;
  element.height = window.innerHeight;
}

window.toto = new Toto(element, options);

toto.setImage("./toto/turtle.png")
toto.setSize(70)

var styleTag = document.createElement("style");
styleTag.type = "text/css"
styleTag.innerHTML = `
  html, body{
    margin: 0;
    padding: 0;
  }

  #toto, #toto canvas{
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

document.body.append(styleTag)

console.log(toto)
