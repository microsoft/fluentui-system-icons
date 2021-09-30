import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16 12.5V6.37L9.25 9.93a.5.5 0 01-.5 0L2 6.37v6.13A2.5 2.5 0 004.5 15h9a2.5 2.5 0 002.5-2.5zm-.02-7.28A2.5 2.5 0 0013.5 3h-9a2.5 2.5 0 00-2.48 2.22L9 8.92l6.98-3.7zM6.5 17a2.5 2.5 0 01-2-1h9a3.5 3.5 0 003.5-3.5v-7c.6.46 1 1.18 1 2v5a4.5 4.5 0 01-4.5 4.5h-7z" fill={primaryFill} /></svg>;
}

const MailMultipleFilled = wrapIcon(rawSvg({}), 'MailMultipleFilled');
export default MailMultipleFilled;
      