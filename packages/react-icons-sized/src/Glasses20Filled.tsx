import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.19 4a2 2 0 00-1.52.7L2.37 8.5A1.5 1.5 0 002 9.5v3A2.5 2.5 0 004.5 15h2A2.5 2.5 0 009 12.5V11h2v1.5a2.5 2.5 0 002.5 2.5h2a2.5 2.5 0 002.5-2.5v-3c0-.43-.18-.82-.47-1.09l-3.2-3.72A2 2 0 0012.8 4H12a.5.5 0 100 1h.81a1 1 0 01.76.35L15.86 8H12.5c-.83 0-1.5.67-1.5 1.5v.5H9v-.5C9 8.67 8.33 8 7.5 8H4.14l2.29-2.65A1 1 0 017.19 5H8a.5.5 0 000-1h-.81z" fill={primaryFill} /></svg>;
}

const Glasses20Filled = wrapIcon(rawSvg({}), 'Glasses20Filled');
export default Glasses20Filled;
      