import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 3.5C2 2.67 2.67 2 3.5 2h2C6.33 2 7 2.67 7 3.5v9c0 .83-.67 1.5-1.5 1.5h-2A1.5 1.5 0 012 12.5v-9zm7 0c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v4.52a5.5 5.5 0 00-5 2.31V3.5zm2.07 6.94a2 2 0 01-1.44 2.48l-.46.12a4.71 4.71 0 00.01 1.01l.35.09A2 2 0 0111 16.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 012.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 011.43-2.48l.46-.12a4.7 4.7 0 00-.01-1.01l-.35-.09A2 2 0 0116 10.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 01-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55zm2.43 4.06a1 1 0 110-2 1 1 0 010 2z" fill={primaryFill} /></svg>;
}

const PauseSettings20Filled = wrapIcon(rawSvg({}), 'PauseSettings20Filled');
export default PauseSettings20Filled;
      