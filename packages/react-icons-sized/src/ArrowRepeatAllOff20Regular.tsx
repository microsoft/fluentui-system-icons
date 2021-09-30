import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.15 2.15a.5.5 0 01.63-.06l.07.06 15 15 .06.07a.5.5 0 01-.7.7l-.06-.07-3-2.98a5 5 0 01-.85.12L13 15H6.7l1.65 1.65c.18.17.2.44.06.63l-.06.07a.5.5 0 01-.63.06l-.07-.06-2.5-2.5a.5.5 0 01-.06-.63l.06-.07 2.5-2.5a.5.5 0 01.76.63l-.06.07L6.72 14h.14L7 14h6l.28-.01-7.72-7.72a4 4 0 00-1.66 6.25c.06.09.1.2.1.31a.5.5 0 01-.9.3A4.99 4.99 0 014.8 5.5L2.15 2.85l-.06-.07a.5.5 0 01.06-.63zM16.5 6.67a.5.5 0 01.3.1l.08.07.01.02a4.98 4.98 0 01-.83 7.1l-.71-.72a4 4 0 00.76-5.76.5.5 0 01.39-.81zM12.28 2.6l.07.06 2.5 2.5c.18.17.2.44.06.63l-.06.07-2.5 2.5a.5.5 0 01-.76-.63l.06-.07L13.28 6h-.14L13 6H8.1l-1-1h6.2l-1.65-1.65a.5.5 0 01-.06-.63l.06-.07a.5.5 0 01.63-.06z" fill={primaryFill} /></svg>;
}

const ArrowRepeatAllOff20Regular = wrapIcon(rawSvg({}), 'ArrowRepeatAllOff20Regular');
export default ArrowRepeatAllOff20Regular;
      