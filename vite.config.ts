import { defineConfig } from 'vite'

import { jyPostcssViewport } from './src'

export default defineConfig({

    css: {
        postcss: {
            plugins: [
                jyPostcssViewport()
            ]
        }
    }
})