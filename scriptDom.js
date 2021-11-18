const taskContainer = document.querySelector(".task_container");
console.log(taskContainer);

const globalStore = [];

const generateHtml=(taskData)=>{
  return `
  <div id=${taskData.id} class="col-md-6 col-lg-4">
    <div class="card">
<div class="card-header d-flex justify-content-end gap-2">
<button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
<button type="button" class="btn btn-outline-danger"><i class="fas fa-trash"></i></button>
</div>
<img src=${taskData.imageurl} class="card-img-top" alt="...">
<div class="card-body">
<h5 class="card-title fw-bold text-primary">${taskData.tasktitle}</h5>
<p class="card-text">${taskData.taskdescription}</p>
<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
  </div>
  `
}
const saveChanges = () => {
  const taskData = {
    id: `${Date.now()}`,
    imageurl: document.getElementById("imageURL").value ,
    tasktitle: document.getElementById("taskTitle").value,
    tasktype: document.getElementById("taskType").value,
    taskdescription: document.getElementById("taskDescription").value
  };
  taskContainer.insertAdjacentHTML("beforeend", newCard);

  globalStore.push(taskData);

  localStorage.setItem("tasky",JSON.stringify({cards: globalStore}));
}

const loadInitialData = () =>{
  const getCardData = localStorage.getItem("tasky"); 

  const {cards} = JSON.parse(getCardData);

  cards.map((cardObject)=>{
    taskContainer.insertAdjacentHTML("beforeend", generateHtml(cardObject))
    globalStore.push(cardObject)
  })

}
//localStorage to get tasky card data 
  //convert the string to a normal object
  //loop over the array of task object to create HTML cards , inject it to our dom
  //update our global store