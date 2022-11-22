import { ImageInstagram } from './styles'

type InstagramProps = {
  image: string
}

export function Instagram({ image }: InstagramProps) {
  return <ImageInstagram src={image} alt="Foto da postagem do instagram" />
}
