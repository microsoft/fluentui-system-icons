import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18.33 15v3.33h3.34v3.34H25V25h-3.33v-3.33h-3.34V25H15v-3.33h3.33v-3.34H15V15h3.33zm-7.83 0a2.5 2.5 0 012.5 2.5v5a2.5 2.5 0 01-2.5 2.5h-5A2.5 2.5 0 013 22.5v-5A2.5 2.5 0 015.5 15h5zm0 2h-5a.5.5 0 00-.5.5v5c0 .28.22.5.5.5h5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5zm-.75 1.25v3.5h-3.5v-3.5h3.5zM25 15v3.33h-3.33V15H25zM10.5 3A2.5 2.5 0 0113 5.5v5a2.5 2.5 0 01-2.5 2.5h-5A2.5 2.5 0 013 10.5v-5A2.5 2.5 0 015.5 3h5zm12 0A2.5 2.5 0 0125 5.5v5a2.5 2.5 0 01-2.5 2.5h-5a2.5 2.5 0 01-2.5-2.5v-5A2.5 2.5 0 0117.5 3h5zm-12 2h-5a.5.5 0 00-.5.5v5c0 .28.22.5.5.5h5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5zm12 0h-5a.5.5 0 00-.5.5v5c0 .28.22.5.5.5h5a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5zm-.75 1.25v3.5h-3.5v-3.5h3.5zm-12 0v3.5h-3.5v-3.5h3.5z" fill={primaryFill} /></svg>;
}

const QrCode28Filled = wrapIcon(rawSvg({}), 'QrCode28Filled');
export default QrCode28Filled;
      