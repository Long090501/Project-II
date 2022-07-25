import { useState, useEffect } from 'react'
import './Ex2API.css'

function Ex2API() {
    const imgAPI = 'http://localhost:3333/image'

    const [row, setRow] = useState('')
    const [col, setCol] = useState('')
    const [picture, setPicture] = useState([])
    const [show, setShow] = useState(false)
    const [showScroll, setShowScroll] = useState(true)

    const divStyle = {
        display: 'grid',
        gridTemplateRows: `repeat(${row}, auto)`,
        gridTemplateColumns: `repeat(${col}, auto)`,
    }

    const matrix = parseInt(row)*parseInt(col)
    const gridRender = []
    for(var i=0; i<matrix;i++)
        gridRender[i]=3

    const handleClick = () => {
        setShow(prev => !prev)
    }
    
    useEffect(() => {
        fetch(imgAPI)
          .then(data => data.json())
          .then(imgJSON => setPicture(imgJSON))
    }, [row, col])

    window.addEventListener('scroll', () => {
        if(window.scrollY>0)
            setShowScroll(false)
        else
            setShowScroll(true)
    })

    return (
        <>
        {showScroll && (<h1 className = 'Ex2API_title'>Bài tập 2: Hiển thị ảnh theo lưới</h1>)}
        {!show && <div className = 'Ex2API_inputZone'> 
        <input className = 'Ex2API_input'
               value = {row}
               placeholder = 'Số hàng'
               onChange = {(e) => setRow(e.target.value)}
        ></input>
        <input className = 'Ex2API_input'
               value = {col}
               placeholder = 'Số cột'
               onChange = {(e) => setCol(e.target.value)}
        ></input>
        </div>}
        {showScroll && (<button className = 'Ex2API_gridButton' onClick = {handleClick}>Tạo/Sửa lưới</button>)}
        {show && <div className = 'Ex2API_container' style={divStyle}>
        {
            gridRender.map((element,index) => (
                <div className = 'Ex2API_item' key = {index}>
                   {picture[index] && (<img className = 'Ex2API_img' src = {picture[index].url} alt = ''></img>)}
                </div>
            ))
        }
        </div>}
        </>
    )
}

export default Ex2API