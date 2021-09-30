import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.5 3.43l1.18-1.18a1 1 0 011.41 0l.7.7a1 1 0 010 1.42l-1.18 1.18-2.12-2.12zM17.42 4.5l-3.82 3.82-.16-.16a2.75 2.75 0 00-4.4.72l-.42.83a.6.6 0 01-.66.33L7.9 10a4.7 4.7 0 00-4.7 1.8 6.03 6.03 0 00.57 7.87l.6.6a6.03 6.03 0 007.87.56 4.7 4.7 0 001.8-4.7l-.02-.06a.6.6 0 01.32-.67l.84-.41a2.75 2.75 0 00.71-4.4l-.16-.17 3.82-3.82-2.12-2.12zm-8 10.07a1.5 1.5 0 112.13-2.12 1.5 1.5 0 01-2.12 2.12z" fill={primaryFill} /></svg>;
}

const Guitar24Filled = wrapIcon(rawSvg({}), 'Guitar24Filled');
export default Guitar24Filled;
      