import React from 'react'
import MiniFooter from './MiniFooter'
import { FiPlay } from 'react-icons/fi'

const Footer = () => {
  return (
    <>
      <div className='main-footer'>
        <h2 className='footer-heading'>
          <span>
            <FiPlay className='play-icon' />
          </span>{' '}
          ready to listen?
        </h2>
        <div className='plan-sections'>
          <div className='plan fade-in-left'>
            <h2>free plan</h2>
            <p>Everything you want to listen to and one or two adverts.</p>
            <p>Free forever</p>
            <div className='btn-container'>
              <button className='plan-btn'>get free</button>
            </div>
          </div>

          <div className='plan fade-in-right'>
            <h2>premium</h2>
            <p>
              The music you love.<br></br>Everywhere.
            </p>
            <p>
              $8.99 / <span>month.</span>
            </p>
            <div className='btn-container'>
              <button className='plan-btn'>premium</button>
            </div>
          </div>
        </div>
      </div>
      <MiniFooter />
    </>
  )
}

export default Footer
