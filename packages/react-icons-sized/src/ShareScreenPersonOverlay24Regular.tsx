import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 7.25C2 5.45 3.46 4 5.25 4h13.5C20.55 4 22 5.46 22 7.25V13h-.26a3.74 3.74 0 00-1.24-2.55v-3.2c0-.97-.78-1.75-1.75-1.75H5.25c-.97 0-1.75.78-1.75 1.75v9.5c0 .97.78 1.75 1.75 1.75H12v.5c0 .34.04.67.12 1H5.25A3.25 3.25 0 012 16.75v-9.5zm3 1C5 7.56 5.56 7 6.25 7h4.5c.69 0 1.25.56 1.25 1.25v3.5c0 .69-.56 1.25-1.25 1.25h-4.5C5.56 13 5 12.44 5 11.75v-3.5zM21.5 17c.83 0 1.5.67 1.5 1.5v.5c0 1.97-1.86 4-5 4-3.14 0-5-2.03-5-4v-.5c0-.83.67-1.5 1.5-1.5h7zM18 10.5a2.75 2.75 0 110 5.5 2.75 2.75 0 010-5.5z" fill={primaryFill} /></svg>;
}

const ShareScreenPersonOverlay24Regular = wrapIcon(rawSvg({}), 'ShareScreenPersonOverlay24Regular');
export default ShareScreenPersonOverlay24Regular;
      