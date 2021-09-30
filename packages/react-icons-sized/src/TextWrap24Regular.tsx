import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 5a.75.75 0 000 1.5h18.5a.75.75 0 000-1.5H2.75z" fill={primaryFill} /><path d="M2.75 11.5a.75.75 0 000 1.5H19a2.5 2.5 0 010 5h-4.44l.72-.72a.75.75 0 10-1.06-1.06l-2 2c-.3.3-.3.77 0 1.06l2 2a.75.75 0 101.06-1.06l-.72-.72H19a4 4 0 000-8H2.75z" fill={primaryFill} /><path d="M2 18.75c0-.41.34-.75.75-.75h6.5a.75.75 0 010 1.5h-6.5a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const TextWrap24Regular = wrapIcon(rawSvg({}), 'TextWrap24Regular');
export default TextWrap24Regular;
      