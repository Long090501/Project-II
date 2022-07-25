import image_1 from '../assets/image/1.jpg'
import image_2 from '../assets/image/2.jpg'
import image_3 from '../assets/image/3.jpg'
import image_4 from '../assets/image/4.jpg'
import image_5 from '../assets/image/5.jpg'
import image_6 from '../assets/image/6.jpg'
import './Ex2.css'

function Ex2() {
    return (
        <>
        <h1 className = 'Ex2_title'>Bài tập 2: Hiển thị ảnh theo lưới</h1>
        <div className = 'Ex2_container'>
            <div className = 'Ex2_item'><img className = 'Ex2_img' src = {image_1} alt = ''></img></div>
            <div className = 'Ex2_item'><img className = 'Ex2_img' src = {image_2} alt = ''></img></div>
            <div className = 'Ex2_item'><img className = 'Ex2_img' src = {image_3} alt = ''></img></div>
        </div>
        <div className = 'Ex2_container'>
            <div className = 'Ex2_item'><img className = 'Ex2_img' src = {image_4} alt = ''></img></div>
            <div className = 'Ex2_item'><img className = 'Ex2_img' src = {image_5} alt = ''></img></div>
            <div className = 'Ex2_item'><img className = 'Ex2_img' src = {image_6} alt = ''></img></div>
        </div>
        </>
    )
}

export default Ex2