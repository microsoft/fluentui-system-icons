import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4.5A2.5 2.5 0 014.5 2h9A2.5 2.5 0 0116 4.5v3.54a3.53 3.53 0 00-.5-.04H15V4.5c0-.83-.67-1.5-1.5-1.5h-9C3.67 3 3 3.67 3 4.5v9c0 .83.67 1.5 1.5 1.5H6v.5c0 .17.01.34.04.5H4.5A2.5 2.5 0 012 13.5v-9zm11 3a.5.5 0 01-.5.5h-5a.5.5 0 010-1h5c.28 0 .5.22.5.5zm-8-2c0-.28.22-.5.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm2 6A2.5 2.5 0 019.5 9h6a2.5 2.5 0 012.5 2.5v4a2.5 2.5 0 01-2.5 2.5h-6A2.5 2.5 0 017 15.5v-4zM9.5 10a1.5 1.5 0 00-1.48 1.23l4.48 2.69 4.48-2.69A1.5 1.5 0 0015.5 10h-6zM8 15.5c0 .83.67 1.5 1.5 1.5h6c.83 0 1.5-.67 1.5-1.5v-3.12l-4.24 2.55a.5.5 0 01-.52 0L8 12.38v3.12z" fill={primaryFill} /></svg>;
}

const MailTemplate20Regular = wrapIcon(rawSvg({}), 'MailTemplate20Regular');
export default MailTemplate20Regular;
      