import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.75A2.75 2.75 0 014.75 2h8.5A2.75 2.75 0 0116 4.75v4.48c-.33.14-.63.35-.9.61l-.6.6V6h-11v7.25c0 .69.56 1.25 1.25 1.25h5.7l-.18.17a3.2 3.2 0 00-.8 1.33H4.76A2.75 2.75 0 012 13.25v-8.5zm6.35 3.1a.5.5 0 10-.7-.7l-2.5 2.5a.5.5 0 000 .7l2.5 2.5a.5.5 0 00.7-.7L6.21 10l2.14-2.15zm1.8 5a.5.5 0 010-.7L12.29 10l-2.14-2.15a.5.5 0 01.7-.7l2.5 2.5c.2.2.2.5 0 .7l-2.5 2.5a.5.5 0 01-.7 0zm5.66-2.3l-4.83 4.83a2.2 2.2 0 00-.58 1.02l-.37 1.5a.89.89 0 001.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 00-2.64-2.64z" fill={primaryFill} /></svg>;
}

const WindowDevEditFilled = wrapIcon(rawSvg({}), 'WindowDevEditFilled');
export default WindowDevEditFilled;
      