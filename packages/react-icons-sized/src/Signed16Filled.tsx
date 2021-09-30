import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.34 2.07l.07.15.58 1.53c.04.12.14.22.26.26l1.48.56c.65.24 1 .94.82 1.6l-.04.12-.69 1.53a.45.45 0 000 .36l.66 1.44c.29.64.04 1.37-.55 1.72l-.15.07-1.53.58a.45.45 0 00-.26.26l-.56 1.48c-.24.65-.93 1-1.6.82l-.12-.04-1.53-.69a.45.45 0 00-.36 0l-1.44.66c-.64.29-1.37.04-1.71-.55l-.08-.15L4 12.25a.45.45 0 00-.26-.26l-1.48-.56c-.65-.24-1-.93-.82-1.6l.04-.12.69-1.53a.45.45 0 000-.36l-.66-1.44a1.34 1.34 0 01.55-1.71l.15-.08L3.75 4a.45.45 0 00.26-.26l.56-1.48c.24-.65.94-1 1.6-.82l.12.04 1.53.69c.11.05.25.05.36 0l1.44-.66a1.34 1.34 0 011.72.55zM10.16 5.7L6.98 9.35 5.82 8.18a.45.45 0 10-.64.64l1.5 1.5c.19.18.49.17.66-.03l3.5-4a.45.45 0 00-.68-.58z" fill={primaryFill} /></svg>;
}

const Signed16Filled = wrapIcon(rawSvg({}), 'Signed16Filled');
export default Signed16Filled;
      