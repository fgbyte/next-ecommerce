const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

// next.config.js
const withGoogleTagManager = require('next-plugin-google-tag-manager')
module.exports = withGoogleTagManager({
  gtmId: 'GTM-PJFKGZH',
})
