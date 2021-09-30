import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.96 8.18a9.61 9.61 0 00-15.85 0 .5.5 0 00.83.56 8.61 8.61 0 0114.2 0 .5.5 0 10.82-.56zm-10.78 3.1a4.03 4.03 0 013.85-1.05c-.32.26-.6.55-.86.88a3.02 3.02 0 00-2.91 1.82.5.5 0 11-.92-.4c.2-.47.49-.9.84-1.24zm7.42-2.5l.2.23a5.59 5.59 0 00-1.35.09 5.45 5.45 0 00-8.28 1.79.5.5 0 01-.89-.46A6.45 6.45 0 0114.6 8.78zm-2.53 2.66a2 2 0 01-1.43 2.48l-.46.12a4.7 4.7 0 000 1.01l.35.09A2 2 0 0112 17.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 012.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 011.43-2.48l.46-.12a4.7 4.7 0 00-.01-1.01l-.35-.09A2 2 0 0117 11.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 01-2.91 0l-.34-.36c-.29.13-.57.3-.82.5l.16.55zm2.43 4.06a1 1 0 110-2 1 1 0 010 2z" fill={primaryFill} /></svg>;
}

const WifiSettingsRegular = wrapIcon(rawSvg({}), 'WifiSettingsRegular');
export default WifiSettingsRegular;
      