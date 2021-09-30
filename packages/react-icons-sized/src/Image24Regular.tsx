import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 3C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 17.75V6.25C3 4.45 4.46 3 6.25 3h11.5zm.58 16.4l-5.8-5.69a.75.75 0 00-.97-.07l-.08.07-5.81 5.7c.18.06.38.09.58.09h11.5c.2 0 .4-.03.58-.1l-5.8-5.69 5.8 5.7zm-.58-14.9H6.25c-.97 0-1.75.78-1.75 1.75v11.5c0 .2.04.4.1.6l5.83-5.7a2.25 2.25 0 013.02-.12l.12.11 5.83 5.7c.06-.18.1-.38.1-.59V6.25c0-.97-.78-1.75-1.75-1.75zm-2.5 2a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zm0 1.5a.75.75 0 100 1.5.75.75 0 000-1.5z" fill={primaryFill} /></svg>;
}

const Image24Regular = wrapIcon(rawSvg({}), 'Image24Regular');
export default Image24Regular;
      