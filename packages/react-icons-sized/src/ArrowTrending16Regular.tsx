import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.5 4h5.04l.09.02.06.02.06.03.06.04.06.05.04.05.04.06.03.08.01.04.01.09V9.5a.5.5 0 01-.99.09V5.7l-5.15 5.15a.5.5 0 01-.64.06l-.07-.06L5.5 9.21l-2.65 2.64a.5.5 0 01-.76-.63l.06-.07 3-3a.5.5 0 01.63-.06l.07.06L7.5 9.79 12.3 5H8.5a.5.5 0 01-.5-.41V4.5c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const ArrowTrending16Regular = wrapIcon(rawSvg({}), 'ArrowTrending16Regular');
export default ArrowTrending16Regular;
      