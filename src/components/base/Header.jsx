import React from 'react'
import '../../css/header.css'

const Header = () => {
  return (
    <header className='header'>
        <h1 className='header__title'>
            React
        </h1>
        <ul className='header__list ul'>
            <a href="/home">
                <li className='ul__list'>ホーム</li>
            </a>
            <a href="/chat">
                <li className='ul__list'>チャット</li>
            </a>
            <a href="#">
                <li className='ul__list'>設定</li>
            </a>
        </ul>
    </header>
  )
}

export default Header
