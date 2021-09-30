import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.97 3.2l.03.3v13c0 .83-.67 1.5-1.5 1.5h-5A1.5 1.5 0 016 16.5v-13A1.5 1.5 0 017.5 2h5c.72 0 1.33.51 1.47 1.2zM7 14.5v1h1.5a.5.5 0 000-1H7zm0-10v1h1.5a.5.5 0 000-1H7zM7 7v1h2.5a.5.5 0 000-1H7zm0 2.5v1h1.5a.5.5 0 000-1H7zM7 12v1h2.5a.5.5 0 100-1H7z" fill={primaryFill} /></svg>;
}

const RulerFilled = wrapIcon(rawSvg({}), 'RulerFilled');
export default RulerFilled;
      