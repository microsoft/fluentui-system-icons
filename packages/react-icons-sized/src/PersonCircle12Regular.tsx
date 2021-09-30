import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.22 6.26A.75.75 0 014.78 6h2.44c.24 0 .43.12.56.26.13.15.22.35.22.55v.16c0 .82-.82 1.53-2 1.53-1.18 0-2-.71-2-1.53v-.16c0-.2.09-.4.22-.55zM6 5a1 1 0 100-2 1 1 0 000 2zm0 6A5 5 0 106 1a5 5 0 000 10zm0-1a4 4 0 110-8 4 4 0 010 8z" fill={primaryFill} /></svg>;
}

const PersonCircle12Regular = wrapIcon(rawSvg({}), 'PersonCircle12Regular');
export default PersonCircle12Regular;
      