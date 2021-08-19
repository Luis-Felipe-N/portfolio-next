import Image from 'next/image'

export function Card({image, description, preview, code, name}) {
    return (
        <article>
            <Image 
                src={image.url}
                alt={name}
                width={250}
                height={170}
                objectFit="cover"
            />
        </article>
    )
}