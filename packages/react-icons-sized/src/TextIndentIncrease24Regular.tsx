import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.75 16a.75.75 0 010 1.5h-9a.75.75 0 010-1.5h9zM2.72 9.22a.75.75 0 01.98-.07l.08.07 2 2c.27.27.3.68.07.98l-.07.08-2 2a.75.75 0 01-1.13-.98l.07-.08 1.47-1.47-1.47-1.47a.75.75 0 010-1.06zM20.75 11a.75.75 0 010 1.5h-12a.75.75 0 010-1.5h12zm-3-5a.75.75 0 010 1.5h-9a.75.75 0 010-1.5h9z" fill={primaryFill} /></svg>;
}

const TextIndentIncrease24Regular = wrapIcon(rawSvg({}), 'TextIndentIncrease24Regular');
export default TextIndentIncrease24Regular;
      