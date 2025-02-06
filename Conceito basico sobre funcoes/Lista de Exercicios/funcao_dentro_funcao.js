function sayMyName(name){
    return 'Meu nome é ' + name
}

function sayMyFriendsName(friendName){
    return sayMyName("José Vitor") + ' meu amigo se chama '+ friendName
}

(function main(){
    const myName = sayMyName("José Vitor")
    console.log(myName)
    console.log(sayMyFriendsName("Jove"))
})();