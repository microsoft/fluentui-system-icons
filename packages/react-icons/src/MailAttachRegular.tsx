import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.77 10.47l-.77.45L3 6.8v-.3C3 5.67 3.67 5 4.5 5h7.38l1-1H4.5A2.5 2.5 0 002 6.5v8A2.5 2.5 0 004.5 17h11a2.5 2.5 0 002.5-2.5V9.12l-1 1v4.38c0 .83-.67 1.5-1.5 1.5h-11A1.5 1.5 0 013 14.5V7.96l6.75 3.97.08.04c.14.05.3.04.42-.04l.83-.49c-.17-.3-.28-.63-.31-.97zm4.46-6a1.62 1.62 0 012.3 2.3l-.02.01-3.85 3.85h-.01a.56.56 0 11-.78-.8l3.48-3.48a.5.5 0 10-.7-.7l-3.5 3.49-.02.02a1.56 1.56 0 002.21 2.2l.01-.01 3.88-3.87.01-.01a2.63 2.63 0 00-3.72-3.7l-3.57 3.57a.5.5 0 00.7.7l3.58-3.56z" fill={primaryFill} /></svg>;
}

const MailAttachRegular = wrapIcon(rawSvg({}), 'MailAttachRegular');
export default MailAttachRegular;
      