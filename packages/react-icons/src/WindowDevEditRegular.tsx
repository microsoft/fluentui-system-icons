import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 2A2.5 2.5 0 002 4.5v9A2.5 2.5 0 004.5 16h4.97c.11-.36.29-.7.52-1H4.5A1.5 1.5 0 013 13.5V6h12v3.94l.1-.1c.27-.27.57-.47.9-.6V4.5A2.5 2.5 0 0013.5 2h-9zM3 4.5C3 3.67 3.67 3 4.5 3h9c.83 0 1.5.67 1.5 1.5V5H3v-.5zm5.35 2.65c.2.19.2.5 0 .7L6.21 10l2.14 2.15a.5.5 0 01-.7.7l-2.5-2.5a.5.5 0 010-.7l2.5-2.5c.19-.2.5-.2.7 0zm1.8 5a.5.5 0 00.7.7l2.5-2.5a.5.5 0 000-.7l-2.5-2.5a.5.5 0 00-.7.7L12.29 10l-2.14 2.15zm5.66-1.6l-4.83 4.83a2.2 2.2 0 00-.58 1.02l-.37 1.5a.89.89 0 001.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 00-2.64-2.64z" fill={primaryFill} /></svg>;
}

const WindowDevEditRegular = wrapIcon(rawSvg({}), 'WindowDevEditRegular');
export default WindowDevEditRegular;
      