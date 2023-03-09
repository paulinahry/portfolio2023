import React, { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import VisibilitySensor from 'react-visibility-sensor';

function AnimatedCircularProgressbar({ percentage }) {
    const [animationStart, setAnimationStart] = useState(false);
  
    const handleVisibilityChange = (isVisible) => {
      isVisible && setAnimationStart(true)
    }


    const progressBarStyle = buildStyles({
      pathColor: '#4ff7b2',
      textColor: '#4ff7b2',
      trailColor: '#0B4147',
    })
  
    return (
      <VisibilitySensor onChange={handleVisibilityChange} partialVisibility={true}>
        <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px]">
          <CircularProgressbar
            value={animationStart ? percentage : 0}
            text={`${animationStart ? percentage : 0}%`}
            styles={progressBarStyle}
          />
        </div>
    </VisibilitySensor>
    )
  }

  export default AnimatedCircularProgressbar
