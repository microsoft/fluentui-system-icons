// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// @ts-check

/** @type {import('svgo').CustomPlugin} */
module.exports = {
  name: 'removeFullViewBoxClip',
  description: 'Remove redundant viewport clips before their rectangles become paths.',
  fn: (root, _params, info) => {
    if (info.path && /_\d+_color(?:_[a-z][a-z0-9_]*)?\.svg$/i.test(info.path)) return;
    /** @type {import('svgo').XastElement[]} */
    const elements = [];
    /** @param {import('svgo').XastRoot | import('svgo').XastElement} node */
    function collect(node) {
      for (const child of node.children) {
        if (child.type === 'element') {
          elements.push(child);
          collect(child);
        }
      }
    }
    collect(root);
    const svg = elements[0];
    if (
      !svg ||
      svg.name !== 'svg' ||
      elements.some((node) => node.name === 'style' || node.name.startsWith('animate') || node.name === 'set') ||
      Object.keys(svg.attributes).some((attr) => !['xmlns', 'width', 'height', 'viewBox', 'fill'].includes(attr))
    ) {
      return;
    }
    const viewBox = svg.attributes.viewBox
      ?.trim()
      .split(/[\s,]+/)
      .map(Number);
    if (
      !viewBox ||
      viewBox.length !== 4 ||
      !viewBox.every(Number.isFinite) ||
      viewBox[2] <= 0 ||
      viewBox[3] <= 0 ||
      Number(svg.attributes.width) !== viewBox[2] ||
      Number(svg.attributes.height) !== viewBox[3]
    ) {
      return;
    }

    for (const defs of svg.children) {
      if (defs.type !== 'element' || defs.name !== 'defs' || Object.keys(defs.attributes).length) continue;
      defs.children = defs.children.filter((clip) => {
        if (
          clip.type !== 'element' ||
          clip.name !== 'clipPath' ||
          !clip.attributes.id ||
          Object.keys(clip.attributes).some((attr) => !['id', 'clipPathUnits'].includes(attr)) ||
          (clip.attributes.clipPathUnits && clip.attributes.clipPathUnits !== 'userSpaceOnUse') ||
          clip.children.length !== 1
        ) {
          return true;
        }
        const rect = clip.children[0];
        if (
          rect.type !== 'element' ||
          rect.name !== 'rect' ||
          rect.children.length ||
          Object.keys(rect.attributes).some((attr) => !['x', 'y', 'width', 'height', 'fill'].includes(attr))
        ) {
          return true;
        }
        const bounds = ['x', 'y', 'width', 'height'].map((attr) => rect.attributes[attr] ?? '0');
        if (
          !bounds.every((value) => /^[+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?$/i.test(value)) ||
          !bounds.every((value, index) => Number(value) === viewBox[index])
        ) {
          return true;
        }

        const id = clip.attributes.id;
        if (elements.filter((node) => node.attributes.id === id).length !== 1) return true;
        /** @type {import('svgo').XastElement[]} */
        const consumers = [];
        for (const node of elements) {
          for (const [attr, value] of Object.entries(node.attributes)) {
            // Encoded URLs and CSS escapes need reference resolution we do not attempt here.
            if (/[%\\]/.test(value)) return true;
            if (!value.includes(`#${id}`)) continue;
            // Only direct, untransformed groups share the root viewBox coordinate system.
            if (
              attr !== 'clip-path' ||
              value !== `url(#${id})` ||
              node.name !== 'g' ||
              !svg.children.includes(node) ||
              Object.keys(node.attributes).length !== 1
            ) {
              return true;
            }
            consumers.push(node);
          }
        }
        if (!consumers.length) return true;
        for (const node of consumers) delete node.attributes['clip-path'];
        return false;
      });
    }
  },
};
