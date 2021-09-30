import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2a6 6 0 110 12A6 6 0 018 2zm1.5 4h-.09a.5.5 0 00-.4.4V8.3L6.84 6.14l-.06-.06a.5.5 0 00-.57 0l-.07.06-.06.06a.5.5 0 000 .57l.06.07L8.29 9H6.41a.5.5 0 000 1h3.15l.05-.01.06-.02.04-.02.08-.04.06-.06.05-.05.03-.05.02-.04.03-.06.01-.04.01-.09V6.4a.5.5 0 00-.4-.4H9.4h.1z" fill={primaryFill} /></svg>;
}

const ArrowCircleDownRight16Filled = wrapIcon(rawSvg({}), 'ArrowCircleDownRight16Filled');
export default ArrowCircleDownRight16Filled;
      