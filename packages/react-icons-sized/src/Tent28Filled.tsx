import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.6 3.21a.75.75 0 00-1.15 0c-1.8 2.16-5.34 4.71-7.37 5.85a.75.75 0 00-.38.55L4.06 21.5H2.75a.75.75 0 000 1.5h22.5a.75.75 0 000-1.5h-1.26L22.35 9.61a.75.75 0 00-.38-.55c-2.03-1.14-5.57-3.7-7.37-5.85zM10.27 21.5A28.31 28.31 0 0014 13.6a29.27 29.27 0 003.73 7.9h-7.46z" fill={primaryFill} /></svg>;
}

const Tent28Filled = wrapIcon(rawSvg({}), 'Tent28Filled');
export default Tent28Filled;
      