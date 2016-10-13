$(document).ready(function(){
  
  var carouselImages = [
    {
      image_url: 'https://placekitten.com/1280/720',
      title: 'Sunset in the Cascades',
      photographer_id: 'smpoutdoors'
    },
    {
      image_url: 'https://placekitten.com/1280/720',
      title: 'Seljalandsfoss, Iceland',
      photographer_id: 'Robin Kamp'
    },
    {
      image_url: 'https://placekitten.com/1280/720',
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
          
       </div>
       `
      
  })

     $("#container").html(htmlStr)
     $(".pics:first-child").addClass("current")
     
     var automate = {
      interval: null,
      start: function() {
          this.interval = setInterval(function(){
                next()
              }, 3000)
            },
            stop: function() {
              clearInterval(this.interval)
            },
            startOver: function() {
              this.stop();
              this.start();
            }
       }
      //automate.start()


    $(".next").on('click', function(){
    
        var current = $(".current").attr("id").substr(5)
        var nextIndex = Number(current) + 1;
  
        if(nextIndex === carouselImages.length){
        nextIndex = 0
        }
     
      
     $(`#image${current}`).removeClass("current")
     $(`#image${nextIndex}`).addClass("current")
     //automate.startover()
    })
    $(".prev").on('click', function(){
    
        var current = $(".current").attr("id").substr(5)
        var prevIndex = Number(current) - 1;
  
        if(prevIndex === -1){
        prevIndex = carouselImages.length-1
        }
     
      
     $(`#image${current}`).removeClass("current")
     $(`#image${prevIndex}`).addClass("current")
     //automate.startover()
    })
})









