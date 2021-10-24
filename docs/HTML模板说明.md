# HTML模板说明

## meta 标签

初始化提供的模板 (`src/template/**/*.html`) 文件中, 仅保留了较为简单的 `<meta>` 标签, 以下是其他常用 `<meta>` 标签的说明列表，使用者可以按需修改模板文件

### 初始化模板中已包含

- `<meta charset="UTF-8" />` 规定 HTML 文档的字符编码
- `<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">` 规定网页的兼容性模式设置, content 值具体含义可以参考[这篇博客](https://blog.csdn.net/MEdwardM/article/details/52984648?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-4.control&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-4.control)
- `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no" />` 规定网页的视口大小, 显示比例, 是否可以用户缩放等

### 按需自定义的

- `<meta name="format-detection" content="telephone=no, email=no" />` 用于指定是否将网页内容中的手机号码或邮箱显示为拨号的超链接或邮箱的超链接
- `<meta name="keywords" content="" />` 网页关键字, 用于 SEO
- `<meta itemprop="name" content="" />` 网页信息, 用于 SEO 关于 itemprop 可以参考[这篇回答](https://stackoverflow.com/questions/29928974/what-is-the-purpose-of-meta-itemprop)
- `<meta name="description" itemprop="description" content="腾讯文档" />` 网页描述, 用于 SEO
- `<meta name="author" content="" />` 指定网页作者

> 除以上 meta 标签设置外, 如需增加额外功能, 可参考 [MDN 文档](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)

## EOF
