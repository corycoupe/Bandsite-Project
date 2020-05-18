import React from "react";
import Header from "./components/Header";
import Video from "./components/Video";
import Description from "./components/Description";
import Comments from "./components/Comments";
import NewComments from "./components/NewComments";
import VideoList from "./components/VideoList";
import "./App.css";

// states for videolist + main video comments //
class App extends React.Component {
  state = {
    videoListArray: [
      {
        id: 2,
        title: "Become A Travel Pro In One Easy Lesson",
        channel: "Todd Welch",
        image: "./images/video-list-1.jpg",
      },
      {
        id: 3,
        title: "Les Houches The Hidden Gem Of The Chamonix",
        channel: "Cornelia Blair",
        image: "./images/video-list-2.jpg",
      },
      {
        id: 4,
        title: "Travel Health Useful Medical Information For",
        channel: "Glen Harper",
        image: "./images/video-list-3.jpg",
      },
      {
        id: 5,
        title: "Cheap Airline Tickets Great Ways To Save",
        channel: "Emily Harper",
        image: "./images/video-list-4.jpg",
      },
      {
        id: 6,
        title: "Take A Romantic Break In A Boutique Hotel",
        channel: "Ethan Owen",
        image: "./images/video-list-5.jpg",
      },
      {
        id: 7,
        title: "Choose The Perfect Accommodations",
        channel: "Lydia Perez",
        image: "./images/video-list-6.jpg",
      },
      {
        id: 8,
        title: "Cruising Destination Ideas",
        channel: "Timothy Austin",
        image: "./images/video-list-7.jpg",
      },
      {
        id: 9,
        title: "Train Travel On Track For Safety",
        channel: "Scotty Cranmer",
        image: "./images/video-list-8.jpg",
      },
      {
        id: 1,
        title: "BMX Rampage: 2018 Highlights",
        channel: "Red Cow",
        image: "./images/video-list-8.jpg",
      },
    ],
    mainVideo: {
      id: 1,
      title: "BMX Rampage: 2018 Highlights",
      description:
        "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his ﬁrst Red Cow Rampage title",
      channel: "By Red Cow",
      image: "./images/video-list-0.jpg",
      views: "1,001,023",
      likes: "110,985",
      duration: "type of <string>",
      video: "type of <string>",
      timestamp: "12/18/2018",
      comments: [
        {
          name: "Michael Lyons",
          date: "12/18/2018",
          comment:
            "They BLEW the ROOF off at their last show, once everyone started ﬁguring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
        },
        {
          name: "Gary Wong",
          date: "12/18/2018",
          comment:
            "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        },
        {
          name: "Theodore Duncan",
          date: "11/15/2018",
          comment:
            "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s deﬁnitely my favorite ever!",
        },
      ],
    },
  };

  render() {
    // state variables //
    const { videoListArray, mainVideo } = this.state;
    // created html sections//
    return (
      <>
        <Header />
        <Video image={mainVideo.image} />
        <main className="main-container">
          <section className="section-comments">
            <Description mainVideo={mainVideo} />
            <Comments />
            <NewComments comments={mainVideo.comments} />
          </section>
          <section className="section-videos">
            <VideoList
              videoListArray={videoListArray}
              mainId={mainVideo.id}
              id={videoListArray.id}
              title={videoListArray.title}
              channel={videoListArray.channel}
              image={videoListArray.image}
            />
          </section>
        </main>
      </>
    );
  }
}
export default App;
