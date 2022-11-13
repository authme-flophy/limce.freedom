import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Album.css'

const Album = () => {
  const { id } = useParams()
  const [count, setCount] = useState(0)
  const [currentAlbum, setCurrentAlbum] = useState({})
  const [hasLoaded, setHasLoaded] = useState()
  const [isLiked, setIsLiked] = useState(false)
  const [likesCount, setLikesCount] = useState(0)
  const [song, setSong] = useState(null)
  const [myReview, setMyReview] = useState({
    user_name: '',
    review_data: {
      comment: '',
      song_id: '',
    },
  })
  const [iframeUrl, setIframeUrl] = useState()
  console.log(song)

  useEffect(() => {
    fetch(`http://localhost:9292/albums/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCurrentAlbum((currentAlbum) => ({ ...currentAlbum, data }))
        setHasLoaded(true)
      })
  }, [id, likesCount])

  const handleSongClicked = (song) => {
    setSong(song)
    setIframeUrl(song.iframe_url)
    setLikesCount(song.likes)
    setIsLiked(false)
  }
  console.log(song)
  const handleLikeClick = () => {
    setIsLiked(!isLiked)
    setSong(currentAlbum.data.songs[0])
    isLiked ? setLikesCount(likesCount - 1) : setLikesCount(likesCount + 1)
    console.log(song)
    // song
    fetch(`http://localhost:9292/songs/${song.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...song,
        likes: likesCount,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setCount(count + 1)
      })
    // : fetch(`http://localhost:9292/songs/${currentAlbum.data.songs[0].id}`, {
    //     method: 'PATCH',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       ...song,
    //       likes: likesCount,
    //     }),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data)
    //       setCount(count + 1)
    //     })
  }

  const handleFormSubmit = (e) => {
    // e.preventDefault()
    e.target.reset()
    console.log(myReview)
    fetch(`http://localhost:9292/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(myReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
    window.locate.refresh()
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
            <div className='heart-icon' onClick={handleLikeClick}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                class='w-6 h-6'
                id='heart-icon'
                className={isLiked ? 'liked-video' : null}
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                />
              </svg>
              {song ? (
                <p>
                  {likesCount} <span>likes</span>
                </p>
              ) : (
                <p>
                  {currentAlbum.data.songs[0].likes} <span>likes</span>
                </p>
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
              <form
                className='form-review'
                onSubmit={(e) => {
                  handleFormSubmit(e)
                }}
              >
                <div className='input-name-sec'>
                  <label htmlFor='u-name'>Name:</label>
                  <input
                    type='text'
                    name='name'
                    id='u-name'
                    required
                    onChange={(e) => {
                      setMyReview((myReview) => ({
                        ...myReview,
                        user_name: e.target.value,
                      }))
                    }}
                  />
                </div>
                <textarea
                  name='your-review'
                  cols='50'
                  rows='6'
                  placeholder='type...'
                  required
                  onChange={(e) => {
                    setMyReview((myReview) => ({
                      ...myReview,
                      review_data: {
                        comment: e.target.value,
                        song_id: song ? song.id : currentAlbum.data.songs[0].id,
                      },
                    }))
                  }}
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
