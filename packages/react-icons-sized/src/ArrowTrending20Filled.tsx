import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.94 5.46a.75.75 0 00-.7-.46h-5.49a.75.75 0 000 1.5h3.69l-4.94 4.94-1.97-1.97a.75.75 0 00-1.06 0l-5.25 5.25a.75.75 0 101.06 1.06L8 11.06l1.97 1.97c.3.3.77.3 1.06 0l5.47-5.47v3.69a.75.75 0 001.5 0v-5.5c0-.1-.02-.2-.06-.29z" fill={primaryFill} /></svg>;
}

const ArrowTrending20Filled = wrapIcon(rawSvg({}), 'ArrowTrending20Filled');
export default ArrowTrending20Filled;
      