import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.61 8.32l-3.93-3.94-8.04 8.04-.12.13a2 2 0 00-.4.76l-1.1 4.06-.02.08a.5.5 0 00.63.53l4.06-1.1.16-.06a2 2 0 00.73-.46l1.44-1.44a5.5 5.5 0 015.9-5.9l.7-.7zm1.57-5.5a2.78 2.78 0 00-3.93 0l-.87.86 3.94 3.93.86-.86.13-.14c.96-1.09.91-2.75-.13-3.8zM19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-5.4-2.6a.5.5 0 00-.7 0l-1.75 1.75a.5.5 0 000 .7l1.75 1.75a.5.5 0 00.7-.7l-.9-.9h1.55c.97 0 1.75.78 1.75 1.75v.25a.5.5 0 001 0v-.25a2.75 2.75 0 00-2.75-2.75h-1.54l.9-.9a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
}

const EditArrowBack20Filled = wrapIcon(rawSvg({}), 'EditArrowBack20Filled');
export default EditArrowBack20Filled;
      