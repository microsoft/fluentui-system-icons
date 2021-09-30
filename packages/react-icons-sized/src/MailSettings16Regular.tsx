import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 10.8V13a1 1 0 01-1 1H3a1 1 0 01-1-1V8.88l4.76 2.56a.5.5 0 00.48 0l1.4-.76a5.48 5.48 0 01-1.1-.54l-.54.3-5-2.7V7a1 1 0 011-1h2.02a5.57 5.57 0 010-1H3a2 2 0 00-2 2v6c0 1.1.9 2 2 2h8a2 2 0 002-2v-2.6c-.32.16-.65.3-1 .4zM6.63 4.91a2 2 0 001.44-2.48L7.9 1.9c.25-.2.53-.37.82-.5l.34.36a2 2 0 002.9 0l.33-.35c.3.14.58.32.84.52l-.13.42a2 2 0 001.46 2.52l.35.09a4.7 4.7 0 010 1.01l-.45.12a2 2 0 00-1.43 2.48l.15.55c-.25.2-.53.37-.82.5l-.34-.36a2 2 0 00-2.9 0l-.33.35c-.3-.14-.58-.32-.84-.52L8 8.66a2 2 0 00-1.46-2.52l-.35-.09a4.7 4.7 0 010-1.01l.45-.12zm4.87.58a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /></svg>;
}

const MailSettings16Regular = wrapIcon(rawSvg({}), 'MailSettings16Regular');
export default MailSettings16Regular;
      