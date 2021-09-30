import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 23.25c0-.69.56-1.25 1.25-1.25h33.5a1.25 1.25 0 110 2.5H7.25c-.69 0-1.25-.56-1.25-1.25z" fill={primaryFill} /></svg>;
}

const Subtract48Regular = wrapIcon(rawSvg({}), 'Subtract48Regular');
export default Subtract48Regular;
      