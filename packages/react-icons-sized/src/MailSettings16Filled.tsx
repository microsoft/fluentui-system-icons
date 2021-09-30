import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13 10.4a5.48 5.48 0 01-4.35.28l-1.41.76a.5.5 0 01-.48 0L1 8.34V13c0 1.1.9 2 2 2h8a2 2 0 002-2v-2.6zM5.02 5H3a2 2 0 00-2 2v.2l6 3.23.54-.3A5.5 5.5 0 015.02 5zm1.61-.08a2 2 0 001.44-2.48L7.9 1.9c.25-.2.53-.37.82-.5l.34.36a2 2 0 002.9 0l.33-.35c.3.14.58.32.84.52l-.13.42a2 2 0 001.46 2.52l.35.09a4.7 4.7 0 010 1.01l-.45.12a2 2 0 00-1.43 2.48l.15.55c-.25.2-.53.37-.82.5l-.34-.36a2 2 0 00-2.9 0l-.33.35c-.3-.14-.58-.32-.84-.52L8 8.66a2 2 0 00-1.46-2.52l-.35-.09a4.7 4.7 0 010-1.01l.45-.12zm4.87.58a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /></svg>;
}

const MailSettings16Filled = wrapIcon(rawSvg({}), 'MailSettings16Filled');
export default MailSettings16Filled;
      