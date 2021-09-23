let cardDish = document.getElementById("card-dish");

dish.forEach(element => {
    cardDish.innerHTML += ` <div class="card border shadow bg-warning mb-2 me-2" style="width:9rem">
                                <div class="card-body p-0 border border-danger border-3 rounded" >
                                    <h3 class="card-title text-center color text-warning d-flex align-items-center   justify-content-center">${element.name}</h3>
                                    <p class="card-text fw-bolder text-center p-1 pb-2">${element.description}</p>
                                </div>
                            </div> `
});
