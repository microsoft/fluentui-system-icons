import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.5 6a.5.5 0 00-.5.5v3c0 .28.22.5.5.5h5a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-5zM8 9V7h4v2H8zm0 3.5c0-.28.22-.5.5-.5h3a.5.5 0 010 1h-3a.5.5 0 01-.5-.5zm0-11a.5.5 0 00-1 0V3H5.5C4.67 3 4 3.67 4 4.5v7c0 .1.03.2.08.28L6 14.65v1.85c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-1.85l1.92-2.87a.5.5 0 00.08-.28v-7c0-.83-.67-1.5-1.5-1.5H8V1.5zM5.5 4h9c.28 0 .5.22.5.5v6.85l-1.92 2.87a.5.5 0 00-.08.28v2a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5v-2a.5.5 0 00-.08-.28L5 11.35V4.5c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const WalkieTalkieRegular = wrapIcon(rawSvg({}), 'WalkieTalkieRegular');
export default WalkieTalkieRegular;
      