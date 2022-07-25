import { Dialog, DialogContent, DialogTitle } from "@material-ui/core"
import './Ex4.css'

function Victory(props) {
    return (
    <Dialog open = {props.popUp}>
        <div className = 'Ex4_popUp'>
        <DialogTitle className = "Ex4_dialogTitle">
            <h1 className = 'Ex4_victoryTitle'>Chúc mừng! Bạn đã chiến thắng!</h1>
        </DialogTitle>
        <DialogContent>
            <h2 className = 'Ex4_replayTitle'>Bạn có muốn chơi lại không?</h2>
        </DialogContent>
        <br/> 
            <button className = 'Ex4_yesButton' onClick = {() => {window.location.reload()}}>Có</button>
            <button className = 'Ex4_noButton' onClick = {() => {props.setPopUp(false)}}>Không</button>
        </div>
    </Dialog>
    )
}

export default Victory