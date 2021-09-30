import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.19 13A6.51 6.51 0 009 11.5h6.25a.75.75 0 010 1.5h-4.06zm.94 1.25c.27.47.48.97.63 1.5h2.49a.75.75 0 000-1.5h-3.12zM13 17.5c0 .34-.03.67-.08 1h2.33a.75.75 0 000-1.5h-2.27l.02.5zM5.5 4c0-.27.22-.5.5-.5h6V8c0 1.1.9 2 2 2h4.5v10a.5.5 0 01-.5.5h-5.73a6.52 6.52 0 01-1.08 1.5H18a2 2 0 002-2V9.83a2 2 0 00-.59-1.42L13.6 2.6a.5.5 0 00-.05-.04 2.07 2.07 0 00-.34-.25l-.05-.03-.05-.03-.16-.09c-.2-.08-.41-.12-.63-.14h-.06a.6.6 0 00-.08-.01H6a2 2 0 00-2 2v7.5c.47-.2.98-.34 1.5-.42V4zm11.88 4.5H14a.5.5 0 01-.5-.5V4.62l3.88 3.88zm-5.38 9a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-5.5 0h2a.5.5 0 110 1H6a.5.5 0 01-.5-.5v-3a.5.5 0 011 0v2.5z" fill={primaryFill} /></svg>;
}

const DocumentTextClock24Regular = wrapIcon(rawSvg({}), 'DocumentTextClock24Regular');
export default DocumentTextClock24Regular;
      