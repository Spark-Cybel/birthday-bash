import React, { Component } from 'react';
import Timeline from './TimelineComp/Timeline';
import './Home.css';

class Home extends Component {

  state = {
    timelineData: [
      {
        text: 'Wrote my first blog post ever on Medium',
        date: 'March 03 2017',
        category: {
          // tag: 'medium',
          // color: '#018f69'
        },
        link: 'https://relax.cms.healthmachine.io/wp-content/uploads/sites/7/2022/08/Audio-background.png'
      },
      {
        text: 'This is the second timeline item',
        date: 'September 22 2017',
        category: {
          tag: 'tag-two',
          color: '#018f69'
        },
        link: 'https://relax.cms.healthmachine.io/wp-content/uploads/sites/7/2022/08/Audio-background.png'
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <p className="timeline-heading" style={{ marginTop: 30 }}>
          Timeline
        </p>
        <Timeline data={this.state.timelineData} />
      </div>
    );
  }
}

export default Home;
