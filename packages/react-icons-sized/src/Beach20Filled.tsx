import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.39 2.7a5.21 5.21 0 00-7.13 1.9l-.2.35a.5.5 0 00.19.68l3.83 2.21-2.1 3.68a2.2 2.2 0 01-5.28 2.73 1.5 1.5 0 011.49 1.03c.35 1.05 1.58.98 1.9.07a1.5 1.5 0 012.83 0c.31.9 1.54.98 1.9-.07a1.5 1.5 0 011.51-1.03 6.32 6.32 0 00-3.31-2.52l1.93-3.39 3.47 2a.5.5 0 00.68-.18l.2-.34a5.21 5.21 0 00-1.91-7.12zM5.24 15.6a.5.5 0 00-.96.03c-.17.7-.5 1.08-.86 1.3-.38.23-.87.32-1.42.32a.5.5 0 000 1c.64 0 1.33-.1 1.94-.47.34-.2.64-.5.88-.87a2.96 2.96 0 004.68-.01 2.96 2.96 0 004.74-.06c.64.9 1.7 1.41 2.76 1.41a.5.5 0 000-1c-.98 0-1.96-.64-2.29-1.65a.5.5 0 00-.95 0 1.98 1.98 0 01-3.79.07.5.5 0 00-.94 0 1.98 1.98 0 01-3.8-.08z" fill={primaryFill} /></svg>;
}

const Beach20Filled = wrapIcon(rawSvg({}), 'Beach20Filled');
export default Beach20Filled;
      