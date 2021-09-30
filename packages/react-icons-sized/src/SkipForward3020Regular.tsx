import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.5 3c.28 0 .5.22.5.5v4a.5.5 0 01-.5.5h-4a.5.5 0 010-1h3.25a7 7 0 00-12.01.89.5.5 0 01-.9-.44A8 8 0 0116 5.7V3.5c0-.28.22-.5.5-.5zm-3 7c-.93 0-1.6.44-2 1.13-.37.65-.5 1.5-.5 2.37 0 .86.13 1.72.5 2.37.4.7 1.07 1.13 2 1.13.94 0 1.6-.44 2-1.13.38-.65.5-1.5.5-2.37 0-.86-.12-1.72-.5-2.37a2.18 2.18 0 00-2-1.13zM12 13.5c0-.8.13-1.44.37-1.87.23-.4.57-.63 1.13-.63.57 0 .9.23 1.13.63.25.43.37 1.08.37 1.87 0 .8-.12 1.44-.37 1.87-.22.4-.56.63-1.13.63-.56 0-.9-.23-1.13-.63A3.87 3.87 0 0112 13.5zm-6.85-1.9c.2.2.5.2.7 0a.73.73 0 01.1-.07A2.56 2.56 0 017.5 11c.59 0 .97.16 1.2.35.21.19.3.42.3.64-.02.4-.4 1.01-1.51 1.01a.5.5 0 000 1c1.1 0 1.5.6 1.5 1.01a.8.8 0 01-.3.64c-.22.19-.6.35-1.2.35a2.56 2.56 0 01-1.65-.6.5.5 0 00-.7 0c-.34.33 0 .7 0 .7a3.34 3.34 0 00.18.16A3.56 3.56 0 007.5 17c.78 0 1.4-.21 1.85-.59.44-.37.67-.9.65-1.42a1.89 1.89 0 00-.8-1.49c.5-.37.79-.9.8-1.49a1.8 1.8 0 00-.65-1.42A2.8 2.8 0 007.5 10a3.56 3.56 0 00-2.34.88v.01h-.01a.5.5 0 000 .71zm.7 3.8z" fill={primaryFill} /></svg>;
}

const SkipForward3020Regular = wrapIcon(rawSvg({}), 'SkipForward3020Regular');
export default SkipForward3020Regular;
      