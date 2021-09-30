import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11.75 3.25c.41 0 .75.34.75.75v4.66C13 8.24 13.6 8 14.25 8c1.66 0 3 1.57 3 3.5s-1.34 3.5-3 3.5c-.65 0-1.26-.24-1.75-.66v.16a.75.75 0 01-1.5 0V4c0-.41.34-.75.75-.75zm2.5 10.25c.62 0 1.5-.67 1.5-2s-.88-2-1.5-2-1.5.67-1.5 2 .88 2 1.5 2zm-8.6-4.56a2.8 2.8 0 00-1.06.23.75.75 0 01-.68-1.34 4.26 4.26 0 011.69-.4c.63-.02 1.34.08 1.99.4C9 8.54 9 9.95 9 10.46v4.04a.75.75 0 01-1.5.06c-.87.53-1.89.85-2.94.57a2.61 2.61 0 01-.73-4.75c.78-.52 1.7-.66 2.53-.61a6 6 0 011.1.16.97.97 0 00-.55-.76c-.35-.18-.8-.25-1.26-.23zM7.5 11.5a4.5 4.5 0 00-1.22-.24c-.62-.03-1.2.09-1.61.36-.93.62-.65 1.8.27 2.06.75.2 1.67-.19 2.56-1V11.5z" fill={primaryFill} /></svg>;
}

const TextCaseLowercase20Filled = wrapIcon(rawSvg({}), 'TextCaseLowercase20Filled');
export default TextCaseLowercase20Filled;
      