import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.5 24a17.5 17.5 0 1135 0v4h-5.25c-.69 0-1.25.56-1.25 1.25v13.5c0 .69.56 1.25 1.25 1.25h2A5.75 5.75 0 0044 38.25V24a20 20 0 10-40 0v14.25A5.75 5.75 0 009.75 44h2c.69 0 1.25-.56 1.25-1.25v-13.5c0-.69-.56-1.25-1.25-1.25H6.5v-4zm31 6.5h4v7.75c0 1.8-1.46 3.25-3.25 3.25h-.75v-11zm-31 0h4v11h-.75a3.25 3.25 0 01-3.25-3.25V30.5zm16.25-7.25v21.5a1.25 1.25 0 102.5 0v-21.5a1.25 1.25 0 10-2.5 0zM18.25 28c.69 0 1.25.56 1.25 1.25v9.5a1.25 1.25 0 11-2.5 0v-9.5c0-.69.56-1.25 1.25-1.25zM31 29.25a1.25 1.25 0 10-2.5 0v9.5a1.25 1.25 0 102.5 0v-9.5z" fill={primaryFill} /></svg>;
}

const HeadphonesSoundWave48Regular = wrapIcon(rawSvg({}), 'HeadphonesSoundWave48Regular');
export default HeadphonesSoundWave48Regular;
      