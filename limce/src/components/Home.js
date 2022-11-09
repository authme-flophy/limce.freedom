import React from 'react';
import './Home.css';



function Home() {
  return (
    <div className='home_container'>
    {/* <img src='https://cdn.wallpapersafari.com/39/92/FoXNny.jpg'/> */}
    
    <div className='banner'>
      <video autoPlay muted loop>
        {/* <source src="../../media/concert.mp4" type='video/mp4' /> */}
        <source src='https://res.cloudinary.com/dphlf7a8o/video/upload/v1668015282/video_awsci0.mp4' type='video/mp4' />
      </video>
      <nav className='nav'>
        <h1><span id='limce'>Limce</span>.<span id='freedom'>Freedom</span></h1>
      </nav>
        <div className='glass'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
recusandae alias error harum maxime adipisci amet laborum. Perspiciatis
          </p>
        </div>

      <h1 id='banner-header'>THIS IS FREEDOM</h1>

      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/Skzb6jNN0OU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

    </div>
    <h1 id='album_header'>LATEST RELEASES</h1>
    <div className='album_container'>
      <div className='album'>
        <img className='image' src='https://res.cloudinary.com/dphlf7a8o/image/upload/v1668016652/her_loss_zlnjnz.jpg' alt='her_loss' />
        <div className="middle">
          <div className="text">John Doe</div>
        </div>
      </div>
      <div className='album'>
        <img className='image' src='https://res.cloudinary.com/dphlf7a8o/image/upload/v1668016652/her_loss_zlnjnz.jpg' alt='her_loss' />
        <div className="middle">
          <div className="text">John Doe</div>
        </div>
      </div>
      <div className='album'>
        <img className='image' src='https://res.cloudinary.com/dphlf7a8o/image/upload/v1668016652/her_loss_zlnjnz.jpg' alt='her_loss' />
        <div className="middle">
          <div className="text">John Doe</div>
        </div>
      </div>
      <div className='album'>
        <img className='image' src='https://i.ibb.co/DDGs5qP/her-loss.jpg' alt='her_loss' />
        <div className="middle">
          <div className="text">John Doe</div>
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default Home;