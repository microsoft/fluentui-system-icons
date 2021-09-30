import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 20.5h-5.73a6.52 6.52 0 01-1.08 1.5H18a2 2 0 002-2V9.83a2 2 0 00-.59-1.42L13.6 2.6a.5.5 0 00-.05-.04 2.07 2.07 0 00-.34-.25l-.05-.03-.05-.03-.16-.09c-.2-.08-.41-.12-.63-.14h-.06a.6.6 0 00-.08-.01H6a2 2 0 00-2 2v7.5c.47-.2.98-.34 1.5-.42V4c0-.27.22-.5.5-.5h6V8c0 1.1.9 2 2 2h4.5v10a.5.5 0 01-.5.5zm-.62-12H14a.5.5 0 01-.5-.5V4.62l3.88 3.88zm-4.38 9c0 .52-.06 1.02-.17 1.5h2.42c.97 0 1.75-.78 1.75-1.75v-4c0-.97-.78-1.75-1.75-1.75H9c.98.4 1.83 1.05 2.5 1.85V13h3.75c.14 0 .25.11.25.25v1.25h-3.23c.24.47.43.97.56 1.5h2.67v1.25c0 .14-.11.25-.25.25H13zm-1 0a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-2.15-2.35a.5.5 0 00-.7 0L5.5 18.79l-1.65-1.64a.5.5 0 00-.7.7l2 2c.2.2.5.2.7 0l4-4a.5.5 0 000-.7z" fill={primaryFill} /></svg>;
}

const DocumentTableCheckmark24Regular = wrapIcon(rawSvg({}), 'DocumentTableCheckmark24Regular');
export default DocumentTableCheckmark24Regular;
      