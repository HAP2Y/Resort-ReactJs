import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Incididunt incididunt irure anim excepteur Lorem quis veniam consectetur deserunt fugiat exercitation fugiat culpa dolore.",
      },
      {
        icon: <FaHiking />,
        title: "free Endless Hiking",
        info:"Est tempor reprehenderit cupidatat adipisicing Lorem excepteur cupidatat proident consequat dolore."
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "Irure occaecat quis minim voluptate dolore cillum ipsum dolore magna nostrud nisi exercitation eu cupidatat.",
      },
      {
        icon: <FaBeer />,
        title: "strongest beer",
        info:
          "Ullamco duis deserunt velit quis ex velit dolore ad Lorem id incididunt ipsum consequat reprehenderit.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
            {this.state.services.map((item, index) => {
                return <article key={index} className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                </article>
            })}
        </div>
      </section>
    );
  }
}
