import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 3h.75v4.75c0 .4-.1.81-.3 1.18l-2.6 4.86A1.5 1.5 0 003.67 16h5.8c.11-.36.29-.7.52-1H3.67a.5.5 0 01-.44-.74L4.7 11.5h6.58l.75 1.4.74-.74-1.73-3.23a2.5 2.5 0 01-.3-1.18V3h.75a.5.5 0 000-1h-7a.5.5 0 000 1zm1.75 4.75V3h3.5v4.75c0 .57.14 1.14.41 1.65l.6 1.1H5.24l.59-1.1c.27-.5.41-1.08.41-1.65zm4.73 7.63l4.83-4.83a1.87 1.87 0 112.64 2.64l-4.83 4.83a2.2 2.2 0 01-1.02.58l-1.5.37a.89.89 0 01-1.07-1.07l.37-1.5c.1-.39.3-.74.58-1.02z" fill={primaryFill} /></svg>;
}

const BeakerEditRegular = wrapIcon(rawSvg({}), 'BeakerEditRegular');
export default BeakerEditRegular;
      