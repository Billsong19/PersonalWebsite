import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import * as cardstyles from "../styles/card.module.css"
import { Link } from "gatsby"

export default function ProjectCard(props) {
  {
    return (
      <Link className={cardstyles.flexbox} to={props.destination}>
        <GatsbyImage
          className={cardstyles.image}
          image={props.img}
          alt="ting"
          objectFit="contain"
        />
        <h1 className={cardstyles.header}>{props.header}</h1>
        <p>{props.body}</p>
      </Link>

      /* <div className={cardstyles.wrapper}>
          <header className={cardstyles.header}>Header</header>
          <article className={cardstyles.main}>
            <p>
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
              vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit
              amet quam egestas semper. Aenean ultricies mi vitae est. Mauris
              placerat eleifend leo.
            </p>
          </article>
          <aside className={`class1 ${class2}`}>
            Aside 1
          </aside>
          <aside className={(cardstyles.aside, cardstyles.aside2)}>
            Aside 2
          </aside>
          <footer className={cardstyles.footer}>Footer</footer>
        </div> */
    )
  }
}
