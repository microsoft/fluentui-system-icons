import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8 2a6 6 0 110 12A6 6 0 018 2zM6.53 5.84a.5.5 0 00-.63.06l-.06.07a.5.5 0 00.06.63L7.3 8 5.9 9.4l-.06.07a.5.5 0 00.06.63l.07.06c.2.14.46.12.63-.06L8 8.7l1.4 1.4.07.06c.2.14.46.12.63-.06l.06-.07a.5.5 0 00-.06-.63L8.7 8l1.4-1.4.06-.07a.5.5 0 00-.06-.63l-.07-.06a.5.5 0 00-.63.06L8 7.3 6.6 5.9l-.07-.06z" fill={primaryFill} /></svg>;
}

const DismissCircle16Filled = wrapIcon(rawSvg({}), 'DismissCircle16Filled');
export default DismissCircle16Filled;
      