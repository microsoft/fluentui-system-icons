import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.75 4a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5zM2 9.75c0-.41.34-.75.75-.75h10.5a.75.75 0 010 1.5H2.75A.75.75 0 012 9.75zm5 5c0-.41.34-.75.75-.75h5.5a.75.75 0 010 1.5h-5.5a.75.75 0 01-.75-.75zm9.28-7.03a.75.75 0 10-1.06 1.06l.97.97-.97.97a.75.75 0 101.06 1.06l1.5-1.5c.3-.3.3-.77 0-1.06l-1.5-1.5z" fill={primaryFill} /></svg>;
}

const TextIndentDecreaseRtlFilled = wrapIcon(rawSvg({}), 'TextIndentDecreaseRtlFilled');
export default TextIndentDecreaseRtlFilled;
      