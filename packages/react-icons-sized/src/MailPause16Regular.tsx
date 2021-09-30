import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 10.8V13a1 1 0 01-1 1H3a1 1 0 01-1-1V8.88l4.76 2.56a.5.5 0 00.48 0l1.4-.76a5.48 5.48 0 01-1.1-.54l-.54.3-5-2.7V7a1 1 0 011-1h2.02a5.57 5.57 0 010-1H3a2 2 0 00-2 2v6c0 1.1.9 2 2 2h8a2 2 0 002-2v-2.6c-.32.16-.65.3-1 .4zm-1.5-.8a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm-1-6.5v4a.5.5 0 01-1 0v-4a.5.5 0 011 0zm3 0v4a.5.5 0 01-1 0v-4a.5.5 0 011 0z" fill={primaryFill} /></svg>;
}

const MailPause16Regular = wrapIcon(rawSvg({}), 'MailPause16Regular');
export default MailPause16Regular;
      