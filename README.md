[![Stories in Ready](https://badge.waffle.io/BreakOutEvent/breakout-cms.png?label=ready&title=Ready)](https://waffle.io/BreakOutEvent/breakout-cms)
[![GitHub forks](https://img.shields.io/github/forks/BreakOutEvent/breakout-cms.svg?style=flat-square)](https://github.com/BreakOutEvent/breakout-cms/network)
[![GitHub license](https://img.shields.io/badge/license-AGPL-blue.svg?style=flat-square)](https://raw.githubusercontent.com/BreakOutEvent/breakout-cms/master/LICENSE)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/BreakOutEvent/breakout-cms.svg?style=social)](https://twitter.com/BreakoutMunchen)
# *Break*Out CMS

Live visual editing for the [*Break*Out](http://www.break-out.org/) site.

### Usage

Clone the repository and run `npm i`, that will install the needed modules and build the cms into the `dist`-folder.

Now rename `app.config.js.sample` to `app.config.js` and put in a link to a running [***Break*Out-frontend**](https://github.com/BreakOutEvent/breakout-frontend) instance in it. After this you have to rebuild the app using `npm run build`.

For live editing run `npm run server` and for deployment run  `npm run build` to build the cms again.

*Other npm tasks are currently out of function*

### Issues

Please report issues here on the [issues page](https://github.com/BreakOutEvent/breakout-cms/issues) or via [waffle.io](https://waffle.io/BreakOutEvent/breakout-cms).