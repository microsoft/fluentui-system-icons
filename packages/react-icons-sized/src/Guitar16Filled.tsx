import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.91 5.84l1.61-1.6 1.25 1.24-1.61 1.6.09.1c.8.8.59 2.17-.43 2.68l-.5.24a.3.3 0 00-.15.33v.04a2.82 2.82 0 01-1.07 2.81 3.6 3.6 0 01-4.7-.33l-.35-.35a3.6 3.6 0 01-.33-4.7 2.82 2.82 0 012.8-1.08l.05.01a.3.3 0 00.33-.16l.24-.49a1.67 1.67 0 012.68-.43l.1.1zM6.3 9.71a1 1 0 101.42-1.42 1 1 0 00-1.42 1.42zm6.19-4.94l-1.25-1.25.69-.68c.18-.19.49-.19.68 0l.56.56c.19.2.19.5 0 .68l-.68.69z" fill={primaryFill} /></svg>;
}

const Guitar16Filled = wrapIcon(rawSvg({}), 'Guitar16Filled');
export default Guitar16Filled;
      