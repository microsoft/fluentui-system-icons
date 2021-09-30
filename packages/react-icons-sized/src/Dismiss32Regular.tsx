import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.25 4.27a1 1 0 011.42 0L16 14.61 26.33 4.27a1 1 0 111.42 1.42L17.4 16.02l10.3 10.3a1 1 0 11-1.41 1.4L16 17.44 5.7 27.73a1 1 0 01-1.4-1.42l10.29-10.3L4.25 5.7a1 1 0 010-1.42z" fill={primaryFill} /></svg>;
}

const Dismiss32Regular = wrapIcon(rawSvg({}), 'Dismiss32Regular');
export default Dismiss32Regular;
      