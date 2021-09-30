import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 4a.5.5 0 000 1h8a.5.5 0 000-1h-8zm-3 5a.5.5 0 000 1h11a.5.5 0 000-1h-11zM7 14.5c0-.28.22-.5.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zm10.16-6.76a.5.5 0 11.7.7L16.82 9.5l1.06 1.06a.5.5 0 11-.71.71l-1.41-1.41a.5.5 0 010-.7l1.41-1.42z" fill={primaryFill} /></svg>;
}

const TextIndentIncreaseRtl20Regular = wrapIcon(rawSvg({}), 'TextIndentIncreaseRtl20Regular');
export default TextIndentIncreaseRtl20Regular;
      