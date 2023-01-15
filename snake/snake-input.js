let inputDirection = {x:0, y:0}
let lastInputDirection = {x:0, y:0}

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.y !==0) break
            inputDirection = { x:0, y:-1}
            break
        case 'ArrowDown':
            if (lastInputDirection.y !==0) break
            inputDirection = {x:0, y:1} 
        case 'ArrowRight':
            if (lastInputDirection.y !==0) break
            inputDirection = { x:1, y:0}
            break
        case 'ArrowLeft':
            if (lastInputDirection.y !==0) break
            inputDirection = {x:-1, y:0} 
}
})

export function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}


