import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.85 2.15a.5.5 0 10-.7.7l5.53 5.53-4.04 4.04-.12.13a2 2 0 00-.4.76l-1.1 4.06-.02.08a.5.5 0 00.63.53l4.06-1.1.16-.06a2 2 0 00.72-.46l4.04-4.04 5.54 5.53a.5.5 0 00.7-.7l-15-15zm8.06 9.46l-4.04 4.04-.1.09-.1.07a1 1 0 01-.25.1l-3.2.88.87-3.22.04-.12a1 1 0 01.22-.32l4.03-4.04 2.53 2.52zm4-4l-2.59 2.59.7.7 4.16-4.15.13-.14a2.78 2.78 0 00-4.06-3.8L9.08 6.98l.7.7 2.6-2.58 2.52 2.52zm1.56-4.09l.11.12c.59.7.55 1.75-.1 2.4l-.87.87-2.52-2.52.86-.87.12-.1c.7-.59 1.75-.55 2.4.1z" fill={primaryFill} /></svg>;
}

const EditOffRegular = wrapIcon(rawSvg({}), 'EditOffRegular');
export default EditOffRegular;
      