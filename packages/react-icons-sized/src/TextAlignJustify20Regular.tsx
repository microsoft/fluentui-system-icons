import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.5c0-.28.22-.5.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M2 9.5c0-.28.22-.5.5-.5h15a.5.5 0 010 1h-15a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M2.5 14a.5.5 0 000 1h15a.5.5 0 000-1h-15z" fill={primaryFill} /></svg>;
}

const TextAlignJustify20Regular = wrapIcon(rawSvg({}), 'TextAlignJustify20Regular');
export default TextAlignJustify20Regular;
      