import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.97 2.32a1.75 1.75 0 012.06 0l7.42 5.42c.98.71.48 2.26-.73 2.26H4.28a1.25 1.25 0 01-.73-2.26l7.42-5.42zM13 6.25a1 1 0 10-2 0 1 1 0 002 0zM11.25 16h-2v-5h2v5zm1.5-.43c.57-.47 1.25-.8 2-.96V11h-2v4.57zm3.5-1.07h2.25V11h-2.25v3.5zM11 19.25c0-.81.2-1.58.57-2.25H5.25C4.01 17 3 18 3 19.25v.5c0 .41.34.75.75.75h7.42c-.11-.4-.17-.82-.17-1.25zM7.75 16H5.5v-5h2.25v5zM23 19.25a3.75 3.75 0 00-3.75-3.75h-.1a.75.75 0 00.1 1.5h.15a2.25 2.25 0 01-.15 4.5l-.1.01a.75.75 0 00.1 1.5V23h.2A3.75 3.75 0 0023 19.24zm-6.5-3a.75.75 0 00-.75-.75h-.2a3.75 3.75 0 00.2 7.5h.1a.75.75 0 00-.1-1.5h-.15a2.25 2.25 0 01.15-4.5h.1a.75.75 0 00.65-.75zm3.5 3a.75.75 0 00-.75-.75h-3.6a.75.75 0 00.1 1.5h3.6a.75.75 0 00.65-.75z" fill={primaryFill} /></svg>;
}

const BuildingBankLink24Filled = wrapIcon(rawSvg({}), 'BuildingBankLink24Filled');
export default BuildingBankLink24Filled;
      