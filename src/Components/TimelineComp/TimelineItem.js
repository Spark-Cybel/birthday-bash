import React from 'react';

const TimelineItem = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <span className="tag" style={{ background: data.category.color }}>
        {data.category.tag}
      </span>
      <time>{data.date}</time>
      <p>{data.text}</p>
      {data.link && (
        <img src={data.link} style={{ width: '100%' }} />
      )}
      <span className="circle" />
    </div>
  </div>
);

export default TimelineItem;