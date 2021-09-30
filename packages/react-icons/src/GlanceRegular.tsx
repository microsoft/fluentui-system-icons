import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.5 3C3.67 3 3 3.67 3 4.5v5c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-5C9 3.67 8.33 3 7.5 3h-3zM4 4.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-5zM12.5 9c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-3zm-.5 1.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v5a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-5zm-1-6c0-.83.67-1.5 1.5-1.5h3c.83 0 1.5.67 1.5 1.5v1c0 .83-.67 1.5-1.5 1.5h-3A1.5 1.5 0 0111 5.5v-1zm1.5-.5a.5.5 0 00-.5.5v1c0 .28.22.5.5.5h3a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-3zm-8 9c-.83 0-1.5.67-1.5 1.5v1c0 .83.67 1.5 1.5 1.5h3c.83 0 1.5-.67 1.5-1.5v-1c0-.83-.67-1.5-1.5-1.5h-3zM4 14.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5v1a.5.5 0 01-.5.5h-3a.5.5 0 01-.5-.5v-1z" fill={primaryFill} /></svg>;
}

const GlanceRegular = wrapIcon(rawSvg({}), 'GlanceRegular');
export default GlanceRegular;
      