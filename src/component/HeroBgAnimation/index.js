import React from 'react';
import { Div } from './HeroBgAnimationStyle'; // Assuming HeroBgAnimationStyle contains styled components

const HeroBgAnimation = () => (
  <Div>
    <svg
      className="BgAnimation__svg"
      viewBox="0 0 600 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#F46737', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#945DD6', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#13ADC7', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#E71D36', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <g opacity="0.8">
        {/* Animated Rectangle */}
        <rect x="100" y="100" width="200" height="200" fill="url(#grad1)">
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 200 200"
            to="360 200 200"
            dur="10s"
            repeatCount="indefinite"
          />
        </rect>
        {/* Animated Circle */}
        <circle cx="400" cy="400" r="100" fill="url(#grad2)">
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="translate"
            from="0 0"
            to="200 200"
            dur="6s"
            repeatCount="indefinite"
          />
        </circle>
        {/* Animated Polygon */}
        <polygon points="200,400 250,300 300,350" fill="#FCE205">
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 250 350"
            to="360 250 350"
            dur="8s"
            repeatCount="indefinite"
          />
        </polygon>
        {/* Animated Ellipse */}
        <ellipse cx="500" cy="200" rx="80" ry="50" fill="#1FCC8B">
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="scale"
            values="1;1.5;1"
            dur="5s"
            repeatCount="indefinite"
          />
        </ellipse>
      </g>
    </svg>
  </Div>
);

export default HeroBgAnimation;
