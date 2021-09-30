import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.4 8.21l-.4.22-5-2.69V5a1 1 0 011-1h4.88l1-1H3a2 2 0 00-2 2v6c0 1.1.9 2 2 2h8a2 2 0 002-2V9.12l-1 1V11a1 1 0 01-1 1H3a1 1 0 01-1-1V6.88l4.76 2.56a.5.5 0 00.48 0l.26-.14c-.11-.35-.14-.72-.1-1.09zm3.83-4.73L8.35 6.35a.5.5 0 11-.7-.7l2.87-2.88a2.63 2.63 0 013.71 3.71l-3.18 3.17a1.56 1.56 0 01-2.2-2.2l2.8-2.8a.5.5 0 11.7.7l-2.8 2.8a.56.56 0 00.8.8l3.17-3.18a1.63 1.63 0 00-2.3-2.3z" fill={primaryFill} /></svg>;
}

const MailAttach16Regular = wrapIcon(rawSvg({}), 'MailAttach16Regular');
export default MailAttach16Regular;
      