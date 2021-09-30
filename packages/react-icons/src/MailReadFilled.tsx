import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.26 3.07a.5.5 0 00-.52 0L2.97 7.13a2 2 0 00-.7.71l7.73 4.1 7.73-4.1a2 2 0 00-.7-.7l-6.77-4.07z" fill={primaryFill} /><path d="M18 8.83l-7.77 4.11a.5.5 0 01-.46 0L2 8.84v5.66A2.5 2.5 0 004.5 17h11a2.5 2.5 0 002.5-2.5V8.85v-.02z" fill={primaryFill} /></svg>;
}

const MailReadFilled = wrapIcon(rawSvg({}), 'MailReadFilled');
export default MailReadFilled;
      