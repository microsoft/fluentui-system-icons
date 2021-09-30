import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M34.23 36l7.64 7.63a1.25 1.25 0 001.76-1.76L6.13 4.37a1.25 1.25 0 10-1.76 1.76l1.87 1.88A7.23 7.23 0 004 13.25v15.5c0 4 3.25 7.25 7.25 7.25H12v5.82a2.25 2.25 0 003.55 1.84L26.4 36h7.83zm-2.5-2.5H25.6l-11.1 7.84V33.5h-3.25a4.75 4.75 0 01-4.75-4.75v-15.5c0-1.37.58-2.6 1.5-3.47L31.74 33.5z" fill={primaryFill} /><path d="M11.3 6l2.5 2.5h22.95a4.75 4.75 0 014.75 4.75v15.5a4.75 4.75 0 01-3.02 4.43l1.87 1.87a7.25 7.25 0 003.65-6.3v-15.5c0-4-3.25-7.25-7.25-7.25H11.3z" fill={primaryFill} /></svg>;
}

const CommentOff48Regular = wrapIcon(rawSvg({}), 'CommentOff48Regular');
export default CommentOff48Regular;
      