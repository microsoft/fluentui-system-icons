import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.5 8a.5.5 0 100-1 .5.5 0 000 1zM3 6a3 3 0 013-3h8a3 3 0 013 3v3c-.7.03-1.37.31-1.9.84l-2.3 2.3-1.75-1.7a1.5 1.5 0 00-2.1 0l-5.4 5.3C3.22 15.24 3 14.64 3 14V6zm9.5 3a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-2.23 5.67l1.82-1.81-1.74-1.71a.5.5 0 00-.7 0l-5.38 5.3c.48.34 1.08.55 1.73.55h3.22l.21-.85a3.2 3.2 0 01.84-1.48zm.7.7l4.84-4.82a1.87 1.87 0 112.64 2.64l-4.83 4.83a2.2 2.2 0 01-1.02.58l-1.5.37a.89.89 0 01-1.07-1.08l.37-1.5c.1-.38.3-.73.58-1.01z" fill={primaryFill} /></svg>;
}

const ImageEdit20Filled = wrapIcon(rawSvg({}), 'ImageEdit20Filled');
export default ImageEdit20Filled;
      