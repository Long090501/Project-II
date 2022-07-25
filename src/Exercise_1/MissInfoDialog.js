import { Dialog, DialogContent, DialogTitle } from "@material-ui/core"
import './Ex1.css'

function MissInfoDialog(props) {
    return (
    <Dialog open = {props.popUp}>
        <div className = 'Ex1_popUp'>
        <DialogTitle>
            <h1 className = 'Ex1_popUpTitle'>Thông báo</h1>
        </DialogTitle>
        <DialogContent>Bạn chưa nhập đầy đủ thông tin! Xin hãy vui lòng nhập lại!</DialogContent>
        <br/>
        <button className = 'Ex1_popUpButton' onClick = {() => {props.setPopUp(false)}}>OK</button> 
        </div>
    </Dialog>
    )
}

export default MissInfoDialog