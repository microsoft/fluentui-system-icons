import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 14.5v-4.1c.36-.18.7-.4 1-.66v4.76a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 012 14.5v-8A2.5 2.5 0 014.5 4h4.7c-.08.32-.15.66-.18 1H4.5C3.67 5 3 5.67 3 6.5v.3l7 4.12 1.44-.85c.33.22.68.4 1.04.55l-2.23 1.31a.5.5 0 01-.42.04l-.08-.04L3 7.96v6.54c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5zM14.5 10a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm2-4.2l.35.35a.5.5 0 01-.35.85h-4a.5.5 0 01-.35-.85l.35-.36V4a2 2 0 114 0v1.8zm-2 3.2a1.5 1.5 0 01-1.41-1h2.82c-.2.58-.76 1-1.41 1z" fill={primaryFill} /></svg>;
}

const MailAlertRegular = wrapIcon(rawSvg({}), 'MailAlertRegular');
export default MailAlertRegular;
      