module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "jasmine": true,
        "jquery": true
    },
    "globals": {
        "__dirname": true,
        "process": true,
    },
    "extends": ["eslint:recommended", "plugin:jasmine/recommended", "plugin:jasmine-jquery/recommended"],
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    },
    "plugins": [
        "jasmine",
        "jasmine-jquery"
    ],
};