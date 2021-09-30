import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23.25 15.5h7.6A13.5 13.5 0 1015.5 30.85v-7.6a7.75 7.75 0 017.75-7.75zm0 2.5A5.25 5.25 0 0018 23.25v15.5c0 2.9 2.35 5.25 5.25 5.25h15.5c2.9 0 5.25-2.35 5.25-5.25v-15.5c0-2.9-2.35-5.25-5.25-5.25h-15.5z" fill={primaryFill} /></svg>;
}

const Shapes48Filled = wrapIcon(rawSvg({}), 'Shapes48Filled');
export default Shapes48Filled;
      