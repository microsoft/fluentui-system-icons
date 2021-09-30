import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.5 10.5a8.5 8.5 0 10-17 0 8.5 8.5 0 0017 0zm-7.03 5.37c-.66 1.42-1.29 1.63-1.47 1.63-.18 0-.8-.21-1.47-1.63-.3-.65-.57-1.45-.75-2.37h4.44c-.18.92-.44 1.72-.75 2.37zM9.5 10.5c0-.52.02-1.02.07-1.5h4.86a16.42 16.42 0 010 3H9.57c-.05-.48-.07-.98-.07-1.5zm5.07 6.51c.52-.93.93-2.13 1.17-3.51h2.59a7.02 7.02 0 01-3.76 3.51zM15.94 12a17.98 17.98 0 000-3h2.9a7.03 7.03 0 010 3h-2.9zM5.16 12a7.03 7.03 0 010-3h2.9a17.98 17.98 0 000 3h-2.9zm3.1 1.5c.24 1.38.65 2.58 1.17 3.51a7.02 7.02 0 01-3.76-3.51h2.59zm5.96-6H9.78c.18-.92.44-1.72.75-2.37C11.19 3.7 11.82 3.5 12 3.5c.18 0 .8.21 1.47 1.63.3.65.57 1.45.75 2.37zm4.1 0h-2.58a11.34 11.34 0 00-1.17-3.51c1.65.65 3 1.91 3.76 3.51zm-10.06 0H5.67a7.02 7.02 0 013.76-3.51c-.52.93-.93 2.13-1.17 3.51zM4 16h.25c.4.55.84 1.05 1.33 1.5H4.57l-.83 3h16.52l-.83-3h-1c.48-.45.93-.95 1.32-1.5H20c.34 0 .63.22.72.55l1.25 4.5a.75.75 0 01-.72.95H2.75a.75.75 0 01-.72-.95l1.25-4.5A.75.75 0 014 16z" fill={primaryFill} /></svg>;
}

const GlobeSurface24Regular = wrapIcon(rawSvg({}), 'GlobeSurface24Regular');
export default GlobeSurface24Regular;
      