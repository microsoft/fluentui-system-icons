import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 6.75c0-.41.34-.75.75-.75h2.5a.75.75 0 010 1.5h-.69l1.72 1.72a.75.75 0 11-1.06 1.06L7.5 8.56v.7a.75.75 0 11-1.5 0V6.74z" fill={primaryFill} /><path d="M17.25 18a.75.75 0 00.75-.75v-2.5a.75.75 0 00-1.5 0v.69l-1.72-1.72a.75.75 0 00-1.06 1.06l1.72 1.72h-.69a.75.75 0 000 1.5h2.5z" fill={primaryFill} /><path d="M17.78 6.22c.14.14.22.33.22.53v2.5a.75.75 0 01-1.5 0v-.69l-1.72 1.72a.75.75 0 11-1.06-1.06l1.72-1.72h-.7a.75.75 0 010-1.5h2.51c.2 0 .39.08.53.22z" fill={primaryFill} /><path d="M6 17.25a.75.75 0 00.75.75h2.5a.75.75 0 000-1.5h-.69l1.72-1.72a.75.75 0 00-1.06-1.06L7.5 15.44v-.69a.75.75 0 00-1.5 0v2.5z" fill={primaryFill} /><path d="M3 5.25C3 4.01 4 3 5.25 3h13.5C19.99 3 21 4 21 5.25v13.5c0 1.24-1 2.25-2.25 2.25H5.25C4.01 21 3 20 3 18.75V5.25zm2.25-.75a.75.75 0 00-.75.75v13.5c0 .41.34.75.75.75h13.5c.41 0 .75-.34.75-.75V5.25a.75.75 0 00-.75-.75H5.25z" fill={primaryFill} /></svg>;
}

const ScaleFill24Regular = wrapIcon(rawSvg({}), 'ScaleFill24Regular');
export default ScaleFill24Regular;
      