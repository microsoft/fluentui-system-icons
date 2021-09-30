import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 11.25C6 8.35 8.35 6 11.25 6h25.5C39.65 6 42 8.35 42 11.25v25.5c0 2.9-2.35 5.25-5.25 5.25h-25.5A5.25 5.25 0 016 36.75v-25.5zm5.25-2.75a2.75 2.75 0 00-2.75 2.75v25.5a2.75 2.75 0 002.75 2.75h25.5a2.75 2.75 0 002.75-2.75v-25.5a2.75 2.75 0 00-2.75-2.75h-25.5z" fill={primaryFill} /></svg>;
}

const Maximize48Regular = wrapIcon(rawSvg({}), 'Maximize48Regular');
export default Maximize48Regular;
      