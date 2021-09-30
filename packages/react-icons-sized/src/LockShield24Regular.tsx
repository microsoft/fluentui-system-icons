import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a4 4 0 014 4v2h1.75C16.99 8 18 9 18 10.25V11c-.32 0-.64.11-.9.33l-.1.1c-.17.17-.33.32-.5.46v-1.64a.75.75 0 00-.75-.75H4.25a.75.75 0 00-.75.75v9.5c0 .41.34.75.75.75h9.89c.4.58.92 1.08 1.54 1.5H4.25C3.01 22 2 21 2 19.75v-9.5C2 9.01 3 8 4.25 8H6V6a4 4 0 014-4zm8.28 10.12c1 1.04 2.1 1.55 3.32 1.55.2 0 .35.14.4.33v2.58c0 2.69-1.31 4.51-3.87 5.4a.39.39 0 01-.26 0c-2.47-.86-3.78-2.6-3.87-5.13v-2.77a.4.4 0 01.4-.41 4.5 4.5 0 003.32-1.55.39.39 0 01.56 0zM10 13.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm0-10A2.5 2.5 0 007.5 6v2h5V6A2.5 2.5 0 0010 3.5z" fill={primaryFill} /></svg>;
}

const LockShield24Regular = wrapIcon(rawSvg({}), 'LockShield24Regular');
export default LockShield24Regular;
      