import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.76 2.06a.5.5 0 01.48 0l5.02 2.7C13.7 5 14 5.48 14 6v.34A3 3 0 0011.6 5L8 3.07 3.18 5.7a.34.34 0 00-.08.06L8 8.43l.5-.27c.02.35.1.7.24 1l-.5.28a.5.5 0 01-.48 0L3 6.84V11a1 1 0 001 1h3.03a3.45 3.45 0 00.03 1H4a2 2 0 01-2-2V6c0-.5.27-.94.7-1.18l5.06-2.76zM11.5 10a2 2 0 100-4 2 2 0 000 4zm-2.17 1.09A1.3 1.3 0 008 12.38c0 1.14.8 2.15 1.96 2.43l.08.02a6.2 6.2 0 002.92 0l.08-.02A2.52 2.52 0 0015 12.38c0-.72-.6-1.3-1.33-1.3H9.33z" fill={primaryFill} /></svg>;
}

const MailOpenPerson16Regular = wrapIcon(rawSvg({}), 'MailOpenPerson16Regular');
export default MailOpenPerson16Regular;
      