let F = +prompt("Ingresar los F°")

function pasar(F){
    C=(F-32)/1.8
    return C
}

alert(`${F}°F equivalen a ${pasar(F)}°C`)