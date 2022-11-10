import React from 'react'
import './Album.css'

const Album = () => {
  return (
  <div className='album_container'>
    <div className='album_content'>
      <div className='album_image'>
        <img className='image' src='https://res.cloudinary.com/dphlf7a8o/image/upload/v1668016652/her_loss_zlnjnz.jpg' alt='her_loss' />
      </div>
      <ul className='songs'>
        <li>
          <a href='#'>trending</a>
          </li>
        <li>
          <a href='#'>popular</a>
          </li>
        <li>
          <a href='#'>liked</a>
          </li>
        <li>
          <a href='#'>playlist</a>
        </li>

      </ul>
    </div>
    <div className='iframe_container'>
      <div className='iframe_reviews'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/0jz0GAFNNIo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

       </div>
    <div className='reviews'>
      hfff

    </div>
  </div>
  </div>
  )
}

export default Album
