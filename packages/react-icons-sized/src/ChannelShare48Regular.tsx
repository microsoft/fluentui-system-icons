import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.47 6h12.05C28.1 6 31 8.9 31 12.47v.28a1.25 1.25 0 11-2.5 0v-.28c0-2.19-1.78-3.97-3.98-3.97H12.48a3.98 3.98 0 00-3.98 3.97v12.05c0 2.2 1.78 3.98 3.97 3.98H24.1a5.5 5.5 0 11.12 2.5H12.47A6.48 6.48 0 016 24.52V12.48C6 8.9 8.9 6 12.47 6zM26.5 29.5a3 3 0 106 0 3 3 0 00-6 0zM17 35.75v-.5a1.25 1.25 0 112.5 0v.5a3.75 3.75 0 003.75 3.75h12.5a3.75 3.75 0 003.75-3.75v-12.5a3.75 3.75 0 00-3.75-3.75H23.91a5.5 5.5 0 11-.12-2.5h11.96C39.2 17 42 19.8 42 23.25v12.5C42 39.2 39.2 42 35.75 42h-12.5A6.25 6.25 0 0117 35.75zm1.5-20.25a3 3 0 100 6 3 3 0 000-6z" fill={primaryFill} /></svg>;
}

const ChannelShare48Regular = wrapIcon(rawSvg({}), 'ChannelShare48Regular');
export default ChannelShare48Regular;
      