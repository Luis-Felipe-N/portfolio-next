import { useEffect, useRef } from "react"

export default function AnimationUp({children}) {
    const containerAnimation = useRef()

    const animaScroll = () => {
       if (containerAnimation.current) {
            const viewPort = window.innerHeight * 0.85 
            const scrollTop = containerAnimation.current.getBoundingClientRect().top
            const isContainerVisible = scrollTop - viewPort < 0

            if ( isContainerVisible ) {
                containerAnimation.current.classList.add('animaUp')
            }
       }

    }

    useEffect(() => {

        animaScroll()
        document.addEventListener("scroll", animaScroll)
    }, [children])
    return (
        <div style={{opacity: 0}} ref={containerAnimation}>
            {children}
        </div>
    )
}