import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 3a3 3 0 00-3 3v2.76c.3-.2.64-.38 1-.5V6c0-1.1.9-2 2-2h8a2 2 0 012 2v8c0 .37-.1.72-.28 1.02l-4.67-4.59a1.5 1.5 0 00-1.7-.28c.16.29.3.6.41.91a.5.5 0 01.59.09l4.66 4.58A2 2 0 0114 16h-2.88l.44.44c.16.16.28.36.35.56H14a3 3 0 003-3V6a3 3 0 00-3-3H6z" fill={primaryFill} /><path d="M12.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm0-1a.5.5 0 110-1 .5.5 0 010 1z" fill={primaryFill} /><path d="M8.3 14.6a3.5 3.5 0 10-.7.7l2.55 2.55a.5.5 0 00.7-.7L8.3 14.6zm-2.8.4a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" fill={primaryFill} /></svg>;
}

const ImageSearch20Regular = wrapIcon(rawSvg({}), 'ImageSearch20Regular');
export default ImageSearch20Regular;
      