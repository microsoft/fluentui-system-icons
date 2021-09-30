import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.85 2.15a.5.5 0 10-.7.7l1.4 1.41A2.99 2.99 0 003 6v8a3 3 0 003 3h8c.65 0 1.25-.2 1.74-.55l1.4 1.4a.5.5 0 00.71-.7l-15-15zm6.56 7.97a1.5 1.5 0 00-.46.31l-4.67 4.59A2 2 0 014 14V6a2 2 0 01.28-1.02l5.13 5.14zM6 16a2 2 0 01-1.01-.27l4.66-4.58c.2-.2.5-.2.7 0l4.66 4.58A2 2 0 0114 16H6z" fill={primaryFill} /><path d="M16 6v7.88l.9.9A3 3 0 0017 14V6a3 3 0 00-3-3H6a3 3 0 00-.78.1l.9.9H14a2 2 0 012 2z" fill={primaryFill} /><path d="M14 7.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm-1 0a.5.5 0 11-1 0 .5.5 0 011 0z" fill={primaryFill} /></svg>;
}

const ImageOff20Regular = wrapIcon(rawSvg({}), 'ImageOff20Regular');
export default ImageOff20Regular;
      