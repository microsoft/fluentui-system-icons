import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 5.1c0-.55.3-1.06.84-1.46C6.39 3.25 7.19 3 8.1 3c1.3 0 2.38.56 2.76 1.24a.5.5 0 00.88-.48C11.12 2.64 9.6 2 8.1 2c-1.09 0-2.1.3-2.84.83A2.78 2.78 0 004 5.1c0 .72.3 1.37.79 1.9H6.5C5.55 6.6 5 5.83 5 5.1zM13.5 8a.5.5 0 010 1h-2.34c.52.5.84 1.15.84 1.9 0 .9-.51 1.69-1.26 2.23C10 13.67 9 14 7.9 14c-1.62 0-3-.65-3.72-1.72a.5.5 0 01.84-.56C5.5 12.45 6.52 13 7.9 13c.9 0 1.7-.27 2.25-.68.56-.4.85-.92.85-1.42 0-.78-.63-1.53-1.78-1.9H2.5a.5.5 0 010-1h11z" fill={primaryFill} /></svg>;
}

const TextStrikethrough16Regular = wrapIcon(rawSvg({}), 'TextStrikethrough16Regular');
export default TextStrikethrough16Regular;
      