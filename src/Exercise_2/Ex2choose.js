import { useState } from 'react'
import './Ex2choose.css'

function Ex2choose() {
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
        setPicture([])
    }

    const handlePicture = (e, index) => {
        const file = e.target.files[0]
        file.link = URL.createObjectURL(file)
        
        for(var i=0; i<index; i++) {
            if(picture[i] === undefined)
                picture[i] = false
        }

        const head = picture.slice(0, index)
        const tail = picture.slice(index+1, picture.length+1)
        const tmp = [...head, file, ...tail]
        setPicture(tmp)
    }
    
    window.addEventListener('scroll', () => {
        if(window.scrollY>0)
            setShowScroll(false)
        else
            setShowScroll(true)
    })

    return (
        <>
        {showScroll && (<h1 className = 'Ex2choose_title'>Bài tập 2: Hiển thị ảnh theo lưới</h1>)}
        {!show && <div className = 'Ex2choose_inputZone'> 
        <input className = 'Ex2choose_input'
               value = {row}
               placeholder = 'Số hàng'
               onChange = {(e) => setRow(e.target.value)}
        ></input>
        <input className = 'Ex2choose_input'
               value = {col}
               placeholder = 'Số cột'
               onChange = {(e) => setCol(e.target.value)}
        ></input>
        </div>}
        {showScroll && (<button className = 'Ex2choose_gridButton' onClick = {handleClick}>Tạo/Sửa lưới</button>)}
        {show && <div className = 'Ex2choose_container' style={divStyle}>
        {
            gridRender.map((element,index) => (
                <div className = 'Ex2choose_item' key = {index}>
                    <input className = 'Ex2choose_selectIMG'
                           type = 'file'
                           onChange = {(e) => handlePicture(e, index)}></input>
                    {picture[index] && (<img className = 'Ex2choose_img' src = {picture[index].link} alt = ''></img>)}
                </div>
            ))
        }</div>}
        </>
    )
}

export default Ex2choose