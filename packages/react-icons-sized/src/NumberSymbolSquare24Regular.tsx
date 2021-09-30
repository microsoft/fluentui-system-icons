import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.9 7.51c.4.09.67.48.59.89l-.22 1.1h2.47l.28-1.4a.75.75 0 011.47.3l-.22 1.1h.98a.75.75 0 010 1.5h-1.28l-.4 2h1.18a.75.75 0 010 1.5h-1.48l-.28 1.4a.75.75 0 01-1.48-.3l.23-1.1h-2.47l-.28 1.4a.75.75 0 01-1.48-.3l.23-1.1h-.99a.75.75 0 010-1.5h1.29l.4-2H8.25a.75.75 0 010-1.5h1.49l.28-1.4c.08-.4.47-.67.88-.59zM10.57 13h2.47l.4-2h-2.47l-.4 2zM3 6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v11.5c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 17.75V6.25zM6.25 4.5c-.97 0-1.75.78-1.75 1.75v11.5c0 .97.78 1.75 1.75 1.75h11.5c.97 0 1.75-.78 1.75-1.75V6.25c0-.97-.78-1.75-1.75-1.75H6.25z" fill={primaryFill} /></svg>;
}

const NumberSymbolSquare24Regular = wrapIcon(rawSvg({}), 'NumberSymbolSquare24Regular');
export default NumberSymbolSquare24Regular;
      