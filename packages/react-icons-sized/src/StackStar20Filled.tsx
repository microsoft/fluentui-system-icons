import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 3a2 2 0 00-2 2v6c0 1.1.9 2 2 2h8a2 2 0 002-2V5a2 2 0 00-2-2H4zm4.33 2.08l.91 1.73 1.8.22a.38.38 0 01.2.67L9.91 8.74l.45 1.93a.38.38 0 01-.56.4L8 10l-1.8 1.08a.38.38 0 01-.57-.4l.45-1.93L4.77 7.7a.38.38 0 01.19-.67l1.8-.22.9-1.73a.38.38 0 01.67 0zM4.27 14c.34.6.99 1 1.73 1h6a4 4 0 004-4V7a2 2 0 00-1-1.73V11a3 3 0 01-3 3H4.27zm2 2c.34.6.99 1 1.73 1h4a6 6 0 006-6V9a2 2 0 00-1-1.73V11a5 5 0 01-5 5H6.27z" fill={primaryFill} /></svg>;
}

const StackStar20Filled = wrapIcon(rawSvg({}), 'StackStar20Filled');
export default StackStar20Filled;
      