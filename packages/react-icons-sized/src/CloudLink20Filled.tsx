import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.65 8.25C14.4 5.92 12.82 4 10 4 7.18 4 5.59 5.9 5.35 8.25h-.07A3.33 3.33 0 002 11.62 3.33 3.33 0 005.28 15h3.76a3.5 3.5 0 013.46-4h4c.53 0 1.04.12 1.49.33a3.32 3.32 0 00-3.27-3.08h-.07zM12.5 12a2.5 2.5 0 000 5h.5a.5.5 0 000-1h-.5a1.5 1.5 0 010-3h.5a.5.5 0 000-1h-.5zm3.5 0a.5.5 0 000 1h.5a1.5 1.5 0 010 3H16a.5.5 0 000 1h.5a2.5 2.5 0 000-5H16zm-3.5 2a.5.5 0 000 1h4a.5.5 0 000-1h-4z" fill={primaryFill} /></svg>;
}

const CloudLink20Filled = wrapIcon(rawSvg({}), 'CloudLink20Filled');
export default CloudLink20Filled;
      