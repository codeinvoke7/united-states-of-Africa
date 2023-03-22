import React from 'react';
import { videoplayback, videoplayback2 } from 'assets/videos';
import { WatchVolunteers } from 'assets/images';
import ReactPlayer from 'react-player/file';

const VideoSection = () => {
  return (
    <div className="font-serif my-14">
      <h2 className="text-center text-[35px] font-bold mb-[30px]">
        Watch how our Volunteers in Texas live a day of their lives
      </h2>

      {/* <div className="w-full">
        <video width="" height="200px" className="w-full h-[400px] object-cover" controls poster={WatchVolunteers}>
          <source src={videoplayback2} type="video/mp4"/>
        </video>
      </div> */}

      <div className="w-full h-[400px]">
        <ReactPlayer
          className="object-cover"
          url={videoplayback2}
          controls
          light={WatchVolunteers}
          width={'100%'}
          height={400}
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};

export default VideoSection;
