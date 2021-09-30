import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 8a.75.75 0 010-1.5h9a.75.75 0 010 1.5h-9zm15.03 6.78a.75.75 0 01-.98.07l-.08-.07-2-2a.75.75 0 01-.07-.98l.07-.08 2-2a.75.75 0 011.13.98l-.07.08-1.47 1.47 1.47 1.47c.3.3.3.77 0 1.06zM3.25 13a.75.75 0 010-1.5h12a.75.75 0 010 1.5h-12zm3 5a.75.75 0 010-1.5h9a.75.75 0 010 1.5h-9z" fill={primaryFill} /></svg>;
}

const TextIndentIncreaseRtl24Regular = wrapIcon(rawSvg({}), 'TextIndentIncreaseRtl24Regular');
export default TextIndentIncreaseRtl24Regular;
      