import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-9.5 0c0 .83.26 1.6.7 2.25l5.55-5.56a4 4 0 00-6.25 3.3zm4 4a4 4 0 003.3-6.25l-5.55 5.56c.64.43 1.42.69 2.25.69zm3 6.25v-4.48a6.52 6.52 0 001.5-1.08v5.56a3.25 3.25 0 01-3.07 3.24l-.18.01H5.25a3.25 3.25 0 01-3.24-3.07L2 16.75v-9.5a3.25 3.25 0 013.07-3.24L5.25 4h6.25c-.2.47-.34.98-.42 1.5H5.25c-.92 0-1.67.7-1.74 1.6l-.01.15v.43l8.5 4.47 1.3-.68c.44.37.93.68 1.46.93l-2.41 1.26c-.19.1-.4.12-.6.05l-.1-.05L3.5 9.37v7.38c0 .92.7 1.67 1.6 1.74l.15.01h13.5c.92 0 1.67-.7 1.74-1.6l.01-.15z" fill={primaryFill} /></svg>;
}

const MailProhibited24Regular = wrapIcon(rawSvg({}), 'MailProhibited24Regular');
export default MailProhibited24Regular;
      