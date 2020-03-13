// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.




// axios.get("https://lambda-times-backend.herokuapp.com/articles")
// .then((response) => {
//     // console.log(Object.keys(response.data.articles)[0]);
//     // console.log(response.data.articles)
// })


function createCard(input) {
    const card = document.createElement("div");
    card.classList.add("card");

        const headline = document.createElement("div");
        headline.classList.add("headline");
        headline.textContent = input.headline;
        card.appendChild(headline);

        const author = document.createElement("div");
        author.classList.add("author");
        card.appendChild(author);

            const imgContainer = document.createElement("div");
            imgContainer.classList.add("img-container");
            author.appendChild(imgContainer);

                const image = document.createElement("img");
                image.src = input.authorPhoto;
                imgContainer.appendChild(image);

            const authorName = document.createElement("span");
            authorName.textContent = input.authorName;
            author.appendChild(authorName);

    return card;
}




axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then((response) => {

    let articles = response.data.articles; //grab our articles
    
    //select what we're appending to
    let cardParent = document.querySelector(".cards-container")

    //for each of the topics
    for (let i = 0; i < Object.keys(articles).length; i++) {
        key = Object.keys(articles)[i];
        articleArray = articles[key];

       articleArray.forEach((item) => { //for each of the articles within the topic
           let newCard = createCard(item);
           cardParent.appendChild(newCard);
        //    console.log(`added article ${item} from ${key}`)
       })
        
    }

})


