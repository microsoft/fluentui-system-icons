import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5c0-1.1.9-2 2-2h1v3.5C6 7.33 6.67 8 7.5 8h4c.83 0 1.5-.67 1.5-1.5V3h.38a2 2 0 011.41.59l1.62 1.62A2 2 0 0117 6.62V9.6a5.48 5.48 0 00-5.66.4H6.5c-.83 0-1.5.67-1.5 1.5V17a2 2 0 01-2-2V5zm6 9.5c0-1.33.47-2.55 1.26-3.5H6.5a.5.5 0 00-.5.5V17h3.6c-.38-.75-.6-1.6-.6-2.5zM12 3H7v3.5c0 .28.22.5.5.5h4a.5.5 0 00.5-.5V3zm7 11.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15.35a.5.5 0 00.15-.35.5.5 0 00-.15-.35l-2-2a.5.5 0 00-.7.7L15.29 14H12.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7l2-2z" fill={primaryFill} /></svg>;
}

const SaveArrowRight20Filled = wrapIcon(rawSvg({}), 'SaveArrowRight20Filled');
export default SaveArrowRight20Filled;
      