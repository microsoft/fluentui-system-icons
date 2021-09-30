import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 15.24v6c0 .61-.68.97-1.18.62L12 19.17l-3.82 2.69A.75.75 0 017 21.25v-6a7.97 7.97 0 0010 0zM12 2a7 7 0 110 14 7 7 0 010-14z" fill={primaryFill} /></svg>;
}

const Ribbon24Filled = wrapIcon(rawSvg({}), 'Ribbon24Filled');
export default Ribbon24Filled;
      