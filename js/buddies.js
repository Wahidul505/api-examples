const loadBuddies = () => {
  fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddies(data))
}
loadBuddies();
const displayBuddies = data => {
  console.log(data.results)
  const buddies = data.results;
  const buddiesContainer = document.getElementById('buddies');
  for (const buddy of buddies) {
    const buddyDiv = document.createElement('div');
    buddyDiv.innerHTML = `
    <img src="${buddy.picture.medium}">
    <h2>Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}</h2>
    <h3>Email: ${buddy.email}</h3>`
    buddiesContainer.appendChild(buddyDiv);
  }
}