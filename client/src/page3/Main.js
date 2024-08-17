import React from 'react'
import Box1 from './Box1'
import Box2 from './Box2'
import Box3 from './Box3'
import Title from './Tittle'
import Authors from './Authors'
import Abstract from './Abstract'
import Keyword from './Keyword'
import LiteratureSurvey from './LiteratureSurvey'
import Proposals from './Proposals'
import Equations from './Equations'
import Figure from './Figure'
import Table from './Table'
import Result from './Result'
import References from './References'
import Websites from './Websites'
import Communication from './Communication'
import Review from './Review'
import Malpractice from './Malpractice'
import Symbols from './Symbols'
import Button from './Button'

const Main = () => {
  return (
    <div>
          <Button />

      <Box1 />
      <Box2 />
      <Box3 />
      <Button />
      <Title />
      <Authors />
      <Abstract />
      <Keyword />
      <LiteratureSurvey />
      <Button />

      <Proposals />
      <Equations />
      <Figure />
      <Table />
      <Result />
      <Button />

      <References />
      <Websites />
      <Communication />
      <Review />
      <Button />

      <Malpractice />
      <Symbols />
    </div>
  )
}

export default Main
