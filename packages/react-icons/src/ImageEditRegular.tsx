import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-1 0a.5.5 0 10-1 0 .5.5 0 001 0zM3 6a3 3 0 013-3h8a3 3 0 013 3v3c-.34.02-.68.1-1 .23V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8c0 .37.1.72.28 1.02l4.67-4.59a1.5 1.5 0 012.1 0l1.75 1.72-.71.7-1.74-1.7a.5.5 0 00-.7 0l-4.66 4.57c.3.18.64.28 1.01.28h3.47l-.04.15-.21.85H6a3 3 0 01-3-3V6zm7.98 9.38l4.83-4.83a1.87 1.87 0 112.64 2.64l-4.83 4.83a2.2 2.2 0 01-1.02.58l-1.5.37a.89.89 0 01-1.07-1.08l.37-1.5c.1-.38.3-.73.58-1.01z" fill={primaryFill} /></svg>;
}

const ImageEditRegular = wrapIcon(rawSvg({}), 'ImageEditRegular');
export default ImageEditRegular;
      