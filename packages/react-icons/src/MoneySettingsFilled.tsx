import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.5 4C2.67 4 2 4.67 2 5.5v7c0 .83.67 1.5 1.5 1.5h5.7a5.5 5.5 0 01.1-3.27l-.3.02a1.75 1.75 0 111.69-2.21 5.5 5.5 0 011.84-1.18A2 2 0 0112 6V5h1v1a1 1 0 001 1h1v.02c.34.03.68.1 1 .19V5.5c0-.83-.67-1.5-1.5-1.5h-11zM6 6a2 2 0 01-2 2H3V7h1a1 1 0 001-1V5h1v1zm-3 5v-1h1a2 2 0 012 2v1H5v-1a1 1 0 00-1-1H3zm9.07-1.56a2 2 0 01-1.44 2.48l-.46.12a4.74 4.74 0 00.01 1.01l.35.09A2 2 0 0112 15.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 012.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 011.43-2.48l.46-.12a4.73 4.73 0 00-.01-1.01l-.35-.09A2 2 0 0117 9.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 01-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55zm2.43 4.06a1 1 0 110-2 1 1 0 010 2z" fill={primaryFill} /></svg>;
}

const MoneySettingsFilled = wrapIcon(rawSvg({}), 'MoneySettingsFilled');
export default MoneySettingsFilled;
      