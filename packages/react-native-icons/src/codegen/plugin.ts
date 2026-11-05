export interface FluentSvgPluginOptions {
  resizable: boolean;
  isColorIcon: boolean;
}

/** Babel plugin that turns the SVGR output root into a compact `FluentSvg` element. */
export function fluentSvgPlugin({ types: t }, { resizable, isColorIcon }: FluentSvgPluginOptions) {
  return {
    visitor: {
      JSXElement: {
        exit(path) {
          // Compact only the root after SVGR has normalized native elements and dimensions.
          if (!path.parentPath.isExpressionStatement()) {
            return;
          }

          const { openingElement, closingElement } = path.node;
          // useIconState always replaces the root fill with primaryFill, so a root fill (e.g. "none" on color icons) is dead code.
          openingElement.attributes = openingElement.attributes.filter((attribute) => attribute.name?.name !== 'fill');
          const inheritedFills: Array<[any, any]> = [];
          let canInheritFill = !isColorIcon;
          path.traverse({
            JSXOpeningElement(child) {
              // Canonical web SVGs keep XML namespaces, which react-native-svg does not accept.
              if (/^svg$/i.test(child.node.name.name)) {
                child.node.attributes = child.node.attributes.filter(
                  (attribute) => !['xmlns', 'xmlnsXlink'].includes(attribute.name?.name),
                );
              }
              if (
                child.node !== openingElement &&
                !['Path', 'Circle', 'Ellipse', 'Line', 'Polygon', 'Polyline', 'Rect'].includes(child.node.name.name)
              ) {
                canInheritFill = false;
              }
              for (const attribute of child.node.attributes) {
                if (attribute.name?.name === 'style') {
                  canInheritFill = false;
                }
                if (attribute.name?.name === 'fill') {
                  if (t.isIdentifier(attribute.value?.expression, { name: 'primaryFill' })) {
                    inheritedFills.push([child.node, attribute]);
                  } else {
                    canInheritFill = false;
                  }
                }
              }
            },
          });
          if (canInheritFill) {
            for (const [element, fill] of inheritedFills) {
              element.attributes = element.attributes.filter((attribute) => attribute !== fill);
            }
          }

          const getAttribute = (name) => openingElement.attributes.find((attribute) => attribute.name?.name === name);
          const width = getAttribute('width');
          const height = getAttribute('height');
          const square =
            t.isNumericLiteral(width?.value?.expression) &&
            t.isNumericLiteral(height?.value?.expression) &&
            width.value.expression.value === height.value.expression.value;
          const size = !resizable && square ? width.value.expression.value : undefined;

          // FluentSvg defaults resizable icons to 24x24 and sized icons to `size`.
          if (square && (!resizable || width.value.expression.value === 24)) {
            openingElement.attributes = openingElement.attributes.filter(
              (attribute) => attribute !== width && attribute !== height,
            );
            if (size !== undefined) {
              openingElement.attributes.unshift(t.jsxAttribute(t.jsxIdentifier('size'), width.value));
            }
          }

          const viewBox = getAttribute('viewBox');
          const defaultViewBox = [0, 0, size ?? 20, size ?? 20];
          const coordinates = t.isStringLiteral(viewBox?.value)
            ? viewBox.value.value
                .trim()
                .split(/[\s,]+/)
                .map(Number)
            : [];
          if (
            coordinates.length === 4 &&
            coordinates.every((coordinate, index) => coordinate === defaultViewBox[index])
          ) {
            openingElement.attributes = openingElement.attributes.filter((attribute) => attribute !== viewBox);
          }

          openingElement.name = t.jsxIdentifier('FluentSvg');
          if (closingElement) {
            closingElement.name = t.jsxIdentifier('FluentSvg');
          }
        },
      },
    },
  };
}
