import {Component,useEffect,useState}  from 'react'
import { ContentBox } from './contentStyles'
import axios from 'axios'

const ContentDetails = (prop) => {

  const [state, setstate] = useState([]);

  useEffect(() => {
    prop.details.pilots.map((item)=>{
      axios.get(item)
      .then(res => {
        setstate(res.data);
      })
    })
  }, [])


  return (
      <>
          <ContentBox>
            <h1>{prop.details.name}</h1>
            <a>{prop.details.model}</a>
            <hr/>
            <h2>Fabricante</h2>
            <a>{prop.details.manufacturer}</a>
            <h3>Largo</h3>
            <a>{prop.details.lenght}</a>
            <h3>Valor</h3>
            <a>{prop.details.cost_in_credits} creditos</a>
            <h3>Cantidad pasajeros</h3>
            <a>{prop.details.passengers}</a>
          </ContentBox>
          <ContentBox>
            <h1>Pasajeros</h1>
            <hr/>
            {prop.details.pilots.map((item,key)=>{
              return <a key={key}>{item}</a>
            })}
          </ContentBox>
          </>
       
    )
}

export default ContentDetails

