import React, { useState } from 'react';
import videojs from 'video.js';
import { VideoPlayer } from './VideoPlayer';

import { contents } from '../resources/contents/';

export const VideosPage = ({ content, topicNumber }) => {
  // console.log(topicNumber);
  console.log(content[topicNumber].url);
  const playerRef = React.useRef(null);

  const [videoSource, setVideoSource] = useState(content[topicNumber].url);

  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: videoSource,
        type: 'video/mp4',
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };

  const handleVideoSelection = (e) => {
    e.preventDefault();

    // console.log(e.target.getAttribute('data-url'));
    setVideoSource(e.target.getAttribute('data-url'));
  };

  return (
    <>
      <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} />

      <div id="TopicButtons" className=' flex w-full justify-center my-3'>
      <div id='btns' className=' text-white flex flex-col gap-2 mx-1 m-4'>

      {content.map((content, index) => (
        <div key={index}>
          {/* {console.log(index)} */}
          <button
          className='bg-blue-500 text-white py-1 px-1 rounded-md min-w-[300px]'
          key={index}
          onClick={handleVideoSelection}
          data-url={content.url}
          >
            {content.title}
          </button>
          <br />
        </div>
      ))}
      </div>
      </div>
    </>
  );
};
