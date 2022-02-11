var gallary= document.getElementById("gallary");
var images= new Array(
    "photo/scout.jpg",
    "photo/build1.jpg",
    "photo/nkm-4.jpg",
    "photo/nkm-5.jpg",
    "photo/campus.jpg"
);
var len= images.length;
var i= 0;

function slider(){
    if(i > len-1){
        i = 0;
    }
    gallary.src= images[i];
    i++;
    setTimeout('slider()',3000);
}

//aos slider animation
AOS.init({
    offset: 50, 
    duration: 500,
  });