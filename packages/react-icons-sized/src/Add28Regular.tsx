import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 13V3.75a.75.75 0 00-1.5 0V13H3.75a.75.75 0 000 1.5H13v9.25a.75.75 0 001.5 0V14.5h9.25a.75.75 0 000-1.5H14.5z" fill={primaryFill} /></svg>;
}

const Add28Regular = wrapIcon(rawSvg({}), 'Add28Regular');
export default Add28Regular;
      