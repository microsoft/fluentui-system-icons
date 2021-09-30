import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 3h-1A2.75 2.75 0 003 5.75v12.5A2.75 2.75 0 005.75 21H6v-6c0-1.24 1-2.25 2.25-2.25h7.35l1.8-1.79a3.3 3.3 0 013.6-.7V8.3c0-.87-.34-1.7-.95-2.3L18 3.95c-.6-.6-1.41-.94-2.26-.95v4.5c0 1.24-1 2.25-2.25 2.25H9c-1.24 0-2.25-1-2.25-2.25V3z" fill={primaryFill} /><path d="M14.1 14.25l-2.61 2.61c-.47.48-.8 1.07-.97 1.72l-.46 1.83c-.05.2-.07.4-.06.59H7.5v-6c0-.41.34-.75.75-.75h5.85z" fill={primaryFill} /><path d="M14.25 3v4.5c0 .41-.34.75-.75.75H9a.75.75 0 01-.75-.75V3h6z" fill={primaryFill} /><path d="M19.72 11c-.6 0-1.18.22-1.62.67l-5.9 5.9c-.35.35-.6.78-.71 1.25l-.46 1.83c-.2.8.52 1.52 1.32 1.32l1.83-.46c.47-.12.9-.36 1.25-.7l5.9-5.9A2.29 2.29 0 0019.72 11z" fill={primaryFill} /></svg>;
}

const SaveEdit24Filled = wrapIcon(rawSvg({}), 'SaveEdit24Filled');
export default SaveEdit24Filled;
      