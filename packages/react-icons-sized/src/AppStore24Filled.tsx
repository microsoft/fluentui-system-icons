import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 3C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 17.75V6.25C3 4.45 4.46 3 6.25 3h11.5zM9.37 15.25H7.63l-.07.12-.04.1a.75.75 0 001.28.74l.06-.08.5-.88zm3.92-5.23l-.87 1.5 2.66 4.6.06.09a.75.75 0 001.28-.74l-.04-.1-.5-.87h.97c.34-.05.6-.31.64-.64l.01-.1v-.1a.75.75 0 00-.65-.65h-1.84l-1.72-2.99zm-.03-2.92a.75.75 0 00-.97.19l-.05.08-.24.41-.24-.4-.05-.09a.75.75 0 00-.87-.24l-.1.05-.09.06a.75.75 0 00-.23.86l.04.1.67 1.15L8.95 13h-1.7l-.1.01a.75.75 0 000 1.49h6.13L12.4 13h-1.73l2.85-4.87.05-.1a.75.75 0 00-.32-.93z" fill={primaryFill} /></svg>;
}

const AppStore24Filled = wrapIcon(rawSvg({}), 'AppStore24Filled');
export default AppStore24Filled;
      