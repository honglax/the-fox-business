import React from "react";
import defaultImg from "../../../assets/default-post-preview.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PrimaryButton } from "../StyledComponent/style";
import { socialIcons } from "./Data.Blog";

export default function BlogDetail({ match }) {
  // let postId = match.params.id;
  return (
    <div id="blog-detail" className="blog__detail">
      <div className="detail__introduction">
        <p>
          You may purchase phone plans with more than enough data to cover
          things like casual web surfing and streaming the occasional song. But
          you may not realize that browsing Facebook could be a big hit against
          your data plan too.
        </p>
        <p>
          According to Cisco's online VNI Services Gauge Tool, one hour of
          browsing through social media can use up 90 megabytes, which is more
          than twice the amount of data that streaming music uses in the
          standard "normal" quality per hour.
        </p>
      </div>
      <div className="detail__content">
        <p>
          It means that if you spend an hour a day on social media over a
          cellular network, you could be using 2.7 GB of data a month. Even half
          an hour of daily social media browsing could consumer 1.35 GB.
        </p>
        <p>
          A lot of that usage is likely due to the auto-play video Facebook
          recently added to its app. The videos appear at different rates for
          each user based on a variety of factors in Facebook's newsfeed
          algorithm. Twitter is also said to have a similar feature coming to
          its feed soon.
        </p>
        <p>
          You can disable the auto-play option for newsfeed videos when you're
          on a cellular network by going in to the Facebook app and tapping the
          options button (the three horizontal lines on top of each other) found
          on the bottom right for the iOS version, and towards the top right for
          the Android version. Then tap Account Settings > Videos and Photos >
          Auto-play > disable Smart Auto-play > and tap Use Wi-Fi Only.
        </p>
        <img src={defaultImg} alt="" className="content__img" />
        <h4>Music and Video Streaming</h4>
        <p>
          Streaming music at the normal, average stream quality for an hour will
          use up 43 megabytes of your data plan per hour. It may seem
          insignificant, but it equates to about{" "}
          <span className="blue-text">1.3 GB</span> of your plan per month if
          you stream music every day for an hour over your carrier's cell
          network. Some streaming services stream music at a lower 64 kbps,
          which uses up less data.
        </p>
        <p>
          And if you prefer to stream music in higher quality (at 320 kbps) when
          you're not connected to a WiFi network, you're looking at 144
          megabytes per hour. That's 4.32 GB per month if you stream high
          quality music every day for an hour over a cellular network.
        </p>
        <p>
          You may purchase phone plans with more than enough data to cover
          things like casual web surfing and streaming the occasional song.
        </p>
        <div className="content__quote-box">
          If today were the last day of your life, would you want to do what you
          are about to do today?
        </div>
        <p>
          But you may not realize that browsing Facebook could be a big hit
          against your data plan too.
        </p>
        <p>
          According to Cisco's online VNI Services Gauge Tool, one hour of
          browsing through social media can use up 90 megabytes, which is more
          than twice the amount of data that streaming music uses in the
          standard "normal" quality per hour.
        </p>
        <p>
          It means that if you spend an hour a day on social media over a
          cellular network, you could be using 2.7 GB of data a month. Even half
          an hour of daily social media browsing could consumer 1.35 GB.
        </p>
        <p>
          A lot of that usage is likely due to the auto-play video Facebook
          recently added to its app. The videos appear at different rates for
          each user based on a variety of factors in Facebook's newsfeed
          algorithm. Twitter is also said to have a similar feature coming to
          its feed soon.{" "}
        </p>
      </div>
      <div className="detail__social-btn">
        {socialIcons.map((icon, index) => {
          return (
            <PrimaryButton
              key={index}
              bgColor={icon.color}
              borderColor={icon.color}
              height="40px"
              boxShadowColor={icon.color}
              className="social-btn"
            >
              <a href={icon.url}>
                <FontAwesomeIcon icon={[icon.library, icon.name]} />
              </a>
            </PrimaryButton>
          );
        })}
      </div>
    </div>
  );
}
