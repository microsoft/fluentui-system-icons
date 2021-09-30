import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.37 3.31l.86 2.03c.37.88.16 1.92-.52 2.57l-1.9 1.8a8.68 8.68 0 003.36 5.77l2.28-.76c.86-.29 1.8.04 2.33.82l1.23 1.81c.62.9.5 2.15-.26 2.92l-.81.82a3.02 3.02 0 01-3.06.77c-2.53-.79-4.87-3.14-7-7.05C3.75 10.9 3 7.57 3.62 4.84a3.26 3.26 0 012.15-2.4l1.08-.34c1-.33 2.09.2 2.52 1.21zM14.75 2h2.5C19.64 2 21 3.14 21 5.25c0 2.04-1.28 3.17-3.52 3.24H15.5v2.77a.75.75 0 01-1.5.1V2.75c0-.38.28-.7.65-.74l.1-.01h2.5-2.5zm2.5 1.5H15.5V7h1.75c1.61 0 2.25-.53 2.25-1.75 0-1.17-.59-1.7-2.06-1.75h-.2z" fill={primaryFill} /></svg>;
}

const CallPark24Filled = wrapIcon(rawSvg({}), 'CallPark24Filled');
export default CallPark24Filled;
      