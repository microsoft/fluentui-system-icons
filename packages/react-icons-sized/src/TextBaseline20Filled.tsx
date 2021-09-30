import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.7 3.47a.75.75 0 00-1.4 0l-3.75 9.5a.75.75 0 001.4.56l1.2-3.03h3.7l1.2 3.03a.75.75 0 001.4-.56l-3.75-9.5zM11.27 9H8.73L10 5.8 11.27 9zM2.5 16a.5.5 0 000 1h15a.5.5 0 000-1h-15z" fill={primaryFill} /></svg>;
}

const TextBaseline20Filled = wrapIcon(rawSvg({}), 'TextBaseline20Filled');
export default TextBaseline20Filled;
      