const getBeerDoc = () =>
fetch('https://api.punkapi.com/v2/beers')

getBeerDoc()
.then(response => response.json())
.catch(e => console.error('Something went wrong', e))
.then(data => console.log('Hello', data.name))

