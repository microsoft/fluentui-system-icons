import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21.75 3C23.55 3 25 4.46 25 6.25v15.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 21.75V6.25C3 4.45 4.46 3 6.25 3h15.5zm.58 20.4l-7.8-7.68a.75.75 0 00-.97-.07l-.09.07-7.8 7.68c.18.06.38.1.58.1h15.5c.2 0 .4-.04.58-.1l-7.8-7.68 7.8 7.68zm-.58-18.9H6.25c-.97 0-1.75.78-1.75 1.75v15.5c0 .2.04.4.1.6l7.82-7.7a2.25 2.25 0 013.03-.12l.13.12 7.82 7.7c.06-.2.1-.4.1-.6V6.25c0-.97-.78-1.75-1.75-1.75zm-3.25 3a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm0 1.5a1 1 0 100 2 1 1 0 000-2z" fill={primaryFill} /></svg>;
}

const Image28Regular = wrapIcon(rawSvg({}), 'Image28Regular');
export default Image28Regular;
      