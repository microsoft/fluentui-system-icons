import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 00-1.06 1.06L4 5.06v6.19a.75.75 0 001.5 0V6.56l13 13V20a.5.5 0 01-.5.5h-1.25a.75.75 0 100 1.5H18a2 2 0 001.8-1.14l.92.92a.75.75 0 101.06-1.06l-1.99-1.99a.8.8 0 00-.02-.02L3.28 2.22zM12 8c0 .5.18.94.47 1.3l.24.23A2 2 0 0014 10h4.5v1.25a.75.75 0 001.5 0v-1.5l-.01-.12a2 2 0 00-.58-1.22L13.6 2.6l-.05-.04-.04-.03a2.07 2.07 0 00-.3-.23l-.05-.02-.05-.03-.16-.09c-.2-.08-.41-.12-.63-.14h-.06a.6.6 0 00-.08-.01H6a2 2 0 00-.7.12L6.69 3.5H12V8zm1.5-3.38l3.88 3.88H14a.5.5 0 01-.5-.5V4.62zm5 10.7l1.36 1.36a.75.75 0 00.14-.44v-2.49a.75.75 0 00-1.5 0v1.57zM4.75 13c.41 0 .75.34.75.75v2.5a.75.75 0 01-1.5 0v-2.5c0-.41.34-.75.75-.75zm5.5 7.5a.75.75 0 100 1.5h3.5a.75.75 0 000-1.5h-3.5zm-5.5-2c.41 0 .75.34.75.75V20c0 .28.22.5.5.5h1.25a.75.75 0 010 1.5H6a2 2 0 01-2-2v-.75c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
}

const DocumentSplitHintOff24Regular = wrapIcon(rawSvg({}), 'DocumentSplitHintOff24Regular');
export default DocumentSplitHintOff24Regular;
      