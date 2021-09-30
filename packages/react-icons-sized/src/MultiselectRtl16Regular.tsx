import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.85 2.85a.5.5 0 00-.7-.7L12.5 3.79l-.65-.64a.5.5 0 00-.7.7l1 1c.2.2.5.2.7 0l2-2zm0 9a.5.5 0 00-.7-.7l-1.65 1.64-.65-.64a.5.5 0 00-.7.7l1 1c.2.2.5.2.7 0l2-2zM1.5 3a.5.5 0 000 1h8a.5.5 0 000-1h-8zm0 4.5a.5.5 0 000 1h8a.5.5 0 000-1h-8zm0 4.5a.5.5 0 000 1h8a.5.5 0 000-1h-8z" fill={primaryFill} /></svg>;
}

const MultiselectRtl16Regular = wrapIcon(rawSvg({}), 'MultiselectRtl16Regular');
export default MultiselectRtl16Regular;
      