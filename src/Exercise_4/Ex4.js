import { useState } from 'react'
import Victory from './Victory'
import Mario from '../assets/image/Mario.jpg'
import Diamond from '../assets/image/Diamond.png'
import './Ex4.css'

function Ex4() {
    const [mario, setMario] = useState(45)
    const [moveList, setMoveList] = useState('')
    const [move, setMove] = useState([])
    const [marioIndex, setMarioIndex] = useState(0)
    const [showHightLight, setShowHightLight] = useState(true)
    const [popUp, setPopUp] = useState(false)
    const [showDiamond, setShowDiamond] = useState(true)

    const matrix = []
    const diamond = 4
    const checkObstacle = []
    const obstacles = [9, 10, 11, 18, 19, 20, 21, 32, 33, 34, 35]
    const marioPlace = [mario]

    var marioTmp = mario
    var victoryIndex = move.length

    for(var i=0; i<48; i++) {
        matrix[i]=3
        checkObstacle[i] = false
        for(var j=0; j<obstacles.length; j++) {
            if(i===obstacles[j])
                checkObstacle[i]=true
        }
    }

    const checkMarioPlace = (marioPlace, index) => {
        switch(move[index]) {
            case 'Move Up': {
                if(marioPlace>=6 && !checkObstacle[marioPlace-6])
                    marioTmp-=6
                break
            }
            case 'Move Down': {
                if(marioPlace<=41 && !checkObstacle[marioPlace+6])
                    marioTmp+=6
                break
            }
            case 'Move Left': {
                if(marioPlace%6!==0 && !checkObstacle[marioPlace-1])
                    marioTmp-=1
                break
            }
            case 'Move Right': {
                if(marioPlace%6!==5 && !checkObstacle[marioPlace+1])
                    marioTmp+=1
                break
            }
            default: {
                break
            }
        }
    }

    const handleMoveList = (list) => {
        let splitKey = /\r\n|\n/;
        setMoveList(list)
        setMove(list.split(splitKey))
    }

    for(var k=1; k<=move.length; k++) {
        checkMarioPlace(marioTmp,k-1)
        marioPlace[k] = marioTmp
        if(marioPlace[k] === diamond && showDiamond) {
            victoryIndex = k
            break
        }
    }

    const handleRun = () => { 
        const showHightLightID = setInterval(() => {
            setShowHightLight(prev => !prev)
        },1000)

        const renderID = setInterval(() => {
            setMarioIndex(prev => {
                if(marioPlace[prev+1]===diamond && showDiamond) {
                    setPopUp(true)
                    setShowDiamond(false)
                    setMoveList('')
                }
                    return prev+1
            })
            
            setMoveList(prev => {
                const tmp = prev.split('\n');
                tmp.splice(0,1);
                return tmp.join('\n');
            })
        },2000)

        setTimeout(() => {
            setMario(marioTmp)
            setShowHightLight(true)
            setMarioIndex(0)
            clearInterval(showHightLightID)
            clearInterval(renderID)
        },2000*victoryIndex)
    }

    return (
        <>    
        <h1 className = 'Ex4_title'>Bài tập 4: Tạo simulation đối tượng di chuyển theo lịch trình được lập</h1>
        <div className = 'Ex4_container'>
            <div className = 'Ex4_maze'>
                {matrix.map((element, index) => (
                    <div className = 'Ex4_square'>
                        {index===marioPlace[marioIndex]  && (<img className = 'Ex4_mario' src = {Mario} alt = ''></img>)}
                        {showDiamond && index===diamond && (<img className = 'Ex4_diamond' src = {Diamond} alt = ''></img>)}
                        {checkObstacle[index] && (<div className = 'Ex4_obstacle'></div>)}
                    </div>
                ))}
            </div>
            <div className = 'Ex4_inputZone'>
                {!showHightLight && (<div className = 'Ex4_moveHighlight'></div>)}
                <textarea value = {moveList}
                          className = 'Ex4_inputMove' placeholder = 'Enter Movement List'
                          onChange = {(e) => handleMoveList(e.target.value)}></textarea>
                <button className = 'Ex4_runButton'
                        onClick = {() => handleRun()}>Run</button>
            </div>
        </div>
        <Victory popUp = {popUp} setPopUp = {setPopUp}></Victory>
        </>
    )
}

export default Ex4