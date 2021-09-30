import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.41 3.12C2.15 3.52 2 4 2 4.5v2a.5.5 0 001 0v-2c0-.23.05-.45.15-.65l6.35 6.36V14H9a.5.5 0 100 1h2a.5.5 0 000-1h-.5v-2.8l5.52 5.52A2 2 0 0115 17h-1.5a.5.5 0 100 1H15c.65 0 1.25-.2 1.74-.55l.4.4a.5.5 0 00.71-.7l-.4-.41-.73-.72L6.03 5.32 3.85 3.15l-.73-.74-.27-.26a.5.5 0 10-.7.7l.26.27zM18 15a3 3 0 01-.1.78l-.9-.9V13.5a.5.5 0 111 0V15zm-7.5-9v2.38l-1-1V6H8.12l-1-1h6.38c.28 0 .5.22.5.5v1a.5.5 0 01-1 0V6h-2.5zm-4-3H5.12l-.97-.98L4.5 2h2a.5.5 0 010 1zM5 17a2 2 0 01-2-2v-1.5a.5.5 0 10-1 0V15a3 3 0 003 3h1.5a.5.5 0 000-1H5zM17 4.5c0-.83-.67-1.5-1.5-1.5h-2a.5.5 0 010-1h2A2.5 2.5 0 0118 4.5v2a.5.5 0 01-1 0v-2z" fill={primaryFill} /></svg>;
}

const ConvertToTypeOffRegular = wrapIcon(rawSvg({}), 'ConvertToTypeOffRegular');
export default ConvertToTypeOffRegular;
      