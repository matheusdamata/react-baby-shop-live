import { useLocation } from 'react-router-dom'
import { Container } from './styles'

export function Search() {
  const { state } = useLocation()

  console.log(state)

  return (
    <Container>
      {state.length > 0 ? <span>A</span> : <h1>Nenhum produto encontrado</h1>}
    </Container>
  )
}
