import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 14.5a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v9zM6.7 14h6.6c.38 0 .7-.34.7-.75s-.32-.75-.7-.75H6.7c-.38 0-.7.34-.7.75s.32.75.7.75zm0-3h6.6c.38 0 .7-.34.7-.75s-.32-.75-.7-.75H6.7c-.38 0-.7.34-.7.75s.32.75.7.75z" fill={primaryFill} /></svg>;
}

const TextboxAlignBottomFilled = wrapIcon(rawSvg({}), 'TextboxAlignBottomFilled');
export default TextboxAlignBottomFilled;
      