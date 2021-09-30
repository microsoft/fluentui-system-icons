import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.04 2.49l6.6 2.83L8 6.46 1.43 3.64c.14-.15.33-.27.53-.35l2.08-.8zm1.33-.52l1.55-.6a3 3 0 012.16 0l4.96 1.92c.2.08.39.2.53.35l-2.65 1.14-6.55-2.8zM15 4.55L8.5 7.33v7.45a3 3 0 00.58-.16l4.96-1.9c.58-.23.96-.79.96-1.4V4.68v-.14zM7.5 14.78V7.33L1 4.55v6.76c0 .62.38 1.18.96 1.4l4.96 1.91a3 3 0 00.58.16z" fill={primaryFill} /></svg>;
}

const Box16Filled = wrapIcon(rawSvg({}), 'Box16Filled');
export default Box16Filled;
      