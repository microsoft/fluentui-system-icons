import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 7.37v7.13a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 012 14.5V7.37l7.75 4.56c.15.1.35.1.5 0L18 7.37zM15.5 4a2.5 2.5 0 012.48 2.22L10 10.92l-7.98-4.7A2.5 2.5 0 014.5 4h11z" fill={primaryFill} /></svg>;
}

const MailFilled = wrapIcon(rawSvg({}), 'MailFilled');
export default MailFilled;
      