import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.25 21A2.75 2.75 0 0021 18.25V5.75A2.75 2.75 0 0018.25 3H5.75A2.75 2.75 0 003 5.75v12.5A2.75 2.75 0 005.75 21h12.5zm-5.75-6.75a.75.75 0 01-1.5.1v-7.6a.75.75 0 011.5-.1v7.6zm-4-7.5v10.5a.75.75 0 01-1.5.1V6.75a.75.75 0 011.5-.1v.1zm8 10.5a.75.75 0 01-1.5.1V6.75a.75.75 0 011.5-.1v10.6z" fill={primaryFill} /></svg>;
}

const TextboxVertical24Filled = wrapIcon(rawSvg({}), 'TextboxVertical24Filled');
export default TextboxVertical24Filled;
      