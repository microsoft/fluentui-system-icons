import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.05 14.59l-.01-.04-4.32-10.37a1.72 1.72 0 00-.67-.87 1.8 1.8 0 00-.95-.3c-.4-.04-.79.06-1.12.29-.32.22-.54.52-.68.83v.01L3.92 14.76l-.02.11c-.02.13-.05.3-.05.44 0 .42.13.87.48 1.22.37.37.84.48 1.25.48.36 0 .7-.1 1-.32.31-.21.53-.52.65-.85L8 13.97h3.92l.8 1.9.01.02c.13.28.32.54.58.76l.04.03.04.02c.3.2.63.3 1 .3.47 0 .89-.17 1.22-.5.36-.34.54-.79.54-1.27 0-.22-.03-.43-.1-.64zm-.9.64c0 .22-.08.41-.24.56a.72.72 0 01-.52.22.78.78 0 01-.45-.14c-.12-.1-.22-.24-.3-.4l-1.06-2.5H7.33L6.3 15.48a.73.73 0 01-.28.4.7.7 0 01-.43.13c-.24 0-.42-.06-.54-.19a.69.69 0 01-.19-.5l.03-.28 4.34-10.5a.91.91 0 01.32-.41c.15-.1.31-.15.5-.12a.8.8 0 01.45.13c.14.1.24.22.3.4L15.1 14.9c.03.1.05.21.05.33zm-7.17-3.81h3.96L9.95 6.66l-1.97 4.76zm1.97-2.16l.49 1.16h-.97l.48-1.16z" fill={primaryFill} /></svg>;
}

const TextEffectsRegular = wrapIcon(rawSvg({}), 'TextEffectsRegular');
export default TextEffectsRegular;
      