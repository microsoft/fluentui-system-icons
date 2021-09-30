import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.55 2.44a4.1 4.1 0 012.99-.32c.5.12.94.45 1.2.9l.9 1.57a2.5 2.5 0 01-.84 3.36l-.79.5c-.32.2-.44.52-.37.77.27.9.86 1.9 1.52 2.58.19.2.54.25.9.05l.43-.26a2.5 2.5 0 013.44.94l.8 1.44c.27.47.31 1.03.12 1.53a3.9 3.9 0 01-1.96 2.22c-.9.41-1.94.4-2.88-.24-1.5-1-3.3-2.68-4.94-5.48a13.27 13.27 0 01-2.03-7.06 2.87 2.87 0 011.51-2.5zM13 2.5a.5.5 0 00-1 0v6a.5.5 0 001 0v-6zm3 0a.5.5 0 00-1 0v6a.5.5 0 001 0v-6z" fill={primaryFill} /></svg>;
}

const CallPause20Filled = wrapIcon(rawSvg({}), 'CallPause20Filled');
export default CallPause20Filled;
      