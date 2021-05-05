import React from 'react'
import { Content,ContentBox } from './contentStyles'

const ContentDetails = (prop) => {

    return (
      <>
          <ContentBox>
            <h1>Executor</h1>
            <a>Executor-class start dreadnought</a>
            <hr/>
            <h2>Fabricante</h2>
            <a>{prop.details.fabricante}</a>
            <h3>Largo</h3>
            <a>{prop.details.largo}</a>
            <h3>Valor</h3>
            <a>{prop.details.creditos} creditos</a>
            <h3>Cantidad pasajeros</h3>
            <a>{prop.details.pasajeros}</a>
          </ContentBox>
          <ContentBox>
            <h1>Pasajeros</h1>
            <hr/>
            <a>chewbaca</a>
            <a>123124</a>
            <a>Lando</a>
          </ContentBox>
          </>
       
    )
}

export default ContentDetails
