import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 6A6 6 0 110 6a6 6 0 0112 0zm-1.5 0c0-.97-.3-1.87-.83-2.6L3.39 9.66A4.5 4.5 0 0010.5 6zM8.6 2.33a4.5 4.5 0 00-6.28 6.28l6.29-6.28z" fill={primaryFill} /></svg>;
}

const PresenceBlocked12Regular = wrapIcon(rawSvg({}), 'PresenceBlocked12Regular');
export default PresenceBlocked12Regular;
      