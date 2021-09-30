import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 7c.28 0 .5.22.5.5v4a.5.5 0 01-1 0v-4c0-.28.22-.5.5-.5z" fill={primaryFill} /><path d="M10 14.5a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M8.69 2.85a1.5 1.5 0 012.62 0l6.56 11.93A1.5 1.5 0 0116.56 17H3.44a1.5 1.5 0 01-1.31-2.22L8.69 2.85zm1.75.48a.5.5 0 00-.88 0L3 15.26a.5.5 0 00.44.74h13.12a.5.5 0 00.44-.74L10.44 3.33z" fill={primaryFill} /></svg>;
}

const WarningRegular = wrapIcon(rawSvg({}), 'WarningRegular');
export default WarningRegular;
      