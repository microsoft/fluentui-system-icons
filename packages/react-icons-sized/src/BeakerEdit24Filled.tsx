import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 3.5v6.24c0 .37-.1.74-.27 1.07L5.53 13h8.93l-1.19-2.19c-.18-.33-.27-.7-.27-1.07V3.5h1A.75.75 0 0014 2H6a.75.75 0 000 1.5h1zm8.27 11H4.73l-1.59 2.91A1.75 1.75 0 004.68 20h6.74l.1-.42c.16-.65.5-1.24.97-1.72l2.99-2.98-.2-.38zm3.83-1.83l-5.9 5.9c-.35.35-.6.78-.7 1.25l-.47 1.83c-.2.8.53 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9a2.29 2.29 0 00-3.23-3.24z" fill={primaryFill} /></svg>;
}

const BeakerEdit24Filled = wrapIcon(rawSvg({}), 'BeakerEdit24Filled');
export default BeakerEdit24Filled;
      