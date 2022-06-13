import postcss from 'postcss'
import classesToMixins from 'postcss-classes-to-mixins'
import fs from 'fs'

const path = 'node_modules/animate.css/animate.css'

const css = fs.readFileSync(path)

postcss([
    classesToMixins({     // Object: options
        scss: 'animate.scss', // String: sass output
        less: 'animate.less',  // String: less output
        styl: 'animate.styl', // String: stylus output
        mixinsOnly: false // Defaults to false. true strips all non-classname selectors (like `body` etc.)
    })
]).process(css, { from: path })
    .then((done) => console.log('done!'))