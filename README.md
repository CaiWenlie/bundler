### txtbundler
- bundle files into a txt file.
- or unbundle the txt file.
- recognizing `.gitignore`.

### Usage
install
```
# npm install txtbundler -g 
```

bundle `lib/` (default into `./bundle.txt`)
```
# txtbundler bundle lib
```

bundle `lib/` into `./dist/lib.txt`
```
# txtbundler bundle lib dist/lib.txt
```

unbundle `./bundle.txt` (default into `./bundle/`)
```
# txtbundler unbundle bundle.txt
```

unbundle `./bundle.txt` into `./dist/bundle/`
```
# txtbundler unbundle bundle.txt dist/bundle
```
