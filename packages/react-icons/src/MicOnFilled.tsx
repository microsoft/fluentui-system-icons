import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 10a.5.5 0 00-1 0 5.5 5.5 0 005 5.48v2.02a.5.5 0 001 0v-2.02c2.8-.26 5-2.61 5-5.48a.5.5 0 00-1 0 4.5 4.5 0 11-9 0z" fill={primaryFill} /><path d="M13 10a3 3 0 01-6 0V5a3 3 0 016 0v5z" fill={primaryFill} /></svg>;
}

const MicOnFilled = wrapIcon(rawSvg({}), 'MicOnFilled');
export default MicOnFilled;
      