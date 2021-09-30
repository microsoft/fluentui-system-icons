import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.75 4h4a2.75 2.75 0 012.75 2.75v10.5A2.75 2.75 0 018.75 20h-4A2.75 2.75 0 012 17.25V6.75A2.75 2.75 0 014.75 4zM6 9v6a.75.75 0 001.5 0V9A.75.75 0 006 9zm9.25-5h4A2.75 2.75 0 0122 6.75v10.5A2.75 2.75 0 0119.25 20h-4a2.75 2.75 0 01-2.75-2.75V6.75A2.75 2.75 0 0115.25 4zm2.25 5.75v1.5h-1.25a.75.75 0 00-.75.75v3c0 .41.34.75.75.75h2a.75.75 0 000-1.5H17v-1.5h1.25c.41 0 .75-.34.75-.75V9a.75.75 0 00-.75-.75h-2a.75.75 0 000 1.5h1.25z" fill={primaryFill} /></svg>;
}

const NumberRow24Filled = wrapIcon(rawSvg({}), 'NumberRow24Filled');
export default NumberRow24Filled;
      