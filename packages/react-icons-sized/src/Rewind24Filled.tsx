import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 4.75v14c0 .62-.72.98-1.21.6l-7.29-5.68v5.08c0 .62-.72.98-1.21.6l-9-7a.75.75 0 010-1.2l9-7a.75.75 0 011.21.6v5.08l7.3-5.67a.75.75 0 011.2.59z" fill={primaryFill} /></svg>;
}

const Rewind24Filled = wrapIcon(rawSvg({}), 'Rewind24Filled');
export default Rewind24Filled;
      