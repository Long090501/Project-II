import { useState } from 'react'
import { Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import InfiniteCalendar from 'react-infinite-calendar'
import 'react-infinite-calendar/styles.css'
import MissInfoDialog from './MissInfoDialog'
import Calendar from '../assets/image/Calendar.png'
import './Ex1.css'

function Ex1() {
  const [mssv, setMSSV] = useState('')
  const [name, setName] = useState('')
  const [birth, setBirth] = useState('')
  const [email, setEmail] = useState('')
  const [data, setData] = useState([])
  const [popUp, setPopUp] = useState(false)
  const [showCalendar, setShowCalendar] = useState(false)
  const [showTable, setShowTable] = useState(false)

  const handleAdd = () => {
    const addData = {
      mssv: mssv,
      name: name,
      birth: birth,
      email: email
    }

    const checkInfo = Object.values(addData).every((element) => (
      element !== '' 
    ))

    if(!checkInfo) {
      setPopUp(true)
    }

    if(checkInfo) {
      if(!showTable) {
        setShowTable(true)
      }
      setData([...data, addData])
      setMSSV('')
      setName('')
      setBirth('')
      setEmail('')
    }
  }

  const handleDelete = (index) => {
    const deleteData = data.filter((dataElement, dataIndex) => (
      dataIndex !== index
    ))
    if(deleteData.length === 0) {
      setShowTable(false)
    }
      setData(deleteData)
  }

  return (
    <>
    <h1 className = 'Ex1_title'>Bài tập 1: Thao tác với Data Table</h1>
    <div className = 'Ex1_inputZone'>
      <input className = 'Ex1_mssvInput'
             value = {mssv}
             placeholder = 'MSSV'
             onChange = {(e) => setMSSV(e.target.value)}
      ></input>
      <input className = 'Ex1_nameInput'
             value = {name}
             placeholder = 'Họ và tên'
             onChange = {(e) => setName(e.target.value)}
      ></input>
      <br/>
      <button className = 'Ex1_calendarButton' onClick = {() => setShowCalendar(true)}>
        <img className = 'Ex1_calendarIcon' src = {Calendar} alt = ''></img>
      </button>
      <input className = 'Ex1_birthInput'
             value = {birth}
             placeholder = 'Ngày sinh'
             onChange = {(e) => setBirth(e.target.value)}
      ></input>
      <input className = 'Ex1_emailInput'
             value = {email}
             placeholder = 'Email'
             onChange = {(e) => setEmail(e.target.value)}
      ></input>
      {showCalendar && (<div>
        <button className='Ex1_closeButton' onClick = {() => setShowCalendar(false)}>&#10006;</button>
        <InfiniteCalendar display='years' className = 'Ex1_calendar' 
                          onSelect={(date) => {
                                      const convertDate = `${date.getDate()}/${date.getMonth()+1}/${date.getYear()+1900}`
                                      setBirth(convertDate)
        }}/>
      </div>)}
      <br/>
      <button className = 'Ex1_addButton' onClick = {handleAdd}>Thêm</button>
    </div>
    {showTable && (<Table style = {{ width: '70%' }}>
      <TableHead>
        <TableRow>
          <TableCell className = 'Ex1_stt'>STT</TableCell>
          <TableCell className = 'Ex1_mssv'>MSSV</TableCell>
          <TableCell>Họ và tên</TableCell>
          <TableCell className = 'Ex1_birth'>Ngày sinh</TableCell>
          <TableCell>Email</TableCell>
          <TableCell className = 'Ex1_deleteColumn'></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((dataElement, index) => (
          <TableRow>
            <TableCell>{index+1}</TableCell>
            <TableCell>{dataElement.mssv}</TableCell>
            <TableCell>{dataElement.name}</TableCell>
            <TableCell>{dataElement.birth}</TableCell>
            <TableCell>{dataElement.email}</TableCell>
            <TableCell className = 'Ex1_cellDeleteButton'>
              <button className = 'Ex1_deleteButton' onClick = {() => handleDelete(index)}>Xóa</button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>)}
    <MissInfoDialog popUp = {popUp} setPopUp = {setPopUp}></MissInfoDialog>
    </>
  )
}

export default Ex1