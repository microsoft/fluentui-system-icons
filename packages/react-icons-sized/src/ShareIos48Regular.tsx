import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M37.75 20.75c.65 0 1.18.5 1.24 1.12L39 22v14.75A5.25 5.25 0 0133.97 42H14.25A5.25 5.25 0 019 36.97V22a1.25 1.25 0 012.5-.13v14.88a2.75 2.75 0 002.58 2.74l.17.01h19.5a2.75 2.75 0 002.74-2.58l.01-.17V22c0-.69.56-1.25 1.25-1.25zm-22.66-6.6l7.78-7.78a1.25 1.25 0 011.66-.1l.1.1 7.78 7.77A1.25 1.25 0 0130.75 16l-.1-.09L25 10.27V30.5c0 .65-.5 1.18-1.12 1.24l-.13.01c-.65 0-1.18-.5-1.24-1.12l-.01-.13V10.27l-5.64 5.64c-.46.46-1.18.49-1.67.1l-.1-.1a1.25 1.25 0 01-.1-1.66l.1-.1 7.78-7.78-7.78 7.77z" fill={primaryFill} /></svg>;
}

const ShareIos48Regular = wrapIcon(rawSvg({}), 'ShareIos48Regular');
export default ShareIos48Regular;
      