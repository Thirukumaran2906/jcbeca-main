import React from 'react'
import TableComponent from './Table2'
import EditorDesk from './EditorialOne'
import ChiefEditor from './Members'
import Table3 from './Table3'
import Table4 from './Table4'
import JoinBox from './JoinBox'
import Header2 from './Header2'
import Button from '../EthicalsFolder/Button'

const Page2 = () => {
  return (
    <div>
    <Header2 />
    <EditorDesk />
    <Button />
    <ChiefEditor />
      <TableComponent />
      <Button />
      <JoinBox />
    </div>
  )
}

export default Page2
