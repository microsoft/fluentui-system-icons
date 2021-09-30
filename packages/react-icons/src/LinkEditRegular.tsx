import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 4.5A.5.5 0 008 4H5.78A4 4 0 006 12h2.09a.5.5 0 00-.1-1H5.8A3 3 0 016 5h2.09a.5.5 0 00.4-.5zM18 8a4 4 0 00-4-4h-2.1a.5.5 0 00.1 1h2.2A3 3 0 0117 8.14c.33.1.66.28.95.52.03-.21.05-.43.05-.65zm-4-.5H5.9a.5.5 0 00.09 1h8.09a.5.5 0 00-.1-1zm-4.02 6.88l4.83-4.83a1.87 1.87 0 012.64 2.64l-4.83 4.83a2.2 2.2 0 01-1.02.58l-1.5.37a.89.89 0 01-1.07-1.08l.37-1.5c.1-.38.3-.73.58-1.01z" fill={primaryFill} /></svg>;
}

const LinkEditRegular = wrapIcon(rawSvg({}), 'LinkEditRegular');
export default LinkEditRegular;
      