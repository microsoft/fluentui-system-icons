import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M8.75 11.5h6.5c.97 0 1.75.78 1.75 1.75v4c0 .97-.78 1.75-1.75 1.75h-6.5C7.78 19 7 18.22 7 17.25v-4c0-.97.78-1.75 1.75-1.75zm-.25 1.75v1.25H10V13H8.75a.25.25 0 00-.25.25zm0 2.75v1.25c0 .14.11.25.25.25H10V16H8.5zm3 0v1.5h3.75c.14 0 .25-.11.25-.25V16h-4zm4-1.5v-1.25a.25.25 0 00-.25-.25H11.5v1.5h4zM13.59 2.59a.5.5 0 00-.05-.04 2.07 2.07 0 00-.34-.25l-.05-.03-.05-.03-.16-.09c-.2-.08-.41-.12-.63-.14h-.06a.6.6 0 00-.08-.01H6a2 2 0 00-2 2v16c0 1.1.9 2 2 2h12a2 2 0 002-2V9.83a2 2 0 00-.59-1.42L13.6 2.6zM18 20.5H6a.5.5 0 01-.5-.5V4c0-.27.22-.5.5-.5h6V8c0 1.1.9 2 2 2h4.5v10a.5.5 0 01-.5.5zm-.62-12H14a.5.5 0 01-.5-.5V4.62l3.88 3.88z" fill={primaryFill} /></svg>;
}

const DocumentTable24Regular = wrapIcon(rawSvg({}), 'DocumentTable24Regular');
export default DocumentTable24Regular;
      