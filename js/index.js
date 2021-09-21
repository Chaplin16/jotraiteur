function carousel(selector, data) {
    let element = document.querySelector(selector);
    data.forEach(function(d) {
        element.innerHTML += `
        <div class="carousel-item ${d.id == 1 ? "active" : ""} m-auto"> 
            <img src="${d.attachment}" alt="${d.alt}" style="width:auto; height:8rem">
        </div>` 
    })

$(element).slick({
    centerMode: true,
    centerPadding: '1.5rem',
    slidesToShow: 3,
    adaptiveHeight: true,
    speed:300,
    dots:true,
    autoplaySpeed:300,
    responsive: [{
            breakpoint: 1300,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '1rem',
                slidesToShow: 3
            }
       },
        {
            breakpoint: 1000,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '1rem',
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 1.3
            }
        },
        {
            breakpoint: 550,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 2,
                speed:300,
                dots:true,
                autoplaySpeed:300,
            }
        }
     ]
});
}

carousel(".firstCarousel", mainDish);
