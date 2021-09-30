import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.18 2.82a2.78 2.78 0 00-3.93 0l-9.61 9.6-.12.13a2 2 0 00-.4.76l-1.1 4.06-.02.08a.5.5 0 00.63.53l4.06-1.1.16-.06a2 2 0 00.73-.46l1.44-1.44a5.58 5.58 0 01.09-1.5l-2.24 2.23-.1.09-.1.07a1 1 0 01-.25.1l-3.2.87.87-3.2.04-.13a1 1 0 01.22-.32l8.04-8.04 2.52 2.52-1.5 1.5a5.53 5.53 0 011.5-.1l2.27-2.26.13-.14c.96-1.09.91-2.75-.13-3.8zm-3.1.6c.7-.59 1.74-.55 2.4.1l.1.12c.59.7.55 1.75-.1 2.4l-.87.87-2.52-2.53.86-.86.12-.1zM19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-5.4-2.6a.5.5 0 00-.7 0l-1.75 1.75a.5.5 0 000 .7l1.75 1.75a.5.5 0 00.7-.7l-.9-.9h1.55c.97 0 1.75.78 1.75 1.75v.25a.5.5 0 001 0v-.25a2.75 2.75 0 00-2.75-2.75h-1.54l.9-.9a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
}

const EditArrowBack20Regular = wrapIcon(rawSvg({}), 'EditArrowBack20Regular');
export default EditArrowBack20Regular;
      