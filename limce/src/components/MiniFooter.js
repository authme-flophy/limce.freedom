/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs'

const MiniFooter = () => {
  return (
    <>
      <div className='mini-footer'>
        <ul>
          {/* <li>
            <a href='#'>Features</a>
          </li> */}
          <li>
            <a href='#'>Album</a>
          </li>
          <li>
            <a href='#'>Artists</a>
          </li>
          <li>
            <a href='#'>Help</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Contact</a>
          </li>
        </ul>
        <div className='copy-right'>
          <p>
            &copy; limce<span>freedom</span>
          </p>
        </div>

        <div className='twitter-handles'>
          <BsTwitter className='handle' />
          <BsFacebook className='handle' />
          <BsInstagram />
        </div>
      </div>
    </>
  )
}

export default MiniFooter
