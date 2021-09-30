import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.5 20a.5.5 0 01-.5.5h-5v1c0 .17-.02.34-.05.5H18a2 2 0 002-2V9.83a2 2 0 00-.59-1.42L13.6 2.6a.5.5 0 00-.05-.04 2.07 2.07 0 00-.34-.25l-.05-.03-.05-.03-.16-.09c-.2-.08-.41-.12-.63-.14h-.06a.6.6 0 00-.08-.01H6a2 2 0 00-2 2v7h1.5V4c0-.27.22-.5.5-.5h6V8c0 1.1.9 2 2 2h4.5v10zm-5-15.38l3.88 3.88H14a.5.5 0 01-.5-.5V4.62zM5 12h3v2H5v-2zm-2.5 0H4v2.5c0 .28.22.5.5.5h4a.5.5 0 00.5-.5V12h.38c.4 0 .78.16 1.06.44l1.12 1.12c.28.28.44.66.44 1.06v6.88c0 .83-.67 1.5-1.5 1.5H10v-5.5a.5.5 0 00-.5-.5h-6a.5.5 0 00-.5.5V23h-.5A1.5 1.5 0 011 21.5v-8c0-.83.67-1.5 1.5-1.5zM9 18v5H4v-5h5z" fill={primaryFill} /></svg>;
}

const DocumentSave24Regular = wrapIcon(rawSvg({}), 'DocumentSave24Regular');
export default DocumentSave24Regular;
      