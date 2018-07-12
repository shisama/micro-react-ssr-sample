const React = require('react')
const { renderToString } = require('react-dom/server')


module.exports = async (req, res) => {
    return renderToString(React.createElement('div', {className: 'hello'}, 'Hello, World!'));
}