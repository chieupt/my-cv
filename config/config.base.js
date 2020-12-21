const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    configureWebpack: {
        plugins: [
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: 'src/lib/core.js',
                        to: 'bundle'
                    }
                ]
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: 'src/lib/script.js',
                        to: 'bundle'
                    }
                ]
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: 'node_modules/jquery/dist/jquery.min.js',
                        to: 'lib/jQuery'
                    }
                ]
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: 'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
                        to: 'lib/bootstrap/js'
                    }
                ]
            }),
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: 'node_modules/bootstrap/dist/css/bootstrap.min.css',
                        to: 'lib/bootstrap/css'
                    }
                ]
            })
        ],
    }
}
