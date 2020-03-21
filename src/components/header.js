import * as React from "react"
import { Header as Header$, Box } from "grommet"
import styled from "styled-components"

const HeaderBox = styled(Header$)`
  display: flex;
  justify-content: center;
`

const MaxWidth = styled(Box)`
  width: 100%;
  max-width: 1024px !important;
`

export default function Header(props) {
  return (
    <HeaderBox background="brand">
      <MaxWidth>Hello World</MaxWidth>
    </HeaderBox>
  )
}
