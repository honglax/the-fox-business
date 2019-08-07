import React from "react";
import styled from "styled-components";

export default function Analyzer() {
  let analyzerItems = [
    {
      counter: "966",
      title: "Support Ticket Solved",
      color: "#86d375"
    },
    {
      counter: "20K",
      title: "Purchase",
      color: "#1fc6d5"
    },
    {
      counter: "1832",
      title: "Cafe Cups",
      color: "#f47272"
    },
    {
      counter: "1.2M",
      title: "Facebook Likes",
      color: "#aae980"
    },
    {
      counter: "10K",
      title: "Tweets",
      color: "#9f7bfb"
    },
    {
      counter: "+18K",
      title: "Comments",
      color: "#fbb439"
    }
  ];

  const AnalyzerItem = styled.div`
    &::before {
      background-color: ${props => props.color || "transparent"};
      border-left-color: ${props => props.color};
    }

    .counter {
      color: ${props => props.color};
    }
  `;

  return analyzerItems.map(item => (
    <AnalyzerItem
      className="analyzer-item"
      color={item.color}
      key={analyzerItems.indexOf(item)}
    >
      <div className="counter">{item.counter}</div>
      <div className="title">{item.title}</div>
    </AnalyzerItem>
  ));
}
