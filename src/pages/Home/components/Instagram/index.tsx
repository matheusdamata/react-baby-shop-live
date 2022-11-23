import { ImageInstagram } from './styles'

type InstagramProps = {
  image: string
  url: string
}

export function Instagram({ image, url }: InstagramProps) {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <ImageInstagram src={image} alt="Foto da postagem do instagram" />
    </a>
  )
}
