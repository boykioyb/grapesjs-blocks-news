import type { Plugin } from 'grapesjs';
import loadBlocks from './blocks';

export type PluginOptions = {
  /**
   * Which blocks to add.
   * @default ['banner-post']
   */
  blocks?: string[];

  /**
   * Make use of flexbox for the grid
   * @default false
   */
  flexGrid?: boolean;

  /**
   * Classes prefix
   * @default 'gjs-'
   */
  stylePrefix?: string;

  /**
   * Use basic CSS for blocks
   * @default true
   */
  addBasicStyle?: boolean;

  /**
   * Blocks category name
   * @default 'Basic'
   */
  category?: string;

  /**
   * Banner post label
   * @default 'BannerPost'
   */
  labelBannerPost?: string;

  /**
   * Initial row height
   * @default 75
   */
  rowHeight?: number;
};

const plugin: Plugin<PluginOptions> = (editor, opts = {}) => {
  const config: Required<PluginOptions> = {
    blocks: [
      'banner-post',
    ],
    flexGrid: true,
    stylePrefix: 'gjs-',
    addBasicStyle: true,
    category: 'Post',
    labelBannerPost: 'Banner post',
    rowHeight: 75,
    ...opts
  };

  loadBlocks(editor, config);
};

export default plugin;
