import Image from "next/image"

interface SliderProps {
    src: string
    alt: string
    name: string
    segment: string
    description: string
}

const Slider =  ({ src, alt, name, segment, description }: SliderProps) => {
  return (
    <>
      <div className="slide flex flex-row h-80">
        <Image src={src}  width={600} height={600} alt={alt} />
          <div>
            <h3>{name}</h3>
            <span>{segment}</span>
            <p>{description}</p>
          </div>
      </div>
    
    </>
  )
}

export default Slider