import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.76 2.06a.5.5 0 01.48 0l5.02 2.7c.22.12.4.3.54.5l-.55.3A3 3 0 008.5 8.16l-.5.28-5.79-3.16c.12-.18.29-.34.49-.45l5.06-2.76zm.48 7.38l.5-.27a3 3 0 00.6.92h-.01A2.3 2.3 0 007 12.38c0 .2.02.42.06.62H4a2 2 0 01-2-2V6.3l5.76 3.14a.5.5 0 00.48 0zm5.74-3.13l.02.03V6.3h-.02zM11.5 10a2 2 0 100-4 2 2 0 000 4zm-2.17 1.09A1.3 1.3 0 008 12.38c0 1.14.8 2.15 1.96 2.43l.08.02a6.2 6.2 0 002.92 0l.08-.02A2.52 2.52 0 0015 12.38c0-.72-.6-1.3-1.33-1.3H9.33z" fill={primaryFill} /></svg>;
}

const MailOpenPerson16Filled = wrapIcon(rawSvg({}), 'MailOpenPerson16Filled');
export default MailOpenPerson16Filled;
      