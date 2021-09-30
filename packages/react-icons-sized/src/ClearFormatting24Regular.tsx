import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 12a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm-6.19 7.5c.18.53.42 1.04.71 1.5H2.75a.75.75 0 01-.1-1.5h8.66zm3.78-4.53l-.07.05-.05.07a.5.5 0 000 .57l.05.07 1.77 1.77-1.76 1.77-.06.07a.5.5 0 000 .57l.06.06.07.06c.17.12.4.12.56 0l.07-.06 1.77-1.76 1.77 1.77.07.05c.17.12.4.12.57 0l.07-.05.05-.07a.5.5 0 000-.57l-.05-.07-1.77-1.77 1.77-1.77.06-.07a.5.5 0 000-.57l-.06-.07-.07-.05a.5.5 0 00-.57 0l-.07.05-1.77 1.77-1.77-1.77-.07-.05a.5.5 0 00-.5-.05l-.07.05zm.66-11.47c.43 0 .76.36.75.77l-.01.1-.25 1.5a.75.75 0 01-1.49-.14l.01-.1.1-.63h-3.85L9 16.5h.74c.38 0 .7.28.74.65l.01.1c0 .38-.28.7-.65.74l-.1.01h-3a.75.75 0 01-.1-1.5h.83l2-11.5h-4.1l-.14.87a.75.75 0 01-1.49-.14l.01-.1.25-1.5a.75.75 0 01.63-.62l.11-.01h11z" fill={primaryFill} /></svg>;
}

const ClearFormatting24Regular = wrapIcon(rawSvg({}), 'ClearFormatting24Regular');
export default ClearFormatting24Regular;
      