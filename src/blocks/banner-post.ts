import { BlockProperties, Editor, PluginOptions } from "grapesjs";

export default function (editor: Editor, opts: Required<PluginOptions>, rowAttr: object, colAttr: object, styleRow: string, styleClm: string) {

    const bm = editor.BlockManager;
    const { category, blocks, stylePrefix } = opts;

    const attrsToString = (attrs: Record<string, any>) => {
        const result = [];

        for (let key in attrs) {
            let value = attrs[key];
            const toParse = value instanceof Array || value instanceof Object;
            value = toParse ? JSON.stringify(value) : value;
            result.push(`${key}=${toParse ? `'${value}'` : `'${value}'`}`);
        }

        return result.length ? ` ${result.join(' ')}` : '';
    };


    const toAdd = (name: string) => blocks.indexOf(name) >= 0;
    const attrsRow = attrsToString(rowAttr);
    const attrsCell = attrsToString(colAttr);
    const commonBlockProps: Partial<BlockProperties> = {
        category,
        select: true,
    };


    const styleBannerPost = `
  .${stylePrefix}banner-post-item {
    position: relative;
  }
  .${stylePrefix}banner-post-item:hover  .${stylePrefix}banner-post-thumb img {
    transform: scale(1.1);
  }
  .${stylePrefix}banner-post-item img {
    max-width: 100%;
    -webkit-transition: -webkit-transform 1s ease;
    transition: -webkit-transform 1s ease;
    transition: transform 1s ease;
    transition: transform 1s ease, -webkit-transform 1s ease;
  }
  .${stylePrefix}banner-post-thumb {
    overflow: hidden;
    position: relative;
  }
 
  .${stylePrefix}banner-post-thumb::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    bottom: 0;
    background: linear-gradient(360deg, rgba(0, 5, 11, 0.89) 0%, rgba(10, 23, 41, 0.00) 100%);
    pointer-events: none;
  }
  .${stylePrefix}banner-post-item a, .${stylePrefix}banner-post-item button {
    color: #f4796c;
    outline: medium none;
    text-decoration: none;
  }
  .${stylePrefix}banner-post-item .${stylePrefix}post-tag {
    color: #fff;
    font-size: 13px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.78px;
    text-transform: uppercase;
    background: #f4796c;
    display: inline-block;
    border-radius: 3px;
    padding: 4px 10px;
    margin-bottom: 15px;
  }
  .${stylePrefix}banner-post-item:hover .${stylePrefix}post-title a {
    background-size: 100% 1px;
  }
  .${stylePrefix}post-tag:hover {
    color: #fff;
    background: #183354;
  }

  .${stylePrefix}banner-post-content .${stylePrefix}post-title {
    color: #fff;
    font-size: 28px;
    margin-bottom: 20px;
    line-height: 1.28;
    margin-top: 0;
  }
  .${stylePrefix}banner-post-content .${stylePrefix}post-title a:hover {
    color: #ffffff;
  }
  .${stylePrefix}banner-post-content .${stylePrefix}post-title a {
    background-size: 0 2px;
  }
  .${stylePrefix}post-title a {
    color: inherit;
    display: inline;
    padding-bottom: 0;
    -webkit-transition: background-size 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
    transition: background-size 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
    background-image: -webkit-gradient(linear, left top, left bottom, from(currentColor), color-stop(98%, currentColor));
    background-image: linear-gradient(to bottom, currentColor 0%, currentColor 98%);
    background-size: 0 1px;
    background-repeat: no-repeat;
    background-position: left 100%;
  }
  .${stylePrefix}blog-post-meta .${stylePrefix}list-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
  }
  .${stylePrefix}list-wrap {
    margin: 0px;
    padding: 0px;
  }
  .${stylePrefix}list-wrap li {
    list-style: none;
  }
  .${stylePrefix}blog-post-meta .${stylePrefix}list-wrap li {
    display: flex;
    align-items: center;
    color: #6d757f;
    font-size: 13px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: 0.52px;
    text-transform: uppercase;
    gap: 5px;
  }
  .${stylePrefix}blog-post-meta.${stylePrefix}white-blog-meta .${stylePrefix}list-wrap li {
    color: #bacce1;
  }
  .${stylePrefix}blog-post-meta .${stylePrefix}list-wrap li i {
    line-height: 0;
    font-size: 16px;
  }
  .${stylePrefix}blog-post-meta .${stylePrefix}list-wrap li a {
    color: #6d757f;
  }
  .${stylePrefix}blog-post-meta.white-blog-meta .${stylePrefix}list-wrap li a {
    color: #bacce1;
  }
  .${stylePrefix}banner-post-thumb img {
    height: 600px;
    width: 100%;
    object-fit: cover;
  }

  .${stylePrefix}banner-post-content {
    text-align: center;
    position: absolute;
    left: 100px;
    right: 100px;
    bottom: 50px;
  }
  @media (max-width: 1500px)
  {
    .${stylePrefix}banner-post-thumb img {
      height: 560px;
    }
    .${stylePrefix}banner-post-content {
      left: 60px;
      right: 60px;
      bottom: 40px;
    }
  }
  @media (max-width: 1199.98px)
  {
    .${stylePrefix}banner-post-content {
      left: 30px;
      right: 30px;
      bottom: 35px;
    }
    .${stylePrefix}banner-post-content .${stylePrefix}post-title br {
      display: none;
    }
  }
  @media (max-width: 991.98px)
  {
    .${stylePrefix}banner-post-thumb img {
      height: 500px;
    }
    .${stylePrefix}banner-post-content .${stylePrefix}post-title {
      font-size: 24px;
    }
  }
  
  @media (max-width: 767.98px)
  {
    .${stylePrefix}banner-post-content {
      left: 25px;
      right: 25px;
      bottom: 35px;
    }
  }
 
  `;
    toAdd('banner-post') &&
        bm.add('banner-post', {
            ...commonBlockProps,
            label: opts.labelBannerPost,
            media: `<svg viewBox="0 0 24 24">
      <path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/>
    </svg>`,
            content: `<div ${attrsRow}>
      <div ${attrsCell}>
          <div class="${stylePrefix}banner-post-item">
              <div class="${stylePrefix}banner-post-thumb">
                  <a href="blog-details.html"><img
                          src="https://themegenix.net/html/zaira/assets/img/blog/g_banner_post01.jpg" alt=""></a>
              </div>
              <div class="${stylePrefix}banner-post-content">
                  <a href="blog.html" class="${stylePrefix}post-tag">Fighter</a>
                  <h2 class="${stylePrefix}post-title"><a href="blog-details.html">Mobile Apple Planning Big Mac Redesign
                          <br> ander Nigh HalfMacShare</a></h2>
                  <div class="${stylePrefix}blog-post-meta ${stylePrefix}white-blog-meta">
                      <ul class="${stylePrefix}list-wrap">
                          <li><i class="${stylePrefix}flaticon-user"></i>by<a href="author.html">Admin</a></li>
                          <li><i class="${stylePrefix}flaticon-calendar"></i>27 August, 2024</li>
                          <li><i class="${stylePrefix}flaticon-history"></i>20 Mins</li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
      <div ${attrsCell}>
          <div class="${stylePrefix}banner-post-item">
              <div class="${stylePrefix}banner-post-thumb">
                  <a href="blog-details.html"><img src="https://themegenix.net/html/zaira/assets/img/blog/g_banner_post01.jpg"
                          alt=""></a>
              </div>
              <div class="${stylePrefix}banner-post-content">
                  <a href="blog.html" class="${stylePrefix}post-tag">Fighter</a>
                  <h2 class="${stylePrefix}post-title"><a href="blog-details.html">Mobile Apple Planning Big Mac Redesign
                          <br> ander Nigh HalfMacShare</a></h2>
                  <div class="${stylePrefix}blog-post-meta ${stylePrefix}white-blog-meta">
                      <ul class="${stylePrefix}list-wrap">
                          <li><i class="${stylePrefix}flaticon-user"></i>by<a href="author.html">Admin</a></li>
                          <li><i class="${stylePrefix}flaticon-calendar"></i>27 August, 2024</li>
                          <li><i class="${stylePrefix}flaticon-history"></i>20 Mins</li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
    </div>

    <style>
      ${styleRow}
      ${styleClm}
      ${styleBannerPost}
    </style>
      `
        });
}
