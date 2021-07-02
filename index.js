var routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]
function wakeDog(name, breed){
    console.log(`Wake ${name} the ${breed}`)
    return `Wake ${name} the ${breed}`
}

function leashDog(name, breed){
    console.log(`Wake ${name} the ${breed}`)
    return `Leash ${name} the ${breed}`
}

function walkToPark(name, breed){
    console.log(`Walk to the park with ${name} the ${breed}`)
    return `Walk to the park with ${name} the ${breed}`
}

function throwFrisbee(name,breed){
    console.log(`Throw the frisbee for ${name} the ${breed}`)
    return `Throw the frisbee for ${name} the ${breed}`
}

function unleashDog(name, breed){
    console.log(`Unleash ${name} the ${breed}`)
    return `Unleash ${name} the ${breed}`
}


function walkHome(name, breed){
    console.log(`Walk home with ${name} the ${breed}`)
    return `Walk home with ${name} the ${breed}`
}

function exerciseDog(dogName, dogBreed){
    let answer = []

    for(let i = 0; i < routine.length; i++){
        answer.push(routine[i](dogName, dogBreed))
    }
    return answer
}