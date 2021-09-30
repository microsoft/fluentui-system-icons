import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 9a2 2 0 013.9-.65 5.5 5.5 0 00-1.69 2.64L9 11a2 2 0 01-2-2zm2-1a1 1 0 100 2 1 1 0 000-2zm3-2c0 .53.2 1 .53 1.36A5.49 5.49 0 0116 7.21V5.5c0-.83-.67-1.5-1.5-1.5h-11C2.67 4 2 4.67 2 5.5v7c0 .83.67 1.5 1.5 1.5h5.7c-.08-.32-.15-.66-.18-1H6v-1a2 2 0 00-2-2H3V8h1a2 2 0 002-2V5h6v1zm2.5 1H14a1 1 0 01-1-1V5h1.5c.28 0 .5.22.5.5V7h-.5zM3 5.5c0-.28.22-.5.5-.5H5v1a1 1 0 01-1 1H3V5.5zM5 13H3.5a.5.5 0 01-.5-.5V11h1a1 1 0 011 1v1zm7.07-3.56a2 2 0 01-1.44 2.48l-.46.12a4.74 4.74 0 00.01 1.01l.35.09A2 2 0 0112 15.66l-.13.42c.26.2.54.38.84.52l.32-.35a2 2 0 012.91 0l.34.36c.3-.13.57-.3.82-.5l-.15-.55a2 2 0 011.43-2.48l.46-.12a4.73 4.73 0 00-.01-1.01l-.35-.09A2 2 0 0117 9.34l.13-.42c-.26-.2-.54-.38-.84-.52l-.32.35a2 2 0 01-2.91 0l-.34-.36c-.3.13-.57.3-.82.5l.16.55zm2.43 4.06a1 1 0 110-2 1 1 0 010 2z" fill={primaryFill} /></svg>;
}

const MoneySettingsRegular = wrapIcon(rawSvg({}), 'MoneySettingsRegular');
export default MoneySettingsRegular;
      