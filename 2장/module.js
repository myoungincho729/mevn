const cook = {
    create : recipe => recipe.start()
}
const pasta = {
    start : () => console.log('pasta cooking')
}
const steak = {
    start : () => console.log('steak cooking')
}
cook.create(pasta);
cook.create(steak);