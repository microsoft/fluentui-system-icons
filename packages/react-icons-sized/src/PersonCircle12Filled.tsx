import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 6A5 5 0 111 6a5 5 0 0110 0zm-6.78.26a.84.84 0 00-.22.55v.16c0 .82.82 1.53 2 1.53 1.18 0 2-.71 2-1.53v-.16c0-.2-.09-.4-.22-.55A.75.75 0 007.22 6H4.79a.75.75 0 00-.56.26zM6 5a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /></svg>;
}

const PersonCircle12Filled = wrapIcon(rawSvg({}), 'PersonCircle12Filled');
export default PersonCircle12Filled;
      