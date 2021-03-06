import React, {FC} from 'react'

const AnimationBox: FC<IProps> = ({image, name, url, webpImage}) => {
  return (
    <div className="portfolio-wrap">
      <a href={url} target="_blank">
        <picture>
          <source srcSet={webpImage} type="image/webp" />
          <source srcSet={image} type="image/jpeg" />
          <img src={image} loading="lazy" width="320" />
        </picture>
        <span className="text-3xl portfolio-title font-semibold">{name}</span>
      </a>
      <style jsx>{`
        .portfolio-wrap a {
          position: relative;
          display: inline-block;
          border: 2px solid #fff;
          color: black;
          text-align: center;
          text-decoration: none;
          outline: none;
          transition: all 0.3s;
          height: 250px;
          overflow: hidden;
        }
        .portfolio-wrap a::before,
        .portfolio-wrap a::after {
          position: absolute;
          top: -2px;
          right: -2px;
          bottom: -2px;
          left: -2px;
          z-index: 2;
          content: '';
          transition: all 0.3s;
        }
        .portfolio-wrap a::before {
          border-top: 10px solid #3be5ae;
          border-bottom: 10px solid #3be5ae;
          transform: scale(0, 1);
        }
        .portfolio-wrap a::after {
          border-right: 10px solid #3be5ae;
          border-left: 10px solid #3be5ae;
          transform: scale(1, 0);
        }
        .portfolio-wrap a:hover {
          color: #3be5ae;
        }
        .portfolio-wrap a:hover::after,
        .portfolio-wrap a:hover::before {
          transform: scale(1);
        }
        .portfolio-wrap a:hover img {
          opacity: 0.2;
          filter: alpha(opacity=20);
          -ms-filter: 'alpha(opacity=20)';
          -webkit-transition: 0.3s ease-in-out;
          -moz-transition: 0.3s ease-in-out;
          -o-transition: 0.3s ease-in-out;
          transition: 0.3s ease-in-out;
        }
        .portfolio-title {
          position: absolute;
          top: 50%;
          left: 50%;
          -ms-transform: translate(-50%, -50%);
          -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
          display: none;
          color: #47cea2;
        }
        .portfolio-wrap a:hover .portfolio-title {
          display: inline;
        }
      `}</style>
    </div>
  )
}

interface IProps {
  image: string
  name: string
  url: string
  webpImage: string
}

export default AnimationBox
