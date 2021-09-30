import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 5.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-9zm-10.3 2h6.6c.38 0 .7.34.7.75s-.32.75-.7.75H6.7c-.38 0-.7-.34-.7-.75s.32-.75.7-.75zm1 3h4.6c.38 0 .7.34.7.75s-.32.75-.7.75H7.7c-.38 0-.7-.34-.7-.75s.32-.75.7-.75z" fill={primaryFill} /></svg>;
}

const TextboxAlignCenterFilled = wrapIcon(rawSvg({}), 'TextboxAlignCenterFilled');
export default TextboxAlignCenterFilled;
      