var count=0;
var itemLength = document.querySelectorAll('.slider-item');
itemLength[count].style.display="inline-block";

var nextSlide = function(){
    console.log(count);
    itemLength[count].style.display="none";
   if(count>itemLength.length) {
       return count;
   }
  
       count++;
    
   itemLength[count].style.display="inline-block";  
}
var prevSlide = function(){
    itemLength[count].style.display="none";
   if(count==0) {count = itemLength.length;}
   else {count --;}
   itemLength[count].style.display="inline-block";  
}
document.querySelector('.nextArrow').addEventListener('click',nextSlide,false)
document.querySelector('.prevArrow').addEventListener('click',prevSlide,false)