import React from 'react';
import TimelineItem from './TimelineItem';

const Timeline = ({ data }) =>
  data.length > 0 && (
    <div className="timeline-container">
      {data.map((data, idx) => (
        <TimelineItem data={data} key={idx} />
      ))}
    </div>
  );

export default Timeline;