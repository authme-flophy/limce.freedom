import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Album.css'

const Album = () => {
  const { id } = useParams()
  const [currentAlbum, setCurrentAlbum] = useState({})
  const [hasLoaded, setHasLoaded] = useState()
  const [song, setSong] = useState()
  const [iframeUrl, setIframeUrl] = useState()

  useEffect(() => {
    fetch(`http://localhost:9292/albums/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentAlbum((currentAlbum) => ({ ...currentAlbum, data }))
        setHasLoaded(true)
      })
  }, [id])

  const handleSongClicked = (song) => {
    setSong(song)
    setIframeUrl(song.iframe_url)
  }
  return (
    <>
      {hasLoaded ? (
        <div className='album_container'>
          <div className='album_content'>
            <div className='album_image'>
              <img
                className='image-card'
                src={currentAlbum.data.image_url}
                alt={currentAlbum.data.name}
              />
            </div>
            <ul className='songs'>
              {currentAlbum &&
                currentAlbum.data.songs.map((song) => (
                  <li key={song.id} onClick={() => handleSongClicked(song)}>
                    {song.name}
                  </li>
                ))}
            </ul>
          </div>
          <div className='iframe_container'>
            <div className='iframe_reviews'>
              {iframeUrl ? (
                <iframe
                  width='560'
                  height='315'
                  src={iframeUrl}
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
                ></iframe>
              ) : (
                <iframe
                  width='560'
                  height='315'
                  src={currentAlbum.data.songs[0].iframe_url}
                  title='YouTube video player'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowfullscreen
                ></iframe>
              )}
            </div>
            <div className='reviews'>
              {song
                ? song.reviews.map((review) => {
                    return (
                      <div key={review.id} className='review'>
                        <p>{review.comment}</p>
                      </div>
                    )
                  })
                : currentAlbum.data.songs[0].reviews.map((review) => {
                    return (
                      <div key={review.id} className='review'>
                        <p>{review.comment}</p>
                      </div>
                    )
                  })}
            </div>
            <div className='add-review'>
              <form className='form-review'>
                <textarea
                  name='your-review'
                  cols='50'
                  rows='6'
                  placeholder='type...'
                ></textarea>
                <button type='submit' className='submit-btn'>
                  Add Review
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default Album
