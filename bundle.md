
```
// app.js
const express = require('express')
const app = express()
const fs = require('fs')

app.use(express.static('dist'))
app.all('/*', function (req, res, next) {
  let path = req.path
  console.log(path)
  path = path.replace(/\/$/, '')
  path = './mock' + path + '.json'
  const data = fs.readFileSync(path, 'utf-8')
  console.log(data)
  res.json(JSON.parse(data))
})

app.listen(4000, () => console.log('Example app listening on port 4000!'))

```
__SEPARATOR__
```
// babel.config.js
module.exports = {
  presets: [
    '@vue/app'
  ]
}

```
__SEPARATOR__
```
// package-lock.json
{
  "name": "word-mark",
  "version": "0.1.0",
  "lockfileVersion": 1,
  "requires": true,
  "dependencies": {
    "@babel/code-frame": {
      "version": "7.5.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/code-frame/-/code-frame-7.5.5.tgz",
      "integrity": "sha512-27d4lZoomVyo51VegxI20xZPuSHusqbQag/ztrBC7wegWoQ1nLREPVSKSW8byhTlzTKyNE4ifaTA6lCp7JjpFw==",
      "dev": true,
      "requires": {
        "@babel/highlight": "^7.0.0"
      }
    },
    "@babel/core": {
      "version": "7.7.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/core/-/core-7.7.5.tgz",
      "integrity": "sha512-M42+ScN4+1S9iB6f+TL7QBpoQETxbclx+KNoKJABghnKYE+fMzSGqst0BZJc8CpI625bwPwYgUyRvxZ+0mZzpw==",
      "dev": true,
      "requires": {
        "@babel/code-frame": "^7.5.5",
        "@babel/generator": "^7.7.4",
        "@babel/helpers": "^7.7.4",
        "@babel/parser": "^7.7.5",
        "@babel/template": "^7.7.4",
        "@babel/traverse": "^7.7.4",
        "@babel/types": "^7.7.4",
        "convert-source-map": "^1.7.0",
        "debug": "^4.1.0",
        "json5": "^2.1.0",
        "lodash": "^4.17.13",
        "resolve": "^1.3.2",
        "semver": "^5.4.1",
        "source-map": "^0.5.0"
      }
    },
    "@babel/generator": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/generator/-/generator-7.7.4.tgz",
      "integrity": "sha512-m5qo2WgdOJeyYngKImbkyQrnUN1mPceaG5BV+G0E3gWsa4l/jCSryWJdM2x8OuGAOyh+3d5pVYfZWCiNFtynxg==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.7.4",
        "jsesc": "^2.5.1",
        "lodash": "^4.17.13",
        "source-map": "^0.5.0"
      }
    },
    "@babel/helper-annotate-as-pure": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/helper-annotate-as-pure/-/helper-annotate-as-pure-7.7.4.tgz",
      "integrity": "sha512-2BQmQgECKzYKFPpiycoF9tlb5HA4lrVyAmLLVK177EcQAqjVLciUb2/R+n1boQ9y5ENV3uz2ZqiNw7QMBBw1Og==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.7.4"
      }
    },
    "@babel/helper-builder-binary-assignment-operator-visitor": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/helper-builder-binary-assignment-operator-visitor/-/helper-builder-binary-assignment-operator-visitor-7.7.4.tgz",
      "integrity": "sha512-Biq/d/WtvfftWZ9Uf39hbPBYDUo986m5Bb4zhkeYDGUllF43D+nUe5M6Vuo6/8JDK/0YX/uBdeoQpyaNhNugZQ==",
      "dev": true,
      "requires": {
        "@babel/helper-explode-assignable-expression": "^7.7.4",
        "@babel/types": "^7.7.4"
      }
    },
    "@babel/helper-call-delegate": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/helper-call-delegate/-/helper-call-delegate-7.7.4.tgz",
      "integrity": "sha512-8JH9/B7J7tCYJ2PpWVpw9JhPuEVHztagNVuQAFBVFYluRMlpG7F1CgKEgGeL6KFqcsIa92ZYVj6DSc0XwmN1ZA==",
      "dev": true,
      "requires": {
        "@babel/helper-hoist-variables": "^7.7.4",
        "@babel/traverse": "^7.7.4",
        "@babel/types": "^7.7.4"
      }
    },
    "@babel/helper-create-class-features-plugin": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/helper-create-class-features-plugin/-/helper-create-class-features-plugin-7.7.4.tgz",
      "integrity": "sha512-l+OnKACG4uiDHQ/aJT8dwpR+LhCJALxL0mJ6nzjB25e5IPwqV1VOsY7ah6UB1DG+VOXAIMtuC54rFJGiHkxjgA==",
      "dev": true,
      "requires": {
        "@babel/helper-function-name": "^7.7.4",
        "@babel/helper-member-expression-to-functions": "^7.7.4",
        "@babel/helper-optimise-call-expression": "^7.7.4",
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/helper-replace-supers": "^7.7.4",
        "@babel/helper-split-export-declaration": "^7.7.4"
      }
    },
    "@babel/helper-create-regexp-features-plugin": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/helper-create-regexp-features-plugin/-/helper-create-regexp-features-plugin-7.7.4.tgz",
      "integrity": "sha512-Mt+jBKaxL0zfOIWrfQpnfYCN7/rS6GKx6CCCfuoqVVd+17R8zNDlzVYmIi9qyb2wOk002NsmSTDymkIygDUH7A==",
      "dev": true,
      "requires": {
        "@babel/helper-regex": "^7.4.4",
        "regexpu-core": "^4.6.0"
      }
    },
    "@babel/helper-define-map": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/helper-define-map/-/helper-define-map-7.7.4.tgz",
      "integrity": "sha512-v5LorqOa0nVQUvAUTUF3KPastvUt/HzByXNamKQ6RdJRTV7j8rLL+WB5C/MzzWAwOomxDhYFb1wLLxHqox86lg==",
      "dev": true,
      "requires": {
        "@babel/helper-function-name": "^7.7.4",
        "@babel/types": "^7.7.4",
        "lodash": "^4.17.13"
      }
    },
    "@babel/helper-explode-assignable-expression": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/helper-explode-assignable-expression/-/helper-explode-assignable-expression-7.7.4.tgz",
      "integrity": "sha512-2/SicuFrNSXsZNBxe5UGdLr+HZg+raWBLE9vC98bdYOKX/U6PY0mdGlYUJdtTDPSU0Lw0PNbKKDpwYHJLn2jLg==",
      "dev": true,
      "requires": {
        "@babel/traverse": "^7.7.4",
        "@babel/types": "^7.7.4"
      }
    },
    "@babel/helper-function-name": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/helper-function-name/-/helper-function-name-7.7.4.tgz",
      "integrity": "sha512-AnkGIdiBhEuiwdoMnKm7jfPfqItZhgRaZfMg1XX3bS25INOnLPjPG1Ppnajh8eqgt5kPJnfqrRHqFqmjKDZLzQ==",
      "dev": true,
      "requires": {
        "@babel/helper-get-function-arity": "^7.7.4",
        "@babel/template": "^7.7.4",
        "@babel/types": "^7.7.4"
      }
    },
    "@babel/helper-get-function-arity": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/helper-get-function-arity/-/helper-get-function-arity-7.7.4.tgz",
      "integrity": "sha512-QTGKEdCkjgzgfJ3bAyRwF4yyT3pg+vDgan8DSivq1eS0gwi+KGKE5x8kRcbeFTb/673mkO5SN1IZfmCfA5o+EA==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.7.4"
      }
    },
    "@babel/helper-hoist-variables": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/helper-hoist-variables/-/helper-hoist-variables-7.7.4.tgz",
      "integrity": "sha512-wQC4xyvc1Jo/FnLirL6CEgPgPCa8M74tOdjWpRhQYapz5JC7u3NYU1zCVoVAGCE3EaIP9T1A3iW0WLJ+reZlpQ==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.7.4"
      }
    },
    "@babel/helper-member-expression-to-functions": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/helper-member-expression-to-functions/-/helper-member-expression-to-functions-7.7.4.tgz",
      "integrity": "sha512-9KcA1X2E3OjXl/ykfMMInBK+uVdfIVakVe7W7Lg3wfXUNyS3Q1HWLFRwZIjhqiCGbslummPDnmb7vIekS0C1vw==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.7.4"
      }
    },
    "@babel/helper-module-imports": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/helper-module-imports/-/helper-module-imports-7.7.4.tgz",
      "integrity": "sha512-dGcrX6K9l8258WFjyDLJwuVKxR4XZfU0/vTUgOQYWEnRD8mgr+p4d6fCUMq/ys0h4CCt/S5JhbvtyErjWouAUQ==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.7.4"
      }
    },
    "@babel/helper-module-transforms": {
      "version": "7.7.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/helper-module-transforms/-/helper-module-transforms-7.7.5.tgz",
      "integrity": "sha512-A7pSxyJf1gN5qXVcidwLWydjftUN878VkalhXX5iQDuGyiGK3sOrrKKHF4/A4fwHtnsotv/NipwAeLzY4KQPvw==",
      "dev": true,
      "requires": {
        "@babel/helper-module-imports": "^7.7.4",
        "@babel/helper-simple-access": "^7.7.4",
        "@babel/helper-split-export-declaration": "^7.7.4",
        "@babel/template": "^7.7.4",
        "@babel/types": "^7.7.4",
        "lodash": "^4.17.13"
      }
    },
    "@babel/helper-optimise-call-expression": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/helper-optimise-call-expression/-/helper-optimise-call-expression-7.7.4.tgz",
      "integrity": "sha512-VB7gWZ2fDkSuqW6b1AKXkJWO5NyNI3bFL/kK79/30moK57blr6NbH8xcl2XcKCwOmJosftWunZqfO84IGq3ZZg==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.7.4"
      }
    },
    "@babel/helper-plugin-utils": {
      "version": "7.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/helper-plugin-utils/-/helper-plugin-utils-7.0.0.tgz",
      "integrity": "sha512-CYAOUCARwExnEixLdB6sDm2dIJ/YgEAKDM1MOeMeZu9Ld/bDgVo8aiWrXwcY7OBh+1Ea2uUcVRcxKk0GJvW7QA==",
      "dev": true
    },
    "@babel/helper-regex": {
      "version": "7.5.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/helper-regex/-/helper-regex-7.5.5.tgz",
      "integrity": "sha512-CkCYQLkfkiugbRDO8eZn6lRuR8kzZoGXCg3149iTk5se7g6qykSpy3+hELSwquhu+TgHn8nkLiBwHvNX8Hofcw==",
      "dev": true,
      "requires": {
        "lodash": "^4.17.13"
      }
    },
    "@babel/helper-remap-async-to-generator": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/helper-remap-async-to-generator/-/helper-remap-async-to-generator-7.7.4.tgz",
      "integrity": "sha512-Sk4xmtVdM9sA/jCI80f+KS+Md+ZHIpjuqmYPk1M7F/upHou5e4ReYmExAiu6PVe65BhJPZA2CY9x9k4BqE5klw==",
      "dev": true,
      "requires": {
        "@babel/helper-annotate-as-pure": "^7.7.4",
        "@babel/helper-wrap-function": "^7.7.4",
        "@babel/template": "^7.7.4",
        "@babel/traverse": "^7.7.4",
        "@babel/types": "^7.7.4"
      }
    },
    "@babel/helper-replace-supers": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/helper-replace-supers/-/helper-replace-supers-7.7.4.tgz",
      "integrity": "sha512-pP0tfgg9hsZWo5ZboYGuBn/bbYT/hdLPVSS4NMmiRJdwWhP0IznPwN9AE1JwyGsjSPLC364I0Qh5p+EPkGPNpg==",
      "dev": true,
      "requires": {
        "@babel/helper-member-expression-to-functions": "^7.7.4",
        "@babel/helper-optimise-call-expression": "^7.7.4",
        "@babel/traverse": "^7.7.4",
        "@babel/types": "^7.7.4"
      }
    },
    "@babel/helper-simple-access": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/helper-simple-access/-/helper-simple-access-7.7.4.tgz",
      "integrity": "sha512-zK7THeEXfan7UlWsG2A6CI/L9jVnI5+xxKZOdej39Y0YtDYKx9raHk5F2EtK9K8DHRTihYwg20ADt9S36GR78A==",
      "dev": true,
      "requires": {
        "@babel/template": "^7.7.4",
        "@babel/types": "^7.7.4"
      }
    },
    "@babel/helper-split-export-declaration": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/helper-split-export-declaration/-/helper-split-export-declaration-7.7.4.tgz",
      "integrity": "sha512-guAg1SXFcVr04Guk9eq0S4/rWS++sbmyqosJzVs8+1fH5NI+ZcmkaSkc7dmtAFbHFva6yRJnjW3yAcGxjueDug==",
      "dev": true,
      "requires": {
        "@babel/types": "^7.7.4"
      }
    },
    "@babel/helper-wrap-function": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/helper-wrap-function/-/helper-wrap-function-7.7.4.tgz",
      "integrity": "sha512-VsfzZt6wmsocOaVU0OokwrIytHND55yvyT4BPB9AIIgwr8+x7617hetdJTsuGwygN5RC6mxA9EJztTjuwm2ofg==",
      "dev": true,
      "requires": {
        "@babel/helper-function-name": "^7.7.4",
        "@babel/template": "^7.7.4",
        "@babel/traverse": "^7.7.4",
        "@babel/types": "^7.7.4"
      }
    },
    "@babel/helpers": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/helpers/-/helpers-7.7.4.tgz",
      "integrity": "sha512-ak5NGZGJ6LV85Q1Zc9gn2n+ayXOizryhjSUBTdu5ih1tlVCJeuQENzc4ItyCVhINVXvIT/ZQ4mheGIsfBkpskg==",
      "dev": true,
      "requires": {
        "@babel/template": "^7.7.4",
        "@babel/traverse": "^7.7.4",
        "@babel/types": "^7.7.4"
      }
    },
    "@babel/highlight": {
      "version": "7.5.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/highlight/-/highlight-7.5.0.tgz",
      "integrity": "sha512-7dV4eu9gBxoM0dAnj/BCFDW9LFU0zvTrkq0ugM7pnHEgguOEeOz1so2ZghEdzviYzQEED0r4EAgpsBChKy1TRQ==",
      "dev": true,
      "requires": {
        "chalk": "^2.0.0",
        "esutils": "^2.0.2",
        "js-tokens": "^4.0.0"
      }
    },
    "@babel/parser": {
      "version": "7.7.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/parser/-/parser-7.7.5.tgz",
      "integrity": "sha512-KNlOe9+/nk4i29g0VXgl8PEXIRms5xKLJeuZ6UptN0fHv+jDiriG+y94X6qAgWTR0h3KaoM1wK5G5h7MHFRSig==",
      "dev": true
    },
    "@babel/plugin-proposal-async-generator-functions": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-proposal-async-generator-functions/-/plugin-proposal-async-generator-functions-7.7.4.tgz",
      "integrity": "sha512-1ypyZvGRXriY/QP668+s8sFr2mqinhkRDMPSQLNghCQE+GAkFtp+wkHVvg2+Hdki8gwP+NFzJBJ/N1BfzCCDEw==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/helper-remap-async-to-generator": "^7.7.4",
        "@babel/plugin-syntax-async-generators": "^7.7.4"
      }
    },
    "@babel/plugin-proposal-class-properties": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-proposal-class-properties/-/plugin-proposal-class-properties-7.7.4.tgz",
      "integrity": "sha512-EcuXeV4Hv1X3+Q1TsuOmyyxeTRiSqurGJ26+I/FW1WbymmRRapVORm6x1Zl3iDIHyRxEs+VXWp6qnlcfcJSbbw==",
      "dev": true,
      "requires": {
        "@babel/helper-create-class-features-plugin": "^7.7.4",
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-proposal-decorators": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-proposal-decorators/-/plugin-proposal-decorators-7.7.4.tgz",
      "integrity": "sha512-GftcVDcLCwVdzKmwOBDjATd548+IE+mBo7ttgatqNDR7VG7GqIuZPtRWlMLHbhTXhcnFZiGER8iIYl1n/imtsg==",
      "dev": true,
      "requires": {
        "@babel/helper-create-class-features-plugin": "^7.7.4",
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/plugin-syntax-decorators": "^7.7.4"
      }
    },
    "@babel/plugin-proposal-json-strings": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-proposal-json-strings/-/plugin-proposal-json-strings-7.7.4.tgz",
      "integrity": "sha512-wQvt3akcBTfLU/wYoqm/ws7YOAQKu8EVJEvHip/mzkNtjaclQoCCIqKXFP5/eyfnfbQCDV3OLRIK3mIVyXuZlw==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/plugin-syntax-json-strings": "^7.7.4"
      }
    },
    "@babel/plugin-proposal-object-rest-spread": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-proposal-object-rest-spread/-/plugin-proposal-object-rest-spread-7.7.4.tgz",
      "integrity": "sha512-rnpnZR3/iWKmiQyJ3LKJpSwLDcX/nSXhdLk4Aq/tXOApIvyu7qoabrige0ylsAJffaUC51WiBu209Q0U+86OWQ==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/plugin-syntax-object-rest-spread": "^7.7.4"
      }
    },
    "@babel/plugin-proposal-optional-catch-binding": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-proposal-optional-catch-binding/-/plugin-proposal-optional-catch-binding-7.7.4.tgz",
      "integrity": "sha512-DyM7U2bnsQerCQ+sejcTNZh8KQEUuC3ufzdnVnSiUv/qoGJp2Z3hanKL18KDhsBT5Wj6a7CMT5mdyCNJsEaA9w==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/plugin-syntax-optional-catch-binding": "^7.7.4"
      }
    },
    "@babel/plugin-proposal-unicode-property-regex": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-proposal-unicode-property-regex/-/plugin-proposal-unicode-property-regex-7.7.4.tgz",
      "integrity": "sha512-cHgqHgYvffluZk85dJ02vloErm3Y6xtH+2noOBOJ2kXOJH3aVCDnj5eR/lVNlTnYu4hndAPJD3rTFjW3qee0PA==",
      "dev": true,
      "requires": {
        "@babel/helper-create-regexp-features-plugin": "^7.7.4",
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-syntax-async-generators": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-syntax-async-generators/-/plugin-syntax-async-generators-7.7.4.tgz",
      "integrity": "sha512-Li4+EjSpBgxcsmeEF8IFcfV/+yJGxHXDirDkEoyFjumuwbmfCVHUt0HuowD/iGM7OhIRyXJH9YXxqiH6N815+g==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-syntax-decorators": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-syntax-decorators/-/plugin-syntax-decorators-7.7.4.tgz",
      "integrity": "sha512-0oNLWNH4k5ZbBVfAwiTU53rKFWIeTh6ZlaWOXWJc4ywxs0tjz5fc3uZ6jKAnZSxN98eXVgg7bJIuzjX+3SXY+A==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-syntax-dynamic-import": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-syntax-dynamic-import/-/plugin-syntax-dynamic-import-7.7.4.tgz",
      "integrity": "sha512-jHQW0vbRGvwQNgyVxwDh4yuXu4bH1f5/EICJLAhl1SblLs2CDhrsmCk+v5XLdE9wxtAFRyxx+P//Iw+a5L/tTg==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-syntax-json-strings": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-syntax-json-strings/-/plugin-syntax-json-strings-7.7.4.tgz",
      "integrity": "sha512-QpGupahTQW1mHRXddMG5srgpHWqRLwJnJZKXTigB9RPFCCGbDGCgBeM/iC82ICXp414WeYx/tD54w7M2qRqTMg==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-syntax-jsx": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-syntax-jsx/-/plugin-syntax-jsx-7.7.4.tgz",
      "integrity": "sha512-wuy6fiMe9y7HeZBWXYCGt2RGxZOj0BImZ9EyXJVnVGBKO/Br592rbR3rtIQn0eQhAk9vqaKP5n8tVqEFBQMfLg==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-syntax-object-rest-spread": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-syntax-object-rest-spread/-/plugin-syntax-object-rest-spread-7.7.4.tgz",
      "integrity": "sha512-mObR+r+KZq0XhRVS2BrBKBpr5jqrqzlPvS9C9vuOf5ilSwzloAl7RPWLrgKdWS6IreaVrjHxTjtyqFiOisaCwg==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-syntax-optional-catch-binding": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-syntax-optional-catch-binding/-/plugin-syntax-optional-catch-binding-7.7.4.tgz",
      "integrity": "sha512-4ZSuzWgFxqHRE31Glu+fEr/MirNZOMYmD/0BhBWyLyOOQz/gTAl7QmWm2hX1QxEIXsr2vkdlwxIzTyiYRC4xcQ==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-arrow-functions": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-transform-arrow-functions/-/plugin-transform-arrow-functions-7.7.4.tgz",
      "integrity": "sha512-zUXy3e8jBNPiffmqkHRNDdZM2r8DWhCB7HhcoyZjiK1TxYEluLHAvQuYnTT+ARqRpabWqy/NHkO6e3MsYB5YfA==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-async-to-generator": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-transform-async-to-generator/-/plugin-transform-async-to-generator-7.7.4.tgz",
      "integrity": "sha512-zpUTZphp5nHokuy8yLlyafxCJ0rSlFoSHypTUWgpdwoDXWQcseaect7cJ8Ppk6nunOM6+5rPMkod4OYKPR5MUg==",
      "dev": true,
      "requires": {
        "@babel/helper-module-imports": "^7.7.4",
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/helper-remap-async-to-generator": "^7.7.4"
      }
    },
    "@babel/plugin-transform-block-scoped-functions": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-transform-block-scoped-functions/-/plugin-transform-block-scoped-functions-7.7.4.tgz",
      "integrity": "sha512-kqtQzwtKcpPclHYjLK//3lH8OFsCDuDJBaFhVwf8kqdnF6MN4l618UDlcA7TfRs3FayrHj+svYnSX8MC9zmUyQ==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-block-scoping": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-transform-block-scoping/-/plugin-transform-block-scoping-7.7.4.tgz",
      "integrity": "sha512-2VBe9u0G+fDt9B5OV5DQH4KBf5DoiNkwFKOz0TCvBWvdAN2rOykCTkrL+jTLxfCAm76l9Qo5OqL7HBOx2dWggg==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "lodash": "^4.17.13"
      }
    },
    "@babel/plugin-transform-classes": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-transform-classes/-/plugin-transform-classes-7.7.4.tgz",
      "integrity": "sha512-sK1mjWat7K+buWRuImEzjNf68qrKcrddtpQo3swi9j7dUcG6y6R6+Di039QN2bD1dykeswlagupEmpOatFHHUg==",
      "dev": true,
      "requires": {
        "@babel/helper-annotate-as-pure": "^7.7.4",
        "@babel/helper-define-map": "^7.7.4",
        "@babel/helper-function-name": "^7.7.4",
        "@babel/helper-optimise-call-expression": "^7.7.4",
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/helper-replace-supers": "^7.7.4",
        "@babel/helper-split-export-declaration": "^7.7.4",
        "globals": "^11.1.0"
      }
    },
    "@babel/plugin-transform-computed-properties": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-transform-computed-properties/-/plugin-transform-computed-properties-7.7.4.tgz",
      "integrity": "sha512-bSNsOsZnlpLLyQew35rl4Fma3yKWqK3ImWMSC/Nc+6nGjC9s5NFWAer1YQ899/6s9HxO2zQC1WoFNfkOqRkqRQ==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-destructuring": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-transform-destructuring/-/plugin-transform-destructuring-7.7.4.tgz",
      "integrity": "sha512-4jFMXI1Cu2aXbcXXl8Lr6YubCn6Oc7k9lLsu8v61TZh+1jny2BWmdtvY9zSUlLdGUvcy9DMAWyZEOqjsbeg/wA==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-dotall-regex": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-transform-dotall-regex/-/plugin-transform-dotall-regex-7.7.4.tgz",
      "integrity": "sha512-mk0cH1zyMa/XHeb6LOTXTbG7uIJ8Rrjlzu91pUx/KS3JpcgaTDwMS8kM+ar8SLOvlL2Lofi4CGBAjCo3a2x+lw==",
      "dev": true,
      "requires": {
        "@babel/helper-create-regexp-features-plugin": "^7.7.4",
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-duplicate-keys": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-transform-duplicate-keys/-/plugin-transform-duplicate-keys-7.7.4.tgz",
      "integrity": "sha512-g1y4/G6xGWMD85Tlft5XedGaZBCIVN+/P0bs6eabmcPP9egFleMAo65OOjlhcz1njpwagyY3t0nsQC9oTFegJA==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-exponentiation-operator": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-transform-exponentiation-operator/-/plugin-transform-exponentiation-operator-7.7.4.tgz",
      "integrity": "sha512-MCqiLfCKm6KEA1dglf6Uqq1ElDIZwFuzz1WH5mTf8k2uQSxEJMbOIEh7IZv7uichr7PMfi5YVSrr1vz+ipp7AQ==",
      "dev": true,
      "requires": {
        "@babel/helper-builder-binary-assignment-operator-visitor": "^7.7.4",
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-for-of": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-transform-for-of/-/plugin-transform-for-of-7.7.4.tgz",
      "integrity": "sha512-zZ1fD1B8keYtEcKF+M1TROfeHTKnijcVQm0yO/Yu1f7qoDoxEIc/+GX6Go430Bg84eM/xwPFp0+h4EbZg7epAA==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-function-name": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-transform-function-name/-/plugin-transform-function-name-7.7.4.tgz",
      "integrity": "sha512-E/x09TvjHNhsULs2IusN+aJNRV5zKwxu1cpirZyRPw+FyyIKEHPXTsadj48bVpc1R5Qq1B5ZkzumuFLytnbT6g==",
      "dev": true,
      "requires": {
        "@babel/helper-function-name": "^7.7.4",
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-literals": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-transform-literals/-/plugin-transform-literals-7.7.4.tgz",
      "integrity": "sha512-X2MSV7LfJFm4aZfxd0yLVFrEXAgPqYoDG53Br/tCKiKYfX0MjVjQeWPIhPHHsCqzwQANq+FLN786fF5rgLS+gw==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-modules-amd": {
      "version": "7.7.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-transform-modules-amd/-/plugin-transform-modules-amd-7.7.5.tgz",
      "integrity": "sha512-CT57FG4A2ZUNU1v+HdvDSDrjNWBrtCmSH6YbbgN3Lrf0Di/q/lWRxZrE72p3+HCCz9UjfZOEBdphgC0nzOS6DQ==",
      "dev": true,
      "requires": {
        "@babel/helper-module-transforms": "^7.7.5",
        "@babel/helper-plugin-utils": "^7.0.0",
        "babel-plugin-dynamic-import-node": "^2.3.0"
      }
    },
    "@babel/plugin-transform-modules-commonjs": {
      "version": "7.7.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-transform-modules-commonjs/-/plugin-transform-modules-commonjs-7.7.5.tgz",
      "integrity": "sha512-9Cq4zTFExwFhQI6MT1aFxgqhIsMWQWDVwOgLzl7PTWJHsNaqFvklAU+Oz6AQLAS0dJKTwZSOCo20INwktxpi3Q==",
      "dev": true,
      "requires": {
        "@babel/helper-module-transforms": "^7.7.5",
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/helper-simple-access": "^7.7.4",
        "babel-plugin-dynamic-import-node": "^2.3.0"
      }
    },
    "@babel/plugin-transform-modules-systemjs": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-transform-modules-systemjs/-/plugin-transform-modules-systemjs-7.7.4.tgz",
      "integrity": "sha512-y2c96hmcsUi6LrMqvmNDPBBiGCiQu0aYqpHatVVu6kD4mFEXKjyNxd/drc18XXAf9dv7UXjrZwBVmTTGaGP8iw==",
      "dev": true,
      "requires": {
        "@babel/helper-hoist-variables": "^7.7.4",
        "@babel/helper-plugin-utils": "^7.0.0",
        "babel-plugin-dynamic-import-node": "^2.3.0"
      }
    },
    "@babel/plugin-transform-modules-umd": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-transform-modules-umd/-/plugin-transform-modules-umd-7.7.4.tgz",
      "integrity": "sha512-u2B8TIi0qZI4j8q4C51ktfO7E3cQ0qnaXFI1/OXITordD40tt17g/sXqgNNCcMTcBFKrUPcGDx+TBJuZxLx7tw==",
      "dev": true,
      "requires": {
        "@babel/helper-module-transforms": "^7.7.4",
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-named-capturing-groups-regex": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-transform-named-capturing-groups-regex/-/plugin-transform-named-capturing-groups-regex-7.7.4.tgz",
      "integrity": "sha512-jBUkiqLKvUWpv9GLSuHUFYdmHg0ujC1JEYoZUfeOOfNydZXp1sXObgyPatpcwjWgsdBGsagWW0cdJpX/DO2jMw==",
      "dev": true,
      "requires": {
        "@babel/helper-create-regexp-features-plugin": "^7.7.4"
      }
    },
    "@babel/plugin-transform-new-target": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-transform-new-target/-/plugin-transform-new-target-7.7.4.tgz",
      "integrity": "sha512-CnPRiNtOG1vRodnsyGX37bHQleHE14B9dnnlgSeEs3ek3fHN1A1SScglTCg1sfbe7sRQ2BUcpgpTpWSfMKz3gg==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-object-super": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-transform-object-super/-/plugin-transform-object-super-7.7.4.tgz",
      "integrity": "sha512-ho+dAEhC2aRnff2JCA0SAK7V2R62zJd/7dmtoe7MHcso4C2mS+vZjn1Pb1pCVZvJs1mgsvv5+7sT+m3Bysb6eg==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/helper-replace-supers": "^7.7.4"
      }
    },
    "@babel/plugin-transform-parameters": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-transform-parameters/-/plugin-transform-parameters-7.7.4.tgz",
      "integrity": "sha512-VJwhVePWPa0DqE9vcfptaJSzNDKrWU/4FbYCjZERtmqEs05g3UMXnYMZoXja7JAJ7Y7sPZipwm/pGApZt7wHlw==",
      "dev": true,
      "requires": {
        "@babel/helper-call-delegate": "^7.7.4",
        "@babel/helper-get-function-arity": "^7.7.4",
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-regenerator": {
      "version": "7.7.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-transform-regenerator/-/plugin-transform-regenerator-7.7.5.tgz",
      "integrity": "sha512-/8I8tPvX2FkuEyWbjRCt4qTAgZK0DVy8QRguhA524UH48RfGJy94On2ri+dCuwOpcerPRl9O4ebQkRcVzIaGBw==",
      "dev": true,
      "requires": {
        "regenerator-transform": "^0.14.0"
      }
    },
    "@babel/plugin-transform-runtime": {
      "version": "7.7.6",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-transform-runtime/-/plugin-transform-runtime-7.7.6.tgz",
      "integrity": "sha512-tajQY+YmXR7JjTwRvwL4HePqoL3DYxpYXIHKVvrOIvJmeHe2y1w4tz5qz9ObUDC9m76rCzIMPyn4eERuwA4a4A==",
      "dev": true,
      "requires": {
        "@babel/helper-module-imports": "^7.7.4",
        "@babel/helper-plugin-utils": "^7.0.0",
        "resolve": "^1.8.1",
        "semver": "^5.5.1"
      }
    },
    "@babel/plugin-transform-shorthand-properties": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-transform-shorthand-properties/-/plugin-transform-shorthand-properties-7.7.4.tgz",
      "integrity": "sha512-q+suddWRfIcnyG5YiDP58sT65AJDZSUhXQDZE3r04AuqD6d/XLaQPPXSBzP2zGerkgBivqtQm9XKGLuHqBID6Q==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-spread": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-transform-spread/-/plugin-transform-spread-7.7.4.tgz",
      "integrity": "sha512-8OSs0FLe5/80cndziPlg4R0K6HcWSM0zyNhHhLsmw/Nc5MaA49cAsnoJ/t/YZf8qkG7fD+UjTRaApVDB526d7Q==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-sticky-regex": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-transform-sticky-regex/-/plugin-transform-sticky-regex-7.7.4.tgz",
      "integrity": "sha512-Ls2NASyL6qtVe1H1hXts9yuEeONV2TJZmplLONkMPUG158CtmnrzW5Q5teibM5UVOFjG0D3IC5mzXR6pPpUY7A==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/helper-regex": "^7.0.0"
      }
    },
    "@babel/plugin-transform-template-literals": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-transform-template-literals/-/plugin-transform-template-literals-7.7.4.tgz",
      "integrity": "sha512-sA+KxLwF3QwGj5abMHkHgshp9+rRz+oY9uoRil4CyLtgEuE/88dpkeWgNk5qKVsJE9iSfly3nvHapdRiIS2wnQ==",
      "dev": true,
      "requires": {
        "@babel/helper-annotate-as-pure": "^7.7.4",
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-typeof-symbol": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-transform-typeof-symbol/-/plugin-transform-typeof-symbol-7.7.4.tgz",
      "integrity": "sha512-KQPUQ/7mqe2m0B8VecdyaW5XcQYaePyl9R7IsKd+irzj6jvbhoGnRE+M0aNkyAzI07VfUQ9266L5xMARitV3wg==",
      "dev": true,
      "requires": {
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/plugin-transform-unicode-regex": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/plugin-transform-unicode-regex/-/plugin-transform-unicode-regex-7.7.4.tgz",
      "integrity": "sha512-N77UUIV+WCvE+5yHw+oks3m18/umd7y392Zv7mYTpFqHtkpcc+QUz+gLJNTWVlWROIWeLqY0f3OjZxV5TcXnRw==",
      "dev": true,
      "requires": {
        "@babel/helper-create-regexp-features-plugin": "^7.7.4",
        "@babel/helper-plugin-utils": "^7.0.0"
      }
    },
    "@babel/preset-env": {
      "version": "7.3.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/preset-env/-/preset-env-7.3.4.tgz",
      "integrity": "sha512-2mwqfYMK8weA0g0uBKOt4FE3iEodiHy9/CW0b+nWXcbL+pGzLx8ESYc+j9IIxr6LTDHWKgPm71i9smo02bw+gA==",
      "dev": true,
      "requires": {
        "@babel/helper-module-imports": "^7.0.0",
        "@babel/helper-plugin-utils": "^7.0.0",
        "@babel/plugin-proposal-async-generator-functions": "^7.2.0",
        "@babel/plugin-proposal-json-strings": "^7.2.0",
        "@babel/plugin-proposal-object-rest-spread": "^7.3.4",
        "@babel/plugin-proposal-optional-catch-binding": "^7.2.0",
        "@babel/plugin-proposal-unicode-property-regex": "^7.2.0",
        "@babel/plugin-syntax-async-generators": "^7.2.0",
        "@babel/plugin-syntax-json-strings": "^7.2.0",
        "@babel/plugin-syntax-object-rest-spread": "^7.2.0",
        "@babel/plugin-syntax-optional-catch-binding": "^7.2.0",
        "@babel/plugin-transform-arrow-functions": "^7.2.0",
        "@babel/plugin-transform-async-to-generator": "^7.3.4",
        "@babel/plugin-transform-block-scoped-functions": "^7.2.0",
        "@babel/plugin-transform-block-scoping": "^7.3.4",
        "@babel/plugin-transform-classes": "^7.3.4",
        "@babel/plugin-transform-computed-properties": "^7.2.0",
        "@babel/plugin-transform-destructuring": "^7.2.0",
        "@babel/plugin-transform-dotall-regex": "^7.2.0",
        "@babel/plugin-transform-duplicate-keys": "^7.2.0",
        "@babel/plugin-transform-exponentiation-operator": "^7.2.0",
        "@babel/plugin-transform-for-of": "^7.2.0",
        "@babel/plugin-transform-function-name": "^7.2.0",
        "@babel/plugin-transform-literals": "^7.2.0",
        "@babel/plugin-transform-modules-amd": "^7.2.0",
        "@babel/plugin-transform-modules-commonjs": "^7.2.0",
        "@babel/plugin-transform-modules-systemjs": "^7.3.4",
        "@babel/plugin-transform-modules-umd": "^7.2.0",
        "@babel/plugin-transform-named-capturing-groups-regex": "^7.3.0",
        "@babel/plugin-transform-new-target": "^7.0.0",
        "@babel/plugin-transform-object-super": "^7.2.0",
        "@babel/plugin-transform-parameters": "^7.2.0",
        "@babel/plugin-transform-regenerator": "^7.3.4",
        "@babel/plugin-transform-shorthand-properties": "^7.2.0",
        "@babel/plugin-transform-spread": "^7.2.0",
        "@babel/plugin-transform-sticky-regex": "^7.2.0",
        "@babel/plugin-transform-template-literals": "^7.2.0",
        "@babel/plugin-transform-typeof-symbol": "^7.2.0",
        "@babel/plugin-transform-unicode-regex": "^7.2.0",
        "browserslist": "^4.3.4",
        "invariant": "^2.2.2",
        "js-levenshtein": "^1.1.3",
        "semver": "^5.3.0"
      }
    },
    "@babel/runtime": {
      "version": "7.7.6",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/runtime/-/runtime-7.7.6.tgz",
      "integrity": "sha512-BWAJxpNVa0QlE5gZdWjSxXtemZyZ9RmrmVozxt3NUXeZhVIJ5ANyqmMc0JDrivBZyxUuQvFxlvH4OWWOogGfUw==",
      "dev": true,
      "requires": {
        "regenerator-runtime": "^0.13.2"
      }
    },
    "@babel/runtime-corejs2": {
      "version": "7.7.6",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/runtime-corejs2/-/runtime-corejs2-7.7.6.tgz",
      "integrity": "sha512-QYp/8xdH8iMin3pH5gtT/rUuttVfIcOhWBC3wh9Eh/qs4jEe39+3DpCDLgWXhMQgiCTOH8mrLSvQ0OHOCcox9g==",
      "dev": true,
      "requires": {
        "core-js": "^2.6.5",
        "regenerator-runtime": "^0.13.2"
      }
    },
    "@babel/template": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/template/-/template-7.7.4.tgz",
      "integrity": "sha512-qUzihgVPguAzXCK7WXw8pqs6cEwi54s3E+HrejlkuWO6ivMKx9hZl3Y2fSXp9i5HgyWmj7RKP+ulaYnKM4yYxw==",
      "dev": true,
      "requires": {
        "@babel/code-frame": "^7.0.0",
        "@babel/parser": "^7.7.4",
        "@babel/types": "^7.7.4"
      }
    },
    "@babel/traverse": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/traverse/-/traverse-7.7.4.tgz",
      "integrity": "sha512-P1L58hQyupn8+ezVA2z5KBm4/Zr4lCC8dwKCMYzsa5jFMDMQAzaBNy9W5VjB+KAmBjb40U7a/H6ao+Xo+9saIw==",
      "dev": true,
      "requires": {
        "@babel/code-frame": "^7.5.5",
        "@babel/generator": "^7.7.4",
        "@babel/helper-function-name": "^7.7.4",
        "@babel/helper-split-export-declaration": "^7.7.4",
        "@babel/parser": "^7.7.4",
        "@babel/types": "^7.7.4",
        "debug": "^4.1.0",
        "globals": "^11.1.0",
        "lodash": "^4.17.13"
      }
    },
    "@babel/types": {
      "version": "7.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@babel/types/-/types-7.7.4.tgz",
      "integrity": "sha512-cz5Ji23KCi4T+YIE/BolWosrJuSmoZeN1EFnRtBwF+KKLi8GG/Z2c2hOJJeCXPk4mwk4QFvTmwIodJowXgttRA==",
      "dev": true,
      "requires": {
        "esutils": "^2.0.2",
        "lodash": "^4.17.13",
        "to-fast-properties": "^2.0.0"
      }
    },
    "@hapi/address": {
      "version": "2.1.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/@hapi/address/-/address-2.1.4.tgz",
      "integrity": "sha512-QD1PhQk+s31P1ixsX0H0Suoupp3VMXzIVMSwobR3F3MSUO2YCV0B7xqLcUw/Bh8yuvd3LhpyqLQWTNcRmp6IdQ==",
      "dev": true
    },
    "@hapi/bourne": {
      "version": "1.3.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/@hapi/bourne/-/bourne-1.3.2.tgz",
      "integrity": "sha512-1dVNHT76Uu5N3eJNTYcvxee+jzX4Z9lfciqRRHCU27ihbUcYi+iSc2iml5Ke1LXe1SyJCLA0+14Jh4tXJgOppA==",
      "dev": true
    },
    "@hapi/hoek": {
      "version": "8.5.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/@hapi/hoek/-/hoek-8.5.0.tgz",
      "integrity": "sha512-7XYT10CZfPsH7j9F1Jmg1+d0ezOux2oM2GfArAzLwWe4mE2Dr3hVjsAL6+TFY49RRJlCdJDMw3nJsLFroTc8Kw==",
      "dev": true
    },
    "@hapi/joi": {
      "version": "15.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/@hapi/joi/-/joi-15.1.1.tgz",
      "integrity": "sha512-entf8ZMOK8sc+8YfeOlM8pCfg3b5+WZIKBfUaaJT8UsjAAPjartzxIYm3TIbjvA4u+u++KbcXD38k682nVHDAQ==",
      "dev": true,
      "requires": {
        "@hapi/address": "2.x.x",
        "@hapi/bourne": "1.x.x",
        "@hapi/hoek": "8.x.x",
        "@hapi/topo": "3.x.x"
      }
    },
    "@hapi/topo": {
      "version": "3.1.6",
      "resolved": "http://maven.paic.com.cn/repository/npm/@hapi/topo/-/topo-3.1.6.tgz",
      "integrity": "sha512-tAag0jEcjwH+P2quUfipd7liWCNX2F8NvYjQp2wtInsZxnMlypdw0FtAOLxtvvkO+GSRRbmNi8m/5y42PQJYCQ==",
      "dev": true,
      "requires": {
        "@hapi/hoek": "^8.3.0"
      }
    },
    "@intervolga/optimize-cssnano-plugin": {
      "version": "1.0.6",
      "resolved": "http://maven.paic.com.cn/repository/npm/@intervolga/optimize-cssnano-plugin/-/optimize-cssnano-plugin-1.0.6.tgz",
      "integrity": "sha512-zN69TnSr0viRSU6cEDIcuPcP67QcpQ6uHACg58FiN9PDrU6SLyGW3MR4tiISbYxy1kDWAVPwD+XwQTWE5cigAA==",
      "dev": true,
      "requires": {
        "cssnano": "^4.0.0",
        "cssnano-preset-default": "^4.0.0",
        "postcss": "^7.0.0"
      }
    },
    "@mrmlnc/readdir-enhanced": {
      "version": "2.2.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/@mrmlnc/readdir-enhanced/-/readdir-enhanced-2.2.1.tgz",
      "integrity": "sha512-bPHp6Ji8b41szTOcaP63VlnbbO5Ny6dwAATtY6JTjh5N2OLrb5Qk/Th5cRkRQhkWCt+EJsYrNB0MiL+Gpn6e3g==",
      "dev": true,
      "requires": {
        "call-me-maybe": "^1.0.1",
        "glob-to-regexp": "^0.3.0"
      }
    },
    "@nodelib/fs.stat": {
      "version": "1.1.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/@nodelib/fs.stat/-/fs.stat-1.1.3.tgz",
      "integrity": "sha512-shAmDyaQC4H92APFoIaVDHCx5bStIocgvbwQyxPRrbUY20V1EYTbSDchWbuwlMG3V17cprZhA6+78JfB+3DTPw==",
      "dev": true
    },
    "@soda/friendly-errors-webpack-plugin": {
      "version": "1.7.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/@soda/friendly-errors-webpack-plugin/-/friendly-errors-webpack-plugin-1.7.1.tgz",
      "integrity": "sha512-cWKrGaFX+rfbMrAxVv56DzhPNqOJPZuNIS2HGMELtgGzb+vsMzyig9mml5gZ/hr2BGtSLV+dP2LUEuAL8aG2mQ==",
      "dev": true,
      "requires": {
        "chalk": "^1.1.3",
        "error-stack-parser": "^2.0.0",
        "string-width": "^2.0.0"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "2.1.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/ansi-regex/-/ansi-regex-2.1.1.tgz",
          "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",
          "dev": true
        },
        "ansi-styles": {
          "version": "2.2.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/ansi-styles/-/ansi-styles-2.2.1.tgz",
          "integrity": "sha1-tDLdM1i2NM914eRmQ2gkBTPB3b4=",
          "dev": true
        },
        "chalk": {
          "version": "1.1.3",
          "resolved": "http://maven.paic.com.cn/repository/npm/chalk/-/chalk-1.1.3.tgz",
          "integrity": "sha1-qBFcVeSnAv5NFQq9OHKCKn4J/Jg=",
          "dev": true,
          "requires": {
            "ansi-styles": "^2.2.1",
            "escape-string-regexp": "^1.0.2",
            "has-ansi": "^2.0.0",
            "strip-ansi": "^3.0.0",
            "supports-color": "^2.0.0"
          }
        },
        "strip-ansi": {
          "version": "3.0.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/strip-ansi/-/strip-ansi-3.0.1.tgz",
          "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
          "dev": true,
          "requires": {
            "ansi-regex": "^2.0.0"
          }
        },
        "supports-color": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/supports-color/-/supports-color-2.0.0.tgz",
          "integrity": "sha1-U10EXOa2Nj+kARcIRimZXp3zJMc=",
          "dev": true
        }
      }
    },
    "@types/color-name": {
      "version": "1.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/@types/color-name/-/color-name-1.1.1.tgz",
      "integrity": "sha512-rr+OQyAjxze7GgWrSaJwydHStIhHq2lvY3BOC2Mj7KnzI7XK0Uw1TOOdI9lDoajEbSWLiYgoo4f1R51erQfhPQ==",
      "dev": true
    },
    "@types/eslint-visitor-keys": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/@types/eslint-visitor-keys/-/eslint-visitor-keys-1.0.0.tgz",
      "integrity": "sha512-OCutwjDZ4aFS6PB1UZ988C4YgwlBHJd6wCeQqaLdmadZ/7e+w79+hbMUFC1QXDNCmdyoRfAFdm0RypzwR+Qpag==",
      "dev": true
    },
    "@types/events": {
      "version": "3.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/@types/events/-/events-3.0.0.tgz",
      "integrity": "sha512-EaObqwIvayI5a8dCzhFrjKzVwKLxjoG9T6Ppd5CEo07LRKfQ8Yokw54r5+Wq7FaBQ+yXRvQAYPrHwya1/UFt9g==",
      "dev": true
    },
    "@types/glob": {
      "version": "7.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/@types/glob/-/glob-7.1.1.tgz",
      "integrity": "sha512-1Bh06cbWJUHMC97acuD6UMG29nMt0Aqz1vF3guLfG+kHHJhy3AyohZFFxYk2f7Q1SQIrNwvncxAE0N/9s70F2w==",
      "dev": true,
      "requires": {
        "@types/events": "*",
        "@types/minimatch": "*",
        "@types/node": "*"
      }
    },
    "@types/jest": {
      "version": "23.3.14",
      "resolved": "http://maven.paic.com.cn/repository/npm/@types/jest/-/jest-23.3.14.tgz",
      "integrity": "sha512-Q5hTcfdudEL2yOmluA1zaSyPbzWPmJ3XfSWeP3RyoYvS9hnje1ZyagrZOuQ6+1nQC1Gw+7gap3pLNL3xL6UBug==",
      "dev": true
    },
    "@types/json-schema": {
      "version": "7.0.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/@types/json-schema/-/json-schema-7.0.3.tgz",
      "integrity": "sha512-Il2DtDVRGDcqjDtE+rF8iqg1CArehSK84HZJCT7AMITlyXRBpuPhqGLDQMowraqqu1coEaimg4ZOqggt6L6L+A==",
      "dev": true
    },
    "@types/minimatch": {
      "version": "3.0.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/@types/minimatch/-/minimatch-3.0.3.tgz",
      "integrity": "sha512-tHq6qdbT9U1IRSGf14CL0pUlULksvY9OZ+5eEgl1N7t+OA3tGvNpxJCzuKQlsNgCVwbAs670L1vcVQi8j9HjnA==",
      "dev": true
    },
    "@types/node": {
      "version": "12.12.18",
      "resolved": "http://maven.paic.com.cn/repository/npm/@types/node/-/node-12.12.18.tgz",
      "integrity": "sha512-DBkZuIMFuAfjJHiunyRc+aNvmXYNwV1IPMgGKGlwCp6zh6MKrVtmvjSWK/axWcD25KJffkXgkfvFra8ndenXAw==",
      "dev": true
    },
    "@types/normalize-package-data": {
      "version": "2.4.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/@types/normalize-package-data/-/normalize-package-data-2.4.0.tgz",
      "integrity": "sha512-f5j5b/Gf71L+dbqxIpQ4Z2WlmI/mPJ0fOkGGmFgtb6sAu97EPczzbS3/tJKxmcYDj55OX6ssqwDAWOHIYDRDGA==",
      "dev": true
    },
    "@types/q": {
      "version": "1.5.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/@types/q/-/q-1.5.2.tgz",
      "integrity": "sha512-ce5d3q03Ex0sy4R14722Rmt6MT07Ua+k4FwDfdcToYJcMKNtRVQvJ6JCAPdAmAnbRb6CsX6aYb9m96NGod9uTw==",
      "dev": true
    },
    "@types/strip-bom": {
      "version": "3.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/@types/strip-bom/-/strip-bom-3.0.0.tgz",
      "integrity": "sha1-FKjsOVbC6B7bdSB5CuzyHCkK69I=",
      "dev": true
    },
    "@types/strip-json-comments": {
      "version": "0.0.30",
      "resolved": "http://maven.paic.com.cn/repository/npm/@types/strip-json-comments/-/strip-json-comments-0.0.30.tgz",
      "integrity": "sha512-7NQmHra/JILCd1QqpSzl8+mJRc8ZHz3uDm8YV1Ks9IhK0epEiTw8aIErbvH9PI+6XbqhyIQy3462nEsn7UVzjQ==",
      "dev": true
    },
    "@types/webpack-env": {
      "version": "1.14.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/@types/webpack-env/-/webpack-env-1.14.1.tgz",
      "integrity": "sha512-0Ki9jAAhKDSuLDXOIMADg54Hu60SuBTEsWaJGGy5cV+SSUQ63J2a+RrYYGrErzz39fXzTibhKrAQJAb8M7PNcA==",
      "dev": true
    },
    "@typescript-eslint/eslint-plugin": {
      "version": "1.13.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/@typescript-eslint/eslint-plugin/-/eslint-plugin-1.13.0.tgz",
      "integrity": "sha512-WQHCozMnuNADiqMtsNzp96FNox5sOVpU8Xt4meaT4em8lOG1SrOv92/mUbEHQVh90sldKSfcOc/I0FOb/14G1g==",
      "dev": true,
      "requires": {
        "@typescript-eslint/experimental-utils": "1.13.0",
        "eslint-utils": "^1.3.1",
        "functional-red-black-tree": "^1.0.1",
        "regexpp": "^2.0.1",
        "tsutils": "^3.7.0"
      },
      "dependencies": {
        "regexpp": {
          "version": "2.0.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/regexpp/-/regexpp-2.0.1.tgz",
          "integrity": "sha512-lv0M6+TkDVniA3aD1Eg0DVpfU/booSu7Eev3TDO/mZKHBfVjgCGTV4t4buppESEYDtkArYFOxTJWv6S5C+iaNw==",
          "dev": true
        },
        "tsutils": {
          "version": "3.17.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/tsutils/-/tsutils-3.17.1.tgz",
          "integrity": "sha512-kzeQ5B8H3w60nFY2g8cJIuH7JDpsALXySGtwGJ0p2LSjLgay3NdIpqq5SoOBe46bKDW2iq25irHCr8wjomUS2g==",
          "dev": true,
          "requires": {
            "tslib": "^1.8.1"
          }
        }
      }
    },
    "@typescript-eslint/experimental-utils": {
      "version": "1.13.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/@typescript-eslint/experimental-utils/-/experimental-utils-1.13.0.tgz",
      "integrity": "sha512-zmpS6SyqG4ZF64ffaJ6uah6tWWWgZ8m+c54XXgwFtUv0jNz8aJAVx8chMCvnk7yl6xwn8d+d96+tWp7fXzTuDg==",
      "dev": true,
      "requires": {
        "@types/json-schema": "^7.0.3",
        "@typescript-eslint/typescript-estree": "1.13.0",
        "eslint-scope": "^4.0.0"
      }
    },
    "@typescript-eslint/parser": {
      "version": "1.13.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/@typescript-eslint/parser/-/parser-1.13.0.tgz",
      "integrity": "sha512-ITMBs52PCPgLb2nGPoeT4iU3HdQZHcPaZVw+7CsFagRJHUhyeTgorEwHXhFf3e7Evzi8oujKNpHc8TONth8AdQ==",
      "dev": true,
      "requires": {
        "@types/eslint-visitor-keys": "^1.0.0",
        "@typescript-eslint/experimental-utils": "1.13.0",
        "@typescript-eslint/typescript-estree": "1.13.0",
        "eslint-visitor-keys": "^1.0.0"
      }
    },
    "@typescript-eslint/typescript-estree": {
      "version": "1.13.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/@typescript-eslint/typescript-estree/-/typescript-estree-1.13.0.tgz",
      "integrity": "sha512-b5rCmd2e6DCC6tCTN9GSUAuxdYwCM/k/2wdjHGrIRGPSJotWMCe/dGpi66u42bhuh8q3QBzqM4TMA1GUUCJvdw==",
      "dev": true,
      "requires": {
        "lodash.unescape": "4.0.1",
        "semver": "5.5.0"
      },
      "dependencies": {
        "semver": {
          "version": "5.5.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/semver/-/semver-5.5.0.tgz",
          "integrity": "sha512-4SJ3dm0WAwWy/NVeioZh5AntkdJoWKxHxcmyP622fOkgHa4z3R0TdBJICINyaSDE6uNwVc8gZr+ZinwZAH4xIA==",
          "dev": true
        }
      }
    },
    "@vue/babel-helper-vue-jsx-merge-props": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/@vue/babel-helper-vue-jsx-merge-props/-/babel-helper-vue-jsx-merge-props-1.0.0.tgz",
      "integrity": "sha512-6tyf5Cqm4m6v7buITuwS+jHzPlIPxbFzEhXR5JGZpbrvOcp1hiQKckd305/3C7C36wFekNTQSxAtgeM0j0yoUw==",
      "dev": true
    },
    "@vue/babel-plugin-transform-vue-jsx": {
      "version": "1.1.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/@vue/babel-plugin-transform-vue-jsx/-/babel-plugin-transform-vue-jsx-1.1.2.tgz",
      "integrity": "sha512-YfdaoSMvD1nj7+DsrwfTvTnhDXI7bsuh+Y5qWwvQXlD24uLgnsoww3qbiZvWf/EoviZMrvqkqN4CBw0W3BWUTQ==",
      "dev": true,
      "requires": {
        "@babel/helper-module-imports": "^7.0.0",
        "@babel/plugin-syntax-jsx": "^7.2.0",
        "@vue/babel-helper-vue-jsx-merge-props": "^1.0.0",
        "html-tags": "^2.0.0",
        "lodash.kebabcase": "^4.1.1",
        "svg-tags": "^1.0.0"
      }
    },
    "@vue/babel-preset-app": {
      "version": "3.12.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/@vue/babel-preset-app/-/babel-preset-app-3.12.1.tgz",
      "integrity": "sha512-Zjy5jQaikV1Pz+ri0YgXFS7q4/5wCxB5tRkDOEIt5+4105u0Feb/pvH20nVL6nx9GyXrECFfcm7Yxr/z++OaPQ==",
      "dev": true,
      "requires": {
        "@babel/helper-module-imports": "^7.0.0",
        "@babel/plugin-proposal-class-properties": "^7.0.0",
        "@babel/plugin-proposal-decorators": "^7.1.0",
        "@babel/plugin-syntax-dynamic-import": "^7.0.0",
        "@babel/plugin-syntax-jsx": "^7.0.0",
        "@babel/plugin-transform-runtime": "^7.4.0",
        "@babel/preset-env": "^7.0.0 < 7.4.0",
        "@babel/runtime": "^7.0.0",
        "@babel/runtime-corejs2": "^7.2.0",
        "@vue/babel-preset-jsx": "^1.0.0",
        "babel-plugin-dynamic-import-node": "^2.2.0",
        "babel-plugin-module-resolver": "3.2.0",
        "core-js": "^2.6.5"
      }
    },
    "@vue/babel-preset-jsx": {
      "version": "1.1.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/@vue/babel-preset-jsx/-/babel-preset-jsx-1.1.2.tgz",
      "integrity": "sha512-zDpVnFpeC9YXmvGIDSsKNdL7qCG2rA3gjywLYHPCKDT10erjxF4U+6ay9X6TW5fl4GsDlJp9bVfAVQAAVzxxvQ==",
      "dev": true,
      "requires": {
        "@vue/babel-helper-vue-jsx-merge-props": "^1.0.0",
        "@vue/babel-plugin-transform-vue-jsx": "^1.1.2",
        "@vue/babel-sugar-functional-vue": "^1.1.2",
        "@vue/babel-sugar-inject-h": "^1.1.2",
        "@vue/babel-sugar-v-model": "^1.1.2",
        "@vue/babel-sugar-v-on": "^1.1.2"
      }
    },
    "@vue/babel-sugar-functional-vue": {
      "version": "1.1.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/@vue/babel-sugar-functional-vue/-/babel-sugar-functional-vue-1.1.2.tgz",
      "integrity": "sha512-YhmdJQSVEFF5ETJXzrMpj0nkCXEa39TvVxJTuVjzvP2rgKhdMmQzlJuMv/HpadhZaRVMCCF3AEjjJcK5q/cYzQ==",
      "dev": true,
      "requires": {
        "@babel/plugin-syntax-jsx": "^7.2.0"
      }
    },
    "@vue/babel-sugar-inject-h": {
      "version": "1.1.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/@vue/babel-sugar-inject-h/-/babel-sugar-inject-h-1.1.2.tgz",
      "integrity": "sha512-VRSENdTvD5htpnVp7i7DNuChR5rVMcORdXjvv5HVvpdKHzDZAYiLSD+GhnhxLm3/dMuk8pSzV+k28ECkiN5m8w==",
      "dev": true,
      "requires": {
        "@babel/plugin-syntax-jsx": "^7.2.0"
      }
    },
    "@vue/babel-sugar-v-model": {
      "version": "1.1.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/@vue/babel-sugar-v-model/-/babel-sugar-v-model-1.1.2.tgz",
      "integrity": "sha512-vLXPvNq8vDtt0u9LqFdpGM9W9IWDmCmCyJXuozlq4F4UYVleXJ2Fa+3JsnTZNJcG+pLjjfnEGHci2339Kj5sGg==",
      "dev": true,
      "requires": {
        "@babel/plugin-syntax-jsx": "^7.2.0",
        "@vue/babel-helper-vue-jsx-merge-props": "^1.0.0",
        "@vue/babel-plugin-transform-vue-jsx": "^1.1.2",
        "camelcase": "^5.0.0",
        "html-tags": "^2.0.0",
        "svg-tags": "^1.0.0"
      }
    },
    "@vue/babel-sugar-v-on": {
      "version": "1.1.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/@vue/babel-sugar-v-on/-/babel-sugar-v-on-1.1.2.tgz",
      "integrity": "sha512-T8ZCwC8Jp2uRtcZ88YwZtZXe7eQrJcfRq0uTFy6ShbwYJyz5qWskRFoVsdTi9o0WEhmQXxhQUewodOSCUPVmsQ==",
      "dev": true,
      "requires": {
        "@babel/plugin-syntax-jsx": "^7.2.0",
        "@vue/babel-plugin-transform-vue-jsx": "^1.1.2",
        "camelcase": "^5.0.0"
      }
    },
    "@vue/cli-overlay": {
      "version": "3.12.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/@vue/cli-overlay/-/cli-overlay-3.12.1.tgz",
      "integrity": "sha512-Bym92EN+lj+cNRN2ozbYyH+V8DMXWGbCDUk+hiJ4EYDBZfBkZKvalk1/mOBFwyxiopnnbOEBAAhL/UuMQ1xARg==",
      "dev": true
    },
    "@vue/cli-plugin-babel": {
      "version": "3.12.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/@vue/cli-plugin-babel/-/cli-plugin-babel-3.12.1.tgz",
      "integrity": "sha512-Zetvz8PikLCGomeKOKu8pC9YQ7cfxs7pGpvEOzaxGdhMnebhjAYR6i6dOB57A6N5lhxQksXCtYTv26QgfiIpdg==",
      "dev": true,
      "requires": {
        "@babel/core": "^7.0.0",
        "@vue/babel-preset-app": "^3.12.1",
        "@vue/cli-shared-utils": "^3.12.1",
        "babel-loader": "^8.0.5",
        "webpack": "^4.0.0"
      }
    },
    "@vue/cli-plugin-eslint": {
      "version": "3.12.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/@vue/cli-plugin-eslint/-/cli-plugin-eslint-3.12.1.tgz",
      "integrity": "sha512-tVTZlEZsy3sQbO4LLWFK11yzlWwqVAqaM+IY+BeWHITBzEJKh2KmouG+x6x/reXiU3qROsMJ4Ej3Hs8buSMWyQ==",
      "dev": true,
      "requires": {
        "@vue/cli-shared-utils": "^3.12.1",
        "babel-eslint": "^10.0.1",
        "eslint": "^4.19.1",
        "eslint-loader": "^2.1.2",
        "eslint-plugin-vue": "^4.7.1",
        "globby": "^9.2.0",
        "webpack": "^4.0.0",
        "yorkie": "^2.0.0"
      },
      "dependencies": {
        "ajv": {
          "version": "5.5.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/ajv/-/ajv-5.5.2.tgz",
          "integrity": "sha1-c7Xuyj+rZT49P5Qis0GtQiBdyWU=",
          "dev": true,
          "optional": true,
          "requires": {
            "co": "^4.6.0",
            "fast-deep-equal": "^1.0.0",
            "fast-json-stable-stringify": "^2.0.0",
            "json-schema-traverse": "^0.3.0"
          }
        },
        "ansi-regex": {
          "version": "3.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/ansi-regex/-/ansi-regex-3.0.0.tgz",
          "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
          "dev": true,
          "optional": true
        },
        "cross-spawn": {
          "version": "5.1.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/cross-spawn/-/cross-spawn-5.1.0.tgz",
          "integrity": "sha1-6L0O/uWPz/b4+UUQoKVUu/ojVEk=",
          "dev": true,
          "optional": true,
          "requires": {
            "lru-cache": "^4.0.1",
            "shebang-command": "^1.2.0",
            "which": "^1.2.9"
          }
        },
        "debug": {
          "version": "3.2.6",
          "resolved": "http://maven.paic.com.cn/repository/npm/debug/-/debug-3.2.6.tgz",
          "integrity": "sha512-mel+jf7nrtEl5Pn1Qx46zARXKDpBbvzezse7p7LqINmdoIk8PYP5SySaxEmYv6TZ0JyEKA1hsCId6DIhgITtWQ==",
          "dev": true,
          "optional": true,
          "requires": {
            "ms": "^2.1.1"
          }
        },
        "eslint": {
          "version": "4.19.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/eslint/-/eslint-4.19.1.tgz",
          "integrity": "sha512-bT3/1x1EbZB7phzYu7vCr1v3ONuzDtX8WjuM9c0iYxe+cq+pwcKEoQjl7zd3RpC6YOLgnSy3cTN58M2jcoPDIQ==",
          "dev": true,
          "optional": true,
          "requires": {
            "ajv": "^5.3.0",
            "babel-code-frame": "^6.22.0",
            "chalk": "^2.1.0",
            "concat-stream": "^1.6.0",
            "cross-spawn": "^5.1.0",
            "debug": "^3.1.0",
            "doctrine": "^2.1.0",
            "eslint-scope": "^3.7.1",
            "eslint-visitor-keys": "^1.0.0",
            "espree": "^3.5.4",
            "esquery": "^1.0.0",
            "esutils": "^2.0.2",
            "file-entry-cache": "^2.0.0",
            "functional-red-black-tree": "^1.0.1",
            "glob": "^7.1.2",
            "globals": "^11.0.1",
            "ignore": "^3.3.3",
            "imurmurhash": "^0.1.4",
            "inquirer": "^3.0.6",
            "is-resolvable": "^1.0.0",
            "js-yaml": "^3.9.1",
            "json-stable-stringify-without-jsonify": "^1.0.1",
            "levn": "^0.3.0",
            "lodash": "^4.17.4",
            "minimatch": "^3.0.2",
            "mkdirp": "^0.5.1",
            "natural-compare": "^1.4.0",
            "optionator": "^0.8.2",
            "path-is-inside": "^1.0.2",
            "pluralize": "^7.0.0",
            "progress": "^2.0.0",
            "regexpp": "^1.0.1",
            "require-uncached": "^1.0.3",
            "semver": "^5.3.0",
            "strip-ansi": "^4.0.0",
            "strip-json-comments": "~2.0.1",
            "table": "4.0.2",
            "text-table": "~0.2.0"
          }
        },
        "eslint-plugin-vue": {
          "version": "4.7.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/eslint-plugin-vue/-/eslint-plugin-vue-4.7.1.tgz",
          "integrity": "sha512-esETKhVMI7Vdli70Wt4bvAwnZBJeM0pxVX9Yb0wWKxdCJc2EADalVYK/q2FzMw8oKN0wPMdqVCKS8kmR89recA==",
          "dev": true,
          "optional": true,
          "requires": {
            "vue-eslint-parser": "^2.0.3"
          }
        },
        "eslint-scope": {
          "version": "3.7.3",
          "resolved": "http://maven.paic.com.cn/repository/npm/eslint-scope/-/eslint-scope-3.7.3.tgz",
          "integrity": "sha512-W+B0SvF4gamyCTmUc+uITPY0989iXVfKvhwtmJocTaYoc/3khEHmEmvfY/Gn9HA9VV75jrQECsHizkNw1b68FA==",
          "dev": true,
          "optional": true,
          "requires": {
            "esrecurse": "^4.1.0",
            "estraverse": "^4.1.1"
          }
        },
        "fast-deep-equal": {
          "version": "1.1.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/fast-deep-equal/-/fast-deep-equal-1.1.0.tgz",
          "integrity": "sha1-wFNHeBfIa1HaqFPIHgWbcz0CNhQ=",
          "dev": true,
          "optional": true
        },
        "json-schema-traverse": {
          "version": "0.3.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/json-schema-traverse/-/json-schema-traverse-0.3.1.tgz",
          "integrity": "sha1-NJptRMU6Ud6JtAgFxdXlm0F9M0A=",
          "dev": true,
          "optional": true
        },
        "lru-cache": {
          "version": "4.1.5",
          "resolved": "http://maven.paic.com.cn/repository/npm/lru-cache/-/lru-cache-4.1.5.tgz",
          "integrity": "sha512-sWZlbEP2OsHNkXrMl5GYk/jKk70MBng6UU4YI/qGDYbgf6YbP4EvmqISbXCoJiRKs+1bSpFHVgQxvJ17F2li5g==",
          "dev": true,
          "optional": true,
          "requires": {
            "pseudomap": "^1.0.2",
            "yallist": "^2.1.2"
          }
        },
        "strip-ansi": {
          "version": "4.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/strip-ansi/-/strip-ansi-4.0.0.tgz",
          "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
          "dev": true,
          "optional": true,
          "requires": {
            "ansi-regex": "^3.0.0"
          }
        },
        "yallist": {
          "version": "2.1.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/yallist/-/yallist-2.1.2.tgz",
          "integrity": "sha1-HBH5IY8HYImkfdUS+TxmmaaoHVI=",
          "dev": true,
          "optional": true
        }
      }
    },
    "@vue/cli-plugin-typescript": {
      "version": "3.12.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/@vue/cli-plugin-typescript/-/cli-plugin-typescript-3.12.1.tgz",
      "integrity": "sha512-sh+WKbpsDw6wOrpM4FSD1xKXpyp8mVcl+yyEk+WvJuuSdfwueRubAM7uYbrOGtNSOegpZqBwbNxEO4FIUBeLKQ==",
      "dev": true,
      "requires": {
        "@types/webpack-env": "^1.13.9",
        "@vue/cli-shared-utils": "^3.12.1",
        "fork-ts-checker-webpack-plugin": "^0.5.2",
        "globby": "^9.2.0",
        "ts-loader": "^5.3.3",
        "tslint": "^5.15.0",
        "webpack": "^4.0.0",
        "yorkie": "^2.0.0"
      }
    },
    "@vue/cli-plugin-unit-jest": {
      "version": "3.12.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/@vue/cli-plugin-unit-jest/-/cli-plugin-unit-jest-3.12.1.tgz",
      "integrity": "sha512-Cc9Kq4+RaUN1yfNVb7c9hVDNXo2tFTWHgwooCL3XWMu2iL+pDawQt8ZeSqauDY95JoMeEAVy2xBimjL+7jo/jw==",
      "dev": true,
      "requires": {
        "@vue/cli-shared-utils": "^3.12.1",
        "babel-jest": "^23.6.0",
        "babel-plugin-transform-es2015-modules-commonjs": "^6.26.2",
        "jest": "^23.6.0",
        "jest-serializer-vue": "^2.0.2",
        "jest-transform-stub": "^2.0.0",
        "jest-watch-typeahead": "0.2.1",
        "vue-jest": "^3.0.4"
      }
    },
    "@vue/cli-service": {
      "version": "3.12.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/@vue/cli-service/-/cli-service-3.12.1.tgz",
      "integrity": "sha512-PDxNrTGnSKzeV1ruFlsRIAO8JcPizwT0EJXq9GeyooU+p+sOkv7aKkCBJQVYNjZapD1NOGWx6CvAAC/wAW+gew==",
      "dev": true,
      "requires": {
        "@intervolga/optimize-cssnano-plugin": "^1.0.5",
        "@soda/friendly-errors-webpack-plugin": "^1.7.1",
        "@vue/cli-overlay": "^3.12.1",
        "@vue/cli-shared-utils": "^3.12.1",
        "@vue/component-compiler-utils": "^3.0.0",
        "@vue/preload-webpack-plugin": "^1.1.0",
        "@vue/web-component-wrapper": "^1.2.0",
        "acorn": "^6.1.1",
        "acorn-walk": "^6.1.1",
        "address": "^1.0.3",
        "autoprefixer": "^9.5.1",
        "browserslist": "^4.5.4",
        "cache-loader": "^2.0.1",
        "case-sensitive-paths-webpack-plugin": "^2.2.0",
        "chalk": "^2.4.2",
        "cli-highlight": "^2.1.0",
        "clipboardy": "^2.0.0",
        "cliui": "^5.0.0",
        "copy-webpack-plugin": "^4.6.0",
        "css-loader": "^1.0.1",
        "cssnano": "^4.1.10",
        "current-script-polyfill": "^1.0.0",
        "debug": "^4.1.1",
        "default-gateway": "^5.0.2",
        "dotenv": "^7.0.0",
        "dotenv-expand": "^5.1.0",
        "escape-string-regexp": "^1.0.5",
        "file-loader": "^3.0.1",
        "fs-extra": "^7.0.1",
        "globby": "^9.2.0",
        "hash-sum": "^1.0.2",
        "html-webpack-plugin": "^3.2.0",
        "launch-editor-middleware": "^2.2.1",
        "lodash.defaultsdeep": "^4.6.1",
        "lodash.mapvalues": "^4.6.0",
        "lodash.transform": "^4.6.0",
        "mini-css-extract-plugin": "^0.8.0",
        "minimist": "^1.2.0",
        "ora": "^3.4.0",
        "portfinder": "^1.0.20",
        "postcss-loader": "^3.0.0",
        "read-pkg": "^5.0.0",
        "semver": "^6.0.0",
        "slash": "^2.0.0",
        "source-map-url": "^0.4.0",
        "ssri": "^6.0.1",
        "string.prototype.padend": "^3.0.0",
        "terser-webpack-plugin": "^1.2.3",
        "thread-loader": "^2.1.2",
        "url-loader": "^1.1.2",
        "vue-loader": "^15.7.0",
        "webpack": "^4.0.0",
        "webpack-bundle-analyzer": "^3.3.0",
        "webpack-chain": "^4.11.0",
        "webpack-dev-server": "^3.4.1",
        "webpack-merge": "^4.2.1"
      },
      "dependencies": {
        "cliui": {
          "version": "5.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/cliui/-/cliui-5.0.0.tgz",
          "integrity": "sha512-PYeGSEmmHM6zvoef2w8TPzlrnNpXIjTipYK780YswmIP9vjxmd6Y2a3CB2Ks6/AU8NHjZugXvo8w3oWM2qnwXA==",
          "dev": true,
          "requires": {
            "string-width": "^3.1.0",
            "strip-ansi": "^5.2.0",
            "wrap-ansi": "^5.1.0"
          }
        },
        "emoji-regex": {
          "version": "7.0.3",
          "resolved": "http://maven.paic.com.cn/repository/npm/emoji-regex/-/emoji-regex-7.0.3.tgz",
          "integrity": "sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA==",
          "dev": true
        },
        "parse-json": {
          "version": "5.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/parse-json/-/parse-json-5.0.0.tgz",
          "integrity": "sha512-OOY5b7PAEFV0E2Fir1KOkxchnZNCdowAJgQ5NuxjpBKTRP3pQhwkrkxqQjeoKJ+fO7bCpmIZaogI4eZGDMEGOw==",
          "dev": true,
          "requires": {
            "@babel/code-frame": "^7.0.0",
            "error-ex": "^1.3.1",
            "json-parse-better-errors": "^1.0.1",
            "lines-and-columns": "^1.1.6"
          }
        },
        "read-pkg": {
          "version": "5.2.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/read-pkg/-/read-pkg-5.2.0.tgz",
          "integrity": "sha512-Ug69mNOpfvKDAc2Q8DRpMjjzdtrnv9HcSMX+4VsZxD1aZ6ZzrIE7rlzXBtWTyhULSMKg076AW6WR5iZpD0JiOg==",
          "dev": true,
          "requires": {
            "@types/normalize-package-data": "^2.4.0",
            "normalize-package-data": "^2.5.0",
            "parse-json": "^5.0.0",
            "type-fest": "^0.6.0"
          }
        },
        "semver": {
          "version": "6.3.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/semver/-/semver-6.3.0.tgz",
          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
          "dev": true
        },
        "string-width": {
          "version": "3.1.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/string-width/-/string-width-3.1.0.tgz",
          "integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
          "dev": true,
          "requires": {
            "emoji-regex": "^7.0.1",
            "is-fullwidth-code-point": "^2.0.0",
            "strip-ansi": "^5.1.0"
          }
        },
        "wrap-ansi": {
          "version": "5.1.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/wrap-ansi/-/wrap-ansi-5.1.0.tgz",
          "integrity": "sha512-QC1/iN/2/RPVJ5jYK8BGttj5z83LmSKmvbvrXPNCLZSEb32KKVDJDl/MOt2N01qU2H/FkzEa9PKto1BqDjtd7Q==",
          "dev": true,
          "requires": {
            "ansi-styles": "^3.2.0",
            "string-width": "^3.0.0",
            "strip-ansi": "^5.0.0"
          }
        }
      }
    },
    "@vue/cli-shared-utils": {
      "version": "3.12.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/@vue/cli-shared-utils/-/cli-shared-utils-3.12.1.tgz",
      "integrity": "sha512-jFblzRFjutGwu5utOKdVlPlsbA1lBUNNQlAThzNqej+JtTKJjnvjlhjKX0Gq0oOny5FjKWhoyfQ74p9h1qE6JQ==",
      "dev": true,
      "requires": {
        "@hapi/joi": "^15.0.1",
        "chalk": "^2.4.1",
        "execa": "^1.0.0",
        "launch-editor": "^2.2.1",
        "lru-cache": "^5.1.1",
        "node-ipc": "^9.1.1",
        "open": "^6.3.0",
        "ora": "^3.4.0",
        "request": "^2.87.0",
        "request-promise-native": "^1.0.7",
        "semver": "^6.0.0",
        "string.prototype.padstart": "^3.0.0"
      },
      "dependencies": {
        "semver": {
          "version": "6.3.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/semver/-/semver-6.3.0.tgz",
          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
          "dev": true
        }
      }
    },
    "@vue/component-compiler-utils": {
      "version": "3.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/@vue/component-compiler-utils/-/component-compiler-utils-3.1.0.tgz",
      "integrity": "sha512-OJ7swvl8LtKtX5aYP8jHhO6fQBIRIGkU6rvWzK+CGJiNOnvg16nzcBkd9qMZzW8trI2AsqAKx263nv7kb5rhZw==",
      "dev": true,
      "requires": {
        "consolidate": "^0.15.1",
        "hash-sum": "^1.0.2",
        "lru-cache": "^4.1.2",
        "merge-source-map": "^1.1.0",
        "postcss": "^7.0.14",
        "postcss-selector-parser": "^5.0.0",
        "prettier": "^1.18.2",
        "source-map": "~0.6.1",
        "vue-template-es2015-compiler": "^1.9.0"
      },
      "dependencies": {
        "lru-cache": {
          "version": "4.1.5",
          "resolved": "http://maven.paic.com.cn/repository/npm/lru-cache/-/lru-cache-4.1.5.tgz",
          "integrity": "sha512-sWZlbEP2OsHNkXrMl5GYk/jKk70MBng6UU4YI/qGDYbgf6YbP4EvmqISbXCoJiRKs+1bSpFHVgQxvJ17F2li5g==",
          "dev": true,
          "requires": {
            "pseudomap": "^1.0.2",
            "yallist": "^2.1.2"
          }
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        },
        "yallist": {
          "version": "2.1.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/yallist/-/yallist-2.1.2.tgz",
          "integrity": "sha1-HBH5IY8HYImkfdUS+TxmmaaoHVI=",
          "dev": true
        }
      }
    },
    "@vue/eslint-config-airbnb": {
      "version": "4.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/@vue/eslint-config-airbnb/-/eslint-config-airbnb-4.0.1.tgz",
      "integrity": "sha512-+4eD6qpiizX3v4mx5iSzMs7U2VecJw+c9TnverNYr94e0DD/mkIV0axTlAsBjkAjuqhjWS/E8F9/Pd7qRH03gA==",
      "dev": true,
      "requires": {
        "eslint-config-airbnb-base": "^13.1.0",
        "eslint-import-resolver-webpack": "^0.11.1",
        "eslint-plugin-import": "^2.17.3"
      }
    },
    "@vue/eslint-config-standard": {
      "version": "5.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/@vue/eslint-config-standard/-/eslint-config-standard-5.0.1.tgz",
      "integrity": "sha512-8QHYlaGcO1/0IDe0JpzF6DHsQgzHUCqnrBhsX+Y9NmM81ek5XWrxzKfoMQbNXnvy69D/NzI3+a4incYAR36J0A==",
      "requires": {
        "eslint-config-standard": "^14.1.0"
      }
    },
    "@vue/eslint-config-typescript": {
      "version": "4.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/@vue/eslint-config-typescript/-/eslint-config-typescript-4.0.0.tgz",
      "integrity": "sha512-uSMAMgw4xDgVdZQhpbtJRo8nMV4oOy3Ht8olfOo7xvYFYLMF2JZ1tDRKd9/NSusxA72O2Vma+HzmyzDHg9evcQ==",
      "dev": true,
      "requires": {
        "@typescript-eslint/eslint-plugin": "^1.1.0",
        "@typescript-eslint/parser": "^1.1.0"
      }
    },
    "@vue/preload-webpack-plugin": {
      "version": "1.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/@vue/preload-webpack-plugin/-/preload-webpack-plugin-1.1.1.tgz",
      "integrity": "sha512-8VCoJeeH8tCkzhkpfOkt+abALQkS11OIHhte5MBzYaKMTqK0A3ZAKEUVAffsOklhEv7t0yrQt696Opnu9oAx+w==",
      "dev": true
    },
    "@vue/test-utils": {
      "version": "1.0.0-beta.29",
      "resolved": "http://maven.paic.com.cn/repository/npm/@vue/test-utils/-/test-utils-1.0.0-beta.29.tgz",
      "integrity": "sha512-yX4sxEIHh4M9yAbLA/ikpEnGKMNBCnoX98xE1RwxfhQVcn0MaXNSj1Qmac+ZydTj6VBSEVukchBogXBTwc+9iA==",
      "dev": true,
      "requires": {
        "dom-event-types": "^1.0.0",
        "lodash": "^4.17.4"
      }
    },
    "@vue/web-component-wrapper": {
      "version": "1.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/@vue/web-component-wrapper/-/web-component-wrapper-1.2.0.tgz",
      "integrity": "sha512-Xn/+vdm9CjuC9p3Ae+lTClNutrVhsXpzxvoTXXtoys6kVRX9FkueSUAqSWAyZntmVLlR4DosBV4pH8y5Z/HbUw==",
      "dev": true
    },
    "@webassemblyjs/ast": {
      "version": "1.8.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/@webassemblyjs/ast/-/ast-1.8.5.tgz",
      "integrity": "sha512-aJMfngIZ65+t71C3y2nBBg5FFG0Okt9m0XEgWZ7Ywgn1oMAT8cNwx00Uv1cQyHtidq0Xn94R4TAywO+LCQ+ZAQ==",
      "dev": true,
      "requires": {
        "@webassemblyjs/helper-module-context": "1.8.5",
        "@webassemblyjs/helper-wasm-bytecode": "1.8.5",
        "@webassemblyjs/wast-parser": "1.8.5"
      }
    },
    "@webassemblyjs/floating-point-hex-parser": {
      "version": "1.8.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/@webassemblyjs/floating-point-hex-parser/-/floating-point-hex-parser-1.8.5.tgz",
      "integrity": "sha512-9p+79WHru1oqBh9ewP9zW95E3XAo+90oth7S5Re3eQnECGq59ly1Ri5tsIipKGpiStHsUYmY3zMLqtk3gTcOtQ==",
      "dev": true
    },
    "@webassemblyjs/helper-api-error": {
      "version": "1.8.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/@webassemblyjs/helper-api-error/-/helper-api-error-1.8.5.tgz",
      "integrity": "sha512-Za/tnzsvnqdaSPOUXHyKJ2XI7PDX64kWtURyGiJJZKVEdFOsdKUCPTNEVFZq3zJ2R0G5wc2PZ5gvdTRFgm81zA==",
      "dev": true
    },
    "@webassemblyjs/helper-buffer": {
      "version": "1.8.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/@webassemblyjs/helper-buffer/-/helper-buffer-1.8.5.tgz",
      "integrity": "sha512-Ri2R8nOS0U6G49Q86goFIPNgjyl6+oE1abW1pS84BuhP1Qcr5JqMwRFT3Ah3ADDDYGEgGs1iyb1DGX+kAi/c/Q==",
      "dev": true
    },
    "@webassemblyjs/helper-code-frame": {
      "version": "1.8.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/@webassemblyjs/helper-code-frame/-/helper-code-frame-1.8.5.tgz",
      "integrity": "sha512-VQAadSubZIhNpH46IR3yWO4kZZjMxN1opDrzePLdVKAZ+DFjkGD/rf4v1jap744uPVU6yjL/smZbRIIJTOUnKQ==",
      "dev": true,
      "requires": {
        "@webassemblyjs/wast-printer": "1.8.5"
      }
    },
    "@webassemblyjs/helper-fsm": {
      "version": "1.8.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/@webassemblyjs/helper-fsm/-/helper-fsm-1.8.5.tgz",
      "integrity": "sha512-kRuX/saORcg8se/ft6Q2UbRpZwP4y7YrWsLXPbbmtepKr22i8Z4O3V5QE9DbZK908dh5Xya4Un57SDIKwB9eow==",
      "dev": true
    },
    "@webassemblyjs/helper-module-context": {
      "version": "1.8.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/@webassemblyjs/helper-module-context/-/helper-module-context-1.8.5.tgz",
      "integrity": "sha512-/O1B236mN7UNEU4t9X7Pj38i4VoU8CcMHyy3l2cV/kIF4U5KoHXDVqcDuOs1ltkac90IM4vZdHc52t1x8Yfs3g==",
      "dev": true,
      "requires": {
        "@webassemblyjs/ast": "1.8.5",
        "mamacro": "^0.0.3"
      }
    },
    "@webassemblyjs/helper-wasm-bytecode": {
      "version": "1.8.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/@webassemblyjs/helper-wasm-bytecode/-/helper-wasm-bytecode-1.8.5.tgz",
      "integrity": "sha512-Cu4YMYG3Ddl72CbmpjU/wbP6SACcOPVbHN1dI4VJNJVgFwaKf1ppeFJrwydOG3NDHxVGuCfPlLZNyEdIYlQ6QQ==",
      "dev": true
    },
    "@webassemblyjs/helper-wasm-section": {
      "version": "1.8.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/@webassemblyjs/helper-wasm-section/-/helper-wasm-section-1.8.5.tgz",
      "integrity": "sha512-VV083zwR+VTrIWWtgIUpqfvVdK4ff38loRmrdDBgBT8ADXYsEZ5mPQ4Nde90N3UYatHdYoDIFb7oHzMncI02tA==",
      "dev": true,
      "requires": {
        "@webassemblyjs/ast": "1.8.5",
        "@webassemblyjs/helper-buffer": "1.8.5",
        "@webassemblyjs/helper-wasm-bytecode": "1.8.5",
        "@webassemblyjs/wasm-gen": "1.8.5"
      }
    },
    "@webassemblyjs/ieee754": {
      "version": "1.8.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/@webassemblyjs/ieee754/-/ieee754-1.8.5.tgz",
      "integrity": "sha512-aaCvQYrvKbY/n6wKHb/ylAJr27GglahUO89CcGXMItrOBqRarUMxWLJgxm9PJNuKULwN5n1csT9bYoMeZOGF3g==",
      "dev": true,
      "requires": {
        "@xtuc/ieee754": "^1.2.0"
      }
    },
    "@webassemblyjs/leb128": {
      "version": "1.8.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/@webassemblyjs/leb128/-/leb128-1.8.5.tgz",
      "integrity": "sha512-plYUuUwleLIziknvlP8VpTgO4kqNaH57Y3JnNa6DLpu/sGcP6hbVdfdX5aHAV716pQBKrfuU26BJK29qY37J7A==",
      "dev": true,
      "requires": {
        "@xtuc/long": "4.2.2"
      }
    },
    "@webassemblyjs/utf8": {
      "version": "1.8.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/@webassemblyjs/utf8/-/utf8-1.8.5.tgz",
      "integrity": "sha512-U7zgftmQriw37tfD934UNInokz6yTmn29inT2cAetAsaU9YeVCveWEwhKL1Mg4yS7q//NGdzy79nlXh3bT8Kjw==",
      "dev": true
    },
    "@webassemblyjs/wasm-edit": {
      "version": "1.8.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/@webassemblyjs/wasm-edit/-/wasm-edit-1.8.5.tgz",
      "integrity": "sha512-A41EMy8MWw5yvqj7MQzkDjU29K7UJq1VrX2vWLzfpRHt3ISftOXqrtojn7nlPsZ9Ijhp5NwuODuycSvfAO/26Q==",
      "dev": true,
      "requires": {
        "@webassemblyjs/ast": "1.8.5",
        "@webassemblyjs/helper-buffer": "1.8.5",
        "@webassemblyjs/helper-wasm-bytecode": "1.8.5",
        "@webassemblyjs/helper-wasm-section": "1.8.5",
        "@webassemblyjs/wasm-gen": "1.8.5",
        "@webassemblyjs/wasm-opt": "1.8.5",
        "@webassemblyjs/wasm-parser": "1.8.5",
        "@webassemblyjs/wast-printer": "1.8.5"
      }
    },
    "@webassemblyjs/wasm-gen": {
      "version": "1.8.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/@webassemblyjs/wasm-gen/-/wasm-gen-1.8.5.tgz",
      "integrity": "sha512-BCZBT0LURC0CXDzj5FXSc2FPTsxwp3nWcqXQdOZE4U7h7i8FqtFK5Egia6f9raQLpEKT1VL7zr4r3+QX6zArWg==",
      "dev": true,
      "requires": {
        "@webassemblyjs/ast": "1.8.5",
        "@webassemblyjs/helper-wasm-bytecode": "1.8.5",
        "@webassemblyjs/ieee754": "1.8.5",
        "@webassemblyjs/leb128": "1.8.5",
        "@webassemblyjs/utf8": "1.8.5"
      }
    },
    "@webassemblyjs/wasm-opt": {
      "version": "1.8.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/@webassemblyjs/wasm-opt/-/wasm-opt-1.8.5.tgz",
      "integrity": "sha512-HKo2mO/Uh9A6ojzu7cjslGaHaUU14LdLbGEKqTR7PBKwT6LdPtLLh9fPY33rmr5wcOMrsWDbbdCHq4hQUdd37Q==",
      "dev": true,
      "requires": {
        "@webassemblyjs/ast": "1.8.5",
        "@webassemblyjs/helper-buffer": "1.8.5",
        "@webassemblyjs/wasm-gen": "1.8.5",
        "@webassemblyjs/wasm-parser": "1.8.5"
      }
    },
    "@webassemblyjs/wasm-parser": {
      "version": "1.8.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/@webassemblyjs/wasm-parser/-/wasm-parser-1.8.5.tgz",
      "integrity": "sha512-pi0SYE9T6tfcMkthwcgCpL0cM9nRYr6/6fjgDtL6q/ZqKHdMWvxitRi5JcZ7RI4SNJJYnYNaWy5UUrHQy998lw==",
      "dev": true,
      "requires": {
        "@webassemblyjs/ast": "1.8.5",
        "@webassemblyjs/helper-api-error": "1.8.5",
        "@webassemblyjs/helper-wasm-bytecode": "1.8.5",
        "@webassemblyjs/ieee754": "1.8.5",
        "@webassemblyjs/leb128": "1.8.5",
        "@webassemblyjs/utf8": "1.8.5"
      }
    },
    "@webassemblyjs/wast-parser": {
      "version": "1.8.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/@webassemblyjs/wast-parser/-/wast-parser-1.8.5.tgz",
      "integrity": "sha512-daXC1FyKWHF1i11obK086QRlsMsY4+tIOKgBqI1lxAnkp9xe9YMcgOxm9kLe+ttjs5aWV2KKE1TWJCN57/Btsg==",
      "dev": true,
      "requires": {
        "@webassemblyjs/ast": "1.8.5",
        "@webassemblyjs/floating-point-hex-parser": "1.8.5",
        "@webassemblyjs/helper-api-error": "1.8.5",
        "@webassemblyjs/helper-code-frame": "1.8.5",
        "@webassemblyjs/helper-fsm": "1.8.5",
        "@xtuc/long": "4.2.2"
      }
    },
    "@webassemblyjs/wast-printer": {
      "version": "1.8.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/@webassemblyjs/wast-printer/-/wast-printer-1.8.5.tgz",
      "integrity": "sha512-w0U0pD4EhlnvRyeJzBqaVSJAo9w/ce7/WPogeXLzGkO6hzhr4GnQIZ4W4uUt5b9ooAaXPtnXlj0gzsXEOUNYMg==",
      "dev": true,
      "requires": {
        "@webassemblyjs/ast": "1.8.5",
        "@webassemblyjs/wast-parser": "1.8.5",
        "@xtuc/long": "4.2.2"
      }
    },
    "@xtuc/ieee754": {
      "version": "1.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/@xtuc/ieee754/-/ieee754-1.2.0.tgz",
      "integrity": "sha512-DX8nKgqcGwsc0eJSqYt5lwP4DH5FlHnmuWWBRy7X0NcaGR0ZtuyeESgMwTYVEtxmsNGY+qit4QYT/MIYTOTPeA==",
      "dev": true
    },
    "@xtuc/long": {
      "version": "4.2.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/@xtuc/long/-/long-4.2.2.tgz",
      "integrity": "sha512-NuHqBY1PB/D8xU6s/thBgOAiAP7HOYDQ32+BFZILJ8ivkUkAHQnWfn6WhL79Owj1qmUnoN/YPhktdIoucipkAQ==",
      "dev": true
    },
    "abab": {
      "version": "2.0.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/abab/-/abab-2.0.3.tgz",
      "integrity": "sha512-tsFzPpcttalNjFBCFMqsKYQcWxxen1pgJR56by//QwvJc4/OUS3kPOOttx2tSIfjsylB0pYu7f5D3K1RCxUnUg==",
      "dev": true
    },
    "abbrev": {
      "version": "1.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/abbrev/-/abbrev-1.1.1.tgz",
      "integrity": "sha512-nne9/IiQ/hzIhY6pdDnbBtz7DjPTKrY00P/zvPSm5pOFkl6xuGrGnXn/VtTNNfNtAfZ9/1RtehkszU9qcTii0Q==",
      "dev": true
    },
    "accepts": {
      "version": "1.3.7",
      "resolved": "http://maven.paic.com.cn/repository/npm/accepts/-/accepts-1.3.7.tgz",
      "integrity": "sha512-Il80Qs2WjYlJIBNzNkK6KYqlVMTbZLXgHx2oT0pU/fjRHyEp+PEfEPY0R3WCwAGVOtauxh1hOxNgIf5bv7dQpA==",
      "dev": true,
      "requires": {
        "mime-types": "~2.1.24",
        "negotiator": "0.6.2"
      }
    },
    "acorn": {
      "version": "6.4.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/acorn/-/acorn-6.4.0.tgz",
      "integrity": "sha512-gac8OEcQ2Li1dxIEWGZzsp2BitJxwkwcOm0zHAJLcPJaVvm58FRnk6RkuLRpU1EujipU2ZFODv2P9DLMfnV8mw==",
      "dev": true
    },
    "acorn-globals": {
      "version": "4.3.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/acorn-globals/-/acorn-globals-4.3.4.tgz",
      "integrity": "sha512-clfQEh21R+D0leSbUdWf3OcfqyaCSAQ8Ryq00bofSekfr9W8u1jyYZo6ir0xu9Gtcf7BjcHJpnbZH7JOCpP60A==",
      "dev": true,
      "requires": {
        "acorn": "^6.0.1",
        "acorn-walk": "^6.0.1"
      }
    },
    "acorn-jsx": {
      "version": "3.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/acorn-jsx/-/acorn-jsx-3.0.1.tgz",
      "integrity": "sha1-r9+UiPsezvyDSPb7IvRk4ypYs2s=",
      "dev": true,
      "optional": true,
      "requires": {
        "acorn": "^3.0.4"
      },
      "dependencies": {
        "acorn": {
          "version": "3.3.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/acorn/-/acorn-3.3.0.tgz",
          "integrity": "sha1-ReN/s56No/JbruP/U2niu18iAXo=",
          "dev": true,
          "optional": true
        }
      }
    },
    "acorn-walk": {
      "version": "6.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/acorn-walk/-/acorn-walk-6.2.0.tgz",
      "integrity": "sha512-7evsyfH1cLOCdAzZAd43Cic04yKydNx0cF+7tiA19p1XnLLPU4dpCQOqpjqwokFe//vS0QqfqqjCS2JkiIs0cA==",
      "dev": true
    },
    "address": {
      "version": "1.1.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/address/-/address-1.1.2.tgz",
      "integrity": "sha512-aT6camzM4xEA54YVJYSqxz1kv4IHnQZRtThJJHhUMRExaU5spC7jX5ugSwTaTgJliIgs4VhZOk7htClvQ/LmRA==",
      "dev": true
    },
    "ajv": {
      "version": "6.10.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/ajv/-/ajv-6.10.2.tgz",
      "integrity": "sha512-TXtUUEYHuaTEbLZWIKUr5pmBuhDLy+8KYtPYdcV8qC+pOZL+NKqYwvWSRrVXHn+ZmRRAu8vJTAznH7Oag6RVRw==",
      "dev": true,
      "requires": {
        "fast-deep-equal": "^2.0.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      }
    },
    "ajv-errors": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/ajv-errors/-/ajv-errors-1.0.1.tgz",
      "integrity": "sha512-DCRfO/4nQ+89p/RK43i8Ezd41EqdGIU4ld7nGF8OQ14oc/we5rEntLCUa7+jrn3nn83BosfwZA0wb4pon2o8iQ==",
      "dev": true
    },
    "ajv-keywords": {
      "version": "3.4.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/ajv-keywords/-/ajv-keywords-3.4.1.tgz",
      "integrity": "sha512-RO1ibKvd27e6FEShVFfPALuHI3WjSVNeK5FIsmme/LYRNxjKuNj+Dt7bucLa6NdSv3JcVTyMlm9kGR84z1XpaQ==",
      "dev": true
    },
    "alphanum-sort": {
      "version": "1.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/alphanum-sort/-/alphanum-sort-1.0.2.tgz",
      "integrity": "sha1-l6ERlkmyEa0zaR2fn0hqjsn74KM=",
      "dev": true
    },
    "ansi-colors": {
      "version": "3.2.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/ansi-colors/-/ansi-colors-3.2.4.tgz",
      "integrity": "sha512-hHUXGagefjN2iRrID63xckIvotOXOojhQKWIPUZ4mNUZ9nLZW+7FMNoE1lOkEhNWYsx/7ysGIuJYCiMAA9FnrA==",
      "dev": true
    },
    "ansi-escapes": {
      "version": "3.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/ansi-escapes/-/ansi-escapes-3.2.0.tgz",
      "integrity": "sha512-cBhpre4ma+U0T1oM5fXg7Dy1Jw7zzwv7lt/GoCpr+hDQJoYnKVPLL4dCvSEFMmQurOQvSrwT7SL/DAlhBI97RQ==",
      "dev": true
    },
    "ansi-html": {
      "version": "0.0.7",
      "resolved": "http://maven.paic.com.cn/repository/npm/ansi-html/-/ansi-html-0.0.7.tgz",
      "integrity": "sha1-gTWEAhliqenm/QOflA0S9WynhZ4=",
      "dev": true
    },
    "ansi-regex": {
      "version": "4.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/ansi-regex/-/ansi-regex-4.1.0.tgz",
      "integrity": "sha512-1apePfXM1UOSqw0o9IiFAovVz9M5S1Dg+4TrDwfMewQ6p/rmMueb7tWZjQ1rx4Loy1ArBggoqGpfqqdI4rondg==",
      "dev": true
    },
    "ansi-styles": {
      "version": "3.2.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "dev": true,
      "requires": {
        "color-convert": "^1.9.0"
      }
    },
    "any-promise": {
      "version": "1.3.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/any-promise/-/any-promise-1.3.0.tgz",
      "integrity": "sha1-q8av7tzqUugJzcA3au0845Y10X8=",
      "dev": true
    },
    "anymatch": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/anymatch/-/anymatch-2.0.0.tgz",
      "integrity": "sha512-5teOsQWABXHHBFP9y3skS5P3d/WfWXpv3FUpy+LorMrNYaT9pI4oLMQX7jzQ2KklNpGpWHzdCXTDT2Y3XGlZBw==",
      "dev": true,
      "requires": {
        "micromatch": "^3.1.4",
        "normalize-path": "^2.1.1"
      },
      "dependencies": {
        "normalize-path": {
          "version": "2.1.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/normalize-path/-/normalize-path-2.1.1.tgz",
          "integrity": "sha1-GrKLVW4Zg2Oowab35vogE3/mrtk=",
          "dev": true,
          "requires": {
            "remove-trailing-separator": "^1.0.1"
          }
        }
      }
    },
    "append-transform": {
      "version": "0.4.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/append-transform/-/append-transform-0.4.0.tgz",
      "integrity": "sha1-126/jKlNJ24keja61EpLdKthGZE=",
      "dev": true,
      "requires": {
        "default-require-extensions": "^1.0.0"
      }
    },
    "aproba": {
      "version": "1.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/aproba/-/aproba-1.2.0.tgz",
      "integrity": "sha512-Y9J6ZjXtoYh8RnXVCMOU/ttDmk1aBjunq9vO0ta5x85WDQiQfUF9sIPBITdbiiIVcBo03Hi3jMxigBtsddlXRw==",
      "dev": true
    },
    "arch": {
      "version": "2.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/arch/-/arch-2.1.1.tgz",
      "integrity": "sha512-BLM56aPo9vLLFVa8+/+pJLnrZ7QGGTVHWsCwieAWT9o9K8UeGaQbzZbGoabWLOo2ksBCztoXdqBZBplqLDDCSg==",
      "dev": true
    },
    "argparse": {
      "version": "1.0.10",
      "resolved": "http://maven.paic.com.cn/repository/npm/argparse/-/argparse-1.0.10.tgz",
      "integrity": "sha512-o5Roy6tNG4SL/FOkCAN6RzjiakZS25RLYFrcMttJqbdd8BWrnA+fGz57iN5Pb06pvBGvl5gQ0B48dJlslXvoTg==",
      "dev": true,
      "requires": {
        "sprintf-js": "~1.0.2"
      }
    },
    "arr-diff": {
      "version": "4.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/arr-diff/-/arr-diff-4.0.0.tgz",
      "integrity": "sha1-1kYQdP6/7HHn4VI1dhoyml3HxSA=",
      "dev": true
    },
    "arr-flatten": {
      "version": "1.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/arr-flatten/-/arr-flatten-1.1.0.tgz",
      "integrity": "sha512-L3hKV5R/p5o81R7O02IGnwpDmkp6E982XhtbuwSe3O4qOtMMMtodicASA1Cny2U+aCXcNpml+m4dPsvsJ3jatg==",
      "dev": true
    },
    "arr-union": {
      "version": "3.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/arr-union/-/arr-union-3.1.0.tgz",
      "integrity": "sha1-45sJrqne+Gao8gbiiK9jkZuuOcQ=",
      "dev": true
    },
    "array-equal": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/array-equal/-/array-equal-1.0.0.tgz",
      "integrity": "sha1-jCpe8kcv2ep0KwTHenUJO6J1fJM=",
      "dev": true
    },
    "array-find": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/array-find/-/array-find-1.0.0.tgz",
      "integrity": "sha1-bI4obRHtdoMn+OYuzuhzU8o+eLg=",
      "dev": true
    },
    "array-flatten": {
      "version": "1.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/array-flatten/-/array-flatten-1.1.1.tgz",
      "integrity": "sha1-ml9pkFGx5wczKPKgCJaLZOopVdI=",
      "dev": true
    },
    "array-includes": {
      "version": "3.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/array-includes/-/array-includes-3.1.0.tgz",
      "integrity": "sha512-ONOEQoKrvXPKk7Su92Co0YMqYO32FfqJTzkKU9u2UpIXyYZIzLSvpdg4AwvSw4mSUW0czu6inK+zby6Oj6gDjQ==",
      "dev": true,
      "requires": {
        "define-properties": "^1.1.3",
        "es-abstract": "^1.17.0-next.0"
      }
    },
    "array-union": {
      "version": "1.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/array-union/-/array-union-1.0.2.tgz",
      "integrity": "sha1-mjRBDk9OPaI96jdb5b5w8kd47Dk=",
      "dev": true,
      "requires": {
        "array-uniq": "^1.0.1"
      }
    },
    "array-uniq": {
      "version": "1.0.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/array-uniq/-/array-uniq-1.0.3.tgz",
      "integrity": "sha1-r2rId6Jcx/dOBYiUdThY39sk/bY=",
      "dev": true
    },
    "array-unique": {
      "version": "0.3.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/array-unique/-/array-unique-0.3.2.tgz",
      "integrity": "sha1-qJS3XUvE9s1nnvMkSp/Y9Gri1Cg=",
      "dev": true
    },
    "array.prototype.flat": {
      "version": "1.2.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/array.prototype.flat/-/array.prototype.flat-1.2.3.tgz",
      "integrity": "sha512-gBlRZV0VSmfPIeWfuuy56XZMvbVfbEUnOXUvt3F/eUUUSyzlgLxhEX4YAEpxNAogRGehPSnfXyPtYyKAhkzQhQ==",
      "dev": true,
      "requires": {
        "define-properties": "^1.1.3",
        "es-abstract": "^1.17.0-next.1"
      }
    },
    "arrify": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/arrify/-/arrify-1.0.1.tgz",
      "integrity": "sha1-iYUI2iIm84DfkEcoRWhJwVAaSw0=",
      "dev": true
    },
    "asap": {
      "version": "2.0.6",
      "resolved": "http://maven.paic.com.cn/repository/npm/asap/-/asap-2.0.6.tgz",
      "integrity": "sha1-5QNHYR1+aQlDIIu9r+vLwvuGbUY=",
      "dev": true,
      "optional": true
    },
    "asn1": {
      "version": "0.2.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/asn1/-/asn1-0.2.4.tgz",
      "integrity": "sha512-jxwzQpLQjSmWXgwaCZE9Nz+glAG01yF1QnWgbhGwHI5A6FRIEY6IVqtHhIepHqI7/kyEyQEagBC5mBEFlIYvdg==",
      "dev": true,
      "requires": {
        "safer-buffer": "~2.1.0"
      }
    },
    "asn1.js": {
      "version": "4.10.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/asn1.js/-/asn1.js-4.10.1.tgz",
      "integrity": "sha512-p32cOF5q0Zqs9uBiONKYLm6BClCoBCM5O9JfeUSlnQLBTxYdTK+pW+nXflm8UkKd2UYlEbYz5qEi0JuZR9ckSw==",
      "dev": true,
      "requires": {
        "bn.js": "^4.0.0",
        "inherits": "^2.0.1",
        "minimalistic-assert": "^1.0.0"
      }
    },
    "assert": {
      "version": "1.5.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/assert/-/assert-1.5.0.tgz",
      "integrity": "sha512-EDsgawzwoun2CZkCgtxJbv392v4nbk9XDD06zI+kQYoBM/3RBWLlEyJARDOmhAAosBjWACEkKL6S+lIZtcAubA==",
      "dev": true,
      "requires": {
        "object-assign": "^4.1.1",
        "util": "0.10.3"
      },
      "dependencies": {
        "inherits": {
          "version": "2.0.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/inherits/-/inherits-2.0.1.tgz",
          "integrity": "sha1-sX0I0ya0Qj5Wjv9xn5GwscvfafE=",
          "dev": true
        },
        "util": {
          "version": "0.10.3",
          "resolved": "http://maven.paic.com.cn/repository/npm/util/-/util-0.10.3.tgz",
          "integrity": "sha1-evsa/lCAUkZInj23/g7TeTNqwPk=",
          "dev": true,
          "requires": {
            "inherits": "2.0.1"
          }
        }
      }
    },
    "assert-plus": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/assert-plus/-/assert-plus-1.0.0.tgz",
      "integrity": "sha1-8S4PPF13sLHN2RRpQuTpbB5N1SU=",
      "dev": true
    },
    "assign-symbols": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/assign-symbols/-/assign-symbols-1.0.0.tgz",
      "integrity": "sha1-WWZ/QfrdTyDMvCu5a41Pf3jsA2c=",
      "dev": true
    },
    "astral-regex": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/astral-regex/-/astral-regex-1.0.0.tgz",
      "integrity": "sha512-+Ryf6g3BKoRc7jfp7ad8tM4TtMiaWvbF/1/sQcZPkkS7ag3D5nMBCe2UfOTONtAkaG0tO0ij3C5Lwmf1EiyjHg==",
      "dev": true
    },
    "async": {
      "version": "2.6.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/async/-/async-2.6.3.tgz",
      "integrity": "sha512-zflvls11DCy+dQWzTW2dzuilv8Z5X/pjfmZOWba6TNIVDm+2UDaJmXSOXlasHKfNBs8oo3M0aT50fDEWfKZjXg==",
      "dev": true,
      "requires": {
        "lodash": "^4.17.14"
      }
    },
    "async-each": {
      "version": "1.0.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/async-each/-/async-each-1.0.3.tgz",
      "integrity": "sha512-z/WhQ5FPySLdvREByI2vZiTWwCnF0moMJ1hK9YQwDTHKh6I7/uSckMetoRGb5UBZPC1z0jlw+n/XCgjeH7y1AQ==",
      "dev": true
    },
    "async-limiter": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/async-limiter/-/async-limiter-1.0.1.tgz",
      "integrity": "sha512-csOlWGAcRFJaI6m+F2WKdnMKr4HhdhFVBk0H/QbJFMCr+uO2kwohwXQPxw/9OCxp05r5ghVBFSyioixx3gfkNQ==",
      "dev": true
    },
    "async-validator": {
      "version": "1.12.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/async-validator/-/async-validator-1.12.2.tgz",
      "integrity": "sha512-57EETfCPFiB7M4QscvQzWSGNsmtkjjzZv318SK1CBlstk+hycV72ocjriMOOM48HjvmoAoJGpJNjC7Z76RlnZA=="
    },
    "asynckit": {
      "version": "0.4.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/asynckit/-/asynckit-0.4.0.tgz",
      "integrity": "sha1-x57Zf380y48robyXkLzDZkdLS3k=",
      "dev": true
    },
    "atob": {
      "version": "2.1.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/atob/-/atob-2.1.2.tgz",
      "integrity": "sha512-Wm6ukoaOGJi/73p/cl2GvLjTI5JM1k/O14isD73YML8StrH/7/lRFgmg8nICZgD3bZZvjwCGxtMOD3wWNAu8cg==",
      "dev": true
    },
    "autoprefixer": {
      "version": "9.7.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/autoprefixer/-/autoprefixer-9.7.3.tgz",
      "integrity": "sha512-8T5Y1C5Iyj6PgkPSFd0ODvK9DIleuPKUPYniNxybS47g2k2wFgLZ46lGQHlBuGKIAEV8fbCDfKCCRS1tvOgc3Q==",
      "dev": true,
      "requires": {
        "browserslist": "^4.8.0",
        "caniuse-lite": "^1.0.30001012",
        "chalk": "^2.4.2",
        "normalize-range": "^0.1.2",
        "num2fraction": "^1.2.2",
        "postcss": "^7.0.23",
        "postcss-value-parser": "^4.0.2"
      },
      "dependencies": {
        "postcss-value-parser": {
          "version": "4.0.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/postcss-value-parser/-/postcss-value-parser-4.0.2.tgz",
          "integrity": "sha512-LmeoohTpp/K4UiyQCwuGWlONxXamGzCMtFxLq4W1nZVGIQLYvMCJx3yAF9qyyuFpflABI9yVdtJAqbihOsCsJQ==",
          "dev": true
        }
      }
    },
    "aws-sign2": {
      "version": "0.7.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/aws-sign2/-/aws-sign2-0.7.0.tgz",
      "integrity": "sha1-tG6JCTSpWR8tL2+G1+ap8bP+dqg=",
      "dev": true
    },
    "aws4": {
      "version": "1.9.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/aws4/-/aws4-1.9.0.tgz",
      "integrity": "sha512-Uvq6hVe90D0B2WEnUqtdgY1bATGz3mw33nH9Y+dmA+w5DHvUmBgkr5rM/KCHpCsiFNRUfokW/szpPPgMK2hm4A==",
      "dev": true
    },
    "axios": {
      "version": "0.19.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/axios/-/axios-0.19.0.tgz",
      "integrity": "sha512-1uvKqKQta3KBxIz14F2v06AEHZ/dIoeKfbTRkK1E5oqjDnuEerLmYTgJB5AiQZHJcljpg1TuRzdjDR06qNk0DQ==",
      "requires": {
        "follow-redirects": "1.5.10",
        "is-buffer": "^2.0.2"
      },
      "dependencies": {
        "debug": {
          "version": "3.1.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/debug/-/debug-3.1.0.tgz",
          "integrity": "sha512-OX8XqP7/1a9cqkxYw2yXss15f26NKWBpDXQd0/uK/KPqdQhxbPa994hnzjcE2VqQpDslf55723cKPUOGSmMY3g==",
          "requires": {
            "ms": "2.0.0"
          }
        },
        "follow-redirects": {
          "version": "1.5.10",
          "resolved": "http://maven.paic.com.cn/repository/npm/follow-redirects/-/follow-redirects-1.5.10.tgz",
          "integrity": "sha512-0V5l4Cizzvqt5D44aTXbFZz+FtyXV1vrDN6qrelxtfYQKW0KO0W2T/hkE8xvGa/540LkZlkaUjO4ailYTFtHVQ==",
          "requires": {
            "debug": "=3.1.0"
          }
        },
        "is-buffer": {
          "version": "2.0.4",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-buffer/-/is-buffer-2.0.4.tgz",
          "integrity": "sha512-Kq1rokWXOPXWuaMAqZiJW4XxsmD9zGx9q4aePabbn3qCRGedtH7Cm+zV8WETitMfu1wdh+Rvd6w5egwSngUX2A=="
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
        }
      }
    },
    "babel-code-frame": {
      "version": "6.26.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/babel-code-frame/-/babel-code-frame-6.26.0.tgz",
      "integrity": "sha1-Y/1D99weO7fONZR9uP42mj9Yx0s=",
      "dev": true,
      "requires": {
        "chalk": "^1.1.3",
        "esutils": "^2.0.2",
        "js-tokens": "^3.0.2"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "2.1.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/ansi-regex/-/ansi-regex-2.1.1.tgz",
          "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",
          "dev": true
        },
        "ansi-styles": {
          "version": "2.2.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/ansi-styles/-/ansi-styles-2.2.1.tgz",
          "integrity": "sha1-tDLdM1i2NM914eRmQ2gkBTPB3b4=",
          "dev": true
        },
        "chalk": {
          "version": "1.1.3",
          "resolved": "http://maven.paic.com.cn/repository/npm/chalk/-/chalk-1.1.3.tgz",
          "integrity": "sha1-qBFcVeSnAv5NFQq9OHKCKn4J/Jg=",
          "dev": true,
          "requires": {
            "ansi-styles": "^2.2.1",
            "escape-string-regexp": "^1.0.2",
            "has-ansi": "^2.0.0",
            "strip-ansi": "^3.0.0",
            "supports-color": "^2.0.0"
          }
        },
        "js-tokens": {
          "version": "3.0.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/js-tokens/-/js-tokens-3.0.2.tgz",
          "integrity": "sha1-mGbfOVECEw449/mWvOtlRDIJwls=",
          "dev": true
        },
        "strip-ansi": {
          "version": "3.0.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/strip-ansi/-/strip-ansi-3.0.1.tgz",
          "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
          "dev": true,
          "requires": {
            "ansi-regex": "^2.0.0"
          }
        },
        "supports-color": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/supports-color/-/supports-color-2.0.0.tgz",
          "integrity": "sha1-U10EXOa2Nj+kARcIRimZXp3zJMc=",
          "dev": true
        }
      }
    },
    "babel-core": {
      "version": "7.0.0-bridge.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/babel-core/-/babel-core-7.0.0-bridge.0.tgz",
      "integrity": "sha512-poPX9mZH/5CSanm50Q+1toVci6pv5KSRv/5TWCwtzQS5XEwn40BcCrgIeMFWP9CKKIniKXNxoIOnOq4VVlGXhg==",
      "dev": true
    },
    "babel-eslint": {
      "version": "10.0.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/babel-eslint/-/babel-eslint-10.0.3.tgz",
      "integrity": "sha512-z3U7eMY6r/3f3/JB9mTsLjyxrv0Yb1zb8PCWCLpguxfCzBIZUwy23R1t/XKewP+8mEN2Ck8Dtr4q20z6ce6SoA==",
      "dev": true,
      "requires": {
        "@babel/code-frame": "^7.0.0",
        "@babel/parser": "^7.0.0",
        "@babel/traverse": "^7.0.0",
        "@babel/types": "^7.0.0",
        "eslint-visitor-keys": "^1.0.0",
        "resolve": "^1.12.0"
      }
    },
    "babel-generator": {
      "version": "6.26.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/babel-generator/-/babel-generator-6.26.1.tgz",
      "integrity": "sha512-HyfwY6ApZj7BYTcJURpM5tznulaBvyio7/0d4zFOeMPUmfxkCjHocCuoLa2SAGzBI8AREcH3eP3758F672DppA==",
      "dev": true,
      "requires": {
        "babel-messages": "^6.23.0",
        "babel-runtime": "^6.26.0",
        "babel-types": "^6.26.0",
        "detect-indent": "^4.0.0",
        "jsesc": "^1.3.0",
        "lodash": "^4.17.4",
        "source-map": "^0.5.7",
        "trim-right": "^1.0.1"
      },
      "dependencies": {
        "jsesc": {
          "version": "1.3.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/jsesc/-/jsesc-1.3.0.tgz",
          "integrity": "sha1-RsP+yMGJKxKwgz25vHYiF226s0s=",
          "dev": true
        }
      }
    },
    "babel-helper-vue-jsx-merge-props": {
      "version": "2.0.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/babel-helper-vue-jsx-merge-props/-/babel-helper-vue-jsx-merge-props-2.0.3.tgz",
      "integrity": "sha512-gsLiKK7Qrb7zYJNgiXKpXblxbV5ffSwR0f5whkPAaBAR4fhi6bwRZxX9wBlIc5M/v8CCkXUbXZL4N/nSE97cqg=="
    },
    "babel-helpers": {
      "version": "6.24.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/babel-helpers/-/babel-helpers-6.24.1.tgz",
      "integrity": "sha1-NHHenK7DiOXIUOWX5Yom3fN2ArI=",
      "dev": true,
      "requires": {
        "babel-runtime": "^6.22.0",
        "babel-template": "^6.24.1"
      }
    },
    "babel-jest": {
      "version": "23.6.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/babel-jest/-/babel-jest-23.6.0.tgz",
      "integrity": "sha512-lqKGG6LYXYu+DQh/slrQ8nxXQkEkhugdXsU6St7GmhVS7Ilc/22ArwqXNJrf0QaOBjZB0360qZMwXqDYQHXaew==",
      "dev": true,
      "requires": {
        "babel-plugin-istanbul": "^4.1.6",
        "babel-preset-jest": "^23.2.0"
      }
    },
    "babel-loader": {
      "version": "8.0.6",
      "resolved": "http://maven.paic.com.cn/repository/npm/babel-loader/-/babel-loader-8.0.6.tgz",
      "integrity": "sha512-4BmWKtBOBm13uoUwd08UwjZlaw3O9GWf456R9j+5YykFZ6LUIjIKLc0zEZf+hauxPOJs96C8k6FvYD09vWzhYw==",
      "dev": true,
      "requires": {
        "find-cache-dir": "^2.0.0",
        "loader-utils": "^1.0.2",
        "mkdirp": "^0.5.1",
        "pify": "^4.0.1"
      }
    },
    "babel-messages": {
      "version": "6.23.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/babel-messages/-/babel-messages-6.23.0.tgz",
      "integrity": "sha1-8830cDhYA1sqKVHG7F7fbGLyYw4=",
      "dev": true,
      "requires": {
        "babel-runtime": "^6.22.0"
      }
    },
    "babel-plugin-dynamic-import-node": {
      "version": "2.3.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/babel-plugin-dynamic-import-node/-/babel-plugin-dynamic-import-node-2.3.0.tgz",
      "integrity": "sha512-o6qFkpeQEBxcqt0XYlWzAVxNCSCZdUgcR8IRlhD/8DylxjjO4foPcvTW0GGKa/cVt3rvxZ7o5ippJ+/0nvLhlQ==",
      "dev": true,
      "requires": {
        "object.assign": "^4.1.0"
      }
    },
    "babel-plugin-istanbul": {
      "version": "4.1.6",
      "resolved": "http://maven.paic.com.cn/repository/npm/babel-plugin-istanbul/-/babel-plugin-istanbul-4.1.6.tgz",
      "integrity": "sha512-PWP9FQ1AhZhS01T/4qLSKoHGY/xvkZdVBGlKM/HuxxS3+sC66HhTNR7+MpbO/so/cz/wY94MeSWJuP1hXIPfwQ==",
      "dev": true,
      "requires": {
        "babel-plugin-syntax-object-rest-spread": "^6.13.0",
        "find-up": "^2.1.0",
        "istanbul-lib-instrument": "^1.10.1",
        "test-exclude": "^4.2.1"
      }
    },
    "babel-plugin-jest-hoist": {
      "version": "23.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/babel-plugin-jest-hoist/-/babel-plugin-jest-hoist-23.2.0.tgz",
      "integrity": "sha1-5h+uBaHKiAGq3uV6bWa4zvr0QWc=",
      "dev": true
    },
    "babel-plugin-module-resolver": {
      "version": "3.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/babel-plugin-module-resolver/-/babel-plugin-module-resolver-3.2.0.tgz",
      "integrity": "sha512-tjR0GvSndzPew/Iayf4uICWZqjBwnlMWjSx6brryfQ81F9rxBVqwDJtFCV8oOs0+vJeefK9TmdZtkIFdFe1UnA==",
      "dev": true,
      "requires": {
        "find-babel-config": "^1.1.0",
        "glob": "^7.1.2",
        "pkg-up": "^2.0.0",
        "reselect": "^3.0.1",
        "resolve": "^1.4.0"
      }
    },
    "babel-plugin-syntax-object-rest-spread": {
      "version": "6.13.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/babel-plugin-syntax-object-rest-spread/-/babel-plugin-syntax-object-rest-spread-6.13.0.tgz",
      "integrity": "sha1-/WU28rzhODb/o6VFjEkDpZe7O/U=",
      "dev": true
    },
    "babel-plugin-transform-es2015-modules-commonjs": {
      "version": "6.26.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/babel-plugin-transform-es2015-modules-commonjs/-/babel-plugin-transform-es2015-modules-commonjs-6.26.2.tgz",
      "integrity": "sha512-CV9ROOHEdrjcwhIaJNBGMBCodN+1cfkwtM1SbUHmvyy35KGT7fohbpOxkE2uLz1o6odKK2Ck/tz47z+VqQfi9Q==",
      "dev": true,
      "requires": {
        "babel-plugin-transform-strict-mode": "^6.24.1",
        "babel-runtime": "^6.26.0",
        "babel-template": "^6.26.0",
        "babel-types": "^6.26.0"
      }
    },
    "babel-plugin-transform-strict-mode": {
      "version": "6.24.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/babel-plugin-transform-strict-mode/-/babel-plugin-transform-strict-mode-6.24.1.tgz",
      "integrity": "sha1-1fr3qleKZbvlkc9e2uBKDGcCB1g=",
      "dev": true,
      "requires": {
        "babel-runtime": "^6.22.0",
        "babel-types": "^6.24.1"
      }
    },
    "babel-preset-jest": {
      "version": "23.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/babel-preset-jest/-/babel-preset-jest-23.2.0.tgz",
      "integrity": "sha1-jsegOhOPABoaj7HoETZSvxpV2kY=",
      "dev": true,
      "requires": {
        "babel-plugin-jest-hoist": "^23.2.0",
        "babel-plugin-syntax-object-rest-spread": "^6.13.0"
      }
    },
    "babel-register": {
      "version": "6.26.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/babel-register/-/babel-register-6.26.0.tgz",
      "integrity": "sha1-btAhFz4vy0htestFxgCahW9kcHE=",
      "dev": true,
      "requires": {
        "babel-core": "^6.26.0",
        "babel-runtime": "^6.26.0",
        "core-js": "^2.5.0",
        "home-or-tmp": "^2.0.0",
        "lodash": "^4.17.4",
        "mkdirp": "^0.5.1",
        "source-map-support": "^0.4.15"
      },
      "dependencies": {
        "babel-core": {
          "version": "6.26.3",
          "resolved": "http://maven.paic.com.cn/repository/npm/babel-core/-/babel-core-6.26.3.tgz",
          "integrity": "sha512-6jyFLuDmeidKmUEb3NM+/yawG0M2bDZ9Z1qbZP59cyHLz8kYGKYwpJP0UwUKKUiTRNvxfLesJnTedqczP7cTDA==",
          "dev": true,
          "requires": {
            "babel-code-frame": "^6.26.0",
            "babel-generator": "^6.26.0",
            "babel-helpers": "^6.24.1",
            "babel-messages": "^6.23.0",
            "babel-register": "^6.26.0",
            "babel-runtime": "^6.26.0",
            "babel-template": "^6.26.0",
            "babel-traverse": "^6.26.0",
            "babel-types": "^6.26.0",
            "babylon": "^6.18.0",
            "convert-source-map": "^1.5.1",
            "debug": "^2.6.9",
            "json5": "^0.5.1",
            "lodash": "^4.17.4",
            "minimatch": "^3.0.4",
            "path-is-absolute": "^1.0.1",
            "private": "^0.1.8",
            "slash": "^1.0.0",
            "source-map": "^0.5.7"
          }
        },
        "debug": {
          "version": "2.6.9",
          "resolved": "http://maven.paic.com.cn/repository/npm/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "requires": {
            "ms": "2.0.0"
          }
        },
        "json5": {
          "version": "0.5.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/json5/-/json5-0.5.1.tgz",
          "integrity": "sha1-Hq3nrMASA0rYTiOWdn6tn6VJWCE=",
          "dev": true
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
          "dev": true
        },
        "slash": {
          "version": "1.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/slash/-/slash-1.0.0.tgz",
          "integrity": "sha1-xB8vbDn8FtHNF61LXYlhFK5HDVU=",
          "dev": true
        },
        "source-map-support": {
          "version": "0.4.18",
          "resolved": "http://maven.paic.com.cn/repository/npm/source-map-support/-/source-map-support-0.4.18.tgz",
          "integrity": "sha512-try0/JqxPLF9nOjvSta7tVondkP5dwgyLDjVoyMDlmjugT2lRZ1OfsrYTkCd2hkDnJTKRbO/Rl3orm8vlsUzbA==",
          "dev": true,
          "requires": {
            "source-map": "^0.5.6"
          }
        }
      }
    },
    "babel-runtime": {
      "version": "6.26.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/babel-runtime/-/babel-runtime-6.26.0.tgz",
      "integrity": "sha1-llxwWGaOgrVde/4E/yM3vItWR/4=",
      "requires": {
        "core-js": "^2.4.0",
        "regenerator-runtime": "^0.11.0"
      },
      "dependencies": {
        "regenerator-runtime": {
          "version": "0.11.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/regenerator-runtime/-/regenerator-runtime-0.11.1.tgz",
          "integrity": "sha512-MguG95oij0fC3QV3URf4V2SDYGJhJnJGqvIIgdECeODCT98wSWDAJ94SSuVpYQUoTcGUIL6L4yNB7j1DFFHSBg=="
        }
      }
    },
    "babel-template": {
      "version": "6.26.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/babel-template/-/babel-template-6.26.0.tgz",
      "integrity": "sha1-3gPi0WOWsGn0bdn/+FIfsaDjXgI=",
      "dev": true,
      "requires": {
        "babel-runtime": "^6.26.0",
        "babel-traverse": "^6.26.0",
        "babel-types": "^6.26.0",
        "babylon": "^6.18.0",
        "lodash": "^4.17.4"
      }
    },
    "babel-traverse": {
      "version": "6.26.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/babel-traverse/-/babel-traverse-6.26.0.tgz",
      "integrity": "sha1-RqnL1+3MYsjlwGTi0tjQ9ANXZu4=",
      "dev": true,
      "requires": {
        "babel-code-frame": "^6.26.0",
        "babel-messages": "^6.23.0",
        "babel-runtime": "^6.26.0",
        "babel-types": "^6.26.0",
        "babylon": "^6.18.0",
        "debug": "^2.6.8",
        "globals": "^9.18.0",
        "invariant": "^2.2.2",
        "lodash": "^4.17.4"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "http://maven.paic.com.cn/repository/npm/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "requires": {
            "ms": "2.0.0"
          }
        },
        "globals": {
          "version": "9.18.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/globals/-/globals-9.18.0.tgz",
          "integrity": "sha512-S0nG3CLEQiY/ILxqtztTWH/3iRRdyBLw6KMDxnKMchrtbj2OFmehVh0WUCfW3DUrIgx/qFrJPICrq4Z4sTR9UQ==",
          "dev": true
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
          "dev": true
        }
      }
    },
    "babel-types": {
      "version": "6.26.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/babel-types/-/babel-types-6.26.0.tgz",
      "integrity": "sha1-o7Bz+Uq0nrb6Vc1lInozQ4BjJJc=",
      "dev": true,
      "requires": {
        "babel-runtime": "^6.26.0",
        "esutils": "^2.0.2",
        "lodash": "^4.17.4",
        "to-fast-properties": "^1.0.3"
      },
      "dependencies": {
        "to-fast-properties": {
          "version": "1.0.3",
          "resolved": "http://maven.paic.com.cn/repository/npm/to-fast-properties/-/to-fast-properties-1.0.3.tgz",
          "integrity": "sha1-uDVx+k2MJbguIxsG46MFXeTKGkc=",
          "dev": true
        }
      }
    },
    "babylon": {
      "version": "6.18.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/babylon/-/babylon-6.18.0.tgz",
      "integrity": "sha512-q/UEjfGJ2Cm3oKV71DJz9d25TPnq5rhBVL2Q4fA5wcC3jcrdn7+SssEybFIxwAvvP+YCsCYNKughoF33GxgycQ==",
      "dev": true
    },
    "balanced-match": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/balanced-match/-/balanced-match-1.0.0.tgz",
      "integrity": "sha1-ibTRmasr7kneFk6gK4nORi1xt2c="
    },
    "base": {
      "version": "0.11.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/base/-/base-0.11.2.tgz",
      "integrity": "sha512-5T6P4xPgpp0YDFvSWwEZ4NoE3aM4QBQXDzmVbraCkFj8zHM+mba8SyqB5DbZWyR7mYHo6Y7BdQo3MoA4m0TeQg==",
      "dev": true,
      "requires": {
        "cache-base": "^1.0.1",
        "class-utils": "^0.3.5",
        "component-emitter": "^1.2.1",
        "define-property": "^1.0.0",
        "isobject": "^3.0.1",
        "mixin-deep": "^1.2.0",
        "pascalcase": "^0.1.1"
      },
      "dependencies": {
        "define-property": {
          "version": "1.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/define-property/-/define-property-1.0.0.tgz",
          "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
          "dev": true,
          "requires": {
            "is-descriptor": "^1.0.0"
          }
        },
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "dev": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "dev": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "dev": true,
          "requires": {
            "is-accessor-descriptor": "^1.0.0",
            "is-data-descriptor": "^1.0.0",
            "kind-of": "^6.0.2"
          }
        }
      }
    },
    "base64-js": {
      "version": "1.3.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/base64-js/-/base64-js-1.3.1.tgz",
      "integrity": "sha512-mLQ4i2QO1ytvGWFWmcngKO//JXAQueZvwEKtjgQFM4jIK0kU+ytMfplL8j+n5mspOfjHwoAg+9yhb7BwAHm36g==",
      "dev": true
    },
    "batch": {
      "version": "0.6.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/batch/-/batch-0.6.1.tgz",
      "integrity": "sha1-3DQxT05nkxgJP8dgJyUl+UvyXBY=",
      "dev": true
    },
    "batch-processor": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/batch-processor/-/batch-processor-1.0.0.tgz",
      "integrity": "sha1-dclcMrdI4IUNEMKxaPa9vpiRrOg="
    },
    "bcrypt-pbkdf": {
      "version": "1.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/bcrypt-pbkdf/-/bcrypt-pbkdf-1.0.2.tgz",
      "integrity": "sha1-pDAdOJtqQ/m2f/PKEaP2Y342Dp4=",
      "dev": true,
      "requires": {
        "tweetnacl": "^0.14.3"
      }
    },
    "bfj": {
      "version": "6.1.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/bfj/-/bfj-6.1.2.tgz",
      "integrity": "sha512-BmBJa4Lip6BPRINSZ0BPEIfB1wUY/9rwbwvIHQA1KjX9om29B6id0wnWXq7m3bn5JrUVjeOTnVuhPT1FiHwPGw==",
      "dev": true,
      "requires": {
        "bluebird": "^3.5.5",
        "check-types": "^8.0.3",
        "hoopy": "^0.1.4",
        "tryer": "^1.0.1"
      }
    },
    "big.js": {
      "version": "5.2.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/big.js/-/big.js-5.2.2.tgz",
      "integrity": "sha512-vyL2OymJxmarO8gxMr0mhChsO9QGwhynfuu4+MHTAW6czfq9humCB7rKpUjDd9YUiDPU4mzpyupFSvOClAwbmQ==",
      "dev": true
    },
    "binary-extensions": {
      "version": "1.13.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/binary-extensions/-/binary-extensions-1.13.1.tgz",
      "integrity": "sha512-Un7MIEDdUC5gNpcGDV97op1Ywk748MpHcFTHoYs6qnj1Z3j7I53VG3nwZhKzoBZmbdRNnb6WRdFlwl7tSDuZGw==",
      "dev": true
    },
    "bindings": {
      "version": "1.5.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/bindings/-/bindings-1.5.0.tgz",
      "integrity": "sha512-p2q/t/mhvuOj/UeLlV6566GD/guowlr0hHxClI0W9m7MWYkL1F0hLo+0Aexs9HSPCtR1SXQ0TD3MMKrXZajbiQ==",
      "dev": true,
      "optional": true,
      "requires": {
        "file-uri-to-path": "1.0.0"
      }
    },
    "bluebird": {
      "version": "3.7.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/bluebird/-/bluebird-3.7.2.tgz",
      "integrity": "sha512-XpNj6GDQzdfW+r2Wnn7xiSAd7TM3jzkxGXBGTtWKuSXv1xUV+azxAm8jdWZN06QTQk+2N2XB9jRDkvbmQmcRtg==",
      "dev": true
    },
    "bn.js": {
      "version": "4.11.8",
      "resolved": "http://maven.paic.com.cn/repository/npm/bn.js/-/bn.js-4.11.8.tgz",
      "integrity": "sha512-ItfYfPLkWHUjckQCk8xC+LwxgK8NYcXywGigJgSwOP8Y2iyWT4f2vsZnoOXTTbo+o5yXmIUJ4gn5538SO5S3gA==",
      "dev": true
    },
    "body-parser": {
      "version": "1.19.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/body-parser/-/body-parser-1.19.0.tgz",
      "integrity": "sha512-dhEPs72UPbDnAQJ9ZKMNTP6ptJaionhP5cBb541nXPlW60Jepo9RV/a4fX4XWW9CuFNK22krhrj1+rgzifNCsw==",
      "dev": true,
      "requires": {
        "bytes": "3.1.0",
        "content-type": "~1.0.4",
        "debug": "2.6.9",
        "depd": "~1.1.2",
        "http-errors": "1.7.2",
        "iconv-lite": "0.4.24",
        "on-finished": "~2.3.0",
        "qs": "6.7.0",
        "raw-body": "2.4.0",
        "type-is": "~1.6.17"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "http://maven.paic.com.cn/repository/npm/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "requires": {
            "ms": "2.0.0"
          }
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
          "dev": true
        },
        "qs": {
          "version": "6.7.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/qs/-/qs-6.7.0.tgz",
          "integrity": "sha512-VCdBRNFTX1fyE7Nb6FYoURo/SPe62QCaAyzJvUjwRaIsc+NePBEniHlvxFmmX56+HZphIGtV0XeCirBtpDrTyQ==",
          "dev": true
        }
      }
    },
    "bonjour": {
      "version": "3.5.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/bonjour/-/bonjour-3.5.0.tgz",
      "integrity": "sha1-jokKGD2O6aI5OzhExpGkK897yfU=",
      "dev": true,
      "requires": {
        "array-flatten": "^2.1.0",
        "deep-equal": "^1.0.1",
        "dns-equal": "^1.0.0",
        "dns-txt": "^2.0.2",
        "multicast-dns": "^6.0.1",
        "multicast-dns-service-types": "^1.1.0"
      },
      "dependencies": {
        "array-flatten": {
          "version": "2.1.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/array-flatten/-/array-flatten-2.1.2.tgz",
          "integrity": "sha512-hNfzcOV8W4NdualtqBFPyVO+54DSJuZGY9qT4pRroB6S9e3iiido2ISIC5h9R2sPJ8H3FHCIiEnsv1lPXO3KtQ==",
          "dev": true
        }
      }
    },
    "boolbase": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/boolbase/-/boolbase-1.0.0.tgz",
      "integrity": "sha1-aN/1++YMUes3cl6p4+0xDcwed24=",
      "dev": true
    },
    "brace-expansion": {
      "version": "1.1.11",
      "resolved": "http://maven.paic.com.cn/repository/npm/brace-expansion/-/brace-expansion-1.1.11.tgz",
      "integrity": "sha512-iCuPHDFgrHX7H2vEI/5xpz07zSHB00TpugqhmYtVmMO6518mCuRMoOYFldEBl0g187ufozdaHgWKcYFb61qGiA==",
      "requires": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "braces": {
      "version": "2.3.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/braces/-/braces-2.3.2.tgz",
      "integrity": "sha512-aNdbnj9P8PjdXU4ybaWLK2IF3jc/EoDYbC7AazW6to3TRsfXxscC9UXOB5iDiEQrkyIbWp2SLQda4+QAa7nc3w==",
      "dev": true,
      "requires": {
        "arr-flatten": "^1.1.0",
        "array-unique": "^0.3.2",
        "extend-shallow": "^2.0.1",
        "fill-range": "^4.0.0",
        "isobject": "^3.0.1",
        "repeat-element": "^1.1.2",
        "snapdragon": "^0.8.1",
        "snapdragon-node": "^2.0.1",
        "split-string": "^3.0.2",
        "to-regex": "^3.0.1"
      },
      "dependencies": {
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "dev": true,
          "requires": {
            "is-extendable": "^0.1.0"
          }
        }
      }
    },
    "brorand": {
      "version": "1.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/brorand/-/brorand-1.1.0.tgz",
      "integrity": "sha1-EsJe/kCkXjwyPrhnWgoM5XsiNx8=",
      "dev": true
    },
    "browser-process-hrtime": {
      "version": "0.1.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/browser-process-hrtime/-/browser-process-hrtime-0.1.3.tgz",
      "integrity": "sha512-bRFnI4NnjO6cnyLmOV/7PVoDEMJChlcfN0z4s1YMBY989/SvlfMI1lgCnkFUs53e9gQF+w7qu7XdllSTiSl8Aw==",
      "dev": true
    },
    "browser-resolve": {
      "version": "1.11.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/browser-resolve/-/browser-resolve-1.11.3.tgz",
      "integrity": "sha512-exDi1BYWB/6raKHmDTCicQfTkqwN5fioMFV4j8BsfMU4R2DK/QfZfK7kOVkmWCNANf0snkBzqGqAJBao9gZMdQ==",
      "dev": true,
      "requires": {
        "resolve": "1.1.7"
      },
      "dependencies": {
        "resolve": {
          "version": "1.1.7",
          "resolved": "http://maven.paic.com.cn/repository/npm/resolve/-/resolve-1.1.7.tgz",
          "integrity": "sha1-IDEU2CrSxe2ejgQRs5ModeiJ6Xs=",
          "dev": true
        }
      }
    },
    "browserify-aes": {
      "version": "1.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/browserify-aes/-/browserify-aes-1.2.0.tgz",
      "integrity": "sha512-+7CHXqGuspUn/Sl5aO7Ea0xWGAtETPXNSAjHo48JfLdPWcMng33Xe4znFvQweqc/uzk5zSOI3H52CYnjCfb5hA==",
      "dev": true,
      "requires": {
        "buffer-xor": "^1.0.3",
        "cipher-base": "^1.0.0",
        "create-hash": "^1.1.0",
        "evp_bytestokey": "^1.0.3",
        "inherits": "^2.0.1",
        "safe-buffer": "^5.0.1"
      }
    },
    "browserify-cipher": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/browserify-cipher/-/browserify-cipher-1.0.1.tgz",
      "integrity": "sha512-sPhkz0ARKbf4rRQt2hTpAHqn47X3llLkUGn+xEJzLjwY8LRs2p0v7ljvI5EyoRO/mexrNunNECisZs+gw2zz1w==",
      "dev": true,
      "requires": {
        "browserify-aes": "^1.0.4",
        "browserify-des": "^1.0.0",
        "evp_bytestokey": "^1.0.0"
      }
    },
    "browserify-des": {
      "version": "1.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/browserify-des/-/browserify-des-1.0.2.tgz",
      "integrity": "sha512-BioO1xf3hFwz4kc6iBhI3ieDFompMhrMlnDFC4/0/vd5MokpuAc3R+LYbwTA9A5Yc9pq9UYPqffKpW2ObuwX5A==",
      "dev": true,
      "requires": {
        "cipher-base": "^1.0.1",
        "des.js": "^1.0.0",
        "inherits": "^2.0.1",
        "safe-buffer": "^5.1.2"
      }
    },
    "browserify-rsa": {
      "version": "4.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/browserify-rsa/-/browserify-rsa-4.0.1.tgz",
      "integrity": "sha1-IeCr+vbyApzy+vsTNWenAdQTVSQ=",
      "dev": true,
      "requires": {
        "bn.js": "^4.1.0",
        "randombytes": "^2.0.1"
      }
    },
    "browserify-sign": {
      "version": "4.0.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/browserify-sign/-/browserify-sign-4.0.4.tgz",
      "integrity": "sha1-qk62jl17ZYuqa/alfmMMvXqT0pg=",
      "dev": true,
      "requires": {
        "bn.js": "^4.1.1",
        "browserify-rsa": "^4.0.0",
        "create-hash": "^1.1.0",
        "create-hmac": "^1.1.2",
        "elliptic": "^6.0.0",
        "inherits": "^2.0.1",
        "parse-asn1": "^5.0.0"
      }
    },
    "browserify-zlib": {
      "version": "0.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/browserify-zlib/-/browserify-zlib-0.2.0.tgz",
      "integrity": "sha512-Z942RysHXmJrhqk88FmKBVq/v5tqmSkDz7p54G/MGyjMnCFFnC79XWNbg+Vta8W6Wb2qtSZTSxIGkJrRpCFEiA==",
      "dev": true,
      "requires": {
        "pako": "~1.0.5"
      }
    },
    "browserslist": {
      "version": "4.8.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/browserslist/-/browserslist-4.8.2.tgz",
      "integrity": "sha512-+M4oeaTplPm/f1pXDw84YohEv7B1i/2Aisei8s4s6k3QsoSHa7i5sz8u/cGQkkatCPxMASKxPualR4wwYgVboA==",
      "dev": true,
      "requires": {
        "caniuse-lite": "^1.0.30001015",
        "electron-to-chromium": "^1.3.322",
        "node-releases": "^1.1.42"
      }
    },
    "bs-logger": {
      "version": "0.2.6",
      "resolved": "http://maven.paic.com.cn/repository/npm/bs-logger/-/bs-logger-0.2.6.tgz",
      "integrity": "sha512-pd8DCoxmbgc7hyPKOvxtqNcjYoOsABPQdcCUjGp3d42VR2CX1ORhk2A87oqqu5R1kk+76nsxZupkmyd+MVtCog==",
      "dev": true,
      "requires": {
        "fast-json-stable-stringify": "2.x"
      }
    },
    "bser": {
      "version": "2.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/bser/-/bser-2.1.1.tgz",
      "integrity": "sha512-gQxTNE/GAfIIrmHLUE3oJyp5FO6HRBfhjnw4/wMmA63ZGDJnWBmgY/lyQBpnDUkGmAhbSe39tx2d/iTOAfglwQ==",
      "dev": true,
      "requires": {
        "node-int64": "^0.4.0"
      }
    },
    "buffer": {
      "version": "4.9.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/buffer/-/buffer-4.9.2.tgz",
      "integrity": "sha512-xq+q3SRMOxGivLhBNaUdC64hDTQwejJ+H0T/NB1XMtTVEwNTrfFF3gAxiyW0Bu/xWEGhjVKgUcMhCrUy2+uCWg==",
      "dev": true,
      "requires": {
        "base64-js": "^1.0.2",
        "ieee754": "^1.1.4",
        "isarray": "^1.0.0"
      }
    },
    "buffer-from": {
      "version": "1.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/buffer-from/-/buffer-from-1.1.1.tgz",
      "integrity": "sha512-MQcXEUbCKtEo7bhqEs6560Hyd4XaovZlO/k9V3hjVUF/zwW7KBVdSK4gIt/bzwS9MbR5qob+F5jusZsb0YQK2A==",
      "dev": true
    },
    "buffer-indexof": {
      "version": "1.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/buffer-indexof/-/buffer-indexof-1.1.1.tgz",
      "integrity": "sha512-4/rOEg86jivtPTeOUUT61jJO1Ya1TrR/OkqCSZDyq84WJh3LuuiphBYJN+fm5xufIk4XAFcEwte/8WzC8If/1g==",
      "dev": true
    },
    "buffer-xor": {
      "version": "1.0.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/buffer-xor/-/buffer-xor-1.0.3.tgz",
      "integrity": "sha1-JuYe0UIvtw3ULm42cp7VHYVf6Nk=",
      "dev": true
    },
    "builtin-modules": {
      "version": "1.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/builtin-modules/-/builtin-modules-1.1.1.tgz",
      "integrity": "sha1-Jw8HbFpywC9bZaR9+Uxf46J4iS8=",
      "dev": true
    },
    "builtin-status-codes": {
      "version": "3.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/builtin-status-codes/-/builtin-status-codes-3.0.0.tgz",
      "integrity": "sha1-hZgoeOIbmOHGZCXgPQF0eI9Wnug=",
      "dev": true
    },
    "bytes": {
      "version": "3.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/bytes/-/bytes-3.1.0.tgz",
      "integrity": "sha512-zauLjrfCG+xvoyaqLoV8bLVXXNGC4JqlxFCutSDWA6fJrTo2ZuvLYTqZ7aHBLZSMOopbzwv8f+wZcVzfVTI2Dg==",
      "dev": true
    },
    "cacache": {
      "version": "12.0.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/cacache/-/cacache-12.0.3.tgz",
      "integrity": "sha512-kqdmfXEGFepesTuROHMs3MpFLWrPkSSpRqOw80RCflZXy/khxaArvFrQ7uJxSUduzAufc6G0g1VUCOZXxWavPw==",
      "dev": true,
      "requires": {
        "bluebird": "^3.5.5",
        "chownr": "^1.1.1",
        "figgy-pudding": "^3.5.1",
        "glob": "^7.1.4",
        "graceful-fs": "^4.1.15",
        "infer-owner": "^1.0.3",
        "lru-cache": "^5.1.1",
        "mississippi": "^3.0.0",
        "mkdirp": "^0.5.1",
        "move-concurrently": "^1.0.1",
        "promise-inflight": "^1.0.1",
        "rimraf": "^2.6.3",
        "ssri": "^6.0.1",
        "unique-filename": "^1.1.1",
        "y18n": "^4.0.0"
      }
    },
    "cache-base": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/cache-base/-/cache-base-1.0.1.tgz",
      "integrity": "sha512-AKcdTnFSWATd5/GCPRxr2ChwIJ85CeyrEyjRHlKxQ56d4XJMGym0uAiKn0xbLOGOl3+yRpOTi484dVCEc5AUzQ==",
      "dev": true,
      "requires": {
        "collection-visit": "^1.0.0",
        "component-emitter": "^1.2.1",
        "get-value": "^2.0.6",
        "has-value": "^1.0.0",
        "isobject": "^3.0.1",
        "set-value": "^2.0.0",
        "to-object-path": "^0.3.0",
        "union-value": "^1.0.0",
        "unset-value": "^1.0.0"
      }
    },
    "cache-loader": {
      "version": "2.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/cache-loader/-/cache-loader-2.0.1.tgz",
      "integrity": "sha512-V99T3FOynmGx26Zom+JrVBytLBsmUCzVG2/4NnUKgvXN4bEV42R1ERl1IyiH/cvFIDA1Ytq2lPZ9tXDSahcQpQ==",
      "dev": true,
      "requires": {
        "loader-utils": "^1.1.0",
        "mkdirp": "^0.5.1",
        "neo-async": "^2.6.0",
        "normalize-path": "^3.0.0",
        "schema-utils": "^1.0.0"
      }
    },
    "call-me-maybe": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/call-me-maybe/-/call-me-maybe-1.0.1.tgz",
      "integrity": "sha1-JtII6onje1y95gJQoV8DHBak1ms=",
      "dev": true
    },
    "caller-callsite": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/caller-callsite/-/caller-callsite-2.0.0.tgz",
      "integrity": "sha1-hH4PzgoiN1CpoCfFSzNzGtMVQTQ=",
      "dev": true,
      "requires": {
        "callsites": "^2.0.0"
      },
      "dependencies": {
        "callsites": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/callsites/-/callsites-2.0.0.tgz",
          "integrity": "sha1-BuuE8A7qQT2oav/vrL/7Ngk7PFA=",
          "dev": true
        }
      }
    },
    "caller-path": {
      "version": "0.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/caller-path/-/caller-path-0.1.0.tgz",
      "integrity": "sha1-lAhe9jWB7NPaqSREqP6U6CV3dR8=",
      "dev": true,
      "optional": true,
      "requires": {
        "callsites": "^0.2.0"
      }
    },
    "callsites": {
      "version": "0.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/callsites/-/callsites-0.2.0.tgz",
      "integrity": "sha1-r6uWJikQp/M8GaV3WCXGnzTjUMo=",
      "dev": true,
      "optional": true
    },
    "camel-case": {
      "version": "3.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/camel-case/-/camel-case-3.0.0.tgz",
      "integrity": "sha1-yjw2iKTpzzpM2nd9xNy8cTJJz3M=",
      "dev": true,
      "requires": {
        "no-case": "^2.2.0",
        "upper-case": "^1.1.1"
      }
    },
    "camelcase": {
      "version": "5.3.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/camelcase/-/camelcase-5.3.1.tgz",
      "integrity": "sha512-L28STB170nwWS63UjtlEOE3dldQApaJXZkOI1uMFfzf3rRuPegHaHesyee+YxQ+W6SvRDQV6UrdOdRiR153wJg==",
      "dev": true
    },
    "caniuse-api": {
      "version": "3.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/caniuse-api/-/caniuse-api-3.0.0.tgz",
      "integrity": "sha512-bsTwuIg/BZZK/vreVTYYbSWoe2F+71P7K5QGEX+pT250DZbfU1MQ5prOKpPR+LL6uWKK3KMwMCAS74QB3Um1uw==",
      "dev": true,
      "requires": {
        "browserslist": "^4.0.0",
        "caniuse-lite": "^1.0.0",
        "lodash.memoize": "^4.1.2",
        "lodash.uniq": "^4.5.0"
      }
    },
    "caniuse-lite": {
      "version": "1.0.30001016",
      "resolved": "http://maven.paic.com.cn/repository/npm/caniuse-lite/-/caniuse-lite-1.0.30001016.tgz",
      "integrity": "sha512-yYQ2QfotceRiH4U+h1Us86WJXtVHDmy3nEKIdYPsZCYnOV5/tMgGbmoIlrMzmh2VXlproqYtVaKeGDBkMZifFA==",
      "dev": true
    },
    "capture-exit": {
      "version": "1.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/capture-exit/-/capture-exit-1.2.0.tgz",
      "integrity": "sha1-HF/MSJ/QqwDU8ax64QcuMXP7q28=",
      "dev": true,
      "requires": {
        "rsvp": "^3.3.3"
      }
    },
    "case-sensitive-paths-webpack-plugin": {
      "version": "2.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/case-sensitive-paths-webpack-plugin/-/case-sensitive-paths-webpack-plugin-2.2.0.tgz",
      "integrity": "sha512-u5ElzokS8A1pm9vM3/iDgTcI3xqHxuCao94Oz8etI3cf0Tio0p8izkDYbTIn09uP3yUUr6+veaE6IkjnTYS46g==",
      "dev": true
    },
    "caseless": {
      "version": "0.12.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/caseless/-/caseless-0.12.0.tgz",
      "integrity": "sha1-G2gcIf+EAzyCZUMJBolCDRhxUdw=",
      "dev": true
    },
    "chalk": {
      "version": "2.4.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/chalk/-/chalk-2.4.2.tgz",
      "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
      "dev": true,
      "requires": {
        "ansi-styles": "^3.2.1",
        "escape-string-regexp": "^1.0.5",
        "supports-color": "^5.3.0"
      }
    },
    "chardet": {
      "version": "0.4.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/chardet/-/chardet-0.4.2.tgz",
      "integrity": "sha1-tUc7M9yXxCTl2Y3IfVXU2KKci/I=",
      "dev": true,
      "optional": true
    },
    "check-types": {
      "version": "8.0.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/check-types/-/check-types-8.0.3.tgz",
      "integrity": "sha512-YpeKZngUmG65rLudJ4taU7VLkOCTMhNl/u4ctNC56LQS/zJTyNH0Lrtwm1tfTsbLlwvlfsA2d1c8vCf/Kh2KwQ==",
      "dev": true
    },
    "chokidar": {
      "version": "2.1.8",
      "resolved": "http://maven.paic.com.cn/repository/npm/chokidar/-/chokidar-2.1.8.tgz",
      "integrity": "sha512-ZmZUazfOzf0Nve7duiCKD23PFSCs4JPoYyccjUFF3aQkQadqBhfzhjkwBH2mNOG9cTBwhamM37EIsIkZw3nRgg==",
      "dev": true,
      "requires": {
        "anymatch": "^2.0.0",
        "async-each": "^1.0.1",
        "braces": "^2.3.2",
        "fsevents": "^1.2.7",
        "glob-parent": "^3.1.0",
        "inherits": "^2.0.3",
        "is-binary-path": "^1.0.0",
        "is-glob": "^4.0.0",
        "normalize-path": "^3.0.0",
        "path-is-absolute": "^1.0.0",
        "readdirp": "^2.2.1",
        "upath": "^1.1.1"
      }
    },
    "chownr": {
      "version": "1.1.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/chownr/-/chownr-1.1.3.tgz",
      "integrity": "sha512-i70fVHhmV3DtTl6nqvZOnIjbY0Pe4kAUjwHj8z0zAdgBtYrJyYwLKCCuRBQ5ppkyL0AkN7HKRnETdmdp1zqNXw==",
      "dev": true
    },
    "chrome-trace-event": {
      "version": "1.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/chrome-trace-event/-/chrome-trace-event-1.0.2.tgz",
      "integrity": "sha512-9e/zx1jw7B4CO+c/RXoCsfg/x1AfUBioy4owYH0bJprEYAx5hRFLRhWBqHAG57D0ZM4H7vxbP7bPe0VwhQRYDQ==",
      "dev": true,
      "requires": {
        "tslib": "^1.9.0"
      }
    },
    "ci-info": {
      "version": "1.6.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/ci-info/-/ci-info-1.6.0.tgz",
      "integrity": "sha512-vsGdkwSCDpWmP80ncATX7iea5DWQemg1UgCW5J8tqjU3lYw4FBYuj89J0CTVomA7BEfvSZd84GmHko+MxFQU2A==",
      "dev": true
    },
    "cipher-base": {
      "version": "1.0.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/cipher-base/-/cipher-base-1.0.4.tgz",
      "integrity": "sha512-Kkht5ye6ZGmwv40uUDZztayT2ThLQGfnj/T71N/XzeZeo3nf8foyW7zGTsPYkEya3m5f3cAypH+qe7YOrM1U2Q==",
      "dev": true,
      "requires": {
        "inherits": "^2.0.1",
        "safe-buffer": "^5.0.1"
      }
    },
    "circular-json": {
      "version": "0.3.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/circular-json/-/circular-json-0.3.3.tgz",
      "integrity": "sha512-UZK3NBx2Mca+b5LsG7bY183pHWt5Y1xts4P3Pz7ENTwGVnJOUWbRb3ocjvX7hx9tq/yTAdclXm9sZ38gNuem4A==",
      "dev": true,
      "optional": true
    },
    "class-utils": {
      "version": "0.3.6",
      "resolved": "http://maven.paic.com.cn/repository/npm/class-utils/-/class-utils-0.3.6.tgz",
      "integrity": "sha512-qOhPa/Fj7s6TY8H8esGu5QNpMMQxz79h+urzrNYN6mn+9BnxlDGf5QZ+XeCDsxSjPqsSR56XOZOJmpeurnLMeg==",
      "dev": true,
      "requires": {
        "arr-union": "^3.1.0",
        "define-property": "^0.2.5",
        "isobject": "^3.0.0",
        "static-extend": "^0.1.1"
      },
      "dependencies": {
        "define-property": {
          "version": "0.2.5",
          "resolved": "http://maven.paic.com.cn/repository/npm/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "dev": true,
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        }
      }
    },
    "clean-css": {
      "version": "4.2.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/clean-css/-/clean-css-4.2.1.tgz",
      "integrity": "sha512-4ZxI6dy4lrY6FHzfiy1aEOXgu4LIsW2MhwG0VBKdcoGoH/XLFgaHSdLTGr4O8Be6A8r3MOphEiI8Gc1n0ecf3g==",
      "dev": true,
      "requires": {
        "source-map": "~0.6.0"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        }
      }
    },
    "cli-cursor": {
      "version": "2.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/cli-cursor/-/cli-cursor-2.1.0.tgz",
      "integrity": "sha1-s12sN2R5+sw+lHR9QdDQ9SOP/LU=",
      "dev": true,
      "requires": {
        "restore-cursor": "^2.0.0"
      }
    },
    "cli-highlight": {
      "version": "2.1.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/cli-highlight/-/cli-highlight-2.1.4.tgz",
      "integrity": "sha512-s7Zofobm20qriqDoU9sXptQx0t2R9PEgac92mENNm7xaEe1hn71IIMsXMK+6encA6WRCWWxIGQbipr3q998tlQ==",
      "dev": true,
      "requires": {
        "chalk": "^3.0.0",
        "highlight.js": "^9.6.0",
        "mz": "^2.4.0",
        "parse5": "^5.1.1",
        "parse5-htmlparser2-tree-adapter": "^5.1.1",
        "yargs": "^15.0.0"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "5.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/ansi-regex/-/ansi-regex-5.0.0.tgz",
          "integrity": "sha512-bY6fj56OUQ0hU1KjFNDQuJFezqKdrAyFdIevADiqrWHwSlbmBNMHp5ak2f40Pm8JTFyM2mqxkG6ngkHO11f/lg==",
          "dev": true
        },
        "ansi-styles": {
          "version": "4.2.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/ansi-styles/-/ansi-styles-4.2.0.tgz",
          "integrity": "sha512-7kFQgnEaMdRtwf6uSfUnVr9gSGC7faurn+J/Mv90/W+iTtN0405/nLdopfMWwchyxhbGYl6TC4Sccn9TUkGAgg==",
          "dev": true,
          "requires": {
            "@types/color-name": "^1.1.1",
            "color-convert": "^2.0.1"
          }
        },
        "chalk": {
          "version": "3.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/chalk/-/chalk-3.0.0.tgz",
          "integrity": "sha512-4D3B6Wf41KOYRFdszmDqMCGq5VV/uMAB273JILmO+3jAlh8X4qDtdtgCR3fxtbLEMzSx22QdhnDcJvu2u1fVwg==",
          "dev": true,
          "requires": {
            "ansi-styles": "^4.1.0",
            "supports-color": "^7.1.0"
          }
        },
        "cliui": {
          "version": "6.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/cliui/-/cliui-6.0.0.tgz",
          "integrity": "sha512-t6wbgtoCXvAzst7QgXxJYqPt0usEfbgQdftEPbLL/cvv6HPE5VgvqCuAIDR0NgU52ds6rFwqrgakNLrHEjCbrQ==",
          "dev": true,
          "requires": {
            "string-width": "^4.2.0",
            "strip-ansi": "^6.0.0",
            "wrap-ansi": "^6.2.0"
          }
        },
        "color-convert": {
          "version": "2.0.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/color-convert/-/color-convert-2.0.1.tgz",
          "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
          "dev": true,
          "requires": {
            "color-name": "~1.1.4"
          }
        },
        "color-name": {
          "version": "1.1.4",
          "resolved": "http://maven.paic.com.cn/repository/npm/color-name/-/color-name-1.1.4.tgz",
          "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
          "dev": true
        },
        "find-up": {
          "version": "4.1.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/find-up/-/find-up-4.1.0.tgz",
          "integrity": "sha512-PpOwAdQ/YlXQ2vj8a3h8IipDuYRi3wceVQQGYWxNINccq40Anw7BlsEXCMbt1Zt+OLA6Fq9suIpIWD0OsnISlw==",
          "dev": true,
          "requires": {
            "locate-path": "^5.0.0",
            "path-exists": "^4.0.0"
          }
        },
        "get-caller-file": {
          "version": "2.0.5",
          "resolved": "http://maven.paic.com.cn/repository/npm/get-caller-file/-/get-caller-file-2.0.5.tgz",
          "integrity": "sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==",
          "dev": true
        },
        "has-flag": {
          "version": "4.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/has-flag/-/has-flag-4.0.0.tgz",
          "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
          "dev": true
        },
        "is-fullwidth-code-point": {
          "version": "3.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
          "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
          "dev": true
        },
        "locate-path": {
          "version": "5.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/locate-path/-/locate-path-5.0.0.tgz",
          "integrity": "sha512-t7hw9pI+WvuwNJXwk5zVHpyhIqzg2qTlklJOf0mVxGSbe3Fp2VieZcduNYjaLDoy6p9uGpQEGWG87WpMKlNq8g==",
          "dev": true,
          "requires": {
            "p-locate": "^4.1.0"
          }
        },
        "p-limit": {
          "version": "2.2.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/p-limit/-/p-limit-2.2.1.tgz",
          "integrity": "sha512-85Tk+90UCVWvbDavCLKPOLC9vvY8OwEX/RtKF+/1OADJMVlFfEHOiMTPVyxg7mk/dKa+ipdHm0OUkTvCpMTuwg==",
          "dev": true,
          "requires": {
            "p-try": "^2.0.0"
          }
        },
        "p-locate": {
          "version": "4.1.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/p-locate/-/p-locate-4.1.0.tgz",
          "integrity": "sha512-R79ZZ/0wAxKGu3oYMlz8jy/kbhsNrS7SKZ7PxEHBgJ5+F2mtFW2fK2cOtBh1cHYkQsbzFV7I+EoRKe6Yt0oK7A==",
          "dev": true,
          "requires": {
            "p-limit": "^2.2.0"
          }
        },
        "p-try": {
          "version": "2.2.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/p-try/-/p-try-2.2.0.tgz",
          "integrity": "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ==",
          "dev": true
        },
        "parse5": {
          "version": "5.1.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/parse5/-/parse5-5.1.1.tgz",
          "integrity": "sha512-ugq4DFI0Ptb+WWjAdOK16+u/nHfiIrcE+sh8kZMaM0WllQKLI9rOUq6c2b7cwPkXdzfQESqvoqK6ug7U/Yyzug==",
          "dev": true
        },
        "path-exists": {
          "version": "4.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/path-exists/-/path-exists-4.0.0.tgz",
          "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
          "dev": true
        },
        "require-main-filename": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/require-main-filename/-/require-main-filename-2.0.0.tgz",
          "integrity": "sha512-NKN5kMDylKuldxYLSUfrbo5Tuzh4hd+2E8NPPX02mZtn1VuREQToYe/ZdlJy+J3uCpfaiGF05e7B8W0iXbQHmg==",
          "dev": true
        },
        "string-width": {
          "version": "4.2.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/string-width/-/string-width-4.2.0.tgz",
          "integrity": "sha512-zUz5JD+tgqtuDjMhwIg5uFVV3dtqZ9yQJlZVfq4I01/K5Paj5UHj7VyrQOJvzawSVlKpObApbfD0Ed6yJc+1eg==",
          "dev": true,
          "requires": {
            "emoji-regex": "^8.0.0",
            "is-fullwidth-code-point": "^3.0.0",
            "strip-ansi": "^6.0.0"
          }
        },
        "strip-ansi": {
          "version": "6.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/strip-ansi/-/strip-ansi-6.0.0.tgz",
          "integrity": "sha512-AuvKTrTfQNYNIctbR1K/YGTR1756GycPsg7b9bdV9Duqur4gv6aKqHXah67Z8ImS7WEz5QVcOtlfW2rZEugt6w==",
          "dev": true,
          "requires": {
            "ansi-regex": "^5.0.0"
          }
        },
        "supports-color": {
          "version": "7.1.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/supports-color/-/supports-color-7.1.0.tgz",
          "integrity": "sha512-oRSIpR8pxT1Wr2FquTNnGet79b3BWljqOuoW/h4oBhxJ/HUbX5nX6JSruTkvXDCFMwDPvsaTTbvMLKZWSy0R5g==",
          "dev": true,
          "requires": {
            "has-flag": "^4.0.0"
          }
        },
        "wrap-ansi": {
          "version": "6.2.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/wrap-ansi/-/wrap-ansi-6.2.0.tgz",
          "integrity": "sha512-r6lPcBGxZXlIcymEu7InxDMhdW0KDxpLgoFLcguasxCaJ/SOIZwINatK9KY/tf+ZrlywOKU0UDj3ATXUBfxJXA==",
          "dev": true,
          "requires": {
            "ansi-styles": "^4.0.0",
            "string-width": "^4.1.0",
            "strip-ansi": "^6.0.0"
          }
        },
        "yargs": {
          "version": "15.0.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/yargs/-/yargs-15.0.2.tgz",
          "integrity": "sha512-GH/X/hYt+x5hOat4LMnCqMd8r5Cv78heOMIJn1hr7QPPBqfeC6p89Y78+WB9yGDvfpCvgasfmWLzNzEioOUD9Q==",
          "dev": true,
          "requires": {
            "cliui": "^6.0.0",
            "decamelize": "^1.2.0",
            "find-up": "^4.1.0",
            "get-caller-file": "^2.0.1",
            "require-directory": "^2.1.1",
            "require-main-filename": "^2.0.0",
            "set-blocking": "^2.0.0",
            "string-width": "^4.2.0",
            "which-module": "^2.0.0",
            "y18n": "^4.0.0",
            "yargs-parser": "^16.1.0"
          }
        },
        "yargs-parser": {
          "version": "16.1.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/yargs-parser/-/yargs-parser-16.1.0.tgz",
          "integrity": "sha512-H/V41UNZQPkUMIT5h5hiwg4QKIY1RPvoBV4XcjUbRM8Bk2oKqqyZ0DIEbTFZB0XjbtSPG8SAa/0DxCQmiRgzKg==",
          "dev": true,
          "requires": {
            "camelcase": "^5.0.0",
            "decamelize": "^1.2.0"
          }
        }
      }
    },
    "cli-spinners": {
      "version": "2.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/cli-spinners/-/cli-spinners-2.2.0.tgz",
      "integrity": "sha512-tgU3fKwzYjiLEQgPMD9Jt+JjHVL9kW93FiIMX/l7rivvOD4/LL0Mf7gda3+4U2KJBloybwgj5KEoQgGRioMiKQ==",
      "dev": true
    },
    "cli-width": {
      "version": "2.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/cli-width/-/cli-width-2.2.0.tgz",
      "integrity": "sha1-/xnt6Kml5XkyQUewwR8PvLq+1jk=",
      "dev": true
    },
    "clipboardy": {
      "version": "2.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/clipboardy/-/clipboardy-2.1.0.tgz",
      "integrity": "sha512-2pzOUxWcLlXWtn+Jd6js3o12TysNOOVes/aQfg+MT/35vrxWzedHlLwyoJpXjsFKWm95BTNEcMGD9+a7mKzZkQ==",
      "dev": true,
      "requires": {
        "arch": "^2.1.1",
        "execa": "^1.0.0"
      }
    },
    "cliui": {
      "version": "4.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/cliui/-/cliui-4.1.0.tgz",
      "integrity": "sha512-4FG+RSG9DL7uEwRUZXZn3SS34DiDPfzP0VOiEwtUWlE+AR2EIg+hSyvrIgUUfhdgR/UkAeW2QHgeP+hWrXs7jQ==",
      "dev": true,
      "requires": {
        "string-width": "^2.1.1",
        "strip-ansi": "^4.0.0",
        "wrap-ansi": "^2.0.0"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "3.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/ansi-regex/-/ansi-regex-3.0.0.tgz",
          "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
          "dev": true
        },
        "strip-ansi": {
          "version": "4.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/strip-ansi/-/strip-ansi-4.0.0.tgz",
          "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
          "dev": true,
          "requires": {
            "ansi-regex": "^3.0.0"
          }
        }
      }
    },
    "clone": {
      "version": "1.0.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/clone/-/clone-1.0.4.tgz",
      "integrity": "sha1-2jCcwmPfFZlMaIypAheco8fNfH4=",
      "dev": true
    },
    "co": {
      "version": "4.6.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/co/-/co-4.6.0.tgz",
      "integrity": "sha1-bqa989hTrlTMuOR7+gvz+QMfsYQ=",
      "dev": true
    },
    "coa": {
      "version": "2.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/coa/-/coa-2.0.2.tgz",
      "integrity": "sha512-q5/jG+YQnSy4nRTV4F7lPepBJZ8qBNJJDBuJdoejDyLXgmL7IEo+Le2JDZudFTFt7mrCqIRaSjws4ygRCTCAXA==",
      "dev": true,
      "requires": {
        "@types/q": "^1.5.1",
        "chalk": "^2.4.1",
        "q": "^1.1.2"
      }
    },
    "code-point-at": {
      "version": "1.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/code-point-at/-/code-point-at-1.1.0.tgz",
      "integrity": "sha1-DQcLTQQ6W+ozovGkDi7bPZpMz3c=",
      "dev": true
    },
    "collection-visit": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/collection-visit/-/collection-visit-1.0.0.tgz",
      "integrity": "sha1-S8A3PBZLwykbTTaMgpzxqApZ3KA=",
      "dev": true,
      "requires": {
        "map-visit": "^1.0.0",
        "object-visit": "^1.0.0"
      }
    },
    "color": {
      "version": "3.1.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/color/-/color-3.1.2.tgz",
      "integrity": "sha512-vXTJhHebByxZn3lDvDJYw4lR5+uB3vuoHsuYA5AKuxRVn5wzzIfQKGLBmgdVRHKTJYeK5rvJcHnrd0Li49CFpg==",
      "dev": true,
      "requires": {
        "color-convert": "^1.9.1",
        "color-string": "^1.5.2"
      }
    },
    "color-convert": {
      "version": "1.9.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/color-convert/-/color-convert-1.9.3.tgz",
      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
      "dev": true,
      "requires": {
        "color-name": "1.1.3"
      }
    },
    "color-name": {
      "version": "1.1.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha1-p9BVi9icQveV3UIyj3QIMcpTvCU=",
      "dev": true
    },
    "color-string": {
      "version": "1.5.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/color-string/-/color-string-1.5.3.tgz",
      "integrity": "sha512-dC2C5qeWoYkxki5UAXapdjqO672AM4vZuPGRQfO8b5HKuKGBbKWpITyDYN7TOFKvRW7kOgAn3746clDBMDJyQw==",
      "dev": true,
      "requires": {
        "color-name": "^1.0.0",
        "simple-swizzle": "^0.2.2"
      }
    },
    "combined-stream": {
      "version": "1.0.8",
      "resolved": "http://maven.paic.com.cn/repository/npm/combined-stream/-/combined-stream-1.0.8.tgz",
      "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
      "dev": true,
      "requires": {
        "delayed-stream": "~1.0.0"
      }
    },
    "commander": {
      "version": "2.20.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/commander/-/commander-2.20.3.tgz",
      "integrity": "sha512-GpVkmM8vF2vQUkj2LvZmD35JxeJOLCwJ9cUkugyk2nuhbv3+mJvpLYYt+0+USMxE+oj+ey/lJEnhZw75x/OMcQ==",
      "dev": true
    },
    "commondir": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/commondir/-/commondir-1.0.1.tgz",
      "integrity": "sha1-3dgA2gxmEnOTzKWVDqloo6rxJTs=",
      "dev": true
    },
    "component-emitter": {
      "version": "1.3.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/component-emitter/-/component-emitter-1.3.0.tgz",
      "integrity": "sha512-Rd3se6QB+sO1TwqZjscQrurpEPIfO0/yYnSin6Q/rD3mOutHvUrCAhJub3r90uNb+SESBuE0QYoB90YdfatsRg==",
      "dev": true
    },
    "compressible": {
      "version": "2.0.17",
      "resolved": "http://maven.paic.com.cn/repository/npm/compressible/-/compressible-2.0.17.tgz",
      "integrity": "sha512-BGHeLCK1GV7j1bSmQQAi26X+GgWcTjLr/0tzSvMCl3LH1w1IJ4PFSPoV5316b30cneTziC+B1a+3OjoSUcQYmw==",
      "dev": true,
      "requires": {
        "mime-db": ">= 1.40.0 < 2"
      }
    },
    "compression": {
      "version": "1.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/compression/-/compression-1.7.4.tgz",
      "integrity": "sha512-jaSIDzP9pZVS4ZfQ+TzvtiWhdpFhE2RDHz8QJkpX9SIpLq88VueF5jJw6t+6CUQcAoA6t+x89MLrWAqpfDE8iQ==",
      "dev": true,
      "requires": {
        "accepts": "~1.3.5",
        "bytes": "3.0.0",
        "compressible": "~2.0.16",
        "debug": "2.6.9",
        "on-headers": "~1.0.2",
        "safe-buffer": "5.1.2",
        "vary": "~1.1.2"
      },
      "dependencies": {
        "bytes": {
          "version": "3.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/bytes/-/bytes-3.0.0.tgz",
          "integrity": "sha1-0ygVQE1olpn4Wk6k+odV3ROpYEg=",
          "dev": true
        },
        "debug": {
          "version": "2.6.9",
          "resolved": "http://maven.paic.com.cn/repository/npm/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "requires": {
            "ms": "2.0.0"
          }
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
          "dev": true
        }
      }
    },
    "concat-map": {
      "version": "0.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha1-2Klr13/Wjfd5OnMDajug1UBdR3s="
    },
    "concat-stream": {
      "version": "1.6.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/concat-stream/-/concat-stream-1.6.2.tgz",
      "integrity": "sha512-27HBghJxjiZtIk3Ycvn/4kbJk/1uZuJFfuPEns6LaEvpvG1f0hTea8lilrouyo9mVc2GWdcEZ8OLoGmSADlrCw==",
      "dev": true,
      "requires": {
        "buffer-from": "^1.0.0",
        "inherits": "^2.0.3",
        "readable-stream": "^2.2.2",
        "typedarray": "^0.0.6"
      }
    },
    "condense-newlines": {
      "version": "0.2.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/condense-newlines/-/condense-newlines-0.2.1.tgz",
      "integrity": "sha1-PemFVTE5R10yUCyDsC9gaE0kxV8=",
      "dev": true,
      "requires": {
        "extend-shallow": "^2.0.1",
        "is-whitespace": "^0.3.0",
        "kind-of": "^3.0.2"
      },
      "dependencies": {
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "dev": true,
          "requires": {
            "is-extendable": "^0.1.0"
          }
        },
        "kind-of": {
          "version": "3.2.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "dev": true,
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "config-chain": {
      "version": "1.1.12",
      "resolved": "http://maven.paic.com.cn/repository/npm/config-chain/-/config-chain-1.1.12.tgz",
      "integrity": "sha512-a1eOIcu8+7lUInge4Rpf/n4Krkf3Dd9lqhljRzII1/Zno/kRtUWnznPO3jOKBmTEktkt3fkxisUcivoj0ebzoA==",
      "dev": true,
      "requires": {
        "ini": "^1.3.4",
        "proto-list": "~1.2.1"
      }
    },
    "confusing-browser-globals": {
      "version": "1.0.9",
      "resolved": "http://maven.paic.com.cn/repository/npm/confusing-browser-globals/-/confusing-browser-globals-1.0.9.tgz",
      "integrity": "sha512-KbS1Y0jMtyPgIxjO7ZzMAuUpAKMt1SzCL9fsrKsX6b0zJPTaT0SiSPmewwVZg9UAO83HVIlEhZF84LIjZ0lmAw==",
      "dev": true
    },
    "connect-history-api-fallback": {
      "version": "1.6.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/connect-history-api-fallback/-/connect-history-api-fallback-1.6.0.tgz",
      "integrity": "sha512-e54B99q/OUoH64zYYRf3HBP5z24G38h5D3qXu23JGRoigpX5Ss4r9ZnDk3g0Z8uQC2x2lPaJ+UlWBc1ZWBWdLg==",
      "dev": true
    },
    "console-browserify": {
      "version": "1.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/console-browserify/-/console-browserify-1.2.0.tgz",
      "integrity": "sha512-ZMkYO/LkF17QvCPqM0gxw8yUzigAOZOSWSHg91FH6orS7vcEj5dVZTidN2fQ14yBSdg97RqhSNwLUXInd52OTA==",
      "dev": true
    },
    "consolidate": {
      "version": "0.15.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/consolidate/-/consolidate-0.15.1.tgz",
      "integrity": "sha512-DW46nrsMJgy9kqAbPt5rKaCr7uFtpo4mSUvLHIUbJEjm0vo+aY5QLwBUq3FK4tRnJr/X0Psc0C4jf/h+HtXSMw==",
      "dev": true,
      "requires": {
        "bluebird": "^3.1.1"
      }
    },
    "constants-browserify": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/constants-browserify/-/constants-browserify-1.0.0.tgz",
      "integrity": "sha1-wguW2MYXdIqvHBYCF2DNJ/y4y3U=",
      "dev": true
    },
    "contains-path": {
      "version": "0.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/contains-path/-/contains-path-0.1.0.tgz",
      "integrity": "sha1-/ozxhP9mcLa67wGp1IYaXL7EEgo=",
      "dev": true
    },
    "content-disposition": {
      "version": "0.5.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/content-disposition/-/content-disposition-0.5.3.tgz",
      "integrity": "sha512-ExO0774ikEObIAEV9kDo50o+79VCUdEB6n6lzKgGwupcVeRlhrj3qGAfwq8G6uBJjkqLrhT0qEYFcWng8z1z0g==",
      "dev": true,
      "requires": {
        "safe-buffer": "5.1.2"
      }
    },
    "content-type": {
      "version": "1.0.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/content-type/-/content-type-1.0.4.tgz",
      "integrity": "sha512-hIP3EEPs8tB9AT1L+NUqtwOAps4mk2Zob89MWXMHjHWg9milF/j4osnnQLXBCBFBk/tvIG/tUc9mOUJiPBhPXA==",
      "dev": true
    },
    "convert-source-map": {
      "version": "1.7.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/convert-source-map/-/convert-source-map-1.7.0.tgz",
      "integrity": "sha512-4FJkXzKXEDB1snCFZlLP4gpC3JILicCpGbzG9f9G7tGqGCzETQ2hWPrcinA9oU4wtf2biUaEH5065UnMeR33oA==",
      "dev": true,
      "requires": {
        "safe-buffer": "~5.1.1"
      }
    },
    "cookie": {
      "version": "0.4.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/cookie/-/cookie-0.4.0.tgz",
      "integrity": "sha512-+Hp8fLp57wnUSt0tY0tHEXh4voZRDnoIrZPqlo3DPiI4y9lwg/jqx+1Om94/W6ZaPDOUbnjOt/99w66zk+l1Xg==",
      "dev": true
    },
    "cookie-signature": {
      "version": "1.0.6",
      "resolved": "http://maven.paic.com.cn/repository/npm/cookie-signature/-/cookie-signature-1.0.6.tgz",
      "integrity": "sha1-4wOogrNCzD7oylE6eZmXNNqzriw=",
      "dev": true
    },
    "copy-concurrently": {
      "version": "1.0.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/copy-concurrently/-/copy-concurrently-1.0.5.tgz",
      "integrity": "sha512-f2domd9fsVDFtaFcbaRZuYXwtdmnzqbADSwhSWYxYB/Q8zsdUUFMXVRwXGDMWmbEzAn1kdRrtI1T/KTFOL4X2A==",
      "dev": true,
      "requires": {
        "aproba": "^1.1.1",
        "fs-write-stream-atomic": "^1.0.8",
        "iferr": "^0.1.5",
        "mkdirp": "^0.5.1",
        "rimraf": "^2.5.4",
        "run-queue": "^1.0.0"
      }
    },
    "copy-descriptor": {
      "version": "0.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/copy-descriptor/-/copy-descriptor-0.1.1.tgz",
      "integrity": "sha1-Z29us8OZl8LuGsOpJP1hJHSPV40=",
      "dev": true
    },
    "copy-webpack-plugin": {
      "version": "4.6.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/copy-webpack-plugin/-/copy-webpack-plugin-4.6.0.tgz",
      "integrity": "sha512-Y+SQCF+0NoWQryez2zXn5J5knmr9z/9qSQt7fbL78u83rxmigOy8X5+BFn8CFSuX+nKT8gpYwJX68ekqtQt6ZA==",
      "dev": true,
      "requires": {
        "cacache": "^10.0.4",
        "find-cache-dir": "^1.0.0",
        "globby": "^7.1.1",
        "is-glob": "^4.0.0",
        "loader-utils": "^1.1.0",
        "minimatch": "^3.0.4",
        "p-limit": "^1.0.0",
        "serialize-javascript": "^1.4.0"
      },
      "dependencies": {
        "cacache": {
          "version": "10.0.4",
          "resolved": "http://maven.paic.com.cn/repository/npm/cacache/-/cacache-10.0.4.tgz",
          "integrity": "sha512-Dph0MzuH+rTQzGPNT9fAnrPmMmjKfST6trxJeK7NQuHRaVw24VzPRWTmg9MpcwOVQZO0E1FBICUlFeNaKPIfHA==",
          "dev": true,
          "requires": {
            "bluebird": "^3.5.1",
            "chownr": "^1.0.1",
            "glob": "^7.1.2",
            "graceful-fs": "^4.1.11",
            "lru-cache": "^4.1.1",
            "mississippi": "^2.0.0",
            "mkdirp": "^0.5.1",
            "move-concurrently": "^1.0.1",
            "promise-inflight": "^1.0.1",
            "rimraf": "^2.6.2",
            "ssri": "^5.2.4",
            "unique-filename": "^1.1.0",
            "y18n": "^4.0.0"
          }
        },
        "find-cache-dir": {
          "version": "1.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/find-cache-dir/-/find-cache-dir-1.0.0.tgz",
          "integrity": "sha1-kojj6ePMN0hxfTnq3hfPcfww7m8=",
          "dev": true,
          "requires": {
            "commondir": "^1.0.1",
            "make-dir": "^1.0.0",
            "pkg-dir": "^2.0.0"
          }
        },
        "globby": {
          "version": "7.1.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/globby/-/globby-7.1.1.tgz",
          "integrity": "sha1-+yzP+UAfhgCUXfral0QMypcrhoA=",
          "dev": true,
          "requires": {
            "array-union": "^1.0.1",
            "dir-glob": "^2.0.0",
            "glob": "^7.1.2",
            "ignore": "^3.3.5",
            "pify": "^3.0.0",
            "slash": "^1.0.0"
          }
        },
        "lru-cache": {
          "version": "4.1.5",
          "resolved": "http://maven.paic.com.cn/repository/npm/lru-cache/-/lru-cache-4.1.5.tgz",
          "integrity": "sha512-sWZlbEP2OsHNkXrMl5GYk/jKk70MBng6UU4YI/qGDYbgf6YbP4EvmqISbXCoJiRKs+1bSpFHVgQxvJ17F2li5g==",
          "dev": true,
          "requires": {
            "pseudomap": "^1.0.2",
            "yallist": "^2.1.2"
          }
        },
        "make-dir": {
          "version": "1.3.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/make-dir/-/make-dir-1.3.0.tgz",
          "integrity": "sha512-2w31R7SJtieJJnQtGc7RVL2StM2vGYVfqUOvUDxH6bC6aJTxPxTF0GnIgCyu7tjockiUWAYQRbxa7vKn34s5sQ==",
          "dev": true,
          "requires": {
            "pify": "^3.0.0"
          }
        },
        "mississippi": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/mississippi/-/mississippi-2.0.0.tgz",
          "integrity": "sha512-zHo8v+otD1J10j/tC+VNoGK9keCuByhKovAvdn74dmxJl9+mWHnx6EMsDN4lgRoMI/eYo2nchAxniIbUPb5onw==",
          "dev": true,
          "requires": {
            "concat-stream": "^1.5.0",
            "duplexify": "^3.4.2",
            "end-of-stream": "^1.1.0",
            "flush-write-stream": "^1.0.0",
            "from2": "^2.1.0",
            "parallel-transform": "^1.1.0",
            "pump": "^2.0.1",
            "pumpify": "^1.3.3",
            "stream-each": "^1.1.0",
            "through2": "^2.0.0"
          }
        },
        "pify": {
          "version": "3.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/pify/-/pify-3.0.0.tgz",
          "integrity": "sha1-5aSs0sEB/fPZpNB/DbxNtJ3SgXY=",
          "dev": true
        },
        "pkg-dir": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/pkg-dir/-/pkg-dir-2.0.0.tgz",
          "integrity": "sha1-9tXREJ4Z1j7fQo4L1X4Sd3YVM0s=",
          "dev": true,
          "requires": {
            "find-up": "^2.1.0"
          }
        },
        "pump": {
          "version": "2.0.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/pump/-/pump-2.0.1.tgz",
          "integrity": "sha512-ruPMNRkN3MHP1cWJc9OWr+T/xDP0jhXYCLfJcBuX54hhfIBnaQmAUMfDcG4DM5UMWByBbJY69QSphm3jtDKIkA==",
          "dev": true,
          "requires": {
            "end-of-stream": "^1.1.0",
            "once": "^1.3.1"
          }
        },
        "serialize-javascript": {
          "version": "1.9.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/serialize-javascript/-/serialize-javascript-1.9.1.tgz",
          "integrity": "sha512-0Vb/54WJ6k5v8sSWN09S0ora+Hnr+cX40r9F170nT+mSkaxltoE/7R3OrIdBSUv1OoiobH1QoWQbCnAO+e8J1A==",
          "dev": true
        },
        "slash": {
          "version": "1.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/slash/-/slash-1.0.0.tgz",
          "integrity": "sha1-xB8vbDn8FtHNF61LXYlhFK5HDVU=",
          "dev": true
        },
        "ssri": {
          "version": "5.3.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/ssri/-/ssri-5.3.0.tgz",
          "integrity": "sha512-XRSIPqLij52MtgoQavH/x/dU1qVKtWUAAZeOHsR9c2Ddi4XerFy3mc1alf+dLJKl9EUIm/Ht+EowFkTUOA6GAQ==",
          "dev": true,
          "requires": {
            "safe-buffer": "^5.1.1"
          }
        },
        "yallist": {
          "version": "2.1.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/yallist/-/yallist-2.1.2.tgz",
          "integrity": "sha1-HBH5IY8HYImkfdUS+TxmmaaoHVI=",
          "dev": true
        }
      }
    },
    "core-js": {
      "version": "2.6.11",
      "resolved": "http://maven.paic.com.cn/repository/npm/core-js/-/core-js-2.6.11.tgz",
      "integrity": "sha512-5wjnpaT/3dV+XB4borEsnAYQchn00XSgTAWKDkEqv+K8KevjbzmofK6hfJ9TZIlpj2N0xQpazy7PiRQiWHqzWg=="
    },
    "core-util-is": {
      "version": "1.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/core-util-is/-/core-util-is-1.0.2.tgz",
      "integrity": "sha1-tf1UIgqivFq1eqtxQMlAdUUDwac=",
      "dev": true
    },
    "cosmiconfig": {
      "version": "5.2.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/cosmiconfig/-/cosmiconfig-5.2.1.tgz",
      "integrity": "sha512-H65gsXo1SKjf8zmrJ67eJk8aIRKV5ff2D4uKZIBZShbhGSpEmsQOPW/SKMKYhSTrqR7ufy6RP69rPogdaPh/kA==",
      "dev": true,
      "requires": {
        "import-fresh": "^2.0.0",
        "is-directory": "^0.3.1",
        "js-yaml": "^3.13.1",
        "parse-json": "^4.0.0"
      },
      "dependencies": {
        "parse-json": {
          "version": "4.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/parse-json/-/parse-json-4.0.0.tgz",
          "integrity": "sha1-vjX1Qlvh9/bHRxhPmKeIy5lHfuA=",
          "dev": true,
          "requires": {
            "error-ex": "^1.3.1",
            "json-parse-better-errors": "^1.0.1"
          }
        }
      }
    },
    "create-ecdh": {
      "version": "4.0.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/create-ecdh/-/create-ecdh-4.0.3.tgz",
      "integrity": "sha512-GbEHQPMOswGpKXM9kCWVrremUcBmjteUaQ01T9rkKCPDXfUHX0IoP9LpHYo2NPFampa4e+/pFDc3jQdxrxQLaw==",
      "dev": true,
      "requires": {
        "bn.js": "^4.1.0",
        "elliptic": "^6.0.0"
      }
    },
    "create-hash": {
      "version": "1.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/create-hash/-/create-hash-1.2.0.tgz",
      "integrity": "sha512-z00bCGNHDG8mHAkP7CtT1qVu+bFQUPjYq/4Iv3C3kWjTFV10zIjfSoeqXo9Asws8gwSHDGj/hl2u4OGIjapeCg==",
      "dev": true,
      "requires": {
        "cipher-base": "^1.0.1",
        "inherits": "^2.0.1",
        "md5.js": "^1.3.4",
        "ripemd160": "^2.0.1",
        "sha.js": "^2.4.0"
      }
    },
    "create-hmac": {
      "version": "1.1.7",
      "resolved": "http://maven.paic.com.cn/repository/npm/create-hmac/-/create-hmac-1.1.7.tgz",
      "integrity": "sha512-MJG9liiZ+ogc4TzUwuvbER1JRdgvUFSB5+VR/g5h82fGaIRWMWddtKBHi7/sVhfjQZ6SehlyhvQYrcYkaUIpLg==",
      "dev": true,
      "requires": {
        "cipher-base": "^1.0.3",
        "create-hash": "^1.1.0",
        "inherits": "^2.0.1",
        "ripemd160": "^2.0.0",
        "safe-buffer": "^5.0.1",
        "sha.js": "^2.4.8"
      }
    },
    "cross-spawn": {
      "version": "6.0.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/cross-spawn/-/cross-spawn-6.0.5.tgz",
      "integrity": "sha512-eTVLrBSt7fjbDygz805pMnstIs2VTBNkRm0qxZd+M7A5XDdxVRWO5MxGBXZhjY4cqLYLdtrGqRf8mBPmzwSpWQ==",
      "dev": true,
      "requires": {
        "nice-try": "^1.0.4",
        "path-key": "^2.0.1",
        "semver": "^5.5.0",
        "shebang-command": "^1.2.0",
        "which": "^1.2.9"
      }
    },
    "crypto-browserify": {
      "version": "3.12.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/crypto-browserify/-/crypto-browserify-3.12.0.tgz",
      "integrity": "sha512-fz4spIh+znjO2VjL+IdhEpRJ3YN6sMzITSBijk6FK2UvTqruSQW+/cCZTSNsMiZNvUeq0CqurF+dAbyiGOY6Wg==",
      "dev": true,
      "requires": {
        "browserify-cipher": "^1.0.0",
        "browserify-sign": "^4.0.0",
        "create-ecdh": "^4.0.0",
        "create-hash": "^1.1.0",
        "create-hmac": "^1.1.0",
        "diffie-hellman": "^5.0.0",
        "inherits": "^2.0.1",
        "pbkdf2": "^3.0.3",
        "public-encrypt": "^4.0.0",
        "randombytes": "^2.0.0",
        "randomfill": "^1.0.3"
      }
    },
    "css": {
      "version": "2.2.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/css/-/css-2.2.4.tgz",
      "integrity": "sha512-oUnjmWpy0niI3x/mPL8dVEI1l7MnG3+HHyRPHf+YFSbK+svOhXpmSOcDURUh2aOCgl2grzrOPt1nHLuCVFULLw==",
      "dev": true,
      "requires": {
        "inherits": "^2.0.3",
        "source-map": "^0.6.1",
        "source-map-resolve": "^0.5.2",
        "urix": "^0.1.0"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        }
      }
    },
    "css-color-names": {
      "version": "0.0.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/css-color-names/-/css-color-names-0.0.4.tgz",
      "integrity": "sha1-gIrcLnnPhHOAabZGyyDsJ762KeA=",
      "dev": true
    },
    "css-declaration-sorter": {
      "version": "4.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/css-declaration-sorter/-/css-declaration-sorter-4.0.1.tgz",
      "integrity": "sha512-BcxQSKTSEEQUftYpBVnsH4SF05NTuBokb19/sBt6asXGKZ/6VP7PLG1CBCkFDYOnhXhPh0jMhO6xZ71oYHXHBA==",
      "dev": true,
      "requires": {
        "postcss": "^7.0.1",
        "timsort": "^0.3.0"
      }
    },
    "css-loader": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/css-loader/-/css-loader-1.0.1.tgz",
      "integrity": "sha512-+ZHAZm/yqvJ2kDtPne3uX0C+Vr3Zn5jFn2N4HywtS5ujwvsVkyg0VArEXpl3BgczDA8anieki1FIzhchX4yrDw==",
      "dev": true,
      "requires": {
        "babel-code-frame": "^6.26.0",
        "css-selector-tokenizer": "^0.7.0",
        "icss-utils": "^2.1.0",
        "loader-utils": "^1.0.2",
        "lodash": "^4.17.11",
        "postcss": "^6.0.23",
        "postcss-modules-extract-imports": "^1.2.0",
        "postcss-modules-local-by-default": "^1.2.0",
        "postcss-modules-scope": "^1.1.0",
        "postcss-modules-values": "^1.3.0",
        "postcss-value-parser": "^3.3.0",
        "source-list-map": "^2.0.0"
      },
      "dependencies": {
        "postcss": {
          "version": "6.0.23",
          "resolved": "http://maven.paic.com.cn/repository/npm/postcss/-/postcss-6.0.23.tgz",
          "integrity": "sha512-soOk1h6J3VMTZtVeVpv15/Hpdl2cBLX3CAw4TAbkpTJiNPk9YP/zWcD1ND+xEtvyuuvKzbxliTOIyvkSeSJ6ag==",
          "dev": true,
          "requires": {
            "chalk": "^2.4.1",
            "source-map": "^0.6.1",
            "supports-color": "^5.4.0"
          }
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        }
      }
    },
    "css-select": {
      "version": "2.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/css-select/-/css-select-2.1.0.tgz",
      "integrity": "sha512-Dqk7LQKpwLoH3VovzZnkzegqNSuAziQyNZUcrdDM401iY+R5NkGBXGmtO05/yaXQziALuPogeG0b7UAgjnTJTQ==",
      "dev": true,
      "requires": {
        "boolbase": "^1.0.0",
        "css-what": "^3.2.1",
        "domutils": "^1.7.0",
        "nth-check": "^1.0.2"
      }
    },
    "css-select-base-adapter": {
      "version": "0.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/css-select-base-adapter/-/css-select-base-adapter-0.1.1.tgz",
      "integrity": "sha512-jQVeeRG70QI08vSTwf1jHxp74JoZsr2XSgETae8/xC8ovSnL2WF87GTLO86Sbwdt2lK4Umg4HnnwMO4YF3Ce7w==",
      "dev": true
    },
    "css-selector-tokenizer": {
      "version": "0.7.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/css-selector-tokenizer/-/css-selector-tokenizer-0.7.1.tgz",
      "integrity": "sha512-xYL0AMZJ4gFzJQsHUKa5jiWWi2vH77WVNg7JYRyewwj6oPh4yb/y6Y9ZCw9dsj/9UauMhtuxR+ogQd//EdEVNA==",
      "dev": true,
      "requires": {
        "cssesc": "^0.1.0",
        "fastparse": "^1.1.1",
        "regexpu-core": "^1.0.0"
      },
      "dependencies": {
        "cssesc": {
          "version": "0.1.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/cssesc/-/cssesc-0.1.0.tgz",
          "integrity": "sha1-yBSQPkViM3GgR3tAEJqq++6t27Q=",
          "dev": true
        },
        "jsesc": {
          "version": "0.5.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/jsesc/-/jsesc-0.5.0.tgz",
          "integrity": "sha1-597mbjXW/Bb3EP6R1c9p9w8IkR0=",
          "dev": true
        },
        "regexpu-core": {
          "version": "1.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/regexpu-core/-/regexpu-core-1.0.0.tgz",
          "integrity": "sha1-hqdj9Y7k18L2sQLkdkBQ3n7ZDGs=",
          "dev": true,
          "requires": {
            "regenerate": "^1.2.1",
            "regjsgen": "^0.2.0",
            "regjsparser": "^0.1.4"
          }
        },
        "regjsgen": {
          "version": "0.2.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/regjsgen/-/regjsgen-0.2.0.tgz",
          "integrity": "sha1-bAFq3qxVT3WCP+N6wFuS1aTtsfc=",
          "dev": true
        },
        "regjsparser": {
          "version": "0.1.5",
          "resolved": "http://maven.paic.com.cn/repository/npm/regjsparser/-/regjsparser-0.1.5.tgz",
          "integrity": "sha1-fuj4Tcb6eS0/0K4ijSS9lJ6tIFw=",
          "dev": true,
          "requires": {
            "jsesc": "~0.5.0"
          }
        }
      }
    },
    "css-tree": {
      "version": "1.0.0-alpha.37",
      "resolved": "http://maven.paic.com.cn/repository/npm/css-tree/-/css-tree-1.0.0-alpha.37.tgz",
      "integrity": "sha512-DMxWJg0rnz7UgxKT0Q1HU/L9BeJI0M6ksor0OgqOnF+aRCDWg/N2641HmVyU9KVIu0OVVWOb2IpC9A+BJRnejg==",
      "dev": true,
      "requires": {
        "mdn-data": "2.0.4",
        "source-map": "^0.6.1"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        }
      }
    },
    "css-unit-converter": {
      "version": "1.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/css-unit-converter/-/css-unit-converter-1.1.1.tgz",
      "integrity": "sha1-2bkoGtz9jO2TW9urqDeGiX9k6ZY=",
      "dev": true
    },
    "css-what": {
      "version": "3.2.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/css-what/-/css-what-3.2.1.tgz",
      "integrity": "sha512-WwOrosiQTvyms+Ti5ZC5vGEK0Vod3FTt1ca+payZqvKuGJF+dq7bG63DstxtN0dpm6FxY27a/zS3Wten+gEtGw==",
      "dev": true
    },
    "cssesc": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/cssesc/-/cssesc-2.0.0.tgz",
      "integrity": "sha512-MsCAG1z9lPdoO/IUMLSBWBSVxVtJ1395VGIQ+Fc2gNdkQ1hNDnQdw3YhA71WJCBW1vdwA0cAnk/DnW6bqoEUYg==",
      "dev": true
    },
    "cssnano": {
      "version": "4.1.10",
      "resolved": "http://maven.paic.com.cn/repository/npm/cssnano/-/cssnano-4.1.10.tgz",
      "integrity": "sha512-5wny+F6H4/8RgNlaqab4ktc3e0/blKutmq8yNlBFXA//nSFFAqAngjNVRzUvCgYROULmZZUoosL/KSoZo5aUaQ==",
      "dev": true,
      "requires": {
        "cosmiconfig": "^5.0.0",
        "cssnano-preset-default": "^4.0.7",
        "is-resolvable": "^1.0.0",
        "postcss": "^7.0.0"
      }
    },
    "cssnano-preset-default": {
      "version": "4.0.7",
      "resolved": "http://maven.paic.com.cn/repository/npm/cssnano-preset-default/-/cssnano-preset-default-4.0.7.tgz",
      "integrity": "sha512-x0YHHx2h6p0fCl1zY9L9roD7rnlltugGu7zXSKQx6k2rYw0Hi3IqxcoAGF7u9Q5w1nt7vK0ulxV8Lo+EvllGsA==",
      "dev": true,
      "requires": {
        "css-declaration-sorter": "^4.0.1",
        "cssnano-util-raw-cache": "^4.0.1",
        "postcss": "^7.0.0",
        "postcss-calc": "^7.0.1",
        "postcss-colormin": "^4.0.3",
        "postcss-convert-values": "^4.0.1",
        "postcss-discard-comments": "^4.0.2",
        "postcss-discard-duplicates": "^4.0.2",
        "postcss-discard-empty": "^4.0.1",
        "postcss-discard-overridden": "^4.0.1",
        "postcss-merge-longhand": "^4.0.11",
        "postcss-merge-rules": "^4.0.3",
        "postcss-minify-font-values": "^4.0.2",
        "postcss-minify-gradients": "^4.0.2",
        "postcss-minify-params": "^4.0.2",
        "postcss-minify-selectors": "^4.0.2",
        "postcss-normalize-charset": "^4.0.1",
        "postcss-normalize-display-values": "^4.0.2",
        "postcss-normalize-positions": "^4.0.2",
        "postcss-normalize-repeat-style": "^4.0.2",
        "postcss-normalize-string": "^4.0.2",
        "postcss-normalize-timing-functions": "^4.0.2",
        "postcss-normalize-unicode": "^4.0.1",
        "postcss-normalize-url": "^4.0.1",
        "postcss-normalize-whitespace": "^4.0.2",
        "postcss-ordered-values": "^4.1.2",
        "postcss-reduce-initial": "^4.0.3",
        "postcss-reduce-transforms": "^4.0.2",
        "postcss-svgo": "^4.0.2",
        "postcss-unique-selectors": "^4.0.1"
      }
    },
    "cssnano-util-get-arguments": {
      "version": "4.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/cssnano-util-get-arguments/-/cssnano-util-get-arguments-4.0.0.tgz",
      "integrity": "sha1-7ToIKZ8h11dBsg87gfGU7UnMFQ8=",
      "dev": true
    },
    "cssnano-util-get-match": {
      "version": "4.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/cssnano-util-get-match/-/cssnano-util-get-match-4.0.0.tgz",
      "integrity": "sha1-wOTKB/U4a7F+xeUiULT1lhNlFW0=",
      "dev": true
    },
    "cssnano-util-raw-cache": {
      "version": "4.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/cssnano-util-raw-cache/-/cssnano-util-raw-cache-4.0.1.tgz",
      "integrity": "sha512-qLuYtWK2b2Dy55I8ZX3ky1Z16WYsx544Q0UWViebptpwn/xDBmog2TLg4f+DBMg1rJ6JDWtn96WHbOKDWt1WQA==",
      "dev": true,
      "requires": {
        "postcss": "^7.0.0"
      }
    },
    "cssnano-util-same-parent": {
      "version": "4.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/cssnano-util-same-parent/-/cssnano-util-same-parent-4.0.1.tgz",
      "integrity": "sha512-WcKx5OY+KoSIAxBW6UBBRay1U6vkYheCdjyVNDm85zt5K9mHoGOfsOsqIszfAqrQQFIIKgjh2+FDgIj/zsl21Q==",
      "dev": true
    },
    "csso": {
      "version": "4.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/csso/-/csso-4.0.2.tgz",
      "integrity": "sha512-kS7/oeNVXkHWxby5tHVxlhjizRCSv8QdU7hB2FpdAibDU8FjTAolhNjKNTiLzXtUrKT6HwClE81yXwEk1309wg==",
      "dev": true,
      "requires": {
        "css-tree": "1.0.0-alpha.37"
      }
    },
    "cssom": {
      "version": "0.3.8",
      "resolved": "http://maven.paic.com.cn/repository/npm/cssom/-/cssom-0.3.8.tgz",
      "integrity": "sha512-b0tGHbfegbhPJpxpiBPU2sCkigAqtM9O121le6bbOlgyV+NyGyCmVfJ6QW9eRjz8CpNfWEOYBIMIGRYkLwsIYg==",
      "dev": true
    },
    "cssstyle": {
      "version": "1.4.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/cssstyle/-/cssstyle-1.4.0.tgz",
      "integrity": "sha512-GBrLZYZ4X4x6/QEoBnIrqb8B/f5l4+8me2dkom/j1Gtbxy0kBv6OGzKuAsGM75bkGwGAFkt56Iwg28S3XTZgSA==",
      "dev": true,
      "requires": {
        "cssom": "0.3.x"
      }
    },
    "current-script-polyfill": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/current-script-polyfill/-/current-script-polyfill-1.0.0.tgz",
      "integrity": "sha1-8xz35PPiGLBybnOMqSoC00iO9hU=",
      "dev": true
    },
    "cyclist": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/cyclist/-/cyclist-1.0.1.tgz",
      "integrity": "sha1-WW6WmP0MgOEgOMK4LW6xs1tiJNk=",
      "dev": true
    },
    "dashdash": {
      "version": "1.14.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/dashdash/-/dashdash-1.14.1.tgz",
      "integrity": "sha1-hTz6D3y+L+1d4gMmuN1YEDX24vA=",
      "dev": true,
      "requires": {
        "assert-plus": "^1.0.0"
      }
    },
    "data-urls": {
      "version": "1.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/data-urls/-/data-urls-1.1.0.tgz",
      "integrity": "sha512-YTWYI9se1P55u58gL5GkQHW4P6VJBJ5iBT+B5a7i2Tjadhv52paJG0qHX4A0OR6/t52odI64KP2YvFpkDOi3eQ==",
      "dev": true,
      "requires": {
        "abab": "^2.0.0",
        "whatwg-mimetype": "^2.2.0",
        "whatwg-url": "^7.0.0"
      },
      "dependencies": {
        "whatwg-url": {
          "version": "7.1.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/whatwg-url/-/whatwg-url-7.1.0.tgz",
          "integrity": "sha512-WUu7Rg1DroM7oQvGWfOiAK21n74Gg+T4elXEQYkOhtyLeWiJFoOGLXPKI/9gzIie9CtwVLm8wtw6YJdKyxSjeg==",
          "dev": true,
          "requires": {
            "lodash.sortby": "^4.7.0",
            "tr46": "^1.0.1",
            "webidl-conversions": "^4.0.2"
          }
        }
      }
    },
    "de-indent": {
      "version": "1.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/de-indent/-/de-indent-1.0.2.tgz",
      "integrity": "sha1-sgOOhG3DO6pXlhKNCAS0VbjB4h0=",
      "dev": true
    },
    "debug": {
      "version": "4.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/debug/-/debug-4.1.1.tgz",
      "integrity": "sha512-pYAIzeRo8J6KPEaJ0VWOh5Pzkbw/RetuzehGM7QRRX5he4fPHx2rdKMB256ehJCkX+XRQm16eZLqLNS8RSZXZw==",
      "dev": true,
      "requires": {
        "ms": "^2.1.1"
      }
    },
    "decamelize": {
      "version": "1.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/decamelize/-/decamelize-1.2.0.tgz",
      "integrity": "sha1-9lNNFRSCabIDUue+4m9QH5oZEpA=",
      "dev": true
    },
    "decode-uri-component": {
      "version": "0.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/decode-uri-component/-/decode-uri-component-0.2.0.tgz",
      "integrity": "sha1-6zkTMzRYd1y4TNGh+uBiEGu4dUU=",
      "dev": true
    },
    "deep-equal": {
      "version": "1.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/deep-equal/-/deep-equal-1.1.1.tgz",
      "integrity": "sha512-yd9c5AdiqVcR+JjcwUQb9DkhJc8ngNr0MahEBGvDiJw8puWab2yZlh+nkasOnZP+EGTAP6rRp2JzJhJZzvNF8g==",
      "dev": true,
      "requires": {
        "is-arguments": "^1.0.4",
        "is-date-object": "^1.0.1",
        "is-regex": "^1.0.4",
        "object-is": "^1.0.1",
        "object-keys": "^1.1.1",
        "regexp.prototype.flags": "^1.2.0"
      }
    },
    "deep-is": {
      "version": "0.1.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/deep-is/-/deep-is-0.1.3.tgz",
      "integrity": "sha1-s2nW+128E+7PUk+RsHD+7cNXzzQ=",
      "dev": true
    },
    "deepmerge": {
      "version": "1.5.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/deepmerge/-/deepmerge-1.5.2.tgz",
      "integrity": "sha512-95k0GDqvBjZavkuvzx/YqVLv/6YYa17fz6ILMSf7neqQITCPbnfEnQvEgMPNjH4kgobe7+WIL0yJEHku+H3qtQ=="
    },
    "default-gateway": {
      "version": "5.0.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/default-gateway/-/default-gateway-5.0.5.tgz",
      "integrity": "sha512-z2RnruVmj8hVMmAnEJMTIJNijhKCDiGjbLP+BHJFOT7ld3Bo5qcIBpVYDniqhbMIIf+jZDlkP2MkPXiQy/DBLA==",
      "dev": true,
      "requires": {
        "execa": "^3.3.0"
      },
      "dependencies": {
        "cross-spawn": {
          "version": "7.0.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/cross-spawn/-/cross-spawn-7.0.1.tgz",
          "integrity": "sha512-u7v4o84SwFpD32Z8IIcPZ6z1/ie24O6RU3RbtL5Y316l3KuHVPx9ItBgWQ6VlfAFnRnTtMUrsQ9MUUTuEZjogg==",
          "dev": true,
          "requires": {
            "path-key": "^3.1.0",
            "shebang-command": "^2.0.0",
            "which": "^2.0.1"
          }
        },
        "execa": {
          "version": "3.4.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/execa/-/execa-3.4.0.tgz",
          "integrity": "sha512-r9vdGQk4bmCuK1yKQu1KTwcT2zwfWdbdaXfCtAh+5nU/4fSX+JAb7vZGvI5naJrQlvONrEB20jeruESI69530g==",
          "dev": true,
          "requires": {
            "cross-spawn": "^7.0.0",
            "get-stream": "^5.0.0",
            "human-signals": "^1.1.1",
            "is-stream": "^2.0.0",
            "merge-stream": "^2.0.0",
            "npm-run-path": "^4.0.0",
            "onetime": "^5.1.0",
            "p-finally": "^2.0.0",
            "signal-exit": "^3.0.2",
            "strip-final-newline": "^2.0.0"
          }
        },
        "get-stream": {
          "version": "5.1.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/get-stream/-/get-stream-5.1.0.tgz",
          "integrity": "sha512-EXr1FOzrzTfGeL0gQdeFEvOMm2mzMOglyiOXSTpPC+iAjAKftbr3jpCMWynogwYnM+eSj9sHGc6wjIcDvYiygw==",
          "dev": true,
          "requires": {
            "pump": "^3.0.0"
          }
        },
        "is-stream": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-stream/-/is-stream-2.0.0.tgz",
          "integrity": "sha512-XCoy+WlUr7d1+Z8GgSuXmpuUFC9fOhRXglJMx+dwLKTkL44Cjd4W1Z5P+BQZpr+cR93aGP4S/s7Ftw6Nd/kiEw==",
          "dev": true
        },
        "merge-stream": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/merge-stream/-/merge-stream-2.0.0.tgz",
          "integrity": "sha512-abv/qOcuPfk3URPfDzmZU1LKmuw8kT+0nIHvKrKgFrwifol/doWcdA4ZqsWQ8ENrFKkd67Mfpo/LovbIUsbt3w==",
          "dev": true
        },
        "mimic-fn": {
          "version": "2.1.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/mimic-fn/-/mimic-fn-2.1.0.tgz",
          "integrity": "sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg==",
          "dev": true
        },
        "npm-run-path": {
          "version": "4.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/npm-run-path/-/npm-run-path-4.0.0.tgz",
          "integrity": "sha512-8eyAOAH+bYXFPSnNnKr3J+yoybe8O87Is5rtAQ8qRczJz1ajcsjg8l2oZqP+Ppx15Ii3S1vUTjQN2h4YO2tWWQ==",
          "dev": true,
          "requires": {
            "path-key": "^3.0.0"
          }
        },
        "onetime": {
          "version": "5.1.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/onetime/-/onetime-5.1.0.tgz",
          "integrity": "sha512-5NcSkPHhwTVFIQN+TUqXoS5+dlElHXdpAWu9I0HP20YOtIi+aZ0Ct82jdlILDxjLEAWwvm+qj1m6aEtsDVmm6Q==",
          "dev": true,
          "requires": {
            "mimic-fn": "^2.1.0"
          }
        },
        "p-finally": {
          "version": "2.0.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/p-finally/-/p-finally-2.0.1.tgz",
          "integrity": "sha512-vpm09aKwq6H9phqRQzecoDpD8TmVyGw70qmWlyq5onxY7tqyTTFVvxMykxQSQKILBSFlbXpypIw2T1Ml7+DDtw==",
          "dev": true
        },
        "path-key": {
          "version": "3.1.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/path-key/-/path-key-3.1.1.tgz",
          "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
          "dev": true
        },
        "shebang-command": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/shebang-command/-/shebang-command-2.0.0.tgz",
          "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
          "dev": true,
          "requires": {
            "shebang-regex": "^3.0.0"
          }
        },
        "shebang-regex": {
          "version": "3.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/shebang-regex/-/shebang-regex-3.0.0.tgz",
          "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
          "dev": true
        },
        "which": {
          "version": "2.0.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/which/-/which-2.0.2.tgz",
          "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
          "dev": true,
          "requires": {
            "isexe": "^2.0.0"
          }
        }
      }
    },
    "default-require-extensions": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/default-require-extensions/-/default-require-extensions-1.0.0.tgz",
      "integrity": "sha1-836hXT4T/9m0N9M+GnW1+5eHTLg=",
      "dev": true,
      "requires": {
        "strip-bom": "^2.0.0"
      }
    },
    "defaults": {
      "version": "1.0.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/defaults/-/defaults-1.0.3.tgz",
      "integrity": "sha1-xlYFHpgX2f8I7YgUd/P+QBnz730=",
      "dev": true,
      "requires": {
        "clone": "^1.0.2"
      }
    },
    "define-properties": {
      "version": "1.1.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/define-properties/-/define-properties-1.1.3.tgz",
      "integrity": "sha512-3MqfYKj2lLzdMSf8ZIZE/V+Zuy+BgD6f164e8K2w7dgnpKArBDerGYpM46IYYcjnkdPNMjPk9A6VFB8+3SKlXQ==",
      "dev": true,
      "requires": {
        "object-keys": "^1.0.12"
      }
    },
    "define-property": {
      "version": "2.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/define-property/-/define-property-2.0.2.tgz",
      "integrity": "sha512-jwK2UV4cnPpbcG7+VRARKTZPUWowwXA8bzH5NP6ud0oeAxyYPuGZUAC7hMugpCdz4BeSZl2Dl9k66CHJ/46ZYQ==",
      "dev": true,
      "requires": {
        "is-descriptor": "^1.0.2",
        "isobject": "^3.0.1"
      },
      "dependencies": {
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "dev": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "dev": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "dev": true,
          "requires": {
            "is-accessor-descriptor": "^1.0.0",
            "is-data-descriptor": "^1.0.0",
            "kind-of": "^6.0.2"
          }
        }
      }
    },
    "del": {
      "version": "4.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/del/-/del-4.1.1.tgz",
      "integrity": "sha512-QwGuEUouP2kVwQenAsOof5Fv8K9t3D8Ca8NxcXKrIpEHjTXK5J2nXLdP+ALI1cgv8wj7KuwBhTwBkOZSJKM5XQ==",
      "dev": true,
      "requires": {
        "@types/glob": "^7.1.1",
        "globby": "^6.1.0",
        "is-path-cwd": "^2.0.0",
        "is-path-in-cwd": "^2.0.0",
        "p-map": "^2.0.0",
        "pify": "^4.0.1",
        "rimraf": "^2.6.3"
      },
      "dependencies": {
        "globby": {
          "version": "6.1.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/globby/-/globby-6.1.0.tgz",
          "integrity": "sha1-9abXDoOV4hyFj7BInWTfAkJNUGw=",
          "dev": true,
          "requires": {
            "array-union": "^1.0.1",
            "glob": "^7.0.3",
            "object-assign": "^4.0.1",
            "pify": "^2.0.0",
            "pinkie-promise": "^2.0.0"
          },
          "dependencies": {
            "pify": {
              "version": "2.3.0",
              "resolved": "http://maven.paic.com.cn/repository/npm/pify/-/pify-2.3.0.tgz",
              "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw=",
              "dev": true
            }
          }
        }
      }
    },
    "delayed-stream": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/delayed-stream/-/delayed-stream-1.0.0.tgz",
      "integrity": "sha1-3zrhmayt+31ECqrgsp4icrJOxhk=",
      "dev": true
    },
    "depd": {
      "version": "1.1.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/depd/-/depd-1.1.2.tgz",
      "integrity": "sha1-m81S4UwJd2PnSbJ0xDRu0uVgtak=",
      "dev": true
    },
    "des.js": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/des.js/-/des.js-1.0.1.tgz",
      "integrity": "sha512-Q0I4pfFrv2VPd34/vfLrFOoRmlYj3OV50i7fskps1jZWK1kApMWWT9G6RRUeYedLcBDIhnSDaUvJMb3AhUlaEA==",
      "dev": true,
      "requires": {
        "inherits": "^2.0.1",
        "minimalistic-assert": "^1.0.0"
      }
    },
    "destroy": {
      "version": "1.0.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/destroy/-/destroy-1.0.4.tgz",
      "integrity": "sha1-l4hXRCxEdJ5CBmE+N5RiBYJqvYA=",
      "dev": true
    },
    "detect-indent": {
      "version": "4.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/detect-indent/-/detect-indent-4.0.0.tgz",
      "integrity": "sha1-920GQ1LN9Docts5hnE7jqUdd4gg=",
      "dev": true,
      "requires": {
        "repeating": "^2.0.0"
      }
    },
    "detect-newline": {
      "version": "2.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/detect-newline/-/detect-newline-2.1.0.tgz",
      "integrity": "sha1-9B8cEL5LAOh7XxPaaAdZ8sW/0+I=",
      "dev": true
    },
    "detect-node": {
      "version": "2.0.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/detect-node/-/detect-node-2.0.4.tgz",
      "integrity": "sha512-ZIzRpLJrOj7jjP2miAtgqIfmzbxa4ZOr5jJc601zklsfEx9oTzmmj2nVpIPRpNlRTIh8lc1kyViIY7BWSGNmKw==",
      "dev": true
    },
    "diff": {
      "version": "4.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/diff/-/diff-4.0.1.tgz",
      "integrity": "sha512-s2+XdvhPCOF01LRQBC8hf4vhbVmI2CGS5aZnxLJlT5FtdhPCDFq80q++zK2KlrVorVDdL5BOGZ/VfLrVtYNF+Q==",
      "dev": true
    },
    "diffie-hellman": {
      "version": "5.0.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/diffie-hellman/-/diffie-hellman-5.0.3.tgz",
      "integrity": "sha512-kqag/Nl+f3GwyK25fhUMYj81BUOrZ9IuJsjIcDE5icNM9FJHAVm3VcUDxdLPoQtTuUylWm6ZIknYJwwaPxsUzg==",
      "dev": true,
      "requires": {
        "bn.js": "^4.1.0",
        "miller-rabin": "^4.0.0",
        "randombytes": "^2.0.0"
      }
    },
    "dir-glob": {
      "version": "2.2.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/dir-glob/-/dir-glob-2.2.2.tgz",
      "integrity": "sha512-f9LBi5QWzIW3I6e//uxZoLBlUt9kcp66qo0sSCxL6YZKc75R1c4MFCoe/LaZiBGmgujvQdxc5Bn3QhfyvK5Hsw==",
      "dev": true,
      "requires": {
        "path-type": "^3.0.0"
      }
    },
    "dns-equal": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/dns-equal/-/dns-equal-1.0.0.tgz",
      "integrity": "sha1-s55/HabrCnW6nBcySzR1PEfgZU0=",
      "dev": true
    },
    "dns-packet": {
      "version": "1.3.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/dns-packet/-/dns-packet-1.3.1.tgz",
      "integrity": "sha512-0UxfQkMhYAUaZI+xrNZOz/as5KgDU0M/fQ9b6SpkyLbk3GEswDi6PADJVaYJradtRVsRIlF1zLyOodbcTCDzUg==",
      "dev": true,
      "requires": {
        "ip": "^1.1.0",
        "safe-buffer": "^5.0.1"
      }
    },
    "dns-txt": {
      "version": "2.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/dns-txt/-/dns-txt-2.0.2.tgz",
      "integrity": "sha1-uR2Ab10nGI5Ks+fRB9iBocxGQrY=",
      "dev": true,
      "requires": {
        "buffer-indexof": "^1.0.0"
      }
    },
    "doctrine": {
      "version": "2.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/doctrine/-/doctrine-2.1.0.tgz",
      "integrity": "sha512-35mSku4ZXK0vfCuHEDAwt55dg2jNajHZ1odvF+8SSr82EsZY4QmXfuWso8oEd8zRhVObSN18aM0CjSdoBX7zIw==",
      "dev": true,
      "optional": true,
      "requires": {
        "esutils": "^2.0.2"
      }
    },
    "dom-converter": {
      "version": "0.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/dom-converter/-/dom-converter-0.2.0.tgz",
      "integrity": "sha512-gd3ypIPfOMr9h5jIKq8E3sHOTCjeirnl0WK5ZdS1AW0Odt0b1PaWaHdJ4Qk4klv+YB9aJBS7mESXjFoDQPu6DA==",
      "dev": true,
      "requires": {
        "utila": "~0.4"
      }
    },
    "dom-event-types": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/dom-event-types/-/dom-event-types-1.0.0.tgz",
      "integrity": "sha512-2G2Vwi2zXTHBGqXHsJ4+ak/iP0N8Ar+G8a7LiD2oup5o4sQWytwqqrZu/O6hIMV0KMID2PL69OhpshLO0n7UJQ==",
      "dev": true
    },
    "dom-serializer": {
      "version": "0.2.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/dom-serializer/-/dom-serializer-0.2.2.tgz",
      "integrity": "sha512-2/xPb3ORsQ42nHYiSunXkDjPLBaEj/xTwUO4B7XCZQTRk7EBtTOPaygh10YAAh2OI1Qrp6NWfpAhzswj0ydt9g==",
      "dev": true,
      "requires": {
        "domelementtype": "^2.0.1",
        "entities": "^2.0.0"
      },
      "dependencies": {
        "domelementtype": {
          "version": "2.0.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/domelementtype/-/domelementtype-2.0.1.tgz",
          "integrity": "sha512-5HOHUDsYZWV8FGWN0Njbr/Rn7f/eWSQi1v7+HsUVwXgn8nWWlL64zKDkS0n8ZmQ3mlWOMuXOnR+7Nx/5tMO5AQ==",
          "dev": true
        }
      }
    },
    "domain-browser": {
      "version": "1.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/domain-browser/-/domain-browser-1.2.0.tgz",
      "integrity": "sha512-jnjyiM6eRyZl2H+W8Q/zLMA481hzi0eszAaBUzIVnmYVDBbnLxVNnfu1HgEBvCbL+71FrxMl3E6lpKH7Ge3OXA==",
      "dev": true
    },
    "domelementtype": {
      "version": "1.3.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/domelementtype/-/domelementtype-1.3.1.tgz",
      "integrity": "sha512-BSKB+TSpMpFI/HOxCNr1O8aMOTZ8hT3pM3GQ0w/mWRmkhEDSFJkkyzz4XQsBV44BChwGkrDfMyjVD0eA2aFV3w==",
      "dev": true
    },
    "domexception": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/domexception/-/domexception-1.0.1.tgz",
      "integrity": "sha512-raigMkn7CJNNo6Ihro1fzG7wr3fHuYVytzquZKX5n0yizGsTcYgzdIUwj1X9pK0VvjeihV+XiclP+DjwbsSKug==",
      "dev": true,
      "requires": {
        "webidl-conversions": "^4.0.2"
      }
    },
    "domhandler": {
      "version": "2.4.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/domhandler/-/domhandler-2.4.2.tgz",
      "integrity": "sha512-JiK04h0Ht5u/80fdLMCEmV4zkNh2BcoMFBmZ/91WtYZ8qVXSKjiw7fXMgFPnHcSZgOo3XdinHvmnDUeMf5R4wA==",
      "dev": true,
      "requires": {
        "domelementtype": "1"
      }
    },
    "domutils": {
      "version": "1.7.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/domutils/-/domutils-1.7.0.tgz",
      "integrity": "sha512-Lgd2XcJ/NjEw+7tFvfKxOzCYKZsdct5lczQ2ZaQY8Djz7pfAD3Gbp8ySJWtreII/vDlMVmxwa6pHmdxIYgttDg==",
      "dev": true,
      "requires": {
        "dom-serializer": "0",
        "domelementtype": "1"
      }
    },
    "dot-prop": {
      "version": "4.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/dot-prop/-/dot-prop-4.2.0.tgz",
      "integrity": "sha512-tUMXrxlExSW6U2EXiiKGSBVdYgtV8qlHL+C10TsW4PURY/ic+eaysnSkwB4kA/mBlCyy/IKDJ+Lc3wbWeaXtuQ==",
      "dev": true,
      "requires": {
        "is-obj": "^1.0.0"
      }
    },
    "dotenv": {
      "version": "7.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/dotenv/-/dotenv-7.0.0.tgz",
      "integrity": "sha512-M3NhsLbV1i6HuGzBUH8vXrtxOk+tWmzWKDMbAVSUp3Zsjm7ywFeuwrUXhmhQyRK1q5B5GGy7hcXPbj3bnfZg2g==",
      "dev": true
    },
    "dotenv-expand": {
      "version": "5.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/dotenv-expand/-/dotenv-expand-5.1.0.tgz",
      "integrity": "sha512-YXQl1DSa4/PQyRfgrv6aoNjhasp/p4qs9FjJ4q4cQk+8m4r6k4ZSiEyytKG8f8W9gi8WsQtIObNmKd+tMzNTmA==",
      "dev": true
    },
    "duplexer": {
      "version": "0.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/duplexer/-/duplexer-0.1.1.tgz",
      "integrity": "sha1-rOb/gIwc5mtX0ev5eXessCM0z8E=",
      "dev": true
    },
    "duplexify": {
      "version": "3.7.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/duplexify/-/duplexify-3.7.1.tgz",
      "integrity": "sha512-07z8uv2wMyS51kKhD1KsdXJg5WQ6t93RneqRxUHnskXVtlYYkLqM0gqStQZ3pj073g687jPCHrqNfCzawLYh5g==",
      "dev": true,
      "requires": {
        "end-of-stream": "^1.0.0",
        "inherits": "^2.0.1",
        "readable-stream": "^2.0.0",
        "stream-shift": "^1.0.0"
      }
    },
    "easy-stack": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/easy-stack/-/easy-stack-1.0.0.tgz",
      "integrity": "sha1-EskbMIWjfwuqM26UhurEv5Tj54g=",
      "dev": true
    },
    "ecc-jsbn": {
      "version": "0.1.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/ecc-jsbn/-/ecc-jsbn-0.1.2.tgz",
      "integrity": "sha1-OoOpBOVDUyh4dMVkt1SThoSamMk=",
      "dev": true,
      "requires": {
        "jsbn": "~0.1.0",
        "safer-buffer": "^2.1.0"
      }
    },
    "editorconfig": {
      "version": "0.15.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/editorconfig/-/editorconfig-0.15.3.tgz",
      "integrity": "sha512-M9wIMFx96vq0R4F+gRpY3o2exzb8hEj/n9S8unZtHSvYjibBp/iMufSzvmOcV/laG0ZtuTVGtiJggPOSW2r93g==",
      "dev": true,
      "requires": {
        "commander": "^2.19.0",
        "lru-cache": "^4.1.5",
        "semver": "^5.6.0",
        "sigmund": "^1.0.1"
      },
      "dependencies": {
        "lru-cache": {
          "version": "4.1.5",
          "resolved": "http://maven.paic.com.cn/repository/npm/lru-cache/-/lru-cache-4.1.5.tgz",
          "integrity": "sha512-sWZlbEP2OsHNkXrMl5GYk/jKk70MBng6UU4YI/qGDYbgf6YbP4EvmqISbXCoJiRKs+1bSpFHVgQxvJ17F2li5g==",
          "dev": true,
          "requires": {
            "pseudomap": "^1.0.2",
            "yallist": "^2.1.2"
          }
        },
        "yallist": {
          "version": "2.1.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/yallist/-/yallist-2.1.2.tgz",
          "integrity": "sha1-HBH5IY8HYImkfdUS+TxmmaaoHVI=",
          "dev": true
        }
      }
    },
    "ee-first": {
      "version": "1.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/ee-first/-/ee-first-1.1.1.tgz",
      "integrity": "sha1-WQxhFWsK4vTwJVcyoViyZrxWsh0=",
      "dev": true
    },
    "ejs": {
      "version": "2.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/ejs/-/ejs-2.7.4.tgz",
      "integrity": "sha512-7vmuyh5+kuUyJKePhQfRQBhXV5Ce+RnaeeQArKu1EAMpL3WbgMt5WG6uQZpEVvYSSsxMXRKOewtDk9RaTKXRlA==",
      "dev": true
    },
    "electron-to-chromium": {
      "version": "1.3.322",
      "resolved": "http://maven.paic.com.cn/repository/npm/electron-to-chromium/-/electron-to-chromium-1.3.322.tgz",
      "integrity": "sha512-Tc8JQEfGQ1MzfSzI/bTlSr7btJv/FFO7Yh6tanqVmIWOuNCu6/D1MilIEgLtmWqIrsv+o4IjpLAhgMBr/ncNAA==",
      "dev": true
    },
    "element-resize-detector": {
      "version": "1.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/element-resize-detector/-/element-resize-detector-1.2.0.tgz",
      "integrity": "sha512-UmhNB8sIJVZeg56gEjgmMd6p37sCg8j8trVW0LZM7Wzv+kxQ5CnRHcgRKBTB/kFUSn3e7UP59kl2V2U8Du1hmg==",
      "requires": {
        "batch-processor": "1.0.0"
      }
    },
    "element-ui": {
      "version": "2.13.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/element-ui/-/element-ui-2.13.0.tgz",
      "integrity": "sha512-KYsHWsBXYbLELS8cdfvgJTOMSUby3UEjvsPV1V1VmgJ/DdkOAS4z3MiOrPxrT9w2Cc5lZ4eVSQiGhYFR5NVChw==",
      "requires": {
        "async-validator": "~1.8.1",
        "babel-helper-vue-jsx-merge-props": "^2.0.0",
        "deepmerge": "^1.2.0",
        "normalize-wheel": "^1.0.1",
        "resize-observer-polyfill": "^1.5.0",
        "throttle-debounce": "^1.0.1"
      },
      "dependencies": {
        "async-validator": {
          "version": "1.8.5",
          "resolved": "http://maven.paic.com.cn/repository/npm/async-validator/-/async-validator-1.8.5.tgz",
          "integrity": "sha512-tXBM+1m056MAX0E8TL2iCjg8WvSyXu0Zc8LNtYqrVeyoL3+esHRZ4SieE9fKQyyU09uONjnMEjrNBMqT0mbvmA==",
          "requires": {
            "babel-runtime": "6.x"
          }
        }
      }
    },
    "elliptic": {
      "version": "6.5.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/elliptic/-/elliptic-6.5.2.tgz",
      "integrity": "sha512-f4x70okzZbIQl/NSRLkI/+tteV/9WqL98zx+SQ69KbXxmVrmjwsNUPn/gYJJ0sHvEak24cZgHIPegRePAtA/xw==",
      "dev": true,
      "requires": {
        "bn.js": "^4.4.0",
        "brorand": "^1.0.1",
        "hash.js": "^1.0.0",
        "hmac-drbg": "^1.0.0",
        "inherits": "^2.0.1",
        "minimalistic-assert": "^1.0.0",
        "minimalistic-crypto-utils": "^1.0.0"
      }
    },
    "emoji-regex": {
      "version": "8.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "dev": true
    },
    "emojis-list": {
      "version": "2.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/emojis-list/-/emojis-list-2.1.0.tgz",
      "integrity": "sha1-TapNnbAPmBmIDHn6RXrlsJof04k=",
      "dev": true
    },
    "encodeurl": {
      "version": "1.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/encodeurl/-/encodeurl-1.0.2.tgz",
      "integrity": "sha1-rT/0yG7C0CkyL1oCw6mmBslbP1k=",
      "dev": true
    },
    "end-of-stream": {
      "version": "1.4.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/end-of-stream/-/end-of-stream-1.4.4.tgz",
      "integrity": "sha512-+uw1inIHVPQoaVuHzRyXd21icM+cnt4CzD5rW+NC1wjOUSTOs+Te7FOv7AhN7vS9x/oIyhLP5PR1H+phQAHu5Q==",
      "dev": true,
      "requires": {
        "once": "^1.4.0"
      }
    },
    "enhanced-resolve": {
      "version": "4.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/enhanced-resolve/-/enhanced-resolve-4.1.1.tgz",
      "integrity": "sha512-98p2zE+rL7/g/DzMHMTF4zZlCgeVdJ7yr6xzEpJRYwFYrGi9ANdn5DnJURg6RpBkyk60XYDnWIv51VfIhfNGuA==",
      "dev": true,
      "requires": {
        "graceful-fs": "^4.1.2",
        "memory-fs": "^0.5.0",
        "tapable": "^1.0.0"
      },
      "dependencies": {
        "memory-fs": {
          "version": "0.5.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/memory-fs/-/memory-fs-0.5.0.tgz",
          "integrity": "sha512-jA0rdU5KoQMC0e6ppoNRtpp6vjFq6+NY7r8hywnC7V+1Xj/MtHwGIbB1QaK/dunyjWteJzmkpd7ooeWg10T7GA==",
          "dev": true,
          "requires": {
            "errno": "^0.1.3",
            "readable-stream": "^2.0.1"
          }
        }
      }
    },
    "entities": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/entities/-/entities-2.0.0.tgz",
      "integrity": "sha512-D9f7V0JSRwIxlRI2mjMqufDrRDnx8p+eEOz7aUM9SuvF8gsBzra0/6tbjl1m8eQHrZlYj6PxqE00hZ1SAIKPLw==",
      "dev": true
    },
    "errno": {
      "version": "0.1.7",
      "resolved": "http://maven.paic.com.cn/repository/npm/errno/-/errno-0.1.7.tgz",
      "integrity": "sha512-MfrRBDWzIWifgq6tJj60gkAwtLNb6sQPlcFrSOflcP1aFmmruKQ2wRnze/8V6kgyz7H3FF8Npzv78mZ7XLLflg==",
      "dev": true,
      "requires": {
        "prr": "~1.0.1"
      }
    },
    "error-ex": {
      "version": "1.3.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/error-ex/-/error-ex-1.3.2.tgz",
      "integrity": "sha512-7dFHNmqeFSEt2ZBsCriorKnn3Z2pj+fd9kmI6QoWw4//DL+icEBfc0U7qJCisqrTsKTjw4fNFy2pW9OqStD84g==",
      "dev": true,
      "requires": {
        "is-arrayish": "^0.2.1"
      }
    },
    "error-stack-parser": {
      "version": "2.0.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/error-stack-parser/-/error-stack-parser-2.0.4.tgz",
      "integrity": "sha512-fZ0KkoxSjLFmhW5lHbUT3tLwy3nX1qEzMYo8koY1vrsAco53CMT1djnBSeC/wUjTEZRhZl9iRw7PaMaxfJ4wzQ==",
      "dev": true,
      "requires": {
        "stackframe": "^1.1.0"
      }
    },
    "es-abstract": {
      "version": "1.17.0-next.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/es-abstract/-/es-abstract-1.17.0-next.1.tgz",
      "integrity": "sha512-7MmGr03N7Rnuid6+wyhD9sHNE2n4tFSwExnU2lQl3lIo2ShXWGePY80zYaoMOmILWv57H0amMjZGHNzzGG70Rw==",
      "dev": true,
      "requires": {
        "es-to-primitive": "^1.2.1",
        "function-bind": "^1.1.1",
        "has": "^1.0.3",
        "has-symbols": "^1.0.1",
        "is-callable": "^1.1.4",
        "is-regex": "^1.0.4",
        "object-inspect": "^1.7.0",
        "object-keys": "^1.1.1",
        "object.assign": "^4.1.0",
        "string.prototype.trimleft": "^2.1.0",
        "string.prototype.trimright": "^2.1.0"
      }
    },
    "es-to-primitive": {
      "version": "1.2.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/es-to-primitive/-/es-to-primitive-1.2.1.tgz",
      "integrity": "sha512-QCOllgZJtaUo9miYBcLChTUaHNjJF3PYs1VidD7AwiEj1kYxKeQTctLAezAOH5ZKRH0g2IgPn6KwB4IT8iRpvA==",
      "dev": true,
      "requires": {
        "is-callable": "^1.1.4",
        "is-date-object": "^1.0.1",
        "is-symbol": "^1.0.2"
      }
    },
    "escape-html": {
      "version": "1.0.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/escape-html/-/escape-html-1.0.3.tgz",
      "integrity": "sha1-Aljq5NPQwJdN4cFpGI7wBR0dGYg=",
      "dev": true
    },
    "escape-string-regexp": {
      "version": "1.0.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
      "integrity": "sha1-G2HAViGQqN/2rjuyzwIAyhMLhtQ=",
      "dev": true
    },
    "escodegen": {
      "version": "1.12.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/escodegen/-/escodegen-1.12.0.tgz",
      "integrity": "sha512-TuA+EhsanGcme5T3R0L80u4t8CpbXQjegRmf7+FPTJrtCTErXFeelblRgHQa1FofEzqYYJmJ/OqjTwREp9qgmg==",
      "dev": true,
      "requires": {
        "esprima": "^3.1.3",
        "estraverse": "^4.2.0",
        "esutils": "^2.0.2",
        "optionator": "^0.8.1",
        "source-map": "~0.6.1"
      },
      "dependencies": {
        "esprima": {
          "version": "3.1.3",
          "resolved": "http://maven.paic.com.cn/repository/npm/esprima/-/esprima-3.1.3.tgz",
          "integrity": "sha1-/cpRzuYTOJXjyI1TXOSdv/YqRjM=",
          "dev": true
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true,
          "optional": true
        }
      }
    },
    "eslint": {
      "version": "5.16.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/eslint/-/eslint-5.16.0.tgz",
      "integrity": "sha512-S3Rz11i7c8AA5JPv7xAH+dOyq/Cu/VXHiHXBPOU1k/JAM5dXqQPt3qcrhpHSorXmrpu2g0gkIBVXAqCpzfoZIg==",
      "dev": true,
      "requires": {
        "@babel/code-frame": "^7.0.0",
        "ajv": "^6.9.1",
        "chalk": "^2.1.0",
        "cross-spawn": "^6.0.5",
        "debug": "^4.0.1",
        "doctrine": "^3.0.0",
        "eslint-scope": "^4.0.3",
        "eslint-utils": "^1.3.1",
        "eslint-visitor-keys": "^1.0.0",
        "espree": "^5.0.1",
        "esquery": "^1.0.1",
        "esutils": "^2.0.2",
        "file-entry-cache": "^5.0.1",
        "functional-red-black-tree": "^1.0.1",
        "glob": "^7.1.2",
        "globals": "^11.7.0",
        "ignore": "^4.0.6",
        "import-fresh": "^3.0.0",
        "imurmurhash": "^0.1.4",
        "inquirer": "^6.2.2",
        "js-yaml": "^3.13.0",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "levn": "^0.3.0",
        "lodash": "^4.17.11",
        "minimatch": "^3.0.4",
        "mkdirp": "^0.5.1",
        "natural-compare": "^1.4.0",
        "optionator": "^0.8.2",
        "path-is-inside": "^1.0.2",
        "progress": "^2.0.0",
        "regexpp": "^2.0.1",
        "semver": "^5.5.1",
        "strip-ansi": "^4.0.0",
        "strip-json-comments": "^2.0.1",
        "table": "^5.2.3",
        "text-table": "^0.2.0"
      },
      "dependencies": {
        "acorn-jsx": {
          "version": "5.1.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/acorn-jsx/-/acorn-jsx-5.1.0.tgz",
          "integrity": "sha512-tMUqwBWfLFbJbizRmEcWSLw6HnFzfdJs2sOJEOwwtVPMoH/0Ay+E703oZz78VSXZiiDcZrQ5XKjPIUQixhmgVw==",
          "dev": true
        },
        "chardet": {
          "version": "0.7.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/chardet/-/chardet-0.7.0.tgz",
          "integrity": "sha512-mT8iDcrh03qDGRRmoA2hmBJnxpllMR+0/0qlzjqZES6NdiWDcZkCNAk4rPFZ9Q85r27unkiNNg8ZOiwZXBHwcA==",
          "dev": true
        },
        "doctrine": {
          "version": "3.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/doctrine/-/doctrine-3.0.0.tgz",
          "integrity": "sha512-yS+Q5i3hBf7GBkd4KG8a7eBNNWNGLTaEwwYWUijIYM7zrlYDM0BFXHjjPWlWZ1Rg7UaddZeIDmi9jF3HmqiQ2w==",
          "dev": true,
          "requires": {
            "esutils": "^2.0.2"
          }
        },
        "emoji-regex": {
          "version": "7.0.3",
          "resolved": "http://maven.paic.com.cn/repository/npm/emoji-regex/-/emoji-regex-7.0.3.tgz",
          "integrity": "sha512-CwBLREIQ7LvYFB0WyRvwhq5N5qPhc6PMjD6bYggFlI5YyDgl+0vxq5VHbMOFqLg7hfWzmu8T5Z1QofhmTIhItA==",
          "dev": true
        },
        "espree": {
          "version": "5.0.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/espree/-/espree-5.0.1.tgz",
          "integrity": "sha512-qWAZcWh4XE/RwzLJejfcofscgMc9CamR6Tn1+XRXNzrvUSSbiAjGOI/fggztjIi7y9VLPqnICMIPiGyr8JaZ0A==",
          "dev": true,
          "requires": {
            "acorn": "^6.0.7",
            "acorn-jsx": "^5.0.0",
            "eslint-visitor-keys": "^1.0.0"
          }
        },
        "external-editor": {
          "version": "3.1.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/external-editor/-/external-editor-3.1.0.tgz",
          "integrity": "sha512-hMQ4CX1p1izmuLYyZqLMO/qGNw10wSv9QDCPfzXfyFrOaCSSoRfqE1Kf1s5an66J5JZC62NewG+mK49jOCtQew==",
          "dev": true,
          "requires": {
            "chardet": "^0.7.0",
            "iconv-lite": "^0.4.24",
            "tmp": "^0.0.33"
          }
        },
        "file-entry-cache": {
          "version": "5.0.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/file-entry-cache/-/file-entry-cache-5.0.1.tgz",
          "integrity": "sha512-bCg29ictuBaKUwwArK4ouCaqDgLZcysCFLmM/Yn/FDoqndh/9vNuQfXRDvTuXKLxfD/JtZQGKFT8MGcJBK644g==",
          "dev": true,
          "requires": {
            "flat-cache": "^2.0.1"
          }
        },
        "flat-cache": {
          "version": "2.0.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/flat-cache/-/flat-cache-2.0.1.tgz",
          "integrity": "sha512-LoQe6yDuUMDzQAEH8sgmh4Md6oZnc/7PjtwjNFSzveXqSHt6ka9fPBuso7IGf9Rz4uqnSnWiFH2B/zj24a5ReA==",
          "dev": true,
          "requires": {
            "flatted": "^2.0.0",
            "rimraf": "2.6.3",
            "write": "1.0.3"
          }
        },
        "ignore": {
          "version": "4.0.6",
          "resolved": "http://maven.paic.com.cn/repository/npm/ignore/-/ignore-4.0.6.tgz",
          "integrity": "sha512-cyFDKrqc/YdcWFniJhzI42+AzS+gNwmUzOSFcRCQYwySuBBBy/KjuxWLZ/FHEH6Moq1NizMOBWyTcv8O4OZIMg==",
          "dev": true
        },
        "import-fresh": {
          "version": "3.2.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/import-fresh/-/import-fresh-3.2.1.tgz",
          "integrity": "sha512-6e1q1cnWP2RXD9/keSkxHScg508CdXqXWgWBaETNhyuBFz+kUZlKboh+ISK+bU++DmbHimVBrOz/zzPe0sZ3sQ==",
          "dev": true,
          "requires": {
            "parent-module": "^1.0.0",
            "resolve-from": "^4.0.0"
          }
        },
        "inquirer": {
          "version": "6.5.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/inquirer/-/inquirer-6.5.2.tgz",
          "integrity": "sha512-cntlB5ghuB0iuO65Ovoi8ogLHiWGs/5yNrtUcKjFhSSiVeAIVpD7koaSU9RM8mpXw5YDi9RdYXGQMaOURB7ycQ==",
          "dev": true,
          "requires": {
            "ansi-escapes": "^3.2.0",
            "chalk": "^2.4.2",
            "cli-cursor": "^2.1.0",
            "cli-width": "^2.0.0",
            "external-editor": "^3.0.3",
            "figures": "^2.0.0",
            "lodash": "^4.17.12",
            "mute-stream": "0.0.7",
            "run-async": "^2.2.0",
            "rxjs": "^6.4.0",
            "string-width": "^2.1.0",
            "strip-ansi": "^5.1.0",
            "through": "^2.3.6"
          },
          "dependencies": {
            "strip-ansi": {
              "version": "5.2.0",
              "resolved": "http://maven.paic.com.cn/repository/npm/strip-ansi/-/strip-ansi-5.2.0.tgz",
              "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
              "dev": true,
              "requires": {
                "ansi-regex": "^4.1.0"
              }
            }
          }
        },
        "regexpp": {
          "version": "2.0.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/regexpp/-/regexpp-2.0.1.tgz",
          "integrity": "sha512-lv0M6+TkDVniA3aD1Eg0DVpfU/booSu7Eev3TDO/mZKHBfVjgCGTV4t4buppESEYDtkArYFOxTJWv6S5C+iaNw==",
          "dev": true
        },
        "resolve-from": {
          "version": "4.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/resolve-from/-/resolve-from-4.0.0.tgz",
          "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
          "dev": true
        },
        "rimraf": {
          "version": "2.6.3",
          "resolved": "http://maven.paic.com.cn/repository/npm/rimraf/-/rimraf-2.6.3.tgz",
          "integrity": "sha512-mwqeW5XsA2qAejG46gYdENaxXjx9onRNCfn7L0duuP4hCuTIi/QO7PDK07KJfp1d+izWPrzEJDcSqBa0OZQriA==",
          "dev": true,
          "requires": {
            "glob": "^7.1.3"
          }
        },
        "slice-ansi": {
          "version": "2.1.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/slice-ansi/-/slice-ansi-2.1.0.tgz",
          "integrity": "sha512-Qu+VC3EwYLldKa1fCxuuvULvSJOKEgk9pi8dZeCVK7TqBfUNTH4sFkk4joj8afVSfAYgJoSOetjx9QWOJ5mYoQ==",
          "dev": true,
          "requires": {
            "ansi-styles": "^3.2.0",
            "astral-regex": "^1.0.0",
            "is-fullwidth-code-point": "^2.0.0"
          }
        },
        "strip-ansi": {
          "version": "4.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/strip-ansi/-/strip-ansi-4.0.0.tgz",
          "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
          "dev": true,
          "requires": {
            "ansi-regex": "^3.0.0"
          },
          "dependencies": {
            "ansi-regex": {
              "version": "3.0.0",
              "resolved": "http://maven.paic.com.cn/repository/npm/ansi-regex/-/ansi-regex-3.0.0.tgz",
              "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
              "dev": true
            }
          }
        },
        "table": {
          "version": "5.4.6",
          "resolved": "http://maven.paic.com.cn/repository/npm/table/-/table-5.4.6.tgz",
          "integrity": "sha512-wmEc8m4fjnob4gt5riFRtTu/6+4rSe12TpAELNSqHMfF3IqnA+CH37USM6/YR3qRZv7e56kAEAtd6nKZaxe0Ug==",
          "dev": true,
          "requires": {
            "ajv": "^6.10.2",
            "lodash": "^4.17.14",
            "slice-ansi": "^2.1.0",
            "string-width": "^3.0.0"
          },
          "dependencies": {
            "string-width": {
              "version": "3.1.0",
              "resolved": "http://maven.paic.com.cn/repository/npm/string-width/-/string-width-3.1.0.tgz",
              "integrity": "sha512-vafcv6KjVZKSgz06oM/H6GDBrAtz8vdhQakGjFIvNrHA6y3HCF1CInLy+QLq8dTJPQ1b+KDUqDFctkdRW44e1w==",
              "dev": true,
              "requires": {
                "emoji-regex": "^7.0.1",
                "is-fullwidth-code-point": "^2.0.0",
                "strip-ansi": "^5.1.0"
              }
            },
            "strip-ansi": {
              "version": "5.2.0",
              "resolved": "http://maven.paic.com.cn/repository/npm/strip-ansi/-/strip-ansi-5.2.0.tgz",
              "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
              "dev": true,
              "requires": {
                "ansi-regex": "^4.1.0"
              }
            }
          }
        },
        "write": {
          "version": "1.0.3",
          "resolved": "http://maven.paic.com.cn/repository/npm/write/-/write-1.0.3.tgz",
          "integrity": "sha512-/lg70HAjtkUgWPVZhZcm+T4hkL8Zbtp1nFNOn3lRrxnlv50SRBv7cR7RqR+GMsd3hUXy9hWBo4CHTbFTcOYwig==",
          "dev": true,
          "requires": {
            "mkdirp": "^0.5.1"
          }
        }
      }
    },
    "eslint-config-airbnb-base": {
      "version": "13.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/eslint-config-airbnb-base/-/eslint-config-airbnb-base-13.2.0.tgz",
      "integrity": "sha512-1mg/7eoB4AUeB0X1c/ho4vb2gYkNH8Trr/EgCT/aGmKhhG+F6vF5s8+iRBlWAzFIAphxIdp3YfEKgEl0f9Xg+w==",
      "dev": true,
      "requires": {
        "confusing-browser-globals": "^1.0.5",
        "object.assign": "^4.1.0",
        "object.entries": "^1.1.0"
      }
    },
    "eslint-config-standard": {
      "version": "14.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/eslint-config-standard/-/eslint-config-standard-14.1.0.tgz",
      "integrity": "sha512-EF6XkrrGVbvv8hL/kYa/m6vnvmUT+K82pJJc4JJVMM6+Qgqh0pnwprSxdduDLB9p/7bIxD+YV5O0wfb8lmcPbA=="
    },
    "eslint-import-resolver-node": {
      "version": "0.3.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/eslint-import-resolver-node/-/eslint-import-resolver-node-0.3.2.tgz",
      "integrity": "sha512-sfmTqJfPSizWu4aymbPr4Iidp5yKm8yDkHp+Ir3YiTHiiDfxh69mOUsmiqW6RZ9zRXFaF64GtYmN7e+8GHBv6Q==",
      "dev": true,
      "requires": {
        "debug": "^2.6.9",
        "resolve": "^1.5.0"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "http://maven.paic.com.cn/repository/npm/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "requires": {
            "ms": "2.0.0"
          }
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
          "dev": true
        }
      }
    },
    "eslint-import-resolver-webpack": {
      "version": "0.11.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/eslint-import-resolver-webpack/-/eslint-import-resolver-webpack-0.11.1.tgz",
      "integrity": "sha512-eK3zR7xVQR/MaoBWwGuD+CULYVuqe5QFlDukman71aI6IboCGzggDUohHNfu1ZeBnbHcUHJc0ywWoXUBNB6qdg==",
      "dev": true,
      "requires": {
        "array-find": "^1.0.0",
        "debug": "^2.6.8",
        "enhanced-resolve": "~0.9.0",
        "find-root": "^1.1.0",
        "has": "^1.0.1",
        "interpret": "^1.0.0",
        "lodash": "^4.17.4",
        "node-libs-browser": "^1.0.0 || ^2.0.0",
        "resolve": "^1.10.0",
        "semver": "^5.3.0"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "http://maven.paic.com.cn/repository/npm/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "requires": {
            "ms": "2.0.0"
          }
        },
        "enhanced-resolve": {
          "version": "0.9.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/enhanced-resolve/-/enhanced-resolve-0.9.1.tgz",
          "integrity": "sha1-TW5omzcl+GCQknzMhs2fFjW4ni4=",
          "dev": true,
          "requires": {
            "graceful-fs": "^4.1.2",
            "memory-fs": "^0.2.0",
            "tapable": "^0.1.8"
          }
        },
        "memory-fs": {
          "version": "0.2.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/memory-fs/-/memory-fs-0.2.0.tgz",
          "integrity": "sha1-8rslNovBIeORwlIN6Slpyu4KApA=",
          "dev": true
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
          "dev": true
        },
        "tapable": {
          "version": "0.1.10",
          "resolved": "http://maven.paic.com.cn/repository/npm/tapable/-/tapable-0.1.10.tgz",
          "integrity": "sha1-KcNXB8K3DlDQdIK10gLo7URtr9Q=",
          "dev": true
        }
      }
    },
    "eslint-loader": {
      "version": "2.2.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/eslint-loader/-/eslint-loader-2.2.1.tgz",
      "integrity": "sha512-RLgV9hoCVsMLvOxCuNjdqOrUqIj9oJg8hF44vzJaYqsAHuY9G2YAeN3joQ9nxP0p5Th9iFSIpKo+SD8KISxXRg==",
      "dev": true,
      "requires": {
        "loader-fs-cache": "^1.0.0",
        "loader-utils": "^1.0.2",
        "object-assign": "^4.0.1",
        "object-hash": "^1.1.4",
        "rimraf": "^2.6.1"
      }
    },
    "eslint-module-utils": {
      "version": "2.5.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/eslint-module-utils/-/eslint-module-utils-2.5.0.tgz",
      "integrity": "sha512-kCo8pZaNz2dsAW7nCUjuVoI11EBXXpIzfNxmaoLhXoRDOnqXLC4iSGVRdZPhOitfbdEfMEfKOiENaK6wDPZEGw==",
      "dev": true,
      "requires": {
        "debug": "^2.6.9",
        "pkg-dir": "^2.0.0"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "http://maven.paic.com.cn/repository/npm/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "requires": {
            "ms": "2.0.0"
          }
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
          "dev": true
        },
        "pkg-dir": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/pkg-dir/-/pkg-dir-2.0.0.tgz",
          "integrity": "sha1-9tXREJ4Z1j7fQo4L1X4Sd3YVM0s=",
          "dev": true,
          "requires": {
            "find-up": "^2.1.0"
          }
        }
      }
    },
    "eslint-plugin-es": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/eslint-plugin-es/-/eslint-plugin-es-2.0.0.tgz",
      "integrity": "sha512-f6fceVtg27BR02EYnBhgWLFQfK6bN4Ll0nQFrBHOlCsAyxeZkn0NHns5O0YZOPrV1B3ramd6cgFwaoFLcSkwEQ==",
      "requires": {
        "eslint-utils": "^1.4.2",
        "regexpp": "^3.0.0"
      },
      "dependencies": {
        "regexpp": {
          "version": "3.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/regexpp/-/regexpp-3.0.0.tgz",
          "integrity": "sha512-Z+hNr7RAVWxznLPuA7DIh8UNX1j9CDrUQxskw9IrBE1Dxue2lyXT+shqEIeLUjrokxIP8CMy1WkjgG3rTsd5/g=="
        }
      }
    },
    "eslint-plugin-import": {
      "version": "2.19.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/eslint-plugin-import/-/eslint-plugin-import-2.19.1.tgz",
      "integrity": "sha512-x68131aKoCZlCae7rDXKSAQmbT5DQuManyXo2sK6fJJ0aK5CWAkv6A6HJZGgqC8IhjQxYPgo6/IY4Oz8AFsbBw==",
      "dev": true,
      "requires": {
        "array-includes": "^3.0.3",
        "array.prototype.flat": "^1.2.1",
        "contains-path": "^0.1.0",
        "debug": "^2.6.9",
        "doctrine": "1.5.0",
        "eslint-import-resolver-node": "^0.3.2",
        "eslint-module-utils": "^2.4.1",
        "has": "^1.0.3",
        "minimatch": "^3.0.4",
        "object.values": "^1.1.0",
        "read-pkg-up": "^2.0.0",
        "resolve": "^1.12.0"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "http://maven.paic.com.cn/repository/npm/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "requires": {
            "ms": "2.0.0"
          }
        },
        "doctrine": {
          "version": "1.5.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/doctrine/-/doctrine-1.5.0.tgz",
          "integrity": "sha1-N53Ocw9hZvds76TmcHoVmwLFpvo=",
          "dev": true,
          "requires": {
            "esutils": "^2.0.2",
            "isarray": "^1.0.0"
          }
        },
        "load-json-file": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/load-json-file/-/load-json-file-2.0.0.tgz",
          "integrity": "sha1-eUfkIUmvgNaWy/eXvKq8/h/inKg=",
          "dev": true,
          "requires": {
            "graceful-fs": "^4.1.2",
            "parse-json": "^2.2.0",
            "pify": "^2.0.0",
            "strip-bom": "^3.0.0"
          }
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
          "dev": true
        },
        "path-type": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/path-type/-/path-type-2.0.0.tgz",
          "integrity": "sha1-8BLMuEFbcJb8LaoQVMPXI4lZTHM=",
          "dev": true,
          "requires": {
            "pify": "^2.0.0"
          }
        },
        "pify": {
          "version": "2.3.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/pify/-/pify-2.3.0.tgz",
          "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw=",
          "dev": true
        },
        "read-pkg": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/read-pkg/-/read-pkg-2.0.0.tgz",
          "integrity": "sha1-jvHAYjxqbbDcZxPEv6xGMysjaPg=",
          "dev": true,
          "requires": {
            "load-json-file": "^2.0.0",
            "normalize-package-data": "^2.3.2",
            "path-type": "^2.0.0"
          }
        },
        "read-pkg-up": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/read-pkg-up/-/read-pkg-up-2.0.0.tgz",
          "integrity": "sha1-a3KoBImE4MQeeVEP1en6mbO1Sb4=",
          "dev": true,
          "requires": {
            "find-up": "^2.0.0",
            "read-pkg": "^2.0.0"
          }
        },
        "strip-bom": {
          "version": "3.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/strip-bom/-/strip-bom-3.0.0.tgz",
          "integrity": "sha1-IzTBjpx1n3vdVv3vfprj1YjmjtM=",
          "dev": true
        }
      }
    },
    "eslint-plugin-node": {
      "version": "10.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/eslint-plugin-node/-/eslint-plugin-node-10.0.0.tgz",
      "integrity": "sha512-1CSyM/QCjs6PXaT18+zuAXsjXGIGo5Rw630rSKwokSs2jrYURQc4R5JZpoanNCqwNmepg+0eZ9L7YiRUJb8jiQ==",
      "requires": {
        "eslint-plugin-es": "^2.0.0",
        "eslint-utils": "^1.4.2",
        "ignore": "^5.1.1",
        "minimatch": "^3.0.4",
        "resolve": "^1.10.1",
        "semver": "^6.1.0"
      },
      "dependencies": {
        "ignore": {
          "version": "5.1.4",
          "resolved": "http://maven.paic.com.cn/repository/npm/ignore/-/ignore-5.1.4.tgz",
          "integrity": "sha512-MzbUSahkTW1u7JpKKjY7LCARd1fU5W2rLdxlM4kdkayuCwZImjkpluF9CM1aLewYJguPDqewLam18Y6AU69A8A=="
        },
        "semver": {
          "version": "6.3.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/semver/-/semver-6.3.0.tgz",
          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw=="
        }
      }
    },
    "eslint-plugin-promise": {
      "version": "4.2.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/eslint-plugin-promise/-/eslint-plugin-promise-4.2.1.tgz",
      "integrity": "sha512-VoM09vT7bfA7D+upt+FjeBO5eHIJQBUWki1aPvB+vbNiHS3+oGIJGIeyBtKQTME6UPXXy3vV07OL1tHd3ANuDw=="
    },
    "eslint-plugin-standard": {
      "version": "4.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/eslint-plugin-standard/-/eslint-plugin-standard-4.0.1.tgz",
      "integrity": "sha512-v/KBnfyaOMPmZc/dmc6ozOdWqekGp7bBGq4jLAecEfPGmfKiWS4sA8sC0LqiV9w5qmXAtXVn4M3p1jSyhY85SQ=="
    },
    "eslint-plugin-vue": {
      "version": "5.2.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/eslint-plugin-vue/-/eslint-plugin-vue-5.2.3.tgz",
      "integrity": "sha512-mGwMqbbJf0+VvpGR5Lllq0PMxvTdrZ/ZPjmhkacrCHbubJeJOt+T6E3HUzAifa2Mxi7RSdJfC9HFpOeSYVMMIw==",
      "dev": true,
      "requires": {
        "vue-eslint-parser": "^5.0.0"
      },
      "dependencies": {
        "acorn-jsx": {
          "version": "5.1.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/acorn-jsx/-/acorn-jsx-5.1.0.tgz",
          "integrity": "sha512-tMUqwBWfLFbJbizRmEcWSLw6HnFzfdJs2sOJEOwwtVPMoH/0Ay+E703oZz78VSXZiiDcZrQ5XKjPIUQixhmgVw==",
          "dev": true
        },
        "espree": {
          "version": "4.1.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/espree/-/espree-4.1.0.tgz",
          "integrity": "sha512-I5BycZW6FCVIub93TeVY1s7vjhP9CY6cXCznIRfiig7nRviKZYdRnj/sHEWC6A7WE9RDWOFq9+7OsWSYz8qv2w==",
          "dev": true,
          "requires": {
            "acorn": "^6.0.2",
            "acorn-jsx": "^5.0.0",
            "eslint-visitor-keys": "^1.0.0"
          }
        },
        "vue-eslint-parser": {
          "version": "5.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/vue-eslint-parser/-/vue-eslint-parser-5.0.0.tgz",
          "integrity": "sha512-JlHVZwBBTNVvzmifwjpZYn0oPWH2SgWv5dojlZBsrhablDu95VFD+hriB1rQGwbD+bms6g+rAFhQHk6+NyiS6g==",
          "dev": true,
          "requires": {
            "debug": "^4.1.0",
            "eslint-scope": "^4.0.0",
            "eslint-visitor-keys": "^1.0.0",
            "espree": "^4.1.0",
            "esquery": "^1.0.1",
            "lodash": "^4.17.11"
          }
        }
      }
    },
    "eslint-scope": {
      "version": "4.0.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/eslint-scope/-/eslint-scope-4.0.3.tgz",
      "integrity": "sha512-p7VutNr1O/QrxysMo3E45FjYDTeXBy0iTltPFNSqKAIfjDSXC+4dj+qfyuD8bfAXrW/y6lW3O76VaYNPKfpKrg==",
      "dev": true,
      "requires": {
        "esrecurse": "^4.1.0",
        "estraverse": "^4.1.1"
      }
    },
    "eslint-utils": {
      "version": "1.4.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/eslint-utils/-/eslint-utils-1.4.3.tgz",
      "integrity": "sha512-fbBN5W2xdY45KulGXmLHZ3c3FHfVYmKg0IrAKGOkT/464PQsx2UeIzfz1RmEci+KLm1bBaAzZAh8+/E+XAeZ8Q==",
      "requires": {
        "eslint-visitor-keys": "^1.1.0"
      }
    },
    "eslint-visitor-keys": {
      "version": "1.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/eslint-visitor-keys/-/eslint-visitor-keys-1.1.0.tgz",
      "integrity": "sha512-8y9YjtM1JBJU/A9Kc+SbaOV4y29sSWckBwMHa+FGtVj5gN/sbnKDf6xJUl+8g7FAij9LVaP8C24DUiH/f/2Z9A=="
    },
    "espree": {
      "version": "3.5.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/espree/-/espree-3.5.4.tgz",
      "integrity": "sha512-yAcIQxtmMiB/jL32dzEp2enBeidsB7xWPLNiw3IIkpVds1P+h7qF9YwJq1yUNzp2OKXgAprs4F61ih66UsoD1A==",
      "dev": true,
      "optional": true,
      "requires": {
        "acorn": "^5.5.0",
        "acorn-jsx": "^3.0.0"
      },
      "dependencies": {
        "acorn": {
          "version": "5.7.3",
          "resolved": "http://maven.paic.com.cn/repository/npm/acorn/-/acorn-5.7.3.tgz",
          "integrity": "sha512-T/zvzYRfbVojPWahDsE5evJdHb3oJoQfFbsrKM7w5Zcs++Tr257tia3BmMP8XYVjp1S9RZXQMh7gao96BlqZOw==",
          "dev": true,
          "optional": true
        }
      }
    },
    "esprima": {
      "version": "4.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/esprima/-/esprima-4.0.1.tgz",
      "integrity": "sha512-eGuFFw7Upda+g4p+QHvnW0RyTX/SVeJBDM/gCtMARO0cLuT2HcEKnTPvhjV6aGeqrCB/sbNop0Kszm0jsaWU4A==",
      "dev": true
    },
    "esquery": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/esquery/-/esquery-1.0.1.tgz",
      "integrity": "sha512-SmiyZ5zIWH9VM+SRUReLS5Q8a7GxtRdxEBVZpm98rJM7Sb+A9DVCndXfkeFUd3byderg+EbDkfnevfCwynWaNA==",
      "dev": true,
      "requires": {
        "estraverse": "^4.0.0"
      }
    },
    "esrecurse": {
      "version": "4.2.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/esrecurse/-/esrecurse-4.2.1.tgz",
      "integrity": "sha512-64RBB++fIOAXPw3P9cy89qfMlvZEXZkqqJkjqqXIvzP5ezRZjW+lPWjw35UX/3EhUPFYbg5ER4JYgDw4007/DQ==",
      "dev": true,
      "requires": {
        "estraverse": "^4.1.0"
      }
    },
    "estraverse": {
      "version": "4.3.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/estraverse/-/estraverse-4.3.0.tgz",
      "integrity": "sha512-39nnKffWz8xN1BU/2c79n9nB9HDzo0niYUqx6xyqUnyoAnQyyWpOTdZEeiCch8BBu515t4wp9ZmgVfVhn9EBpw==",
      "dev": true
    },
    "esutils": {
      "version": "2.0.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true
    },
    "etag": {
      "version": "1.8.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/etag/-/etag-1.8.1.tgz",
      "integrity": "sha1-Qa4u62XvpiJorr/qg6x9eSmbCIc=",
      "dev": true
    },
    "event-pubsub": {
      "version": "4.3.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/event-pubsub/-/event-pubsub-4.3.0.tgz",
      "integrity": "sha512-z7IyloorXvKbFx9Bpie2+vMJKKx1fH1EN5yiTfp8CiLOTptSYy1g8H4yDpGlEdshL1PBiFtBHepF2cNsqeEeFQ==",
      "dev": true
    },
    "eventemitter3": {
      "version": "4.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/eventemitter3/-/eventemitter3-4.0.0.tgz",
      "integrity": "sha512-qerSRB0p+UDEssxTtm6EDKcE7W4OaoisfIMl4CngyEhjpYglocpNg6UEqCvemdGhosAsg4sO2dXJOdyBifPGCg==",
      "dev": true
    },
    "events": {
      "version": "3.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/events/-/events-3.0.0.tgz",
      "integrity": "sha512-Dc381HFWJzEOhQ+d8pkNon++bk9h6cdAoAj4iE6Q4y6xgTzySWXlKn05/TVNpjnfRqi/X0EpJEJohPjNI3zpVA=="
    },
    "eventsource": {
      "version": "1.0.7",
      "resolved": "http://maven.paic.com.cn/repository/npm/eventsource/-/eventsource-1.0.7.tgz",
      "integrity": "sha512-4Ln17+vVT0k8aWq+t/bF5arcS3EpT9gYtW66EPacdj/mAFevznsnyoHLPy2BA8gbIQeIHoPsvwmfBftfcG//BQ==",
      "dev": true,
      "requires": {
        "original": "^1.0.0"
      }
    },
    "evp_bytestokey": {
      "version": "1.0.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/evp_bytestokey/-/evp_bytestokey-1.0.3.tgz",
      "integrity": "sha512-/f2Go4TognH/KvCISP7OUsHn85hT9nUkxxA9BEWxFn+Oj9o8ZNLm/40hdlgSLyuOimsrTKLUMEorQexp/aPQeA==",
      "dev": true,
      "requires": {
        "md5.js": "^1.3.4",
        "safe-buffer": "^5.1.1"
      }
    },
    "exec-sh": {
      "version": "0.2.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/exec-sh/-/exec-sh-0.2.2.tgz",
      "integrity": "sha512-FIUCJz1RbuS0FKTdaAafAByGS0CPvU3R0MeHxgtl+djzCc//F8HakL8GzmVNZanasTbTAY/3DRFA0KpVqj/eAw==",
      "dev": true,
      "requires": {
        "merge": "^1.2.0"
      }
    },
    "execa": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/execa/-/execa-1.0.0.tgz",
      "integrity": "sha512-adbxcyWV46qiHyvSp50TKt05tB4tK3HcmF7/nxfAdhnox83seTDbwnaqKO4sXRy7roHAIFqJP/Rw/AuEbX61LA==",
      "dev": true,
      "requires": {
        "cross-spawn": "^6.0.0",
        "get-stream": "^4.0.0",
        "is-stream": "^1.1.0",
        "npm-run-path": "^2.0.0",
        "p-finally": "^1.0.0",
        "signal-exit": "^3.0.0",
        "strip-eof": "^1.0.0"
      }
    },
    "exit": {
      "version": "0.1.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/exit/-/exit-0.1.2.tgz",
      "integrity": "sha1-BjJjj42HfMghB9MKD/8aF8uhzQw=",
      "dev": true
    },
    "expand-brackets": {
      "version": "2.1.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/expand-brackets/-/expand-brackets-2.1.4.tgz",
      "integrity": "sha1-t3c14xXOMPa27/D4OwQVGiJEliI=",
      "dev": true,
      "requires": {
        "debug": "^2.3.3",
        "define-property": "^0.2.5",
        "extend-shallow": "^2.0.1",
        "posix-character-classes": "^0.1.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.1"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "http://maven.paic.com.cn/repository/npm/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "requires": {
            "ms": "2.0.0"
          }
        },
        "define-property": {
          "version": "0.2.5",
          "resolved": "http://maven.paic.com.cn/repository/npm/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "dev": true,
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        },
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "dev": true,
          "requires": {
            "is-extendable": "^0.1.0"
          }
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
          "dev": true
        }
      }
    },
    "expand-range": {
      "version": "1.8.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/expand-range/-/expand-range-1.8.2.tgz",
      "integrity": "sha1-opnv/TNf4nIeuujiV+x5ZE/IUzc=",
      "dev": true,
      "requires": {
        "fill-range": "^2.1.0"
      },
      "dependencies": {
        "fill-range": {
          "version": "2.2.4",
          "resolved": "http://maven.paic.com.cn/repository/npm/fill-range/-/fill-range-2.2.4.tgz",
          "integrity": "sha512-cnrcCbj01+j2gTG921VZPnHbjmdAf8oQV/iGeV2kZxGSyfYjjTyY79ErsK1WJWMpw6DaApEX72binqJE+/d+5Q==",
          "dev": true,
          "requires": {
            "is-number": "^2.1.0",
            "isobject": "^2.0.0",
            "randomatic": "^3.0.0",
            "repeat-element": "^1.1.2",
            "repeat-string": "^1.5.2"
          }
        },
        "is-number": {
          "version": "2.1.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-number/-/is-number-2.1.0.tgz",
          "integrity": "sha1-Afy7s5NGOlSPL0ZszhbezknbkI8=",
          "dev": true,
          "requires": {
            "kind-of": "^3.0.2"
          }
        },
        "isobject": {
          "version": "2.1.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/isobject/-/isobject-2.1.0.tgz",
          "integrity": "sha1-8GVWEJaj8dou9GJy+BXIQNh+DIk=",
          "dev": true,
          "requires": {
            "isarray": "1.0.0"
          }
        },
        "kind-of": {
          "version": "3.2.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "dev": true,
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "expect": {
      "version": "23.6.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/expect/-/expect-23.6.0.tgz",
      "integrity": "sha512-dgSoOHgmtn/aDGRVFWclQyPDKl2CQRq0hmIEoUAuQs/2rn2NcvCWcSCovm6BLeuB/7EZuLGu2QfnR+qRt5OM4w==",
      "dev": true,
      "requires": {
        "ansi-styles": "^3.2.0",
        "jest-diff": "^23.6.0",
        "jest-get-type": "^22.1.0",
        "jest-matcher-utils": "^23.6.0",
        "jest-message-util": "^23.4.0",
        "jest-regex-util": "^23.3.0"
      }
    },
    "express": {
      "version": "4.17.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/express/-/express-4.17.1.tgz",
      "integrity": "sha512-mHJ9O79RqluphRrcw2X/GTh3k9tVv8YcoyY4Kkh4WDMUYKRZUq0h1o0w2rrrxBqM7VoeUVqgb27xlEMXTnYt4g==",
      "dev": true,
      "requires": {
        "accepts": "~1.3.7",
        "array-flatten": "1.1.1",
        "body-parser": "1.19.0",
        "content-disposition": "0.5.3",
        "content-type": "~1.0.4",
        "cookie": "0.4.0",
        "cookie-signature": "1.0.6",
        "debug": "2.6.9",
        "depd": "~1.1.2",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "etag": "~1.8.1",
        "finalhandler": "~1.1.2",
        "fresh": "0.5.2",
        "merge-descriptors": "1.0.1",
        "methods": "~1.1.2",
        "on-finished": "~2.3.0",
        "parseurl": "~1.3.3",
        "path-to-regexp": "0.1.7",
        "proxy-addr": "~2.0.5",
        "qs": "6.7.0",
        "range-parser": "~1.2.1",
        "safe-buffer": "5.1.2",
        "send": "0.17.1",
        "serve-static": "1.14.1",
        "setprototypeof": "1.1.1",
        "statuses": "~1.5.0",
        "type-is": "~1.6.18",
        "utils-merge": "1.0.1",
        "vary": "~1.1.2"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "http://maven.paic.com.cn/repository/npm/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "requires": {
            "ms": "2.0.0"
          }
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
          "dev": true
        },
        "qs": {
          "version": "6.7.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/qs/-/qs-6.7.0.tgz",
          "integrity": "sha512-VCdBRNFTX1fyE7Nb6FYoURo/SPe62QCaAyzJvUjwRaIsc+NePBEniHlvxFmmX56+HZphIGtV0XeCirBtpDrTyQ==",
          "dev": true
        }
      }
    },
    "extend": {
      "version": "3.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/extend/-/extend-3.0.2.tgz",
      "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==",
      "dev": true
    },
    "extend-shallow": {
      "version": "3.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/extend-shallow/-/extend-shallow-3.0.2.tgz",
      "integrity": "sha1-Jqcarwc7OfshJxcnRhMcJwQCjbg=",
      "dev": true,
      "requires": {
        "assign-symbols": "^1.0.0",
        "is-extendable": "^1.0.1"
      },
      "dependencies": {
        "is-extendable": {
          "version": "1.0.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-extendable/-/is-extendable-1.0.1.tgz",
          "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
          "dev": true,
          "requires": {
            "is-plain-object": "^2.0.4"
          }
        }
      }
    },
    "external-editor": {
      "version": "2.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/external-editor/-/external-editor-2.2.0.tgz",
      "integrity": "sha512-bSn6gvGxKt+b7+6TKEv1ZycHleA7aHhRHyAqJyp5pbUFuYYNIzpZnQDk7AsYckyWdEnTeAnay0aCy2aV6iTk9A==",
      "dev": true,
      "optional": true,
      "requires": {
        "chardet": "^0.4.0",
        "iconv-lite": "^0.4.17",
        "tmp": "^0.0.33"
      }
    },
    "extglob": {
      "version": "2.0.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/extglob/-/extglob-2.0.4.tgz",
      "integrity": "sha512-Nmb6QXkELsuBr24CJSkilo6UHHgbekK5UiZgfE6UHD3Eb27YC6oD+bhcT+tJ6cl8dmsgdQxnWlcry8ksBIBLpw==",
      "dev": true,
      "requires": {
        "array-unique": "^0.3.2",
        "define-property": "^1.0.0",
        "expand-brackets": "^2.1.4",
        "extend-shallow": "^2.0.1",
        "fragment-cache": "^0.2.1",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.1"
      },
      "dependencies": {
        "define-property": {
          "version": "1.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/define-property/-/define-property-1.0.0.tgz",
          "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
          "dev": true,
          "requires": {
            "is-descriptor": "^1.0.0"
          }
        },
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "dev": true,
          "requires": {
            "is-extendable": "^0.1.0"
          }
        },
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "dev": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "dev": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "dev": true,
          "requires": {
            "is-accessor-descriptor": "^1.0.0",
            "is-data-descriptor": "^1.0.0",
            "kind-of": "^6.0.2"
          }
        }
      }
    },
    "extract-from-css": {
      "version": "0.4.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/extract-from-css/-/extract-from-css-0.4.4.tgz",
      "integrity": "sha1-HqffLnx8brmSL6COitrqSG9vj5I=",
      "dev": true,
      "requires": {
        "css": "^2.1.0"
      }
    },
    "extsprintf": {
      "version": "1.3.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/extsprintf/-/extsprintf-1.3.0.tgz",
      "integrity": "sha1-lpGEQOMEGnpBT4xS48V06zw+HgU=",
      "dev": true
    },
    "fast-deep-equal": {
      "version": "2.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/fast-deep-equal/-/fast-deep-equal-2.0.1.tgz",
      "integrity": "sha1-ewUhjd+WZ79/Nwv3/bLLFf3Qqkk=",
      "dev": true
    },
    "fast-glob": {
      "version": "2.2.7",
      "resolved": "http://maven.paic.com.cn/repository/npm/fast-glob/-/fast-glob-2.2.7.tgz",
      "integrity": "sha512-g1KuQwHOZAmOZMuBtHdxDtju+T2RT8jgCC9aANsbpdiDDTSnjgfuVsIBNKbUeJI3oKMRExcfNDtJl4OhbffMsw==",
      "dev": true,
      "requires": {
        "@mrmlnc/readdir-enhanced": "^2.2.1",
        "@nodelib/fs.stat": "^1.1.2",
        "glob-parent": "^3.1.0",
        "is-glob": "^4.0.0",
        "merge2": "^1.2.3",
        "micromatch": "^3.1.10"
      }
    },
    "fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true
    },
    "fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "http://maven.paic.com.cn/repository/npm/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha1-PYpcZog6FqMMqGQ+hR8Zuqd5eRc=",
      "dev": true
    },
    "fastparse": {
      "version": "1.1.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/fastparse/-/fastparse-1.1.2.tgz",
      "integrity": "sha512-483XLLxTVIwWK3QTrMGRqUfUpoOs/0hbQrl2oz4J0pAcm3A3bu84wxTFqGqkJzewCLdME38xJLJAxBABfQT8sQ==",
      "dev": true
    },
    "faye-websocket": {
      "version": "0.10.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/faye-websocket/-/faye-websocket-0.10.0.tgz",
      "integrity": "sha1-TkkvjQTftviQA1B/btvy1QHnxvQ=",
      "dev": true,
      "requires": {
        "websocket-driver": ">=0.5.1"
      }
    },
    "fb-watchman": {
      "version": "2.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/fb-watchman/-/fb-watchman-2.0.1.tgz",
      "integrity": "sha512-DkPJKQeY6kKwmuMretBhr7G6Vodr7bFwDYTXIkfG1gjvNpaxBTQV3PbXg6bR1c1UP4jPOX0jHUbbHANL9vRjVg==",
      "dev": true,
      "requires": {
        "bser": "2.1.1"
      }
    },
    "figgy-pudding": {
      "version": "3.5.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/figgy-pudding/-/figgy-pudding-3.5.1.tgz",
      "integrity": "sha512-vNKxJHTEKNThjfrdJwHc7brvM6eVevuO5nTj6ez8ZQ1qbXTvGthucRF7S4vf2cr71QVnT70V34v0S1DyQsti0w==",
      "dev": true
    },
    "figures": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/figures/-/figures-2.0.0.tgz",
      "integrity": "sha1-OrGi0qYsi/tDGgyUy3l6L84nyWI=",
      "dev": true,
      "requires": {
        "escape-string-regexp": "^1.0.5"
      }
    },
    "file-entry-cache": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/file-entry-cache/-/file-entry-cache-2.0.0.tgz",
      "integrity": "sha1-w5KZDD5oR4PYOLjISkXYoEhFg2E=",
      "dev": true,
      "optional": true,
      "requires": {
        "flat-cache": "^1.2.1",
        "object-assign": "^4.0.1"
      }
    },
    "file-loader": {
      "version": "3.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/file-loader/-/file-loader-3.0.1.tgz",
      "integrity": "sha512-4sNIOXgtH/9WZq4NvlfU3Opn5ynUsqBwSLyM+I7UOwdGigTBYfVVQEwe/msZNX/j4pCJTIM14Fsw66Svo1oVrw==",
      "dev": true,
      "requires": {
        "loader-utils": "^1.0.2",
        "schema-utils": "^1.0.0"
      }
    },
    "file-uri-to-path": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/file-uri-to-path/-/file-uri-to-path-1.0.0.tgz",
      "integrity": "sha512-0Zt+s3L7Vf1biwWZ29aARiVYLx7iMGnEUl9x33fbB/j3jR81u/O2LbqK+Bm1CDSNDKVtJ/YjwY7TUd5SkeLQLw==",
      "dev": true,
      "optional": true
    },
    "filename-regex": {
      "version": "2.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/filename-regex/-/filename-regex-2.0.1.tgz",
      "integrity": "sha1-wcS5vuPglyXdsQa3XB4wH+LxiyY=",
      "dev": true
    },
    "fileset": {
      "version": "2.0.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/fileset/-/fileset-2.0.3.tgz",
      "integrity": "sha1-jnVIqW08wjJ+5eZ0FocjozO7oqA=",
      "dev": true,
      "requires": {
        "glob": "^7.0.3",
        "minimatch": "^3.0.3"
      }
    },
    "filesize": {
      "version": "3.6.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/filesize/-/filesize-3.6.1.tgz",
      "integrity": "sha512-7KjR1vv6qnicaPMi1iiTcI85CyYwRO/PSFCu6SvqL8jN2Wjt/NIYQTFtFs7fSDCYOstUkEWIQGFUg5YZQfjlcg==",
      "dev": true
    },
    "fill-range": {
      "version": "4.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/fill-range/-/fill-range-4.0.0.tgz",
      "integrity": "sha1-1USBHUKPmOsGpj3EAtJAPDKMOPc=",
      "dev": true,
      "requires": {
        "extend-shallow": "^2.0.1",
        "is-number": "^3.0.0",
        "repeat-string": "^1.6.1",
        "to-regex-range": "^2.1.0"
      },
      "dependencies": {
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "dev": true,
          "requires": {
            "is-extendable": "^0.1.0"
          }
        }
      }
    },
    "finalhandler": {
      "version": "1.1.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/finalhandler/-/finalhandler-1.1.2.tgz",
      "integrity": "sha512-aAWcW57uxVNrQZqFXjITpW3sIUQmHGG3qSb9mUah9MgMC4NeWhNOlNjXEYq3HjRAvL6arUviZGGJsBg6z0zsWA==",
      "dev": true,
      "requires": {
        "debug": "2.6.9",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "on-finished": "~2.3.0",
        "parseurl": "~1.3.3",
        "statuses": "~1.5.0",
        "unpipe": "~1.0.0"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "http://maven.paic.com.cn/repository/npm/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "requires": {
            "ms": "2.0.0"
          }
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
          "dev": true
        }
      }
    },
    "find-babel-config": {
      "version": "1.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/find-babel-config/-/find-babel-config-1.2.0.tgz",
      "integrity": "sha512-jB2CHJeqy6a820ssiqwrKMeyC6nNdmrcgkKWJWmpoxpE8RKciYJXCcXRq1h2AzCo5I5BJeN2tkGEO3hLTuePRA==",
      "dev": true,
      "requires": {
        "json5": "^0.5.1",
        "path-exists": "^3.0.0"
      },
      "dependencies": {
        "json5": {
          "version": "0.5.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/json5/-/json5-0.5.1.tgz",
          "integrity": "sha1-Hq3nrMASA0rYTiOWdn6tn6VJWCE=",
          "dev": true
        }
      }
    },
    "find-cache-dir": {
      "version": "2.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/find-cache-dir/-/find-cache-dir-2.1.0.tgz",
      "integrity": "sha512-Tq6PixE0w/VMFfCgbONnkiQIVol/JJL7nRMi20fqzA4NRs9AfeqMGeRdPi3wIhYkxjeBaWh2rxwapn5Tu3IqOQ==",
      "dev": true,
      "requires": {
        "commondir": "^1.0.1",
        "make-dir": "^2.0.0",
        "pkg-dir": "^3.0.0"
      }
    },
    "find-root": {
      "version": "1.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/find-root/-/find-root-1.1.0.tgz",
      "integrity": "sha512-NKfW6bec6GfKc0SGx1e07QZY9PE99u0Bft/0rzSD5k3sO/vwkVUpDUKVm5Gpp5Ue3YfShPFTX2070tDs5kB9Ng==",
      "dev": true
    },
    "find-up": {
      "version": "2.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/find-up/-/find-up-2.1.0.tgz",
      "integrity": "sha1-RdG35QbHF93UgndaK3eSCjwMV6c=",
      "dev": true,
      "requires": {
        "locate-path": "^2.0.0"
      }
    },
    "flat-cache": {
      "version": "1.3.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/flat-cache/-/flat-cache-1.3.4.tgz",
      "integrity": "sha512-VwyB3Lkgacfik2vhqR4uv2rvebqmDvFu4jlN/C1RzWoJEo8I7z4Q404oiqYCkq41mni8EzQnm95emU9seckwtg==",
      "dev": true,
      "optional": true,
      "requires": {
        "circular-json": "^0.3.1",
        "graceful-fs": "^4.1.2",
        "rimraf": "~2.6.2",
        "write": "^0.2.1"
      },
      "dependencies": {
        "rimraf": {
          "version": "2.6.3",
          "resolved": "http://maven.paic.com.cn/repository/npm/rimraf/-/rimraf-2.6.3.tgz",
          "integrity": "sha512-mwqeW5XsA2qAejG46gYdENaxXjx9onRNCfn7L0duuP4hCuTIi/QO7PDK07KJfp1d+izWPrzEJDcSqBa0OZQriA==",
          "dev": true,
          "optional": true,
          "requires": {
            "glob": "^7.1.3"
          }
        }
      }
    },
    "flatted": {
      "version": "2.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/flatted/-/flatted-2.0.1.tgz",
      "integrity": "sha512-a1hQMktqW9Nmqr5aktAux3JMNqaucxGcjtjWnZLHX7yyPCmlSV3M54nGYbqT8K+0GhF3NBgmJCc3ma+WOgX8Jg==",
      "dev": true
    },
    "flush-write-stream": {
      "version": "1.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/flush-write-stream/-/flush-write-stream-1.1.1.tgz",
      "integrity": "sha512-3Z4XhFZ3992uIq0XOqb9AreonueSYphE6oYbpt5+3u06JWklbsPkNv3ZKkP9Bz/r+1MWCaMoSQ28P85+1Yc77w==",
      "dev": true,
      "requires": {
        "inherits": "^2.0.3",
        "readable-stream": "^2.3.6"
      }
    },
    "follow-redirects": {
      "version": "1.9.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/follow-redirects/-/follow-redirects-1.9.0.tgz",
      "integrity": "sha512-CRcPzsSIbXyVDl0QI01muNDu69S8trU4jArW9LpOt2WtC6LyUJetcIrmfHsRBx7/Jb6GHJUiuqyYxPooFfNt6A==",
      "dev": true,
      "requires": {
        "debug": "^3.0.0"
      },
      "dependencies": {
        "debug": {
          "version": "3.2.6",
          "resolved": "http://maven.paic.com.cn/repository/npm/debug/-/debug-3.2.6.tgz",
          "integrity": "sha512-mel+jf7nrtEl5Pn1Qx46zARXKDpBbvzezse7p7LqINmdoIk8PYP5SySaxEmYv6TZ0JyEKA1hsCId6DIhgITtWQ==",
          "dev": true,
          "requires": {
            "ms": "^2.1.1"
          }
        }
      }
    },
    "for-in": {
      "version": "1.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/for-in/-/for-in-1.0.2.tgz",
      "integrity": "sha1-gQaNKVqBQuwKxybG4iAMMPttXoA=",
      "dev": true
    },
    "for-own": {
      "version": "0.1.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/for-own/-/for-own-0.1.5.tgz",
      "integrity": "sha1-UmXGgaTylNq78XyVCbZ2OqhFEM4=",
      "dev": true,
      "requires": {
        "for-in": "^1.0.1"
      }
    },
    "forever-agent": {
      "version": "0.6.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/forever-agent/-/forever-agent-0.6.1.tgz",
      "integrity": "sha1-+8cfDEGt6zf5bFd60e1C2P2sypE=",
      "dev": true
    },
    "fork-ts-checker-webpack-plugin": {
      "version": "0.5.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/fork-ts-checker-webpack-plugin/-/fork-ts-checker-webpack-plugin-0.5.2.tgz",
      "integrity": "sha512-a5IG+xXyKnpruI0CP/anyRLAoxWtp3lzdG6flxicANnoSzz64b12dJ7ASAVRrI2OaWwZR2JyBaMHFQqInhWhIw==",
      "dev": true,
      "requires": {
        "babel-code-frame": "^6.22.0",
        "chalk": "^2.4.1",
        "chokidar": "^2.0.4",
        "micromatch": "^3.1.10",
        "minimatch": "^3.0.4",
        "tapable": "^1.0.0"
      }
    },
    "form-data": {
      "version": "2.3.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/form-data/-/form-data-2.3.3.tgz",
      "integrity": "sha512-1lLKB2Mu3aGP1Q/2eCOx0fNbRMe7XdwktwOruhfqqd0rIJWwN4Dh+E3hrPSlDCXnSR7UtZ1N38rVXm+6+MEhJQ==",
      "dev": true,
      "requires": {
        "asynckit": "^0.4.0",
        "combined-stream": "^1.0.6",
        "mime-types": "^2.1.12"
      }
    },
    "forwarded": {
      "version": "0.1.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/forwarded/-/forwarded-0.1.2.tgz",
      "integrity": "sha1-mMI9qxF1ZXuMBXPozszZGw/xjIQ=",
      "dev": true
    },
    "fragment-cache": {
      "version": "0.2.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/fragment-cache/-/fragment-cache-0.2.1.tgz",
      "integrity": "sha1-QpD60n8T6Jvn8zeZxrxaCr//DRk=",
      "dev": true,
      "requires": {
        "map-cache": "^0.2.2"
      }
    },
    "fresh": {
      "version": "0.5.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/fresh/-/fresh-0.5.2.tgz",
      "integrity": "sha1-PYyt2Q2XZWn6g1qx+OSyOhBWBac=",
      "dev": true
    },
    "from2": {
      "version": "2.3.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/from2/-/from2-2.3.0.tgz",
      "integrity": "sha1-i/tVAr3kpNNs/e6gB/zKIdfjgq8=",
      "dev": true,
      "requires": {
        "inherits": "^2.0.1",
        "readable-stream": "^2.0.0"
      }
    },
    "fs-extra": {
      "version": "7.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/fs-extra/-/fs-extra-7.0.1.tgz",
      "integrity": "sha512-YJDaCJZEnBmcbw13fvdAM9AwNOJwOzrE4pqMqBq5nFiEqXUqHwlK4B+3pUw6JNvfSPtX05xFHtYy/1ni01eGCw==",
      "dev": true,
      "requires": {
        "graceful-fs": "^4.1.2",
        "jsonfile": "^4.0.0",
        "universalify": "^0.1.0"
      }
    },
    "fs-write-stream-atomic": {
      "version": "1.0.10",
      "resolved": "http://maven.paic.com.cn/repository/npm/fs-write-stream-atomic/-/fs-write-stream-atomic-1.0.10.tgz",
      "integrity": "sha1-tH31NJPvkR33VzHnCp3tAYnbQMk=",
      "dev": true,
      "requires": {
        "graceful-fs": "^4.1.2",
        "iferr": "^0.1.5",
        "imurmurhash": "^0.1.4",
        "readable-stream": "1 || 2"
      }
    },
    "fs.realpath": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha1-FQStJSMVjKpA20onh8sBQRmU6k8=",
      "dev": true
    },
    "fsevents": {
      "version": "1.2.12",
      "resolved": "http://maven.paic.com.cn/repository/npm/fsevents/-/fsevents-1.2.12.tgz",
      "integrity": "sha512-Ggd/Ktt7E7I8pxZRbGIs7vwqAPscSESMrCSkx2FtWeqmheJgCo2R74fTsZFCifr0VTPwqRpPv17+6b8Zp7th0Q==",
      "dev": true,
      "optional": true,
      "requires": {
        "bindings": "^1.5.0",
        "nan": "^2.12.1",
        "node-pre-gyp": "*"
      },
      "dependencies": {
        "abbrev": {
          "version": "1.1.1",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "ansi-regex": {
          "version": "2.1.1",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "aproba": {
          "version": "1.2.0",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "are-we-there-yet": {
          "version": "1.1.5",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "delegates": "^1.0.0",
            "readable-stream": "^2.0.6"
          }
        },
        "balanced-match": {
          "version": "1.0.0",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "brace-expansion": {
          "version": "1.1.11",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "balanced-match": "^1.0.0",
            "concat-map": "0.0.1"
          }
        },
        "chownr": {
          "version": "1.1.4",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "code-point-at": {
          "version": "1.1.0",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "concat-map": {
          "version": "0.0.1",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "console-control-strings": {
          "version": "1.1.0",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "core-util-is": {
          "version": "1.0.2",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "debug": {
          "version": "3.2.6",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "ms": "^2.1.1"
          }
        },
        "deep-extend": {
          "version": "0.6.0",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "delegates": {
          "version": "1.0.0",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "detect-libc": {
          "version": "1.0.3",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "fs-minipass": {
          "version": "1.2.7",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "minipass": "^2.6.0"
          }
        },
        "fs.realpath": {
          "version": "1.0.0",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "gauge": {
          "version": "2.7.4",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "aproba": "^1.0.3",
            "console-control-strings": "^1.0.0",
            "has-unicode": "^2.0.0",
            "object-assign": "^4.1.0",
            "signal-exit": "^3.0.0",
            "string-width": "^1.0.1",
            "strip-ansi": "^3.0.1",
            "wide-align": "^1.1.0"
          }
        },
        "glob": {
          "version": "7.1.6",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "fs.realpath": "^1.0.0",
            "inflight": "^1.0.4",
            "inherits": "2",
            "minimatch": "^3.0.4",
            "once": "^1.3.0",
            "path-is-absolute": "^1.0.0"
          }
        },
        "has-unicode": {
          "version": "2.0.1",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "iconv-lite": {
          "version": "0.4.24",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "safer-buffer": ">= 2.1.2 < 3"
          }
        },
        "ignore-walk": {
          "version": "3.0.3",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "minimatch": "^3.0.4"
          }
        },
        "inflight": {
          "version": "1.0.6",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "once": "^1.3.0",
            "wrappy": "1"
          }
        },
        "inherits": {
          "version": "2.0.4",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "ini": {
          "version": "1.3.5",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "is-fullwidth-code-point": {
          "version": "1.0.0",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "number-is-nan": "^1.0.0"
          }
        },
        "isarray": {
          "version": "1.0.0",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "minimatch": {
          "version": "3.0.4",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "brace-expansion": "^1.1.7"
          }
        },
        "minimist": {
          "version": "1.2.5",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "minipass": {
          "version": "2.9.0",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "safe-buffer": "^5.1.2",
            "yallist": "^3.0.0"
          }
        },
        "minizlib": {
          "version": "1.3.3",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "minipass": "^2.9.0"
          }
        },
        "mkdirp": {
          "version": "0.5.3",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "minimist": "^1.2.5"
          }
        },
        "ms": {
          "version": "2.1.2",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "needle": {
          "version": "2.3.3",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "debug": "^3.2.6",
            "iconv-lite": "^0.4.4",
            "sax": "^1.2.4"
          }
        },
        "node-pre-gyp": {
          "version": "0.14.0",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "detect-libc": "^1.0.2",
            "mkdirp": "^0.5.1",
            "needle": "^2.2.1",
            "nopt": "^4.0.1",
            "npm-packlist": "^1.1.6",
            "npmlog": "^4.0.2",
            "rc": "^1.2.7",
            "rimraf": "^2.6.1",
            "semver": "^5.3.0",
            "tar": "^4.4.2"
          }
        },
        "nopt": {
          "version": "4.0.3",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "abbrev": "1",
            "osenv": "^0.1.4"
          }
        },
        "npm-bundled": {
          "version": "1.1.1",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "npm-normalize-package-bin": "^1.0.1"
          }
        },
        "npm-normalize-package-bin": {
          "version": "1.0.1",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "npm-packlist": {
          "version": "1.4.8",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "ignore-walk": "^3.0.1",
            "npm-bundled": "^1.0.1",
            "npm-normalize-package-bin": "^1.0.1"
          }
        },
        "npmlog": {
          "version": "4.1.2",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "are-we-there-yet": "~1.1.2",
            "console-control-strings": "~1.1.0",
            "gauge": "~2.7.3",
            "set-blocking": "~2.0.0"
          }
        },
        "number-is-nan": {
          "version": "1.0.1",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "object-assign": {
          "version": "4.1.1",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "once": {
          "version": "1.4.0",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "wrappy": "1"
          }
        },
        "os-homedir": {
          "version": "1.0.2",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "os-tmpdir": {
          "version": "1.0.2",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "osenv": {
          "version": "0.1.5",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "os-homedir": "^1.0.0",
            "os-tmpdir": "^1.0.0"
          }
        },
        "path-is-absolute": {
          "version": "1.0.1",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "process-nextick-args": {
          "version": "2.0.1",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "rc": {
          "version": "1.2.8",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "deep-extend": "^0.6.0",
            "ini": "~1.3.0",
            "minimist": "^1.2.0",
            "strip-json-comments": "~2.0.1"
          }
        },
        "readable-stream": {
          "version": "2.3.7",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "core-util-is": "~1.0.0",
            "inherits": "~2.0.3",
            "isarray": "~1.0.0",
            "process-nextick-args": "~2.0.0",
            "safe-buffer": "~5.1.1",
            "string_decoder": "~1.1.1",
            "util-deprecate": "~1.0.1"
          }
        },
        "rimraf": {
          "version": "2.7.1",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "glob": "^7.1.3"
          }
        },
        "safe-buffer": {
          "version": "5.1.2",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "safer-buffer": {
          "version": "2.1.2",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "sax": {
          "version": "1.2.4",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "semver": {
          "version": "5.7.1",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "set-blocking": {
          "version": "2.0.0",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "signal-exit": {
          "version": "3.0.2",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "string-width": {
          "version": "1.0.2",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "code-point-at": "^1.0.0",
            "is-fullwidth-code-point": "^1.0.0",
            "strip-ansi": "^3.0.0"
          }
        },
        "string_decoder": {
          "version": "1.1.1",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "safe-buffer": "~5.1.0"
          }
        },
        "strip-ansi": {
          "version": "3.0.1",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "ansi-regex": "^2.0.0"
          }
        },
        "strip-json-comments": {
          "version": "2.0.1",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "tar": {
          "version": "4.4.13",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "chownr": "^1.1.1",
            "fs-minipass": "^1.2.5",
            "minipass": "^2.8.6",
            "minizlib": "^1.2.1",
            "mkdirp": "^0.5.0",
            "safe-buffer": "^5.1.2",
            "yallist": "^3.0.3"
          }
        },
        "util-deprecate": {
          "version": "1.0.2",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "wide-align": {
          "version": "1.1.3",
          "bundled": true,
          "dev": true,
          "optional": true,
          "requires": {
            "string-width": "^1.0.2 || 2"
          }
        },
        "wrappy": {
          "version": "1.0.2",
          "bundled": true,
          "dev": true,
          "optional": true
        },
        "yallist": {
          "version": "3.1.1",
          "bundled": true,
          "dev": true,
          "optional": true
        }
      }
    },
    "function-bind": {
      "version": "1.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/function-bind/-/function-bind-1.1.1.tgz",
      "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A==",
      "dev": true
    },
    "functional-red-black-tree": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/functional-red-black-tree/-/functional-red-black-tree-1.0.1.tgz",
      "integrity": "sha1-GwqzvVU7Kg1jmdKcDj6gslIHgyc=",
      "dev": true
    },
    "get-caller-file": {
      "version": "1.0.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/get-caller-file/-/get-caller-file-1.0.3.tgz",
      "integrity": "sha512-3t6rVToeoZfYSGd8YoLFR2DJkiQrIiUrGcjvFX2mDw3bn6k2OtwHN0TNCLbBO+w8qTvimhDkv+LSscbJY1vE6w==",
      "dev": true
    },
    "get-stream": {
      "version": "4.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/get-stream/-/get-stream-4.1.0.tgz",
      "integrity": "sha512-GMat4EJ5161kIy2HevLlr4luNjBgvmj413KaQA7jt4V8B4RDsfpHk7WQ9GVqfYyyx8OS/L66Kox+rJRNklLK7w==",
      "dev": true,
      "requires": {
        "pump": "^3.0.0"
      }
    },
    "get-value": {
      "version": "2.0.6",
      "resolved": "http://maven.paic.com.cn/repository/npm/get-value/-/get-value-2.0.6.tgz",
      "integrity": "sha1-3BXKHGcjh8p2vTesCjlbogQqLCg=",
      "dev": true
    },
    "getpass": {
      "version": "0.1.7",
      "resolved": "http://maven.paic.com.cn/repository/npm/getpass/-/getpass-0.1.7.tgz",
      "integrity": "sha1-Xv+OPmhNVprkyysSgmBOi6YhSfo=",
      "dev": true,
      "requires": {
        "assert-plus": "^1.0.0"
      }
    },
    "glob": {
      "version": "7.1.6",
      "resolved": "http://maven.paic.com.cn/repository/npm/glob/-/glob-7.1.6.tgz",
      "integrity": "sha512-LwaxwyZ72Lk7vZINtNNrywX0ZuLyStrdDtabefZKAY5ZGJhVtgdznluResxNmPitE0SAO+O26sWTHeKSI2wMBA==",
      "dev": true,
      "requires": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.0.4",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      }
    },
    "glob-base": {
      "version": "0.3.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/glob-base/-/glob-base-0.3.0.tgz",
      "integrity": "sha1-27Fk9iIbHAscz4Kuoyi0l98Oo8Q=",
      "dev": true,
      "requires": {
        "glob-parent": "^2.0.0",
        "is-glob": "^2.0.0"
      },
      "dependencies": {
        "glob-parent": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/glob-parent/-/glob-parent-2.0.0.tgz",
          "integrity": "sha1-gTg9ctsFT8zPUzbaqQLxgvbtuyg=",
          "dev": true,
          "requires": {
            "is-glob": "^2.0.0"
          }
        },
        "is-extglob": {
          "version": "1.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-extglob/-/is-extglob-1.0.0.tgz",
          "integrity": "sha1-rEaBd8SUNAWgkvyPKXYMb/xiBsA=",
          "dev": true
        },
        "is-glob": {
          "version": "2.0.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-glob/-/is-glob-2.0.1.tgz",
          "integrity": "sha1-0Jb5JqPe1WAPP9/ZEZjLCIjC2GM=",
          "dev": true,
          "requires": {
            "is-extglob": "^1.0.0"
          }
        }
      }
    },
    "glob-parent": {
      "version": "3.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/glob-parent/-/glob-parent-3.1.0.tgz",
      "integrity": "sha1-nmr2KZ2NO9K9QEMIMr0RPfkGxa4=",
      "dev": true,
      "requires": {
        "is-glob": "^3.1.0",
        "path-dirname": "^1.0.0"
      },
      "dependencies": {
        "is-glob": {
          "version": "3.1.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-glob/-/is-glob-3.1.0.tgz",
          "integrity": "sha1-e6WuJCF4BKxwcHuWkiVnSGzD6Eo=",
          "dev": true,
          "requires": {
            "is-extglob": "^2.1.0"
          }
        }
      }
    },
    "glob-to-regexp": {
      "version": "0.3.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/glob-to-regexp/-/glob-to-regexp-0.3.0.tgz",
      "integrity": "sha1-jFoUlNIGbFcMw7/kSWF1rMTVAqs=",
      "dev": true
    },
    "globals": {
      "version": "11.12.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/globals/-/globals-11.12.0.tgz",
      "integrity": "sha512-WOBp/EEGUiIsJSp7wcv/y6MO+lV9UoncWqxuFfm8eBwzWNgyfBd6Gz+IeKQ9jCmyhoH99g15M3T+QaVHFjizVA==",
      "dev": true
    },
    "globby": {
      "version": "9.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/globby/-/globby-9.2.0.tgz",
      "integrity": "sha512-ollPHROa5mcxDEkwg6bPt3QbEf4pDQSNtd6JPL1YvOvAo/7/0VAm9TccUeoTmarjPw4pfUthSCqcyfNB1I3ZSg==",
      "dev": true,
      "requires": {
        "@types/glob": "^7.1.1",
        "array-union": "^1.0.2",
        "dir-glob": "^2.2.2",
        "fast-glob": "^2.2.6",
        "glob": "^7.1.3",
        "ignore": "^4.0.3",
        "pify": "^4.0.1",
        "slash": "^2.0.0"
      },
      "dependencies": {
        "ignore": {
          "version": "4.0.6",
          "resolved": "http://maven.paic.com.cn/repository/npm/ignore/-/ignore-4.0.6.tgz",
          "integrity": "sha512-cyFDKrqc/YdcWFniJhzI42+AzS+gNwmUzOSFcRCQYwySuBBBy/KjuxWLZ/FHEH6Moq1NizMOBWyTcv8O4OZIMg==",
          "dev": true
        }
      }
    },
    "graceful-fs": {
      "version": "4.2.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/graceful-fs/-/graceful-fs-4.2.3.tgz",
      "integrity": "sha512-a30VEBm4PEdx1dRB7MFK7BejejvCvBronbLjht+sHuGYj8PHs7M/5Z+rt5lw551vZ7yfTCj4Vuyy3mSJytDWRQ==",
      "dev": true
    },
    "growly": {
      "version": "1.3.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/growly/-/growly-1.3.0.tgz",
      "integrity": "sha1-8QdIy+dq+WS3yWyTxrzCivEgwIE=",
      "dev": true
    },
    "gzip-size": {
      "version": "5.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/gzip-size/-/gzip-size-5.1.1.tgz",
      "integrity": "sha512-FNHi6mmoHvs1mxZAds4PpdCS6QG8B4C1krxJsMutgxl5t3+GlRTzzI3NEkifXx2pVsOvJdOGSmIgDhQ55FwdPA==",
      "dev": true,
      "requires": {
        "duplexer": "^0.1.1",
        "pify": "^4.0.1"
      }
    },
    "handle-thing": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/handle-thing/-/handle-thing-2.0.0.tgz",
      "integrity": "sha512-d4sze1JNC454Wdo2fkuyzCr6aHcbL6PGGuFAz0Li/NcOm1tCHGnWDRmJP85dh9IhQErTc2svWFEX5xHIOo//kQ==",
      "dev": true
    },
    "handlebars": {
      "version": "4.5.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/handlebars/-/handlebars-4.5.3.tgz",
      "integrity": "sha512-3yPecJoJHK/4c6aZhSvxOyG4vJKDshV36VHp0iVCDVh7o9w2vwi3NSnL2MMPj3YdduqaBcu7cGbggJQM0br9xA==",
      "dev": true,
      "requires": {
        "neo-async": "^2.6.0",
        "optimist": "^0.6.1",
        "source-map": "^0.6.1",
        "uglify-js": "^3.1.4"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        }
      }
    },
    "har-schema": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/har-schema/-/har-schema-2.0.0.tgz",
      "integrity": "sha1-qUwiJOvKwEeCoNkDVSHyRzW37JI=",
      "dev": true
    },
    "har-validator": {
      "version": "5.1.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/har-validator/-/har-validator-5.1.3.tgz",
      "integrity": "sha512-sNvOCzEQNr/qrvJgc3UG/kD4QtlHycrzwS+6mfTrrSq97BvaYcPZZI1ZSqGSPR73Cxn4LKTD4PttRwfU7jWq5g==",
      "dev": true,
      "requires": {
        "ajv": "^6.5.5",
        "har-schema": "^2.0.0"
      }
    },
    "has": {
      "version": "1.0.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/has/-/has-1.0.3.tgz",
      "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",
      "dev": true,
      "requires": {
        "function-bind": "^1.1.1"
      }
    },
    "has-ansi": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/has-ansi/-/has-ansi-2.0.0.tgz",
      "integrity": "sha1-NPUEnOHs3ysGSa8+8k5F7TVBbZE=",
      "dev": true,
      "requires": {
        "ansi-regex": "^2.0.0"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "2.1.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/ansi-regex/-/ansi-regex-2.1.1.tgz",
          "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",
          "dev": true
        }
      }
    },
    "has-flag": {
      "version": "3.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/has-flag/-/has-flag-3.0.0.tgz",
      "integrity": "sha1-tdRU3CGZriJWmfNGfloH87lVuv0=",
      "dev": true
    },
    "has-symbols": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/has-symbols/-/has-symbols-1.0.1.tgz",
      "integrity": "sha512-PLcsoqu++dmEIZB+6totNFKq/7Do+Z0u4oT0zKOJNl3lYK6vGwwu2hjHs+68OEZbTjiUE9bgOABXbP/GvrS0Kg==",
      "dev": true
    },
    "has-value": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/has-value/-/has-value-1.0.0.tgz",
      "integrity": "sha1-GLKB2lhbHFxR3vJMkw7SmgvmsXc=",
      "dev": true,
      "requires": {
        "get-value": "^2.0.6",
        "has-values": "^1.0.0",
        "isobject": "^3.0.0"
      }
    },
    "has-values": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/has-values/-/has-values-1.0.0.tgz",
      "integrity": "sha1-lbC2P+whRmGab+V/51Yo1aOe/k8=",
      "dev": true,
      "requires": {
        "is-number": "^3.0.0",
        "kind-of": "^4.0.0"
      },
      "dependencies": {
        "kind-of": {
          "version": "4.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/kind-of/-/kind-of-4.0.0.tgz",
          "integrity": "sha1-IIE989cSkosgc3hpGkUGb65y3Vc=",
          "dev": true,
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "hash-base": {
      "version": "3.0.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/hash-base/-/hash-base-3.0.4.tgz",
      "integrity": "sha1-X8hoaEfs1zSZQDMZprCj8/auSRg=",
      "dev": true,
      "requires": {
        "inherits": "^2.0.1",
        "safe-buffer": "^5.0.1"
      }
    },
    "hash-sum": {
      "version": "1.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/hash-sum/-/hash-sum-1.0.2.tgz",
      "integrity": "sha1-M7QHd3VMZDJXPBIMw4CLvRDUfwQ=",
      "dev": true
    },
    "hash.js": {
      "version": "1.1.7",
      "resolved": "http://maven.paic.com.cn/repository/npm/hash.js/-/hash.js-1.1.7.tgz",
      "integrity": "sha512-taOaskGt4z4SOANNseOviYDvjEJinIkRgmp7LbKP2YTTmVxWBl87s/uzK9r+44BclBSp2X7K1hqeNfz9JbBeXA==",
      "dev": true,
      "requires": {
        "inherits": "^2.0.3",
        "minimalistic-assert": "^1.0.1"
      }
    },
    "he": {
      "version": "1.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/he/-/he-1.2.0.tgz",
      "integrity": "sha512-F/1DnUGPopORZi0ni+CvrCgHQ5FyEAHRLSApuYWMmrbSwoN2Mn/7k+Gl38gJnR7yyDZk6WLXwiGod1JOWNDKGw==",
      "dev": true
    },
    "hex-color-regex": {
      "version": "1.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/hex-color-regex/-/hex-color-regex-1.1.0.tgz",
      "integrity": "sha512-l9sfDFsuqtOqKDsQdqrMRk0U85RZc0RtOR9yPI7mRVOa4FsR/BVnZ0shmQRM96Ji99kYZP/7hn1cedc1+ApsTQ==",
      "dev": true
    },
    "highlight.js": {
      "version": "9.17.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/highlight.js/-/highlight.js-9.17.1.tgz",
      "integrity": "sha512-TA2/doAur5Ol8+iM3Ov7qy3jYcr/QiJ2eDTdRF4dfbjG7AaaB99J5G+zSl11ljbl6cIcahgPY6SKb3sC3EJ0fw==",
      "dev": true,
      "requires": {
        "handlebars": "^4.5.3"
      }
    },
    "hmac-drbg": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/hmac-drbg/-/hmac-drbg-1.0.1.tgz",
      "integrity": "sha1-0nRXAQJabHdabFRXk+1QL8DGSaE=",
      "dev": true,
      "requires": {
        "hash.js": "^1.0.3",
        "minimalistic-assert": "^1.0.0",
        "minimalistic-crypto-utils": "^1.0.1"
      }
    },
    "home-or-tmp": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/home-or-tmp/-/home-or-tmp-2.0.0.tgz",
      "integrity": "sha1-42w/LSyufXRqhX440Y1fMqeILbg=",
      "dev": true,
      "requires": {
        "os-homedir": "^1.0.0",
        "os-tmpdir": "^1.0.1"
      }
    },
    "hoopy": {
      "version": "0.1.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/hoopy/-/hoopy-0.1.4.tgz",
      "integrity": "sha512-HRcs+2mr52W0K+x8RzcLzuPPmVIKMSv97RGHy0Ea9y/mpcaK+xTrjICA04KAHi4GRzxliNqNJEFYWHghy3rSfQ==",
      "dev": true
    },
    "hosted-git-info": {
      "version": "2.8.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/hosted-git-info/-/hosted-git-info-2.8.5.tgz",
      "integrity": "sha512-kssjab8CvdXfcXMXVcvsXum4Hwdq9XGtRD3TteMEvEbq0LXyiNQr6AprqKqfeaDXze7SxWvRxdpwE6ku7ikLkg==",
      "dev": true
    },
    "hpack.js": {
      "version": "2.1.6",
      "resolved": "http://maven.paic.com.cn/repository/npm/hpack.js/-/hpack.js-2.1.6.tgz",
      "integrity": "sha1-h3dMCUnlE/QuhFdbPEVoH63ioLI=",
      "dev": true,
      "requires": {
        "inherits": "^2.0.1",
        "obuf": "^1.0.0",
        "readable-stream": "^2.0.1",
        "wbuf": "^1.1.0"
      }
    },
    "hsl-regex": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/hsl-regex/-/hsl-regex-1.0.0.tgz",
      "integrity": "sha1-1JMwx4ntgZ4nakwNJy3/owsY/m4=",
      "dev": true
    },
    "hsla-regex": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/hsla-regex/-/hsla-regex-1.0.0.tgz",
      "integrity": "sha1-wc56MWjIxmFAM6S194d/OyJfnDg=",
      "dev": true
    },
    "html-comment-regex": {
      "version": "1.1.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/html-comment-regex/-/html-comment-regex-1.1.2.tgz",
      "integrity": "sha512-P+M65QY2JQ5Y0G9KKdlDpo0zK+/OHptU5AaBwUfAIDJZk1MYf32Frm84EcOytfJE0t5JvkAnKlmjsXDnWzCJmQ==",
      "dev": true
    },
    "html-encoding-sniffer": {
      "version": "1.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/html-encoding-sniffer/-/html-encoding-sniffer-1.0.2.tgz",
      "integrity": "sha512-71lZziiDnsuabfdYiUeWdCVyKuqwWi23L8YeIgV9jSSZHCtb6wB1BKWooH7L3tn4/FuZJMVWyNaIDr4RGmaSYw==",
      "dev": true,
      "requires": {
        "whatwg-encoding": "^1.0.1"
      }
    },
    "html-entities": {
      "version": "1.2.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/html-entities/-/html-entities-1.2.1.tgz",
      "integrity": "sha1-DfKTUfByEWNRXfueVUPl9u7VFi8=",
      "dev": true
    },
    "html-minifier": {
      "version": "3.5.21",
      "resolved": "http://maven.paic.com.cn/repository/npm/html-minifier/-/html-minifier-3.5.21.tgz",
      "integrity": "sha512-LKUKwuJDhxNa3uf/LPR/KVjm/l3rBqtYeCOAekvG8F1vItxMUpueGd94i/asDDr8/1u7InxzFA5EeGjhhG5mMA==",
      "dev": true,
      "requires": {
        "camel-case": "3.0.x",
        "clean-css": "4.2.x",
        "commander": "2.17.x",
        "he": "1.2.x",
        "param-case": "2.1.x",
        "relateurl": "0.2.x",
        "uglify-js": "3.4.x"
      },
      "dependencies": {
        "commander": {
          "version": "2.17.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/commander/-/commander-2.17.1.tgz",
          "integrity": "sha512-wPMUt6FnH2yzG95SA6mzjQOEKUU3aLaDEmzs1ti+1E9h+CsrZghRlqEM/EJ4KscsQVG8uNN4uVreUeT8+drlgg==",
          "dev": true
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        },
        "uglify-js": {
          "version": "3.4.10",
          "resolved": "http://maven.paic.com.cn/repository/npm/uglify-js/-/uglify-js-3.4.10.tgz",
          "integrity": "sha512-Y2VsbPVs0FIshJztycsO2SfPk7/KAF/T72qzv9u5EpQ4kB2hQoHlhNQTsNyy6ul7lQtqJN/AoWeS23OzEiEFxw==",
          "dev": true,
          "requires": {
            "commander": "~2.19.0",
            "source-map": "~0.6.1"
          },
          "dependencies": {
            "commander": {
              "version": "2.19.0",
              "resolved": "http://maven.paic.com.cn/repository/npm/commander/-/commander-2.19.0.tgz",
              "integrity": "sha512-6tvAOO+D6OENvRAh524Dh9jcfKTYDQAqvqezbCW82xj5X0pSrcpxtvRKHLG0yBY6SD7PSDrJaj+0AiOcKVd1Xg==",
              "dev": true
            }
          }
        }
      }
    },
    "html-tags": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/html-tags/-/html-tags-2.0.0.tgz",
      "integrity": "sha1-ELMKOGCF9Dzt41PMj6fLDe7qZos=",
      "dev": true
    },
    "html-webpack-plugin": {
      "version": "3.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/html-webpack-plugin/-/html-webpack-plugin-3.2.0.tgz",
      "integrity": "sha1-sBq71yOsqqeze2r0SS69oD2d03s=",
      "dev": true,
      "requires": {
        "html-minifier": "^3.2.3",
        "loader-utils": "^0.2.16",
        "lodash": "^4.17.3",
        "pretty-error": "^2.0.2",
        "tapable": "^1.0.0",
        "toposort": "^1.0.0",
        "util.promisify": "1.0.0"
      },
      "dependencies": {
        "big.js": {
          "version": "3.2.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/big.js/-/big.js-3.2.0.tgz",
          "integrity": "sha512-+hN/Zh2D08Mx65pZ/4g5bsmNiZUuChDiQfTUQ7qJr4/kuopCr88xZsAXv6mBoZEsUI4OuGHlX59qE94K2mMW8Q==",
          "dev": true
        },
        "json5": {
          "version": "0.5.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/json5/-/json5-0.5.1.tgz",
          "integrity": "sha1-Hq3nrMASA0rYTiOWdn6tn6VJWCE=",
          "dev": true
        },
        "loader-utils": {
          "version": "0.2.17",
          "resolved": "http://maven.paic.com.cn/repository/npm/loader-utils/-/loader-utils-0.2.17.tgz",
          "integrity": "sha1-+G5jdNQyBabmxg6RlvF8Apm/s0g=",
          "dev": true,
          "requires": {
            "big.js": "^3.1.3",
            "emojis-list": "^2.0.0",
            "json5": "^0.5.0",
            "object-assign": "^4.0.1"
          }
        }
      }
    },
    "htmlparser2": {
      "version": "3.10.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/htmlparser2/-/htmlparser2-3.10.1.tgz",
      "integrity": "sha512-IgieNijUMbkDovyoKObU1DUhm1iwNYE/fuifEoEHfd1oZKZDaONBSkal7Y01shxsM49R4XaMdGez3WnF9UfiCQ==",
      "dev": true,
      "requires": {
        "domelementtype": "^1.3.1",
        "domhandler": "^2.3.0",
        "domutils": "^1.5.1",
        "entities": "^1.1.1",
        "inherits": "^2.0.1",
        "readable-stream": "^3.1.1"
      },
      "dependencies": {
        "entities": {
          "version": "1.1.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/entities/-/entities-1.1.2.tgz",
          "integrity": "sha512-f2LZMYl1Fzu7YSBKg+RoROelpOaNrcGmE9AZubeDfrCEia483oW4MI4VyFd5VNHIgQ/7qm1I0wUHK1eJnn2y2w==",
          "dev": true
        },
        "readable-stream": {
          "version": "3.4.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/readable-stream/-/readable-stream-3.4.0.tgz",
          "integrity": "sha512-jItXPLmrSR8jmTRmRWJXCnGJsfy85mB3Wd/uINMXA65yrnFo0cPClFIUWzo2najVNSl+mx7/4W8ttlLWJe99pQ==",
          "dev": true,
          "requires": {
            "inherits": "^2.0.3",
            "string_decoder": "^1.1.1",
            "util-deprecate": "^1.0.1"
          }
        }
      }
    },
    "http-deceiver": {
      "version": "1.2.7",
      "resolved": "http://maven.paic.com.cn/repository/npm/http-deceiver/-/http-deceiver-1.2.7.tgz",
      "integrity": "sha1-+nFolEq5pRnTN8sL7HKE3D5yPYc=",
      "dev": true
    },
    "http-errors": {
      "version": "1.7.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/http-errors/-/http-errors-1.7.2.tgz",
      "integrity": "sha512-uUQBt3H/cSIVfch6i1EuPNy/YsRSOUBXTVfZ+yR7Zjez3qjBz6i9+i4zjNaoqcoFVI4lQJ5plg63TvGfRSDCRg==",
      "dev": true,
      "requires": {
        "depd": "~1.1.2",
        "inherits": "2.0.3",
        "setprototypeof": "1.1.1",
        "statuses": ">= 1.5.0 < 2",
        "toidentifier": "1.0.0"
      },
      "dependencies": {
        "inherits": {
          "version": "2.0.3",
          "resolved": "http://maven.paic.com.cn/repository/npm/inherits/-/inherits-2.0.3.tgz",
          "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4=",
          "dev": true
        }
      }
    },
    "http-parser-js": {
      "version": "0.4.10",
      "resolved": "http://maven.paic.com.cn/repository/npm/http-parser-js/-/http-parser-js-0.4.10.tgz",
      "integrity": "sha1-ksnBN0w1CF912zWexWzCV8u5P6Q=",
      "dev": true
    },
    "http-proxy": {
      "version": "1.18.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/http-proxy/-/http-proxy-1.18.0.tgz",
      "integrity": "sha512-84I2iJM/n1d4Hdgc6y2+qY5mDaz2PUVjlg9znE9byl+q0uC3DeByqBGReQu5tpLK0TAqTIXScRUV+dg7+bUPpQ==",
      "dev": true,
      "requires": {
        "eventemitter3": "^4.0.0",
        "follow-redirects": "^1.0.0",
        "requires-port": "^1.0.0"
      }
    },
    "http-proxy-middleware": {
      "version": "0.19.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/http-proxy-middleware/-/http-proxy-middleware-0.19.1.tgz",
      "integrity": "sha512-yHYTgWMQO8VvwNS22eLLloAkvungsKdKTLO8AJlftYIKNfJr3GK3zK0ZCfzDDGUBttdGc8xFy1mCitvNKQtC3Q==",
      "dev": true,
      "requires": {
        "http-proxy": "^1.17.0",
        "is-glob": "^4.0.0",
        "lodash": "^4.17.11",
        "micromatch": "^3.1.10"
      }
    },
    "http-signature": {
      "version": "1.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/http-signature/-/http-signature-1.2.0.tgz",
      "integrity": "sha1-muzZJRFHcvPZW2WmCruPfBj7rOE=",
      "dev": true,
      "requires": {
        "assert-plus": "^1.0.0",
        "jsprim": "^1.2.2",
        "sshpk": "^1.7.0"
      }
    },
    "https-browserify": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/https-browserify/-/https-browserify-1.0.0.tgz",
      "integrity": "sha1-7AbBDgo0wPL68Zn3/X/Hj//QPHM=",
      "dev": true
    },
    "human-signals": {
      "version": "1.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/human-signals/-/human-signals-1.1.1.tgz",
      "integrity": "sha512-SEQu7vl8KjNL2eoGBLF3+wAjpsNfA9XMlXAYj/3EdaNfAlxKthD1xjEQfGOUhllCGGJVNY34bRr6lPINhNjyZw==",
      "dev": true
    },
    "iconv-lite": {
      "version": "0.4.24",
      "resolved": "http://maven.paic.com.cn/repository/npm/iconv-lite/-/iconv-lite-0.4.24.tgz",
      "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
      "dev": true,
      "requires": {
        "safer-buffer": ">= 2.1.2 < 3"
      }
    },
    "icss-replace-symbols": {
      "version": "1.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/icss-replace-symbols/-/icss-replace-symbols-1.1.0.tgz",
      "integrity": "sha1-Bupvg2ead0njhs/h/oEq5dsiPe0=",
      "dev": true
    },
    "icss-utils": {
      "version": "2.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/icss-utils/-/icss-utils-2.1.0.tgz",
      "integrity": "sha1-g/Cg7DeL8yRheLbCrZE28TWxyWI=",
      "dev": true,
      "requires": {
        "postcss": "^6.0.1"
      },
      "dependencies": {
        "postcss": {
          "version": "6.0.23",
          "resolved": "http://maven.paic.com.cn/repository/npm/postcss/-/postcss-6.0.23.tgz",
          "integrity": "sha512-soOk1h6J3VMTZtVeVpv15/Hpdl2cBLX3CAw4TAbkpTJiNPk9YP/zWcD1ND+xEtvyuuvKzbxliTOIyvkSeSJ6ag==",
          "dev": true,
          "requires": {
            "chalk": "^2.4.1",
            "source-map": "^0.6.1",
            "supports-color": "^5.4.0"
          }
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        }
      }
    },
    "ieee754": {
      "version": "1.1.13",
      "resolved": "http://maven.paic.com.cn/repository/npm/ieee754/-/ieee754-1.1.13.tgz",
      "integrity": "sha512-4vf7I2LYV/HaWerSo3XmlMkp5eZ83i+/CDluXi/IGTs/O1sejBNhTtnxzmRZfvOUqj7lZjqHkeTvpgSFDlWZTg==",
      "dev": true
    },
    "iferr": {
      "version": "0.1.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/iferr/-/iferr-0.1.5.tgz",
      "integrity": "sha1-xg7taebY/bazEEofy8ocGS3FtQE=",
      "dev": true
    },
    "ignore": {
      "version": "3.3.10",
      "resolved": "http://maven.paic.com.cn/repository/npm/ignore/-/ignore-3.3.10.tgz",
      "integrity": "sha512-Pgs951kaMm5GXP7MOvxERINe3gsaVjUWFm+UZPSq9xYriQAksyhg0csnS0KXSNRD5NmNdapXEpjxG49+AKh/ug==",
      "dev": true
    },
    "image-size": {
      "version": "0.5.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/image-size/-/image-size-0.5.5.tgz",
      "integrity": "sha1-Cd/Uq50g4p6xw+gLiZA3jfnjy5w=",
      "dev": true,
      "optional": true
    },
    "import-cwd": {
      "version": "2.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/import-cwd/-/import-cwd-2.1.0.tgz",
      "integrity": "sha1-qmzzbnInYShcs3HsZRn1PiQ1sKk=",
      "dev": true,
      "requires": {
        "import-from": "^2.1.0"
      }
    },
    "import-fresh": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/import-fresh/-/import-fresh-2.0.0.tgz",
      "integrity": "sha1-2BNVwVYS04bGH53dOSLUMEgipUY=",
      "dev": true,
      "requires": {
        "caller-path": "^2.0.0",
        "resolve-from": "^3.0.0"
      },
      "dependencies": {
        "caller-path": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/caller-path/-/caller-path-2.0.0.tgz",
          "integrity": "sha1-Ro+DBE42mrIBD6xfBs7uFbsssfQ=",
          "dev": true,
          "requires": {
            "caller-callsite": "^2.0.0"
          }
        },
        "resolve-from": {
          "version": "3.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/resolve-from/-/resolve-from-3.0.0.tgz",
          "integrity": "sha1-six699nWiBvItuZTM17rywoYh0g=",
          "dev": true
        }
      }
    },
    "import-from": {
      "version": "2.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/import-from/-/import-from-2.1.0.tgz",
      "integrity": "sha1-M1238qev/VOqpHHUuAId7ja387E=",
      "dev": true,
      "requires": {
        "resolve-from": "^3.0.0"
      },
      "dependencies": {
        "resolve-from": {
          "version": "3.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/resolve-from/-/resolve-from-3.0.0.tgz",
          "integrity": "sha1-six699nWiBvItuZTM17rywoYh0g=",
          "dev": true
        }
      }
    },
    "import-local": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/import-local/-/import-local-1.0.0.tgz",
      "integrity": "sha512-vAaZHieK9qjGo58agRBg+bhHX3hoTZU/Oa3GESWLz7t1U62fk63aHuDJJEteXoDeTCcPmUT+z38gkHPZkkmpmQ==",
      "dev": true,
      "requires": {
        "pkg-dir": "^2.0.0",
        "resolve-cwd": "^2.0.0"
      },
      "dependencies": {
        "pkg-dir": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/pkg-dir/-/pkg-dir-2.0.0.tgz",
          "integrity": "sha1-9tXREJ4Z1j7fQo4L1X4Sd3YVM0s=",
          "dev": true,
          "requires": {
            "find-up": "^2.1.0"
          }
        }
      }
    },
    "imurmurhash": {
      "version": "0.1.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha1-khi5srkoojixPcT7a21XbyMUU+o=",
      "dev": true
    },
    "indexes-of": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/indexes-of/-/indexes-of-1.0.1.tgz",
      "integrity": "sha1-8w9xbI4r00bHtn0985FVZqfAVgc=",
      "dev": true
    },
    "infer-owner": {
      "version": "1.0.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/infer-owner/-/infer-owner-1.0.4.tgz",
      "integrity": "sha512-IClj+Xz94+d7irH5qRyfJonOdfTzuDaifE6ZPWfx0N0+/ATZCbuTPq2prFl526urkQd90WyUKIh1DfBQ2hMz9A==",
      "dev": true
    },
    "inflight": {
      "version": "1.0.6",
      "resolved": "http://maven.paic.com.cn/repository/npm/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha1-Sb1jMdfQLQwJvJEKEHW6gWW1bfk=",
      "dev": true,
      "requires": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "inherits": {
      "version": "2.0.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "dev": true
    },
    "ini": {
      "version": "1.3.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/ini/-/ini-1.3.5.tgz",
      "integrity": "sha512-RZY5huIKCMRWDUqZlEi72f/lmXKMvuszcMBduliQ3nnWbx9X/ZBQO7DijMEYS9EhHBb2qacRUMtC7svLwe0lcw==",
      "dev": true
    },
    "inquirer": {
      "version": "3.3.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/inquirer/-/inquirer-3.3.0.tgz",
      "integrity": "sha512-h+xtnyk4EwKvFWHrUYsWErEVR+igKtLdchu+o0Z1RL7VU/jVMFbYir2bp6bAj8efFNxWqHX0dIss6fJQ+/+qeQ==",
      "dev": true,
      "optional": true,
      "requires": {
        "ansi-escapes": "^3.0.0",
        "chalk": "^2.0.0",
        "cli-cursor": "^2.1.0",
        "cli-width": "^2.0.0",
        "external-editor": "^2.0.4",
        "figures": "^2.0.0",
        "lodash": "^4.3.0",
        "mute-stream": "0.0.7",
        "run-async": "^2.2.0",
        "rx-lite": "^4.0.8",
        "rx-lite-aggregates": "^4.0.8",
        "string-width": "^2.1.0",
        "strip-ansi": "^4.0.0",
        "through": "^2.3.6"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "3.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/ansi-regex/-/ansi-regex-3.0.0.tgz",
          "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
          "dev": true,
          "optional": true
        },
        "strip-ansi": {
          "version": "4.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/strip-ansi/-/strip-ansi-4.0.0.tgz",
          "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
          "dev": true,
          "optional": true,
          "requires": {
            "ansi-regex": "^3.0.0"
          }
        }
      }
    },
    "internal-ip": {
      "version": "4.3.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/internal-ip/-/internal-ip-4.3.0.tgz",
      "integrity": "sha512-S1zBo1D6zcsyuC6PMmY5+55YMILQ9av8lotMx447Bq6SAgo/sDK6y6uUKmuYhW7eacnIhFfsPmCNYdDzsnnDCg==",
      "dev": true,
      "requires": {
        "default-gateway": "^4.2.0",
        "ipaddr.js": "^1.9.0"
      },
      "dependencies": {
        "default-gateway": {
          "version": "4.2.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/default-gateway/-/default-gateway-4.2.0.tgz",
          "integrity": "sha512-h6sMrVB1VMWVrW13mSc6ia/DwYYw5MN6+exNu1OaJeFac5aSAvwM7lZ0NVfTABuSkQelr4h5oebg3KB1XPdjgA==",
          "dev": true,
          "requires": {
            "execa": "^1.0.0",
            "ip-regex": "^2.1.0"
          }
        }
      }
    },
    "interpret": {
      "version": "1.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/interpret/-/interpret-1.2.0.tgz",
      "integrity": "sha512-mT34yGKMNceBQUoVn7iCDKDntA7SC6gycMAWzGx1z/CMCTV7b2AAtXlo3nRyHZ1FelRkQbQjprHSYGwzLtkVbw==",
      "dev": true
    },
    "invariant": {
      "version": "2.2.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/invariant/-/invariant-2.2.4.tgz",
      "integrity": "sha512-phJfQVBuaJM5raOpJjSfkiD6BpbCE4Ns//LaXl6wGYtUBY83nWS6Rf9tXm2e8VaK60JEjYldbPif/A2B1C2gNA==",
      "dev": true,
      "requires": {
        "loose-envify": "^1.0.0"
      }
    },
    "invert-kv": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/invert-kv/-/invert-kv-2.0.0.tgz",
      "integrity": "sha512-wPVv/y/QQ/Uiirj/vh3oP+1Ww+AWehmi1g5fFWGPF6IpCBCDVrhgHRMvrLfdYcwDh3QJbGXDW4JAuzxElLSqKA==",
      "dev": true
    },
    "ip": {
      "version": "1.1.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/ip/-/ip-1.1.5.tgz",
      "integrity": "sha1-vd7XARQpCCjAoDnnLvJfWq7ENUo=",
      "dev": true
    },
    "ip-regex": {
      "version": "2.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/ip-regex/-/ip-regex-2.1.0.tgz",
      "integrity": "sha1-+ni/XS5pE8kRzp+BnuUUa7bYROk=",
      "dev": true
    },
    "ipaddr.js": {
      "version": "1.9.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/ipaddr.js/-/ipaddr.js-1.9.0.tgz",
      "integrity": "sha512-M4Sjn6N/+O6/IXSJseKqHoFc+5FdGJ22sXqnjTpdZweHK64MzEPAyQZyEU3R/KRv2GLoa7nNtg/C2Ev6m7z+eA==",
      "dev": true
    },
    "is-absolute-url": {
      "version": "2.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-absolute-url/-/is-absolute-url-2.1.0.tgz",
      "integrity": "sha1-UFMN+4T8yap9vnhS6Do3uTufKqY=",
      "dev": true
    },
    "is-accessor-descriptor": {
      "version": "0.1.6",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-accessor-descriptor/-/is-accessor-descriptor-0.1.6.tgz",
      "integrity": "sha1-qeEss66Nh2cn7u84Q/igiXtcmNY=",
      "dev": true,
      "requires": {
        "kind-of": "^3.0.2"
      },
      "dependencies": {
        "kind-of": {
          "version": "3.2.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "dev": true,
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "is-arguments": {
      "version": "1.0.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-arguments/-/is-arguments-1.0.4.tgz",
      "integrity": "sha512-xPh0Rmt8NE65sNzvyUmWgI1tz3mKq74lGA0mL8LYZcoIzKOzDh6HmrYm3d18k60nHerC8A9Km8kYu87zfSFnLA==",
      "dev": true
    },
    "is-arrayish": {
      "version": "0.2.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-arrayish/-/is-arrayish-0.2.1.tgz",
      "integrity": "sha1-d8mYQFJ6qOyxqLppe4BkWnqSap0=",
      "dev": true
    },
    "is-binary-path": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-binary-path/-/is-binary-path-1.0.1.tgz",
      "integrity": "sha1-dfFmQrSA8YenEcgUFh/TpKdlWJg=",
      "dev": true,
      "requires": {
        "binary-extensions": "^1.0.0"
      }
    },
    "is-buffer": {
      "version": "1.1.6",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-buffer/-/is-buffer-1.1.6.tgz",
      "integrity": "sha512-NcdALwpXkTm5Zvvbk7owOUSvVvBKDgKP5/ewfXEznmQFfs4ZRmanOeKBTjRVjka3QFoN6XJ+9F3USqfHqTaU5w==",
      "dev": true
    },
    "is-callable": {
      "version": "1.1.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-callable/-/is-callable-1.1.4.tgz",
      "integrity": "sha512-r5p9sxJjYnArLjObpjA4xu5EKI3CuKHkJXMhT7kwbpUyIFD1n5PMAsoPvWnvtZiNz7LjkYDRZhd7FlI0eMijEA==",
      "dev": true
    },
    "is-ci": {
      "version": "1.2.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-ci/-/is-ci-1.2.1.tgz",
      "integrity": "sha512-s6tfsaQaQi3JNciBH6shVqEDvhGut0SUXr31ag8Pd8BBbVVlcGfWhpPmEOoM6RJ5TFhbypvf5yyRw/VXW1IiWg==",
      "dev": true,
      "requires": {
        "ci-info": "^1.5.0"
      }
    },
    "is-color-stop": {
      "version": "1.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-color-stop/-/is-color-stop-1.1.0.tgz",
      "integrity": "sha1-z/9HGu5N1cnhWFmPvhKWe1za00U=",
      "dev": true,
      "requires": {
        "css-color-names": "^0.0.4",
        "hex-color-regex": "^1.1.0",
        "hsl-regex": "^1.0.0",
        "hsla-regex": "^1.0.0",
        "rgb-regex": "^1.0.1",
        "rgba-regex": "^1.0.0"
      }
    },
    "is-data-descriptor": {
      "version": "0.1.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-data-descriptor/-/is-data-descriptor-0.1.4.tgz",
      "integrity": "sha1-C17mSDiOLIYCgueT8YVv7D8wG1Y=",
      "dev": true,
      "requires": {
        "kind-of": "^3.0.2"
      },
      "dependencies": {
        "kind-of": {
          "version": "3.2.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "dev": true,
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "is-date-object": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-date-object/-/is-date-object-1.0.1.tgz",
      "integrity": "sha1-mqIOtq7rv/d/vTPnTKAbM1gdOhY=",
      "dev": true
    },
    "is-descriptor": {
      "version": "0.1.6",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-descriptor/-/is-descriptor-0.1.6.tgz",
      "integrity": "sha512-avDYr0SB3DwO9zsMov0gKCESFYqCnE4hq/4z3TdUlukEy5t9C0YRq7HLrsN52NAcqXKaepeCD0n+B0arnVG3Hg==",
      "dev": true,
      "requires": {
        "is-accessor-descriptor": "^0.1.6",
        "is-data-descriptor": "^0.1.4",
        "kind-of": "^5.0.0"
      },
      "dependencies": {
        "kind-of": {
          "version": "5.1.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/kind-of/-/kind-of-5.1.0.tgz",
          "integrity": "sha512-NGEErnH6F2vUuXDh+OlbcKW7/wOcfdRHaZ7VWtqCztfHri/++YKmP51OdWeGPuqCOba6kk2OTe5d02VmTB80Pw==",
          "dev": true
        }
      }
    },
    "is-directory": {
      "version": "0.3.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-directory/-/is-directory-0.3.1.tgz",
      "integrity": "sha1-YTObbyR1/Hcv2cnYP1yFddwVSuE=",
      "dev": true
    },
    "is-dotfile": {
      "version": "1.0.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-dotfile/-/is-dotfile-1.0.3.tgz",
      "integrity": "sha1-pqLzL/0t+wT1yiXs0Pa4PPeYoeE=",
      "dev": true
    },
    "is-equal-shallow": {
      "version": "0.1.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-equal-shallow/-/is-equal-shallow-0.1.3.tgz",
      "integrity": "sha1-IjgJj8Ih3gvPpdnqxMRdY4qhxTQ=",
      "dev": true,
      "requires": {
        "is-primitive": "^2.0.0"
      }
    },
    "is-extendable": {
      "version": "0.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-extendable/-/is-extendable-0.1.1.tgz",
      "integrity": "sha1-YrEQ4omkcUGOPsNqYX1HLjAd/Ik=",
      "dev": true
    },
    "is-extglob": {
      "version": "2.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha1-qIwCU1eR8C7TfHahueqXc8gz+MI=",
      "dev": true
    },
    "is-finite": {
      "version": "1.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-finite/-/is-finite-1.0.2.tgz",
      "integrity": "sha1-zGZ3aVYCvlUO8R6LSqYwU0K20Ko=",
      "dev": true,
      "requires": {
        "number-is-nan": "^1.0.0"
      }
    },
    "is-fullwidth-code-point": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-fullwidth-code-point/-/is-fullwidth-code-point-2.0.0.tgz",
      "integrity": "sha1-o7MKXE8ZkYMWeqq5O+764937ZU8=",
      "dev": true
    },
    "is-generator-fn": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-generator-fn/-/is-generator-fn-1.0.0.tgz",
      "integrity": "sha1-lp1J4bszKfa7fwkIm+JleLLd1Go=",
      "dev": true
    },
    "is-glob": {
      "version": "4.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-glob/-/is-glob-4.0.1.tgz",
      "integrity": "sha512-5G0tKtBTFImOqDnLB2hG6Bp2qcKEFduo4tZu9MT/H6NQv/ghhy30o55ufafxJ/LdH79LLs2Kfrn85TLKyA7BUg==",
      "dev": true,
      "requires": {
        "is-extglob": "^2.1.1"
      }
    },
    "is-number": {
      "version": "3.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-number/-/is-number-3.0.0.tgz",
      "integrity": "sha1-JP1iAaR4LPUFYcgQJ2r8fRLXEZU=",
      "dev": true,
      "requires": {
        "kind-of": "^3.0.2"
      },
      "dependencies": {
        "kind-of": {
          "version": "3.2.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "dev": true,
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "is-obj": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-obj/-/is-obj-1.0.1.tgz",
      "integrity": "sha1-PkcprB9f3gJc19g6iW2rn09n2w8=",
      "dev": true
    },
    "is-path-cwd": {
      "version": "2.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-path-cwd/-/is-path-cwd-2.2.0.tgz",
      "integrity": "sha512-w942bTcih8fdJPJmQHFzkS76NEP8Kzzvmw92cXsazb8intwLqPibPPdXf4ANdKV3rYMuuQYGIWtvz9JilB3NFQ==",
      "dev": true
    },
    "is-path-in-cwd": {
      "version": "2.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-path-in-cwd/-/is-path-in-cwd-2.1.0.tgz",
      "integrity": "sha512-rNocXHgipO+rvnP6dk3zI20RpOtrAM/kzbB258Uw5BWr3TpXi861yzjo16Dn4hUox07iw5AyeMLHWsujkjzvRQ==",
      "dev": true,
      "requires": {
        "is-path-inside": "^2.1.0"
      }
    },
    "is-path-inside": {
      "version": "2.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-path-inside/-/is-path-inside-2.1.0.tgz",
      "integrity": "sha512-wiyhTzfDWsvwAW53OBWF5zuvaOGlZ6PwYxAbPVDhpm+gM09xKQGjBq/8uYN12aDvMxnAnq3dxTyoSoRNmg5YFg==",
      "dev": true,
      "requires": {
        "path-is-inside": "^1.0.2"
      }
    },
    "is-plain-obj": {
      "version": "1.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-plain-obj/-/is-plain-obj-1.1.0.tgz",
      "integrity": "sha1-caUMhCnfync8kqOQpKA7OfzVHT4=",
      "dev": true
    },
    "is-plain-object": {
      "version": "2.0.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-plain-object/-/is-plain-object-2.0.4.tgz",
      "integrity": "sha512-h5PpgXkWitc38BBMYawTYMWJHFZJVnBquFE57xFpjB8pJFiF6gZ+bU+WyI/yqXiFR5mdLsgYNaPe8uao6Uv9Og==",
      "dev": true,
      "requires": {
        "isobject": "^3.0.1"
      }
    },
    "is-posix-bracket": {
      "version": "0.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-posix-bracket/-/is-posix-bracket-0.1.1.tgz",
      "integrity": "sha1-MzTceXdDaOkvAW5vvAqI9c1ua8Q=",
      "dev": true
    },
    "is-primitive": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-primitive/-/is-primitive-2.0.0.tgz",
      "integrity": "sha1-IHurkWOEmcB7Kt8kCkGochADRXU=",
      "dev": true
    },
    "is-promise": {
      "version": "2.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-promise/-/is-promise-2.1.0.tgz",
      "integrity": "sha1-eaKp7OfwlugPNtKy87wWwf9L8/o=",
      "dev": true
    },
    "is-regex": {
      "version": "1.0.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-regex/-/is-regex-1.0.5.tgz",
      "integrity": "sha512-vlKW17SNq44owv5AQR3Cq0bQPEb8+kF3UKZ2fiZNOWtztYE5i0CzCZxFDwO58qAOWtxdBRVO/V5Qin1wjCqFYQ==",
      "dev": true,
      "requires": {
        "has": "^1.0.3"
      }
    },
    "is-resolvable": {
      "version": "1.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-resolvable/-/is-resolvable-1.1.0.tgz",
      "integrity": "sha512-qgDYXFSR5WvEfuS5dMj6oTMEbrrSaM0CrFk2Yiq/gXnBvD9pMa2jGXxyhGLfvhZpuMZe18CJpFxAt3CRs42NMg==",
      "dev": true
    },
    "is-stream": {
      "version": "1.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-stream/-/is-stream-1.1.0.tgz",
      "integrity": "sha1-EtSj3U5o4Lec6428hBc66A2RykQ=",
      "dev": true
    },
    "is-svg": {
      "version": "3.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-svg/-/is-svg-3.0.0.tgz",
      "integrity": "sha512-gi4iHK53LR2ujhLVVj+37Ykh9GLqYHX6JOVXbLAucaG/Cqw9xwdFOjDM2qeifLs1sF1npXXFvDu0r5HNgCMrzQ==",
      "dev": true,
      "requires": {
        "html-comment-regex": "^1.1.0"
      }
    },
    "is-symbol": {
      "version": "1.0.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-symbol/-/is-symbol-1.0.3.tgz",
      "integrity": "sha512-OwijhaRSgqvhm/0ZdAcXNZt9lYdKFpcRDT5ULUuYXPoT794UNOdU+gpT6Rzo7b4V2HUl/op6GqY894AZwv9faQ==",
      "dev": true,
      "requires": {
        "has-symbols": "^1.0.1"
      }
    },
    "is-typedarray": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-typedarray/-/is-typedarray-1.0.0.tgz",
      "integrity": "sha1-5HnICFjfDBsR3dppQPlgEfzaSpo=",
      "dev": true
    },
    "is-utf8": {
      "version": "0.2.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-utf8/-/is-utf8-0.2.1.tgz",
      "integrity": "sha1-Sw2hRCEE0bM2NA6AeX6GXPOffXI=",
      "dev": true
    },
    "is-whitespace": {
      "version": "0.3.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-whitespace/-/is-whitespace-0.3.0.tgz",
      "integrity": "sha1-Fjnssb4DauxppUy7QBz77XEUq38=",
      "dev": true
    },
    "is-windows": {
      "version": "1.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-windows/-/is-windows-1.0.2.tgz",
      "integrity": "sha512-eXK1UInq2bPmjyX6e3VHIzMLobc4J94i4AWn+Hpq3OU5KkrRC96OAcR3PRJ/pGu6m8TRnBHP9dkXQVsT/COVIA==",
      "dev": true
    },
    "is-wsl": {
      "version": "1.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/is-wsl/-/is-wsl-1.1.0.tgz",
      "integrity": "sha1-HxbkqiKwTRM2tmGIpmrzxgDDpm0=",
      "dev": true
    },
    "isarray": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/isarray/-/isarray-1.0.0.tgz",
      "integrity": "sha1-u5NdSFgsuhaMBoNJV6VKPgcSTxE=",
      "dev": true
    },
    "isexe": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha1-6PvzdNxVb/iUehDcsFctYz8s+hA=",
      "dev": true
    },
    "isobject": {
      "version": "3.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/isobject/-/isobject-3.0.1.tgz",
      "integrity": "sha1-TkMekrEalzFjaqH5yNHMvP2reN8=",
      "dev": true
    },
    "isstream": {
      "version": "0.1.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/isstream/-/isstream-0.1.2.tgz",
      "integrity": "sha1-R+Y/evVa+m+S4VAOaQ64uFKcCZo=",
      "dev": true
    },
    "istanbul-api": {
      "version": "1.3.7",
      "resolved": "http://maven.paic.com.cn/repository/npm/istanbul-api/-/istanbul-api-1.3.7.tgz",
      "integrity": "sha512-4/ApBnMVeEPG3EkSzcw25wDe4N66wxwn+KKn6b47vyek8Xb3NBAcg4xfuQbS7BqcZuTX4wxfD5lVagdggR3gyA==",
      "dev": true,
      "requires": {
        "async": "^2.1.4",
        "fileset": "^2.0.2",
        "istanbul-lib-coverage": "^1.2.1",
        "istanbul-lib-hook": "^1.2.2",
        "istanbul-lib-instrument": "^1.10.2",
        "istanbul-lib-report": "^1.1.5",
        "istanbul-lib-source-maps": "^1.2.6",
        "istanbul-reports": "^1.5.1",
        "js-yaml": "^3.7.0",
        "mkdirp": "^0.5.1",
        "once": "^1.4.0"
      }
    },
    "istanbul-lib-coverage": {
      "version": "1.2.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/istanbul-lib-coverage/-/istanbul-lib-coverage-1.2.1.tgz",
      "integrity": "sha512-PzITeunAgyGbtY1ibVIUiV679EFChHjoMNRibEIobvmrCRaIgwLxNucOSimtNWUhEib/oO7QY2imD75JVgCJWQ==",
      "dev": true
    },
    "istanbul-lib-hook": {
      "version": "1.2.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/istanbul-lib-hook/-/istanbul-lib-hook-1.2.2.tgz",
      "integrity": "sha512-/Jmq7Y1VeHnZEQ3TL10VHyb564mn6VrQXHchON9Jf/AEcmQ3ZIiyD1BVzNOKTZf/G3gE+kiGK6SmpF9y3qGPLw==",
      "dev": true,
      "requires": {
        "append-transform": "^0.4.0"
      }
    },
    "istanbul-lib-instrument": {
      "version": "1.10.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/istanbul-lib-instrument/-/istanbul-lib-instrument-1.10.2.tgz",
      "integrity": "sha512-aWHxfxDqvh/ZlxR8BBaEPVSWDPUkGD63VjGQn3jcw8jCp7sHEMKcrj4xfJn/ABzdMEHiQNyvDQhqm5o8+SQg7A==",
      "dev": true,
      "requires": {
        "babel-generator": "^6.18.0",
        "babel-template": "^6.16.0",
        "babel-traverse": "^6.18.0",
        "babel-types": "^6.18.0",
        "babylon": "^6.18.0",
        "istanbul-lib-coverage": "^1.2.1",
        "semver": "^5.3.0"
      }
    },
    "istanbul-lib-report": {
      "version": "1.1.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/istanbul-lib-report/-/istanbul-lib-report-1.1.5.tgz",
      "integrity": "sha512-UsYfRMoi6QO/doUshYNqcKJqVmFe9w51GZz8BS3WB0lYxAllQYklka2wP9+dGZeHYaWIdcXUx8JGdbqaoXRXzw==",
      "dev": true,
      "requires": {
        "istanbul-lib-coverage": "^1.2.1",
        "mkdirp": "^0.5.1",
        "path-parse": "^1.0.5",
        "supports-color": "^3.1.2"
      },
      "dependencies": {
        "has-flag": {
          "version": "1.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/has-flag/-/has-flag-1.0.0.tgz",
          "integrity": "sha1-nZ55MWXOAXoA8AQYxD+UKnsdEfo=",
          "dev": true
        },
        "supports-color": {
          "version": "3.2.3",
          "resolved": "http://maven.paic.com.cn/repository/npm/supports-color/-/supports-color-3.2.3.tgz",
          "integrity": "sha1-ZawFBLOVQXHYpklGsq48u4pfVPY=",
          "dev": true,
          "requires": {
            "has-flag": "^1.0.0"
          }
        }
      }
    },
    "istanbul-lib-source-maps": {
      "version": "1.2.6",
      "resolved": "http://maven.paic.com.cn/repository/npm/istanbul-lib-source-maps/-/istanbul-lib-source-maps-1.2.6.tgz",
      "integrity": "sha512-TtbsY5GIHgbMsMiRw35YBHGpZ1DVFEO19vxxeiDMYaeOFOCzfnYVxvl6pOUIZR4dtPhAGpSMup8OyF8ubsaqEg==",
      "dev": true,
      "requires": {
        "debug": "^3.1.0",
        "istanbul-lib-coverage": "^1.2.1",
        "mkdirp": "^0.5.1",
        "rimraf": "^2.6.1",
        "source-map": "^0.5.3"
      },
      "dependencies": {
        "debug": {
          "version": "3.2.6",
          "resolved": "http://maven.paic.com.cn/repository/npm/debug/-/debug-3.2.6.tgz",
          "integrity": "sha512-mel+jf7nrtEl5Pn1Qx46zARXKDpBbvzezse7p7LqINmdoIk8PYP5SySaxEmYv6TZ0JyEKA1hsCId6DIhgITtWQ==",
          "dev": true,
          "requires": {
            "ms": "^2.1.1"
          }
        }
      }
    },
    "istanbul-reports": {
      "version": "1.5.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/istanbul-reports/-/istanbul-reports-1.5.1.tgz",
      "integrity": "sha512-+cfoZ0UXzWjhAdzosCPP3AN8vvef8XDkWtTfgaN+7L3YTpNYITnCaEkceo5SEYy644VkHka/P1FvkWvrG/rrJw==",
      "dev": true,
      "requires": {
        "handlebars": "^4.0.3"
      }
    },
    "iview": {
      "version": "4.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/iview/-/iview-4.0.0.tgz",
      "integrity": "sha512-iyoYkjAJXWPaa5fn3aNMCron0BY03Kl6Tbt62Jtcf7qLXhKkVUhSxEgmj2fkFvrTL4FkTLPFHn3EdeeZGkL8+g==",
      "requires": {
        "async-validator": "^1.10.0",
        "deepmerge": "^2.2.1",
        "element-resize-detector": "^1.2.0",
        "js-calendar": "^1.2.3",
        "lodash.throttle": "^4.1.1",
        "popper.js": "^1.14.6",
        "tinycolor2": "^1.4.1",
        "v-click-outside-x": "^3.7.1"
      },
      "dependencies": {
        "deepmerge": {
          "version": "2.2.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/deepmerge/-/deepmerge-2.2.1.tgz",
          "integrity": "sha512-R9hc1Xa/NOBi9WRVUWg19rl1UB7Tt4kuPd+thNJgFZoxXsTz7ncaPaeIm+40oSGuP33DfMb4sZt1QIGiJzC4EA=="
        }
      }
    },
    "javascript-stringify": {
      "version": "1.6.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/javascript-stringify/-/javascript-stringify-1.6.0.tgz",
      "integrity": "sha1-FC0RHzpuPa6PSpr9d9RYVbWpzOM=",
      "dev": true
    },
    "jest": {
      "version": "23.6.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/jest/-/jest-23.6.0.tgz",
      "integrity": "sha512-lWzcd+HSiqeuxyhG+EnZds6iO3Y3ZEnMrfZq/OTGvF/C+Z4fPMCdhWTGSAiO2Oym9rbEXfwddHhh6jqrTF3+Lw==",
      "dev": true,
      "requires": {
        "import-local": "^1.0.0",
        "jest-cli": "^23.6.0"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "3.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/ansi-regex/-/ansi-regex-3.0.0.tgz",
          "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
          "dev": true
        },
        "arr-diff": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/arr-diff/-/arr-diff-2.0.0.tgz",
          "integrity": "sha1-jzuCf5Vai9ZpaX5KQlasPOrjVs8=",
          "dev": true,
          "requires": {
            "arr-flatten": "^1.0.1"
          }
        },
        "array-unique": {
          "version": "0.2.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/array-unique/-/array-unique-0.2.1.tgz",
          "integrity": "sha1-odl8yvy8JiXMcPrc6zalDFiwGlM=",
          "dev": true
        },
        "braces": {
          "version": "1.8.5",
          "resolved": "http://maven.paic.com.cn/repository/npm/braces/-/braces-1.8.5.tgz",
          "integrity": "sha1-uneWLhLf+WnWt2cR6RS3N4V79qc=",
          "dev": true,
          "requires": {
            "expand-range": "^1.8.1",
            "preserve": "^0.2.0",
            "repeat-element": "^1.1.2"
          }
        },
        "expand-brackets": {
          "version": "0.1.5",
          "resolved": "http://maven.paic.com.cn/repository/npm/expand-brackets/-/expand-brackets-0.1.5.tgz",
          "integrity": "sha1-3wcoTjQqgHzXM6xa9yQR5YHRF3s=",
          "dev": true,
          "requires": {
            "is-posix-bracket": "^0.1.0"
          }
        },
        "extglob": {
          "version": "0.3.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/extglob/-/extglob-0.3.2.tgz",
          "integrity": "sha1-Lhj/PS9JqydlzskCPwEdqo2DSaE=",
          "dev": true,
          "requires": {
            "is-extglob": "^1.0.0"
          }
        },
        "is-extglob": {
          "version": "1.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-extglob/-/is-extglob-1.0.0.tgz",
          "integrity": "sha1-rEaBd8SUNAWgkvyPKXYMb/xiBsA=",
          "dev": true
        },
        "is-glob": {
          "version": "2.0.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-glob/-/is-glob-2.0.1.tgz",
          "integrity": "sha1-0Jb5JqPe1WAPP9/ZEZjLCIjC2GM=",
          "dev": true,
          "requires": {
            "is-extglob": "^1.0.0"
          }
        },
        "jest-cli": {
          "version": "23.6.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/jest-cli/-/jest-cli-23.6.0.tgz",
          "integrity": "sha512-hgeD1zRUp1E1zsiyOXjEn4LzRLWdJBV//ukAHGlx6s5mfCNJTbhbHjgxnDUXA8fsKWN/HqFFF6X5XcCwC/IvYQ==",
          "dev": true,
          "requires": {
            "ansi-escapes": "^3.0.0",
            "chalk": "^2.0.1",
            "exit": "^0.1.2",
            "glob": "^7.1.2",
            "graceful-fs": "^4.1.11",
            "import-local": "^1.0.0",
            "is-ci": "^1.0.10",
            "istanbul-api": "^1.3.1",
            "istanbul-lib-coverage": "^1.2.0",
            "istanbul-lib-instrument": "^1.10.1",
            "istanbul-lib-source-maps": "^1.2.4",
            "jest-changed-files": "^23.4.2",
            "jest-config": "^23.6.0",
            "jest-environment-jsdom": "^23.4.0",
            "jest-get-type": "^22.1.0",
            "jest-haste-map": "^23.6.0",
            "jest-message-util": "^23.4.0",
            "jest-regex-util": "^23.3.0",
            "jest-resolve-dependencies": "^23.6.0",
            "jest-runner": "^23.6.0",
            "jest-runtime": "^23.6.0",
            "jest-snapshot": "^23.6.0",
            "jest-util": "^23.4.0",
            "jest-validate": "^23.6.0",
            "jest-watcher": "^23.4.0",
            "jest-worker": "^23.2.0",
            "micromatch": "^2.3.11",
            "node-notifier": "^5.2.1",
            "prompts": "^0.1.9",
            "realpath-native": "^1.0.0",
            "rimraf": "^2.5.4",
            "slash": "^1.0.0",
            "string-length": "^2.0.0",
            "strip-ansi": "^4.0.0",
            "which": "^1.2.12",
            "yargs": "^11.0.0"
          }
        },
        "kind-of": {
          "version": "3.2.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "dev": true,
          "requires": {
            "is-buffer": "^1.1.5"
          }
        },
        "micromatch": {
          "version": "2.3.11",
          "resolved": "http://maven.paic.com.cn/repository/npm/micromatch/-/micromatch-2.3.11.tgz",
          "integrity": "sha1-hmd8l9FyCzY0MdBNDRUpO9OMFWU=",
          "dev": true,
          "requires": {
            "arr-diff": "^2.0.0",
            "array-unique": "^0.2.1",
            "braces": "^1.8.2",
            "expand-brackets": "^0.1.4",
            "extglob": "^0.3.1",
            "filename-regex": "^2.0.0",
            "is-extglob": "^1.0.0",
            "is-glob": "^2.0.1",
            "kind-of": "^3.0.2",
            "normalize-path": "^2.0.1",
            "object.omit": "^2.0.0",
            "parse-glob": "^3.0.4",
            "regex-cache": "^0.4.2"
          }
        },
        "normalize-path": {
          "version": "2.1.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/normalize-path/-/normalize-path-2.1.1.tgz",
          "integrity": "sha1-GrKLVW4Zg2Oowab35vogE3/mrtk=",
          "dev": true,
          "requires": {
            "remove-trailing-separator": "^1.0.1"
          }
        },
        "slash": {
          "version": "1.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/slash/-/slash-1.0.0.tgz",
          "integrity": "sha1-xB8vbDn8FtHNF61LXYlhFK5HDVU=",
          "dev": true
        },
        "strip-ansi": {
          "version": "4.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/strip-ansi/-/strip-ansi-4.0.0.tgz",
          "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
          "dev": true,
          "requires": {
            "ansi-regex": "^3.0.0"
          }
        }
      }
    },
    "jest-changed-files": {
      "version": "23.4.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/jest-changed-files/-/jest-changed-files-23.4.2.tgz",
      "integrity": "sha512-EyNhTAUWEfwnK0Is/09LxoqNDOn7mU7S3EHskG52djOFS/z+IT0jT3h3Ql61+dklcG7bJJitIWEMB4Sp1piHmA==",
      "dev": true,
      "requires": {
        "throat": "^4.0.0"
      }
    },
    "jest-config": {
      "version": "23.6.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/jest-config/-/jest-config-23.6.0.tgz",
      "integrity": "sha512-i8V7z9BeDXab1+VNo78WM0AtWpBRXJLnkT+lyT+Slx/cbP5sZJ0+NDuLcmBE5hXAoK0aUp7vI+MOxR+R4d8SRQ==",
      "dev": true,
      "requires": {
        "babel-core": "^6.0.0",
        "babel-jest": "^23.6.0",
        "chalk": "^2.0.1",
        "glob": "^7.1.1",
        "jest-environment-jsdom": "^23.4.0",
        "jest-environment-node": "^23.4.0",
        "jest-get-type": "^22.1.0",
        "jest-jasmine2": "^23.6.0",
        "jest-regex-util": "^23.3.0",
        "jest-resolve": "^23.6.0",
        "jest-util": "^23.4.0",
        "jest-validate": "^23.6.0",
        "micromatch": "^2.3.11",
        "pretty-format": "^23.6.0"
      },
      "dependencies": {
        "arr-diff": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/arr-diff/-/arr-diff-2.0.0.tgz",
          "integrity": "sha1-jzuCf5Vai9ZpaX5KQlasPOrjVs8=",
          "dev": true,
          "requires": {
            "arr-flatten": "^1.0.1"
          }
        },
        "array-unique": {
          "version": "0.2.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/array-unique/-/array-unique-0.2.1.tgz",
          "integrity": "sha1-odl8yvy8JiXMcPrc6zalDFiwGlM=",
          "dev": true
        },
        "babel-core": {
          "version": "6.26.3",
          "resolved": "http://maven.paic.com.cn/repository/npm/babel-core/-/babel-core-6.26.3.tgz",
          "integrity": "sha512-6jyFLuDmeidKmUEb3NM+/yawG0M2bDZ9Z1qbZP59cyHLz8kYGKYwpJP0UwUKKUiTRNvxfLesJnTedqczP7cTDA==",
          "dev": true,
          "requires": {
            "babel-code-frame": "^6.26.0",
            "babel-generator": "^6.26.0",
            "babel-helpers": "^6.24.1",
            "babel-messages": "^6.23.0",
            "babel-register": "^6.26.0",
            "babel-runtime": "^6.26.0",
            "babel-template": "^6.26.0",
            "babel-traverse": "^6.26.0",
            "babel-types": "^6.26.0",
            "babylon": "^6.18.0",
            "convert-source-map": "^1.5.1",
            "debug": "^2.6.9",
            "json5": "^0.5.1",
            "lodash": "^4.17.4",
            "minimatch": "^3.0.4",
            "path-is-absolute": "^1.0.1",
            "private": "^0.1.8",
            "slash": "^1.0.0",
            "source-map": "^0.5.7"
          }
        },
        "braces": {
          "version": "1.8.5",
          "resolved": "http://maven.paic.com.cn/repository/npm/braces/-/braces-1.8.5.tgz",
          "integrity": "sha1-uneWLhLf+WnWt2cR6RS3N4V79qc=",
          "dev": true,
          "requires": {
            "expand-range": "^1.8.1",
            "preserve": "^0.2.0",
            "repeat-element": "^1.1.2"
          }
        },
        "debug": {
          "version": "2.6.9",
          "resolved": "http://maven.paic.com.cn/repository/npm/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "requires": {
            "ms": "2.0.0"
          }
        },
        "expand-brackets": {
          "version": "0.1.5",
          "resolved": "http://maven.paic.com.cn/repository/npm/expand-brackets/-/expand-brackets-0.1.5.tgz",
          "integrity": "sha1-3wcoTjQqgHzXM6xa9yQR5YHRF3s=",
          "dev": true,
          "requires": {
            "is-posix-bracket": "^0.1.0"
          }
        },
        "extglob": {
          "version": "0.3.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/extglob/-/extglob-0.3.2.tgz",
          "integrity": "sha1-Lhj/PS9JqydlzskCPwEdqo2DSaE=",
          "dev": true,
          "requires": {
            "is-extglob": "^1.0.0"
          }
        },
        "is-extglob": {
          "version": "1.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-extglob/-/is-extglob-1.0.0.tgz",
          "integrity": "sha1-rEaBd8SUNAWgkvyPKXYMb/xiBsA=",
          "dev": true
        },
        "is-glob": {
          "version": "2.0.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-glob/-/is-glob-2.0.1.tgz",
          "integrity": "sha1-0Jb5JqPe1WAPP9/ZEZjLCIjC2GM=",
          "dev": true,
          "requires": {
            "is-extglob": "^1.0.0"
          }
        },
        "json5": {
          "version": "0.5.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/json5/-/json5-0.5.1.tgz",
          "integrity": "sha1-Hq3nrMASA0rYTiOWdn6tn6VJWCE=",
          "dev": true
        },
        "kind-of": {
          "version": "3.2.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "dev": true,
          "requires": {
            "is-buffer": "^1.1.5"
          }
        },
        "micromatch": {
          "version": "2.3.11",
          "resolved": "http://maven.paic.com.cn/repository/npm/micromatch/-/micromatch-2.3.11.tgz",
          "integrity": "sha1-hmd8l9FyCzY0MdBNDRUpO9OMFWU=",
          "dev": true,
          "requires": {
            "arr-diff": "^2.0.0",
            "array-unique": "^0.2.1",
            "braces": "^1.8.2",
            "expand-brackets": "^0.1.4",
            "extglob": "^0.3.1",
            "filename-regex": "^2.0.0",
            "is-extglob": "^1.0.0",
            "is-glob": "^2.0.1",
            "kind-of": "^3.0.2",
            "normalize-path": "^2.0.1",
            "object.omit": "^2.0.0",
            "parse-glob": "^3.0.4",
            "regex-cache": "^0.4.2"
          }
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
          "dev": true
        },
        "normalize-path": {
          "version": "2.1.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/normalize-path/-/normalize-path-2.1.1.tgz",
          "integrity": "sha1-GrKLVW4Zg2Oowab35vogE3/mrtk=",
          "dev": true,
          "requires": {
            "remove-trailing-separator": "^1.0.1"
          }
        },
        "slash": {
          "version": "1.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/slash/-/slash-1.0.0.tgz",
          "integrity": "sha1-xB8vbDn8FtHNF61LXYlhFK5HDVU=",
          "dev": true
        }
      }
    },
    "jest-diff": {
      "version": "23.6.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/jest-diff/-/jest-diff-23.6.0.tgz",
      "integrity": "sha512-Gz9l5Ov+X3aL5L37IT+8hoCUsof1CVYBb2QEkOupK64XyRR3h+uRpYIm97K7sY8diFxowR8pIGEdyfMKTixo3g==",
      "dev": true,
      "requires": {
        "chalk": "^2.0.1",
        "diff": "^3.2.0",
        "jest-get-type": "^22.1.0",
        "pretty-format": "^23.6.0"
      },
      "dependencies": {
        "diff": {
          "version": "3.5.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/diff/-/diff-3.5.0.tgz",
          "integrity": "sha512-A46qtFgd+g7pDZinpnwiRJtxbC1hpgf0uzP3iG89scHk0AUC7A1TGxf5OiiOUv/JMZR8GOt8hL900hV0bOy5xA==",
          "dev": true
        }
      }
    },
    "jest-docblock": {
      "version": "23.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/jest-docblock/-/jest-docblock-23.2.0.tgz",
      "integrity": "sha1-8IXh8YVI2Z/dabICB+b9VdkTg6c=",
      "dev": true,
      "requires": {
        "detect-newline": "^2.1.0"
      }
    },
    "jest-each": {
      "version": "23.6.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/jest-each/-/jest-each-23.6.0.tgz",
      "integrity": "sha512-x7V6M/WGJo6/kLoissORuvLIeAoyo2YqLOoCDkohgJ4XOXSqOtyvr8FbInlAWS77ojBsZrafbozWoKVRdtxFCg==",
      "dev": true,
      "requires": {
        "chalk": "^2.0.1",
        "pretty-format": "^23.6.0"
      }
    },
    "jest-environment-jsdom": {
      "version": "23.4.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/jest-environment-jsdom/-/jest-environment-jsdom-23.4.0.tgz",
      "integrity": "sha1-BWp5UrP+pROsYqFAosNox52eYCM=",
      "dev": true,
      "requires": {
        "jest-mock": "^23.2.0",
        "jest-util": "^23.4.0",
        "jsdom": "^11.5.1"
      }
    },
    "jest-environment-node": {
      "version": "23.4.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/jest-environment-node/-/jest-environment-node-23.4.0.tgz",
      "integrity": "sha1-V+gO0IQd6jAxZ8zozXlSHeuv3hA=",
      "dev": true,
      "requires": {
        "jest-mock": "^23.2.0",
        "jest-util": "^23.4.0"
      }
    },
    "jest-get-type": {
      "version": "22.4.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/jest-get-type/-/jest-get-type-22.4.3.tgz",
      "integrity": "sha512-/jsz0Y+V29w1chdXVygEKSz2nBoHoYqNShPe+QgxSNjAuP1i8+k4LbQNrfoliKej0P45sivkSCh7yiD6ubHS3w==",
      "dev": true
    },
    "jest-haste-map": {
      "version": "23.6.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/jest-haste-map/-/jest-haste-map-23.6.0.tgz",
      "integrity": "sha512-uyNhMyl6dr6HaXGHp8VF7cK6KpC6G9z9LiMNsst+rJIZ8l7wY0tk8qwjPmEghczojZ2/ZhtEdIabZ0OQRJSGGg==",
      "dev": true,
      "requires": {
        "fb-watchman": "^2.0.0",
        "graceful-fs": "^4.1.11",
        "invariant": "^2.2.4",
        "jest-docblock": "^23.2.0",
        "jest-serializer": "^23.0.1",
        "jest-worker": "^23.2.0",
        "micromatch": "^2.3.11",
        "sane": "^2.0.0"
      },
      "dependencies": {
        "arr-diff": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/arr-diff/-/arr-diff-2.0.0.tgz",
          "integrity": "sha1-jzuCf5Vai9ZpaX5KQlasPOrjVs8=",
          "dev": true,
          "requires": {
            "arr-flatten": "^1.0.1"
          }
        },
        "array-unique": {
          "version": "0.2.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/array-unique/-/array-unique-0.2.1.tgz",
          "integrity": "sha1-odl8yvy8JiXMcPrc6zalDFiwGlM=",
          "dev": true
        },
        "braces": {
          "version": "1.8.5",
          "resolved": "http://maven.paic.com.cn/repository/npm/braces/-/braces-1.8.5.tgz",
          "integrity": "sha1-uneWLhLf+WnWt2cR6RS3N4V79qc=",
          "dev": true,
          "requires": {
            "expand-range": "^1.8.1",
            "preserve": "^0.2.0",
            "repeat-element": "^1.1.2"
          }
        },
        "expand-brackets": {
          "version": "0.1.5",
          "resolved": "http://maven.paic.com.cn/repository/npm/expand-brackets/-/expand-brackets-0.1.5.tgz",
          "integrity": "sha1-3wcoTjQqgHzXM6xa9yQR5YHRF3s=",
          "dev": true,
          "requires": {
            "is-posix-bracket": "^0.1.0"
          }
        },
        "extglob": {
          "version": "0.3.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/extglob/-/extglob-0.3.2.tgz",
          "integrity": "sha1-Lhj/PS9JqydlzskCPwEdqo2DSaE=",
          "dev": true,
          "requires": {
            "is-extglob": "^1.0.0"
          }
        },
        "is-extglob": {
          "version": "1.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-extglob/-/is-extglob-1.0.0.tgz",
          "integrity": "sha1-rEaBd8SUNAWgkvyPKXYMb/xiBsA=",
          "dev": true
        },
        "is-glob": {
          "version": "2.0.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-glob/-/is-glob-2.0.1.tgz",
          "integrity": "sha1-0Jb5JqPe1WAPP9/ZEZjLCIjC2GM=",
          "dev": true,
          "requires": {
            "is-extglob": "^1.0.0"
          }
        },
        "kind-of": {
          "version": "3.2.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "dev": true,
          "requires": {
            "is-buffer": "^1.1.5"
          }
        },
        "micromatch": {
          "version": "2.3.11",
          "resolved": "http://maven.paic.com.cn/repository/npm/micromatch/-/micromatch-2.3.11.tgz",
          "integrity": "sha1-hmd8l9FyCzY0MdBNDRUpO9OMFWU=",
          "dev": true,
          "requires": {
            "arr-diff": "^2.0.0",
            "array-unique": "^0.2.1",
            "braces": "^1.8.2",
            "expand-brackets": "^0.1.4",
            "extglob": "^0.3.1",
            "filename-regex": "^2.0.0",
            "is-extglob": "^1.0.0",
            "is-glob": "^2.0.1",
            "kind-of": "^3.0.2",
            "normalize-path": "^2.0.1",
            "object.omit": "^2.0.0",
            "parse-glob": "^3.0.4",
            "regex-cache": "^0.4.2"
          }
        },
        "normalize-path": {
          "version": "2.1.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/normalize-path/-/normalize-path-2.1.1.tgz",
          "integrity": "sha1-GrKLVW4Zg2Oowab35vogE3/mrtk=",
          "dev": true,
          "requires": {
            "remove-trailing-separator": "^1.0.1"
          }
        }
      }
    },
    "jest-jasmine2": {
      "version": "23.6.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/jest-jasmine2/-/jest-jasmine2-23.6.0.tgz",
      "integrity": "sha512-pe2Ytgs1nyCs8IvsEJRiRTPC0eVYd8L/dXJGU08GFuBwZ4sYH/lmFDdOL3ZmvJR8QKqV9MFuwlsAi/EWkFUbsQ==",
      "dev": true,
      "requires": {
        "babel-traverse": "^6.0.0",
        "chalk": "^2.0.1",
        "co": "^4.6.0",
        "expect": "^23.6.0",
        "is-generator-fn": "^1.0.0",
        "jest-diff": "^23.6.0",
        "jest-each": "^23.6.0",
        "jest-matcher-utils": "^23.6.0",
        "jest-message-util": "^23.4.0",
        "jest-snapshot": "^23.6.0",
        "jest-util": "^23.4.0",
        "pretty-format": "^23.6.0"
      }
    },
    "jest-leak-detector": {
      "version": "23.6.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/jest-leak-detector/-/jest-leak-detector-23.6.0.tgz",
      "integrity": "sha512-f/8zA04rsl1Nzj10HIyEsXvYlMpMPcy0QkQilVZDFOaPbv2ur71X5u2+C4ZQJGyV/xvVXtCCZ3wQ99IgQxftCg==",
      "dev": true,
      "requires": {
        "pretty-format": "^23.6.0"
      }
    },
    "jest-matcher-utils": {
      "version": "23.6.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/jest-matcher-utils/-/jest-matcher-utils-23.6.0.tgz",
      "integrity": "sha512-rosyCHQfBcol4NsckTn01cdelzWLU9Cq7aaigDf8VwwpIRvWE/9zLgX2bON+FkEW69/0UuYslUe22SOdEf2nog==",
      "dev": true,
      "requires": {
        "chalk": "^2.0.1",
        "jest-get-type": "^22.1.0",
        "pretty-format": "^23.6.0"
      }
    },
    "jest-message-util": {
      "version": "23.4.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/jest-message-util/-/jest-message-util-23.4.0.tgz",
      "integrity": "sha1-F2EMUJQjSVCNAaPR4L2iwHkIap8=",
      "dev": true,
      "requires": {
        "@babel/code-frame": "^7.0.0-beta.35",
        "chalk": "^2.0.1",
        "micromatch": "^2.3.11",
        "slash": "^1.0.0",
        "stack-utils": "^1.0.1"
      },
      "dependencies": {
        "arr-diff": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/arr-diff/-/arr-diff-2.0.0.tgz",
          "integrity": "sha1-jzuCf5Vai9ZpaX5KQlasPOrjVs8=",
          "dev": true,
          "requires": {
            "arr-flatten": "^1.0.1"
          }
        },
        "array-unique": {
          "version": "0.2.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/array-unique/-/array-unique-0.2.1.tgz",
          "integrity": "sha1-odl8yvy8JiXMcPrc6zalDFiwGlM=",
          "dev": true
        },
        "braces": {
          "version": "1.8.5",
          "resolved": "http://maven.paic.com.cn/repository/npm/braces/-/braces-1.8.5.tgz",
          "integrity": "sha1-uneWLhLf+WnWt2cR6RS3N4V79qc=",
          "dev": true,
          "requires": {
            "expand-range": "^1.8.1",
            "preserve": "^0.2.0",
            "repeat-element": "^1.1.2"
          }
        },
        "expand-brackets": {
          "version": "0.1.5",
          "resolved": "http://maven.paic.com.cn/repository/npm/expand-brackets/-/expand-brackets-0.1.5.tgz",
          "integrity": "sha1-3wcoTjQqgHzXM6xa9yQR5YHRF3s=",
          "dev": true,
          "requires": {
            "is-posix-bracket": "^0.1.0"
          }
        },
        "extglob": {
          "version": "0.3.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/extglob/-/extglob-0.3.2.tgz",
          "integrity": "sha1-Lhj/PS9JqydlzskCPwEdqo2DSaE=",
          "dev": true,
          "requires": {
            "is-extglob": "^1.0.0"
          }
        },
        "is-extglob": {
          "version": "1.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-extglob/-/is-extglob-1.0.0.tgz",
          "integrity": "sha1-rEaBd8SUNAWgkvyPKXYMb/xiBsA=",
          "dev": true
        },
        "is-glob": {
          "version": "2.0.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-glob/-/is-glob-2.0.1.tgz",
          "integrity": "sha1-0Jb5JqPe1WAPP9/ZEZjLCIjC2GM=",
          "dev": true,
          "requires": {
            "is-extglob": "^1.0.0"
          }
        },
        "kind-of": {
          "version": "3.2.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "dev": true,
          "requires": {
            "is-buffer": "^1.1.5"
          }
        },
        "micromatch": {
          "version": "2.3.11",
          "resolved": "http://maven.paic.com.cn/repository/npm/micromatch/-/micromatch-2.3.11.tgz",
          "integrity": "sha1-hmd8l9FyCzY0MdBNDRUpO9OMFWU=",
          "dev": true,
          "requires": {
            "arr-diff": "^2.0.0",
            "array-unique": "^0.2.1",
            "braces": "^1.8.2",
            "expand-brackets": "^0.1.4",
            "extglob": "^0.3.1",
            "filename-regex": "^2.0.0",
            "is-extglob": "^1.0.0",
            "is-glob": "^2.0.1",
            "kind-of": "^3.0.2",
            "normalize-path": "^2.0.1",
            "object.omit": "^2.0.0",
            "parse-glob": "^3.0.4",
            "regex-cache": "^0.4.2"
          }
        },
        "normalize-path": {
          "version": "2.1.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/normalize-path/-/normalize-path-2.1.1.tgz",
          "integrity": "sha1-GrKLVW4Zg2Oowab35vogE3/mrtk=",
          "dev": true,
          "requires": {
            "remove-trailing-separator": "^1.0.1"
          }
        },
        "slash": {
          "version": "1.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/slash/-/slash-1.0.0.tgz",
          "integrity": "sha1-xB8vbDn8FtHNF61LXYlhFK5HDVU=",
          "dev": true
        }
      }
    },
    "jest-mock": {
      "version": "23.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/jest-mock/-/jest-mock-23.2.0.tgz",
      "integrity": "sha1-rRxg8p6HGdR8JuETgJi20YsmETQ=",
      "dev": true
    },
    "jest-regex-util": {
      "version": "23.3.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/jest-regex-util/-/jest-regex-util-23.3.0.tgz",
      "integrity": "sha1-X4ZylUfCeFxAAs6qj4Sf6MpHG8U=",
      "dev": true
    },
    "jest-resolve": {
      "version": "23.6.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/jest-resolve/-/jest-resolve-23.6.0.tgz",
      "integrity": "sha512-XyoRxNtO7YGpQDmtQCmZjum1MljDqUCob7XlZ6jy9gsMugHdN2hY4+Acz9Qvjz2mSsOnPSH7skBmDYCHXVZqkA==",
      "dev": true,
      "requires": {
        "browser-resolve": "^1.11.3",
        "chalk": "^2.0.1",
        "realpath-native": "^1.0.0"
      }
    },
    "jest-resolve-dependencies": {
      "version": "23.6.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/jest-resolve-dependencies/-/jest-resolve-dependencies-23.6.0.tgz",
      "integrity": "sha512-EkQWkFWjGKwRtRyIwRwI6rtPAEyPWlUC2MpzHissYnzJeHcyCn1Hc8j7Nn1xUVrS5C6W5+ZL37XTem4D4pLZdA==",
      "dev": true,
      "requires": {
        "jest-regex-util": "^23.3.0",
        "jest-snapshot": "^23.6.0"
      }
    },
    "jest-runner": {
      "version": "23.6.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/jest-runner/-/jest-runner-23.6.0.tgz",
      "integrity": "sha512-kw0+uj710dzSJKU6ygri851CObtCD9cN8aNkg8jWJf4ewFyEa6kwmiH/r/M1Ec5IL/6VFa0wnAk6w+gzUtjJzA==",
      "dev": true,
      "requires": {
        "exit": "^0.1.2",
        "graceful-fs": "^4.1.11",
        "jest-config": "^23.6.0",
        "jest-docblock": "^23.2.0",
        "jest-haste-map": "^23.6.0",
        "jest-jasmine2": "^23.6.0",
        "jest-leak-detector": "^23.6.0",
        "jest-message-util": "^23.4.0",
        "jest-runtime": "^23.6.0",
        "jest-util": "^23.4.0",
        "jest-worker": "^23.2.0",
        "source-map-support": "^0.5.6",
        "throat": "^4.0.0"
      }
    },
    "jest-runtime": {
      "version": "23.6.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/jest-runtime/-/jest-runtime-23.6.0.tgz",
      "integrity": "sha512-ycnLTNPT2Gv+TRhnAYAQ0B3SryEXhhRj1kA6hBPSeZaNQkJ7GbZsxOLUkwg6YmvWGdX3BB3PYKFLDQCAE1zNOw==",
      "dev": true,
      "requires": {
        "babel-core": "^6.0.0",
        "babel-plugin-istanbul": "^4.1.6",
        "chalk": "^2.0.1",
        "convert-source-map": "^1.4.0",
        "exit": "^0.1.2",
        "fast-json-stable-stringify": "^2.0.0",
        "graceful-fs": "^4.1.11",
        "jest-config": "^23.6.0",
        "jest-haste-map": "^23.6.0",
        "jest-message-util": "^23.4.0",
        "jest-regex-util": "^23.3.0",
        "jest-resolve": "^23.6.0",
        "jest-snapshot": "^23.6.0",
        "jest-util": "^23.4.0",
        "jest-validate": "^23.6.0",
        "micromatch": "^2.3.11",
        "realpath-native": "^1.0.0",
        "slash": "^1.0.0",
        "strip-bom": "3.0.0",
        "write-file-atomic": "^2.1.0",
        "yargs": "^11.0.0"
      },
      "dependencies": {
        "arr-diff": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/arr-diff/-/arr-diff-2.0.0.tgz",
          "integrity": "sha1-jzuCf5Vai9ZpaX5KQlasPOrjVs8=",
          "dev": true,
          "requires": {
            "arr-flatten": "^1.0.1"
          }
        },
        "array-unique": {
          "version": "0.2.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/array-unique/-/array-unique-0.2.1.tgz",
          "integrity": "sha1-odl8yvy8JiXMcPrc6zalDFiwGlM=",
          "dev": true
        },
        "babel-core": {
          "version": "6.26.3",
          "resolved": "http://maven.paic.com.cn/repository/npm/babel-core/-/babel-core-6.26.3.tgz",
          "integrity": "sha512-6jyFLuDmeidKmUEb3NM+/yawG0M2bDZ9Z1qbZP59cyHLz8kYGKYwpJP0UwUKKUiTRNvxfLesJnTedqczP7cTDA==",
          "dev": true,
          "requires": {
            "babel-code-frame": "^6.26.0",
            "babel-generator": "^6.26.0",
            "babel-helpers": "^6.24.1",
            "babel-messages": "^6.23.0",
            "babel-register": "^6.26.0",
            "babel-runtime": "^6.26.0",
            "babel-template": "^6.26.0",
            "babel-traverse": "^6.26.0",
            "babel-types": "^6.26.0",
            "babylon": "^6.18.0",
            "convert-source-map": "^1.5.1",
            "debug": "^2.6.9",
            "json5": "^0.5.1",
            "lodash": "^4.17.4",
            "minimatch": "^3.0.4",
            "path-is-absolute": "^1.0.1",
            "private": "^0.1.8",
            "slash": "^1.0.0",
            "source-map": "^0.5.7"
          }
        },
        "braces": {
          "version": "1.8.5",
          "resolved": "http://maven.paic.com.cn/repository/npm/braces/-/braces-1.8.5.tgz",
          "integrity": "sha1-uneWLhLf+WnWt2cR6RS3N4V79qc=",
          "dev": true,
          "requires": {
            "expand-range": "^1.8.1",
            "preserve": "^0.2.0",
            "repeat-element": "^1.1.2"
          }
        },
        "debug": {
          "version": "2.6.9",
          "resolved": "http://maven.paic.com.cn/repository/npm/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "requires": {
            "ms": "2.0.0"
          }
        },
        "expand-brackets": {
          "version": "0.1.5",
          "resolved": "http://maven.paic.com.cn/repository/npm/expand-brackets/-/expand-brackets-0.1.5.tgz",
          "integrity": "sha1-3wcoTjQqgHzXM6xa9yQR5YHRF3s=",
          "dev": true,
          "requires": {
            "is-posix-bracket": "^0.1.0"
          }
        },
        "extglob": {
          "version": "0.3.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/extglob/-/extglob-0.3.2.tgz",
          "integrity": "sha1-Lhj/PS9JqydlzskCPwEdqo2DSaE=",
          "dev": true,
          "requires": {
            "is-extglob": "^1.0.0"
          }
        },
        "is-extglob": {
          "version": "1.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-extglob/-/is-extglob-1.0.0.tgz",
          "integrity": "sha1-rEaBd8SUNAWgkvyPKXYMb/xiBsA=",
          "dev": true
        },
        "is-glob": {
          "version": "2.0.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-glob/-/is-glob-2.0.1.tgz",
          "integrity": "sha1-0Jb5JqPe1WAPP9/ZEZjLCIjC2GM=",
          "dev": true,
          "requires": {
            "is-extglob": "^1.0.0"
          }
        },
        "json5": {
          "version": "0.5.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/json5/-/json5-0.5.1.tgz",
          "integrity": "sha1-Hq3nrMASA0rYTiOWdn6tn6VJWCE=",
          "dev": true
        },
        "kind-of": {
          "version": "3.2.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "dev": true,
          "requires": {
            "is-buffer": "^1.1.5"
          }
        },
        "micromatch": {
          "version": "2.3.11",
          "resolved": "http://maven.paic.com.cn/repository/npm/micromatch/-/micromatch-2.3.11.tgz",
          "integrity": "sha1-hmd8l9FyCzY0MdBNDRUpO9OMFWU=",
          "dev": true,
          "requires": {
            "arr-diff": "^2.0.0",
            "array-unique": "^0.2.1",
            "braces": "^1.8.2",
            "expand-brackets": "^0.1.4",
            "extglob": "^0.3.1",
            "filename-regex": "^2.0.0",
            "is-extglob": "^1.0.0",
            "is-glob": "^2.0.1",
            "kind-of": "^3.0.2",
            "normalize-path": "^2.0.1",
            "object.omit": "^2.0.0",
            "parse-glob": "^3.0.4",
            "regex-cache": "^0.4.2"
          }
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
          "dev": true
        },
        "normalize-path": {
          "version": "2.1.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/normalize-path/-/normalize-path-2.1.1.tgz",
          "integrity": "sha1-GrKLVW4Zg2Oowab35vogE3/mrtk=",
          "dev": true,
          "requires": {
            "remove-trailing-separator": "^1.0.1"
          }
        },
        "slash": {
          "version": "1.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/slash/-/slash-1.0.0.tgz",
          "integrity": "sha1-xB8vbDn8FtHNF61LXYlhFK5HDVU=",
          "dev": true
        },
        "strip-bom": {
          "version": "3.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/strip-bom/-/strip-bom-3.0.0.tgz",
          "integrity": "sha1-IzTBjpx1n3vdVv3vfprj1YjmjtM=",
          "dev": true
        }
      }
    },
    "jest-serializer": {
      "version": "23.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/jest-serializer/-/jest-serializer-23.0.1.tgz",
      "integrity": "sha1-o3dq6zEekP6D+rnlM+hRAr0WQWU=",
      "dev": true
    },
    "jest-serializer-vue": {
      "version": "2.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/jest-serializer-vue/-/jest-serializer-vue-2.0.2.tgz",
      "integrity": "sha1-sjjvKGNX7GtIBCG9RxRQUJh9WbM=",
      "dev": true,
      "requires": {
        "pretty": "2.0.0"
      }
    },
    "jest-snapshot": {
      "version": "23.6.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/jest-snapshot/-/jest-snapshot-23.6.0.tgz",
      "integrity": "sha512-tM7/Bprftun6Cvj2Awh/ikS7zV3pVwjRYU2qNYS51VZHgaAMBs5l4o/69AiDHhQrj5+LA2Lq4VIvK7zYk/bswg==",
      "dev": true,
      "requires": {
        "babel-types": "^6.0.0",
        "chalk": "^2.0.1",
        "jest-diff": "^23.6.0",
        "jest-matcher-utils": "^23.6.0",
        "jest-message-util": "^23.4.0",
        "jest-resolve": "^23.6.0",
        "mkdirp": "^0.5.1",
        "natural-compare": "^1.4.0",
        "pretty-format": "^23.6.0",
        "semver": "^5.5.0"
      }
    },
    "jest-transform-stub": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/jest-transform-stub/-/jest-transform-stub-2.0.0.tgz",
      "integrity": "sha512-lspHaCRx/mBbnm3h4uMMS3R5aZzMwyNpNIJLXj4cEsV0mIUtS4IjYJLSoyjRCtnxb6RIGJ4NL2quZzfIeNhbkg==",
      "dev": true
    },
    "jest-util": {
      "version": "23.4.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/jest-util/-/jest-util-23.4.0.tgz",
      "integrity": "sha1-TQY8uSe68KI4Mf9hvsLLv0l5NWE=",
      "dev": true,
      "requires": {
        "callsites": "^2.0.0",
        "chalk": "^2.0.1",
        "graceful-fs": "^4.1.11",
        "is-ci": "^1.0.10",
        "jest-message-util": "^23.4.0",
        "mkdirp": "^0.5.1",
        "slash": "^1.0.0",
        "source-map": "^0.6.0"
      },
      "dependencies": {
        "callsites": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/callsites/-/callsites-2.0.0.tgz",
          "integrity": "sha1-BuuE8A7qQT2oav/vrL/7Ngk7PFA=",
          "dev": true
        },
        "slash": {
          "version": "1.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/slash/-/slash-1.0.0.tgz",
          "integrity": "sha1-xB8vbDn8FtHNF61LXYlhFK5HDVU=",
          "dev": true
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        }
      }
    },
    "jest-validate": {
      "version": "23.6.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/jest-validate/-/jest-validate-23.6.0.tgz",
      "integrity": "sha512-OFKapYxe72yz7agrDAWi8v2WL8GIfVqcbKRCLbRG9PAxtzF9b1SEDdTpytNDN12z2fJynoBwpMpvj2R39plI2A==",
      "dev": true,
      "requires": {
        "chalk": "^2.0.1",
        "jest-get-type": "^22.1.0",
        "leven": "^2.1.0",
        "pretty-format": "^23.6.0"
      }
    },
    "jest-watch-typeahead": {
      "version": "0.2.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/jest-watch-typeahead/-/jest-watch-typeahead-0.2.1.tgz",
      "integrity": "sha512-xdhEtKSj0gmnkDQbPTIHvcMmXNUDzYpHLEJ5TFqlaI+schi2NI96xhWiZk9QoesAS7oBmKwWWsHazTrYl2ORgg==",
      "dev": true,
      "requires": {
        "ansi-escapes": "^3.0.0",
        "chalk": "^2.4.1",
        "jest-watcher": "^23.1.0",
        "slash": "^2.0.0",
        "string-length": "^2.0.0",
        "strip-ansi": "^5.0.0"
      }
    },
    "jest-watcher": {
      "version": "23.4.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/jest-watcher/-/jest-watcher-23.4.0.tgz",
      "integrity": "sha1-0uKM50+NrWxq/JIrksq+9u0FyRw=",
      "dev": true,
      "requires": {
        "ansi-escapes": "^3.0.0",
        "chalk": "^2.0.1",
        "string-length": "^2.0.0"
      }
    },
    "jest-worker": {
      "version": "23.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/jest-worker/-/jest-worker-23.2.0.tgz",
      "integrity": "sha1-+vcGqNo2+uYOsmlXJX+ntdjqArk=",
      "dev": true,
      "requires": {
        "merge-stream": "^1.0.1"
      }
    },
    "js-beautify": {
      "version": "1.10.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/js-beautify/-/js-beautify-1.10.2.tgz",
      "integrity": "sha512-ZtBYyNUYJIsBWERnQP0rPN9KjkrDfJcMjuVGcvXOUJrD1zmOGwhRwQ4msG+HJ+Ni/FA7+sRQEMYVzdTQDvnzvQ==",
      "dev": true,
      "requires": {
        "config-chain": "^1.1.12",
        "editorconfig": "^0.15.3",
        "glob": "^7.1.3",
        "mkdirp": "~0.5.1",
        "nopt": "~4.0.1"
      }
    },
    "js-calendar": {
      "version": "1.2.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/js-calendar/-/js-calendar-1.2.3.tgz",
      "integrity": "sha512-dAA1/Zbp4+c5E+ARCVTIuKepXsNLzSYfzvOimiYD4S5eeP9QuplSHLcdhfqFSwyM1o1u6ku6RRRCyaZ0YAjiBw=="
    },
    "js-levenshtein": {
      "version": "1.1.6",
      "resolved": "http://maven.paic.com.cn/repository/npm/js-levenshtein/-/js-levenshtein-1.1.6.tgz",
      "integrity": "sha512-X2BB11YZtrRqY4EnQcLX5Rh373zbK4alC1FW7D7MBhL2gtcC17cTnr6DmfHZeS0s2rTHjUTMMHfG7gO8SSdw+g==",
      "dev": true
    },
    "js-message": {
      "version": "1.0.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/js-message/-/js-message-1.0.5.tgz",
      "integrity": "sha1-IwDSSxrwjondCVvBpMnJz8uJLRU=",
      "dev": true
    },
    "js-queue": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/js-queue/-/js-queue-2.0.0.tgz",
      "integrity": "sha1-NiITz4YPRo8BJfxslqvBdCUx+Ug=",
      "dev": true,
      "requires": {
        "easy-stack": "^1.0.0"
      }
    },
    "js-tokens": {
      "version": "4.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "dev": true
    },
    "js-yaml": {
      "version": "3.13.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/js-yaml/-/js-yaml-3.13.1.tgz",
      "integrity": "sha512-YfbcO7jXDdyj0DGxYVSlSeQNHbD7XPWvrVWeVUujrQEoZzWJIRrCPoyk6kL6IAjAG2IolMK4T0hNUe0HOUs5Jw==",
      "dev": true,
      "requires": {
        "argparse": "^1.0.7",
        "esprima": "^4.0.0"
      }
    },
    "jsbn": {
      "version": "0.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/jsbn/-/jsbn-0.1.1.tgz",
      "integrity": "sha1-peZUwuWi3rXyAdls77yoDA7y9RM=",
      "dev": true
    },
    "jsdom": {
      "version": "11.12.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/jsdom/-/jsdom-11.12.0.tgz",
      "integrity": "sha512-y8Px43oyiBM13Zc1z780FrfNLJCXTL40EWlty/LXUtcjykRBNgLlCjWXpfSPBl2iv+N7koQN+dvqszHZgT/Fjw==",
      "dev": true,
      "requires": {
        "abab": "^2.0.0",
        "acorn": "^5.5.3",
        "acorn-globals": "^4.1.0",
        "array-equal": "^1.0.0",
        "cssom": ">= 0.3.2 < 0.4.0",
        "cssstyle": "^1.0.0",
        "data-urls": "^1.0.0",
        "domexception": "^1.0.1",
        "escodegen": "^1.9.1",
        "html-encoding-sniffer": "^1.0.2",
        "left-pad": "^1.3.0",
        "nwsapi": "^2.0.7",
        "parse5": "4.0.0",
        "pn": "^1.1.0",
        "request": "^2.87.0",
        "request-promise-native": "^1.0.5",
        "sax": "^1.2.4",
        "symbol-tree": "^3.2.2",
        "tough-cookie": "^2.3.4",
        "w3c-hr-time": "^1.0.1",
        "webidl-conversions": "^4.0.2",
        "whatwg-encoding": "^1.0.3",
        "whatwg-mimetype": "^2.1.0",
        "whatwg-url": "^6.4.1",
        "ws": "^5.2.0",
        "xml-name-validator": "^3.0.0"
      },
      "dependencies": {
        "acorn": {
          "version": "5.7.3",
          "resolved": "http://maven.paic.com.cn/repository/npm/acorn/-/acorn-5.7.3.tgz",
          "integrity": "sha512-T/zvzYRfbVojPWahDsE5evJdHb3oJoQfFbsrKM7w5Zcs++Tr257tia3BmMP8XYVjp1S9RZXQMh7gao96BlqZOw==",
          "dev": true
        }
      }
    },
    "jsesc": {
      "version": "2.5.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/jsesc/-/jsesc-2.5.2.tgz",
      "integrity": "sha512-OYu7XEzjkCQ3C5Ps3QIZsQfNpqoJyZZA99wd9aWd05NCtC5pWOkShK2mkL6HXQR6/Cy2lbNdPlZBpuQHXE63gA==",
      "dev": true
    },
    "json-parse-better-errors": {
      "version": "1.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/json-parse-better-errors/-/json-parse-better-errors-1.0.2.tgz",
      "integrity": "sha512-mrqyZKfX5EhL7hvqcV6WG1yYjnjeuYDzDhhcAAUrq8Po85NBQBJP+ZDUT75qZQ98IkUoBqdkExkukOU7Ts2wrw==",
      "dev": true
    },
    "json-schema": {
      "version": "0.2.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/json-schema/-/json-schema-0.2.3.tgz",
      "integrity": "sha1-tIDIkuWaLwWVTOcnvT8qTogvnhM=",
      "dev": true
    },
    "json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true
    },
    "json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha1-nbe1lJatPzz+8wp1FC0tkwrXJlE=",
      "dev": true
    },
    "json-stringify-safe": {
      "version": "5.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/json-stringify-safe/-/json-stringify-safe-5.0.1.tgz",
      "integrity": "sha1-Epai1Y/UXxmg9s4B1lcB4sc1tus=",
      "dev": true
    },
    "json3": {
      "version": "3.3.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/json3/-/json3-3.3.3.tgz",
      "integrity": "sha512-c7/8mbUsKigAbLkD5B010BK4D9LZm7A1pNItkEwiUZRpIN66exu/e7YQWysGun+TRKaJp8MhemM+VkfWv42aCA==",
      "dev": true
    },
    "json5": {
      "version": "2.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/json5/-/json5-2.1.1.tgz",
      "integrity": "sha512-l+3HXD0GEI3huGq1njuqtzYK8OYJyXMkOLtQ53pjWh89tvWS2h6l+1zMkYWqlb57+SiQodKZyvMEFb2X+KrFhQ==",
      "dev": true,
      "requires": {
        "minimist": "^1.2.0"
      }
    },
    "jsonfile": {
      "version": "4.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/jsonfile/-/jsonfile-4.0.0.tgz",
      "integrity": "sha1-h3Gq4HmbZAdrdmQPygWPnBDjPss=",
      "dev": true,
      "requires": {
        "graceful-fs": "^4.1.6"
      }
    },
    "jsprim": {
      "version": "1.4.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/jsprim/-/jsprim-1.4.1.tgz",
      "integrity": "sha1-MT5mvB5cwG5Di8G3SZwuXFastqI=",
      "dev": true,
      "requires": {
        "assert-plus": "1.0.0",
        "extsprintf": "1.3.0",
        "json-schema": "0.2.3",
        "verror": "1.10.0"
      }
    },
    "killable": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/killable/-/killable-1.0.1.tgz",
      "integrity": "sha512-LzqtLKlUwirEUyl/nicirVmNiPvYs7l5n8wOPP7fyJVpUPkvCnW/vuiXGpylGUlnPDnB7311rARzAt3Mhswpjg==",
      "dev": true
    },
    "kind-of": {
      "version": "6.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/kind-of/-/kind-of-6.0.2.tgz",
      "integrity": "sha512-s5kLOcnH0XqDO+FvuaLX8DDjZ18CGFk7VygH40QoKPUQhW4e2rvM0rwUq0t8IQDOwYSeLK01U90OjzBTme2QqA==",
      "dev": true
    },
    "kleur": {
      "version": "2.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/kleur/-/kleur-2.0.2.tgz",
      "integrity": "sha512-77XF9iTllATmG9lSlIv0qdQ2BQ/h9t0bJllHlbvsQ0zUWfU7Yi0S8L5JXzPZgkefIiajLmBJJ4BsMJmqcf7oxQ==",
      "dev": true
    },
    "launch-editor": {
      "version": "2.2.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/launch-editor/-/launch-editor-2.2.1.tgz",
      "integrity": "sha512-On+V7K2uZK6wK7x691ycSUbLD/FyKKelArkbaAMSSJU8JmqmhwN2+mnJDNINuJWSrh2L0kDk+ZQtbC/gOWUwLw==",
      "dev": true,
      "requires": {
        "chalk": "^2.3.0",
        "shell-quote": "^1.6.1"
      }
    },
    "launch-editor-middleware": {
      "version": "2.2.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/launch-editor-middleware/-/launch-editor-middleware-2.2.1.tgz",
      "integrity": "sha512-s0UO2/gEGiCgei3/2UN3SMuUj1phjQN8lcpnvgLSz26fAzNWPQ6Nf/kF5IFClnfU2ehp6LrmKdMU/beveO+2jg==",
      "dev": true,
      "requires": {
        "launch-editor": "^2.2.1"
      }
    },
    "lcid": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/lcid/-/lcid-2.0.0.tgz",
      "integrity": "sha512-avPEb8P8EGnwXKClwsNUgryVjllcRqtMYa49NTsbQagYuT1DcXnl1915oxWjoyGrXR6zH/Y0Zc96xWsPcoDKeA==",
      "dev": true,
      "requires": {
        "invert-kv": "^2.0.0"
      }
    },
    "left-pad": {
      "version": "1.3.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/left-pad/-/left-pad-1.3.0.tgz",
      "integrity": "sha512-XI5MPzVNApjAyhQzphX8BkmKsKUxD4LdyK24iZeQGinBN9yTQT3bFlCBy/aVx2HrNcqQGsdot8ghrjyrvMCoEA==",
      "dev": true
    },
    "less": {
      "version": "3.10.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/less/-/less-3.10.3.tgz",
      "integrity": "sha512-vz32vqfgmoxF1h3K4J+yKCtajH0PWmjkIFgbs5d78E/c/e+UQTnI+lWK+1eQRE95PXM2mC3rJlLSSP9VQHnaow==",
      "dev": true,
      "requires": {
        "clone": "^2.1.2",
        "errno": "^0.1.1",
        "graceful-fs": "^4.1.2",
        "image-size": "~0.5.0",
        "mime": "^1.4.1",
        "mkdirp": "^0.5.0",
        "promise": "^7.1.1",
        "request": "^2.83.0",
        "source-map": "~0.6.0"
      },
      "dependencies": {
        "clone": {
          "version": "2.1.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/clone/-/clone-2.1.2.tgz",
          "integrity": "sha1-G39Ln1kfHo+DZwQBYANFoCiHQ18=",
          "dev": true
        },
        "mime": {
          "version": "1.6.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/mime/-/mime-1.6.0.tgz",
          "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg==",
          "dev": true,
          "optional": true
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true,
          "optional": true
        }
      }
    },
    "less-loader": {
      "version": "5.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/less-loader/-/less-loader-5.0.0.tgz",
      "integrity": "sha512-bquCU89mO/yWLaUq0Clk7qCsKhsF/TZpJUzETRvJa9KSVEL9SO3ovCvdEHISBhrC81OwC8QSVX7E0bzElZj9cg==",
      "dev": true,
      "requires": {
        "clone": "^2.1.1",
        "loader-utils": "^1.1.0",
        "pify": "^4.0.1"
      },
      "dependencies": {
        "clone": {
          "version": "2.1.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/clone/-/clone-2.1.2.tgz",
          "integrity": "sha1-G39Ln1kfHo+DZwQBYANFoCiHQ18=",
          "dev": true
        }
      }
    },
    "leven": {
      "version": "2.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/leven/-/leven-2.1.0.tgz",
      "integrity": "sha1-wuep93IJTe6dNCAq6KzORoeHVYA=",
      "dev": true
    },
    "levn": {
      "version": "0.3.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/levn/-/levn-0.3.0.tgz",
      "integrity": "sha1-OwmSTt+fCDwEkP3UwLxEIeBHZO4=",
      "dev": true,
      "requires": {
        "prelude-ls": "~1.1.2",
        "type-check": "~0.3.2"
      }
    },
    "lines-and-columns": {
      "version": "1.1.6",
      "resolved": "http://maven.paic.com.cn/repository/npm/lines-and-columns/-/lines-and-columns-1.1.6.tgz",
      "integrity": "sha1-HADHQ7QzzQpOgHWPe2SldEDZ/wA=",
      "dev": true
    },
    "load-json-file": {
      "version": "1.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/load-json-file/-/load-json-file-1.1.0.tgz",
      "integrity": "sha1-lWkFcI1YtLq0wiYbBPWfMcmTdMA=",
      "dev": true,
      "requires": {
        "graceful-fs": "^4.1.2",
        "parse-json": "^2.2.0",
        "pify": "^2.0.0",
        "pinkie-promise": "^2.0.0",
        "strip-bom": "^2.0.0"
      },
      "dependencies": {
        "pify": {
          "version": "2.3.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/pify/-/pify-2.3.0.tgz",
          "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw=",
          "dev": true
        }
      }
    },
    "loader-fs-cache": {
      "version": "1.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/loader-fs-cache/-/loader-fs-cache-1.0.2.tgz",
      "integrity": "sha512-70IzT/0/L+M20jUlEqZhZyArTU6VKLRTYRDAYN26g4jfzpJqjipLL3/hgYpySqI9PwsVRHHFja0LfEmsx9X2Cw==",
      "dev": true,
      "requires": {
        "find-cache-dir": "^0.1.1",
        "mkdirp": "0.5.1"
      },
      "dependencies": {
        "find-cache-dir": {
          "version": "0.1.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/find-cache-dir/-/find-cache-dir-0.1.1.tgz",
          "integrity": "sha1-yN765XyKUqinhPnjHFfHQumToLk=",
          "dev": true,
          "requires": {
            "commondir": "^1.0.1",
            "mkdirp": "^0.5.1",
            "pkg-dir": "^1.0.0"
          }
        },
        "find-up": {
          "version": "1.1.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/find-up/-/find-up-1.1.2.tgz",
          "integrity": "sha1-ay6YIrGizgpgq2TWEOzK1TyyTQ8=",
          "dev": true,
          "requires": {
            "path-exists": "^2.0.0",
            "pinkie-promise": "^2.0.0"
          }
        },
        "path-exists": {
          "version": "2.1.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/path-exists/-/path-exists-2.1.0.tgz",
          "integrity": "sha1-D+tsZPD8UY2adU3V77YscCJ2H0s=",
          "dev": true,
          "requires": {
            "pinkie-promise": "^2.0.0"
          }
        },
        "pkg-dir": {
          "version": "1.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/pkg-dir/-/pkg-dir-1.0.0.tgz",
          "integrity": "sha1-ektQio1bstYp1EcFb/TpyTFM89Q=",
          "dev": true,
          "requires": {
            "find-up": "^1.0.0"
          }
        }
      }
    },
    "loader-runner": {
      "version": "2.4.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/loader-runner/-/loader-runner-2.4.0.tgz",
      "integrity": "sha512-Jsmr89RcXGIwivFY21FcRrisYZfvLMTWx5kOLc+JTxtpBOG6xML0vzbc6SEQG2FO9/4Fc3wW4LVcB5DmGflaRw==",
      "dev": true
    },
    "loader-utils": {
      "version": "1.2.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/loader-utils/-/loader-utils-1.2.3.tgz",
      "integrity": "sha512-fkpz8ejdnEMG3s37wGL07iSBDg99O9D5yflE9RGNH3hRdx9SOwYfnGYdZOUIZitN8E+E2vkq3MUMYMvPYl5ZZA==",
      "dev": true,
      "requires": {
        "big.js": "^5.2.2",
        "emojis-list": "^2.0.0",
        "json5": "^1.0.1"
      },
      "dependencies": {
        "json5": {
          "version": "1.0.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/json5/-/json5-1.0.1.tgz",
          "integrity": "sha512-aKS4WQjPenRxiQsC93MNfjx+nbF4PAdYzmd/1JIj8HYzqfbu86beTuNgXDzPknWk0n0uARlyewZo4s++ES36Ow==",
          "dev": true,
          "requires": {
            "minimist": "^1.2.0"
          }
        }
      }
    },
    "locate-path": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/locate-path/-/locate-path-2.0.0.tgz",
      "integrity": "sha1-K1aLJl7slExtnA3pw9u7ygNUzY4=",
      "dev": true,
      "requires": {
        "p-locate": "^2.0.0",
        "path-exists": "^3.0.0"
      }
    },
    "lodash": {
      "version": "4.17.15",
      "resolved": "http://maven.paic.com.cn/repository/npm/lodash/-/lodash-4.17.15.tgz",
      "integrity": "sha512-8xOcRHvCjnocdS5cpwXQXVzmmh5e5+saE2QGoeQmbKmRS6J3VQppPOIt0MnmE+4xlZoumy0GPG0D0MVIQbNA1A==",
      "dev": true
    },
    "lodash.defaultsdeep": {
      "version": "4.6.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/lodash.defaultsdeep/-/lodash.defaultsdeep-4.6.1.tgz",
      "integrity": "sha512-3j8wdDzYuWO3lM3Reg03MuQR957t287Rpcxp1njpEa8oDrikb+FwGdW3n+FELh/A6qib6yPit0j/pv9G/yeAqA==",
      "dev": true
    },
    "lodash.kebabcase": {
      "version": "4.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/lodash.kebabcase/-/lodash.kebabcase-4.1.1.tgz",
      "integrity": "sha1-hImxyw0p/4gZXM7KRI/21swpXDY=",
      "dev": true
    },
    "lodash.mapvalues": {
      "version": "4.6.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/lodash.mapvalues/-/lodash.mapvalues-4.6.0.tgz",
      "integrity": "sha1-G6+lAF3p3W9PJmaMMMo3IwzJaJw=",
      "dev": true
    },
    "lodash.memoize": {
      "version": "4.1.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/lodash.memoize/-/lodash.memoize-4.1.2.tgz",
      "integrity": "sha1-vMbEmkKihA7Zl/Mj6tpezRguC/4=",
      "dev": true
    },
    "lodash.sortby": {
      "version": "4.7.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/lodash.sortby/-/lodash.sortby-4.7.0.tgz",
      "integrity": "sha1-7dFMgk4sycHgsKG0K7UhBRakJDg=",
      "dev": true
    },
    "lodash.throttle": {
      "version": "4.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/lodash.throttle/-/lodash.throttle-4.1.1.tgz",
      "integrity": "sha1-wj6RtxAkKscMN/HhzaknTMOb8vQ="
    },
    "lodash.transform": {
      "version": "4.6.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/lodash.transform/-/lodash.transform-4.6.0.tgz",
      "integrity": "sha1-EjBkIvYzJK7YSD0/ODMrX2cFR6A=",
      "dev": true
    },
    "lodash.unescape": {
      "version": "4.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/lodash.unescape/-/lodash.unescape-4.0.1.tgz",
      "integrity": "sha1-vyJJiGzlFM2hEvrpIYzcBlIR/Jw=",
      "dev": true
    },
    "lodash.uniq": {
      "version": "4.5.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/lodash.uniq/-/lodash.uniq-4.5.0.tgz",
      "integrity": "sha1-0CJTc662Uq3BvILklFM5qEJ1R3M=",
      "dev": true
    },
    "log-symbols": {
      "version": "2.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/log-symbols/-/log-symbols-2.2.0.tgz",
      "integrity": "sha512-VeIAFslyIerEJLXHziedo2basKbMKtTw3vfn5IzG0XTjhAVEJyNHnL2p7vc+wBDSdQuUpNw3M2u6xb9QsAY5Eg==",
      "dev": true,
      "requires": {
        "chalk": "^2.0.1"
      }
    },
    "loglevel": {
      "version": "1.6.6",
      "resolved": "http://maven.paic.com.cn/repository/npm/loglevel/-/loglevel-1.6.6.tgz",
      "integrity": "sha512-Sgr5lbboAUBo3eXCSPL4/KoVz3ROKquOjcctxmHIt+vol2DrqTQe3SwkKKuYhEiWB5kYa13YyopJ69deJ1irzQ==",
      "dev": true
    },
    "loose-envify": {
      "version": "1.4.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/loose-envify/-/loose-envify-1.4.0.tgz",
      "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
      "dev": true,
      "requires": {
        "js-tokens": "^3.0.0 || ^4.0.0"
      }
    },
    "lower-case": {
      "version": "1.1.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/lower-case/-/lower-case-1.1.4.tgz",
      "integrity": "sha1-miyr0bno4K6ZOkv31YdcOcQujqw=",
      "dev": true
    },
    "lru-cache": {
      "version": "5.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/lru-cache/-/lru-cache-5.1.1.tgz",
      "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
      "dev": true,
      "requires": {
        "yallist": "^3.0.2"
      }
    },
    "make-dir": {
      "version": "2.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/make-dir/-/make-dir-2.1.0.tgz",
      "integrity": "sha512-LS9X+dc8KLxXCb8dni79fLIIUA5VyZoyjSMCwTluaXA0o27cCK0bhXkpgw+sTXVpPy/lSO57ilRixqk0vDmtRA==",
      "dev": true,
      "requires": {
        "pify": "^4.0.1",
        "semver": "^5.6.0"
      }
    },
    "make-error": {
      "version": "1.3.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/make-error/-/make-error-1.3.5.tgz",
      "integrity": "sha512-c3sIjNUow0+8swNwVpqoH4YCShKNFkMaw6oH1mNS2haDZQqkeZFlHS3dhoeEbKKmJB4vXpJucU6oH75aDYeE9g==",
      "dev": true
    },
    "makeerror": {
      "version": "1.0.11",
      "resolved": "http://maven.paic.com.cn/repository/npm/makeerror/-/makeerror-1.0.11.tgz",
      "integrity": "sha1-4BpckQnyr3lmDk6LlYd5AYT1qWw=",
      "dev": true,
      "requires": {
        "tmpl": "1.0.x"
      }
    },
    "mamacro": {
      "version": "0.0.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/mamacro/-/mamacro-0.0.3.tgz",
      "integrity": "sha512-qMEwh+UujcQ+kbz3T6V+wAmO2U8veoq2w+3wY8MquqwVA3jChfwY+Tk52GZKDfACEPjuZ7r2oJLejwpt8jtwTA==",
      "dev": true
    },
    "map-age-cleaner": {
      "version": "0.1.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/map-age-cleaner/-/map-age-cleaner-0.1.3.tgz",
      "integrity": "sha512-bJzx6nMoP6PDLPBFmg7+xRKeFZvFboMrGlxmNj9ClvX53KrmvM5bXFXEWjbz4cz1AFn+jWJ9z/DJSz7hrs0w3w==",
      "dev": true,
      "requires": {
        "p-defer": "^1.0.0"
      }
    },
    "map-cache": {
      "version": "0.2.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/map-cache/-/map-cache-0.2.2.tgz",
      "integrity": "sha1-wyq9C9ZSXZsFFkW7TyasXcmKDb8=",
      "dev": true
    },
    "map-visit": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/map-visit/-/map-visit-1.0.0.tgz",
      "integrity": "sha1-7Nyo8TFE5mDxtb1B8S80edmN+48=",
      "dev": true,
      "requires": {
        "object-visit": "^1.0.0"
      }
    },
    "math-random": {
      "version": "1.0.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/math-random/-/math-random-1.0.4.tgz",
      "integrity": "sha512-rUxjysqif/BZQH2yhd5Aaq7vXMSx9NdEsQcyA07uEzIvxgI7zIr33gGsh+RU0/XjmQpCW7RsVof1vlkvQVCK5A==",
      "dev": true
    },
    "md5.js": {
      "version": "1.3.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/md5.js/-/md5.js-1.3.5.tgz",
      "integrity": "sha512-xitP+WxNPcTTOgnTJcrhM0xvdPepipPSf3I8EIpGKeFLjt3PlJLIDG3u8EX53ZIubkb+5U2+3rELYpEhHhzdkg==",
      "dev": true,
      "requires": {
        "hash-base": "^3.0.0",
        "inherits": "^2.0.1",
        "safe-buffer": "^5.1.2"
      }
    },
    "mdn-data": {
      "version": "2.0.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/mdn-data/-/mdn-data-2.0.4.tgz",
      "integrity": "sha512-iV3XNKw06j5Q7mi6h+9vbx23Tv7JkjEVgKHW4pimwyDGWm0OIQntJJ+u1C6mg6mK1EaTv42XQ7w76yuzH7M2cA==",
      "dev": true
    },
    "media-typer": {
      "version": "0.3.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/media-typer/-/media-typer-0.3.0.tgz",
      "integrity": "sha1-hxDXrwqmJvj/+hzgAWhUUmMlV0g=",
      "dev": true
    },
    "mem": {
      "version": "4.3.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/mem/-/mem-4.3.0.tgz",
      "integrity": "sha512-qX2bG48pTqYRVmDB37rn/6PT7LcR8T7oAX3bf99u1Tt1nzxYfxkgqDwUwolPlXweM0XzBOBFzSx4kfp7KP1s/w==",
      "dev": true,
      "requires": {
        "map-age-cleaner": "^0.1.1",
        "mimic-fn": "^2.0.0",
        "p-is-promise": "^2.0.0"
      },
      "dependencies": {
        "mimic-fn": {
          "version": "2.1.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/mimic-fn/-/mimic-fn-2.1.0.tgz",
          "integrity": "sha512-OqbOk5oEQeAZ8WXWydlu9HJjz9WVdEIvamMCcXmuqUYjTknH/sqsWvhQ3vgwKFRR1HpjvNBKQ37nbJgYzGqGcg==",
          "dev": true
        }
      }
    },
    "memory-fs": {
      "version": "0.4.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/memory-fs/-/memory-fs-0.4.1.tgz",
      "integrity": "sha1-OpoguEYlI+RHz7x+i7gO1me/xVI=",
      "dev": true,
      "requires": {
        "errno": "^0.1.3",
        "readable-stream": "^2.0.1"
      }
    },
    "merge": {
      "version": "1.2.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/merge/-/merge-1.2.1.tgz",
      "integrity": "sha512-VjFo4P5Whtj4vsLzsYBu5ayHhoHJ0UqNm7ibvShmbmoz7tGi0vXaoJbGdB+GmDMLUdg8DpQXEIeVDAe8MaABvQ==",
      "dev": true
    },
    "merge-descriptors": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/merge-descriptors/-/merge-descriptors-1.0.1.tgz",
      "integrity": "sha1-sAqqVW3YtEVoFQ7J0blT8/kMu2E=",
      "dev": true
    },
    "merge-source-map": {
      "version": "1.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/merge-source-map/-/merge-source-map-1.1.0.tgz",
      "integrity": "sha512-Qkcp7P2ygktpMPh2mCQZaf3jhN6D3Z/qVZHSdWvQ+2Ef5HgRAPBO57A77+ENm0CPx2+1Ce/MYKi3ymqdfuqibw==",
      "dev": true,
      "requires": {
        "source-map": "^0.6.1"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        }
      }
    },
    "merge-stream": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/merge-stream/-/merge-stream-1.0.1.tgz",
      "integrity": "sha1-QEEgLVCKNCugAXQAjfDCUbjBNeE=",
      "dev": true,
      "requires": {
        "readable-stream": "^2.0.1"
      }
    },
    "merge2": {
      "version": "1.3.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/merge2/-/merge2-1.3.0.tgz",
      "integrity": "sha512-2j4DAdlBOkiSZIsaXk4mTE3sRS02yBHAtfy127xRV3bQUFqXkjHCHLW6Scv7DwNRbIWNHH8zpnz9zMaKXIdvYw==",
      "dev": true
    },
    "methods": {
      "version": "1.1.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/methods/-/methods-1.1.2.tgz",
      "integrity": "sha1-VSmk1nZUE07cxSZmVoNbD4Ua/O4=",
      "dev": true
    },
    "micromatch": {
      "version": "3.1.10",
      "resolved": "http://maven.paic.com.cn/repository/npm/micromatch/-/micromatch-3.1.10.tgz",
      "integrity": "sha512-MWikgl9n9M3w+bpsY3He8L+w9eF9338xRl8IAO5viDizwSzziFEyUzo2xrrloB64ADbTf8uA8vRqqttDTOmccg==",
      "dev": true,
      "requires": {
        "arr-diff": "^4.0.0",
        "array-unique": "^0.3.2",
        "braces": "^2.3.1",
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "extglob": "^2.0.4",
        "fragment-cache": "^0.2.1",
        "kind-of": "^6.0.2",
        "nanomatch": "^1.2.9",
        "object.pick": "^1.3.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.2"
      }
    },
    "miller-rabin": {
      "version": "4.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/miller-rabin/-/miller-rabin-4.0.1.tgz",
      "integrity": "sha512-115fLhvZVqWwHPbClyntxEVfVDfl9DLLTuJvq3g2O/Oxi8AiNouAHvDSzHS0viUJc+V5vm3eq91Xwqn9dp4jRA==",
      "dev": true,
      "requires": {
        "bn.js": "^4.0.0",
        "brorand": "^1.0.1"
      }
    },
    "mime": {
      "version": "2.4.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/mime/-/mime-2.4.4.tgz",
      "integrity": "sha512-LRxmNwziLPT828z+4YkNzloCFC2YM4wrB99k+AV5ZbEyfGNWfG8SO1FUXLmLDBSo89NrJZ4DIWeLjy1CHGhMGA==",
      "dev": true
    },
    "mime-db": {
      "version": "1.42.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/mime-db/-/mime-db-1.42.0.tgz",
      "integrity": "sha512-UbfJCR4UAVRNgMpfImz05smAXK7+c+ZntjaA26ANtkXLlOe947Aag5zdIcKQULAiF9Cq4WxBi9jUs5zkA84bYQ==",
      "dev": true
    },
    "mime-types": {
      "version": "2.1.25",
      "resolved": "http://maven.paic.com.cn/repository/npm/mime-types/-/mime-types-2.1.25.tgz",
      "integrity": "sha512-5KhStqB5xpTAeGqKBAMgwaYMnQik7teQN4IAzC7npDv6kzeU6prfkR67bc87J1kWMPGkoaZSq1npmexMgkmEVg==",
      "dev": true,
      "requires": {
        "mime-db": "1.42.0"
      }
    },
    "mimic-fn": {
      "version": "1.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/mimic-fn/-/mimic-fn-1.2.0.tgz",
      "integrity": "sha512-jf84uxzwiuiIVKiOLpfYk7N46TSy8ubTonmneY9vrpHNAnp0QBt2BxWV9dO3/j+BoVAb+a5G6YDPW3M5HOdMWQ==",
      "dev": true
    },
    "mini-css-extract-plugin": {
      "version": "0.8.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/mini-css-extract-plugin/-/mini-css-extract-plugin-0.8.0.tgz",
      "integrity": "sha512-MNpRGbNA52q6U92i0qbVpQNsgk7LExy41MdAlG84FeytfDOtRIf/mCHdEgG8rpTKOaNKiqUnZdlptF469hxqOw==",
      "dev": true,
      "requires": {
        "loader-utils": "^1.1.0",
        "normalize-url": "1.9.1",
        "schema-utils": "^1.0.0",
        "webpack-sources": "^1.1.0"
      },
      "dependencies": {
        "normalize-url": {
          "version": "1.9.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/normalize-url/-/normalize-url-1.9.1.tgz",
          "integrity": "sha1-LMDWazHqIwNkWENuNiDYWVTGbDw=",
          "dev": true,
          "requires": {
            "object-assign": "^4.0.1",
            "prepend-http": "^1.0.0",
            "query-string": "^4.1.0",
            "sort-keys": "^1.0.0"
          }
        }
      }
    },
    "minimalistic-assert": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/minimalistic-assert/-/minimalistic-assert-1.0.1.tgz",
      "integrity": "sha512-UtJcAD4yEaGtjPezWuO9wC4nwUnVH/8/Im3yEHQP4b67cXlD/Qr9hdITCU1xDbSEXg2XKNaP8jsReV7vQd00/A==",
      "dev": true
    },
    "minimalistic-crypto-utils": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/minimalistic-crypto-utils/-/minimalistic-crypto-utils-1.0.1.tgz",
      "integrity": "sha1-9sAMHAsIIkblxNmd+4x8CDsrWCo=",
      "dev": true
    },
    "minimatch": {
      "version": "3.0.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/minimatch/-/minimatch-3.0.4.tgz",
      "integrity": "sha512-yJHVQEhyqPLUTgt9B83PXu6W3rx4MvvHvSUvToogpwoGDOUQ+yDrR0HRot+yOCdCO7u4hX3pWft6kWBBcqh0UA==",
      "requires": {
        "brace-expansion": "^1.1.7"
      }
    },
    "minimist": {
      "version": "1.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/minimist/-/minimist-1.2.0.tgz",
      "integrity": "sha1-o1AIsg9BOD7sH7kU9M1d95omQoQ=",
      "dev": true
    },
    "mississippi": {
      "version": "3.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/mississippi/-/mississippi-3.0.0.tgz",
      "integrity": "sha512-x471SsVjUtBRtcvd4BzKE9kFC+/2TeWgKCgw0bZcw1b9l2X3QX5vCWgF+KaZaYm87Ss//rHnWryupDrgLvmSkA==",
      "dev": true,
      "requires": {
        "concat-stream": "^1.5.0",
        "duplexify": "^3.4.2",
        "end-of-stream": "^1.1.0",
        "flush-write-stream": "^1.0.0",
        "from2": "^2.1.0",
        "parallel-transform": "^1.1.0",
        "pump": "^3.0.0",
        "pumpify": "^1.3.3",
        "stream-each": "^1.1.0",
        "through2": "^2.0.0"
      }
    },
    "mixin-deep": {
      "version": "1.3.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/mixin-deep/-/mixin-deep-1.3.2.tgz",
      "integrity": "sha512-WRoDn//mXBiJ1H40rqa3vH0toePwSsGb45iInWlTySa+Uu4k3tYUSxa2v1KqAiLtvlrSzaExqS1gtk96A9zvEA==",
      "dev": true,
      "requires": {
        "for-in": "^1.0.2",
        "is-extendable": "^1.0.1"
      },
      "dependencies": {
        "is-extendable": {
          "version": "1.0.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-extendable/-/is-extendable-1.0.1.tgz",
          "integrity": "sha512-arnXMxT1hhoKo9k1LZdmlNyJdDDfy2v0fXjFlmok4+i8ul/6WlbVge9bhM74OpNPQPMGUToDtz+KXa1PneJxOA==",
          "dev": true,
          "requires": {
            "is-plain-object": "^2.0.4"
          }
        }
      }
    },
    "mkdirp": {
      "version": "0.5.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/mkdirp/-/mkdirp-0.5.1.tgz",
      "integrity": "sha1-MAV0OOrGz3+MR2fzhkjWaX11yQM=",
      "dev": true,
      "requires": {
        "minimist": "0.0.8"
      },
      "dependencies": {
        "minimist": {
          "version": "0.0.8",
          "resolved": "http://maven.paic.com.cn/repository/npm/minimist/-/minimist-0.0.8.tgz",
          "integrity": "sha1-hX/Kv8M5fSYluCKCYuhqp6ARsF0=",
          "dev": true
        }
      }
    },
    "move-concurrently": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/move-concurrently/-/move-concurrently-1.0.1.tgz",
      "integrity": "sha1-viwAX9oy4LKa8fBdfEszIUxwH5I=",
      "dev": true,
      "requires": {
        "aproba": "^1.1.1",
        "copy-concurrently": "^1.0.0",
        "fs-write-stream-atomic": "^1.0.8",
        "mkdirp": "^0.5.1",
        "rimraf": "^2.5.4",
        "run-queue": "^1.0.3"
      }
    },
    "ms": {
      "version": "2.1.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/ms/-/ms-2.1.2.tgz",
      "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w==",
      "dev": true
    },
    "multicast-dns": {
      "version": "6.2.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/multicast-dns/-/multicast-dns-6.2.3.tgz",
      "integrity": "sha512-ji6J5enbMyGRHIAkAOu3WdV8nggqviKCEKtXcOqfphZZtQrmHKycfynJ2V7eVPUA4NhJ6V7Wf4TmGbTwKE9B6g==",
      "dev": true,
      "requires": {
        "dns-packet": "^1.3.1",
        "thunky": "^1.0.2"
      }
    },
    "multicast-dns-service-types": {
      "version": "1.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/multicast-dns-service-types/-/multicast-dns-service-types-1.1.0.tgz",
      "integrity": "sha1-iZ8R2WhuXgXLkbNdXw5jt3PPyQE=",
      "dev": true
    },
    "mute-stream": {
      "version": "0.0.7",
      "resolved": "http://maven.paic.com.cn/repository/npm/mute-stream/-/mute-stream-0.0.7.tgz",
      "integrity": "sha1-MHXOk7whuPq0PhvE2n6BFe0ee6s=",
      "dev": true
    },
    "mz": {
      "version": "2.7.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/mz/-/mz-2.7.0.tgz",
      "integrity": "sha512-z81GNO7nnYMEhrGh9LeymoE4+Yr0Wn5McHIZMK5cfQCl+NDX08sCZgUc9/6MHni9IWuFLm1Z3HTCXu2z9fN62Q==",
      "dev": true,
      "requires": {
        "any-promise": "^1.0.0",
        "object-assign": "^4.0.1",
        "thenify-all": "^1.0.0"
      }
    },
    "nan": {
      "version": "2.14.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/nan/-/nan-2.14.0.tgz",
      "integrity": "sha512-INOFj37C7k3AfaNTtX8RhsTw7qRy7eLET14cROi9+5HAVbbHuIWUHEauBv5qT4Av2tWasiTY1Jw6puUNqRJXQg==",
      "dev": true,
      "optional": true
    },
    "nanomatch": {
      "version": "1.2.13",
      "resolved": "http://maven.paic.com.cn/repository/npm/nanomatch/-/nanomatch-1.2.13.tgz",
      "integrity": "sha512-fpoe2T0RbHwBTBUOftAfBPaDEi06ufaUai0mE6Yn1kacc3SnTErfb/h+X94VXzI64rKFHYImXSvdwGGCmwOqCA==",
      "dev": true,
      "requires": {
        "arr-diff": "^4.0.0",
        "array-unique": "^0.3.2",
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "fragment-cache": "^0.2.1",
        "is-windows": "^1.0.2",
        "kind-of": "^6.0.2",
        "object.pick": "^1.3.0",
        "regex-not": "^1.0.0",
        "snapdragon": "^0.8.1",
        "to-regex": "^3.0.1"
      }
    },
    "natural-compare": {
      "version": "1.4.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha1-Sr6/7tdUHywnrPspvbvRXI1bpPc=",
      "dev": true
    },
    "negotiator": {
      "version": "0.6.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/negotiator/-/negotiator-0.6.2.tgz",
      "integrity": "sha512-hZXc7K2e+PgeI1eDBe/10Ard4ekbfrrqG8Ep+8Jmf4JID2bNg7NvCPOZN+kfF574pFQI7mum2AUqDidoKqcTOw==",
      "dev": true
    },
    "neo-async": {
      "version": "2.6.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/neo-async/-/neo-async-2.6.1.tgz",
      "integrity": "sha512-iyam8fBuCUpWeKPGpaNMetEocMt364qkCsfL9JuhjXX6dRnguRVOfk2GZaDpPjcOKiiXCPINZC1GczQ7iTq3Zw==",
      "dev": true
    },
    "nice-try": {
      "version": "1.0.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/nice-try/-/nice-try-1.0.5.tgz",
      "integrity": "sha512-1nh45deeb5olNY7eX82BkPO7SSxR5SSYJiPTrTdFUVYwAl8CKMA5N9PjTYkHiRjisVcxcQ1HXdLhx2qxxJzLNQ==",
      "dev": true
    },
    "no-case": {
      "version": "2.3.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/no-case/-/no-case-2.3.2.tgz",
      "integrity": "sha512-rmTZ9kz+f3rCvK2TD1Ue/oZlns7OGoIWP4fc3llxxRXlOkHKoWPPWJOfFYpITabSow43QJbRIoHQXtt10VldyQ==",
      "dev": true,
      "requires": {
        "lower-case": "^1.1.1"
      }
    },
    "node-cache": {
      "version": "4.2.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/node-cache/-/node-cache-4.2.1.tgz",
      "integrity": "sha512-BOb67bWg2dTyax5kdef5WfU3X8xu4wPg+zHzkvls0Q/QpYycIFRLEEIdAx9Wma43DxG6Qzn4illdZoYseKWa4A==",
      "dev": true,
      "requires": {
        "clone": "2.x",
        "lodash": "^4.17.15"
      },
      "dependencies": {
        "clone": {
          "version": "2.1.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/clone/-/clone-2.1.2.tgz",
          "integrity": "sha1-G39Ln1kfHo+DZwQBYANFoCiHQ18=",
          "dev": true
        }
      }
    },
    "node-forge": {
      "version": "0.9.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/node-forge/-/node-forge-0.9.0.tgz",
      "integrity": "sha512-7ASaDa3pD+lJ3WvXFsxekJQelBKRpne+GOVbLbtHYdd7pFspyeuJHnWfLplGf3SwKGbfs/aYl5V/JCIaHVUKKQ==",
      "dev": true
    },
    "node-int64": {
      "version": "0.4.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/node-int64/-/node-int64-0.4.0.tgz",
      "integrity": "sha1-h6kGXNs1XTGC2PlM4RGIuCXGijs=",
      "dev": true
    },
    "node-ipc": {
      "version": "9.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/node-ipc/-/node-ipc-9.1.1.tgz",
      "integrity": "sha512-FAyICv0sIRJxVp3GW5fzgaf9jwwRQxAKDJlmNFUL5hOy+W4X/I5AypyHoq0DXXbo9o/gt79gj++4cMr4jVWE/w==",
      "dev": true,
      "requires": {
        "event-pubsub": "4.3.0",
        "js-message": "1.0.5",
        "js-queue": "2.0.0"
      }
    },
    "node-libs-browser": {
      "version": "2.2.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/node-libs-browser/-/node-libs-browser-2.2.1.tgz",
      "integrity": "sha512-h/zcD8H9kaDZ9ALUWwlBUDo6TKF8a7qBSCSEGfjTVIYeqsioSKaAX+BN7NgiMGp6iSIXZ3PxgCu8KS3b71YK5Q==",
      "dev": true,
      "requires": {
        "assert": "^1.1.1",
        "browserify-zlib": "^0.2.0",
        "buffer": "^4.3.0",
        "console-browserify": "^1.1.0",
        "constants-browserify": "^1.0.0",
        "crypto-browserify": "^3.11.0",
        "domain-browser": "^1.1.1",
        "events": "^3.0.0",
        "https-browserify": "^1.0.0",
        "os-browserify": "^0.3.0",
        "path-browserify": "0.0.1",
        "process": "^0.11.10",
        "punycode": "^1.2.4",
        "querystring-es3": "^0.2.0",
        "readable-stream": "^2.3.3",
        "stream-browserify": "^2.0.1",
        "stream-http": "^2.7.2",
        "string_decoder": "^1.0.0",
        "timers-browserify": "^2.0.4",
        "tty-browserify": "0.0.0",
        "url": "^0.11.0",
        "util": "^0.11.0",
        "vm-browserify": "^1.0.1"
      },
      "dependencies": {
        "punycode": {
          "version": "1.4.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/punycode/-/punycode-1.4.1.tgz",
          "integrity": "sha1-wNWmOycYgArY4esPpSachN1BhF4=",
          "dev": true
        }
      }
    },
    "node-notifier": {
      "version": "5.4.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/node-notifier/-/node-notifier-5.4.3.tgz",
      "integrity": "sha512-M4UBGcs4jeOK9CjTsYwkvH6/MzuUmGCyTW+kCY7uO+1ZVr0+FHGdPdIf5CCLqAaxnRrWidyoQlNkMIIVwbKB8Q==",
      "dev": true,
      "requires": {
        "growly": "^1.3.0",
        "is-wsl": "^1.1.0",
        "semver": "^5.5.0",
        "shellwords": "^0.1.1",
        "which": "^1.3.0"
      }
    },
    "node-releases": {
      "version": "1.1.42",
      "resolved": "http://maven.paic.com.cn/repository/npm/node-releases/-/node-releases-1.1.42.tgz",
      "integrity": "sha512-OQ/ESmUqGawI2PRX+XIRao44qWYBBfN54ImQYdWVTQqUckuejOg76ysSqDBK8NG3zwySRVnX36JwDQ6x+9GxzA==",
      "dev": true,
      "requires": {
        "semver": "^6.3.0"
      },
      "dependencies": {
        "semver": {
          "version": "6.3.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/semver/-/semver-6.3.0.tgz",
          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
          "dev": true
        }
      }
    },
    "nopt": {
      "version": "4.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/nopt/-/nopt-4.0.1.tgz",
      "integrity": "sha1-0NRoWv1UFRk8jHUFYC0NF81kR00=",
      "dev": true,
      "requires": {
        "abbrev": "1",
        "osenv": "^0.1.4"
      }
    },
    "normalize-package-data": {
      "version": "2.5.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/normalize-package-data/-/normalize-package-data-2.5.0.tgz",
      "integrity": "sha512-/5CMN3T0R4XTj4DcGaexo+roZSdSFW/0AOOTROrjxzCG1wrWXEsGbRKevjlIL+ZDE4sZlJr5ED4YW0yqmkK+eA==",
      "dev": true,
      "requires": {
        "hosted-git-info": "^2.1.4",
        "resolve": "^1.10.0",
        "semver": "2 || 3 || 4 || 5",
        "validate-npm-package-license": "^3.0.1"
      }
    },
    "normalize-path": {
      "version": "3.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/normalize-path/-/normalize-path-3.0.0.tgz",
      "integrity": "sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==",
      "dev": true
    },
    "normalize-range": {
      "version": "0.1.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/normalize-range/-/normalize-range-0.1.2.tgz",
      "integrity": "sha1-LRDAa9/TEuqXd2laTShDlFa3WUI=",
      "dev": true
    },
    "normalize-url": {
      "version": "3.3.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/normalize-url/-/normalize-url-3.3.0.tgz",
      "integrity": "sha512-U+JJi7duF1o+u2pynbp2zXDW2/PADgC30f0GsHZtRh+HOcXHnw137TrNlyxxRvWW5fjKd3bcLHPxofWuCjaeZg==",
      "dev": true
    },
    "normalize-wheel": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/normalize-wheel/-/normalize-wheel-1.0.1.tgz",
      "integrity": "sha1-rsiGr/2wRQcNhWRH32Ls+GFG7EU="
    },
    "npm-run-path": {
      "version": "2.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/npm-run-path/-/npm-run-path-2.0.2.tgz",
      "integrity": "sha1-NakjLfo11wZ7TLLd8jV7GHFTbF8=",
      "dev": true,
      "requires": {
        "path-key": "^2.0.0"
      }
    },
    "nth-check": {
      "version": "1.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/nth-check/-/nth-check-1.0.2.tgz",
      "integrity": "sha512-WeBOdju8SnzPN5vTUJYxYUxLeXpCaVP5i5e0LF8fg7WORF2Wd7wFX/pk0tYZk7s8T+J7VLy0Da6J1+wCT0AtHg==",
      "dev": true,
      "requires": {
        "boolbase": "~1.0.0"
      }
    },
    "num2fraction": {
      "version": "1.2.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/num2fraction/-/num2fraction-1.2.2.tgz",
      "integrity": "sha1-b2gragJ6Tp3fpFZM0lidHU5mnt4=",
      "dev": true
    },
    "number-is-nan": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/number-is-nan/-/number-is-nan-1.0.1.tgz",
      "integrity": "sha1-CXtgK1NCKlIsGvuHkDGDNpQaAR0=",
      "dev": true
    },
    "nwsapi": {
      "version": "2.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/nwsapi/-/nwsapi-2.2.0.tgz",
      "integrity": "sha512-h2AatdwYH+JHiZpv7pt/gSX1XoRGb7L/qSIeuqA6GwYoF9w1vP1cw42TO0aI2pNyshRK5893hNSl+1//vHK7hQ==",
      "dev": true
    },
    "oauth-sign": {
      "version": "0.9.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/oauth-sign/-/oauth-sign-0.9.0.tgz",
      "integrity": "sha512-fexhUFFPTGV8ybAtSIGbV6gOkSv8UtRbDBnAyLQw4QPKkgNlsH2ByPGtMUqdWkos6YCRmAqViwgZrJc/mRDzZQ==",
      "dev": true
    },
    "object-assign": {
      "version": "4.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/object-assign/-/object-assign-4.1.1.tgz",
      "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM=",
      "dev": true
    },
    "object-copy": {
      "version": "0.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/object-copy/-/object-copy-0.1.0.tgz",
      "integrity": "sha1-fn2Fi3gb18mRpBupde04EnVOmYw=",
      "dev": true,
      "requires": {
        "copy-descriptor": "^0.1.0",
        "define-property": "^0.2.5",
        "kind-of": "^3.0.3"
      },
      "dependencies": {
        "define-property": {
          "version": "0.2.5",
          "resolved": "http://maven.paic.com.cn/repository/npm/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "dev": true,
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        },
        "kind-of": {
          "version": "3.2.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "dev": true,
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "object-hash": {
      "version": "1.3.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/object-hash/-/object-hash-1.3.1.tgz",
      "integrity": "sha512-OSuu/pU4ENM9kmREg0BdNrUDIl1heYa4mBZacJc+vVWz4GtAwu7jO8s4AIt2aGRUTqxykpWzI3Oqnsm13tTMDA==",
      "dev": true
    },
    "object-inspect": {
      "version": "1.7.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/object-inspect/-/object-inspect-1.7.0.tgz",
      "integrity": "sha512-a7pEHdh1xKIAgTySUGgLMx/xwDZskN1Ud6egYYN3EdRW4ZMPNEDUTF+hwy2LUC+Bl+SyLXANnwz/jyh/qutKUw==",
      "dev": true
    },
    "object-is": {
      "version": "1.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/object-is/-/object-is-1.0.2.tgz",
      "integrity": "sha512-Epah+btZd5wrrfjkJZq1AOB9O6OxUQto45hzFd7lXGrpHPGE0W1k+426yrZV+k6NJOzLNNW/nVsmZdIWsAqoOQ==",
      "dev": true
    },
    "object-keys": {
      "version": "1.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/object-keys/-/object-keys-1.1.1.tgz",
      "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA==",
      "dev": true
    },
    "object-visit": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/object-visit/-/object-visit-1.0.1.tgz",
      "integrity": "sha1-95xEk68MU3e1n+OdOV5BBC3QRbs=",
      "dev": true,
      "requires": {
        "isobject": "^3.0.0"
      }
    },
    "object.assign": {
      "version": "4.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/object.assign/-/object.assign-4.1.0.tgz",
      "integrity": "sha512-exHJeq6kBKj58mqGyTQ9DFvrZC/eR6OwxzoM9YRoGBqrXYonaFyGiFMuc9VZrXf7DarreEwMpurG3dd+CNyW5w==",
      "dev": true,
      "requires": {
        "define-properties": "^1.1.2",
        "function-bind": "^1.1.1",
        "has-symbols": "^1.0.0",
        "object-keys": "^1.0.11"
      }
    },
    "object.entries": {
      "version": "1.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/object.entries/-/object.entries-1.1.1.tgz",
      "integrity": "sha512-ilqR7BgdyZetJutmDPfXCDffGa0/Yzl2ivVNpbx/g4UeWrCdRnFDUBrKJGLhGieRHDATnyZXWBeCb29k9CJysQ==",
      "dev": true,
      "requires": {
        "define-properties": "^1.1.3",
        "es-abstract": "^1.17.0-next.1",
        "function-bind": "^1.1.1",
        "has": "^1.0.3"
      }
    },
    "object.getownpropertydescriptors": {
      "version": "2.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/object.getownpropertydescriptors/-/object.getownpropertydescriptors-2.1.0.tgz",
      "integrity": "sha512-Z53Oah9A3TdLoblT7VKJaTDdXdT+lQO+cNpKVnya5JDe9uLvzu1YyY1yFDFrcxrlRgWrEFH0jJtD/IbuwjcEVg==",
      "dev": true,
      "requires": {
        "define-properties": "^1.1.3",
        "es-abstract": "^1.17.0-next.1"
      }
    },
    "object.omit": {
      "version": "2.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/object.omit/-/object.omit-2.0.1.tgz",
      "integrity": "sha1-Gpx0SCnznbuFjHbKNXmuKlTr0fo=",
      "dev": true,
      "requires": {
        "for-own": "^0.1.4",
        "is-extendable": "^0.1.1"
      }
    },
    "object.pick": {
      "version": "1.3.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/object.pick/-/object.pick-1.3.0.tgz",
      "integrity": "sha1-h6EKxMFpS9Lhy/U1kaZhQftd10c=",
      "dev": true,
      "requires": {
        "isobject": "^3.0.1"
      }
    },
    "object.values": {
      "version": "1.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/object.values/-/object.values-1.1.1.tgz",
      "integrity": "sha512-WTa54g2K8iu0kmS/us18jEmdv1a4Wi//BZ/DTVYEcH0XhLM5NYdpDHja3gt57VrZLcNAO2WGA+KpWsDBaHt6eA==",
      "dev": true,
      "requires": {
        "define-properties": "^1.1.3",
        "es-abstract": "^1.17.0-next.1",
        "function-bind": "^1.1.1",
        "has": "^1.0.3"
      }
    },
    "obuf": {
      "version": "1.1.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/obuf/-/obuf-1.1.2.tgz",
      "integrity": "sha512-PX1wu0AmAdPqOL1mWhqmlOd8kOIZQwGZw6rh7uby9fTc5lhaOWFLX3I6R1hrF9k3zUY40e6igsLGkDXK92LJNg==",
      "dev": true
    },
    "on-finished": {
      "version": "2.3.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/on-finished/-/on-finished-2.3.0.tgz",
      "integrity": "sha1-IPEzZIGwg811M3mSoWlxqi2QaUc=",
      "dev": true,
      "requires": {
        "ee-first": "1.1.1"
      }
    },
    "on-headers": {
      "version": "1.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/on-headers/-/on-headers-1.0.2.tgz",
      "integrity": "sha512-pZAE+FJLoyITytdqK0U5s+FIpjN0JP3OzFi/u8Rx+EV5/W+JTWGXG8xFzevE7AjBfDqHv/8vL8qQsIhHnqRkrA==",
      "dev": true
    },
    "once": {
      "version": "1.4.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/once/-/once-1.4.0.tgz",
      "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
      "dev": true,
      "requires": {
        "wrappy": "1"
      }
    },
    "onetime": {
      "version": "2.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/onetime/-/onetime-2.0.1.tgz",
      "integrity": "sha1-BnQoIw/WdEOyeUsiu6UotoZ5YtQ=",
      "dev": true,
      "requires": {
        "mimic-fn": "^1.0.0"
      }
    },
    "open": {
      "version": "6.4.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/open/-/open-6.4.0.tgz",
      "integrity": "sha512-IFenVPgF70fSm1keSd2iDBIDIBZkroLeuffXq+wKTzTJlBpesFWojV9lb8mzOfaAzM1sr7HQHuO0vtV0zYekGg==",
      "dev": true,
      "requires": {
        "is-wsl": "^1.1.0"
      }
    },
    "opener": {
      "version": "1.5.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/opener/-/opener-1.5.1.tgz",
      "integrity": "sha512-goYSy5c2UXE4Ra1xixabeVh1guIX/ZV/YokJksb6q2lubWu6UbvPQ20p542/sFIll1nl8JnCyK9oBaOcCWXwvA==",
      "dev": true
    },
    "opn": {
      "version": "5.5.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/opn/-/opn-5.5.0.tgz",
      "integrity": "sha512-PqHpggC9bLV0VeWcdKhkpxY+3JTzetLSqTCWL/z/tFIbI6G8JCjondXklT1JinczLz2Xib62sSp0T/gKT4KksA==",
      "dev": true,
      "requires": {
        "is-wsl": "^1.1.0"
      }
    },
    "optimist": {
      "version": "0.6.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/optimist/-/optimist-0.6.1.tgz",
      "integrity": "sha1-2j6nRob6IaGaERwybpDrFaAZZoY=",
      "dev": true,
      "requires": {
        "minimist": "~0.0.1",
        "wordwrap": "~0.0.2"
      },
      "dependencies": {
        "minimist": {
          "version": "0.0.10",
          "resolved": "http://maven.paic.com.cn/repository/npm/minimist/-/minimist-0.0.10.tgz",
          "integrity": "sha1-3j+YVD2/lggr5IrRoMfNqDYwHc8=",
          "dev": true
        }
      }
    },
    "optionator": {
      "version": "0.8.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/optionator/-/optionator-0.8.3.tgz",
      "integrity": "sha512-+IW9pACdk3XWmmTXG8m3upGUJst5XRGzxMRjXzAuJ1XnIFNvfhjjIuYkDvysnPQ7qzqVzLt78BCruntqRhWQbA==",
      "dev": true,
      "requires": {
        "deep-is": "~0.1.3",
        "fast-levenshtein": "~2.0.6",
        "levn": "~0.3.0",
        "prelude-ls": "~1.1.2",
        "type-check": "~0.3.2",
        "word-wrap": "~1.2.3"
      }
    },
    "ora": {
      "version": "3.4.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/ora/-/ora-3.4.0.tgz",
      "integrity": "sha512-eNwHudNbO1folBP3JsZ19v9azXWtQZjICdr3Q0TDPIaeBQ3mXLrh54wM+er0+hSp+dWKf+Z8KM58CYzEyIYxYg==",
      "dev": true,
      "requires": {
        "chalk": "^2.4.2",
        "cli-cursor": "^2.1.0",
        "cli-spinners": "^2.0.0",
        "log-symbols": "^2.2.0",
        "strip-ansi": "^5.2.0",
        "wcwidth": "^1.0.1"
      }
    },
    "original": {
      "version": "1.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/original/-/original-1.0.2.tgz",
      "integrity": "sha512-hyBVl6iqqUOJ8FqRe+l/gS8H+kKYjrEndd5Pm1MfBtsEKA038HkkdbAl/72EAXGyonD/PFsvmVG+EvcIpliMBg==",
      "dev": true,
      "requires": {
        "url-parse": "^1.4.3"
      }
    },
    "os-browserify": {
      "version": "0.3.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/os-browserify/-/os-browserify-0.3.0.tgz",
      "integrity": "sha1-hUNzx/XCMVkU/Jv8a9gjj92h7Cc=",
      "dev": true
    },
    "os-homedir": {
      "version": "1.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/os-homedir/-/os-homedir-1.0.2.tgz",
      "integrity": "sha1-/7xJiDNuDoM94MFox+8VISGqf7M=",
      "dev": true
    },
    "os-locale": {
      "version": "3.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/os-locale/-/os-locale-3.1.0.tgz",
      "integrity": "sha512-Z8l3R4wYWM40/52Z+S265okfFj8Kt2cC2MKY+xNi3kFs+XGI7WXu/I309QQQYbRW4ijiZ+yxs9pqEhJh0DqW3Q==",
      "dev": true,
      "requires": {
        "execa": "^1.0.0",
        "lcid": "^2.0.0",
        "mem": "^4.0.0"
      }
    },
    "os-tmpdir": {
      "version": "1.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/os-tmpdir/-/os-tmpdir-1.0.2.tgz",
      "integrity": "sha1-u+Z0BseaqFxc/sdm/lc0VV36EnQ=",
      "dev": true
    },
    "osenv": {
      "version": "0.1.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/osenv/-/osenv-0.1.5.tgz",
      "integrity": "sha512-0CWcCECdMVc2Rw3U5w9ZjqX6ga6ubk1xDVKxtBQPK7wis/0F2r9T6k4ydGYhecl7YUBxBVxhL5oisPsNxAPe2g==",
      "dev": true,
      "requires": {
        "os-homedir": "^1.0.0",
        "os-tmpdir": "^1.0.0"
      }
    },
    "p-defer": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/p-defer/-/p-defer-1.0.0.tgz",
      "integrity": "sha1-n26xgvbJqozXQwBKfU+WsZaw+ww=",
      "dev": true
    },
    "p-finally": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/p-finally/-/p-finally-1.0.0.tgz",
      "integrity": "sha1-P7z7FbiZpEEjs0ttzBi3JDNqLK4=",
      "dev": true
    },
    "p-is-promise": {
      "version": "2.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/p-is-promise/-/p-is-promise-2.1.0.tgz",
      "integrity": "sha512-Y3W0wlRPK8ZMRbNq97l4M5otioeA5lm1z7bkNkxCka8HSPjR0xRWmpCmc9utiaLP9Jb1eD8BgeIxTW4AIF45Pg==",
      "dev": true
    },
    "p-limit": {
      "version": "1.3.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/p-limit/-/p-limit-1.3.0.tgz",
      "integrity": "sha512-vvcXsLAJ9Dr5rQOPk7toZQZJApBl2K4J6dANSsEuh6QI41JYcsS/qhTGa9ErIUUgK3WNQoJYvylxvjqmiqEA9Q==",
      "dev": true,
      "requires": {
        "p-try": "^1.0.0"
      }
    },
    "p-locate": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/p-locate/-/p-locate-2.0.0.tgz",
      "integrity": "sha1-IKAQOyIqcMj9OcwuWAaA893l7EM=",
      "dev": true,
      "requires": {
        "p-limit": "^1.1.0"
      }
    },
    "p-map": {
      "version": "2.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/p-map/-/p-map-2.1.0.tgz",
      "integrity": "sha512-y3b8Kpd8OAN444hxfBbFfj1FY/RjtTd8tzYwhUqNYXx0fXx2iX4maP4Qr6qhIKbQXI02wTLAda4fYUbDagTUFw==",
      "dev": true
    },
    "p-retry": {
      "version": "3.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/p-retry/-/p-retry-3.0.1.tgz",
      "integrity": "sha512-XE6G4+YTTkT2a0UWb2kjZe8xNwf8bIbnqpc/IS/idOBVhyves0mK5OJgeocjx7q5pvX/6m23xuzVPYT1uGM73w==",
      "dev": true,
      "requires": {
        "retry": "^0.12.0"
      }
    },
    "p-try": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/p-try/-/p-try-1.0.0.tgz",
      "integrity": "sha1-y8ec26+P1CKOE/Yh8rGiN8GyB7M=",
      "dev": true
    },
    "pako": {
      "version": "1.0.10",
      "resolved": "http://maven.paic.com.cn/repository/npm/pako/-/pako-1.0.10.tgz",
      "integrity": "sha512-0DTvPVU3ed8+HNXOu5Bs+o//Mbdj9VNQMUOe9oKCwh8l0GNwpTDMKCWbRjgtD291AWnkAgkqA/LOnQS8AmS1tw==",
      "dev": true
    },
    "parallel-transform": {
      "version": "1.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/parallel-transform/-/parallel-transform-1.2.0.tgz",
      "integrity": "sha512-P2vSmIu38uIlvdcU7fDkyrxj33gTUy/ABO5ZUbGowxNCopBq/OoD42bP4UmMrJoPyk4Uqf0mu3mtWBhHCZD8yg==",
      "dev": true,
      "requires": {
        "cyclist": "^1.0.1",
        "inherits": "^2.0.3",
        "readable-stream": "^2.1.5"
      }
    },
    "param-case": {
      "version": "2.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/param-case/-/param-case-2.1.1.tgz",
      "integrity": "sha1-35T9jPZTHs915r75oIWPvHK+Ikc=",
      "dev": true,
      "requires": {
        "no-case": "^2.2.0"
      }
    },
    "parent-module": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/parent-module/-/parent-module-1.0.1.tgz",
      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
      "dev": true,
      "requires": {
        "callsites": "^3.0.0"
      },
      "dependencies": {
        "callsites": {
          "version": "3.1.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/callsites/-/callsites-3.1.0.tgz",
          "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
          "dev": true
        }
      }
    },
    "parse-asn1": {
      "version": "5.1.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/parse-asn1/-/parse-asn1-5.1.5.tgz",
      "integrity": "sha512-jkMYn1dcJqF6d5CpU689bq7w/b5ALS9ROVSpQDPrZsqqesUJii9qutvoT5ltGedNXMO2e16YUWIghG9KxaViTQ==",
      "dev": true,
      "requires": {
        "asn1.js": "^4.0.0",
        "browserify-aes": "^1.0.0",
        "create-hash": "^1.1.0",
        "evp_bytestokey": "^1.0.0",
        "pbkdf2": "^3.0.3",
        "safe-buffer": "^5.1.1"
      }
    },
    "parse-glob": {
      "version": "3.0.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/parse-glob/-/parse-glob-3.0.4.tgz",
      "integrity": "sha1-ssN2z7EfNVE7rdFz7wu246OIORw=",
      "dev": true,
      "requires": {
        "glob-base": "^0.3.0",
        "is-dotfile": "^1.0.0",
        "is-extglob": "^1.0.0",
        "is-glob": "^2.0.0"
      },
      "dependencies": {
        "is-extglob": {
          "version": "1.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-extglob/-/is-extglob-1.0.0.tgz",
          "integrity": "sha1-rEaBd8SUNAWgkvyPKXYMb/xiBsA=",
          "dev": true
        },
        "is-glob": {
          "version": "2.0.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-glob/-/is-glob-2.0.1.tgz",
          "integrity": "sha1-0Jb5JqPe1WAPP9/ZEZjLCIjC2GM=",
          "dev": true,
          "requires": {
            "is-extglob": "^1.0.0"
          }
        }
      }
    },
    "parse-json": {
      "version": "2.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/parse-json/-/parse-json-2.2.0.tgz",
      "integrity": "sha1-9ID0BDTvgHQfhGkJn43qGPVaTck=",
      "dev": true,
      "requires": {
        "error-ex": "^1.2.0"
      }
    },
    "parse5": {
      "version": "4.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/parse5/-/parse5-4.0.0.tgz",
      "integrity": "sha512-VrZ7eOd3T1Fk4XWNXMgiGBK/z0MG48BWG2uQNU4I72fkQuKUTZpl+u9k+CxEG0twMVzSmXEEz12z5Fnw1jIQFA==",
      "dev": true
    },
    "parse5-htmlparser2-tree-adapter": {
      "version": "5.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/parse5-htmlparser2-tree-adapter/-/parse5-htmlparser2-tree-adapter-5.1.1.tgz",
      "integrity": "sha512-CF+TKjXqoqyDwHqBhFQ+3l5t83xYi6fVT1tQNg+Ye0JRLnTxWvIroCjEp1A0k4lneHNBGnICUf0cfYVYGEazqw==",
      "dev": true,
      "requires": {
        "parse5": "^5.1.1"
      },
      "dependencies": {
        "parse5": {
          "version": "5.1.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/parse5/-/parse5-5.1.1.tgz",
          "integrity": "sha512-ugq4DFI0Ptb+WWjAdOK16+u/nHfiIrcE+sh8kZMaM0WllQKLI9rOUq6c2b7cwPkXdzfQESqvoqK6ug7U/Yyzug==",
          "dev": true
        }
      }
    },
    "parseurl": {
      "version": "1.3.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/parseurl/-/parseurl-1.3.3.tgz",
      "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ==",
      "dev": true
    },
    "pascalcase": {
      "version": "0.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/pascalcase/-/pascalcase-0.1.1.tgz",
      "integrity": "sha1-s2PlXoAGym/iF4TS2yK9FdeRfxQ=",
      "dev": true
    },
    "path-browserify": {
      "version": "0.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/path-browserify/-/path-browserify-0.0.1.tgz",
      "integrity": "sha512-BapA40NHICOS+USX9SN4tyhq+A2RrN/Ws5F0Z5aMHDp98Fl86lX8Oti8B7uN93L4Ifv4fHOEA+pQw87gmMO/lQ==",
      "dev": true
    },
    "path-dirname": {
      "version": "1.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/path-dirname/-/path-dirname-1.0.2.tgz",
      "integrity": "sha1-zDPSTVJeCZpTiMAzbG4yuRYGCeA=",
      "dev": true
    },
    "path-exists": {
      "version": "3.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/path-exists/-/path-exists-3.0.0.tgz",
      "integrity": "sha1-zg6+ql94yxiSXqfYENe1mwEP1RU=",
      "dev": true
    },
    "path-is-absolute": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha1-F0uSaHNVNP+8es5r9TpanhtcX18=",
      "dev": true
    },
    "path-is-inside": {
      "version": "1.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/path-is-inside/-/path-is-inside-1.0.2.tgz",
      "integrity": "sha1-NlQX3t5EQw0cEa9hAn+s8HS9/FM=",
      "dev": true
    },
    "path-key": {
      "version": "2.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/path-key/-/path-key-2.0.1.tgz",
      "integrity": "sha1-QRyttXTFoUDTpLGRDUDYDMn0C0A=",
      "dev": true
    },
    "path-parse": {
      "version": "1.0.6",
      "resolved": "http://maven.paic.com.cn/repository/npm/path-parse/-/path-parse-1.0.6.tgz",
      "integrity": "sha512-GSmOT2EbHrINBf9SR7CDELwlJ8AENk3Qn7OikK4nFYAu3Ote2+JYNVvkpAEQm3/TLNEJFD/xZJjzyxg3KBWOzw=="
    },
    "path-to-regexp": {
      "version": "0.1.7",
      "resolved": "http://maven.paic.com.cn/repository/npm/path-to-regexp/-/path-to-regexp-0.1.7.tgz",
      "integrity": "sha1-32BBeABfUi8V60SQ5yR6G/qmf4w=",
      "dev": true
    },
    "path-type": {
      "version": "3.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/path-type/-/path-type-3.0.0.tgz",
      "integrity": "sha512-T2ZUsdZFHgA3u4e5PfPbjd7HDDpxPnQb5jN0SrDsjNSuVXHJqtwTnWqG0B1jZrgmJ/7lj1EmVIByWt1gxGkWvg==",
      "dev": true,
      "requires": {
        "pify": "^3.0.0"
      },
      "dependencies": {
        "pify": {
          "version": "3.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/pify/-/pify-3.0.0.tgz",
          "integrity": "sha1-5aSs0sEB/fPZpNB/DbxNtJ3SgXY=",
          "dev": true
        }
      }
    },
    "pbkdf2": {
      "version": "3.0.17",
      "resolved": "http://maven.paic.com.cn/repository/npm/pbkdf2/-/pbkdf2-3.0.17.tgz",
      "integrity": "sha512-U/il5MsrZp7mGg3mSQfn742na2T+1/vHDCG5/iTI3X9MKUuYUZVLQhyRsg06mCgDBTd57TxzgZt7P+fYfjRLtA==",
      "dev": true,
      "requires": {
        "create-hash": "^1.1.2",
        "create-hmac": "^1.1.4",
        "ripemd160": "^2.0.1",
        "safe-buffer": "^5.0.1",
        "sha.js": "^2.4.8"
      }
    },
    "performance-now": {
      "version": "2.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/performance-now/-/performance-now-2.1.0.tgz",
      "integrity": "sha1-Ywn04OX6kT7BxpMHrjZLSzd8nns=",
      "dev": true
    },
    "pify": {
      "version": "4.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/pify/-/pify-4.0.1.tgz",
      "integrity": "sha512-uB80kBFb/tfd68bVleG9T5GGsGPjJrLAUpR5PZIrhBnIaRTQRjqdJSsIKkOP6OAIFbj7GOrcudc5pNjZ+geV2g==",
      "dev": true
    },
    "pinkie": {
      "version": "2.0.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/pinkie/-/pinkie-2.0.4.tgz",
      "integrity": "sha1-clVrgM+g1IqXToDnckjoDtT3+HA=",
      "dev": true
    },
    "pinkie-promise": {
      "version": "2.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/pinkie-promise/-/pinkie-promise-2.0.1.tgz",
      "integrity": "sha1-ITXW36ejWMBprJsXh3YogihFD/o=",
      "dev": true,
      "requires": {
        "pinkie": "^2.0.0"
      }
    },
    "pkg-dir": {
      "version": "3.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/pkg-dir/-/pkg-dir-3.0.0.tgz",
      "integrity": "sha512-/E57AYkoeQ25qkxMj5PBOVgF8Kiu/h7cYS30Z5+R7WaiCCBfLq58ZI/dSeaEKb9WVJV5n/03QwrN3IeWIFllvw==",
      "dev": true,
      "requires": {
        "find-up": "^3.0.0"
      },
      "dependencies": {
        "find-up": {
          "version": "3.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/find-up/-/find-up-3.0.0.tgz",
          "integrity": "sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==",
          "dev": true,
          "requires": {
            "locate-path": "^3.0.0"
          }
        },
        "locate-path": {
          "version": "3.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/locate-path/-/locate-path-3.0.0.tgz",
          "integrity": "sha512-7AO748wWnIhNqAuaty2ZWHkQHRSNfPVIsPIfwEOWO22AmaoVrWavlOcMR5nzTLNYvp36X220/maaRsrec1G65A==",
          "dev": true,
          "requires": {
            "p-locate": "^3.0.0",
            "path-exists": "^3.0.0"
          }
        },
        "p-limit": {
          "version": "2.2.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/p-limit/-/p-limit-2.2.1.tgz",
          "integrity": "sha512-85Tk+90UCVWvbDavCLKPOLC9vvY8OwEX/RtKF+/1OADJMVlFfEHOiMTPVyxg7mk/dKa+ipdHm0OUkTvCpMTuwg==",
          "dev": true,
          "requires": {
            "p-try": "^2.0.0"
          }
        },
        "p-locate": {
          "version": "3.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/p-locate/-/p-locate-3.0.0.tgz",
          "integrity": "sha512-x+12w/To+4GFfgJhBEpiDcLozRJGegY+Ei7/z0tSLkMmxGZNybVMSfWj9aJn8Z5Fc7dBUNJOOVgPv2H7IwulSQ==",
          "dev": true,
          "requires": {
            "p-limit": "^2.0.0"
          }
        },
        "p-try": {
          "version": "2.2.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/p-try/-/p-try-2.2.0.tgz",
          "integrity": "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ==",
          "dev": true
        }
      }
    },
    "pkg-up": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/pkg-up/-/pkg-up-2.0.0.tgz",
      "integrity": "sha1-yBmscoBZpGHKscOImivjxJoATX8=",
      "dev": true,
      "requires": {
        "find-up": "^2.1.0"
      }
    },
    "pluralize": {
      "version": "7.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/pluralize/-/pluralize-7.0.0.tgz",
      "integrity": "sha512-ARhBOdzS3e41FbkW/XWrTEtukqqLoK5+Z/4UeDaLuSW+39JPeFgs4gCGqsrJHVZX0fUrx//4OF0K1CUGwlIFow==",
      "dev": true,
      "optional": true
    },
    "pn": {
      "version": "1.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/pn/-/pn-1.1.0.tgz",
      "integrity": "sha512-2qHaIQr2VLRFoxe2nASzsV6ef4yOOH+Fi9FBOVH6cqeSgUnoyySPZkxzLuzd+RYOQTRpROA0ztTMqxROKSb/nA==",
      "dev": true
    },
    "poplar-annotation": {
      "version": "2.0.0-beta3",
      "resolved": "http://maven.paic.com.cn/repository/npm/poplar-annotation/-/poplar-annotation-2.0.0-beta3.tgz",
      "integrity": "sha512-RG0KA23jnZf/dzbygrGxf3tp1GXZ+kqqRd9O6qyuGaJsJga0sM5i4nLIEfThX2ZGRaetjNlAw3Py83aANFOD7w==",
      "requires": {
        "events": "^3.0.0"
      }
    },
    "popper.js": {
      "version": "1.16.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/popper.js/-/popper.js-1.16.0.tgz",
      "integrity": "sha512-+G+EkOPoE5S/zChTpmBSSDYmhXJ5PsW8eMhH8cP/CQHMFPBG/kC9Y5IIw6qNYgdJ+/COf0ddY2li28iHaZRSjw=="
    },
    "portfinder": {
      "version": "1.0.25",
      "resolved": "http://maven.paic.com.cn/repository/npm/portfinder/-/portfinder-1.0.25.tgz",
      "integrity": "sha512-6ElJnHBbxVA1XSLgBp7G1FiCkQdlqGzuF7DswL5tcea+E8UpuvPU7beVAjjRwCioTS9ZluNbu+ZyRvgTsmqEBg==",
      "dev": true,
      "requires": {
        "async": "^2.6.2",
        "debug": "^3.1.1",
        "mkdirp": "^0.5.1"
      },
      "dependencies": {
        "debug": {
          "version": "3.2.6",
          "resolved": "http://maven.paic.com.cn/repository/npm/debug/-/debug-3.2.6.tgz",
          "integrity": "sha512-mel+jf7nrtEl5Pn1Qx46zARXKDpBbvzezse7p7LqINmdoIk8PYP5SySaxEmYv6TZ0JyEKA1hsCId6DIhgITtWQ==",
          "dev": true,
          "requires": {
            "ms": "^2.1.1"
          }
        }
      }
    },
    "posix-character-classes": {
      "version": "0.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/posix-character-classes/-/posix-character-classes-0.1.1.tgz",
      "integrity": "sha1-AerA/jta9xoqbAL+q7jB/vfgDqs=",
      "dev": true
    },
    "postcss": {
      "version": "7.0.25",
      "resolved": "http://maven.paic.com.cn/repository/npm/postcss/-/postcss-7.0.25.tgz",
      "integrity": "sha512-NXXVvWq9icrm/TgQC0O6YVFi4StfJz46M1iNd/h6B26Nvh/HKI+q4YZtFN/EjcInZliEscO/WL10BXnc1E5nwg==",
      "dev": true,
      "requires": {
        "chalk": "^2.4.2",
        "source-map": "^0.6.1",
        "supports-color": "^6.1.0"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        },
        "supports-color": {
          "version": "6.1.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/supports-color/-/supports-color-6.1.0.tgz",
          "integrity": "sha512-qe1jfm1Mg7Nq/NSh6XE24gPXROEVsWHxC1LIx//XNlD9iw7YZQGjZNjYN7xGaEG6iKdA8EtNFW6R0gjnVXp+wQ==",
          "dev": true,
          "requires": {
            "has-flag": "^3.0.0"
          }
        }
      }
    },
    "postcss-calc": {
      "version": "7.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/postcss-calc/-/postcss-calc-7.0.1.tgz",
      "integrity": "sha512-oXqx0m6tb4N3JGdmeMSc/i91KppbYsFZKdH0xMOqK8V1rJlzrKlTdokz8ozUXLVejydRN6u2IddxpcijRj2FqQ==",
      "dev": true,
      "requires": {
        "css-unit-converter": "^1.1.1",
        "postcss": "^7.0.5",
        "postcss-selector-parser": "^5.0.0-rc.4",
        "postcss-value-parser": "^3.3.1"
      }
    },
    "postcss-colormin": {
      "version": "4.0.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/postcss-colormin/-/postcss-colormin-4.0.3.tgz",
      "integrity": "sha512-WyQFAdDZpExQh32j0U0feWisZ0dmOtPl44qYmJKkq9xFWY3p+4qnRzCHeNrkeRhwPHz9bQ3mo0/yVkaply0MNw==",
      "dev": true,
      "requires": {
        "browserslist": "^4.0.0",
        "color": "^3.0.0",
        "has": "^1.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      }
    },
    "postcss-convert-values": {
      "version": "4.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/postcss-convert-values/-/postcss-convert-values-4.0.1.tgz",
      "integrity": "sha512-Kisdo1y77KUC0Jmn0OXU/COOJbzM8cImvw1ZFsBgBgMgb1iL23Zs/LXRe3r+EZqM3vGYKdQ2YJVQ5VkJI+zEJQ==",
      "dev": true,
      "requires": {
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      }
    },
    "postcss-discard-comments": {
      "version": "4.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/postcss-discard-comments/-/postcss-discard-comments-4.0.2.tgz",
      "integrity": "sha512-RJutN259iuRf3IW7GZyLM5Sw4GLTOH8FmsXBnv8Ab/Tc2k4SR4qbV4DNbyyY4+Sjo362SyDmW2DQ7lBSChrpkg==",
      "dev": true,
      "requires": {
        "postcss": "^7.0.0"
      }
    },
    "postcss-discard-duplicates": {
      "version": "4.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/postcss-discard-duplicates/-/postcss-discard-duplicates-4.0.2.tgz",
      "integrity": "sha512-ZNQfR1gPNAiXZhgENFfEglF93pciw0WxMkJeVmw8eF+JZBbMD7jp6C67GqJAXVZP2BWbOztKfbsdmMp/k8c6oQ==",
      "dev": true,
      "requires": {
        "postcss": "^7.0.0"
      }
    },
    "postcss-discard-empty": {
      "version": "4.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/postcss-discard-empty/-/postcss-discard-empty-4.0.1.tgz",
      "integrity": "sha512-B9miTzbznhDjTfjvipfHoqbWKwd0Mj+/fL5s1QOz06wufguil+Xheo4XpOnc4NqKYBCNqqEzgPv2aPBIJLox0w==",
      "dev": true,
      "requires": {
        "postcss": "^7.0.0"
      }
    },
    "postcss-discard-overridden": {
      "version": "4.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/postcss-discard-overridden/-/postcss-discard-overridden-4.0.1.tgz",
      "integrity": "sha512-IYY2bEDD7g1XM1IDEsUT4//iEYCxAmP5oDSFMVU/JVvT7gh+l4fmjciLqGgwjdWpQIdb0Che2VX00QObS5+cTg==",
      "dev": true,
      "requires": {
        "postcss": "^7.0.0"
      }
    },
    "postcss-load-config": {
      "version": "2.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/postcss-load-config/-/postcss-load-config-2.1.0.tgz",
      "integrity": "sha512-4pV3JJVPLd5+RueiVVB+gFOAa7GWc25XQcMp86Zexzke69mKf6Nx9LRcQywdz7yZI9n1udOxmLuAwTBypypF8Q==",
      "dev": true,
      "requires": {
        "cosmiconfig": "^5.0.0",
        "import-cwd": "^2.0.0"
      }
    },
    "postcss-loader": {
      "version": "3.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/postcss-loader/-/postcss-loader-3.0.0.tgz",
      "integrity": "sha512-cLWoDEY5OwHcAjDnkyRQzAXfs2jrKjXpO/HQFcc5b5u/r7aa471wdmChmwfnv7x2u840iat/wi0lQ5nbRgSkUA==",
      "dev": true,
      "requires": {
        "loader-utils": "^1.1.0",
        "postcss": "^7.0.0",
        "postcss-load-config": "^2.0.0",
        "schema-utils": "^1.0.0"
      }
    },
    "postcss-merge-longhand": {
      "version": "4.0.11",
      "resolved": "http://maven.paic.com.cn/repository/npm/postcss-merge-longhand/-/postcss-merge-longhand-4.0.11.tgz",
      "integrity": "sha512-alx/zmoeXvJjp7L4mxEMjh8lxVlDFX1gqWHzaaQewwMZiVhLo42TEClKaeHbRf6J7j82ZOdTJ808RtN0ZOZwvw==",
      "dev": true,
      "requires": {
        "css-color-names": "0.0.4",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0",
        "stylehacks": "^4.0.0"
      }
    },
    "postcss-merge-rules": {
      "version": "4.0.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/postcss-merge-rules/-/postcss-merge-rules-4.0.3.tgz",
      "integrity": "sha512-U7e3r1SbvYzO0Jr3UT/zKBVgYYyhAz0aitvGIYOYK5CPmkNih+WDSsS5tvPrJ8YMQYlEMvsZIiqmn7HdFUaeEQ==",
      "dev": true,
      "requires": {
        "browserslist": "^4.0.0",
        "caniuse-api": "^3.0.0",
        "cssnano-util-same-parent": "^4.0.0",
        "postcss": "^7.0.0",
        "postcss-selector-parser": "^3.0.0",
        "vendors": "^1.0.0"
      },
      "dependencies": {
        "postcss-selector-parser": {
          "version": "3.1.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/postcss-selector-parser/-/postcss-selector-parser-3.1.1.tgz",
          "integrity": "sha1-T4dfSvsMllc9XPTXQBGu4lCn6GU=",
          "dev": true,
          "requires": {
            "dot-prop": "^4.1.1",
            "indexes-of": "^1.0.1",
            "uniq": "^1.0.1"
          }
        }
      }
    },
    "postcss-minify-font-values": {
      "version": "4.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/postcss-minify-font-values/-/postcss-minify-font-values-4.0.2.tgz",
      "integrity": "sha512-j85oO6OnRU9zPf04+PZv1LYIYOprWm6IA6zkXkrJXyRveDEuQggG6tvoy8ir8ZwjLxLuGfNkCZEQG7zan+Hbtg==",
      "dev": true,
      "requires": {
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      }
    },
    "postcss-minify-gradients": {
      "version": "4.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/postcss-minify-gradients/-/postcss-minify-gradients-4.0.2.tgz",
      "integrity": "sha512-qKPfwlONdcf/AndP1U8SJ/uzIJtowHlMaSioKzebAXSG4iJthlWC9iSWznQcX4f66gIWX44RSA841HTHj3wK+Q==",
      "dev": true,
      "requires": {
        "cssnano-util-get-arguments": "^4.0.0",
        "is-color-stop": "^1.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      }
    },
    "postcss-minify-params": {
      "version": "4.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/postcss-minify-params/-/postcss-minify-params-4.0.2.tgz",
      "integrity": "sha512-G7eWyzEx0xL4/wiBBJxJOz48zAKV2WG3iZOqVhPet/9geefm/Px5uo1fzlHu+DOjT+m0Mmiz3jkQzVHe6wxAWg==",
      "dev": true,
      "requires": {
        "alphanum-sort": "^1.0.0",
        "browserslist": "^4.0.0",
        "cssnano-util-get-arguments": "^4.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0",
        "uniqs": "^2.0.0"
      }
    },
    "postcss-minify-selectors": {
      "version": "4.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/postcss-minify-selectors/-/postcss-minify-selectors-4.0.2.tgz",
      "integrity": "sha512-D5S1iViljXBj9kflQo4YutWnJmwm8VvIsU1GeXJGiG9j8CIg9zs4voPMdQDUmIxetUOh60VilsNzCiAFTOqu3g==",
      "dev": true,
      "requires": {
        "alphanum-sort": "^1.0.0",
        "has": "^1.0.0",
        "postcss": "^7.0.0",
        "postcss-selector-parser": "^3.0.0"
      },
      "dependencies": {
        "postcss-selector-parser": {
          "version": "3.1.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/postcss-selector-parser/-/postcss-selector-parser-3.1.1.tgz",
          "integrity": "sha1-T4dfSvsMllc9XPTXQBGu4lCn6GU=",
          "dev": true,
          "requires": {
            "dot-prop": "^4.1.1",
            "indexes-of": "^1.0.1",
            "uniq": "^1.0.1"
          }
        }
      }
    },
    "postcss-modules-extract-imports": {
      "version": "1.2.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/postcss-modules-extract-imports/-/postcss-modules-extract-imports-1.2.1.tgz",
      "integrity": "sha512-6jt9XZwUhwmRUhb/CkyJY020PYaPJsCyt3UjbaWo6XEbH/94Hmv6MP7fG2C5NDU/BcHzyGYxNtHvM+LTf9HrYw==",
      "dev": true,
      "requires": {
        "postcss": "^6.0.1"
      },
      "dependencies": {
        "postcss": {
          "version": "6.0.23",
          "resolved": "http://maven.paic.com.cn/repository/npm/postcss/-/postcss-6.0.23.tgz",
          "integrity": "sha512-soOk1h6J3VMTZtVeVpv15/Hpdl2cBLX3CAw4TAbkpTJiNPk9YP/zWcD1ND+xEtvyuuvKzbxliTOIyvkSeSJ6ag==",
          "dev": true,
          "requires": {
            "chalk": "^2.4.1",
            "source-map": "^0.6.1",
            "supports-color": "^5.4.0"
          }
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        }
      }
    },
    "postcss-modules-local-by-default": {
      "version": "1.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/postcss-modules-local-by-default/-/postcss-modules-local-by-default-1.2.0.tgz",
      "integrity": "sha1-99gMOYxaOT+nlkRmvRlQCn1hwGk=",
      "dev": true,
      "requires": {
        "css-selector-tokenizer": "^0.7.0",
        "postcss": "^6.0.1"
      },
      "dependencies": {
        "postcss": {
          "version": "6.0.23",
          "resolved": "http://maven.paic.com.cn/repository/npm/postcss/-/postcss-6.0.23.tgz",
          "integrity": "sha512-soOk1h6J3VMTZtVeVpv15/Hpdl2cBLX3CAw4TAbkpTJiNPk9YP/zWcD1ND+xEtvyuuvKzbxliTOIyvkSeSJ6ag==",
          "dev": true,
          "requires": {
            "chalk": "^2.4.1",
            "source-map": "^0.6.1",
            "supports-color": "^5.4.0"
          }
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        }
      }
    },
    "postcss-modules-scope": {
      "version": "1.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/postcss-modules-scope/-/postcss-modules-scope-1.1.0.tgz",
      "integrity": "sha1-1upkmUx5+XtipytCb75gVqGUu5A=",
      "dev": true,
      "requires": {
        "css-selector-tokenizer": "^0.7.0",
        "postcss": "^6.0.1"
      },
      "dependencies": {
        "postcss": {
          "version": "6.0.23",
          "resolved": "http://maven.paic.com.cn/repository/npm/postcss/-/postcss-6.0.23.tgz",
          "integrity": "sha512-soOk1h6J3VMTZtVeVpv15/Hpdl2cBLX3CAw4TAbkpTJiNPk9YP/zWcD1ND+xEtvyuuvKzbxliTOIyvkSeSJ6ag==",
          "dev": true,
          "requires": {
            "chalk": "^2.4.1",
            "source-map": "^0.6.1",
            "supports-color": "^5.4.0"
          }
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        }
      }
    },
    "postcss-modules-values": {
      "version": "1.3.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/postcss-modules-values/-/postcss-modules-values-1.3.0.tgz",
      "integrity": "sha1-7P+p1+GSUYOJ9CrQ6D9yrsRW6iA=",
      "dev": true,
      "requires": {
        "icss-replace-symbols": "^1.1.0",
        "postcss": "^6.0.1"
      },
      "dependencies": {
        "postcss": {
          "version": "6.0.23",
          "resolved": "http://maven.paic.com.cn/repository/npm/postcss/-/postcss-6.0.23.tgz",
          "integrity": "sha512-soOk1h6J3VMTZtVeVpv15/Hpdl2cBLX3CAw4TAbkpTJiNPk9YP/zWcD1ND+xEtvyuuvKzbxliTOIyvkSeSJ6ag==",
          "dev": true,
          "requires": {
            "chalk": "^2.4.1",
            "source-map": "^0.6.1",
            "supports-color": "^5.4.0"
          }
        },
        "source-map": {
          "version": "0.6.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        }
      }
    },
    "postcss-normalize-charset": {
      "version": "4.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/postcss-normalize-charset/-/postcss-normalize-charset-4.0.1.tgz",
      "integrity": "sha512-gMXCrrlWh6G27U0hF3vNvR3w8I1s2wOBILvA87iNXaPvSNo5uZAMYsZG7XjCUf1eVxuPfyL4TJ7++SGZLc9A3g==",
      "dev": true,
      "requires": {
        "postcss": "^7.0.0"
      }
    },
    "postcss-normalize-display-values": {
      "version": "4.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/postcss-normalize-display-values/-/postcss-normalize-display-values-4.0.2.tgz",
      "integrity": "sha512-3F2jcsaMW7+VtRMAqf/3m4cPFhPD3EFRgNs18u+k3lTJJlVe7d0YPO+bnwqo2xg8YiRpDXJI2u8A0wqJxMsQuQ==",
      "dev": true,
      "requires": {
        "cssnano-util-get-match": "^4.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      }
    },
    "postcss-normalize-positions": {
      "version": "4.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/postcss-normalize-positions/-/postcss-normalize-positions-4.0.2.tgz",
      "integrity": "sha512-Dlf3/9AxpxE+NF1fJxYDeggi5WwV35MXGFnnoccP/9qDtFrTArZ0D0R+iKcg5WsUd8nUYMIl8yXDCtcrT8JrdA==",
      "dev": true,
      "requires": {
        "cssnano-util-get-arguments": "^4.0.0",
        "has": "^1.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      }
    },
    "postcss-normalize-repeat-style": {
      "version": "4.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/postcss-normalize-repeat-style/-/postcss-normalize-repeat-style-4.0.2.tgz",
      "integrity": "sha512-qvigdYYMpSuoFs3Is/f5nHdRLJN/ITA7huIoCyqqENJe9PvPmLhNLMu7QTjPdtnVf6OcYYO5SHonx4+fbJE1+Q==",
      "dev": true,
      "requires": {
        "cssnano-util-get-arguments": "^4.0.0",
        "cssnano-util-get-match": "^4.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      }
    },
    "postcss-normalize-string": {
      "version": "4.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/postcss-normalize-string/-/postcss-normalize-string-4.0.2.tgz",
      "integrity": "sha512-RrERod97Dnwqq49WNz8qo66ps0swYZDSb6rM57kN2J+aoyEAJfZ6bMx0sx/F9TIEX0xthPGCmeyiam/jXif0eA==",
      "dev": true,
      "requires": {
        "has": "^1.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      }
    },
    "postcss-normalize-timing-functions": {
      "version": "4.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/postcss-normalize-timing-functions/-/postcss-normalize-timing-functions-4.0.2.tgz",
      "integrity": "sha512-acwJY95edP762e++00Ehq9L4sZCEcOPyaHwoaFOhIwWCDfik6YvqsYNxckee65JHLKzuNSSmAdxwD2Cud1Z54A==",
      "dev": true,
      "requires": {
        "cssnano-util-get-match": "^4.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      }
    },
    "postcss-normalize-unicode": {
      "version": "4.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/postcss-normalize-unicode/-/postcss-normalize-unicode-4.0.1.tgz",
      "integrity": "sha512-od18Uq2wCYn+vZ/qCOeutvHjB5jm57ToxRaMeNuf0nWVHaP9Hua56QyMF6fs/4FSUnVIw0CBPsU0K4LnBPwYwg==",
      "dev": true,
      "requires": {
        "browserslist": "^4.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      }
    },
    "postcss-normalize-url": {
      "version": "4.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/postcss-normalize-url/-/postcss-normalize-url-4.0.1.tgz",
      "integrity": "sha512-p5oVaF4+IHwu7VpMan/SSpmpYxcJMtkGppYf0VbdH5B6hN8YNmVyJLuY9FmLQTzY3fag5ESUUHDqM+heid0UVA==",
      "dev": true,
      "requires": {
        "is-absolute-url": "^2.0.0",
        "normalize-url": "^3.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      }
    },
    "postcss-normalize-whitespace": {
      "version": "4.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/postcss-normalize-whitespace/-/postcss-normalize-whitespace-4.0.2.tgz",
      "integrity": "sha512-tO8QIgrsI3p95r8fyqKV+ufKlSHh9hMJqACqbv2XknufqEDhDvbguXGBBqxw9nsQoXWf0qOqppziKJKHMD4GtA==",
      "dev": true,
      "requires": {
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      }
    },
    "postcss-ordered-values": {
      "version": "4.1.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/postcss-ordered-values/-/postcss-ordered-values-4.1.2.tgz",
      "integrity": "sha512-2fCObh5UanxvSxeXrtLtlwVThBvHn6MQcu4ksNT2tsaV2Fg76R2CV98W7wNSlX+5/pFwEyaDwKLLoEV7uRybAw==",
      "dev": true,
      "requires": {
        "cssnano-util-get-arguments": "^4.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      }
    },
    "postcss-reduce-initial": {
      "version": "4.0.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/postcss-reduce-initial/-/postcss-reduce-initial-4.0.3.tgz",
      "integrity": "sha512-gKWmR5aUulSjbzOfD9AlJiHCGH6AEVLaM0AV+aSioxUDd16qXP1PCh8d1/BGVvpdWn8k/HiK7n6TjeoXN1F7DA==",
      "dev": true,
      "requires": {
        "browserslist": "^4.0.0",
        "caniuse-api": "^3.0.0",
        "has": "^1.0.0",
        "postcss": "^7.0.0"
      }
    },
    "postcss-reduce-transforms": {
      "version": "4.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/postcss-reduce-transforms/-/postcss-reduce-transforms-4.0.2.tgz",
      "integrity": "sha512-EEVig1Q2QJ4ELpJXMZR8Vt5DQx8/mo+dGWSR7vWXqcob2gQLyQGsionYcGKATXvQzMPn6DSN1vTN7yFximdIAg==",
      "dev": true,
      "requires": {
        "cssnano-util-get-match": "^4.0.0",
        "has": "^1.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0"
      }
    },
    "postcss-selector-parser": {
      "version": "5.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/postcss-selector-parser/-/postcss-selector-parser-5.0.0.tgz",
      "integrity": "sha512-w+zLE5Jhg6Liz8+rQOWEAwtwkyqpfnmsinXjXg6cY7YIONZZtgvE0v2O0uhQBs0peNomOJwWRKt6JBfTdTd3OQ==",
      "dev": true,
      "requires": {
        "cssesc": "^2.0.0",
        "indexes-of": "^1.0.1",
        "uniq": "^1.0.1"
      }
    },
    "postcss-svgo": {
      "version": "4.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/postcss-svgo/-/postcss-svgo-4.0.2.tgz",
      "integrity": "sha512-C6wyjo3VwFm0QgBy+Fu7gCYOkCmgmClghO+pjcxvrcBKtiKt0uCF+hvbMO1fyv5BMImRK90SMb+dwUnfbGd+jw==",
      "dev": true,
      "requires": {
        "is-svg": "^3.0.0",
        "postcss": "^7.0.0",
        "postcss-value-parser": "^3.0.0",
        "svgo": "^1.0.0"
      }
    },
    "postcss-unique-selectors": {
      "version": "4.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/postcss-unique-selectors/-/postcss-unique-selectors-4.0.1.tgz",
      "integrity": "sha512-+JanVaryLo9QwZjKrmJgkI4Fn8SBgRO6WXQBJi7KiAVPlmxikB5Jzc4EvXMT2H0/m0RjrVVm9rGNhZddm/8Spg==",
      "dev": true,
      "requires": {
        "alphanum-sort": "^1.0.0",
        "postcss": "^7.0.0",
        "uniqs": "^2.0.0"
      }
    },
    "postcss-value-parser": {
      "version": "3.3.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/postcss-value-parser/-/postcss-value-parser-3.3.1.tgz",
      "integrity": "sha512-pISE66AbVkp4fDQ7VHBwRNXzAAKJjw4Vw7nWI/+Q3vuly7SNfgYXvm6i5IgFylHGK5sP/xHAbB7N49OS4gWNyQ==",
      "dev": true
    },
    "prelude-ls": {
      "version": "1.1.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/prelude-ls/-/prelude-ls-1.1.2.tgz",
      "integrity": "sha1-IZMqVJ9eUv/ZqCf1cOBL5iqX2lQ=",
      "dev": true
    },
    "prepend-http": {
      "version": "1.0.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/prepend-http/-/prepend-http-1.0.4.tgz",
      "integrity": "sha1-1PRWKwzjaW5BrFLQ4ALlemNdxtw=",
      "dev": true
    },
    "preserve": {
      "version": "0.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/preserve/-/preserve-0.2.0.tgz",
      "integrity": "sha1-gV7R9uvGWSb4ZbMQwHE7yzMVzks=",
      "dev": true
    },
    "prettier": {
      "version": "1.19.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/prettier/-/prettier-1.19.1.tgz",
      "integrity": "sha512-s7PoyDv/II1ObgQunCbB9PdLmUcBZcnWOcxDh7O0N/UwDEsHyqkW+Qh28jW+mVuCdx7gLB0BotYI1Y6uI9iyew==",
      "dev": true
    },
    "pretty": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/pretty/-/pretty-2.0.0.tgz",
      "integrity": "sha1-rbx5YLe7/iiaVX3F9zdhmiINBqU=",
      "dev": true,
      "requires": {
        "condense-newlines": "^0.2.1",
        "extend-shallow": "^2.0.1",
        "js-beautify": "^1.6.12"
      },
      "dependencies": {
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "dev": true,
          "requires": {
            "is-extendable": "^0.1.0"
          }
        }
      }
    },
    "pretty-error": {
      "version": "2.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/pretty-error/-/pretty-error-2.1.1.tgz",
      "integrity": "sha1-X0+HyPkeWuPzuoerTPXgOxoX8aM=",
      "dev": true,
      "requires": {
        "renderkid": "^2.0.1",
        "utila": "~0.4"
      }
    },
    "pretty-format": {
      "version": "23.6.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/pretty-format/-/pretty-format-23.6.0.tgz",
      "integrity": "sha512-zf9NV1NSlDLDjycnwm6hpFATCGl/K1lt0R/GdkAK2O5LN/rwJoB+Mh93gGJjut4YbmecbfgLWVGSTCr0Ewvvbw==",
      "dev": true,
      "requires": {
        "ansi-regex": "^3.0.0",
        "ansi-styles": "^3.2.0"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "3.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/ansi-regex/-/ansi-regex-3.0.0.tgz",
          "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
          "dev": true
        }
      }
    },
    "private": {
      "version": "0.1.8",
      "resolved": "http://maven.paic.com.cn/repository/npm/private/-/private-0.1.8.tgz",
      "integrity": "sha512-VvivMrbvd2nKkiG38qjULzlc+4Vx4wm/whI9pQD35YrARNnhxeiRktSOhSukRLFNlzg6Br/cJPet5J/u19r/mg==",
      "dev": true
    },
    "process": {
      "version": "0.11.10",
      "resolved": "http://maven.paic.com.cn/repository/npm/process/-/process-0.11.10.tgz",
      "integrity": "sha1-czIwDoQBYb2j5podHZGn1LwW8YI=",
      "dev": true
    },
    "process-nextick-args": {
      "version": "2.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/process-nextick-args/-/process-nextick-args-2.0.1.tgz",
      "integrity": "sha512-3ouUOpQhtgrbOa17J7+uxOTpITYWaGP7/AhoR3+A+/1e9skrzelGi/dXzEYyvbxubEF6Wn2ypscTKiKJFFn1ag==",
      "dev": true
    },
    "progress": {
      "version": "2.0.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/progress/-/progress-2.0.3.tgz",
      "integrity": "sha512-7PiHtLll5LdnKIMw100I+8xJXR5gW2QwWYkT6iJva0bXitZKa/XMrSbdmg3r2Xnaidz9Qumd0VPaMrZlF9V9sA==",
      "dev": true
    },
    "promise": {
      "version": "7.3.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/promise/-/promise-7.3.1.tgz",
      "integrity": "sha512-nolQXZ/4L+bP/UGlkfaIujX9BKxGwmQ9OT4mOt5yvy8iK1h3wqTEJCijzGANTCCl9nWjY41juyAn2K3Q1hLLTg==",
      "dev": true,
      "optional": true,
      "requires": {
        "asap": "~2.0.3"
      }
    },
    "promise-inflight": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/promise-inflight/-/promise-inflight-1.0.1.tgz",
      "integrity": "sha1-mEcocL8igTL8vdhoEputEsPAKeM=",
      "dev": true
    },
    "prompts": {
      "version": "0.1.14",
      "resolved": "http://maven.paic.com.cn/repository/npm/prompts/-/prompts-0.1.14.tgz",
      "integrity": "sha512-rxkyiE9YH6zAz/rZpywySLKkpaj0NMVyNw1qhsubdbjjSgcayjTShDreZGlFMcGSu5sab3bAKPfFk78PB90+8w==",
      "dev": true,
      "requires": {
        "kleur": "^2.0.1",
        "sisteransi": "^0.1.1"
      }
    },
    "proto-list": {
      "version": "1.2.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/proto-list/-/proto-list-1.2.4.tgz",
      "integrity": "sha1-IS1b/hMYMGpCD2QCuOJv85ZHqEk=",
      "dev": true
    },
    "proxy-addr": {
      "version": "2.0.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/proxy-addr/-/proxy-addr-2.0.5.tgz",
      "integrity": "sha512-t/7RxHXPH6cJtP0pRG6smSr9QJidhB+3kXu0KgXnbGYMgzEnUxRQ4/LDdfOwZEMyIh3/xHb8PX3t+lfL9z+YVQ==",
      "dev": true,
      "requires": {
        "forwarded": "~0.1.2",
        "ipaddr.js": "1.9.0"
      }
    },
    "prr": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/prr/-/prr-1.0.1.tgz",
      "integrity": "sha1-0/wRS6BplaRexok/SEzrHXj19HY=",
      "dev": true
    },
    "pseudomap": {
      "version": "1.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/pseudomap/-/pseudomap-1.0.2.tgz",
      "integrity": "sha1-8FKijacOYYkX7wqKw0wa5aaChrM=",
      "dev": true
    },
    "psl": {
      "version": "1.6.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/psl/-/psl-1.6.0.tgz",
      "integrity": "sha512-SYKKmVel98NCOYXpkwUqZqh0ahZeeKfmisiLIcEZdsb+WbLv02g/dI5BUmZnIyOe7RzZtLax81nnb2HbvC2tzA==",
      "dev": true
    },
    "public-encrypt": {
      "version": "4.0.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/public-encrypt/-/public-encrypt-4.0.3.tgz",
      "integrity": "sha512-zVpa8oKZSz5bTMTFClc1fQOnyyEzpl5ozpi1B5YcvBrdohMjH2rfsBtyXcuNuwjsDIXmBYlF2N5FlJYhR29t8Q==",
      "dev": true,
      "requires": {
        "bn.js": "^4.1.0",
        "browserify-rsa": "^4.0.0",
        "create-hash": "^1.1.0",
        "parse-asn1": "^5.0.0",
        "randombytes": "^2.0.1",
        "safe-buffer": "^5.1.2"
      }
    },
    "pump": {
      "version": "3.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/pump/-/pump-3.0.0.tgz",
      "integrity": "sha512-LwZy+p3SFs1Pytd/jYct4wpv49HiYCqd9Rlc5ZVdk0V+8Yzv6jR5Blk3TRmPL1ft69TxP0IMZGJ+WPFU2BFhww==",
      "dev": true,
      "requires": {
        "end-of-stream": "^1.1.0",
        "once": "^1.3.1"
      }
    },
    "pumpify": {
      "version": "1.5.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/pumpify/-/pumpify-1.5.1.tgz",
      "integrity": "sha512-oClZI37HvuUJJxSKKrC17bZ9Cu0ZYhEAGPsPUy9KlMUmv9dKX2o77RUmq7f3XjIxbwyGwYzbzQ1L2Ks8sIradQ==",
      "dev": true,
      "requires": {
        "duplexify": "^3.6.0",
        "inherits": "^2.0.3",
        "pump": "^2.0.0"
      },
      "dependencies": {
        "pump": {
          "version": "2.0.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/pump/-/pump-2.0.1.tgz",
          "integrity": "sha512-ruPMNRkN3MHP1cWJc9OWr+T/xDP0jhXYCLfJcBuX54hhfIBnaQmAUMfDcG4DM5UMWByBbJY69QSphm3jtDKIkA==",
          "dev": true,
          "requires": {
            "end-of-stream": "^1.1.0",
            "once": "^1.3.1"
          }
        }
      }
    },
    "punycode": {
      "version": "2.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/punycode/-/punycode-2.1.1.tgz",
      "integrity": "sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A==",
      "dev": true
    },
    "q": {
      "version": "1.5.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/q/-/q-1.5.1.tgz",
      "integrity": "sha1-fjL3W0E4EpHQRhHxvxQQmsAGUdc=",
      "dev": true
    },
    "qs": {
      "version": "6.5.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/qs/-/qs-6.5.2.tgz",
      "integrity": "sha512-N5ZAX4/LxJmF+7wN74pUD6qAh9/wnvdQcjq9TZjevvXzSUo7bfmw91saqMjzGS2xq91/odN2dW/WOl7qQHNDGA==",
      "dev": true
    },
    "query-string": {
      "version": "4.3.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/query-string/-/query-string-4.3.4.tgz",
      "integrity": "sha1-u7aTucqRXCMlFbIosaArYJBD2+s=",
      "dev": true,
      "requires": {
        "object-assign": "^4.1.0",
        "strict-uri-encode": "^1.0.0"
      }
    },
    "querystring": {
      "version": "0.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/querystring/-/querystring-0.2.0.tgz",
      "integrity": "sha1-sgmEkgO7Jd+CDadW50cAWHhSFiA=",
      "dev": true
    },
    "querystring-es3": {
      "version": "0.2.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/querystring-es3/-/querystring-es3-0.2.1.tgz",
      "integrity": "sha1-nsYfeQSYdXB9aUFFlv2Qek1xHnM=",
      "dev": true
    },
    "querystringify": {
      "version": "2.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/querystringify/-/querystringify-2.1.1.tgz",
      "integrity": "sha512-w7fLxIRCRT7U8Qu53jQnJyPkYZIaR4n5151KMfcJlO/A9397Wxb1amJvROTK6TOnp7PfoAmg/qXiNHI+08jRfA==",
      "dev": true
    },
    "randomatic": {
      "version": "3.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/randomatic/-/randomatic-3.1.1.tgz",
      "integrity": "sha512-TuDE5KxZ0J461RVjrJZCJc+J+zCkTb1MbH9AQUq68sMhOMcy9jLcb3BrZKgp9q9Ncltdg4QVqWrH02W2EFFVYw==",
      "dev": true,
      "requires": {
        "is-number": "^4.0.0",
        "kind-of": "^6.0.0",
        "math-random": "^1.0.1"
      },
      "dependencies": {
        "is-number": {
          "version": "4.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-number/-/is-number-4.0.0.tgz",
          "integrity": "sha512-rSklcAIlf1OmFdyAqbnWTLVelsQ58uvZ66S/ZyawjWqIviTWCjg2PzVGw8WUA+nNuPTqb4wgA+NszrJ+08LlgQ==",
          "dev": true
        }
      }
    },
    "randombytes": {
      "version": "2.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/randombytes/-/randombytes-2.1.0.tgz",
      "integrity": "sha512-vYl3iOX+4CKUWuxGi9Ukhie6fsqXqS9FE2Zaic4tNFD2N2QQaXOMFbuKK4QmDHC0JO6B1Zp41J0LpT0oR68amQ==",
      "dev": true,
      "requires": {
        "safe-buffer": "^5.1.0"
      }
    },
    "randomfill": {
      "version": "1.0.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/randomfill/-/randomfill-1.0.4.tgz",
      "integrity": "sha512-87lcbR8+MhcWcUiQ+9e+Rwx8MyR2P7qnt15ynUlbm3TU/fjbgz4GsvfSUDTemtCCtVCqb4ZcEFlyPNTh9bBTLw==",
      "dev": true,
      "requires": {
        "randombytes": "^2.0.5",
        "safe-buffer": "^5.1.0"
      }
    },
    "range-parser": {
      "version": "1.2.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/range-parser/-/range-parser-1.2.1.tgz",
      "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg==",
      "dev": true
    },
    "raw-body": {
      "version": "2.4.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/raw-body/-/raw-body-2.4.0.tgz",
      "integrity": "sha512-4Oz8DUIwdvoa5qMJelxipzi/iJIi40O5cGV1wNYp5hvZP8ZN0T+jiNkL0QepXs+EsQ9XJ8ipEDoiH70ySUJP3Q==",
      "dev": true,
      "requires": {
        "bytes": "3.1.0",
        "http-errors": "1.7.2",
        "iconv-lite": "0.4.24",
        "unpipe": "1.0.0"
      }
    },
    "read-pkg": {
      "version": "1.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/read-pkg/-/read-pkg-1.1.0.tgz",
      "integrity": "sha1-9f+qXs0pyzHAR0vKfXVra7KePyg=",
      "dev": true,
      "requires": {
        "load-json-file": "^1.0.0",
        "normalize-package-data": "^2.3.2",
        "path-type": "^1.0.0"
      },
      "dependencies": {
        "path-type": {
          "version": "1.1.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/path-type/-/path-type-1.1.0.tgz",
          "integrity": "sha1-WcRPfuSR2nBNpBXaWkBwuk+P5EE=",
          "dev": true,
          "requires": {
            "graceful-fs": "^4.1.2",
            "pify": "^2.0.0",
            "pinkie-promise": "^2.0.0"
          }
        },
        "pify": {
          "version": "2.3.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/pify/-/pify-2.3.0.tgz",
          "integrity": "sha1-7RQaasBDqEnqWISY59yosVMw6Qw=",
          "dev": true
        }
      }
    },
    "read-pkg-up": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/read-pkg-up/-/read-pkg-up-1.0.1.tgz",
      "integrity": "sha1-nWPBMnbAZZGNV/ACpX9AobZD+wI=",
      "dev": true,
      "requires": {
        "find-up": "^1.0.0",
        "read-pkg": "^1.0.0"
      },
      "dependencies": {
        "find-up": {
          "version": "1.1.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/find-up/-/find-up-1.1.2.tgz",
          "integrity": "sha1-ay6YIrGizgpgq2TWEOzK1TyyTQ8=",
          "dev": true,
          "requires": {
            "path-exists": "^2.0.0",
            "pinkie-promise": "^2.0.0"
          }
        },
        "path-exists": {
          "version": "2.1.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/path-exists/-/path-exists-2.1.0.tgz",
          "integrity": "sha1-D+tsZPD8UY2adU3V77YscCJ2H0s=",
          "dev": true,
          "requires": {
            "pinkie-promise": "^2.0.0"
          }
        }
      }
    },
    "readable-stream": {
      "version": "2.3.6",
      "resolved": "http://maven.paic.com.cn/repository/npm/readable-stream/-/readable-stream-2.3.6.tgz",
      "integrity": "sha512-tQtKA9WIAhBF3+VLAseyMqZeBjW0AHJoxOtYqSUZNJxauErmLbVm2FW1y+J/YA9dUrAC39ITejlZWhVIwawkKw==",
      "dev": true,
      "requires": {
        "core-util-is": "~1.0.0",
        "inherits": "~2.0.3",
        "isarray": "~1.0.0",
        "process-nextick-args": "~2.0.0",
        "safe-buffer": "~5.1.1",
        "string_decoder": "~1.1.1",
        "util-deprecate": "~1.0.1"
      }
    },
    "readdirp": {
      "version": "2.2.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/readdirp/-/readdirp-2.2.1.tgz",
      "integrity": "sha512-1JU/8q+VgFZyxwrJ+SVIOsh+KywWGpds3NTqikiKpDMZWScmAYyKIgqkO+ARvNWJfXeXR1zxz7aHF4u4CyH6vQ==",
      "dev": true,
      "requires": {
        "graceful-fs": "^4.1.11",
        "micromatch": "^3.1.10",
        "readable-stream": "^2.0.2"
      }
    },
    "realpath-native": {
      "version": "1.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/realpath-native/-/realpath-native-1.1.0.tgz",
      "integrity": "sha512-wlgPA6cCIIg9gKz0fgAPjnzh4yR/LnXovwuo9hvyGvx3h8nX4+/iLZplfUWasXpqD8BdnGnP5njOFjkUwPzvjA==",
      "dev": true,
      "requires": {
        "util.promisify": "^1.0.0"
      }
    },
    "regenerate": {
      "version": "1.4.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/regenerate/-/regenerate-1.4.0.tgz",
      "integrity": "sha512-1G6jJVDWrt0rK99kBjvEtziZNCICAuvIPkSiUFIQxVP06RCVpq3dmDo2oi6ABpYaDYaTRr67BEhL8r1wgEZZKg==",
      "dev": true
    },
    "regenerate-unicode-properties": {
      "version": "8.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/regenerate-unicode-properties/-/regenerate-unicode-properties-8.1.0.tgz",
      "integrity": "sha512-LGZzkgtLY79GeXLm8Dp0BVLdQlWICzBnJz/ipWUgo59qBaZ+BHtq51P2q1uVZlppMuUAT37SDk39qUbjTWB7bA==",
      "dev": true,
      "requires": {
        "regenerate": "^1.4.0"
      }
    },
    "regenerator-runtime": {
      "version": "0.13.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/regenerator-runtime/-/regenerator-runtime-0.13.3.tgz",
      "integrity": "sha512-naKIZz2GQ8JWh///G7L3X6LaQUAMp2lvb1rvwwsURe/VXwD6VMfr+/1NuNw3ag8v2kY1aQ/go5SNn79O9JU7yw==",
      "dev": true
    },
    "regenerator-transform": {
      "version": "0.14.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/regenerator-transform/-/regenerator-transform-0.14.1.tgz",
      "integrity": "sha512-flVuee02C3FKRISbxhXl9mGzdbWUVHubl1SMaknjxkFB1/iqpJhArQUvRxOOPEc/9tAiX0BaQ28FJH10E4isSQ==",
      "dev": true,
      "requires": {
        "private": "^0.1.6"
      }
    },
    "regex-cache": {
      "version": "0.4.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/regex-cache/-/regex-cache-0.4.4.tgz",
      "integrity": "sha512-nVIZwtCjkC9YgvWkpM55B5rBhBYRZhAaJbgcFYXXsHnbZ9UZI9nnVWYZpBlCqv9ho2eZryPnWrZGsOdPwVWXWQ==",
      "dev": true,
      "requires": {
        "is-equal-shallow": "^0.1.3"
      }
    },
    "regex-not": {
      "version": "1.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/regex-not/-/regex-not-1.0.2.tgz",
      "integrity": "sha512-J6SDjUgDxQj5NusnOtdFxDwN/+HWykR8GELwctJ7mdqhcyy1xEc4SRFHUXvxTp661YaVKAjfRLZ9cCqS6tn32A==",
      "dev": true,
      "requires": {
        "extend-shallow": "^3.0.2",
        "safe-regex": "^1.1.0"
      }
    },
    "regexp.prototype.flags": {
      "version": "1.3.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/regexp.prototype.flags/-/regexp.prototype.flags-1.3.0.tgz",
      "integrity": "sha512-2+Q0C5g951OlYlJz6yu5/M33IcsESLlLfsyIaLJaG4FA2r4yP8MvVMJUUP/fVBkSpbbbZlS5gynbEWLipiiXiQ==",
      "dev": true,
      "requires": {
        "define-properties": "^1.1.3",
        "es-abstract": "^1.17.0-next.1"
      }
    },
    "regexpp": {
      "version": "1.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/regexpp/-/regexpp-1.1.0.tgz",
      "integrity": "sha512-LOPw8FpgdQF9etWMaAfG/WRthIdXJGYp4mJ2Jgn/2lpkbod9jPn0t9UqN7AxBOKNfzRbYyVfgc7Vk4t/MpnXgw==",
      "dev": true,
      "optional": true
    },
    "regexpu-core": {
      "version": "4.6.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/regexpu-core/-/regexpu-core-4.6.0.tgz",
      "integrity": "sha512-YlVaefl8P5BnFYOITTNzDvan1ulLOiXJzCNZxduTIosN17b87h3bvG9yHMoHaRuo88H4mQ06Aodj5VtYGGGiTg==",
      "dev": true,
      "requires": {
        "regenerate": "^1.4.0",
        "regenerate-unicode-properties": "^8.1.0",
        "regjsgen": "^0.5.0",
        "regjsparser": "^0.6.0",
        "unicode-match-property-ecmascript": "^1.0.4",
        "unicode-match-property-value-ecmascript": "^1.1.0"
      }
    },
    "regjsgen": {
      "version": "0.5.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/regjsgen/-/regjsgen-0.5.1.tgz",
      "integrity": "sha512-5qxzGZjDs9w4tzT3TPhCJqWdCc3RLYwy9J2NB0nm5Lz+S273lvWcpjaTGHsT1dc6Hhfq41uSEOw8wBmxrKOuyg==",
      "dev": true
    },
    "regjsparser": {
      "version": "0.6.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/regjsparser/-/regjsparser-0.6.1.tgz",
      "integrity": "sha512-7LutE94sz/NKSYegK+/4E77+8DipxF+Qn2Tmu362AcmsF2NYq/wx3+ObvU90TKEhjf7hQoFXo23ajjrXP7eUgg==",
      "dev": true,
      "requires": {
        "jsesc": "~0.5.0"
      },
      "dependencies": {
        "jsesc": {
          "version": "0.5.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/jsesc/-/jsesc-0.5.0.tgz",
          "integrity": "sha1-597mbjXW/Bb3EP6R1c9p9w8IkR0=",
          "dev": true
        }
      }
    },
    "relateurl": {
      "version": "0.2.7",
      "resolved": "http://maven.paic.com.cn/repository/npm/relateurl/-/relateurl-0.2.7.tgz",
      "integrity": "sha1-VNvzd+UUQKypCkzSdGANP/LYiKk=",
      "dev": true
    },
    "remove-trailing-separator": {
      "version": "1.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/remove-trailing-separator/-/remove-trailing-separator-1.1.0.tgz",
      "integrity": "sha1-wkvOKig62tW8P1jg1IJJuSN52O8=",
      "dev": true
    },
    "renderkid": {
      "version": "2.0.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/renderkid/-/renderkid-2.0.3.tgz",
      "integrity": "sha512-z8CLQp7EZBPCwCnncgf9C4XAi3WR0dv+uWu/PjIyhhAb5d6IJ/QZqlHFprHeKT+59//V6BNUsLbvN8+2LarxGA==",
      "dev": true,
      "requires": {
        "css-select": "^1.1.0",
        "dom-converter": "^0.2",
        "htmlparser2": "^3.3.0",
        "strip-ansi": "^3.0.0",
        "utila": "^0.4.0"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "2.1.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/ansi-regex/-/ansi-regex-2.1.1.tgz",
          "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",
          "dev": true
        },
        "css-select": {
          "version": "1.2.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/css-select/-/css-select-1.2.0.tgz",
          "integrity": "sha1-KzoRBTnFNV8c2NMUYj6HCxIeyFg=",
          "dev": true,
          "requires": {
            "boolbase": "~1.0.0",
            "css-what": "2.1",
            "domutils": "1.5.1",
            "nth-check": "~1.0.1"
          }
        },
        "css-what": {
          "version": "2.1.3",
          "resolved": "http://maven.paic.com.cn/repository/npm/css-what/-/css-what-2.1.3.tgz",
          "integrity": "sha512-a+EPoD+uZiNfh+5fxw2nO9QwFa6nJe2Or35fGY6Ipw1R3R4AGz1d1TEZrCegvw2YTmZ0jXirGYlzxxpYSHwpEg==",
          "dev": true
        },
        "domutils": {
          "version": "1.5.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/domutils/-/domutils-1.5.1.tgz",
          "integrity": "sha1-3NhIiib1Y9YQeeSMn3t+Mjc2gs8=",
          "dev": true,
          "requires": {
            "dom-serializer": "0",
            "domelementtype": "1"
          }
        },
        "strip-ansi": {
          "version": "3.0.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/strip-ansi/-/strip-ansi-3.0.1.tgz",
          "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
          "dev": true,
          "requires": {
            "ansi-regex": "^2.0.0"
          }
        }
      }
    },
    "repeat-element": {
      "version": "1.1.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/repeat-element/-/repeat-element-1.1.3.tgz",
      "integrity": "sha512-ahGq0ZnV5m5XtZLMb+vP76kcAM5nkLqk0lpqAuojSKGgQtn4eRi4ZZGm2olo2zKFH+sMsWaqOCW1dqAnOru72g==",
      "dev": true
    },
    "repeat-string": {
      "version": "1.6.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/repeat-string/-/repeat-string-1.6.1.tgz",
      "integrity": "sha1-jcrkcOHIirwtYA//Sndihtp15jc=",
      "dev": true
    },
    "repeating": {
      "version": "2.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/repeating/-/repeating-2.0.1.tgz",
      "integrity": "sha1-UhTFOpJtNVJwdSf7q0FdvAjQbdo=",
      "dev": true,
      "requires": {
        "is-finite": "^1.0.0"
      }
    },
    "request": {
      "version": "2.88.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/request/-/request-2.88.0.tgz",
      "integrity": "sha512-NAqBSrijGLZdM0WZNsInLJpkJokL72XYjUpnB0iwsRgxh7dB6COrHnTBNwN0E+lHDAJzu7kLAkDeY08z2/A0hg==",
      "dev": true,
      "requires": {
        "aws-sign2": "~0.7.0",
        "aws4": "^1.8.0",
        "caseless": "~0.12.0",
        "combined-stream": "~1.0.6",
        "extend": "~3.0.2",
        "forever-agent": "~0.6.1",
        "form-data": "~2.3.2",
        "har-validator": "~5.1.0",
        "http-signature": "~1.2.0",
        "is-typedarray": "~1.0.0",
        "isstream": "~0.1.2",
        "json-stringify-safe": "~5.0.1",
        "mime-types": "~2.1.19",
        "oauth-sign": "~0.9.0",
        "performance-now": "^2.1.0",
        "qs": "~6.5.2",
        "safe-buffer": "^5.1.2",
        "tough-cookie": "~2.4.3",
        "tunnel-agent": "^0.6.0",
        "uuid": "^3.3.2"
      }
    },
    "request-promise-core": {
      "version": "1.1.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/request-promise-core/-/request-promise-core-1.1.3.tgz",
      "integrity": "sha512-QIs2+ArIGQVp5ZYbWD5ZLCY29D5CfWizP8eWnm8FoGD1TX61veauETVQbrV60662V0oFBkrDOuaBI8XgtuyYAQ==",
      "dev": true,
      "requires": {
        "lodash": "^4.17.15"
      }
    },
    "request-promise-native": {
      "version": "1.0.8",
      "resolved": "http://maven.paic.com.cn/repository/npm/request-promise-native/-/request-promise-native-1.0.8.tgz",
      "integrity": "sha512-dapwLGqkHtwL5AEbfenuzjTYg35Jd6KPytsC2/TLkVMz8rm+tNt72MGUWT1RP/aYawMpN6HqbNGBQaRcBtjQMQ==",
      "dev": true,
      "requires": {
        "request-promise-core": "1.1.3",
        "stealthy-require": "^1.1.1",
        "tough-cookie": "^2.3.3"
      }
    },
    "require-directory": {
      "version": "2.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/require-directory/-/require-directory-2.1.1.tgz",
      "integrity": "sha1-jGStX9MNqxyXbiNE/+f3kqam30I=",
      "dev": true
    },
    "require-main-filename": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/require-main-filename/-/require-main-filename-1.0.1.tgz",
      "integrity": "sha1-l/cXtp1IeE9fUmpsWqj/3aBVpNE=",
      "dev": true
    },
    "require-uncached": {
      "version": "1.0.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/require-uncached/-/require-uncached-1.0.3.tgz",
      "integrity": "sha1-Tg1W1slmL9MeQwEcS5WqSZVUIdM=",
      "dev": true,
      "optional": true,
      "requires": {
        "caller-path": "^0.1.0",
        "resolve-from": "^1.0.0"
      }
    },
    "requires-port": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/requires-port/-/requires-port-1.0.0.tgz",
      "integrity": "sha1-kl0mAdOaxIXgkc8NpcbmlNw9yv8=",
      "dev": true
    },
    "reselect": {
      "version": "3.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/reselect/-/reselect-3.0.1.tgz",
      "integrity": "sha1-79qpjqdFEyTQkrKyFjpqHXqaIUc=",
      "dev": true
    },
    "resize-observer-polyfill": {
      "version": "1.5.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/resize-observer-polyfill/-/resize-observer-polyfill-1.5.1.tgz",
      "integrity": "sha512-LwZrotdHOo12nQuZlHEmtuXdqGoOD0OhaxopaNFxWzInpEgaLWoVuAMbTzixuosCx2nEG58ngzW3vxdWoxIgdg=="
    },
    "resolve": {
      "version": "1.13.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/resolve/-/resolve-1.13.1.tgz",
      "integrity": "sha512-CxqObCX8K8YtAhOBRg+lrcdn+LK+WYOS8tSjqSFbjtrI5PnS63QPhZl4+yKfrU9tdsbMu9Anr/amegT87M9Z6w==",
      "requires": {
        "path-parse": "^1.0.6"
      }
    },
    "resolve-cwd": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/resolve-cwd/-/resolve-cwd-2.0.0.tgz",
      "integrity": "sha1-AKn3OHVW4nA46uIyyqNypqWbZlo=",
      "dev": true,
      "requires": {
        "resolve-from": "^3.0.0"
      },
      "dependencies": {
        "resolve-from": {
          "version": "3.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/resolve-from/-/resolve-from-3.0.0.tgz",
          "integrity": "sha1-six699nWiBvItuZTM17rywoYh0g=",
          "dev": true
        }
      }
    },
    "resolve-from": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/resolve-from/-/resolve-from-1.0.1.tgz",
      "integrity": "sha1-Jsv+k10a7uq7Kbw/5a6wHpPUQiY=",
      "dev": true,
      "optional": true
    },
    "resolve-url": {
      "version": "0.2.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/resolve-url/-/resolve-url-0.2.1.tgz",
      "integrity": "sha1-LGN/53yJOv0qZj/iGqkIAGjiBSo=",
      "dev": true
    },
    "restore-cursor": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/restore-cursor/-/restore-cursor-2.0.0.tgz",
      "integrity": "sha1-n37ih/gv0ybU/RYpI9YhKe7g368=",
      "dev": true,
      "requires": {
        "onetime": "^2.0.0",
        "signal-exit": "^3.0.2"
      }
    },
    "ret": {
      "version": "0.1.15",
      "resolved": "http://maven.paic.com.cn/repository/npm/ret/-/ret-0.1.15.tgz",
      "integrity": "sha512-TTlYpa+OL+vMMNG24xSlQGEJ3B/RzEfUlLct7b5G/ytav+wPrplCpVMFuwzXbkecJrb6IYo1iFb0S9v37754mg==",
      "dev": true
    },
    "retry": {
      "version": "0.12.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/retry/-/retry-0.12.0.tgz",
      "integrity": "sha1-G0KmJmoh8HQh0bC1S33BZ7AcATs=",
      "dev": true
    },
    "rgb-regex": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/rgb-regex/-/rgb-regex-1.0.1.tgz",
      "integrity": "sha1-wODWiC3w4jviVKR16O3UGRX+rrE=",
      "dev": true
    },
    "rgba-regex": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/rgba-regex/-/rgba-regex-1.0.0.tgz",
      "integrity": "sha1-QzdOLiyglosO8VI0YLfXMP8i7rM=",
      "dev": true
    },
    "rimraf": {
      "version": "2.7.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/rimraf/-/rimraf-2.7.1.tgz",
      "integrity": "sha512-uWjbaKIK3T1OSVptzX7Nl6PvQ3qAGtKEtVRjRuazjfL3Bx5eI409VZSqgND+4UNnmzLVdPj9FqFJNPqBZFve4w==",
      "dev": true,
      "requires": {
        "glob": "^7.1.3"
      }
    },
    "ripemd160": {
      "version": "2.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/ripemd160/-/ripemd160-2.0.2.tgz",
      "integrity": "sha512-ii4iagi25WusVoiC4B4lq7pbXfAp3D9v5CwfkY33vffw2+pkDjY1D8GaN7spsxvCSx8dkPqOZCEZyfxcmJG2IA==",
      "dev": true,
      "requires": {
        "hash-base": "^3.0.0",
        "inherits": "^2.0.1"
      }
    },
    "rsvp": {
      "version": "3.6.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/rsvp/-/rsvp-3.6.2.tgz",
      "integrity": "sha512-OfWGQTb9vnwRjwtA2QwpG2ICclHC3pgXZO5xt8H2EfgDquO0qVdSb5T88L4qJVAEugbS56pAuV4XZM58UX8ulw==",
      "dev": true
    },
    "run-async": {
      "version": "2.3.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/run-async/-/run-async-2.3.0.tgz",
      "integrity": "sha1-A3GrSuC91yDUFm19/aZP96RFpsA=",
      "dev": true,
      "requires": {
        "is-promise": "^2.1.0"
      }
    },
    "run-queue": {
      "version": "1.0.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/run-queue/-/run-queue-1.0.3.tgz",
      "integrity": "sha1-6Eg5bwV9Ij8kOGkkYY4laUFh7Ec=",
      "dev": true,
      "requires": {
        "aproba": "^1.1.1"
      }
    },
    "rx-lite": {
      "version": "4.0.8",
      "resolved": "http://maven.paic.com.cn/repository/npm/rx-lite/-/rx-lite-4.0.8.tgz",
      "integrity": "sha1-Cx4Rr4vESDbwSmQH6S2kJGe3lEQ=",
      "dev": true,
      "optional": true
    },
    "rx-lite-aggregates": {
      "version": "4.0.8",
      "resolved": "http://maven.paic.com.cn/repository/npm/rx-lite-aggregates/-/rx-lite-aggregates-4.0.8.tgz",
      "integrity": "sha1-dTuHqJoRyVRnxKwWJsTvxOBcZ74=",
      "dev": true,
      "optional": true,
      "requires": {
        "rx-lite": "*"
      }
    },
    "rxjs": {
      "version": "6.5.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/rxjs/-/rxjs-6.5.3.tgz",
      "integrity": "sha512-wuYsAYYFdWTAnAaPoKGNhfpWwKZbJW+HgAJ+mImp+Epl7BG8oNWBCTyRM8gba9k4lk8BgWdoYm21Mo/RYhhbgA==",
      "dev": true,
      "requires": {
        "tslib": "^1.9.0"
      }
    },
    "safe-buffer": {
      "version": "5.1.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/safe-buffer/-/safe-buffer-5.1.2.tgz",
      "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g==",
      "dev": true
    },
    "safe-regex": {
      "version": "1.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/safe-regex/-/safe-regex-1.1.0.tgz",
      "integrity": "sha1-QKNmnzsHfR6UPURinhV91IAjvy4=",
      "dev": true,
      "requires": {
        "ret": "~0.1.10"
      }
    },
    "safer-buffer": {
      "version": "2.1.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
      "dev": true
    },
    "sane": {
      "version": "2.5.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/sane/-/sane-2.5.2.tgz",
      "integrity": "sha1-tNwYYcIbQn6SlQej51HiosuKs/o=",
      "dev": true,
      "requires": {
        "anymatch": "^2.0.0",
        "capture-exit": "^1.2.0",
        "exec-sh": "^0.2.0",
        "fb-watchman": "^2.0.0",
        "fsevents": "^1.2.3",
        "micromatch": "^3.1.4",
        "minimist": "^1.1.1",
        "walker": "~1.0.5",
        "watch": "~0.18.0"
      }
    },
    "sax": {
      "version": "1.2.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/sax/-/sax-1.2.4.tgz",
      "integrity": "sha512-NqVDv9TpANUjFm0N8uM5GxL36UgKi9/atZw+x7YFnQ8ckwFGKrl4xX4yWtrey3UJm5nP1kUbnYgLopqWNSRhWw==",
      "dev": true
    },
    "schema-utils": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/schema-utils/-/schema-utils-1.0.0.tgz",
      "integrity": "sha512-i27Mic4KovM/lnGsy8whRCHhc7VicJajAjTrYg11K9zfZXnYIt4k5F+kZkwjnrhKzLic/HLU4j11mjsz2G/75g==",
      "dev": true,
      "requires": {
        "ajv": "^6.1.0",
        "ajv-errors": "^1.0.0",
        "ajv-keywords": "^3.1.0"
      }
    },
    "select-hose": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/select-hose/-/select-hose-2.0.0.tgz",
      "integrity": "sha1-Yl2GWPhlr0Psliv8N2o3NZpJlMo=",
      "dev": true
    },
    "selfsigned": {
      "version": "1.10.7",
      "resolved": "http://maven.paic.com.cn/repository/npm/selfsigned/-/selfsigned-1.10.7.tgz",
      "integrity": "sha512-8M3wBCzeWIJnQfl43IKwOmC4H/RAp50S8DF60znzjW5GVqTcSe2vWclt7hmYVPkKPlHWOu5EaWOMZ2Y6W8ZXTA==",
      "dev": true,
      "requires": {
        "node-forge": "0.9.0"
      }
    },
    "semver": {
      "version": "5.7.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/semver/-/semver-5.7.1.tgz",
      "integrity": "sha512-sauaDf/PZdVgrLTNYHRtpXa1iRiKcaebiKQ1BJdpQlWH2lCvexQdX55snPFyK7QzpudqbCI0qXFfOasHdyNDGQ==",
      "dev": true
    },
    "send": {
      "version": "0.17.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/send/-/send-0.17.1.tgz",
      "integrity": "sha512-BsVKsiGcQMFwT8UxypobUKyv7irCNRHk1T0G680vk88yf6LBByGcZJOTJCrTP2xVN6yI+XjPJcNuE3V4fT9sAg==",
      "dev": true,
      "requires": {
        "debug": "2.6.9",
        "depd": "~1.1.2",
        "destroy": "~1.0.4",
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "etag": "~1.8.1",
        "fresh": "0.5.2",
        "http-errors": "~1.7.2",
        "mime": "1.6.0",
        "ms": "2.1.1",
        "on-finished": "~2.3.0",
        "range-parser": "~1.2.1",
        "statuses": "~1.5.0"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "http://maven.paic.com.cn/repository/npm/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "requires": {
            "ms": "2.0.0"
          },
          "dependencies": {
            "ms": {
              "version": "2.0.0",
              "resolved": "http://maven.paic.com.cn/repository/npm/ms/-/ms-2.0.0.tgz",
              "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
              "dev": true
            }
          }
        },
        "mime": {
          "version": "1.6.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/mime/-/mime-1.6.0.tgz",
          "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg==",
          "dev": true
        },
        "ms": {
          "version": "2.1.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/ms/-/ms-2.1.1.tgz",
          "integrity": "sha512-tgp+dl5cGk28utYktBsrFqA7HKgrhgPsg6Z/EfhWI4gl1Hwq8B/GmY/0oXZ6nF8hDVesS/FpnYaD/kOWhYQvyg==",
          "dev": true
        }
      }
    },
    "serialize-javascript": {
      "version": "2.1.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/serialize-javascript/-/serialize-javascript-2.1.2.tgz",
      "integrity": "sha512-rs9OggEUF0V4jUSecXazOYsLfu7OGK2qIn3c7IPBiffz32XniEp/TX9Xmc9LQfK2nQ2QKHvZ2oygKUGU0lG4jQ==",
      "dev": true
    },
    "serve-index": {
      "version": "1.9.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/serve-index/-/serve-index-1.9.1.tgz",
      "integrity": "sha1-03aNabHn2C5c4FD/9bRTvqEqkjk=",
      "dev": true,
      "requires": {
        "accepts": "~1.3.4",
        "batch": "0.6.1",
        "debug": "2.6.9",
        "escape-html": "~1.0.3",
        "http-errors": "~1.6.2",
        "mime-types": "~2.1.17",
        "parseurl": "~1.3.2"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "http://maven.paic.com.cn/repository/npm/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "requires": {
            "ms": "2.0.0"
          }
        },
        "http-errors": {
          "version": "1.6.3",
          "resolved": "http://maven.paic.com.cn/repository/npm/http-errors/-/http-errors-1.6.3.tgz",
          "integrity": "sha1-i1VoC7S+KDoLW/TqLjhYC+HZMg0=",
          "dev": true,
          "requires": {
            "depd": "~1.1.2",
            "inherits": "2.0.3",
            "setprototypeof": "1.1.0",
            "statuses": ">= 1.4.0 < 2"
          }
        },
        "inherits": {
          "version": "2.0.3",
          "resolved": "http://maven.paic.com.cn/repository/npm/inherits/-/inherits-2.0.3.tgz",
          "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4=",
          "dev": true
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
          "dev": true
        },
        "setprototypeof": {
          "version": "1.1.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/setprototypeof/-/setprototypeof-1.1.0.tgz",
          "integrity": "sha512-BvE/TwpZX4FXExxOxZyRGQQv651MSwmWKZGqvmPcRIjDqWub67kTKuIMx43cZZrS/cBBzwBcNDWoFxt2XEFIpQ==",
          "dev": true
        }
      }
    },
    "serve-static": {
      "version": "1.14.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/serve-static/-/serve-static-1.14.1.tgz",
      "integrity": "sha512-JMrvUwE54emCYWlTI+hGrGv5I8dEwmco/00EvkzIIsR7MqrHonbD9pO2MOfFnpFntl7ecpZs+3mW+XbQZu9QCg==",
      "dev": true,
      "requires": {
        "encodeurl": "~1.0.2",
        "escape-html": "~1.0.3",
        "parseurl": "~1.3.3",
        "send": "0.17.1"
      }
    },
    "set-blocking": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/set-blocking/-/set-blocking-2.0.0.tgz",
      "integrity": "sha1-BF+XgtARrppoA93TgrJDkrPYkPc=",
      "dev": true
    },
    "set-value": {
      "version": "2.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/set-value/-/set-value-2.0.1.tgz",
      "integrity": "sha512-JxHc1weCN68wRY0fhCoXpyK55m/XPHafOmK4UWD7m2CI14GMcFypt4w/0+NV5f/ZMby2F6S2wwA7fgynh9gWSw==",
      "dev": true,
      "requires": {
        "extend-shallow": "^2.0.1",
        "is-extendable": "^0.1.1",
        "is-plain-object": "^2.0.3",
        "split-string": "^3.0.1"
      },
      "dependencies": {
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "dev": true,
          "requires": {
            "is-extendable": "^0.1.0"
          }
        }
      }
    },
    "setimmediate": {
      "version": "1.0.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/setimmediate/-/setimmediate-1.0.5.tgz",
      "integrity": "sha1-KQy7Iy4waULX1+qbg3Mqt4VvgoU=",
      "dev": true
    },
    "setprototypeof": {
      "version": "1.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/setprototypeof/-/setprototypeof-1.1.1.tgz",
      "integrity": "sha512-JvdAWfbXeIGaZ9cILp38HntZSFSo3mWg6xGcJJsd+d4aRMOqauag1C63dJfDw7OaMYwEbHMOxEZ1lqVRYP2OAw==",
      "dev": true
    },
    "sha.js": {
      "version": "2.4.11",
      "resolved": "http://maven.paic.com.cn/repository/npm/sha.js/-/sha.js-2.4.11.tgz",
      "integrity": "sha512-QMEp5B7cftE7APOjk5Y6xgrbWu+WkLVQwk8JNjZ8nKRciZaByEW6MubieAiToS7+dwvrjGhH8jRXz3MVd0AYqQ==",
      "dev": true,
      "requires": {
        "inherits": "^2.0.1",
        "safe-buffer": "^5.0.1"
      }
    },
    "shebang-command": {
      "version": "1.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/shebang-command/-/shebang-command-1.2.0.tgz",
      "integrity": "sha1-RKrGW2lbAzmJaMOfNj/uXer98eo=",
      "dev": true,
      "requires": {
        "shebang-regex": "^1.0.0"
      }
    },
    "shebang-regex": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/shebang-regex/-/shebang-regex-1.0.0.tgz",
      "integrity": "sha1-2kL0l0DAtC2yypcoVxyxkMmO/qM=",
      "dev": true
    },
    "shell-quote": {
      "version": "1.7.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/shell-quote/-/shell-quote-1.7.2.tgz",
      "integrity": "sha512-mRz/m/JVscCrkMyPqHc/bczi3OQHkLTqXHEFu0zDhK/qfv3UcOA4SVmRCLmos4bhjr9ekVQubj/R7waKapmiQg==",
      "dev": true
    },
    "shellwords": {
      "version": "0.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/shellwords/-/shellwords-0.1.1.tgz",
      "integrity": "sha512-vFwSUfQvqybiICwZY5+DAWIPLKsWO31Q91JSKl3UYv+K5c2QRPzn0qzec6QPu1Qc9eHYItiP3NdJqNVqetYAww==",
      "dev": true
    },
    "sigmund": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/sigmund/-/sigmund-1.0.1.tgz",
      "integrity": "sha1-P/IfGYytIXX587eBhT/ZTQ0ZtZA=",
      "dev": true
    },
    "signal-exit": {
      "version": "3.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/signal-exit/-/signal-exit-3.0.2.tgz",
      "integrity": "sha1-tf3AjxKH6hF4Yo5BXiUTK3NkbG0=",
      "dev": true
    },
    "simple-swizzle": {
      "version": "0.2.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/simple-swizzle/-/simple-swizzle-0.2.2.tgz",
      "integrity": "sha1-pNprY1/8zMoz9w0Xy5JZLeleVXo=",
      "dev": true,
      "requires": {
        "is-arrayish": "^0.3.1"
      },
      "dependencies": {
        "is-arrayish": {
          "version": "0.3.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-arrayish/-/is-arrayish-0.3.2.tgz",
          "integrity": "sha512-eVRqCvVlZbuw3GrM63ovNSNAeA1K16kaR/LRY/92w0zxQ5/1YzwblUX652i4Xs9RwAGjW9d9y6X88t8OaAJfWQ==",
          "dev": true
        }
      }
    },
    "sisteransi": {
      "version": "0.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/sisteransi/-/sisteransi-0.1.1.tgz",
      "integrity": "sha512-PmGOd02bM9YO5ifxpw36nrNMBTptEtfRl4qUYl9SndkolplkrZZOW7PGHjrZL53QvMVj9nQ+TKqUnRsw4tJa4g==",
      "dev": true
    },
    "slash": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/slash/-/slash-2.0.0.tgz",
      "integrity": "sha512-ZYKh3Wh2z1PpEXWr0MpSBZ0V6mZHAQfYevttO11c51CaWjGTaadiKZ+wVt1PbMlDV5qhMFslpZCemhwOK7C89A==",
      "dev": true
    },
    "slice-ansi": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/slice-ansi/-/slice-ansi-1.0.0.tgz",
      "integrity": "sha512-POqxBK6Lb3q6s047D/XsDVNPnF9Dl8JSaqe9h9lURl0OdNqy/ujDrOiIHtsqXMGbWWTIomRzAMaTyawAU//Reg==",
      "dev": true,
      "optional": true,
      "requires": {
        "is-fullwidth-code-point": "^2.0.0"
      }
    },
    "snapdragon": {
      "version": "0.8.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/snapdragon/-/snapdragon-0.8.2.tgz",
      "integrity": "sha512-FtyOnWN/wCHTVXOMwvSv26d+ko5vWlIDD6zoUJ7LW8vh+ZBC8QdljveRP+crNrtBwioEUWy/4dMtbBjA4ioNlg==",
      "dev": true,
      "requires": {
        "base": "^0.11.1",
        "debug": "^2.2.0",
        "define-property": "^0.2.5",
        "extend-shallow": "^2.0.1",
        "map-cache": "^0.2.2",
        "source-map": "^0.5.6",
        "source-map-resolve": "^0.5.0",
        "use": "^3.1.0"
      },
      "dependencies": {
        "debug": {
          "version": "2.6.9",
          "resolved": "http://maven.paic.com.cn/repository/npm/debug/-/debug-2.6.9.tgz",
          "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
          "dev": true,
          "requires": {
            "ms": "2.0.0"
          }
        },
        "define-property": {
          "version": "0.2.5",
          "resolved": "http://maven.paic.com.cn/repository/npm/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "dev": true,
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        },
        "extend-shallow": {
          "version": "2.0.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/extend-shallow/-/extend-shallow-2.0.1.tgz",
          "integrity": "sha1-Ua99YUrZqfYQ6huvu5idaxxWiQ8=",
          "dev": true,
          "requires": {
            "is-extendable": "^0.1.0"
          }
        },
        "ms": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/ms/-/ms-2.0.0.tgz",
          "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g=",
          "dev": true
        }
      }
    },
    "snapdragon-node": {
      "version": "2.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/snapdragon-node/-/snapdragon-node-2.1.1.tgz",
      "integrity": "sha512-O27l4xaMYt/RSQ5TR3vpWCAB5Kb/czIcqUFOM/C4fYcLnbZUc1PkjTAMjof2pBWaSTwOUd6qUHcFGVGj7aIwnw==",
      "dev": true,
      "requires": {
        "define-property": "^1.0.0",
        "isobject": "^3.0.0",
        "snapdragon-util": "^3.0.1"
      },
      "dependencies": {
        "define-property": {
          "version": "1.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/define-property/-/define-property-1.0.0.tgz",
          "integrity": "sha1-dp66rz9KY6rTr56NMEybvnm/sOY=",
          "dev": true,
          "requires": {
            "is-descriptor": "^1.0.0"
          }
        },
        "is-accessor-descriptor": {
          "version": "1.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-accessor-descriptor/-/is-accessor-descriptor-1.0.0.tgz",
          "integrity": "sha512-m5hnHTkcVsPfqx3AKlyttIPb7J+XykHvJP2B9bZDjlhLIoEq4XoK64Vg7boZlVWYK6LUY94dYPEE7Lh0ZkZKcQ==",
          "dev": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-data-descriptor": {
          "version": "1.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-data-descriptor/-/is-data-descriptor-1.0.0.tgz",
          "integrity": "sha512-jbRXy1FmtAoCjQkVmIVYwuuqDFUbaOeDjmed1tOGPrsMhtJA4rD9tkgA0F1qJ3gRFRXcHYVkdeaP50Q5rE/jLQ==",
          "dev": true,
          "requires": {
            "kind-of": "^6.0.0"
          }
        },
        "is-descriptor": {
          "version": "1.0.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-descriptor/-/is-descriptor-1.0.2.tgz",
          "integrity": "sha512-2eis5WqQGV7peooDyLmNEPUrps9+SXX5c9pL3xEB+4e9HnGuDa7mB7kHxHw4CbqS9k1T2hOH3miL8n8WtiYVtg==",
          "dev": true,
          "requires": {
            "is-accessor-descriptor": "^1.0.0",
            "is-data-descriptor": "^1.0.0",
            "kind-of": "^6.0.2"
          }
        }
      }
    },
    "snapdragon-util": {
      "version": "3.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/snapdragon-util/-/snapdragon-util-3.0.1.tgz",
      "integrity": "sha512-mbKkMdQKsjX4BAL4bRYTj21edOf8cN7XHdYUJEe+Zn99hVEYcMvKPct1IqNe7+AZPirn8BCDOQBHQZknqmKlZQ==",
      "dev": true,
      "requires": {
        "kind-of": "^3.2.0"
      },
      "dependencies": {
        "kind-of": {
          "version": "3.2.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "dev": true,
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "sockjs": {
      "version": "0.3.19",
      "resolved": "http://maven.paic.com.cn/repository/npm/sockjs/-/sockjs-0.3.19.tgz",
      "integrity": "sha512-V48klKZl8T6MzatbLlzzRNhMepEys9Y4oGFpypBFFn1gLI/QQ9HtLLyWJNbPlwGLelOVOEijUbTTJeLLI59jLw==",
      "dev": true,
      "requires": {
        "faye-websocket": "^0.10.0",
        "uuid": "^3.0.1"
      }
    },
    "sockjs-client": {
      "version": "1.4.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/sockjs-client/-/sockjs-client-1.4.0.tgz",
      "integrity": "sha512-5zaLyO8/nri5cua0VtOrFXBPK1jbL4+1cebT/mmKA1E1ZXOvJrII75bPu0l0k843G/+iAbhEqzyKr0w/eCCj7g==",
      "dev": true,
      "requires": {
        "debug": "^3.2.5",
        "eventsource": "^1.0.7",
        "faye-websocket": "~0.11.1",
        "inherits": "^2.0.3",
        "json3": "^3.3.2",
        "url-parse": "^1.4.3"
      },
      "dependencies": {
        "debug": {
          "version": "3.2.6",
          "resolved": "http://maven.paic.com.cn/repository/npm/debug/-/debug-3.2.6.tgz",
          "integrity": "sha512-mel+jf7nrtEl5Pn1Qx46zARXKDpBbvzezse7p7LqINmdoIk8PYP5SySaxEmYv6TZ0JyEKA1hsCId6DIhgITtWQ==",
          "dev": true,
          "requires": {
            "ms": "^2.1.1"
          }
        },
        "faye-websocket": {
          "version": "0.11.3",
          "resolved": "http://maven.paic.com.cn/repository/npm/faye-websocket/-/faye-websocket-0.11.3.tgz",
          "integrity": "sha512-D2y4bovYpzziGgbHYtGCMjlJM36vAl/y+xUyn1C+FVx8szd1E+86KwVw6XvYSzOP8iMpm1X0I4xJD+QtUb36OA==",
          "dev": true,
          "requires": {
            "websocket-driver": ">=0.5.1"
          }
        }
      }
    },
    "sort-keys": {
      "version": "1.1.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/sort-keys/-/sort-keys-1.1.2.tgz",
      "integrity": "sha1-RBttTTRnmPG05J6JIK37oOVD+a0=",
      "dev": true,
      "requires": {
        "is-plain-obj": "^1.0.0"
      }
    },
    "source-list-map": {
      "version": "2.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/source-list-map/-/source-list-map-2.0.1.tgz",
      "integrity": "sha512-qnQ7gVMxGNxsiL4lEuJwe/To8UnK7fAnmbGEEH8RpLouuKbeEm0lhbQVFIrNSuB+G7tVrAlVsZgETT5nljf+Iw==",
      "dev": true
    },
    "source-map": {
      "version": "0.5.7",
      "resolved": "http://maven.paic.com.cn/repository/npm/source-map/-/source-map-0.5.7.tgz",
      "integrity": "sha1-igOdLRAh0i0eoUyA2OpGi6LvP8w=",
      "dev": true
    },
    "source-map-resolve": {
      "version": "0.5.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/source-map-resolve/-/source-map-resolve-0.5.2.tgz",
      "integrity": "sha512-MjqsvNwyz1s0k81Goz/9vRBe9SZdB09Bdw+/zYyO+3CuPk6fouTaxscHkgtE8jKvf01kVfl8riHzERQ/kefaSA==",
      "dev": true,
      "requires": {
        "atob": "^2.1.1",
        "decode-uri-component": "^0.2.0",
        "resolve-url": "^0.2.1",
        "source-map-url": "^0.4.0",
        "urix": "^0.1.0"
      }
    },
    "source-map-support": {
      "version": "0.5.16",
      "resolved": "http://maven.paic.com.cn/repository/npm/source-map-support/-/source-map-support-0.5.16.tgz",
      "integrity": "sha512-efyLRJDr68D9hBBNIPWFjhpFzURh+KJykQwvMyW5UiZzYwoF6l4YMMDIJJEyFWxWCqfyxLzz6tSfUFR+kXXsVQ==",
      "dev": true,
      "requires": {
        "buffer-from": "^1.0.0",
        "source-map": "^0.6.0"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        }
      }
    },
    "source-map-url": {
      "version": "0.4.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/source-map-url/-/source-map-url-0.4.0.tgz",
      "integrity": "sha1-PpNdfd1zYxuXZZlW1VEo6HtQhKM=",
      "dev": true
    },
    "spdx-correct": {
      "version": "3.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/spdx-correct/-/spdx-correct-3.1.0.tgz",
      "integrity": "sha512-lr2EZCctC2BNR7j7WzJ2FpDznxky1sjfxvvYEyzxNyb6lZXHODmEoJeFu4JupYlkfha1KZpJyoqiJ7pgA1qq8Q==",
      "dev": true,
      "requires": {
        "spdx-expression-parse": "^3.0.0",
        "spdx-license-ids": "^3.0.0"
      }
    },
    "spdx-exceptions": {
      "version": "2.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/spdx-exceptions/-/spdx-exceptions-2.2.0.tgz",
      "integrity": "sha512-2XQACfElKi9SlVb1CYadKDXvoajPgBVPn/gOQLrTvHdElaVhr7ZEbqJaRnJLVNeaI4cMEAgVCeBMKF6MWRDCRA==",
      "dev": true
    },
    "spdx-expression-parse": {
      "version": "3.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/spdx-expression-parse/-/spdx-expression-parse-3.0.0.tgz",
      "integrity": "sha512-Yg6D3XpRD4kkOmTpdgbUiEJFKghJH03fiC1OPll5h/0sO6neh2jqRDVHOQ4o/LMea0tgCkbMgea5ip/e+MkWyg==",
      "dev": true,
      "requires": {
        "spdx-exceptions": "^2.1.0",
        "spdx-license-ids": "^3.0.0"
      }
    },
    "spdx-license-ids": {
      "version": "3.0.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/spdx-license-ids/-/spdx-license-ids-3.0.5.tgz",
      "integrity": "sha512-J+FWzZoynJEXGphVIS+XEh3kFSjZX/1i9gFBaWQcB+/tmpe2qUsSBABpcxqxnAxFdiUFEgAX1bjYGQvIZmoz9Q==",
      "dev": true
    },
    "spdy": {
      "version": "4.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/spdy/-/spdy-4.0.1.tgz",
      "integrity": "sha512-HeZS3PBdMA+sZSu0qwpCxl3DeALD5ASx8pAX0jZdKXSpPWbQ6SYGnlg3BBmYLx5LtiZrmkAZfErCm2oECBcioA==",
      "dev": true,
      "requires": {
        "debug": "^4.1.0",
        "handle-thing": "^2.0.0",
        "http-deceiver": "^1.2.7",
        "select-hose": "^2.0.0",
        "spdy-transport": "^3.0.0"
      }
    },
    "spdy-transport": {
      "version": "3.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/spdy-transport/-/spdy-transport-3.0.0.tgz",
      "integrity": "sha512-hsLVFE5SjA6TCisWeJXFKniGGOpBgMLmerfO2aCyCU5s7nJ/rpAepqmFifv/GCbSbueEeAJJnmSQ2rKC/g8Fcw==",
      "dev": true,
      "requires": {
        "debug": "^4.1.0",
        "detect-node": "^2.0.4",
        "hpack.js": "^2.1.6",
        "obuf": "^1.1.2",
        "readable-stream": "^3.0.6",
        "wbuf": "^1.7.3"
      },
      "dependencies": {
        "readable-stream": {
          "version": "3.4.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/readable-stream/-/readable-stream-3.4.0.tgz",
          "integrity": "sha512-jItXPLmrSR8jmTRmRWJXCnGJsfy85mB3Wd/uINMXA65yrnFo0cPClFIUWzo2najVNSl+mx7/4W8ttlLWJe99pQ==",
          "dev": true,
          "requires": {
            "inherits": "^2.0.3",
            "string_decoder": "^1.1.1",
            "util-deprecate": "^1.0.1"
          }
        }
      }
    },
    "split-string": {
      "version": "3.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/split-string/-/split-string-3.1.0.tgz",
      "integrity": "sha512-NzNVhJDYpwceVVii8/Hu6DKfD2G+NrQHlS/V/qgv763EYudVwEcMQNxd2lh+0VrUByXN/oJkl5grOhYWvQUYiw==",
      "dev": true,
      "requires": {
        "extend-shallow": "^3.0.0"
      }
    },
    "sprintf-js": {
      "version": "1.0.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/sprintf-js/-/sprintf-js-1.0.3.tgz",
      "integrity": "sha1-BOaSb2YolTVPPdAVIDYzuFcpfiw=",
      "dev": true
    },
    "sshpk": {
      "version": "1.16.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/sshpk/-/sshpk-1.16.1.tgz",
      "integrity": "sha512-HXXqVUq7+pcKeLqqZj6mHFUMvXtOJt1uoUx09pFW6011inTMxqI8BA8PM95myrIyyKwdnzjdFjLiE6KBPVtJIg==",
      "dev": true,
      "requires": {
        "asn1": "~0.2.3",
        "assert-plus": "^1.0.0",
        "bcrypt-pbkdf": "^1.0.0",
        "dashdash": "^1.12.0",
        "ecc-jsbn": "~0.1.1",
        "getpass": "^0.1.1",
        "jsbn": "~0.1.0",
        "safer-buffer": "^2.0.2",
        "tweetnacl": "~0.14.0"
      }
    },
    "ssri": {
      "version": "6.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/ssri/-/ssri-6.0.1.tgz",
      "integrity": "sha512-3Wge10hNcT1Kur4PDFwEieXSCMCJs/7WvSACcrMYrNp+b8kDL1/0wJch5Ni2WrtwEa2IO8OsVfeKIciKCDx/QA==",
      "dev": true,
      "requires": {
        "figgy-pudding": "^3.5.1"
      }
    },
    "stable": {
      "version": "0.1.8",
      "resolved": "http://maven.paic.com.cn/repository/npm/stable/-/stable-0.1.8.tgz",
      "integrity": "sha512-ji9qxRnOVfcuLDySj9qzhGSEFVobyt1kIOSkj1qZzYLzq7Tos/oUUWvotUPQLlrsidqsK6tBH89Bc9kL5zHA6w==",
      "dev": true
    },
    "stack-utils": {
      "version": "1.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/stack-utils/-/stack-utils-1.0.2.tgz",
      "integrity": "sha512-MTX+MeG5U994cazkjd/9KNAapsHnibjMLnfXodlkXw76JEea0UiNzrqidzo1emMwk7w5Qhc9jd4Bn9TBb1MFwA==",
      "dev": true
    },
    "stackframe": {
      "version": "1.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/stackframe/-/stackframe-1.1.0.tgz",
      "integrity": "sha512-Vx6W1Yvy+AM1R/ckVwcHQHV147pTPBKWCRLrXMuPrFVfvBUc3os7PR1QLIWCMhPpRg5eX9ojzbQIMLGBwyLjqg==",
      "dev": true
    },
    "static-extend": {
      "version": "0.1.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/static-extend/-/static-extend-0.1.2.tgz",
      "integrity": "sha1-YICcOcv/VTNyJv1eC1IPNB8ftcY=",
      "dev": true,
      "requires": {
        "define-property": "^0.2.5",
        "object-copy": "^0.1.0"
      },
      "dependencies": {
        "define-property": {
          "version": "0.2.5",
          "resolved": "http://maven.paic.com.cn/repository/npm/define-property/-/define-property-0.2.5.tgz",
          "integrity": "sha1-w1se+RjsPJkPmlvFe+BKrOxcgRY=",
          "dev": true,
          "requires": {
            "is-descriptor": "^0.1.0"
          }
        }
      }
    },
    "statuses": {
      "version": "1.5.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/statuses/-/statuses-1.5.0.tgz",
      "integrity": "sha1-Fhx9rBd2Wf2YEfQ3cfqZOBR4Yow=",
      "dev": true
    },
    "stealthy-require": {
      "version": "1.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/stealthy-require/-/stealthy-require-1.1.1.tgz",
      "integrity": "sha1-NbCYdbT/SfJqd35QmzCQoyJr8ks=",
      "dev": true
    },
    "stream-browserify": {
      "version": "2.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/stream-browserify/-/stream-browserify-2.0.2.tgz",
      "integrity": "sha512-nX6hmklHs/gr2FuxYDltq8fJA1GDlxKQCz8O/IM4atRqBH8OORmBNgfvW5gG10GT/qQ9u0CzIvr2X5Pkt6ntqg==",
      "dev": true,
      "requires": {
        "inherits": "~2.0.1",
        "readable-stream": "^2.0.2"
      }
    },
    "stream-each": {
      "version": "1.2.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/stream-each/-/stream-each-1.2.3.tgz",
      "integrity": "sha512-vlMC2f8I2u/bZGqkdfLQW/13Zihpej/7PmSiMQsbYddxuTsJp8vRe2x2FvVExZg7FaOds43ROAuFJwPR4MTZLw==",
      "dev": true,
      "requires": {
        "end-of-stream": "^1.1.0",
        "stream-shift": "^1.0.0"
      }
    },
    "stream-http": {
      "version": "2.8.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/stream-http/-/stream-http-2.8.3.tgz",
      "integrity": "sha512-+TSkfINHDo4J+ZobQLWiMouQYB+UVYFttRA94FpEzzJ7ZdqcL4uUUQ7WkdkI4DSozGmgBUE/a47L+38PenXhUw==",
      "dev": true,
      "requires": {
        "builtin-status-codes": "^3.0.0",
        "inherits": "^2.0.1",
        "readable-stream": "^2.3.6",
        "to-arraybuffer": "^1.0.0",
        "xtend": "^4.0.0"
      }
    },
    "stream-shift": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/stream-shift/-/stream-shift-1.0.1.tgz",
      "integrity": "sha512-AiisoFqQ0vbGcZgQPY1cdP2I76glaVA/RauYR4G4thNFgkTqr90yXTo4LYX60Jl+sIlPNHHdGSwo01AvbKUSVQ==",
      "dev": true
    },
    "strict-uri-encode": {
      "version": "1.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/strict-uri-encode/-/strict-uri-encode-1.1.0.tgz",
      "integrity": "sha1-J5siXfHVgrH1TmWt3UNS4Y+qBxM=",
      "dev": true
    },
    "string-length": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/string-length/-/string-length-2.0.0.tgz",
      "integrity": "sha1-1A27aGo6zpYMHP/KVivyxF+DY+0=",
      "dev": true,
      "requires": {
        "astral-regex": "^1.0.0",
        "strip-ansi": "^4.0.0"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "3.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/ansi-regex/-/ansi-regex-3.0.0.tgz",
          "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
          "dev": true
        },
        "strip-ansi": {
          "version": "4.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/strip-ansi/-/strip-ansi-4.0.0.tgz",
          "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
          "dev": true,
          "requires": {
            "ansi-regex": "^3.0.0"
          }
        }
      }
    },
    "string-width": {
      "version": "2.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/string-width/-/string-width-2.1.1.tgz",
      "integrity": "sha512-nOqH59deCq9SRHlxq1Aw85Jnt4w6KvLKqWVik6oA9ZklXLNIOlqg4F2yrT1MVaTjAqvVwdfeZ7w7aCvJD7ugkw==",
      "dev": true,
      "requires": {
        "is-fullwidth-code-point": "^2.0.0",
        "strip-ansi": "^4.0.0"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "3.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/ansi-regex/-/ansi-regex-3.0.0.tgz",
          "integrity": "sha1-7QMXwyIGT3lGbAKWa922Bas32Zg=",
          "dev": true
        },
        "strip-ansi": {
          "version": "4.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/strip-ansi/-/strip-ansi-4.0.0.tgz",
          "integrity": "sha1-qEeQIusaw2iocTibY1JixQXuNo8=",
          "dev": true,
          "requires": {
            "ansi-regex": "^3.0.0"
          }
        }
      }
    },
    "string.prototype.padend": {
      "version": "3.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/string.prototype.padend/-/string.prototype.padend-3.1.0.tgz",
      "integrity": "sha512-3aIv8Ffdp8EZj8iLwREGpQaUZiPyrWrpzMBHvkiSW/bK/EGve9np07Vwy7IJ5waydpGXzQZu/F8Oze2/IWkBaA==",
      "dev": true,
      "requires": {
        "define-properties": "^1.1.3",
        "es-abstract": "^1.17.0-next.1"
      }
    },
    "string.prototype.padstart": {
      "version": "3.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/string.prototype.padstart/-/string.prototype.padstart-3.1.0.tgz",
      "integrity": "sha512-envqZvUp2JItI+OeQ5UAh1ihbAV5G/2bixTojvlIa090GGqF+NQRxbWb2nv9fTGrZABv6+pE6jXoAZhhS2k4Hw==",
      "dev": true,
      "requires": {
        "define-properties": "^1.1.3",
        "es-abstract": "^1.17.0-next.1"
      }
    },
    "string.prototype.trimleft": {
      "version": "2.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/string.prototype.trimleft/-/string.prototype.trimleft-2.1.0.tgz",
      "integrity": "sha512-FJ6b7EgdKxxbDxc79cOlok6Afd++TTs5szo+zJTUyow3ycrRfJVE2pq3vcN53XexvKZu/DJMDfeI/qMiZTrjTw==",
      "dev": true,
      "requires": {
        "define-properties": "^1.1.3",
        "function-bind": "^1.1.1"
      }
    },
    "string.prototype.trimright": {
      "version": "2.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/string.prototype.trimright/-/string.prototype.trimright-2.1.0.tgz",
      "integrity": "sha512-fXZTSV55dNBwv16uw+hh5jkghxSnc5oHq+5K/gXgizHwAvMetdAJlHqqoFC1FSDVPYWLkAKl2cxpUT41sV7nSg==",
      "dev": true,
      "requires": {
        "define-properties": "^1.1.3",
        "function-bind": "^1.1.1"
      }
    },
    "string_decoder": {
      "version": "1.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/string_decoder/-/string_decoder-1.1.1.tgz",
      "integrity": "sha512-n/ShnvDi6FHbbVfviro+WojiFzv+s8MPMHBczVePfUpDJLwoLT0ht1l4YwBCbi8pJAveEEdnkHyPyTP/mzRfwg==",
      "dev": true,
      "requires": {
        "safe-buffer": "~5.1.0"
      }
    },
    "strip-ansi": {
      "version": "5.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/strip-ansi/-/strip-ansi-5.2.0.tgz",
      "integrity": "sha512-DuRs1gKbBqsMKIZlrffwlug8MHkcnpjs5VPmL1PAh+mA30U0DTotfDZ0d2UUsXpPmPmMMJ6W773MaA3J+lbiWA==",
      "dev": true,
      "requires": {
        "ansi-regex": "^4.1.0"
      }
    },
    "strip-bom": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/strip-bom/-/strip-bom-2.0.0.tgz",
      "integrity": "sha1-YhmoVhZSBJHzV4i9vxRHqZx+aw4=",
      "dev": true,
      "requires": {
        "is-utf8": "^0.2.0"
      }
    },
    "strip-eof": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/strip-eof/-/strip-eof-1.0.0.tgz",
      "integrity": "sha1-u0P/VZim6wXYm1n80SnJgzE2Br8=",
      "dev": true
    },
    "strip-final-newline": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/strip-final-newline/-/strip-final-newline-2.0.0.tgz",
      "integrity": "sha512-BrpvfNAE3dcvq7ll3xVumzjKjZQ5tI1sEUIKr3Uoks0XUl45St3FlatVqef9prk4jRDzhW6WZg+3bk93y6pLjA==",
      "dev": true
    },
    "strip-indent": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/strip-indent/-/strip-indent-2.0.0.tgz",
      "integrity": "sha1-XvjbKV0B5u1sv3qrlpmNeCJSe2g=",
      "dev": true
    },
    "strip-json-comments": {
      "version": "2.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/strip-json-comments/-/strip-json-comments-2.0.1.tgz",
      "integrity": "sha1-PFMZQukIwml8DsNEhYwobHygpgo=",
      "dev": true
    },
    "stylehacks": {
      "version": "4.0.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/stylehacks/-/stylehacks-4.0.3.tgz",
      "integrity": "sha512-7GlLk9JwlElY4Y6a/rmbH2MhVlTyVmiJd1PfTCqFaIBEGMYNsrO/v3SeGTdhBThLg4Z+NbOk/qFMwCa+J+3p/g==",
      "dev": true,
      "requires": {
        "browserslist": "^4.0.0",
        "postcss": "^7.0.0",
        "postcss-selector-parser": "^3.0.0"
      },
      "dependencies": {
        "postcss-selector-parser": {
          "version": "3.1.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/postcss-selector-parser/-/postcss-selector-parser-3.1.1.tgz",
          "integrity": "sha1-T4dfSvsMllc9XPTXQBGu4lCn6GU=",
          "dev": true,
          "requires": {
            "dot-prop": "^4.1.1",
            "indexes-of": "^1.0.1",
            "uniq": "^1.0.1"
          }
        }
      }
    },
    "supports-color": {
      "version": "5.5.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/supports-color/-/supports-color-5.5.0.tgz",
      "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
      "dev": true,
      "requires": {
        "has-flag": "^3.0.0"
      }
    },
    "svg-tags": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/svg-tags/-/svg-tags-1.0.0.tgz",
      "integrity": "sha1-WPcc7jvVGbWdSyqEO2x95krAR2Q=",
      "dev": true
    },
    "svgo": {
      "version": "1.3.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/svgo/-/svgo-1.3.2.tgz",
      "integrity": "sha512-yhy/sQYxR5BkC98CY7o31VGsg014AKLEPxdfhora76l36hD9Rdy5NZA/Ocn6yayNPgSamYdtX2rFJdcv07AYVw==",
      "dev": true,
      "requires": {
        "chalk": "^2.4.1",
        "coa": "^2.0.2",
        "css-select": "^2.0.0",
        "css-select-base-adapter": "^0.1.1",
        "css-tree": "1.0.0-alpha.37",
        "csso": "^4.0.2",
        "js-yaml": "^3.13.1",
        "mkdirp": "~0.5.1",
        "object.values": "^1.1.0",
        "sax": "~1.2.4",
        "stable": "^0.1.8",
        "unquote": "~1.1.1",
        "util.promisify": "~1.0.0"
      }
    },
    "symbol-tree": {
      "version": "3.2.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/symbol-tree/-/symbol-tree-3.2.4.tgz",
      "integrity": "sha512-9QNk5KwDF+Bvz+PyObkmSYjI5ksVUYtjW7AU22r2NKcfLJcXp96hkDWU3+XndOsUb+AQ9QhfzfCT2O+CNWT5Tw==",
      "dev": true
    },
    "table": {
      "version": "4.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/table/-/table-4.0.2.tgz",
      "integrity": "sha512-UUkEAPdSGxtRpiV9ozJ5cMTtYiqz7Ni1OGqLXRCynrvzdtR1p+cfOWe2RJLwvUG8hNanaSRjecIqwOjqeatDsA==",
      "dev": true,
      "optional": true,
      "requires": {
        "ajv": "^5.2.3",
        "ajv-keywords": "^2.1.0",
        "chalk": "^2.1.0",
        "lodash": "^4.17.4",
        "slice-ansi": "1.0.0",
        "string-width": "^2.1.1"
      },
      "dependencies": {
        "ajv": {
          "version": "5.5.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/ajv/-/ajv-5.5.2.tgz",
          "integrity": "sha1-c7Xuyj+rZT49P5Qis0GtQiBdyWU=",
          "dev": true,
          "optional": true,
          "requires": {
            "co": "^4.6.0",
            "fast-deep-equal": "^1.0.0",
            "fast-json-stable-stringify": "^2.0.0",
            "json-schema-traverse": "^0.3.0"
          }
        },
        "ajv-keywords": {
          "version": "2.1.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/ajv-keywords/-/ajv-keywords-2.1.1.tgz",
          "integrity": "sha1-YXmX/F9gV2iUxDX5QNgZ4TW4B2I=",
          "dev": true,
          "optional": true
        },
        "fast-deep-equal": {
          "version": "1.1.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/fast-deep-equal/-/fast-deep-equal-1.1.0.tgz",
          "integrity": "sha1-wFNHeBfIa1HaqFPIHgWbcz0CNhQ=",
          "dev": true,
          "optional": true
        },
        "json-schema-traverse": {
          "version": "0.3.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/json-schema-traverse/-/json-schema-traverse-0.3.1.tgz",
          "integrity": "sha1-NJptRMU6Ud6JtAgFxdXlm0F9M0A=",
          "dev": true,
          "optional": true
        }
      }
    },
    "tapable": {
      "version": "1.1.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/tapable/-/tapable-1.1.3.tgz",
      "integrity": "sha512-4WK/bYZmj8xLr+HUCODHGF1ZFzsYffasLUgEiMBY4fgtltdO6B4WJtlSbPaDTLpYTcGVwM2qLnFTICEcNxs3kA==",
      "dev": true
    },
    "terser": {
      "version": "4.4.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/terser/-/terser-4.4.3.tgz",
      "integrity": "sha512-0ikKraVtRDKGzHrzkCv5rUNDzqlhmhowOBqC0XqUHFpW+vJ45+20/IFBcebwKfiS2Z9fJin6Eo+F1zLZsxi8RA==",
      "dev": true,
      "requires": {
        "commander": "^2.20.0",
        "source-map": "~0.6.1",
        "source-map-support": "~0.5.12"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        }
      }
    },
    "terser-webpack-plugin": {
      "version": "1.4.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/terser-webpack-plugin/-/terser-webpack-plugin-1.4.3.tgz",
      "integrity": "sha512-QMxecFz/gHQwteWwSo5nTc6UaICqN1bMedC5sMtUc7y3Ha3Q8y6ZO0iCR8pq4RJC8Hjf0FEPEHZqcMB/+DFCrA==",
      "dev": true,
      "requires": {
        "cacache": "^12.0.2",
        "find-cache-dir": "^2.1.0",
        "is-wsl": "^1.1.0",
        "schema-utils": "^1.0.0",
        "serialize-javascript": "^2.1.2",
        "source-map": "^0.6.1",
        "terser": "^4.1.2",
        "webpack-sources": "^1.4.0",
        "worker-farm": "^1.7.0"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        }
      }
    },
    "test-exclude": {
      "version": "4.2.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/test-exclude/-/test-exclude-4.2.3.tgz",
      "integrity": "sha512-SYbXgY64PT+4GAL2ocI3HwPa4Q4TBKm0cwAVeKOt/Aoc0gSpNRjJX8w0pA1LMKZ3LBmd8pYBqApFNQLII9kavA==",
      "dev": true,
      "requires": {
        "arrify": "^1.0.1",
        "micromatch": "^2.3.11",
        "object-assign": "^4.1.0",
        "read-pkg-up": "^1.0.1",
        "require-main-filename": "^1.0.1"
      },
      "dependencies": {
        "arr-diff": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/arr-diff/-/arr-diff-2.0.0.tgz",
          "integrity": "sha1-jzuCf5Vai9ZpaX5KQlasPOrjVs8=",
          "dev": true,
          "requires": {
            "arr-flatten": "^1.0.1"
          }
        },
        "array-unique": {
          "version": "0.2.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/array-unique/-/array-unique-0.2.1.tgz",
          "integrity": "sha1-odl8yvy8JiXMcPrc6zalDFiwGlM=",
          "dev": true
        },
        "braces": {
          "version": "1.8.5",
          "resolved": "http://maven.paic.com.cn/repository/npm/braces/-/braces-1.8.5.tgz",
          "integrity": "sha1-uneWLhLf+WnWt2cR6RS3N4V79qc=",
          "dev": true,
          "requires": {
            "expand-range": "^1.8.1",
            "preserve": "^0.2.0",
            "repeat-element": "^1.1.2"
          }
        },
        "expand-brackets": {
          "version": "0.1.5",
          "resolved": "http://maven.paic.com.cn/repository/npm/expand-brackets/-/expand-brackets-0.1.5.tgz",
          "integrity": "sha1-3wcoTjQqgHzXM6xa9yQR5YHRF3s=",
          "dev": true,
          "requires": {
            "is-posix-bracket": "^0.1.0"
          }
        },
        "extglob": {
          "version": "0.3.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/extglob/-/extglob-0.3.2.tgz",
          "integrity": "sha1-Lhj/PS9JqydlzskCPwEdqo2DSaE=",
          "dev": true,
          "requires": {
            "is-extglob": "^1.0.0"
          }
        },
        "is-extglob": {
          "version": "1.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-extglob/-/is-extglob-1.0.0.tgz",
          "integrity": "sha1-rEaBd8SUNAWgkvyPKXYMb/xiBsA=",
          "dev": true
        },
        "is-glob": {
          "version": "2.0.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-glob/-/is-glob-2.0.1.tgz",
          "integrity": "sha1-0Jb5JqPe1WAPP9/ZEZjLCIjC2GM=",
          "dev": true,
          "requires": {
            "is-extglob": "^1.0.0"
          }
        },
        "kind-of": {
          "version": "3.2.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "dev": true,
          "requires": {
            "is-buffer": "^1.1.5"
          }
        },
        "micromatch": {
          "version": "2.3.11",
          "resolved": "http://maven.paic.com.cn/repository/npm/micromatch/-/micromatch-2.3.11.tgz",
          "integrity": "sha1-hmd8l9FyCzY0MdBNDRUpO9OMFWU=",
          "dev": true,
          "requires": {
            "arr-diff": "^2.0.0",
            "array-unique": "^0.2.1",
            "braces": "^1.8.2",
            "expand-brackets": "^0.1.4",
            "extglob": "^0.3.1",
            "filename-regex": "^2.0.0",
            "is-extglob": "^1.0.0",
            "is-glob": "^2.0.1",
            "kind-of": "^3.0.2",
            "normalize-path": "^2.0.1",
            "object.omit": "^2.0.0",
            "parse-glob": "^3.0.4",
            "regex-cache": "^0.4.2"
          }
        },
        "normalize-path": {
          "version": "2.1.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/normalize-path/-/normalize-path-2.1.1.tgz",
          "integrity": "sha1-GrKLVW4Zg2Oowab35vogE3/mrtk=",
          "dev": true,
          "requires": {
            "remove-trailing-separator": "^1.0.1"
          }
        }
      }
    },
    "text-table": {
      "version": "0.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/text-table/-/text-table-0.2.0.tgz",
      "integrity": "sha1-f17oI66AUgfACvLfSoTsP8+lcLQ=",
      "dev": true
    },
    "thenify": {
      "version": "3.3.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/thenify/-/thenify-3.3.0.tgz",
      "integrity": "sha1-5p44obq+lpsBCCB5eLn2K4hgSDk=",
      "dev": true,
      "requires": {
        "any-promise": "^1.0.0"
      }
    },
    "thenify-all": {
      "version": "1.6.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/thenify-all/-/thenify-all-1.6.0.tgz",
      "integrity": "sha1-GhkY1ALY/D+Y+/I02wvMjMEOlyY=",
      "dev": true,
      "requires": {
        "thenify": ">= 3.1.0 < 4"
      }
    },
    "thread-loader": {
      "version": "2.1.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/thread-loader/-/thread-loader-2.1.3.tgz",
      "integrity": "sha512-wNrVKH2Lcf8ZrWxDF/khdlLlsTMczdcwPA9VEK4c2exlEPynYWxi9op3nPTo5lAnDIkE0rQEB3VBP+4Zncc9Hg==",
      "dev": true,
      "requires": {
        "loader-runner": "^2.3.1",
        "loader-utils": "^1.1.0",
        "neo-async": "^2.6.0"
      }
    },
    "throat": {
      "version": "4.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/throat/-/throat-4.1.0.tgz",
      "integrity": "sha1-iQN8vJLFarGJJua6TLsgDhVnKmo=",
      "dev": true
    },
    "throttle-debounce": {
      "version": "1.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/throttle-debounce/-/throttle-debounce-1.1.0.tgz",
      "integrity": "sha512-XH8UiPCQcWNuk2LYePibW/4qL97+ZQ1AN3FNXwZRBNPPowo/NRU5fAlDCSNBJIYCKbioZfuYtMhG4quqoJhVzg=="
    },
    "through": {
      "version": "2.3.8",
      "resolved": "http://maven.paic.com.cn/repository/npm/through/-/through-2.3.8.tgz",
      "integrity": "sha1-DdTJ/6q8NXlgsbckEV1+Doai4fU=",
      "dev": true
    },
    "through2": {
      "version": "2.0.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/through2/-/through2-2.0.5.tgz",
      "integrity": "sha512-/mrRod8xqpA+IHSLyGCQ2s8SPHiCDEeQJSep1jqLYeEUClOFG2Qsh+4FU6G9VeqpZnGW/Su8LQGc4YKni5rYSQ==",
      "dev": true,
      "requires": {
        "readable-stream": "~2.3.6",
        "xtend": "~4.0.1"
      }
    },
    "thunky": {
      "version": "1.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/thunky/-/thunky-1.1.0.tgz",
      "integrity": "sha512-eHY7nBftgThBqOyHGVN+l8gF0BucP09fMo0oO/Lb0w1OF80dJv+lDVpXG60WMQvkcxAkNybKsrEIE3ZtKGmPrA==",
      "dev": true
    },
    "timers-browserify": {
      "version": "2.0.11",
      "resolved": "http://maven.paic.com.cn/repository/npm/timers-browserify/-/timers-browserify-2.0.11.tgz",
      "integrity": "sha512-60aV6sgJ5YEbzUdn9c8kYGIqOubPoUdqQCul3SBAsRCZ40s6Y5cMcrW4dt3/k/EsbLVJNl9n6Vz3fTc+k2GeKQ==",
      "dev": true,
      "requires": {
        "setimmediate": "^1.0.4"
      }
    },
    "timsort": {
      "version": "0.3.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/timsort/-/timsort-0.3.0.tgz",
      "integrity": "sha1-QFQRqOfmM5/mTbmiNN4R3DHgK9Q=",
      "dev": true
    },
    "tinycolor2": {
      "version": "1.4.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/tinycolor2/-/tinycolor2-1.4.1.tgz",
      "integrity": "sha1-9PrTM0R7wLB9TcjpIJ2POaisd+g="
    },
    "tmp": {
      "version": "0.0.33",
      "resolved": "http://maven.paic.com.cn/repository/npm/tmp/-/tmp-0.0.33.tgz",
      "integrity": "sha512-jRCJlojKnZ3addtTOjdIqoRuPEKBvNXcGYqzO6zWZX8KfKEpnGY5jfggJQ3EjKuu8D4bJRr0y+cYJFmYbImXGw==",
      "dev": true,
      "requires": {
        "os-tmpdir": "~1.0.2"
      }
    },
    "tmpl": {
      "version": "1.0.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/tmpl/-/tmpl-1.0.4.tgz",
      "integrity": "sha1-I2QN17QtAEM5ERQIIOXPRA5SHdE=",
      "dev": true
    },
    "to-arraybuffer": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/to-arraybuffer/-/to-arraybuffer-1.0.1.tgz",
      "integrity": "sha1-fSKbH8xjfkZsoIEYCDanqr/4P0M=",
      "dev": true
    },
    "to-fast-properties": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/to-fast-properties/-/to-fast-properties-2.0.0.tgz",
      "integrity": "sha1-3F5pjL0HkmW8c+A3doGk5Og/YW4=",
      "dev": true
    },
    "to-object-path": {
      "version": "0.3.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/to-object-path/-/to-object-path-0.3.0.tgz",
      "integrity": "sha1-KXWIt7Dn4KwI4E5nL4XB9JmeF68=",
      "dev": true,
      "requires": {
        "kind-of": "^3.0.2"
      },
      "dependencies": {
        "kind-of": {
          "version": "3.2.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/kind-of/-/kind-of-3.2.2.tgz",
          "integrity": "sha1-MeohpzS6ubuw8yRm2JOupR5KPGQ=",
          "dev": true,
          "requires": {
            "is-buffer": "^1.1.5"
          }
        }
      }
    },
    "to-regex": {
      "version": "3.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/to-regex/-/to-regex-3.0.2.tgz",
      "integrity": "sha512-FWtleNAtZ/Ki2qtqej2CXTOayOH9bHDQF+Q48VpWyDXjbYxA4Yz8iDB31zXOBUlOHHKidDbqGVrTUvQMPmBGBw==",
      "dev": true,
      "requires": {
        "define-property": "^2.0.2",
        "extend-shallow": "^3.0.2",
        "regex-not": "^1.0.2",
        "safe-regex": "^1.1.0"
      }
    },
    "to-regex-range": {
      "version": "2.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/to-regex-range/-/to-regex-range-2.1.1.tgz",
      "integrity": "sha1-fIDBe53+vlmeJzZ+DU3VWQFB2zg=",
      "dev": true,
      "requires": {
        "is-number": "^3.0.0",
        "repeat-string": "^1.6.1"
      }
    },
    "toidentifier": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/toidentifier/-/toidentifier-1.0.0.tgz",
      "integrity": "sha512-yaOH/Pk/VEhBWWTlhI+qXxDFXlejDGcQipMlyxda9nthulaxLZUNcUqFxokp0vcYnvteJln5FNQDRrxj3YcbVw==",
      "dev": true
    },
    "toposort": {
      "version": "1.0.7",
      "resolved": "http://maven.paic.com.cn/repository/npm/toposort/-/toposort-1.0.7.tgz",
      "integrity": "sha1-LmhELZ9k7HILjMieZEOsbKqVACk=",
      "dev": true
    },
    "tough-cookie": {
      "version": "2.4.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/tough-cookie/-/tough-cookie-2.4.3.tgz",
      "integrity": "sha512-Q5srk/4vDM54WJsJio3XNn6K2sCG+CQ8G5Wz6bZhRZoAe/+TxjWB/GlFAnYEbkYVlON9FMk/fE3h2RLpPXo4lQ==",
      "dev": true,
      "requires": {
        "psl": "^1.1.24",
        "punycode": "^1.4.1"
      },
      "dependencies": {
        "punycode": {
          "version": "1.4.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/punycode/-/punycode-1.4.1.tgz",
          "integrity": "sha1-wNWmOycYgArY4esPpSachN1BhF4=",
          "dev": true
        }
      }
    },
    "tr46": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/tr46/-/tr46-1.0.1.tgz",
      "integrity": "sha1-qLE/1r/SSJUZZ0zN5VujaTtwbQk=",
      "dev": true,
      "requires": {
        "punycode": "^2.1.0"
      }
    },
    "trim-right": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/trim-right/-/trim-right-1.0.1.tgz",
      "integrity": "sha1-yy4SAwZ+DI3h9hQJS5/kVwTqYAM=",
      "dev": true
    },
    "tryer": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/tryer/-/tryer-1.0.1.tgz",
      "integrity": "sha512-c3zayb8/kWWpycWYg87P71E1S1ZL6b6IJxfb5fvsUgsf0S2MVGaDhDXXjDMpdCpfWXqptc+4mXwmiy1ypXqRAA==",
      "dev": true
    },
    "ts-jest": {
      "version": "23.10.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/ts-jest/-/ts-jest-23.10.5.tgz",
      "integrity": "sha512-MRCs9qnGoyKgFc8adDEntAOP64fWK1vZKnOYU1o2HxaqjdJvGqmkLCPCnVq1/If4zkUmEjKPnCiUisTrlX2p2A==",
      "dev": true,
      "requires": {
        "bs-logger": "0.x",
        "buffer-from": "1.x",
        "fast-json-stable-stringify": "2.x",
        "json5": "2.x",
        "make-error": "1.x",
        "mkdirp": "0.x",
        "resolve": "1.x",
        "semver": "^5.5",
        "yargs-parser": "10.x"
      },
      "dependencies": {
        "camelcase": {
          "version": "4.1.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/camelcase/-/camelcase-4.1.0.tgz",
          "integrity": "sha1-1UVjW+HjPFQmScaRc+Xeas+uNN0=",
          "dev": true
        },
        "yargs-parser": {
          "version": "10.1.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/yargs-parser/-/yargs-parser-10.1.0.tgz",
          "integrity": "sha512-VCIyR1wJoEBZUqk5PA+oOBF6ypbwh5aNB3I50guxAL/quggdfs4TtNHQrSazFA3fYZ+tEqfs0zIGlv0c/rgjbQ==",
          "dev": true,
          "requires": {
            "camelcase": "^4.1.0"
          }
        }
      }
    },
    "ts-loader": {
      "version": "5.4.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/ts-loader/-/ts-loader-5.4.5.tgz",
      "integrity": "sha512-XYsjfnRQCBum9AMRZpk2rTYSVpdZBpZK+kDh0TeT3kxmQNBDVIeUjdPjY5RZry4eIAb8XHc4gYSUiUWPYvzSRw==",
      "dev": true,
      "requires": {
        "chalk": "^2.3.0",
        "enhanced-resolve": "^4.0.0",
        "loader-utils": "^1.0.2",
        "micromatch": "^3.1.4",
        "semver": "^5.0.1"
      }
    },
    "tsconfig": {
      "version": "7.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/tsconfig/-/tsconfig-7.0.0.tgz",
      "integrity": "sha512-vZXmzPrL+EmC4T/4rVlT2jNVMWCi/O4DIiSj3UHg1OE5kCKbk4mfrXc6dZksLgRM/TZlKnousKH9bbTazUWRRw==",
      "dev": true,
      "requires": {
        "@types/strip-bom": "^3.0.0",
        "@types/strip-json-comments": "0.0.30",
        "strip-bom": "^3.0.0",
        "strip-json-comments": "^2.0.0"
      },
      "dependencies": {
        "strip-bom": {
          "version": "3.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/strip-bom/-/strip-bom-3.0.0.tgz",
          "integrity": "sha1-IzTBjpx1n3vdVv3vfprj1YjmjtM=",
          "dev": true
        }
      }
    },
    "tslib": {
      "version": "1.10.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/tslib/-/tslib-1.10.0.tgz",
      "integrity": "sha512-qOebF53frne81cf0S9B41ByenJ3/IuH8yJKngAX35CmiZySA0khhkovshKK+jGCaMnVomla7gVlIcc3EvKPbTQ==",
      "dev": true
    },
    "tslint": {
      "version": "5.20.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/tslint/-/tslint-5.20.1.tgz",
      "integrity": "sha512-EcMxhzCFt8k+/UP5r8waCf/lzmeSyVlqxqMEDQE7rWYiQky8KpIBz1JAoYXfROHrPZ1XXd43q8yQnULOLiBRQg==",
      "dev": true,
      "requires": {
        "@babel/code-frame": "^7.0.0",
        "builtin-modules": "^1.1.1",
        "chalk": "^2.3.0",
        "commander": "^2.12.1",
        "diff": "^4.0.1",
        "glob": "^7.1.1",
        "js-yaml": "^3.13.1",
        "minimatch": "^3.0.4",
        "mkdirp": "^0.5.1",
        "resolve": "^1.3.2",
        "semver": "^5.3.0",
        "tslib": "^1.8.0",
        "tsutils": "^2.29.0"
      }
    },
    "tsutils": {
      "version": "2.29.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/tsutils/-/tsutils-2.29.0.tgz",
      "integrity": "sha512-g5JVHCIJwzfISaXpXE1qvNalca5Jwob6FjI4AoPlqMusJ6ftFE7IkkFoMhVLRgK+4Kx3gkzb8UZK5t5yTTvEmA==",
      "dev": true,
      "requires": {
        "tslib": "^1.8.1"
      }
    },
    "tty-browserify": {
      "version": "0.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/tty-browserify/-/tty-browserify-0.0.0.tgz",
      "integrity": "sha1-oVe6QC2iTpv5V/mqadUk7tQpAaY=",
      "dev": true
    },
    "tunnel-agent": {
      "version": "0.6.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/tunnel-agent/-/tunnel-agent-0.6.0.tgz",
      "integrity": "sha1-J6XeoGs2sEoKmWZ3SykIaPD8QP0=",
      "dev": true,
      "requires": {
        "safe-buffer": "^5.0.1"
      }
    },
    "tweetnacl": {
      "version": "0.14.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/tweetnacl/-/tweetnacl-0.14.5.tgz",
      "integrity": "sha1-WuaBd/GS1EViadEIr6k/+HQ/T2Q=",
      "dev": true
    },
    "type-check": {
      "version": "0.3.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/type-check/-/type-check-0.3.2.tgz",
      "integrity": "sha1-WITKtRLPHTVeP7eE8wgEsrUg23I=",
      "dev": true,
      "requires": {
        "prelude-ls": "~1.1.2"
      }
    },
    "type-fest": {
      "version": "0.6.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/type-fest/-/type-fest-0.6.0.tgz",
      "integrity": "sha512-q+MB8nYR1KDLrgr4G5yemftpMC7/QLqVndBmEEdqzmNj5dcFOO4Oo8qlwZE3ULT3+Zim1F8Kq4cBnikNhlCMlg==",
      "dev": true
    },
    "type-is": {
      "version": "1.6.18",
      "resolved": "http://maven.paic.com.cn/repository/npm/type-is/-/type-is-1.6.18.tgz",
      "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
      "dev": true,
      "requires": {
        "media-typer": "0.3.0",
        "mime-types": "~2.1.24"
      }
    },
    "typedarray": {
      "version": "0.0.6",
      "resolved": "http://maven.paic.com.cn/repository/npm/typedarray/-/typedarray-0.0.6.tgz",
      "integrity": "sha1-hnrHTjhkGHsdPUfZlqeOxciDB3c=",
      "dev": true
    },
    "typescript": {
      "version": "3.7.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/typescript/-/typescript-3.7.4.tgz",
      "integrity": "sha512-A25xv5XCtarLwXpcDNZzCGvW2D1S3/bACratYBx2sax8PefsFhlYmkQicKHvpYflFS8if4zne5zT5kpJ7pzuvw==",
      "dev": true
    },
    "uglify-js": {
      "version": "3.7.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/uglify-js/-/uglify-js-3.7.2.tgz",
      "integrity": "sha512-uhRwZcANNWVLrxLfNFEdltoPNhECUR3lc+UdJoG9CBpMcSnKyWA94tc3eAujB1GcMY5Uwq8ZMp4qWpxWYDQmaA==",
      "dev": true,
      "optional": true,
      "requires": {
        "commander": "~2.20.3",
        "source-map": "~0.6.1"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true,
          "optional": true
        }
      }
    },
    "unicode-canonical-property-names-ecmascript": {
      "version": "1.0.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/unicode-canonical-property-names-ecmascript/-/unicode-canonical-property-names-ecmascript-1.0.4.tgz",
      "integrity": "sha512-jDrNnXWHd4oHiTZnx/ZG7gtUTVp+gCcTTKr8L0HjlwphROEW3+Him+IpvC+xcJEFegapiMZyZe02CyuOnRmbnQ==",
      "dev": true
    },
    "unicode-match-property-ecmascript": {
      "version": "1.0.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/unicode-match-property-ecmascript/-/unicode-match-property-ecmascript-1.0.4.tgz",
      "integrity": "sha512-L4Qoh15vTfntsn4P1zqnHulG0LdXgjSO035fEpdtp6YxXhMT51Q6vgM5lYdG/5X3MjS+k/Y9Xw4SFCY9IkR0rg==",
      "dev": true,
      "requires": {
        "unicode-canonical-property-names-ecmascript": "^1.0.4",
        "unicode-property-aliases-ecmascript": "^1.0.4"
      }
    },
    "unicode-match-property-value-ecmascript": {
      "version": "1.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/unicode-match-property-value-ecmascript/-/unicode-match-property-value-ecmascript-1.1.0.tgz",
      "integrity": "sha512-hDTHvaBk3RmFzvSl0UVrUmC3PuW9wKVnpoUDYH0JDkSIovzw+J5viQmeYHxVSBptubnr7PbH2e0fnpDRQnQl5g==",
      "dev": true
    },
    "unicode-property-aliases-ecmascript": {
      "version": "1.0.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/unicode-property-aliases-ecmascript/-/unicode-property-aliases-ecmascript-1.0.5.tgz",
      "integrity": "sha512-L5RAqCfXqAwR3RriF8pM0lU0w4Ryf/GgzONwi6KnL1taJQa7x1TCxdJnILX59WIGOwR57IVxn7Nej0fz1Ny6fw==",
      "dev": true
    },
    "union-value": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/union-value/-/union-value-1.0.1.tgz",
      "integrity": "sha512-tJfXmxMeWYnczCVs7XAEvIV7ieppALdyepWMkHkwciRpZraG/xwT+s2JN8+pr1+8jCRf80FFzvr+MpQeeoF4Xg==",
      "dev": true,
      "requires": {
        "arr-union": "^3.1.0",
        "get-value": "^2.0.6",
        "is-extendable": "^0.1.1",
        "set-value": "^2.0.1"
      }
    },
    "uniq": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/uniq/-/uniq-1.0.1.tgz",
      "integrity": "sha1-sxxa6CVIRKOoKBVBzisEuGWnNP8=",
      "dev": true
    },
    "uniqs": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/uniqs/-/uniqs-2.0.0.tgz",
      "integrity": "sha1-/+3ks2slKQaW5uFl1KWe25mOawI=",
      "dev": true
    },
    "unique-filename": {
      "version": "1.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/unique-filename/-/unique-filename-1.1.1.tgz",
      "integrity": "sha512-Vmp0jIp2ln35UTXuryvjzkjGdRyf9b2lTXuSYUiPmzRcl3FDtYqAwOnTJkAngD9SWhnoJzDbTKwaOrZ+STtxNQ==",
      "dev": true,
      "requires": {
        "unique-slug": "^2.0.0"
      }
    },
    "unique-slug": {
      "version": "2.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/unique-slug/-/unique-slug-2.0.2.tgz",
      "integrity": "sha512-zoWr9ObaxALD3DOPfjPSqxt4fnZiWblxHIgeWqW8x7UqDzEtHEQLzji2cuJYQFCU6KmoJikOYAZlrTHHebjx2w==",
      "dev": true,
      "requires": {
        "imurmurhash": "^0.1.4"
      }
    },
    "universalify": {
      "version": "0.1.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/universalify/-/universalify-0.1.2.tgz",
      "integrity": "sha512-rBJeI5CXAlmy1pV+617WB9J63U6XcazHHF2f2dbJix4XzpUF0RS3Zbj0FGIOCAva5P/d/GBOYaACQ1w+0azUkg==",
      "dev": true
    },
    "unpipe": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/unpipe/-/unpipe-1.0.0.tgz",
      "integrity": "sha1-sr9O6FFKrmFltIF4KdIbLvSZBOw=",
      "dev": true
    },
    "unquote": {
      "version": "1.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/unquote/-/unquote-1.1.1.tgz",
      "integrity": "sha1-j97XMk7G6IoP+LkF58CYzcCG1UQ=",
      "dev": true
    },
    "unset-value": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/unset-value/-/unset-value-1.0.0.tgz",
      "integrity": "sha1-g3aHP30jNRef+x5vw6jtDfyKtVk=",
      "dev": true,
      "requires": {
        "has-value": "^0.3.1",
        "isobject": "^3.0.0"
      },
      "dependencies": {
        "has-value": {
          "version": "0.3.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/has-value/-/has-value-0.3.1.tgz",
          "integrity": "sha1-ex9YutpiyoJ+wKIHgCVlSEWZXh8=",
          "dev": true,
          "requires": {
            "get-value": "^2.0.3",
            "has-values": "^0.1.4",
            "isobject": "^2.0.0"
          },
          "dependencies": {
            "isobject": {
              "version": "2.1.0",
              "resolved": "http://maven.paic.com.cn/repository/npm/isobject/-/isobject-2.1.0.tgz",
              "integrity": "sha1-8GVWEJaj8dou9GJy+BXIQNh+DIk=",
              "dev": true,
              "requires": {
                "isarray": "1.0.0"
              }
            }
          }
        },
        "has-values": {
          "version": "0.1.4",
          "resolved": "http://maven.paic.com.cn/repository/npm/has-values/-/has-values-0.1.4.tgz",
          "integrity": "sha1-bWHeldkd/Km5oCCJrThL/49it3E=",
          "dev": true
        }
      }
    },
    "upath": {
      "version": "1.2.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/upath/-/upath-1.2.0.tgz",
      "integrity": "sha512-aZwGpamFO61g3OlfT7OQCHqhGnW43ieH9WZeP7QxN/G/jS4jfqUkZxoryvJgVPEcrl5NL/ggHsSmLMHuH64Lhg==",
      "dev": true
    },
    "upper-case": {
      "version": "1.1.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/upper-case/-/upper-case-1.1.3.tgz",
      "integrity": "sha1-9rRQHC7EzdJrp4vnIilh3ndiFZg=",
      "dev": true
    },
    "uri-js": {
      "version": "4.2.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/uri-js/-/uri-js-4.2.2.tgz",
      "integrity": "sha512-KY9Frmirql91X2Qgjry0Wd4Y+YTdrdZheS8TFwvkbLWf/G5KNJDCh6pKL5OZctEW4+0Baa5idK2ZQuELRwPznQ==",
      "dev": true,
      "requires": {
        "punycode": "^2.1.0"
      }
    },
    "urix": {
      "version": "0.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/urix/-/urix-0.1.0.tgz",
      "integrity": "sha1-2pN/emLiH+wf0Y1Js1wpNQZ6bHI=",
      "dev": true
    },
    "url": {
      "version": "0.11.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/url/-/url-0.11.0.tgz",
      "integrity": "sha1-ODjpfPxgUh63PFJajlW/3Z4uKPE=",
      "dev": true,
      "requires": {
        "punycode": "1.3.2",
        "querystring": "0.2.0"
      },
      "dependencies": {
        "punycode": {
          "version": "1.3.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/punycode/-/punycode-1.3.2.tgz",
          "integrity": "sha1-llOgNvt8HuQjQvIyXM7v6jkmxI0=",
          "dev": true
        }
      }
    },
    "url-loader": {
      "version": "1.1.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/url-loader/-/url-loader-1.1.2.tgz",
      "integrity": "sha512-dXHkKmw8FhPqu8asTc1puBfe3TehOCo2+RmOOev5suNCIYBcT626kxiWg1NBVkwc4rO8BGa7gP70W7VXuqHrjg==",
      "dev": true,
      "requires": {
        "loader-utils": "^1.1.0",
        "mime": "^2.0.3",
        "schema-utils": "^1.0.0"
      }
    },
    "url-parse": {
      "version": "1.4.7",
      "resolved": "http://maven.paic.com.cn/repository/npm/url-parse/-/url-parse-1.4.7.tgz",
      "integrity": "sha512-d3uaVyzDB9tQoSXFvuSUNFibTd9zxd2bkVrDRvF5TmvWWQwqE4lgYJ5m+x1DbecWkw+LK4RNl2CU1hHuOKPVlg==",
      "dev": true,
      "requires": {
        "querystringify": "^2.1.1",
        "requires-port": "^1.0.0"
      }
    },
    "use": {
      "version": "3.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/use/-/use-3.1.1.tgz",
      "integrity": "sha512-cwESVXlO3url9YWlFW/TA9cshCEhtu7IKJ/p5soJ/gGpj7vbvFrAY/eIioQ6Dw23KjZhYgiIo8HOs1nQ2vr/oQ==",
      "dev": true
    },
    "util": {
      "version": "0.11.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/util/-/util-0.11.1.tgz",
      "integrity": "sha512-HShAsny+zS2TZfaXxD9tYj4HQGlBezXZMZuM/S5PKLLoZkShZiGk9o5CzukI1LVHZvjdvZ2Sj1aW/Ndn2NB/HQ==",
      "dev": true,
      "requires": {
        "inherits": "2.0.3"
      },
      "dependencies": {
        "inherits": {
          "version": "2.0.3",
          "resolved": "http://maven.paic.com.cn/repository/npm/inherits/-/inherits-2.0.3.tgz",
          "integrity": "sha1-Yzwsg+PaQqUC9SRmAiSA9CCCYd4=",
          "dev": true
        }
      }
    },
    "util-deprecate": {
      "version": "1.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8=",
      "dev": true
    },
    "util.promisify": {
      "version": "1.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/util.promisify/-/util.promisify-1.0.0.tgz",
      "integrity": "sha512-i+6qA2MPhvoKLuxnJNpXAGhg7HphQOSUq2LKMZD0m15EiskXUkMvKdF4Uui0WYeCUGea+o2cw/ZuwehtfsrNkA==",
      "dev": true,
      "requires": {
        "define-properties": "^1.1.2",
        "object.getownpropertydescriptors": "^2.0.3"
      }
    },
    "utila": {
      "version": "0.4.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/utila/-/utila-0.4.0.tgz",
      "integrity": "sha1-ihagXURWV6Oupe7MWxKk+lN5dyw=",
      "dev": true
    },
    "utils-merge": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/utils-merge/-/utils-merge-1.0.1.tgz",
      "integrity": "sha1-n5VxD1CiZ5R7LMwSR0HBAoQn5xM=",
      "dev": true
    },
    "uuid": {
      "version": "3.3.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/uuid/-/uuid-3.3.3.tgz",
      "integrity": "sha512-pW0No1RGHgzlpHJO1nsVrHKpOEIxkGg1xB+v0ZmdNH5OAeAwzAVrCnI2/6Mtx+Uys6iaylxa+D3g4j63IKKjSQ==",
      "dev": true
    },
    "v-click-outside-x": {
      "version": "3.7.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/v-click-outside-x/-/v-click-outside-x-3.7.1.tgz",
      "integrity": "sha512-WmUgmcIXr9clVpm1AYS/FgHtcDicfnfoxgQCNg4O6vfk9GVnxA0vSqO321ogUo0b7czYTidj7fQENvWFMWOkUg=="
    },
    "validate-npm-package-license": {
      "version": "3.0.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/validate-npm-package-license/-/validate-npm-package-license-3.0.4.tgz",
      "integrity": "sha512-DpKm2Ui/xN7/HQKCtpZxoRWBhZ9Z0kqtygG8XCgNQ8ZlDnxuQmWhj566j8fN4Cu3/JmbhsDo7fcAJq4s9h27Ew==",
      "dev": true,
      "requires": {
        "spdx-correct": "^3.0.0",
        "spdx-expression-parse": "^3.0.0"
      }
    },
    "vary": {
      "version": "1.1.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/vary/-/vary-1.1.2.tgz",
      "integrity": "sha1-IpnwLG3tMNSllhsLn3RSShj2NPw=",
      "dev": true
    },
    "vendors": {
      "version": "1.0.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/vendors/-/vendors-1.0.3.tgz",
      "integrity": "sha512-fOi47nsJP5Wqefa43kyWSg80qF+Q3XA6MUkgi7Hp1HQaKDQW4cQrK2D0P7mmbFtsV1N89am55Yru/nyEwRubcw==",
      "dev": true
    },
    "verror": {
      "version": "1.10.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/verror/-/verror-1.10.0.tgz",
      "integrity": "sha1-OhBcoXBTr1XW4nDB+CiGguGNpAA=",
      "dev": true,
      "requires": {
        "assert-plus": "^1.0.0",
        "core-util-is": "1.0.2",
        "extsprintf": "^1.2.0"
      }
    },
    "vm-browserify": {
      "version": "1.1.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/vm-browserify/-/vm-browserify-1.1.2.tgz",
      "integrity": "sha512-2ham8XPWTONajOR0ohOKOHXkm3+gaBmGut3SRuu75xLd/RRaY6vqgh8NBYYk7+RW3u5AtzPQZG8F10LHkl0lAQ==",
      "dev": true
    },
    "vue": {
      "version": "2.6.11",
      "resolved": "http://maven.paic.com.cn/repository/npm/vue/-/vue-2.6.11.tgz",
      "integrity": "sha512-VfPwgcGABbGAue9+sfrD4PuwFar7gPb1yl1UK1MwXoQPAw0BKSqWfoYCT/ThFrdEVWoI51dBuyCoiNU9bZDZxQ=="
    },
    "vue-class-component": {
      "version": "7.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/vue-class-component/-/vue-class-component-7.1.0.tgz",
      "integrity": "sha512-G9152NzUkz0i0xTfhk0Afc8vzdXxDR1pfN4dTwE72cskkgJtdXfrKBkMfGvDuxUh35U500g5Ve4xL8PEGdWeHg=="
    },
    "vue-eslint-parser": {
      "version": "2.0.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/vue-eslint-parser/-/vue-eslint-parser-2.0.3.tgz",
      "integrity": "sha512-ZezcU71Owm84xVF6gfurBQUGg8WQ+WZGxgDEQu1IHFBZNx7BFZg3L1yHxrCBNNwbwFtE1GuvfJKMtb6Xuwc/Bw==",
      "dev": true,
      "optional": true,
      "requires": {
        "debug": "^3.1.0",
        "eslint-scope": "^3.7.1",
        "eslint-visitor-keys": "^1.0.0",
        "espree": "^3.5.2",
        "esquery": "^1.0.0",
        "lodash": "^4.17.4"
      },
      "dependencies": {
        "debug": {
          "version": "3.2.6",
          "resolved": "http://maven.paic.com.cn/repository/npm/debug/-/debug-3.2.6.tgz",
          "integrity": "sha512-mel+jf7nrtEl5Pn1Qx46zARXKDpBbvzezse7p7LqINmdoIk8PYP5SySaxEmYv6TZ0JyEKA1hsCId6DIhgITtWQ==",
          "dev": true,
          "optional": true,
          "requires": {
            "ms": "^2.1.1"
          }
        },
        "eslint-scope": {
          "version": "3.7.3",
          "resolved": "http://maven.paic.com.cn/repository/npm/eslint-scope/-/eslint-scope-3.7.3.tgz",
          "integrity": "sha512-W+B0SvF4gamyCTmUc+uITPY0989iXVfKvhwtmJocTaYoc/3khEHmEmvfY/Gn9HA9VV75jrQECsHizkNw1b68FA==",
          "dev": true,
          "optional": true,
          "requires": {
            "esrecurse": "^4.1.0",
            "estraverse": "^4.1.1"
          }
        }
      }
    },
    "vue-hot-reload-api": {
      "version": "2.3.4",
      "resolved": "http://maven.paic.com.cn/repository/npm/vue-hot-reload-api/-/vue-hot-reload-api-2.3.4.tgz",
      "integrity": "sha512-BXq3jwIagosjgNVae6tkHzzIk6a8MHFtzAdwhnV5VlvPTFxDCvIttgSiHWjdGoTJvXtmRu5HacExfdarRcFhog==",
      "dev": true
    },
    "vue-jest": {
      "version": "3.0.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/vue-jest/-/vue-jest-3.0.5.tgz",
      "integrity": "sha512-xWDxde91pDqYBGDlODENZ3ezPgw+IQFoVDtf+5Awlg466w3KvMSqWzs8PxcTeTr+wmAHi0j+a+Lm3R7aUJa1jA==",
      "dev": true,
      "requires": {
        "babel-plugin-transform-es2015-modules-commonjs": "^6.26.0",
        "chalk": "^2.1.0",
        "extract-from-css": "^0.4.4",
        "find-babel-config": "^1.1.0",
        "js-beautify": "^1.6.14",
        "node-cache": "^4.1.1",
        "object-assign": "^4.1.1",
        "source-map": "^0.5.6",
        "tsconfig": "^7.0.0",
        "vue-template-es2015-compiler": "^1.6.0"
      }
    },
    "vue-loader": {
      "version": "15.8.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/vue-loader/-/vue-loader-15.8.3.tgz",
      "integrity": "sha512-yFksTFbhp+lxlm92DrKdpVIWMpranXnTEuGSc0oW+Gk43M9LWaAmBTnfj5+FCdve715mTHvo78IdaXf5TbiTJg==",
      "dev": true,
      "requires": {
        "@vue/component-compiler-utils": "^3.1.0",
        "hash-sum": "^1.0.2",
        "loader-utils": "^1.1.0",
        "vue-hot-reload-api": "^2.3.0",
        "vue-style-loader": "^4.1.0"
      }
    },
    "vue-property-decorator": {
      "version": "8.3.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/vue-property-decorator/-/vue-property-decorator-8.3.0.tgz",
      "integrity": "sha512-77YtTbZHd5CNiPzbqv51kEgL48yvD2dUDfF28vEyw3MbQ9bBAb/tDyFzskcqjNRbWyXk1vq4oM2CK/LfhxuIBg==",
      "requires": {
        "vue-class-component": "^7.1.0"
      }
    },
    "vue-router": {
      "version": "3.1.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/vue-router/-/vue-router-3.1.3.tgz",
      "integrity": "sha512-8iSa4mGNXBjyuSZFCCO4fiKfvzqk+mhL0lnKuGcQtO1eoj8nq3CmbEG8FwK5QqoqwDgsjsf1GDuisDX4cdb/aQ=="
    },
    "vue-style-loader": {
      "version": "4.1.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/vue-style-loader/-/vue-style-loader-4.1.2.tgz",
      "integrity": "sha512-0ip8ge6Gzz/Bk0iHovU9XAUQaFt/G2B61bnWa2tCcqqdgfHs1lF9xXorFbE55Gmy92okFT+8bfmySuUOu13vxQ==",
      "dev": true,
      "requires": {
        "hash-sum": "^1.0.2",
        "loader-utils": "^1.0.2"
      }
    },
    "vue-template-compiler": {
      "version": "2.6.11",
      "resolved": "http://maven.paic.com.cn/repository/npm/vue-template-compiler/-/vue-template-compiler-2.6.11.tgz",
      "integrity": "sha512-KIq15bvQDrcCjpGjrAhx4mUlyyHfdmTaoNfeoATHLAiWB+MU3cx4lOzMwrnUh9cCxy0Lt1T11hAFY6TQgroUAA==",
      "dev": true,
      "requires": {
        "de-indent": "^1.0.2",
        "he": "^1.1.0"
      }
    },
    "vue-template-es2015-compiler": {
      "version": "1.9.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/vue-template-es2015-compiler/-/vue-template-es2015-compiler-1.9.1.tgz",
      "integrity": "sha512-4gDntzrifFnCEvyoO8PqyJDmguXgVPxKiIxrBKjIowvL9l+N66196+72XVYR8BBf1Uv1Fgt3bGevJ+sEmxfZzw==",
      "dev": true
    },
    "vuex": {
      "version": "3.1.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/vuex/-/vuex-3.1.2.tgz",
      "integrity": "sha512-ha3jNLJqNhhrAemDXcmMJMKf1Zu4sybMPr9KxJIuOpVcsDQlTBYLLladav2U+g1AvdYDG5Gs0xBTb0M5pXXYFQ=="
    },
    "w3c-hr-time": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/w3c-hr-time/-/w3c-hr-time-1.0.1.tgz",
      "integrity": "sha1-gqwr/2PZUOqeMYmlimViX+3xkEU=",
      "dev": true,
      "requires": {
        "browser-process-hrtime": "^0.1.2"
      }
    },
    "walker": {
      "version": "1.0.7",
      "resolved": "http://maven.paic.com.cn/repository/npm/walker/-/walker-1.0.7.tgz",
      "integrity": "sha1-L3+bj9ENZ3JisYqITijRlhjgKPs=",
      "dev": true,
      "requires": {
        "makeerror": "1.0.x"
      }
    },
    "watch": {
      "version": "0.18.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/watch/-/watch-0.18.0.tgz",
      "integrity": "sha1-KAlUdsbffJDJYxOJkMClQj60uYY=",
      "dev": true,
      "requires": {
        "exec-sh": "^0.2.0",
        "minimist": "^1.2.0"
      }
    },
    "watchpack": {
      "version": "1.6.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/watchpack/-/watchpack-1.6.0.tgz",
      "integrity": "sha512-i6dHe3EyLjMmDlU1/bGQpEw25XSjkJULPuAVKCbNRefQVq48yXKUpwg538F7AZTf9kyr57zj++pQFltUa5H7yA==",
      "dev": true,
      "requires": {
        "chokidar": "^2.0.2",
        "graceful-fs": "^4.1.2",
        "neo-async": "^2.5.0"
      }
    },
    "wbuf": {
      "version": "1.7.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/wbuf/-/wbuf-1.7.3.tgz",
      "integrity": "sha512-O84QOnr0icsbFGLS0O3bI5FswxzRr8/gHwWkDlQFskhSPryQXvrTMxjxGP4+iWYoauLoBvfDpkrOauZ+0iZpDA==",
      "dev": true,
      "requires": {
        "minimalistic-assert": "^1.0.0"
      }
    },
    "wcwidth": {
      "version": "1.0.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/wcwidth/-/wcwidth-1.0.1.tgz",
      "integrity": "sha1-8LDc+RW8X/FSivrbLA4XtTLaL+g=",
      "dev": true,
      "requires": {
        "defaults": "^1.0.3"
      }
    },
    "webidl-conversions": {
      "version": "4.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/webidl-conversions/-/webidl-conversions-4.0.2.tgz",
      "integrity": "sha512-YQ+BmxuTgd6UXZW3+ICGfyqRyHXVlD5GtQr5+qjiNW7bF0cqrzX500HVXPBOvgXb5YnzDd+h0zqyv61KUD7+Sg==",
      "dev": true
    },
    "webpack": {
      "version": "4.41.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/webpack/-/webpack-4.41.3.tgz",
      "integrity": "sha512-EcNzP9jGoxpQAXq1VOoTet0ik7/VVU1MovIfcUSAjLowc7GhcQku/sOXALvq5nPpSei2HF6VRhibeJSC3i/Law==",
      "dev": true,
      "requires": {
        "@webassemblyjs/ast": "1.8.5",
        "@webassemblyjs/helper-module-context": "1.8.5",
        "@webassemblyjs/wasm-edit": "1.8.5",
        "@webassemblyjs/wasm-parser": "1.8.5",
        "acorn": "^6.2.1",
        "ajv": "^6.10.2",
        "ajv-keywords": "^3.4.1",
        "chrome-trace-event": "^1.0.2",
        "enhanced-resolve": "^4.1.0",
        "eslint-scope": "^4.0.3",
        "json-parse-better-errors": "^1.0.2",
        "loader-runner": "^2.4.0",
        "loader-utils": "^1.2.3",
        "memory-fs": "^0.4.1",
        "micromatch": "^3.1.10",
        "mkdirp": "^0.5.1",
        "neo-async": "^2.6.1",
        "node-libs-browser": "^2.2.1",
        "schema-utils": "^1.0.0",
        "tapable": "^1.1.3",
        "terser-webpack-plugin": "^1.4.3",
        "watchpack": "^1.6.0",
        "webpack-sources": "^1.4.1"
      }
    },
    "webpack-bundle-analyzer": {
      "version": "3.6.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/webpack-bundle-analyzer/-/webpack-bundle-analyzer-3.6.0.tgz",
      "integrity": "sha512-orUfvVYEfBMDXgEKAKVvab5iQ2wXneIEorGNsyuOyVYpjYrI7CUOhhXNDd3huMwQ3vNNWWlGP+hzflMFYNzi2g==",
      "dev": true,
      "requires": {
        "acorn": "^6.0.7",
        "acorn-walk": "^6.1.1",
        "bfj": "^6.1.1",
        "chalk": "^2.4.1",
        "commander": "^2.18.0",
        "ejs": "^2.6.1",
        "express": "^4.16.3",
        "filesize": "^3.6.1",
        "gzip-size": "^5.0.0",
        "lodash": "^4.17.15",
        "mkdirp": "^0.5.1",
        "opener": "^1.5.1",
        "ws": "^6.0.0"
      },
      "dependencies": {
        "ws": {
          "version": "6.2.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/ws/-/ws-6.2.1.tgz",
          "integrity": "sha512-GIyAXC2cB7LjvpgMt9EKS2ldqr0MTrORaleiOno6TweZ6r3TKtoFQWay/2PceJ3RuBasOHzXNn5Lrw1X0bEjqA==",
          "dev": true,
          "requires": {
            "async-limiter": "~1.0.0"
          }
        }
      }
    },
    "webpack-chain": {
      "version": "4.12.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/webpack-chain/-/webpack-chain-4.12.1.tgz",
      "integrity": "sha512-BCfKo2YkDe2ByqkEWe1Rw+zko4LsyS75LVr29C6xIrxAg9JHJ4pl8kaIZ396SUSNp6b4815dRZPSTAS8LlURRQ==",
      "dev": true,
      "requires": {
        "deepmerge": "^1.5.2",
        "javascript-stringify": "^1.6.0"
      }
    },
    "webpack-dev-middleware": {
      "version": "3.7.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/webpack-dev-middleware/-/webpack-dev-middleware-3.7.2.tgz",
      "integrity": "sha512-1xC42LxbYoqLNAhV6YzTYacicgMZQTqRd27Sim9wn5hJrX3I5nxYy1SxSd4+gjUFsz1dQFj+yEe6zEVmSkeJjw==",
      "dev": true,
      "requires": {
        "memory-fs": "^0.4.1",
        "mime": "^2.4.4",
        "mkdirp": "^0.5.1",
        "range-parser": "^1.2.1",
        "webpack-log": "^2.0.0"
      }
    },
    "webpack-dev-server": {
      "version": "3.9.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/webpack-dev-server/-/webpack-dev-server-3.9.0.tgz",
      "integrity": "sha512-E6uQ4kRrTX9URN9s/lIbqTAztwEPdvzVrcmHE8EQ9YnuT9J8Es5Wrd8n9BKg1a0oZ5EgEke/EQFgUsp18dSTBw==",
      "dev": true,
      "requires": {
        "ansi-html": "0.0.7",
        "bonjour": "^3.5.0",
        "chokidar": "^2.1.8",
        "compression": "^1.7.4",
        "connect-history-api-fallback": "^1.6.0",
        "debug": "^4.1.1",
        "del": "^4.1.1",
        "express": "^4.17.1",
        "html-entities": "^1.2.1",
        "http-proxy-middleware": "0.19.1",
        "import-local": "^2.0.0",
        "internal-ip": "^4.3.0",
        "ip": "^1.1.5",
        "is-absolute-url": "^3.0.3",
        "killable": "^1.0.1",
        "loglevel": "^1.6.4",
        "opn": "^5.5.0",
        "p-retry": "^3.0.1",
        "portfinder": "^1.0.25",
        "schema-utils": "^1.0.0",
        "selfsigned": "^1.10.7",
        "semver": "^6.3.0",
        "serve-index": "^1.9.1",
        "sockjs": "0.3.19",
        "sockjs-client": "1.4.0",
        "spdy": "^4.0.1",
        "strip-ansi": "^3.0.1",
        "supports-color": "^6.1.0",
        "url": "^0.11.0",
        "webpack-dev-middleware": "^3.7.2",
        "webpack-log": "^2.0.0",
        "ws": "^6.2.1",
        "yargs": "12.0.5"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "2.1.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/ansi-regex/-/ansi-regex-2.1.1.tgz",
          "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",
          "dev": true
        },
        "find-up": {
          "version": "3.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/find-up/-/find-up-3.0.0.tgz",
          "integrity": "sha512-1yD6RmLI1XBfxugvORwlck6f75tYL+iR0jqwsOrOxMZyGYqUuDhJ0l4AXdO1iX/FTs9cBAMEk1gWSEx1kSbylg==",
          "dev": true,
          "requires": {
            "locate-path": "^3.0.0"
          }
        },
        "import-local": {
          "version": "2.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/import-local/-/import-local-2.0.0.tgz",
          "integrity": "sha512-b6s04m3O+s3CGSbqDIyP4R6aAwAeYlVq9+WUWep6iHa8ETRf9yei1U48C5MmfJmV9AiLYYBKPMq/W+/WRpQmCQ==",
          "dev": true,
          "requires": {
            "pkg-dir": "^3.0.0",
            "resolve-cwd": "^2.0.0"
          }
        },
        "is-absolute-url": {
          "version": "3.0.3",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-absolute-url/-/is-absolute-url-3.0.3.tgz",
          "integrity": "sha512-opmNIX7uFnS96NtPmhWQgQx6/NYFgsUXYMllcfzwWKUMwfo8kku1TvE6hkNcH+Q1ts5cMVrsY7j0bxXQDciu9Q==",
          "dev": true
        },
        "locate-path": {
          "version": "3.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/locate-path/-/locate-path-3.0.0.tgz",
          "integrity": "sha512-7AO748wWnIhNqAuaty2ZWHkQHRSNfPVIsPIfwEOWO22AmaoVrWavlOcMR5nzTLNYvp36X220/maaRsrec1G65A==",
          "dev": true,
          "requires": {
            "p-locate": "^3.0.0",
            "path-exists": "^3.0.0"
          }
        },
        "p-limit": {
          "version": "2.2.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/p-limit/-/p-limit-2.2.1.tgz",
          "integrity": "sha512-85Tk+90UCVWvbDavCLKPOLC9vvY8OwEX/RtKF+/1OADJMVlFfEHOiMTPVyxg7mk/dKa+ipdHm0OUkTvCpMTuwg==",
          "dev": true,
          "requires": {
            "p-try": "^2.0.0"
          }
        },
        "p-locate": {
          "version": "3.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/p-locate/-/p-locate-3.0.0.tgz",
          "integrity": "sha512-x+12w/To+4GFfgJhBEpiDcLozRJGegY+Ei7/z0tSLkMmxGZNybVMSfWj9aJn8Z5Fc7dBUNJOOVgPv2H7IwulSQ==",
          "dev": true,
          "requires": {
            "p-limit": "^2.0.0"
          }
        },
        "p-try": {
          "version": "2.2.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/p-try/-/p-try-2.2.0.tgz",
          "integrity": "sha512-R4nPAVTAU0B9D35/Gk3uJf/7XYbQcyohSKdvAxIRSNghFl4e71hVoGnBNQz9cWaXxO2I10KTC+3jMdvvoKw6dQ==",
          "dev": true
        },
        "semver": {
          "version": "6.3.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/semver/-/semver-6.3.0.tgz",
          "integrity": "sha512-b39TBaTSfV6yBrapU89p5fKekE2m/NwnDocOVruQFS1/veMgdzuPcnOM34M6CwxW8jH/lxEa5rBoDeUwu5HHTw==",
          "dev": true
        },
        "strip-ansi": {
          "version": "3.0.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/strip-ansi/-/strip-ansi-3.0.1.tgz",
          "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
          "dev": true,
          "requires": {
            "ansi-regex": "^2.0.0"
          }
        },
        "supports-color": {
          "version": "6.1.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/supports-color/-/supports-color-6.1.0.tgz",
          "integrity": "sha512-qe1jfm1Mg7Nq/NSh6XE24gPXROEVsWHxC1LIx//XNlD9iw7YZQGjZNjYN7xGaEG6iKdA8EtNFW6R0gjnVXp+wQ==",
          "dev": true,
          "requires": {
            "has-flag": "^3.0.0"
          }
        },
        "ws": {
          "version": "6.2.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/ws/-/ws-6.2.1.tgz",
          "integrity": "sha512-GIyAXC2cB7LjvpgMt9EKS2ldqr0MTrORaleiOno6TweZ6r3TKtoFQWay/2PceJ3RuBasOHzXNn5Lrw1X0bEjqA==",
          "dev": true,
          "requires": {
            "async-limiter": "~1.0.0"
          }
        },
        "yargs": {
          "version": "12.0.5",
          "resolved": "http://maven.paic.com.cn/repository/npm/yargs/-/yargs-12.0.5.tgz",
          "integrity": "sha512-Lhz8TLaYnxq/2ObqHDql8dX8CJi97oHxrjUcYtzKbbykPtVW9WB+poxI+NM2UIzsMgNCZTIf0AQwsjK5yMAqZw==",
          "dev": true,
          "requires": {
            "cliui": "^4.0.0",
            "decamelize": "^1.2.0",
            "find-up": "^3.0.0",
            "get-caller-file": "^1.0.1",
            "os-locale": "^3.0.0",
            "require-directory": "^2.1.1",
            "require-main-filename": "^1.0.1",
            "set-blocking": "^2.0.0",
            "string-width": "^2.0.0",
            "which-module": "^2.0.0",
            "y18n": "^3.2.1 || ^4.0.0",
            "yargs-parser": "^11.1.1"
          }
        },
        "yargs-parser": {
          "version": "11.1.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/yargs-parser/-/yargs-parser-11.1.1.tgz",
          "integrity": "sha512-C6kB/WJDiaxONLJQnF8ccx9SEeoTTLek8RVbaOIsrAUS8VrBEXfmeSnCZxygc+XC2sNMBIwOOnfcxiynjHsVSQ==",
          "dev": true,
          "requires": {
            "camelcase": "^5.0.0",
            "decamelize": "^1.2.0"
          }
        }
      }
    },
    "webpack-log": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/webpack-log/-/webpack-log-2.0.0.tgz",
      "integrity": "sha512-cX8G2vR/85UYG59FgkoMamwHUIkSSlV3bBMRsbxVXVUk2j6NleCKjQ/WE9eYg9WY4w25O9w8wKP4rzNZFmUcUg==",
      "dev": true,
      "requires": {
        "ansi-colors": "^3.0.0",
        "uuid": "^3.3.2"
      }
    },
    "webpack-merge": {
      "version": "4.2.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/webpack-merge/-/webpack-merge-4.2.2.tgz",
      "integrity": "sha512-TUE1UGoTX2Cd42j3krGYqObZbOD+xF7u28WB7tfUordytSjbWTIjK/8V0amkBfTYN4/pB/GIDlJZZ657BGG19g==",
      "dev": true,
      "requires": {
        "lodash": "^4.17.15"
      }
    },
    "webpack-sources": {
      "version": "1.4.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/webpack-sources/-/webpack-sources-1.4.3.tgz",
      "integrity": "sha512-lgTS3Xhv1lCOKo7SA5TjKXMjpSM4sBjNV5+q2bqesbSPs5FjGmU6jjtBSkX9b4qW87vDIsCIlUPOEhbZrMdjeQ==",
      "dev": true,
      "requires": {
        "source-list-map": "^2.0.0",
        "source-map": "~0.6.1"
      },
      "dependencies": {
        "source-map": {
          "version": "0.6.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/source-map/-/source-map-0.6.1.tgz",
          "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
          "dev": true
        }
      }
    },
    "websocket-driver": {
      "version": "0.7.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/websocket-driver/-/websocket-driver-0.7.3.tgz",
      "integrity": "sha512-bpxWlvbbB459Mlipc5GBzzZwhoZgGEZLuqPaR0INBGnPAY1vdBX6hPnoFXiw+3yWxDuHyQjO2oXTMyS8A5haFg==",
      "dev": true,
      "requires": {
        "http-parser-js": ">=0.4.0 <0.4.11",
        "safe-buffer": ">=5.1.0",
        "websocket-extensions": ">=0.1.1"
      }
    },
    "websocket-extensions": {
      "version": "0.1.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/websocket-extensions/-/websocket-extensions-0.1.3.tgz",
      "integrity": "sha512-nqHUnMXmBzT0w570r2JpJxfiSD1IzoI+HGVdd3aZ0yNi3ngvQ4jv1dtHt5VGxfI2yj5yqImPhOK4vmIh2xMbGg==",
      "dev": true
    },
    "whatwg-encoding": {
      "version": "1.0.5",
      "resolved": "http://maven.paic.com.cn/repository/npm/whatwg-encoding/-/whatwg-encoding-1.0.5.tgz",
      "integrity": "sha512-b5lim54JOPN9HtzvK9HFXvBma/rnfFeqsic0hSpjtDbVxR3dJKLc+KB4V6GgiGOvl7CY/KNh8rxSo9DKQrnUEw==",
      "dev": true,
      "requires": {
        "iconv-lite": "0.4.24"
      }
    },
    "whatwg-mimetype": {
      "version": "2.3.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/whatwg-mimetype/-/whatwg-mimetype-2.3.0.tgz",
      "integrity": "sha512-M4yMwr6mAnQz76TbJm914+gPpB/nCwvZbJU28cUD6dR004SAxDLOOSUaB1JDRqLtaOV/vi0IC5lEAGFgrjGv/g==",
      "dev": true
    },
    "whatwg-url": {
      "version": "6.5.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/whatwg-url/-/whatwg-url-6.5.0.tgz",
      "integrity": "sha512-rhRZRqx/TLJQWUpQ6bmrt2UV4f0HCQ463yQuONJqC6fO2VoEb1pTYddbe59SkYq87aoM5A3bdhMZiUiVws+fzQ==",
      "dev": true,
      "requires": {
        "lodash.sortby": "^4.7.0",
        "tr46": "^1.0.1",
        "webidl-conversions": "^4.0.2"
      }
    },
    "which": {
      "version": "1.3.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/which/-/which-1.3.1.tgz",
      "integrity": "sha512-HxJdYWq1MTIQbJ3nw0cqssHoTNU267KlrDuGZ1WYlxDStUtKUhOaJmh112/TZmHxxUfuJqPXSOm7tDyas0OSIQ==",
      "dev": true,
      "requires": {
        "isexe": "^2.0.0"
      }
    },
    "which-module": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/which-module/-/which-module-2.0.0.tgz",
      "integrity": "sha1-2e8H3Od7mQK4o6j6SzHD4/fm6Ho=",
      "dev": true
    },
    "word-wrap": {
      "version": "1.2.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/word-wrap/-/word-wrap-1.2.3.tgz",
      "integrity": "sha512-Hz/mrNwitNRh/HUAtM/VT/5VH+ygD6DV7mYKZAtHOrbs8U7lvPS6xf7EJKMF0uW1KJCl0H701g3ZGus+muE5vQ==",
      "dev": true
    },
    "wordwrap": {
      "version": "0.0.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/wordwrap/-/wordwrap-0.0.3.tgz",
      "integrity": "sha1-o9XabNXAvAAI03I0u68b7WMFkQc=",
      "dev": true
    },
    "worker-farm": {
      "version": "1.7.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/worker-farm/-/worker-farm-1.7.0.tgz",
      "integrity": "sha512-rvw3QTZc8lAxyVrqcSGVm5yP/IJ2UcB3U0graE3LCFoZ0Yn2x4EoVSqJKdB/T5M+FLcRPjz4TDacRf3OCfNUzw==",
      "dev": true,
      "requires": {
        "errno": "~0.1.7"
      }
    },
    "wrap-ansi": {
      "version": "2.1.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/wrap-ansi/-/wrap-ansi-2.1.0.tgz",
      "integrity": "sha1-2Pw9KE3QV5T+hJc8rs3Rz4JP3YU=",
      "dev": true,
      "requires": {
        "string-width": "^1.0.1",
        "strip-ansi": "^3.0.1"
      },
      "dependencies": {
        "ansi-regex": {
          "version": "2.1.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/ansi-regex/-/ansi-regex-2.1.1.tgz",
          "integrity": "sha1-w7M6te42DYbg5ijwRorn7yfWVN8=",
          "dev": true
        },
        "is-fullwidth-code-point": {
          "version": "1.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/is-fullwidth-code-point/-/is-fullwidth-code-point-1.0.0.tgz",
          "integrity": "sha1-754xOG8DGn8NZDr4L95QxFfvAMs=",
          "dev": true,
          "requires": {
            "number-is-nan": "^1.0.0"
          }
        },
        "string-width": {
          "version": "1.0.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/string-width/-/string-width-1.0.2.tgz",
          "integrity": "sha1-EYvfW4zcUaKn5w0hHgfisLmxB9M=",
          "dev": true,
          "requires": {
            "code-point-at": "^1.0.0",
            "is-fullwidth-code-point": "^1.0.0",
            "strip-ansi": "^3.0.0"
          }
        },
        "strip-ansi": {
          "version": "3.0.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/strip-ansi/-/strip-ansi-3.0.1.tgz",
          "integrity": "sha1-ajhfuIU9lS1f8F0Oiq+UJ43GPc8=",
          "dev": true,
          "requires": {
            "ansi-regex": "^2.0.0"
          }
        }
      }
    },
    "wrappy": {
      "version": "1.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8=",
      "dev": true
    },
    "write": {
      "version": "0.2.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/write/-/write-0.2.1.tgz",
      "integrity": "sha1-X8A4KOJkzqP+kUVUdvejxWbLB1c=",
      "dev": true,
      "optional": true,
      "requires": {
        "mkdirp": "^0.5.1"
      }
    },
    "write-file-atomic": {
      "version": "2.4.3",
      "resolved": "http://maven.paic.com.cn/repository/npm/write-file-atomic/-/write-file-atomic-2.4.3.tgz",
      "integrity": "sha512-GaETH5wwsX+GcnzhPgKcKjJ6M2Cq3/iZp1WyY/X1CSqrW+jVNM9Y7D8EC2sM4ZG/V8wZlSniJnCKWPmBYAucRQ==",
      "dev": true,
      "requires": {
        "graceful-fs": "^4.1.11",
        "imurmurhash": "^0.1.4",
        "signal-exit": "^3.0.2"
      }
    },
    "ws": {
      "version": "5.2.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/ws/-/ws-5.2.2.tgz",
      "integrity": "sha512-jaHFD6PFv6UgoIVda6qZllptQsMlDEJkTQcybzzXDYM1XO9Y8em691FGMPmM46WGyLU4z9KMgQN+qrux/nhlHA==",
      "dev": true,
      "requires": {
        "async-limiter": "~1.0.0"
      }
    },
    "xml-name-validator": {
      "version": "3.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/xml-name-validator/-/xml-name-validator-3.0.0.tgz",
      "integrity": "sha512-A5CUptxDsvxKJEU3yO6DuWBSJz/qizqzJKOMIfUJHETbBw/sFaDxgd6fxm1ewUaM0jZ444Fc5vC5ROYurg/4Pw==",
      "dev": true
    },
    "xtend": {
      "version": "4.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/xtend/-/xtend-4.0.2.tgz",
      "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ==",
      "dev": true
    },
    "y18n": {
      "version": "4.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/y18n/-/y18n-4.0.0.tgz",
      "integrity": "sha512-r9S/ZyXu/Xu9q1tYlpsLIsa3EeLXXk0VwlxqTcFRfg9EhMW+17kbt9G0NrgCmhGb5vT2hyhJZLfDGx+7+5Uj/w==",
      "dev": true
    },
    "yallist": {
      "version": "3.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/yallist/-/yallist-3.1.1.tgz",
      "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
      "dev": true
    },
    "yargs": {
      "version": "11.1.1",
      "resolved": "http://maven.paic.com.cn/repository/npm/yargs/-/yargs-11.1.1.tgz",
      "integrity": "sha512-PRU7gJrJaXv3q3yQZ/+/X6KBswZiaQ+zOmdprZcouPYtQgvNU35i+68M4b1ZHLZtYFT5QObFLV+ZkmJYcwKdiw==",
      "dev": true,
      "requires": {
        "cliui": "^4.0.0",
        "decamelize": "^1.1.1",
        "find-up": "^2.1.0",
        "get-caller-file": "^1.0.1",
        "os-locale": "^3.1.0",
        "require-directory": "^2.1.1",
        "require-main-filename": "^1.0.1",
        "set-blocking": "^2.0.0",
        "string-width": "^2.0.0",
        "which-module": "^2.0.0",
        "y18n": "^3.2.1",
        "yargs-parser": "^9.0.2"
      },
      "dependencies": {
        "y18n": {
          "version": "3.2.1",
          "resolved": "http://maven.paic.com.cn/repository/npm/y18n/-/y18n-3.2.1.tgz",
          "integrity": "sha1-bRX7qITAhnnA136I53WegR4H+kE=",
          "dev": true
        }
      }
    },
    "yargs-parser": {
      "version": "9.0.2",
      "resolved": "http://maven.paic.com.cn/repository/npm/yargs-parser/-/yargs-parser-9.0.2.tgz",
      "integrity": "sha1-nM9qQ0YP5O1Aqbto9I1DuKaMwHc=",
      "dev": true,
      "requires": {
        "camelcase": "^4.1.0"
      },
      "dependencies": {
        "camelcase": {
          "version": "4.1.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/camelcase/-/camelcase-4.1.0.tgz",
          "integrity": "sha1-1UVjW+HjPFQmScaRc+Xeas+uNN0=",
          "dev": true
        }
      }
    },
    "yorkie": {
      "version": "2.0.0",
      "resolved": "http://maven.paic.com.cn/repository/npm/yorkie/-/yorkie-2.0.0.tgz",
      "integrity": "sha512-jcKpkthap6x63MB4TxwCyuIGkV0oYP/YRyuQU5UO0Yz/E/ZAu+653/uov+phdmO54n6BcvFRyyt0RRrWdN2mpw==",
      "dev": true,
      "requires": {
        "execa": "^0.8.0",
        "is-ci": "^1.0.10",
        "normalize-path": "^1.0.0",
        "strip-indent": "^2.0.0"
      },
      "dependencies": {
        "cross-spawn": {
          "version": "5.1.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/cross-spawn/-/cross-spawn-5.1.0.tgz",
          "integrity": "sha1-6L0O/uWPz/b4+UUQoKVUu/ojVEk=",
          "dev": true,
          "requires": {
            "lru-cache": "^4.0.1",
            "shebang-command": "^1.2.0",
            "which": "^1.2.9"
          }
        },
        "execa": {
          "version": "0.8.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/execa/-/execa-0.8.0.tgz",
          "integrity": "sha1-2NdrvBtVIX7RkP1t1J08d07PyNo=",
          "dev": true,
          "requires": {
            "cross-spawn": "^5.0.1",
            "get-stream": "^3.0.0",
            "is-stream": "^1.1.0",
            "npm-run-path": "^2.0.0",
            "p-finally": "^1.0.0",
            "signal-exit": "^3.0.0",
            "strip-eof": "^1.0.0"
          }
        },
        "get-stream": {
          "version": "3.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/get-stream/-/get-stream-3.0.0.tgz",
          "integrity": "sha1-jpQ9E1jcN1VQVOy+LtsFqhdO3hQ=",
          "dev": true
        },
        "lru-cache": {
          "version": "4.1.5",
          "resolved": "http://maven.paic.com.cn/repository/npm/lru-cache/-/lru-cache-4.1.5.tgz",
          "integrity": "sha512-sWZlbEP2OsHNkXrMl5GYk/jKk70MBng6UU4YI/qGDYbgf6YbP4EvmqISbXCoJiRKs+1bSpFHVgQxvJ17F2li5g==",
          "dev": true,
          "requires": {
            "pseudomap": "^1.0.2",
            "yallist": "^2.1.2"
          }
        },
        "normalize-path": {
          "version": "1.0.0",
          "resolved": "http://maven.paic.com.cn/repository/npm/normalize-path/-/normalize-path-1.0.0.tgz",
          "integrity": "sha1-MtDkcvkf80VwHBWoMRAY07CpA3k=",
          "dev": true
        },
        "yallist": {
          "version": "2.1.2",
          "resolved": "http://maven.paic.com.cn/repository/npm/yallist/-/yallist-2.1.2.tgz",
          "integrity": "sha1-HBH5IY8HYImkfdUS+TxmmaaoHVI=",
          "dev": true
        }
      }
    }
  }
}

```
__SEPARATOR__
```
// package.json
{
  "name": "word-mark",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "test:unit": "vue-cli-service test:unit"
  },
  "dependencies": {
    "@vue/eslint-config-standard": "^5.0.1",
    "axios": "^0.19.0",
    "core-js": "^2.6.5",
    "element-ui": "^2.13.0",
    "eslint-plugin-node": "^10.0.0",
    "eslint-plugin-promise": "^4.2.1",
    "eslint-plugin-standard": "^4.0.1",
    "iview": "^4.0.0",
    "poplar-annotation": "^2.0.0-beta3",
    "vue": "^2.6.10",
    "vue-class-component": "^7.0.2",
    "vue-property-decorator": "^8.1.0",
    "vue-router": "^3.0.3",
    "vuex": "^3.0.1"
  },
  "devDependencies": {
    "@types/jest": "^23.1.4",
    "@vue/cli-plugin-babel": "^3.4.0",
    "@vue/cli-plugin-eslint": "^3.4.0",
    "@vue/cli-plugin-typescript": "^3.4.0",
    "@vue/cli-plugin-unit-jest": "^3.4.0",
    "@vue/cli-service": "^3.4.0",
    "@vue/eslint-config-airbnb": "^4.0.0",
    "@vue/eslint-config-typescript": "^4.0.0",
    "@vue/test-utils": "1.0.0-beta.29",
    "babel-core": "7.0.0-bridge.0",
    "babel-eslint": "^10.0.1",
    "eslint": "^5.16.0",
    "eslint-plugin-vue": "^5.0.0",
    "less": "^3.0.4",
    "less-loader": "^5.0.0",
    "ts-jest": "^23.0.0",
    "typescript": "^3.7.4",
    "vue-template-compiler": "^2.6.10"
  },
  "postcss": {
    "plugins": {
      "autoprefixer": {}
    }
  },
  "browserslist": [
    "> 1%",
    "last 2 versions"
  ],
  "jest": {
    "moduleFileExtensions": [
      "js",
      "jsx",
      "json",
      "vue",
      "ts",
      "tsx"
    ],
    "transform": {
      "^.+\\.vue$": "vue-jest",
      ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
      "^.+\\.tsx?$": "ts-jest"
    },
    "transformIgnorePatterns": [
      "/node_modules/"
    ],
    "moduleNameMapper": {
      "^@/(.*)$": "<rootDir>/src/$1"
    },
    "snapshotSerializers": [
      "jest-serializer-vue"
    ],
    "testMatch": [
      "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"
    ],
    "testURL": "http://localhost/",
    "watchPlugins": [
      "jest-watch-typeahead/filename",
      "jest-watch-typeahead/testname"
    ],
    "globals": {
      "ts-jest": {
        "babelConfig": true
      }
    }
  }
}

```
__SEPARATOR__
```
// public/favicon.ico