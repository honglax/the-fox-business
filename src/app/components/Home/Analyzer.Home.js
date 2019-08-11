import React, { Component } from "react";
import styled from "styled-components";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
export default class Analyzer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      analyzerItems: [
        {
          id: 1,
          counter: 966,
          title: "Support Ticket Solved",
          color: "#86d375"
        },
        {
          id: 2,
          counter: 20000,
          title: "Purchase",
          color: "#1fc6d5"
        },
        {
          id: 3,
          counter: 1832,
          title: "Cafe Cups",
          color: "#f47272"
        },
        {
          id: 4,
          counter: 12000000,
          title: "Facebook Likes",
          color: "#aae980"
        },
        {
          id: 5,
          counter: 10000000,
          title: "Tweets",
          color: "#9f7bfb"
        },
        {
          id: 6,
          counter: 18000,
          title: "Comments",
          color: "#fbb439"
        }
      ],
      didViewCountUp: false,
      didAnimated: true
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    this.setState({ scroll: window.scrollY });
  }

  onVisibilityChange = isVisible => {
    if (isVisible) {
      this.setState({ didViewCountUp: true });
    }
  };

  formattingNumber = number => {
    if (number > 1000000) {
      return {
        num: number / 1000000,
        suffix: "M"
      };
    } else if (number > 1000) {
      return {
        num: number / 1000,
        suffix: "K"
      };
    } else {
      return {
        num: number,
        suffix: ""
      };
    }
  };

  componentDidMount() {
    const el = document.getElementById("analyzer");
    this.setState({ top: el.offsetTop });
    // console.log(el.offsetTop);
  }

  render() {
    const AnalyzerItem = styled.div`
      &::before {
        background-color: ${props => props.color || "transparent"};
        border-left-color: ${props => props.color};
      }

      .counter {
        color: ${props => props.color};
      }
    `;
    return this.state.analyzerItems.map(item => {
      let formattedNum = this.formattingNumber(item.counter);
      return (
        <VisibilitySensor
          onChange={this.onVisibilityChange}
          active={this.state.didAnimated}
          offset={{
            top: 50
          }}
          delayedCall={false}
          key={item.id}
        >
          <AnalyzerItem
            className="analyzer-item"
            color={item.color}
            key={item.id}
          >
            <CountUp
              className="counter"
              duration={2.5}
              start={this.state.didAnimated ? 0 : formattedNum.num}
              // formattingFn={() => formattedNum.num + formattedNum.suffix}
              delay={0}
              decimals={formattedNum.num % 1 === 0 ? 0 : 1}
              // end={this.state.didViewCountUp ? formattedNum.num : 0}
              end={formattedNum.num}
              suffix={formattedNum.suffix}
              prefix={item.id === 6 ? "+" : ""}
              onEnd={() => {
                this.setState({ didAnimated: false, didViewCountUp: false });
              }}
            />
            <div className="title">{item.title}</div>
          </AnalyzerItem>
        </VisibilitySensor>
      );
    });
  }
}
