function validateHello(greetings) {

    switch(greetings){
        case "hello":
        case "ciao":
        case "salut":
        case "hallo":
        case "hola":
        case "ahoj":
        case "czesc": {return true}
        default : return false
    }
}