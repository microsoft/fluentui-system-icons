import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 2c.3 0 .59.2.7.48l2.27 5.94.05.13.03.1-.79 2.12-.49-1.27H4.22l-.77 2.02a.75.75 0 01-1.4-.53l3.25-8.5A.75.75 0 016 2zM4.8 8h2.4L6 4.85 4.8 8z" fill={primaryFill} /><path d="M12.7 5.49a.75.75 0 00-1.4 0L7.2 16.5h-.45a.75.75 0 000 1.5h2.5a.75.75 0 100-1.5H8.8l.75-2h4.92l.75 2h-.46a.75.75 0 000 1.5h2.5a.75.75 0 000-1.5h-.44L12.7 5.49zm1.2 7.5h-3.8L12 7.9l1.9 5.1z" fill={primaryFill} /></svg>;
}

const TextFont20Filled = wrapIcon(rawSvg({}), 'TextFont20Filled');
export default TextFont20Filled;
      