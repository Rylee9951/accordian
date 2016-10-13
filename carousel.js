$(document).ready(function(){
  
  var carouselImages = [
    {
      image_url: 'https://interfacelift.com/wallpaper/7yz4ma1/03965_sunsetinthecascades_1280x720.jpg',
      title: 'Sunset in the Cascades',
      photographer_id: 'smpoutdoors'
    },
    {
      image_url: 'https://interfacelift.com/wallpaper/7yz4ma1/03958_seljalandsfossiceland_1280x720.jpg',
      title: 'Seljalandsfoss, Iceland',
      photographer_id: 'Robin Kamp'
    },
    {
      image_url: 'https://interfacelift.com/wallpaper/7yz4ma1/03950_godsrays_1280x720.jpg',
      title: 'Gods Rays',
      photographer_id: 'illuminati'
    }
  ];

  var htmlStr = ""
  carouselImages.forEach(function(item,i){
     htmlStr += `
       <div id="image${i}" class="pics">
          <div><img src="${item.image_url}" /></div>
          <span class= "title">"${item.title}" by <u>${item.photographer_id}</u></span>
           <div class= "prev">&laquo</div>
           <div class= "right">&raquo</div>
       </div>
       `
      
  })

     $("#container").html(htmlStr)
     $(".pics:first-child").addClass("current")
     
     



    $(".right").on('click', function(){
    
        var current = $(".current").attr("id").substr(5)
        var nextIndex = Number(current) + 1;
  
        if(nextIndex === carouselImages.length){
        nextIndex = 0
        }
     
      
     $(`#image${current}`).removeClass("current")
     $(`#image${nextIndex}`).addClass("current")
     
    })
    $(".prev").on('click', function(){
    
        var current = $(".current").attr("id").substr(5)
        var prevIndex = Number(current) - 1;
  
        if(prevIndex === -1){
        prevIndex = carouselImages.length-1
        }
     
      
     $(`#image${current}`).removeClass("current")
     $(`#image${prevIndex}`).addClass("current")
     
    })
})









