import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 2a12 12 0 110 24 12 12 0 010-24zm7.94 5.12L7.12 21.94A10.5 10.5 0 0021.93 7.13zM14 3.5a10.5 10.5 0 00-7.94 17.38L20.88 6.06A10.46 10.46 0 0014 3.5z" fill={primaryFill} /></svg>;
}

const Prohibited28Regular = wrapIcon(rawSvg({}), 'Prohibited28Regular');
export default Prohibited28Regular;
      