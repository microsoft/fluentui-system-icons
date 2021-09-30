import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.3 4h15.45A2.25 2.25 0 0122 6.25v11.5A2.25 2.25 0 0119.75 20H4.25A2.25 2.25 0 012 17.75v-7.2c.06.07.13.14.21.2a1.38 1.38 0 001.29.14v6.86a.75.75 0 00.75.75H7v-2.76A1.75 1.75 0 018.6 14h6.65a1.75 1.75 0 011.74 1.6v2.89h2.76a.75.75 0 00.75-.75V6.24a.75.75 0 00-.75-.74H5.42l-.28-.1a.9.9 0 01-.57-.55L4.3 4zm4.2 14.5h7l-.01-2.76a.25.25 0 00-.2-.24H8.75a.25.25 0 00-.24.19v2.8zm5.62-10.62a3 3 0 11-4.24 4.24 3 3 0 014.24-4.24zm-3.18 1.06a1.5 1.5 0 102.12 2.12 1.5 1.5 0 00-2.12-2.12zm-8.58-.1l.3.92a.36.36 0 00.68.02v-.02l.3-.92a1.88 1.88 0 011.2-1.2l.92-.3a.36.36 0 000-.68h-.02l-.92-.3a1.9 1.9 0 01-1.2-1.2l-.3-.92a.36.36 0 00-.55-.17c-.06.04-.1.1-.13.17l-.3.92v.02a1.9 1.9 0 01-1.18 1.18l-.92.3a.36.36 0 00-.17.55c.04.06.1.1.17.13l.92.3a1.9 1.9 0 011.2 1.2zm2.53 1.7l.54-.17a1.12 1.12 0 00.68-.7l.18-.53A.22.22 0 016.4 9a.2.2 0 01.2.03l.03.03.05.07.17.54a1.1 1.1 0 00.7.7l.54.17.04.02a.21.21 0 01.1.18.21.21 0 01-.14.2l-.53.17a1.1 1.1 0 00-.7.7l-.17.54a.22.22 0 01-.08.1.21.21 0 01-.32-.1l-.17-.54a1.1 1.1 0 00-.7-.7l-.54-.17a.21.21 0 01-.1-.32.2.2 0 01.1-.08z" fill={primaryFill} /></svg>;
}

const VideoPersonSparkle24Regular = wrapIcon(rawSvg({}), 'VideoPersonSparkle24Regular');
export default VideoPersonSparkle24Regular;
      