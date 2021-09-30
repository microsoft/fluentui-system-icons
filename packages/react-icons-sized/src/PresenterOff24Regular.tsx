import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 10-1.06 1.06l5.85 5.86C7.44 9.4 7 10.02 7 10.75V12h1.5v-1.31c.03-.1.13-.19.25-.19h.69l2.5 2.5h-8.2c-.7 0-1.01.89-.46 1.33L8 18.11v1.64C8 21 9 22 10.25 22h3.5c1.24 0 2.25-1 2.25-2.25v-1.64l.58-.47 4.14 4.14a.75.75 0 001.06-1.06L3.28 2.22zm12.23 14.35l-.73.6a.75.75 0 00-.28.58v2c0 .42-.34.75-.75.75h-3.5a.75.75 0 01-.75-.75v-2c0-.23-.1-.44-.28-.59L5.89 14.5h7.55l2.07 2.07z" fill={primaryFill} /><path d="M12 8a3 3 0 01-.98-.16L9.16 5.98A3 3 0 1112 8zm0-4.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={primaryFill} /><path d="M20.24 13h-4.06l2.76 2.76 1.77-1.43a.75.75 0 00-.47-1.33z" fill={primaryFill} /><path d="M13.68 10.5L12.18 9h3.06c.92 0 1.68.7 1.75 1.6V12h-1.5v-1.25a.25.25 0 00-.19-.24l-.06-.01h-1.56z" fill={primaryFill} /></svg>;
}

const PresenterOff24Regular = wrapIcon(rawSvg({}), 'PresenterOff24Regular');
export default PresenterOff24Regular;
      