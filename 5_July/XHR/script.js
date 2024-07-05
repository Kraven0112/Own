const clientName = document.querySelector(".name")
const title = document.querySelector(".city")
const body = document.querySelector(".country")
const comment = document.querySelector(".comment")
const recipe = document.querySelector('.recipe')

function makeHttpRequest(method, url, callback) {
  const xhr = new XMLHttpRequest()

  xhr.addEventListener("load", () => {
    callback(JSON.parse(xhr.response))
  })
  xhr.open(method, url)
  xhr.send()
}

makeHttpRequest("GET", `https://dummyjson.com/users`, (userData) => {
  console.log(userData.users[0])
  clientName.innerHTML = `Name : ${userData.users[0].firstName} ${userData.users[0].lastName}`
  makeHttpRequest("GET", `https://dummyjson.com/posts`, (postData) => {
    console.log(postData.posts[0])
    title.innerHTML = `title : ${postData.posts[0].title}`
    body.innerHTML = `Post : ${postData.posts[0].body}`
    makeHttpRequest("GET", `https://dummyjson.com/comments`, (commentData) => {
      console.log(commentData)
      comment.innerHTML = `Comment : ${commentData.comments[5].body}`
      makeHttpRequest('GET',`https://dummyjson.com/recipes`,(recipeData)=>{
        console.log(recipeData)
        recipe.innerHTML =`Recipe : ${recipeData.recipes[3].name}`
      })
    })
  })
})
