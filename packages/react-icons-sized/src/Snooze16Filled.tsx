import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 7.5h2.5c.57 0 .92.61.67 1.1l-.06.09L5.46 11H6.5a.75.75 0 01.1 1.5H4a.75.75 0 01-.67-1.1l.06-.09L5.04 9H4a.75.75 0 01-.1-1.5h2.6H4zm5-5h3.5c.56 0 .9.58.68 1.06l-.05.1L10.37 8h2.13a.75.75 0 01.1 1.5H9a.75.75 0 01-.68-1.06l.05-.1L11.13 4H9a.75.75 0 01-.1-1.5h3.6H9z" fill={primaryFill} /></svg>;
}

const Snooze16Filled = wrapIcon(rawSvg({}), 'Snooze16Filled');
export default Snooze16Filled;
      