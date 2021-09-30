import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.92 2.23a.5.5 0 00-.84.54L9.4 9.43l-1.92 2.96a3 3 0 10.78.64L10 10.35l1.74 2.68a3 3 0 10.78-.64L5.92 2.23zM14 17a2 2 0 110-4 2 2 0 010 4zM4 15a2 2 0 114 0 2 2 0 01-4 0z" fill={primaryFill} /><path d="M11.2 8.51l-.6-.92 3.48-5.36a.5.5 0 01.84.54l-3.73 5.74z" fill={primaryFill} /></svg>;
}

const Cut20Regular = wrapIcon(rawSvg({}), 'Cut20Regular');
export default Cut20Regular;
      