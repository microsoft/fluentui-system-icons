import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 10a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0-1c-.79 0-1.51-.26-2.1-.7l4.9-4.9A3.5 3.5 0 015.5 9zm2.1-6.3L2.7 7.6a3.5 3.5 0 014.9-4.9zM3 10.4c.32.16.65.3 1 .4V14c0 .37.1.72.28 1.02l4.67-4.59a1.5 1.5 0 012.1 0l4.67 4.59c.18-.3.28-.65.28-1.02V6a2 2 0 00-2-2h-3.2c-.1-.35-.24-.68-.4-1H14a3 3 0 013 3v8a3 3 0 01-3 3H6a3 3 0 01-3-3v-3.6zm1.99 5.33A2 2 0 006 16h8a2 2 0 001.01-.27l-4.66-4.58a.5.5 0 00-.7 0l-4.66 4.58zM14 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-1 0a.5.5 0 10-1 0 .5.5 0 001 0z" fill={primaryFill} /></svg>;
}

const ImageProhibitedRegular = wrapIcon(rawSvg({}), 'ImageProhibitedRegular');
export default ImageProhibitedRegular;
      