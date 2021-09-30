import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.28 16.22a.75.75 0 01-1.06 1.06l-5-5a.75.75 0 010-1.06l5-5a.75.75 0 011.06 1.06L5.56 11h7.84c1.6 0 2.81.24 3.89.76l.24.13a6.2 6.2 0 012.58 2.58A8.4 8.4 0 0121 18.6a.75.75 0 01-1.5 0c0-1.48-.23-2.52-.71-3.43a4.7 4.7 0 00-1.96-1.96 6.63 6.63 0 00-3.1-.7l-.33-.01H5.56l3.72 3.72z" fill={primaryFill} /></svg>;
}

const ArrowReply24Regular = wrapIcon(rawSvg({}), 'ArrowReply24Regular');
export default ArrowReply24Regular;
      