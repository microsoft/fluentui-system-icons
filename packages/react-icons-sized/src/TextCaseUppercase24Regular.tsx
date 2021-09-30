import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.7 3.5a.75.75 0 00-1.4-.02l-6 15.5a.75.75 0 101.4.54l1.56-4.02h7.11l1.42 4a.75.75 0 101.42-.5L7.7 3.5zM3.85 14l3.13-8.1L9.84 14h-6zM14.75 3.25A.75.75 0 0014 4v15.25c0 .41.34.75.75.75h4.13a4.63 4.63 0 002-8.8A4.5 4.5 0 0018 3.26h-3.25zM21 7.75a3 3 0 01-3 3h-2.5v-6H18a3 3 0 013 3zM18.87 18.5H15.5v-6.25h3.38a3.12 3.12 0 110 6.25z" fill={primaryFill} /></svg>;
}

const TextCaseUppercase24Regular = wrapIcon(rawSvg({}), 'TextCaseUppercase24Regular');
export default TextCaseUppercase24Regular;
      