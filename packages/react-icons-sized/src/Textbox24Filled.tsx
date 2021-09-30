import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M21 5.75A2.75 2.75 0 0018.25 3H5.75A2.75 2.75 0 003 5.75v12.5A2.75 2.75 0 005.75 21h12.5A2.75 2.75 0 0021 18.25V5.75zm-6.75 5.75a.75.75 0 01.1 1.5h-7.6a.75.75 0 01-.1-1.5h7.6zm-7.5 4h10.5a.75.75 0 01.1 1.5H6.75a.75.75 0 01-.1-1.5h.1zm10.5-8a.75.75 0 01.1 1.5H6.75a.75.75 0 01-.1-1.5h10.6z" fill={primaryFill} /></svg>;
}

const Textbox24Filled = wrapIcon(rawSvg({}), 'Textbox24Filled');
export default Textbox24Filled;
      