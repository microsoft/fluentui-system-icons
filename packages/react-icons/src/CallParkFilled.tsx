import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.55 2.44a4.1 4.1 0 012.99-.32c.5.13.94.45 1.2.9l.9 1.57a2.5 2.5 0 01-.84 3.36l-.79.5c-.32.2-.44.52-.37.77.27.9.86 1.9 1.52 2.58.19.2.54.25.9.05l.43-.26a2.5 2.5 0 013.44.94l.8 1.44c.27.47.31 1.03.12 1.53a3.9 3.9 0 01-1.96 2.22c-.9.41-1.94.4-2.88-.24-1.5-1-3.3-2.68-4.94-5.48a13.27 13.27 0 01-2.03-7.06 2.87 2.87 0 011.51-2.5z" fill={primaryFill} /><path d="M12.5 2a.5.5 0 00-.5.5v7a.5.5 0 101 0V7h1.5a2.5 2.5 0 000-5h-2zm2 4H13V3h1.5a1.5 1.5 0 010 3z" fill={primaryFill} /></svg>;
}

const CallParkFilled = wrapIcon(rawSvg({}), 'CallParkFilled');
export default CallParkFilled;
      