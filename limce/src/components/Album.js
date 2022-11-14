import { useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useReducer, useState } from 'react'
import './Album.css'



const Album = () => {
  const { id } = useParams()
  const [album, setAlbum] = useState(null)
  const [songs, setSongs] = useState([])
  const [loading, setLoading] = useState(true)
  const [isLiked, setIsLiked] = useState(false)
  const [myReview, setMyReview] = useState({
    user_name: '',
    review_data: { comment: '', song_id: '' },
  })

  const defaultState = {
    id: '',
    iframe_url: '',
    likes: '',
    name: '',
    reviews: '',
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'DISPLAY_SONG':
        return {
          ...state,
          id: action.payload.id,
          iframe_url: action.payload.iframe_url,
          likes: action.payload.likes,
          name: action.payload.name,
          reviews: action.payload.reviews,
        }
      case 'DISPLAY_FIRST_SONG':
        return {
          ...state,
          id: action.payload.id,
          iframe_url: action.payload.iframe_url,
          likes: action.payload.likes,
          name: action.payload.name,
          reviews: action.payload.reviews,
        }
      case 'ADD_LIKE':
        return {
          ...state,
          likes: state.likes + 1,
        }
      case 'REMOVE_LIKE':
        return {
          ...state,
          likes: state.likes - 1,
        }

      case 'REVIEW_FORM':
        return {
          ...state,
          reviews: [...state.reviews, action.payload],
        }
      default:
        return state
    }
  }

  const [mySong, dispatch] = useReducer(reducer, defaultState)

  useEffect(() => {
    fetch(`https://lit-wildwood-44010.herokuapp.com/albums/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setLoading(false)
        setAlbum(data)
        setSongs(data.songs)
        dispatch({
          type: 'DISPLAY_FIRST_SONG',
          payload: data.songs[0],
        })
      })
  }, [id])
  console.log(album)
  console.log(songs)
  console.log(mySong)

  const handleSongClicked = (song) => {
    dispatch({
      type: 'DISPLAY_SONG',
      payload: song,
    })
    fetch(`https://lit-wildwood-44010.herokuapp.com/albums/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setAlbum(data)
        setSongs(data.songs)
      })
  }

  const handleLikeIcon = (song) => {
    isLiked
      ? dispatch({
          type: 'REMOVE_LIKE',
          payload: song,
        })
      : dispatch({
          type: 'ADD_LIKE',
          payload: song,
        })

    isLiked
      ? fetch(`https://lit-wildwood-44010.herokuapp.com/songs/${song.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ likes: song.likes - 1 }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
          })
      : fetch(`https://lit-wildwood-44010.herokuapp.com/songs/${song.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ likes: song.likes + 1 }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
          })
    setIsLiked(!isLiked)
  }

  const handleReviewForm = (e) => {
    setMyReview((myReview) => ({
      ...myReview,

      [e.target.name]: e.target.value,
      review_data: {
        [e.target.name]: e.target.value,
        song_id: mySong.id,
      },
    }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    dispatch({
      type: 'REVIEW_FORM',
      payload: myReview,
    })

    fetch(`https://lit-wildwood-44010.herokuapp.com/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(myReview),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))

    e.target.reset()
  }
  
  const navigate = useNavigate()
  const handleHomeBtn=() => {
  navigate("/")
  }

  console.log(myReview)
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className='album_container'>
        <div className='history-btn'>
            <button onClick={handleHomeBtn}>Home</button>
          </div>
          <div className='header'>
          <h1>Albums</h1>
          </div>
          <div className='album_content'>
            <div className='album_image'>
              <img
                className='image-card'
                src={album.image_url}
                alt={album.name}
              />
            </div>
            <ul className='songs'>
              {songs.map((song) => {
                return (
                  <li key={song.id} onClick={() => handleSongClicked(song)}>
                    {song.name}
                  </li>
                )
              })}
            </ul>
          </div>
          <div className='iframe_container'>
            <div className='iframe_reviews'>
              <iframe
                width='560'
                height='315'
                src={mySong.iframe_url}
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
            <div className='heart-icon'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                class='w-6 h-6'
                id='heart-icon'
                onClick={() => {
                  handleLikeIcon(mySong)
                }}
                className={isLiked ? 'liked-video' : null}
              >
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                />
              </svg>

              <p>
                {mySong.likes}
                <span> likes</span>
              </p>
            </div>
            <div className='reviews'>
              {mySong.reviews.map((review) => {
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
                onSubmit={(e) => handleFormSubmit(e)}
              >
                <div className='input-name-sec'>
                  <label htmlFor='u-name'>Name:</label>
                  <input
                    type='text'
                    name='user_name'
                    id='u-name'
                    required
                    onBlur={(e) => handleReviewForm(e)}
                  />
                </div>
                <textarea
                  name='comment'
                  cols='50'
                  rows='6'
                  placeholder='type...'
                  required
                  onBlur={(e) => handleReviewForm(e)}
                ></textarea>
                <button type='submit' className='submit-btn'>
                  Add Review
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Album
