import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 12h14.5a.75.75 0 01.1 1.5H16.28c.88.81 1.33 1.8 1.33 2.93 0 2.83-3.23 4.64-6.75 4.24-2.24-.26-3.81-1.16-4.64-2.7a.75.75 0 011.33-.71c.57 1.06 1.7 1.7 3.48 1.92 2.74.31 5.08-1 5.08-2.75 0-1.17-.8-2.12-2.56-2.88l-.12-.05H4.75a.75.75 0 01-.74-.65l-.01-.1c0-.38.28-.7.65-.74l.1-.01h14.5-14.5zm1.51-3.88c.15-2.83 2.82-4.47 6.32-4.06 2.2.26 3.87 1.05 4.99 2.41a.75.75 0 11-1.16.96c-.85-1.04-2.17-1.67-4-1.88-2.72-.31-4.65.8-4.65 2.57 0 .78.23 1.35.83 1.98l.13.14.25.24.03.02H7.08l-.02-.04c-.15-.2-.86-1.2-.8-2.34z" fill={primaryFill} /></svg>;
}

const TextStrikethrough24Regular = wrapIcon(rawSvg({}), 'TextStrikethrough24Regular');
export default TextStrikethrough24Regular;
      