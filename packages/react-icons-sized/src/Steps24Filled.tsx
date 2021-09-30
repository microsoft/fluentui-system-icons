import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 3.38c0-.76.62-1.38 1.38-1.38h3.74c.76 0 1.38.62 1.38 1.38V9H17V3.5h-3.5v3.63c0 .75-.62 1.37-1.38 1.37H8.5v3.63c0 .75-.62 1.37-1.38 1.37H3.5V17H9v1.5H3.37c-.75 0-1.37-.62-1.37-1.38v-3.75c0-.75.62-1.37 1.38-1.37H7V8.37C7 7.63 7.62 7 8.38 7H12V3.37zm3 8c0-.76.62-1.38 1.38-1.38h3.75c.75 0 1.37.62 1.37 1.38v6.87c0 1.8-1.46 3.25-3.25 3.25h-6.88c-.75 0-1.37-.62-1.37-1.38v-3.75c0-.75.62-1.37 1.38-1.37H15v-3.63z" fill={primaryFill} /></svg>;
}

const Steps24Filled = wrapIcon(rawSvg({}), 'Steps24Filled');
export default Steps24Filled;
      