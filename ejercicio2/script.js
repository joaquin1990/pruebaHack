const containerList = document.querySelector("#listContainer");
const button = document.querySelector("#addingButton");

button.addEventListener("click", addNewPerson);

fetch("https://reqres.in/api/users?page=1")
  .then((resp) => resp.json())
  .then((data) => {
    data.data.forEach((person) => {
      containerList.innerHTML += `
        <div class="individual-container">
            <img class = "image-style" src="${person.avatar}" alt="Image of a Person">
            <p class = "name-style">${person.first_name} ${person.last_name}</p>
        </div>`;
    });
  });

let counter = 0;
function addNewPerson() {
  fetch("https://reqres.in/api/users?page=2")
    .then((resp) => resp.json())
    .then((data) => {
      let person = data.data[counter];
      containerList.innerHTML += `
          <div class="individual-container">
              <img class="image-style" src="${person.avatar}" alt="Image of a Person">
              <p class="name-style">${person.first_name} ${person.last_name}</p>
          </div>`;
    });
  counter++;
  if (counter === 6) {
    counter = 0;
  }
}
