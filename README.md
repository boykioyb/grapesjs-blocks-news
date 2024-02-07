# GrapesJS Basic Blocks

This plugin contains some basic blocks for the GrapesJS editor

[Demo](http://grapesjs.com/demo.html)
<br/>

## Summary

- Plugin name: `bob-gjs-blocks-post`
- Blocks: `bannerPost`

## Options

| Option          | Description                      | Default                                                                                         |
| --------------- | -------------------------------- | ----------------------------------------------------------------------------------------------- |
| `blocks`        | Which blocks to add              | `['bannerPost']` (all) |
| `category`      | Category name                    | `Post`                                                                                         |
| `flexGrid`       | Make use of flexbox for the grid  | `false`                                                                                         |
| `stylePrefix`    | Classes prefix                    | `gjs-`                                                                                          |
| `addBasicStyle` | Use basic CSS for blocks         | `true`                                                                                          |
| `rowHeight`     | Initial height                   | `75`                                                                                            |
| `labelBannerPost`  | Banner post label                   | `Banner post`                                                                                      |

## Download

* CDN
  * `https://unpkg.com/bob-gjs-blocks-post`
* NPM
  * `npm i bob-gjs-blocks-post`
* GIT
  * `git clone https://github.com/boykioyb/grapesjs-blocks-post.git`

## Usage

Directly in the browser
```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet"/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/bob-gjs-blocks-post.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
    fromElement: 1,
    container: "#gjs",
    plugins: ["bob-gjs-blocks-post"],
    pluginsOpts: {
      "bob-gjs-blocks-post": {
        /* ...options */
      }
    }
  });
</script>
```

Modern javascript
```js
import grapesjs from 'grapesjs';
import plugin from 'bob-grapesjs-blocks-post';

const editor = grapesjs.init({
  container : '#gjs',
  // ...
  plugins: [plugin],
  pluginsOpts: {
    [plugin]: { /* options */ }
  }
  // or
  plugins: [
    editor => plugin(editor, { /* options */ }),
  ],
});
```

## Development

Clone the repository

```sh
$ git clone https://github.com/boykioyb/grapesjs-blocks-post
$ cd grapesjs-blocks-post
```

Install it

```sh
$ npm i
```

Start the dev server

```sh
$ npm start
```

Build before the commit. This will also increase the patch level version of the package

```sh
$ npm run build
```


## License

BSD 3-Clause
