const matriculas = [
    202013810003, 
    202013810004, 
    202013810005, 
    202013810006,
    202013810007, 
    202013810008, 
    202013810009, 
    202013810010, 
    202013810014, 
    202013810016, 
    202013810018, 
    202013810020, 
    202013810026, 
    202013810028, 
    202013810029, 
    202013810032, 
    202013810033, 
    202013810035, 
    202013810040, 
    202013810043]
function sort() {
    const getRandomIntegerInclusive = (min, max) =>
        Math.floor(Math.random() * (max - min + 1)) + min

    const getRandomMatriculas = () =>
        matriculas[getRandomIntegerInclusive(0, matriculas.length - 1)]
    let a = document.getElementById("sort")
    a.innerText = getRandomMatriculas()
}
