import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.5 3.25c.31 0 .59.2.7.5l3.64 10.5a.75.75 0 11-1.41.5l-.78-2.25h-4.59l-.86 2.27a.75.75 0 11-1.4-.54l3.98-10.5c.12-.3.4-.48.71-.48zM11.62 11h3.5l-1.68-4.8-1.82 4.8zM4.9 8.94a2.8 2.8 0 00-1.06.23.75.75 0 01-.68-1.34 4.26 4.26 0 011.69-.4c.63-.02 1.34.08 1.99.4 1.42.71 1.41 2.12 1.41 2.63v4.04a.75.75 0 01-1.5.06c-.87.53-1.89.85-2.94.57a2.61 2.61 0 01-.73-4.75c.78-.52 1.7-.66 2.53-.61a6 6 0 011.1.16.97.97 0 00-.55-.76c-.35-.18-.8-.25-1.26-.23zm1.85 2.56a4.51 4.51 0 00-1.22-.24c-.62-.03-1.2.09-1.61.36-.93.62-.65 1.8.27 2.06.75.2 1.67-.19 2.56-1V11.5z" fill={primaryFill} /></svg>;
}

const TextChangeCase20Filled = wrapIcon(rawSvg({}), 'TextChangeCase20Filled');
export default TextChangeCase20Filled;
      