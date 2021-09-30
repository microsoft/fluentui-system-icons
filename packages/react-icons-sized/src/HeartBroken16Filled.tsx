import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.35 3.77a3.25 3.25 0 00-4.4 4.76l4.72 4.7c.19.2.5.2.7 0l4.69-4.67a3.25 3.25 0 00-4.61-4.6l-.04.02L7.16 5.9l2.16 1.83a.5.5 0 01.03.73l-1.5 1.5a.5.5 0 01-.7-.7l1.11-1.12-2.08-1.76a.5.5 0 01-.1-.65l1.27-1.96z" fill={primaryFill} /></svg>;
}

const HeartBroken16Filled = wrapIcon(rawSvg({}), 'HeartBroken16Filled');
export default HeartBroken16Filled;
      