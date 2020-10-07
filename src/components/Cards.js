import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Các cặp đôi đã được chúng tôi ghép đôi thành công!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src='images/boomman.jpg'
                        text='Chúng tôi làm chuyện ấy năm lần mỗi ngày và nhiều lần mỗi đêm'
                        label='Tinder Gold'
                        path='/services'
                        />
                        <CardItem
                        src='images/hieu.jpg'
                        text='Kỹ năng làm tình của Hiếu thật tuyệt và An thích điều đó'
                        label='Tinder Plus'
                        path='/services'
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                        src='images/hao.jpg'
                        text='Lần gặp đầu tiên Hảo đã biết Minh Anh là một nửa của Hảo'
                        label='Tinder Normal'
                        path='/services'
                        />
                        <CardItem
                        src='images/hao.jpg'
                        text='Lần gặp đầu tiên Hảo đã biết Minh Anh là một nửa của Hảo'
                        label='Tinder Normal'
                        path='/services'
                        />
                        <CardItem
                        src='images/hao.jpg'
                        text='Lần gặp đầu tiên Hảo đã biết Minh Anh là một nửa của Hảo'
                        label='Tinder Normal'
                        path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards