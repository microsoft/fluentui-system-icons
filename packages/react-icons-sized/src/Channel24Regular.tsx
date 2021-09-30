import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 3A3.25 3.25 0 0121 6.07v11.68a3.25 3.25 0 01-3.07 3.24l-.18.01H6.25a3.25 3.25 0 01-3.24-3.07L3 17.75V9.37a2.25 2.25 0 001.5 0v8.38c0 .92.7 1.67 1.6 1.74l.15.01h11.5c.92 0 1.67-.7 1.74-1.6l.01-.15V6.25c0-.92-.7-1.67-1.6-1.74l-.15-.01H6.25c-.6 0-1.13.3-1.44.76a2.23 2.23 0 00-1.59-.2 3.25 3.25 0 012.85-2.05L6.25 3h11.5zm-4.5 10a.75.75 0 01.1 1.5h-4.6a.75.75 0 01-.1-1.49h4.6zm2-3.5a.75.75 0 01.1 1.49h-6.6a.75.75 0 01-.1-1.49h6.6zM3.75 6a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" fill={primaryFill} /></svg>;
}

const Channel24Regular = wrapIcon(rawSvg({}), 'Channel24Regular');
export default Channel24Regular;
      