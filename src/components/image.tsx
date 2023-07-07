type Props = {
    src: string
    alt: string
  }
  
  const Image = ({ src, alt }: Props) => {
    return (
      <div className="w-auto h-fit overflow-hidden rounded-md">
        <img src={src} alt={alt} className="w-full" />
      </div>
    )
  }
  
  export default Image
  