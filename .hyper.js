// Future versions of Hyper may add additional config options,
// which will not automatically be merged into this file.
// See https://hyper.is#cfg for all currently supported options.

// const backgroundColor = 'rgba(40, 44, 52, 0.99)'
// const foregroundColor = '#abb2bf'
// const cursorColor = foregroundColor
// const borderColor = backgroundColor

module.exports = {
  config: {
    // Choose either "stable" for receiving highly polished,
    // or "canary" for less polished but more frequent updates
    updateChannel: 'canary',

    // default font size in pixels for all tabs
    fontSize: 14,

    // font family with optional fallbacks
    fontFamily: '"SourceCodePro+Powerline+Awesome Regular", Hack, Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: '#b2b2b2',

    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
    cursorShape: 'UNDERLINE',

    // set to true for blinking cursor
    cursorBlink: true,

    // color of the text
    foregroundColor: '#abb2bf',

    // terminal background color
    backgroundColor: 'rgba(40, 44, 52, 0.99)',

    // border color (window, tabs)
    borderColor: 'rgba(40, 44, 52, 0.99)',

    // custom css to embed in the main window
    css: '',

    // custom css to embed in the terminal window
    // termCSS: '',
    termCSS: 'x-row .unicode-node {display:inline}',

    // set to `true` (without backticks) if you're using a Linux setup that doesn't show native menus
    // default: `false` on Linux, `true` on Windows (ignored on macOS)
    showHamburgerMenu: '',

    // set to `false` if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` on windows and Linux (ignored on macOS)
    showWindowControls: '',

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: '12px 14px',

    // the full list. if you're going to provide the full color palette,
    // including the 6 x 6 color cubes and the grayscale map, just provide
    // an array here instead of a color map object
    colors: {
      black: '#002831',
      red: '#ff4c4c',
      green: '#cccccc',
      yellow: '#A57706',
      blue: '#2176C7',
      magenta: '#e5e5e5',
      cyan: '#68868c',
      white: '#d0d0d0',
      lightBlack: '#808080',
      lightRed: '#ff4c4c',
      lightGreen: '#33ff00',
      lightYellow: '#ffff00',
      lightBlue: '#0066ff',
      lightMagenta: '#e5e5e5',
      lightCyan: '#ff4c4c',
      // colorCubes: '#ffffff',
      // grayscale: foregroundColor,
      lightWhite: '#ffffff'
    },

    // the shell to run when spawning a new session (i.e. /usr/local/bin/fish)
    // if left empty, your system's login shell will be used by default
    //
    // Windows
    // - Make sure to use a full path if the binary name doesn't work
    // - Remove `--login` in shellArgs
    //
    // Bash on Windows
    // - Example: `C:\\Windows\\System32\\bash.exe`
    //
    // Powershell on Windows
    // - Example: `C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe`
    shell: 'zsh',

    // for setting shell arguments (i.e. for using interactive shellArgs: ['-i'])
    // by default ['--login'] will be used
    shellArgs: ['--login'],

    // for environment variables
    env: {},

    // set to false for no bell
    bell: 'SOUND',

    // if true, selected text will automatically be copied to the clipboard
    copyOnSelect: false

    // if true, on right click selected text will be copied or pasted if no
    // selection is present (true by default on Windows)
    // quickEdit: true

    // URL to custom bell
    // bellSoundURL: 'http://example.com/bell.mp3',

    // for advanced config flags please refer to https://hyper.is/#cfg
  },

  // a list of plugins to fetch and install from npm
  // format: [@org/]project[#version]
  // examples:
  //   `hyperpower`
  //   `@company/project`
  //   `project#1.0.1`
  plugins: ["hyperlinks","hyper-tabs-enhanced"],

  // in development, you can create a directory under
  // `~/.hyper_plugins/local/` and include it here
  // to load it and avoid it being `npm install`ed
  localPlugins: [],

  keymaps: {
    // Example
    // 'window:devtools': 'cmd+alt+o',
  }
};
