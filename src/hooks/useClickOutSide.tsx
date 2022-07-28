import { EventHandler } from 'react'

export function useClickOutSide() {
    function clickOutSide(element: HTMLElement, state: boolean, setState: (state: boolean) => void) {
        document.addEventListener('click', handleClickOutSide)

        function handleClickOutSide( event: any ) {
            if (!element.contains(event.target)) {
                document.removeEventListener('click', handleClickOutSide)
                setState(!state)
            }
        }
    }

    return { clickOutSide }
}