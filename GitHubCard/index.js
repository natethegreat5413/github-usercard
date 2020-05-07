import axios from 'axios'
/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/




/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 
   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/




  
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:*/

// My Card
axios.get('https://api.github.com/users/natethegreat5413')
  .then( res => {
    let data = res.data
      newCard.append(userCard(data))     
    })
 
  .catch( error => {
    console.log('could not get request', error)
  })


// My function
function userCard(data){
//create Elements
const card = document.createElement('div'),
   userImg = document.createElement('img'),
   cardInfo = document.createElement('div'),
   name  = document.createElement('h3'),
   userName = document.createElement('p'),
   location = document.createElement('p'),
   profile = document.createElement('p'),
   githubPage = document.createElement('a'),
   followers = document.createElement('p'),
   following = document.createElement('p'),
   bio = document.createElement('p');
//append
card.append(userImg)
card.append(cardInfo)
cardInfo.append(name)
cardInfo.append(userName)
cardInfo.append(location)
cardInfo.append(profile)
cardInfo.append(followers)
cardInfo.append(following)
cardInfo.append(bio)
profile.append(githubPage)
//add classes
card.classList.add('card')
userImg.src = data.avatar_url
cardInfo.classList.add('card-info')
name.classList.add('name')
userName.classList.add('username')
//text content
name.textContent = data.name
userName.textContent = data.login
location.textContent = `Location: ${data.location}`
profile.textContent = `Profile: ${data.url}`
// githubPage.textContent = data.url
followers.textContent = `Followers: ${data.followers}`
following.textContent = `Following: ${data.following}`
bio.textContent = `Bio: ${data.bio}`

return card

}

// My followers Cards
const newCard = document.querySelector('.cards')
axios.get('https://api.github.com/users/natethegreat5413/followers')
  .then(res => {
    res.data.map(data => {

      axios.get(data.url)

        .then(res => {
          let data = res.data
            newCard.append(userCard(data))
        })
        .catch(

        )
    })
  })
  .catch(error => {

  })
 
