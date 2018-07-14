import React from "React"

export default (props) => {
    return (
        <html>
            <head>
            <meta charset="UTF-8" />
                <title>{props.title}</title>
            </head>
            <body>
                <div id="app">{props.children}</div>
                <script id="qiita-data" type="text/plain" data-json={props.data}></script>
                <script src="./bundle.js" />
            </body>
        </html>
    );
};
