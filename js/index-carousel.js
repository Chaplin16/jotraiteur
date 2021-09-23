function carousel(selector, data) {
    let element = document.querySelector(selector);
    data.forEach(function(d) {
        element.innerHTML += `
        <div class="carousel-item ${d.id == 1 ? "active" : ""} m-auto"> 
            <img src="${d.attachment}" alt="${d.alt}" style="width:auto; height:16rem">
        </div>` 
    })

$(element).slick({
    centerMode: false,
    centerPadding: '1.5rem',
    slidesToShow: 5,
    adaptiveHeight: true,
    speed:1000,
    dots:true,
    autoplay:true,
    autoplaySpeed:1200,
    arrows: true,
    infinite: true,
    responsive: [
  
        {
            breakpoint: 1500,
            settings: {
                centerPadding: '40px',
                slidesToShow: 4
            }
        },
        {
            breakpoint: 1300,
            settings: {
                centerPadding: '30px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 900,
            settings: {
                centerPadding: '40px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 700,
            settings: {
                centerPadding: '20px',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 550,
            settings: {
                centerPadding: '0px',
                slidesToShow: 1,
            }
        }
     ]
});
}

carousel(".firstCarousel", mainDish);
