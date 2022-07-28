export function useChangeColor() {
    function changeColor(index = 1) {
        for (let index = 0; index <= 4; index++) {
            document.body.classList.remove('theme' + index)     
        }
         
        if ( index ) {
            document.body.classList.add('theme' + index)
        } else {
            document.body.classList.add('theme' + (Math.floor( Math.random() * 4) + 1))
        }
    }
    return { changeColor }
}