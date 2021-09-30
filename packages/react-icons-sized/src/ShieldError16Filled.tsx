import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.54 1.75l-.4.3A9.27 9.27 0 012.55 3.5l-.04-.01A.5.5 0 002 4v2.76a7.5 7.5 0 003.69 6.45l2.06 1.22c.15.1.35.1.5 0l2.07-1.22A7.5 7.5 0 0014 6.76V4a.5.5 0 00-.5-.5h-.06a4.97 4.97 0 01-.8-.06 8.98 8.98 0 01-4.29-1.8.5.5 0 00-.7 0l-.11.1zM8 5c.28 0 .5.22.5.5v3a.5.5 0 01-1 0v-3c0-.28.22-.5.5-.5zm.75 5.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" fill={primaryFill} /></svg>;
}

const ShieldError16Filled = wrapIcon(rawSvg({}), 'ShieldError16Filled');
export default ShieldError16Filled;
      