import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.5 3A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zM6 8.25c0 .41.32.75.7.75h6.6c.38 0 .7-.34.7-.75s-.32-.75-.7-.75H6.7c-.38 0-.7.34-.7.75zm.7 2.25c-.38 0-.7.34-.7.75s.32.75.7.75h6.6c.38 0 .7-.34.7-.75s-.32-.75-.7-.75H6.7z" fill={primaryFill} /></svg>;
}

const TextboxAlignMiddle20Filled = wrapIcon(rawSvg({}), 'TextboxAlignMiddle20Filled');
export default TextboxAlignMiddle20Filled;
      