import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.05 12.97l3.76-9.5a.75.75 0 011.34-.1l.05.1 3.75 9.5a.75.75 0 01-1.35.65l-.05-.1-1-2.52h-4.1l-1 2.52a.75.75 0 01-.88.45l-.1-.03a.75.75 0 01-.45-.87l.03-.1zM7.5 5.79L6.04 9.5h2.92L7.5 5.8zM12 7.75c0 .41.34.75.75.75h5.69l-.72.72a.75.75 0 101.06 1.06l2-2c.3-.3.3-.77 0-1.06l-2-2a.75.75 0 10-1.06 1.06l.72.72h-5.69a.75.75 0 00-.75.75zm-9 9.5c0 .41.34.75.75.75h14.69l-.72.72a.75.75 0 101.06 1.06l2-2c.3-.3.3-.77 0-1.06l-2-2a.75.75 0 10-1.06 1.06l.72.72H3.75a.75.75 0 00-.75.75z" fill={primaryFill} /></svg>;
}

const TextDirectionHorizontalRight24Regular = wrapIcon(rawSvg({}), 'TextDirectionHorizontalRight24Regular');
export default TextDirectionHorizontalRight24Regular;
      