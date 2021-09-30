import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM6 10c0 .28.22.5.5.5h7a.5.5 0 000-1h-7a.5.5 0 00-.5.5z" fill={primaryFill} /></svg>;
}

const SubtractCircleFilled = wrapIcon(rawSvg({}), 'SubtractCircleFilled');
export default SubtractCircleFilled;
      