
let addToy = false;
// oneToyName.textContent = oneToy.name
// const oneToyImg = document.createElement('img')
// oneToyonTheDom.append(oneToyName)
// oneToyonTheDom.append(oneToyImg)



//   <div class="card">
//   <h2>Woody</h2>
//   <img src="[toy_image_url]" class="toy-avatar" />
//   <p>4 Likes </p>
//   <button class="like-btn" id="[toy_id]">Like <3</button>
 


document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });


fetch('http://localhost:3000/toys')
.then( res => res.json())
.then(fetchData =>{ theStateOfOurFetchData = fetchData

let oneToy = theStateOfOurFetchData[0]

const toyCollectionDiv = document.querySelector('#toy-collection')
  
const oneToyonTheDom = document.createElement("div")
oneToyonTheDom.setAttribute('class', 'card');


oneToyonTheDom.innerHTML =
 `<h2> ${oneToy.name}</h2>
  <img src='${oneToy.image}' class="toy-avatar" />
  <p> ${oneToy.likes} Likes </p>
  <button class="like-btn" id='${oneToy.id}'>Like <3</button>`

 
  


toyCollectionDiv.append(oneToyonTheDom)

const oneToyonTheDomLikeBtn = document.querySelector('.like-btn')

oneToyonTheDomLikeBtn.addEventListener('click', () =>{ 

let likesfromOneToyOnTheDom = ++oneToy.likes

pTagOneToyOnTheDom = oneToyonTheDom.querySelector('p')

pTagOneToyOnTheDom.innertext = `${likesfromOneToyOnTheDom} Likes`}

)}
)})
