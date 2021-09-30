import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23.5 16v-2.15A7.54 7.54 0 0025 12.6v10.15c0 1.8-1.46 3.25-3.25 3.25H6.25A3.25 3.25 0 013 22.75V7.25C3 5.45 4.46 4 6.25 4h6.62c-.25.47-.46.97-.6 1.5H6.25c-.97 0-1.75.78-1.75 1.75V16h6c.38 0 .7.28.74.65l.01.1a2.75 2.75 0 105.5 0c0-.38.28-.7.65-.74l.1-.01h6zm-19 6.75c0 .97.78 1.75 1.75 1.75h15.5c.97 0 1.75-.78 1.75-1.75V17.5h-5.32a4.25 4.25 0 01-3.96 3.5H14a4.25 4.25 0 01-4.14-3.3l-.04-.2H4.5v5.25zm15-8.75a6.5 6.5 0 100-13 6.5 6.5 0 000 13zm3.85-8.65l-5 5a.5.5 0 01-.7 0l-2-2a.5.5 0 01.7-.7L18 9.29l4.65-4.64a.5.5 0 01.7.7z" fill={primaryFill} /></svg>;
}

const MailInboxCheckmark28Regular = wrapIcon(rawSvg({}), 'MailInboxCheckmark28Regular');
export default MailInboxCheckmark28Regular;
      