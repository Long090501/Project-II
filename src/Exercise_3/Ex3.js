import Mario from '../assets/image/Mario.jpg'
import Diamond from '../assets/image/Diamond.png'
import './Ex3.css'

function Ex3() {
    const matrix = []
    const obstacles = [9, 10, 11, 18, 19, 20, 21, 32, 33, 34, 35]
    const mario = 45
    const diamond = 4
    var checkObstacle = []

    for(var i=0; i<48; i++) {
        matrix[i]=3
        checkObstacle[i] = false
        for(var j=0; j<obstacles.length; j++) {
            if(i===obstacles[j])
                checkObstacle[i]=true
        }
    }

    return (
        <>    
        <h1 className = 'Ex3_title'>Bài tập 3: Vẽ mê cung</h1>
        <div className = 'Ex3_container'>
            <div className = 'Ex3_maze'>
                {matrix.map((element, index) => (
                    <div className = 'Ex3_square' key = {index}>
                        {index===mario && (<img className = 'Ex3_mario' src = {Mario} alt = ''></img>)}
                        {index===diamond && (<img className = 'Ex3_diamond' src = {Diamond} alt = ''></img>)}
                        {checkObstacle[index] && (<div className = 'Ex3_obstacle'></div>)}
                    </div>
                ))}
            </div>
            <div className = 'Ex3_inputZone'>
                   <p className = 'Ex3_move'>Move Up</p>
                   <p className = 'Ex3_move'>Move Down</p>
                   <p className = 'Ex3_move'>Move Left</p>
                   <p className = 'Ex3_move'>Move Right</p>
                <button className = 'Ex3_button'>Run</button>
            </div>
        </div>
        </>
    )
}

export default Ex3