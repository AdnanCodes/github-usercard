/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

const cards = document.querySelector('.cards')
//const user = 'AdnanWebDev'


const followersArray = ['tetondan','dustinmyers', 'justsml', 'luishrd', 'bigknell','AdnanWebDev'];

followersArray.forEach(user => {
axios.get(`https://api.github.com/users/${user}`)
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
.then(data => {
  console.log('Cool stuff here', data)
  const mycard = createCard(data.data)
  cards.appendChild(mycard)
})
.catch(error => {
  console.log('API is currently down', error)
})
})
/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/

function createCard(data){

  //DOM Elements
  //const cards = document.querySelector('cards')
  
  const card = document.createElement('div')
  const img = document.createElement('img')
  const cardInfo = document.createElement('div')
  const realName = document.createElement('h3')
  const userName = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const userLink = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  //Setting up DOM structure to HTML
  //cards.appendChild(card)
  card.appendChild(img)
  card.appendChild(cardInfo)
  cardInfo.appendChild(realName)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)

  //Setting up class names for DOM elements

  card.classList.add('card')
  cardInfo.classList.add('card-info')
  realName.classList.add('name')
  userName.classList.add('username')

  //Setting up the content to elements

  img.src = data.avatar_url
  realName.textContent = data.name
  userName.textContent = data.login
  location.textContent = `Location: ${data.location}`
  userLink.href = data.html_url
  userLink.textContent = data.html_url
  profile.textContent = `Profile: `
  profile.appendChild(userLink)
  followers.textContent = `Followers: ${data.followers}`
  following.textContent = `Following: ${data.following}`
  bio.textContent = `Bio: ${data.bio}`

  return card

}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
