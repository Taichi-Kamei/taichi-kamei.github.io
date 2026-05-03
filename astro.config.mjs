// @ts-check
import { defineConfig } from 'astro/config';
import { visit } from 'unist-util-visit';

const MAX_CAPTION_LEN = 60;

function rehypeImageCaptions() {
  return (tree) => {
    visit(tree, 'element', (node, index, parent) => {
      if (node.tagName !== 'img' || !parent) return;
      const alt = node.properties?.alt;
      if (!alt || typeof alt !== 'string' || alt.length > MAX_CAPTION_LEN) return;

      const figure = {
        type: 'element',
        tagName: 'figure',
        properties: {},
        children: [
          node,
          {
            type: 'element',
            tagName: 'figcaption',
            properties: {},
            children: [{ type: 'text', value: alt }],
          },
        ],
      };

      parent.children[index] = figure;
    });
  };
}

export default defineConfig({
  markdown: {
    rehypePlugins: [rehypeImageCaptions],
  },
});
