### file bundler
bundle files into one, so you can paste it anywhere.
useful when file transfering not allowed.

### Usage
install
```
npm install
```

bundle `lib/*` into `dist/bundle.md`
```
node bundle
```

unbundle `bundle.md` into `dist/bundle`
```
node unbundle
```

### Todo
- exclude none text files (image, media...)
- cli command
