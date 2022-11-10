import React from "react";
import "./Album.css";

const Album = () => {
  return (
    <div className="album_container">
      <div className="album_content">
        <div className="album_image">
          <img
            className="image"
            src="https://media.pitchfork.com/photos/62bdd2cb9e0c39ec09d73fd7/master/pass/Beyonce-Renaissance.jpg"
            alt="her_loss"
          />
        </div>
        <ul className="songs">
          <li>
            <a href="#">song1</a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
          </li>
          <li>
            <a href="#">song2</a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
          </li>
          <li>
            <a href="#">song3</a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
          </li>
          <li>
            <a href="#">song3</a>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
          </li>
        </ul>
      </div>
      <div className="iframe_container">
        <div className="iframe_reviews">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/0jz0GAFNNIo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div className="reviews">
          <div className="review">
            <p>You review goes here!</p>
          </div>
          <div className="review">
            <p>You review goes here!</p>
          </div>
          <div className="review">
            <p>You review goes here!</p>
          </div>
        </div>
        <div className="add-review">
          <form>
            <textarea name="your-review" cols="50" rows="6"></textarea>
            <button type="submit"></button>
          </form>

        </div>
      </div>
    </div>
  );
};

export default Album;
