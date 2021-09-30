import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 5a19 19 0 110 38 19 19 0 010-38zm-1.25 7c-.69 0-1.25.56-1.25 1.25v12c0 .69.56 1.25 1.25 1.25h8a1.25 1.25 0 100-2.5H24V13.25c0-.69-.56-1.25-1.25-1.25z" fill={primaryFill} /></svg>;
}

const Clock48Filled = wrapIcon(rawSvg({}), 'Clock48Filled');
export default Clock48Filled;
      