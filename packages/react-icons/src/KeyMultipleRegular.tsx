import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.32 2.01L10 2a4 4 0 00-3.84 5.13l-3.98 3.99a.6.6 0 00-.18.42v2.86c0 .33.27.6.6.6h2.8a.6.6 0 00.6-.6V13h1.9a.6.6 0 00.6-.6v-1.7l.73-.73c-.21-.26-.4-.54-.56-.84l-1 .99a.6.6 0 00-.17.42V12H5.6a.6.6 0 00-.6.6V14H3v-2.3L7.32 7.4l-.12-.3a3 3 0 011.96-3.97c.33-.42.72-.8 1.16-1.1zm3.18 4.24a.75.75 0 100-1.5.75.75 0 000 1.5zM9 6.5a4.5 4.5 0 117 3.74v2.05l.78.79a.6.6 0 010 .84L15.71 15l1.06 1.07a.6.6 0 01-.04.89l-2.36 1.88a.6.6 0 01-.74 0l-2.4-1.92a.6.6 0 01-.23-.47v-6.2A4.5 4.5 0 019 6.5zM13.5 3a3.5 3.5 0 00-1.75 6.53.5.5 0 01.25.43v6.3l2 1.6 1.75-1.4-1.03-1.04a.6.6 0 010-.84l1.07-1.08-.61-.62a.6.6 0 01-.18-.42v-2.5c0-.17.1-.34.25-.43A3.5 3.5 0 0013.5 3z" fill={primaryFill} /></svg>;
}

const KeyMultipleRegular = wrapIcon(rawSvg({}), 'KeyMultipleRegular');
export default KeyMultipleRegular;
      