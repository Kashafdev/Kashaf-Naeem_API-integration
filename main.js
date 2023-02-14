fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(json => {
    console.log(json);
    const markup = json.map(el => {
        return `
        <li class="card-container">
            <div class="image-container">
              <img class="round" src="https://xsgames.co/randomusers/assets/avatars/male/${el.id}.jpg">
    
            </div>
             <div class="name-container"> 
                 <span class="firstName">${el.name}</span>
                 <span class="lastName">${el.username}</span>
                
             </div> 
             <p class="email">${el.email}</p> 
             <a class="btn" href="#" role="button">View Profile</a> 
            </li>
        `
    });
    console.log(markup);
    document.querySelector('.list-container').innerHTML = markup.join('');
  
})

