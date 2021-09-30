import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 14.5v-4.1c.36-.18.7-.4 1-.66v4.76a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 012 14.5v-8A2.5 2.5 0 014.5 4h4.7c-.08.32-.15.66-.18 1H4.5C3.67 5 3 5.67 3 6.5v.3l7 4.12 1.44-.85c.33.22.68.4 1.04.55l-2.23 1.31a.5.5 0 01-.42.04l-.08-.04L3 7.96v6.54c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5zm-5.68-5.82a4.5 4.5 0 106.36-6.36 4.5 4.5 0 00-6.36 6.36zm4.95-4.95c.2.2.2.51 0 .7L15.2 5.5l1.06 1.06a.5.5 0 01-.7.7L14.5 6.22l-1.06 1.06a.5.5 0 11-.7-.7l1.05-1.07-1.06-1.06a.5.5 0 01.7-.7l1.07 1.05 1.06-1.06c.2-.2.51-.2.7 0z" fill={primaryFill} /></svg>;
}

const MailDismiss20Regular = wrapIcon(rawSvg({}), 'MailDismiss20Regular');
export default MailDismiss20Regular;
      