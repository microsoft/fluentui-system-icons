import * as React from 'react';
import * as fontsModule from '@fluentui/react-icons/lib/fonts';
import * as svgModule from '@fluentui/react-icons/lib/svg';
import { type FluentIcon } from '@fluentui/react-icons/svg';
import { type FluentFontIcon } from '@fluentui/react-icons/fonts';

import { IconCell } from './shared';

const fontComponents = filterModuleImports(fontsModule);
const svgComponents = filterModuleImports(svgModule);

export function All() {
  const allIconNames = Array.from(new Set([...Object.keys(fontComponents), ...Object.keys(svgComponents)])).sort();

  console.log('Total unique icons', allIconNames.length);

  return (
    <>
      {allIconNames.map((name) => (
        <IconCell
          FontIcon={fontComponents[name] as FluentFontIcon}
          SvgIcon={svgComponents[name] as FluentIcon}
          name={name}
          key={name}
        />
      ))}
    </>
  );
}

function filterModuleImports(mod: Record<string, unknown>): Record<string, React.ComponentType> {
  const components: Record<string, React.ComponentType> = {};

  for (const [name, possibleComponent] of Object.entries(mod)) {
    // Check if name is in PascalCase (starts with uppercase letter)
    if (name.charAt(0) !== name.charAt(0).toUpperCase()) {
      continue;
    }

    // Check if it's a React component (function component or forwardRef)
    if (isReactComponent(possibleComponent)) {
      components[name] = possibleComponent as React.ComponentType;
    }
  }

  return components;
}

function isReactComponent(value: unknown): value is React.ComponentType {
  // Check if it's a function (functional component)
  if (typeof value === 'function') {
    return true;
  }

  // Check if it's a React.forwardRef component
  if (value && typeof value === 'object') {
    const obj = value as any;

    // React.forwardRef components have a specific $$typeof symbol
    if (obj.$$typeof === Symbol.for('react.forward_ref')) {
      return true;
    }

    // React.memo wrapped components
    if (obj.$$typeof === Symbol.for('react.memo')) {
      return true;
    }
  }

  return false;
}
