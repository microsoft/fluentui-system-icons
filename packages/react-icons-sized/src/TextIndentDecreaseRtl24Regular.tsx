import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.25 16a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9zm15.03-4.78l-2-2a.75.75 0 00-1.13.98l.07.08 1.47 1.47-1.47 1.47a.75.75 0 00.98 1.13l.08-.07 2-2a.75.75 0 00.07-.98l-.07-.08-2-2 2 2zM3.25 11a.75.75 0 000 1.5h12a.75.75 0 000-1.5h-12zm3-5a.75.75 0 000 1.5h9a.75.75 0 000-1.5h-9z" fill={primaryFill} /></svg>;
}

const TextIndentDecreaseRtl24Regular = wrapIcon(rawSvg({}), 'TextIndentDecreaseRtl24Regular');
export default TextIndentDecreaseRtl24Regular;
      