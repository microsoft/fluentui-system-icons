import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M29.73 5.31a1 1 0 01-.04 1.42l-19 18a1 1 0 01-1.42-.05l-7-7.5a1 1 0 111.46-1.36l6.31 6.76 18.27-17.3a1 1 0 011.42.03z" fill={primaryFill} /></svg>;
}

const Checkmark32Regular = wrapIcon(rawSvg({}), 'Checkmark32Regular');
export default Checkmark32Regular;
      