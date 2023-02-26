$(document).ready(function(){

    $('#profileripple').ripples({
        resolution:512,
        dropRadius:10
    });

    ////////////////////progress bars////////////

const bars=document.querySelectorAll('.progressbar');
//console.log(bars);

bars.forEach(function(bar){
    let percentage=bar.dataset.percent;
    let tooltip=bar.children[0];
    tooltip.innerText=percentage+"%";
    bar.style.width=percentage+"%";

   // console.log(percentage);

})

////////////////counter/////////////

const counters=document.querySelectorAll('.counter');
//console.log(counters);

function runcounter(){
    counters.forEach(counter=>{
        counter.innerText=0;

        ////getting target
        let target=+counter.dataset.count;
     //   console.log(target)
     let step=target/40;

     let countit=function(){
         let displaycount=+counter.innerText;
         if(displaycount<target){
             counter.innerText=Math.ceil(displaycount+step);
             //console.log(displaycount)
             setTimeout(countit,1);

         }else{
             counter.innerText=target;
         }
     }
     countit();
    })
}



let countersection=document.querySelector('.countersection');

let options={
    rootMargin:'0px 0px -100px 0px'
}

let done=0;
const sectionobserver=new IntersectionObserver(function(entries){

    if(entries[0].isIntersecting && done!==1){
        done=1;
        runcounter();

    }


},options)
sectionobserver.observe(countersection);





//////////////////////////imgae gallery

var $wrapper=$('.portfoliowrapper');

////initiaization
$wrapper.isotope({
    filter:'*',
    layoutMode:'masonry',
    animationOptions:{
        duration:750,
        easing:'linear'
    }
})
var links=document.querySelectorAll('.tabs a');
//onsole.log(links)

links.forEach(link=>{
    let selector=link.dataset.filter;

    //adding eventlistener on each link
    link.addEventListener('click',function(e){
        e.preventDefault();

        $wrapper.isotope({
            filter:selector,
            layoutMode:'masonry',
            animationOptions:{
                duration:750,
                easing:'linear'
            }
        });


        //removes active clas on all

       links.forEach(link=>{
           link.classList.remove('active');
       })

      // then apply on  selected only
         //on lcick we have to apply active class
       // e.target gives the link whihc we clicked
       e.target.classList.add('active');


    })
})


////////////maginfy popup/////////////////

$('.magnify').magnificPopup({
    type:'image',
    gallery:{
        enabled:true
    },
    zoom:{
        enabled:true
    }

})


//////////////////////////////testimonial slider
$('.slider').slick({
    arrows:false,
    autoplay:true

})





});


