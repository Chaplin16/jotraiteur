let cardOpinion= document.getElementById("card-opinion");

comments.forEach(element => {
    cardOpinion.innerHTML += `
                <div class="card border-0 w-100">
                    <div class="card-body">
                        <q>
                          <em>${element.comment}</em>
                        </q>
                    
                        <p class="float-end">
                            <b>${element.author} </b>(${element.town}) 
                        </p>
                    </div>
                </div> `
});