import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.66 4.17a2 2 0 10-2.83-2.83l-.7.71 2.82 2.83.7-.7zM5.13 11.7A5.52 5.52 0 0110.66 5L8.4 2.76 2.44 8.73a2.5 2.5 0 00-.66 1.16l-.57 2.3c-.09.36.24.69.6.6l2.3-.57c.38-.1.73-.28 1.02-.53zM10.5 15a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm-.9-6.4l-.9.9h1.55A2.75 2.75 0 0113 12.25v.25a.5.5 0 01-1 0v-.25c0-.97-.78-1.75-1.75-1.75H8.71l.9.9a.5.5 0 01-.71.7l-1.76-1.75a.5.5 0 010-.7L8.9 7.9a.5.5 0 11.7.7z" fill={primaryFill} /></svg>;
}

const EditArrowBack16Filled = wrapIcon(rawSvg({}), 'EditArrowBack16Filled');
export default EditArrowBack16Filled;
      