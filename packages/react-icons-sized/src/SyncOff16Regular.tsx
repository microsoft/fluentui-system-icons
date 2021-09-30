import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 8A6 6 0 112 8a6 6 0 0112 0zm-1 0H9.94l-.97 2.67a.5.5 0 11-.94-.34l2-5.5a.5.5 0 01.94.34L10.3 7h2.6a5 5 0 00-9.8 0h3.14l.79-2.17a.5.5 0 01.94.34l-2 5.5a.5.5 0 11-.94-.34L5.88 8H3a5 5 0 0010 0z" fill={primaryFill} /></svg>;
}

const SyncOff16Regular = wrapIcon(rawSvg({}), 'SyncOff16Regular');
export default SyncOff16Regular;
      