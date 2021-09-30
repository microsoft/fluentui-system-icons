import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 4.5a.5.5 0 11-1 0 .5.5 0 011 0zm2.5.5a.5.5 0 100-1 .5.5 0 000 1zM1 3c0-1.1.9-2 2-2h6a2 2 0 012 2v4.5a.5.5 0 01-.15.35l-3 3a.5.5 0 01-.35.15H3a2 2 0 01-2-2V3zm2-1a1 1 0 00-1 1v6a1 1 0 001 1h3V8.01c-.68 0-1.18-.34-1.48-.65a2.78 2.78 0 01-.46-.6v-.02a.5.5 0 11.9-.43l.05.08c.05.07.12.17.22.27.2.2.45.35.77.35.1 0 .2-.02.29-.05A2 2 0 018 6h2V3a1 1 0 00-1-1H3zm7 5H8a1 1 0 00-1 1v2h.3L10 7.3V7z" fill={primaryFill} /></svg>;
}

const Sticker12Regular = wrapIcon(rawSvg({}), 'Sticker12Regular');
export default Sticker12Regular;
      