import React, { Component } from 'react';
import Timeline from './TimelineComp/Timeline';
import './Home.css';

class Home extends Component {

  state = {
    timelineData: [
      {
        text: 'TGIF',
        date: '17 Sep 2021',
        category: {
          // tag: 'medium',
          // color: '#018f69'
        },
        link: 'https://raw.githubusercontent.com/Spark-Cybel/images-repo/main/IMG_20210917_172838.jpg'
      },
      {
        text: 'Masti',
        date: '27 Oct 2021',
        category: {
          // tag: 'tag-two',
          // color: '#018f69'
        },
        link: 'https://raw.githubusercontent.com/Spark-Cybel/images-repo/main/IMG-20211027-WA0004.jpg'
      },
      {
        text: 'Diwali',
        date: '29 Oct 2021',
        category: {
          // tag: 'tag-two',
          // color: '#018f69'
        },
        link: 'https://raw.githubusercontent.com/Spark-Cybel/images-repo/main/IMG-20211029-WA0037.jpg'
      },
      {
        text: 'Rocket Madam',
        date: '14 Nov 2021',
        category: {
          // tag: 'tag-two',
          // color: '#018f69'
        },
        link: 'https://raw.githubusercontent.com/Spark-Cybel/images-repo/main/received_4193533360761408.jpeg'
      },
      {
        text: 'First Party',
        date: '11 Mar 2022',
        category: {
          // tag: 'tag-two',
          // color: '#018f69'
        },
        link: 'https://raw.githubusercontent.com/Spark-Cybel/images-repo/main/IMG-20220311-WA0049.jpg'
      },
      {
        text: 'Vaibhav Birthday',
        date: '23 Mar 2022',
        category: {
          // tag: 'tag-two',
          // color: '#018f69'
        },
        link: 'https://raw.githubusercontent.com/Spark-Cybel/images-repo/main/IMG-20220323-WA0038.jpg'
      },
      {
        text: 'Della',
        date: '3 Apr 2022',
        category: {
          // tag: 'tag-two',
          // color: '#018f69'
        },
        link: 'https://raw.githubusercontent.com/Spark-Cybel/images-repo/main/IMG-20220403-WA0074.jpg'
      },
      {
        text: 'Baner Hills',
        date: '30 Apr 2022',
        category: {
          // tag: 'tag-two',
          // color: '#018f69'
        },
        link: 'https://raw.githubusercontent.com/Spark-Cybel/images-repo/main/IMG-20220430-WA0000.jpg'
      },
      {
        text: 'Kanchan Birthday',
        date: '6 May 2022',
        category: {
          // tag: 'tag-two',
          // color: '#018f69'
        },
        link: 'https://raw.githubusercontent.com/Spark-Cybel/images-repo/main/IMG-20220506-WA0009.jpg'
      },
      {
        text: 'Dance Dance Dance',
        date: '29 Jun 2022',
        category: {
          // tag: 'tag-two',
          // color: '#018f69'
        },
        link: 'https://raw.githubusercontent.com/Spark-Cybel/images-repo/main/IMG-20220629-WA0032.jpg'
      },
      {
        text: 'Barish ka Mausam',
        date: '11 Jul 2022',
        category: {
          // tag: 'tag-two',
          // color: '#018f69'
        },
        link: 'https://raw.githubusercontent.com/Spark-Cybel/images-repo/main/Snapchat-2957215.jpg'
      },
      {
        text: 'Gauri Farewell',
        date: '5 Aug 2022',
        category: {
          // tag: 'tag-two',
          // color: '#018f69'
        },
        link: 'https://raw.githubusercontent.com/Spark-Cybel/images-repo/main/IMG-20220805-WA0009.jpg'
      },
      {
        text: 'Shubham cha Birthday 😂😂',
        date: '1 Dec 2022',
        category: {
          // tag: 'tag-two',
          // color: '#018f69'
        },
        link: 'https://raw.githubusercontent.com/Spark-Cybel/images-repo/main/received_524807649505796-01-01-01.jpeg'
      },
      {
        text: 'Movie Night',
        date: '27 Dec 2022',
        category: {
          // tag: 'tag-two',
          // color: '#018f69'
        },
        link: 'https://raw.githubusercontent.com/Spark-Cybel/images-repo/main/IMG-20221227-WA0004.jpg'
      },
      {
        text: 'No Comments 😂😂',
        date: '1 Feb 2023',
        category: {
          // tag: 'tag-two',
          // color: '#018f69'
        },
        link: 'https://raw.githubusercontent.com/Spark-Cybel/images-repo/main/IMG-20230201-WA0001.jpg'
      },
      {
        text: 'Pune Daura',
        date: '17 Mar 2023',
        category: {
          // tag: 'tag-two',
          // color: '#018f69'
        },
        link: 'https://raw.githubusercontent.com/Spark-Cybel/images-repo/main/IMG-20230317-WA0034.jpg'
      },
      {
        text: 'Bestie ❤️',
        date: '17 Mar 2023',
        category: {
          // tag: 'tag-two',
          // color: '#018f69'
        },
        link: 'https://raw.githubusercontent.com/Spark-Cybel/images-repo/main/IMG-20230317-WA0056.jpg'
      },
      {
        text: 'Bhai ka Birthday',
        date: '22 Apr 2023',
        category: {
          // tag: 'tag-two',
          // color: '#018f69'
        },
        link: 'https://raw.githubusercontent.com/Spark-Cybel/images-repo/main/IMG-20230422-WA0016.jpg'
      },
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
