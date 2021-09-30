import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.27 3.06L9.29 4.1l-5.2 5.2-1.03-1.02a2.5 2.5 0 010-3.54l1.67-1.67a2.5 2.5 0 013.54 0zm3.46 13.88l-1.02-1.03 5.2-5.2 1.03 1.02a2.5 2.5 0 010 3.54l-1.67 1.67a2.5 2.5 0 01-3.54 0zm-8.67-5.2a2.5 2.5 0 000 3.53l1.67 1.67a2.5 2.5 0 003.54 0l8.67-8.67a2.5 2.5 0 000-3.54l-1.67-1.67a2.5 2.5 0 00-3.54 0l-8.67 8.67zM10 8.5a.5.5 0 110-1 .5.5 0 010 1zm0 2a.5.5 0 110-1 .5.5 0 010 1zM8.5 10a.5.5 0 11-1 0 .5.5 0 011 0zm3.5.5a.5.5 0 110-1 .5.5 0 010 1zM10.5 12a.5.5 0 11-1 0 .5.5 0 011 0z" fill={primaryFill} /></svg>;
}

const Patch20Filled = wrapIcon(rawSvg({}), 'Patch20Filled');
export default Patch20Filled;
      