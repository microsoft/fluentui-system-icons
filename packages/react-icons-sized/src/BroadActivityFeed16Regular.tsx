import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M1 3.5C1 2.67 1.67 2 2.5 2h11c.83 0 1.5.67 1.5 1.5v3c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 011 6.5v-3zM2.5 3a.5.5 0 00-.5.5v3c0 .28.22.5.5.5h11a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-11zM1 11.5c0-.83.67-1.5 1.5-1.5h3c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 011 12.5v-1zm1.5-.5a.5.5 0 00-.5.5v1c0 .28.22.5.5.5h3a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-3zm8-1c-.83 0-1.5.67-1.5 1.5v1c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-3zm-.5 1.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v1a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-1z" fill={primaryFill} /></svg>;
}

const BroadActivityFeed16Regular = wrapIcon(rawSvg({}), 'BroadActivityFeed16Regular');
export default BroadActivityFeed16Regular;
      