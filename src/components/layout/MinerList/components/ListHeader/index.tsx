import React from 'react'
import { Container, SingleHeader } from './ListHeader.styles'
import { listHeaders } from '../../constants'

export function ListHeader() {
  return (
    <Container>
      {listHeaders.map(header => <SingleHeader key={header}>{header}</SingleHeader>)}
    </Container>
  )
}
