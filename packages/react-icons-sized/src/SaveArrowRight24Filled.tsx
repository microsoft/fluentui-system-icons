import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 3h-1A2.75 2.75 0 003 5.75v12.5A2.75 2.75 0 005.75 21H6v-6c0-1.24 1-2.25 2.25-2.25h4.81a6.48 6.48 0 017.94-.73V8.3c0-.87-.34-1.7-.95-2.3L18 3.95c-.6-.6-1.41-.94-2.26-.95v4.5c0 1.24-1 2.25-2.25 2.25H9c-1.24 0-2.25-1-2.25-2.25V3zm1.5 11.25h3.62a6.47 6.47 0 00.15 6.75H7.5v-6c0-.41.34-.75.75-.75zm6-11.25v4.5c0 .41-.34.75-.75.75H9a.75.75 0 01-.75-.75V3h6zM23 17.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-8.5-.5a.5.5 0 000 1h4.8l-1.65 1.65a.5.5 0 00.7.7l2.5-2.5a.5.5 0 000-.7l-2.5-2.5a.5.5 0 00-.7.7L19.29 17H14.5z" fill={primaryFill} /></svg>;
}

const SaveArrowRight24Filled = wrapIcon(rawSvg({}), 'SaveArrowRight24Filled');
export default SaveArrowRight24Filled;
      