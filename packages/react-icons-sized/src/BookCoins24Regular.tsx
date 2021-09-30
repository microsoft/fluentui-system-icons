import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.2 7.46c.62-.3 1.43-.46 2.3-.46.87 0 1.68.17 2.3.46.58.28 1.2.78 1.2 1.54s-.62 1.26-1.2 1.54c-.62.3-1.43.46-2.3.46-.87 0-1.68-.17-2.3-.46C9.62 10.26 9 9.76 9 9s.62-1.26 1.2-1.54zm.54 1.13c-.47.22-.49.41-.49.41s.02.19.49.4c.42.2 1.04.35 1.76.35s1.34-.14 1.76-.34c.47-.22.49-.41.49-.41s-.02-.19-.49-.4a4.23 4.23 0 00-1.76-.35c-.72 0-1.34.14-1.76.34z" fill={primaryFill} /><path d="M12.5 12c1.41 0 2.67-.43 3.5-1.11V11c0 1.1-1.57 2-3.5 2S9 12.1 9 11v-.11A5.58 5.58 0 0012.5 12z" fill={primaryFill} /><path d="M12.5 14c1.41 0 2.67-.43 3.5-1.11V13c0 1.1-1.57 2-3.5 2S9 14.1 9 13v-.11A5.58 5.58 0 0012.5 14z" fill={primaryFill} /><path d="M6.5 2A2.5 2.5 0 004 4.5v15A2.5 2.5 0 006.5 22h13.25a.75.75 0 000-1.5H6.5a1 1 0 01-1-1h14.25c.41 0 .75-.34.75-.75V4.5A2.5 2.5 0 0018 2H6.5zM19 18H5.5V4.5a1 1 0 011-1H18a1 1 0 011 1V18z" fill={primaryFill} /></svg>;
}

const BookCoins24Regular = wrapIcon(rawSvg({}), 'BookCoins24Regular');
export default BookCoins24Regular;
      