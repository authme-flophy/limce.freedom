import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
  const [albums, setAlbums] = useState([])
  const navigate = useNavigate()
  useEffect(() => {
    fetch('https://lit-wildwood-44010.herokuapp.com/albums')
      .then((res) => res.json())
      .then((data) => {
        setAlbums(data)
      })
  }, [])

  const handleAlbumClick = (id) => {
    navigate(`/albums/${id}`)
  }
  return (
    <div className='home_container'>
      {/* <img src='https://cdn.wallpapersafari.com/39/92/FoXNny.jpg'/> */}

      <div className='banner'>
        <video autoPlay muted loop>
          <source src='https://res.cloudinary.com/dqzudkxg1/video/upload/v1668081308/video1_sn7arc.mp4' />
        </video>
        <nav className='nav'>
          <h1>
            <span id='limce'>Limce</span>.<span id='freedom'>Freedom</span>
          </h1>
        </nav>
        <div className='glass'>
          <p>
            Lots of people prefer to listen to the music online, from some
            website or application and the number of radio listeners is
            decreasing. Limce Freedom offers a dynamic look which is just
            perfect for a listeners to listen to their choice of song, musical
            band, DJs, netlabels, or artists to display their work in an
            exciting way.
          </p>
        </div>

        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/Skzb6jNN0OU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
      </div>
      <h1 id='album_header'>LATEST RELEASES</h1>
      <div className='album_container'>
        {/* <div className='back-image'></div> */}
        {albums.map((album) => {
          return (
            <div
              key={album.id}
              className='album'
              onClick={() => handleAlbumClick(album.id)}
            >
              <img className='image' src={album.image_url} alt={album.name} />
              <h2 className='middle'>{album.name}</h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
