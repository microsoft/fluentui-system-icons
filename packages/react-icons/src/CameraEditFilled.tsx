import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.12 2a1.5 1.5 0 00-1.34.83L6.2 4H4.5A2.5 2.5 0 002 6.5v8A2.5 2.5 0 004.5 17H8l.06-.35.37-1.5c.12-.46.34-.9.64-1.26a4 4 0 114.82-4.83l.21-.22A2.87 2.87 0 0118 8.7V6.5A2.5 2.5 0 0015.5 4h-1.69l-.58-1.16A1.5 1.5 0 0011.89 2H8.12z" fill={primaryFill} /><path d="M13 9.94A3 3 0 109.94 13L13 9.94z" fill={primaryFill} /><path d="M14.8 9.55l-4.82 4.83a2.2 2.2 0 00-.58 1.02l-.37 1.5a.89.89 0 001.08 1.07l1.5-.37c.38-.1.73-.3 1.01-.58l4.83-4.83a1.87 1.87 0 00-2.64-2.64z" fill={primaryFill} /></svg>;
}

const CameraEditFilled = wrapIcon(rawSvg({}), 'CameraEditFilled');
export default CameraEditFilled;
      