let cardDish = document.getElementById("card-dish");

dish.forEach(element => {
    cardDish.innerHTML += ` <div class="card border bg-warning " style="width:10rem">
                                <div class="card-body p-0 border border-danger border-3 rounded" >
                                    <h4 class="card-title text-center color text-warning d-flex align-items-center   justify-content-center">${element.name}</h4>
                                    <p class="card-text fw-bolder text-center pb-2">${element.description}</p>
                                </div>
                            </div> `
});
