import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 5a3 3 0 013-3h11a3 3 0 013 3v5h-9a4 4 0 00-4 4v5a4 4 0 00.13 1H5a3 3 0 01-3-3V5zm3.75-1a.75.75 0 000 1.5h9.5a.75.75 0 000-1.5h-9.5zm2 3a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5zm-.2 5.27A3 3 0 0110 11h9a3 3 0 012.45 1.27l-6.95 4.35-6.95-4.35zM7 13.71L7 14v5a3 3 0 003 3h9a3 3 0 003-3v-5l-.01-.3-7.1 4.44a.75.75 0 01-.79 0L7.01 13.7z" fill={primaryFill} /></svg>;
}

const MailTemplate24Filled = wrapIcon(rawSvg({}), 'MailTemplate24Filled');
export default MailTemplate24Filled;
      