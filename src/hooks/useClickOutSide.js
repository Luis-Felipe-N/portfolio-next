export function useClickOutSide(element, state, setState) {
    document.addEventListener('click', handleClickOutSide)

    function handleClickOutSide( event ) {
        if (!element.contains(event.target)) {
            setState(!state)
            document.removeEventListener('click', handleClickOutSide)
        }
    }
}