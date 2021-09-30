import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 4.5c0-.28.22-.5.5-.5h8a.5.5 0 110 1h-8a.5.5 0 01-.5-.5z" fill={primaryFill} /><path d="M3.56 7.73a.5.5 0 01.7.7L3.22 9.5l1.06 1.06a.5.5 0 11-.7.7l-1.42-1.4a.5.5 0 010-.71l1.41-1.42z" fill={primaryFill} /><path d="M6.5 9a.5.5 0 000 1h11a.5.5 0 100-1h-11z" fill={primaryFill} /><path d="M6 14.5c0-.28.22-.5.5-.5h6a.5.5 0 110 1h-6a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const TextIndentDecreaseRegular = wrapIcon(rawSvg({}), 'TextIndentDecreaseRegular');
export default TextIndentDecreaseRegular;
      