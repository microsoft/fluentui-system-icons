import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.5 20a.5.5 0 01-.5.5h-5.73a6.52 6.52 0 01-1.08 1.5H18a2 2 0 002-2V9.83a2 2 0 00-.59-1.42L13.6 2.6a.5.5 0 00-.05-.04 2.07 2.07 0 00-.34-.25l-.05-.03-.05-.03-.16-.09c-.2-.08-.41-.12-.63-.14h-.06a.6.6 0 00-.08-.01H6a2 2 0 00-2 2v7.5c.47-.2.98-.34 1.5-.42V4c0-.27.22-.5.5-.5h6V8c0 1.1.9 2 2 2h4.5v10zm-5-15.38l3.88 3.88H14a.5.5 0 01-.5-.5V4.62zM6.5 23a5.5 5.5 0 110-11 5.5 5.5 0 010 11zm-1.15-7.65a.5.5 0 00-.7-.7l-2.5 2.5a.5.5 0 000 .7l2.5 2.5a.5.5 0 00.7-.7L3.21 17.5l2.14-2.15zm2.3-.7a.5.5 0 000 .7l2.14 2.15-2.14 2.15a.5.5 0 00.7.7l2.5-2.5a.5.5 0 000-.7l-2.5-2.5a.5.5 0 00-.7 0z" fill={primaryFill} /></svg>;
}

const DocumentChevronDouble24Regular = wrapIcon(rawSvg({}), 'DocumentChevronDouble24Regular');
export default DocumentChevronDouble24Regular;
      