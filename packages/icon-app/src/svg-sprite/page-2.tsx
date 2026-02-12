import * as React from 'react';

import smileySvg from './assets/smiley-love.svg';
import videoSvg from './assets/video.svg';
import { SvgIcon } from './svg-icon';

export const Page2 = () => {
  return (
    <div>
      <b>Page 2</b>
      <SvgIcon id={smileySvg} />
      <img src={smileySvg} alt="Smiley SVG" />
      <SvgIcon id={videoSvg} />
      <img src={videoSvg} alt="Video SVG" />
    </div>
  );
};
