import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.5 20a.5.5 0 01-.5.5h-5c0 .54-.12 1.05-.34 1.5H18a2 2 0 002-2V9.83a2 2 0 00-.59-1.42L13.6 2.6a.5.5 0 00-.05-.04 2.07 2.07 0 00-.34-.25l-.05-.03-.05-.03-.16-.09c-.2-.08-.41-.12-.63-.14h-.06a.6.6 0 00-.08-.01H6a2 2 0 00-2 2v7.04c.55.07 1.06.28 1.5.59V4c0-.27.22-.5.5-.5h6V8c0 1.1.9 2 2 2h4.5v10zm-5-15.38l3.88 3.88H14a.5.5 0 01-.5-.5V4.62zM6 14.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm-1.5 0a1 1 0 10-2 0 1 1 0 002 0zm7.5 6a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm-1.5 0a1 1 0 10-2 0 1 1 0 002 0zm.28-7.28c.3.3.3.77 0 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06l7.5-7.5c.3-.3.77-.3 1.06 0z" fill={primaryFill} /></svg>;
}

const DocumentPercent24Regular = wrapIcon(rawSvg({}), 'DocumentPercent24Regular');
export default DocumentPercent24Regular;
      