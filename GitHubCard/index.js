import axios from 'axios'
/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios
.get('https://api.github.com/users/natethegreat5413')
.then((response) => {
  let data = response.data
  newCard.appendChild(cardMaker(data))
})

.catch(error => {
  // console.log('error: ', error)
});


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


//  Step 3: Create a function that accepts a single object as its only argument,
//           Using DOM methods and properties, create a component that will return the following DOM element:


// THIS IS MY FUNCTION

function cardMaker(data) {
  //Instantiate elements

  const card = document.createElement('div')
  const userImg = document.createElement('img')
  const cardInfo = document.createElement('div')
  const nameOfUser = document.createElement('h3')
  const usersUserName = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const link = document.createElement('a')
  const userFollowers = document.createElement('p')
  const userFollowing = document.createElement('p')
  const userBio = document.createElement('p')

  //nesting

  card.appendChild(userImg)
  card.appendChild(cardInfo)
  cardInfo.appendChild(nameOfUser)
  cardInfo.appendChild(usersUserName)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  cardInfo.appendChild(userFollowers)
  cardInfo.appendChild(userFollowing)
  cardInfo.appendChild(userBio)
  profile.appendChild(link)


  // class names

  card.classList.add('card')
  cardInfo.classList.add('card-info')
  nameOfUser.classList.add('name')
  usersUserName.classList.add('username')

  // set text content

  nameOfUser.textContent = data.name
  usersUserName.textContent = data.login
  // link.textContent = object.url
  location.textContent = (`Location: ${data.location}`)
  link.textContent = (`${data.html_url}`)
  userFollowers.textContent = (`Followers: ${data.followers}`)
  userFollowing.textContent = (`Following: ${data.following}`)
  userBio.textContent = (`Bio: ${data.bio}`)


  //set src for image

  userImg.src = data.avatar_url


  return card
}

const newCard = document.querySelector('.cards')



// <div class="card">
//   <img src={image url of user} />
//   <div class="card-info">
//     <h3 class="name">{users name}</h3>
//     <p class="username">{users user name}</p>
//     <p>Location: {users location}</p>
//     <p>Profile:  
//       <a href={address to users github page}>{address to users github page}</a>
//     </p>
//     <p>Followers: {users followers count}</p>
//     <p>Following: {users following count}</p>
//     <p>Bio: {users bio}</p>
//   </div>
// </div>

axios.get('https://api.github.com/users/natethegreat5413/followers')
.then( res => {
  const newData = res.data
  newData.forEach(follower => {
    
   axios
    .get(follower.url)

    .then( res => {
      const user = res.data
      newCard.appendChild(cardMaker(user))
    }
    
    )

    .catch(

    )
  })


})
.catch(err => {
  // console.log(`Error: ${err}`)
})



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
