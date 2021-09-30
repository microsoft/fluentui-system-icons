import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 12.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zm.75 2.25a.75.75 0 100 1.5.75.75 0 000-1.5zM7 18.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zm3.75-6.75a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5zM10 15.25c0-.41.34-.75.75-.75h5.5a.75.75 0 010 1.5h-5.5a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5zm8.66-9.09L13.6 2.6a.5.5 0 00-.05-.04 2.07 2.07 0 00-.34-.25l-.05-.03-.05-.03-.16-.09c-.2-.08-.41-.12-.63-.14h-.06a.6.6 0 00-.08-.01H6a2 2 0 00-2 2v16c0 1.1.9 2 2 2h12a2 2 0 002-2V9.83a2 2 0 00-.59-1.42zM18.5 20a.5.5 0 01-.5.5H6a.5.5 0 01-.5-.5V4c0-.27.22-.5.5-.5h6V8c0 1.1.9 2 2 2h4.5v10zm-5-15.38l3.88 3.88H14a.5.5 0 01-.5-.5V4.62z" fill={primaryFill} /></svg>;
}

const DocumentBulletList24Regular = wrapIcon(rawSvg({}), 'DocumentBulletList24Regular');
export default DocumentBulletList24Regular;
      