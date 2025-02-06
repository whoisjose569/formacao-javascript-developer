function verifyAge(age) {
    if (age >= 18) {
        return 'Maior de Idade';
    } else {
        return 'Menor de Idade'
    }
}

(function main(){
    console.log(verifyAge(18))
})();