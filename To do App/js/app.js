showthings();
let addBtn = document.getElementById('add_btn');
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("To_Do");
    let things = localStorage.getItem("things");
    if (things == null) {
        thingsObj = [];
    }
    else {
        thingsObj = JSON.parse(things);
    }
    thingsObj.push(addTxt.value);
    localStorage.setItem("things", JSON.stringify(thingsObj));
    addTxt.value = "";
    console.log(thingsObj);

    showthings();
})

function showthings() {
    let things = localStorage.getItem("things");
    if (things == null) {
        thingsObj = [];
    }
    else {
        thingsObj = JSON.parse(things);
    }
    let html = "";
    thingsObj.forEach(function(element, index) {
        html += `
        <div class="my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${index+1}</h5>
          <p class="card-text">${element}</p>
          <button id="${index}" onclick="things_done(this.id)" class="btn btn-primary">Done</button>
        </div>
      </div>`;
    });
    let thingselm=document.getElementById('to_do_list');
    if(thingsObj.length!=0){
        thingselm.innerHTML=html;
    }
    else{
        thingselm.innerHTML=`<h1 style="margin-top:10%; margin-left:40%;">You are all done!</h1>`
    }
}

function things_done(index){
    let things = localStorage.getItem("things");
    if (things == null) {
        thingsObj = [];
    }
    else {
        thingsObj = JSON.parse(things);
    }

    thingsObj.splice(index,1);
    localStorage.setItem("things", JSON.stringify(thingsObj));
    showthings();
}
