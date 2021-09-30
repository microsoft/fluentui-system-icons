import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.53 4.03A6.15 6.15 0 0110 3a6.16 6.16 0 014.9 2.2.5.5 0 01-.8.6A5.17 5.17 0 0010 4c-1.15 0-2.18.35-2.9.85C6.36 5.35 6 5.98 6 6.5c0 .9.43 1.48 1.17 1.93.36.22.78.4 1.25.57H6.23A3.02 3.02 0 015 6.5c0-.98.64-1.86 1.53-2.47zM16.5 10a.5.5 0 010 1h-2.73A3.02 3.02 0 0115 13.5c0 1.23-.72 2.12-1.68 2.68-.94.56-2.16.82-3.32.82a7.27 7.27 0 01-2.9-.48 4.55 4.55 0 01-2.02-1.74.5.5 0 01.84-.56c.45.68.96 1.11 1.58 1.38.64.28 1.44.4 2.5.4 1.03 0 2.06-.24 2.82-.68.74-.44 1.18-1.05 1.18-1.82 0-.9-.43-1.48-1.17-1.93-.36-.22-.78-.4-1.25-.57H3.5a.5.5 0 010-1h13z" fill={primaryFill} /></svg>;
}

const TextStrikethroughS20Regular = wrapIcon(rawSvg({}), 'TextStrikethroughS20Regular');
export default TextStrikethroughS20Regular;
      