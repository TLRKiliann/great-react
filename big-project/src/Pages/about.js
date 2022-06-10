import React from "react";
//import videojs from "video.js";
//import $ from "jquery";
import "./about.css";


class About extends React.Component {
  /*constructor(props) {
    super(props);
    this.state = {
    }
    this.timerID = undefined;
  }

  //Play audio
  componentDidMount() {
    $("#video-player")[0].autoPlay = false;
    const playAudio = () => {
      $('#player')[0].trigger('load');
      $('#player')[0].trigger('play');
      //const timer = setTimeout(myVideo, 5000)
      this.timerID = () => setTimeout(() => {
        //$('#video-player')[0].trigger('pause');
        $("#video-player")[0].autoPlay = true;
        $("#video-player")[0].trigger('play');
      }, 1000);
    }
  }

        <audio id="player" src={require("../audio/drop_video.mp3")} autoPlay type="audio/mp3">
          Your browser does not support the audio element.
        </audio> 

        <video className="first--vid" autoPlay>
          <source src={require("../videos/react_video.mp4")} type='video/mp4' />
        </video>

  //Stop audio
  componentWillUnmount() {
    clearInterval(this.timerID)
  }*/

  render() {
    return (
      <div className="about--div">

        <div className="dev--div">
          <h1>About Us</h1>
        </div>

      </div>
    );
  }
};

export default About;