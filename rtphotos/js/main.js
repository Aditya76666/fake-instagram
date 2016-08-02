var pusher,
    channel,
    apiToken = 'da04f5af68a3ed9b77d1',
    photoAPI = '',
    // photoAPI = '',

// Pusher connection
pusher = new Pusher(apiToken, {
  encrypted: true
})

// Pusher channel and event subscription
channel = pusher.subscribe('photos')
channel.bind('new_photo', function(data) {
  console.log(data)
})

function renderPhoto(photoObject) {
  var photos = document.getElementById('photos')

  var div = document.createElement('div')
  div.classList.add('col-sm-3')

  var img = document.createElement('img')
  img.setAttribute('src', photoObject.photo)
  div.appendChild(img)

  var caption = document.createElement('h4')
  caption.classList.add('caption')
  caption.innerHTML = photoObject.caption
  div.appendChild(caption)

  photos.appendChild(div)

}

renderPhoto({photo: 'https://unsplash.it/300/?random', caption: 'Hello'})

renderPhoto({photo: 'https://unsplash.it/300/?random', caption: 'Amber, you are so talented!'})

renderPhoto({photo: 'https://unsplash.it/300/?random', caption: 'How do you even do it?'})

renderPhoto({photo: 'https://unsplash.it/300/?random', caption: 'You are a great dog mom!'})

// fetch(photoAPI)
//
// .then(function(data) {
//   return data.json()
// })
//
// .then(function(photos) {
//   photos.forEach(function(photoObject) {
//
//     renderPhoto(photoObject)
//   })
// })
//
// .catch(function(ex) {
//   console.log('parsing failed', ex)
// })
