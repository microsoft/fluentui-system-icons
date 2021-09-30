import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.03 3.03a.75.75 0 00-1.06-1.06L12.5 3.44l-.47-.47a.75.75 0 10-1.06 1.06l1 1c.3.3.77.3 1.06 0l2-2zm-2 11l2-2a.75.75 0 10-1.06-1.06l-1.47 1.47-.47-.47a.75.75 0 10-1.06 1.06l1 1c.3.3.77.3 1.06 0zM1.75 3a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5zm0 4.25a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5zm0 4.25a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5z" fill={primaryFill} /></svg>;
}

const MultiselectRtl16Filled = wrapIcon(rawSvg({}), 'MultiselectRtl16Filled');
export default MultiselectRtl16Filled;
      