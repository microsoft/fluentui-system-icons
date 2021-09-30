import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 3.38c0-.76.62-1.38 1.38-1.38h3.74c.76 0 1.38.62 1.38 1.38V9H17V3.5h-3.5v3.63c0 .75-.62 1.37-1.38 1.37H8.5v3.63c0 .75-.62 1.37-1.38 1.37H3.5V17H9v1.5H3.37c-.75 0-1.37-.62-1.37-1.38v-3.75c0-.75.62-1.37 1.38-1.37H7V8.37C7 7.63 7.62 7 8.38 7H12V3.37zM16.38 10c-.76 0-1.38.62-1.38 1.38V15h-3.63c-.75 0-1.37.62-1.37 1.38v3.75c0 .75.62 1.37 1.38 1.37h6.87c1.8 0 3.25-1.46 3.25-3.25v-6.88c0-.75-.62-1.37-1.38-1.37h-3.75zm.12 5.13V11.5H20v6.75c0 .97-.78 1.75-1.75 1.75H11.5v-3.5h3.63c.75 0 1.37-.62 1.37-1.38z" fill={primaryFill} /></svg>;
}

const Steps24Regular = wrapIcon(rawSvg({}), 'Steps24Regular');
export default Steps24Regular;
      