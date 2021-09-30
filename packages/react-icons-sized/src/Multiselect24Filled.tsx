import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.7 3.3a1 1 0 00-1.4 0L4 4.58l-.3-.3a1 1 0 00-1.4 1.42l1 1a1 1 0 001.4 0l2-2a1 1 0 000-1.42zM10 17h11a1 1 0 01.12 1.99H10A1 1 0 019.88 17H10zm0-6h11a1 1 0 01.12 2H10a1 1 0 01-.12-2H10zm0-6h11a1 1 0 01.12 2H10a1 1 0 01-.12-2H10zM5.3 16.3a1 1 0 011.4 1.4l-2 2a1 1 0 01-1.4 0l-1-1a1 1 0 111.4-1.4l.3.29 1.3-1.3z" fill={primaryFill} /></svg>;
}

const Multiselect24Filled = wrapIcon(rawSvg({}), 'Multiselect24Filled');
export default Multiselect24Filled;
      