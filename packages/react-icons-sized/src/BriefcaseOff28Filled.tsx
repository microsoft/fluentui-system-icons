import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 00-1.06 1.06L6.94 8h-.19A3.75 3.75 0 003 11.75v8.5A3.75 3.75 0 006.75 24h14.5c.5 0 .98-.1 1.41-.28l2.06 2.06a.75.75 0 101.06-1.06L3.28 2.22zM25 20.25c0 .47-.09.91-.24 1.33L11.18 8h6.32V4.5h-7v2.82L9 5.82V3.75c0-.41.34-.75.75-.75h8.5c.41 0 .75.34.75.75V8h2.25A3.75 3.75 0 0125 11.75v8.5z" fill={primaryFill} /></svg>;
}

const BriefcaseOff28Filled = wrapIcon(rawSvg({}), 'BriefcaseOff28Filled');
export default BriefcaseOff28Filled;
      