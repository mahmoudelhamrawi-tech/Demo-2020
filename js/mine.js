let lis = $(".colors-option .colors-option-list  li");

$(".options i").click(function(){
    $(".colors-option").toggle(500)
})



lis.eq(0).css("backgroundColor","green");
lis.eq(1).css("backgroundColor","red");
lis.eq(2).css("backgroundColor","gray");
lis.eq(3).css("backgroundColor","blue");
lis.eq(4).css("backgroundColor","tomato");

lis.click(function(){
    let mycolor = $(this).css("backgroundColor");
    console.log(mycolor)
    $("h1,h2,h3,h4,h5,h6").css("color",mycolor)
})

$(".colors-option img").click(function(){
    let srcs = $(this).attr("src")
    // $(".home").css("backgroundImage","url("+srcs+")")
    $(".home").css("backgroundImage",`url(${srcs})`)
})



 let scrolloffset = $(".getacess-section").offset().top;

$(window).scroll(function(){
  let scrolltopsss=$(window).scrollTop();
  if(scrolltopsss >scrolloffset){
    $(".getacess-section").css("backgroundColor","red")
  }else{
    $(".getacess-section").css("backgroundColor","transparent")

  }
})

let scrolloffsetservice = $(".about-section").offset().top;
$(window).scroll(function(){
    let scrolltopss=$(window).scrollTop();
    if(scrolltopss >  scrolloffsetservice)
{
    $(".header").css("backgroundColor","rgba(0, 0, 0, 0.6)")

}
else{
    $(".header").css("backgroundColor","transparent")

}

})
    








let scrolltopbtn = $("#seebtn").offset().top;
$(window).scroll(function(){
   let scrolltops = $(window).scrollTop();
   if(scrolltops > 1200)
   {
    $("#seebtn").css("display","block")
   }else{
    $("#seebtn").css("display","none")

   }
  
})



$("#seebtn").click(function(){
    $("body,html").animate({scrollTop:0},1000)
   })




$(".content-section .nav  li  a").click(function(){
 let ref = $(this).attr("href");
 let refoffset = $(ref).offset().top;
 $("body,html").animate({scrollTop:refoffset},500)

 console.log(refiffset)

})

// $(document).ready(function(){
//     $("#loading").fadeOut(8000,function(){
//         $("body").css("overflow","auto")
//     })
// })
window.onload=function(){
    $("#loading").fadeOut(2000,function(){
        $("body").css("overflow","auto")
    })
}




