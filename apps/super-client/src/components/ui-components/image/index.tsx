import React, { useEffect, useState } from "react"

interface IProps {
    imageUrl: string
}
const defaultImage = "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482930.jpg"
export default function ImageCP(props: IProps) {
    const [currentImage] = useImageLoaded(props.imageUrl || defaultImage)
    return <img height={300} width={500} src={currentImage} />
}

function useImageLoaded(defaultValue: string) {
    const [currentImage, setCurrentImage] = useState(defaultValue)
    useEffect(() => {
        function testImage() {
            const image = new Image();
            image.onerror = () => {
                setCurrentImage(defaultImage)
            };
            image.src = defaultValue;
        }
        testImage()
    }, [])
    return [currentImage]
}