export type Key = { keys: string[]; does: string };
export type Project = {
  slug: 'kadr' | 'ryad';
  name: string;
  line: string;
  lead: string;
  version: string;
  repo: string;
  releases: string;
  file: string;
  does: { title: string; text: string }[];
  keys: Key[];
  numbers: [string, string][];
  privacy: string;
  install: string[];
  limits: string[];
};

export const projects: Project[] = [
  {
    slug: 'kadr',
    name: 'kadr',
    line: 'screenshots, without the extra stuff.',
    lead: 'press a hotkey, select, paste or find the file. nothing else runs, renders or listens while you are not using it.',
    version: '0.1.2',
    repo: 'https://github.com/lezneve/kadr',
    releases: 'https://github.com/lezneve/kadr/releases',
    file: 'kadr-0.1.2-setup.exe',
    does: [
      { title: 'three captures', text: 'a region you select, the active window, or the monitor under the mouse. each opens in the editor at the place it was taken, 1:1.' },
      { title: 'nothing until you say so', text: 'ctrl+c copies and closes. ctrl+s saves a png and closes. esc closes without exporting. quick modes copy or save right away, without the editor.' },
      { title: 'a small editor', text: 'pen, line, arrow, rectangle, ellipse, highlighter, blur, redact and the mouse pointer from the moment of the capture. undo and redo.' },
      { title: 'redact is opaque', text: 'blur only makes text hard to read. to really hide something, use redact: an opaque fill.' },
    ],
    keys: [
      { keys: ['printscreen'], does: 'capture a region' },
      { keys: ['alt', 'printscreen'], does: 'capture the active window' },
      { keys: ['ctrl', 'shift', 'printscreen'], does: 'capture the monitor under the cursor' },
      { keys: ['ctrl', 'c'], does: 'copy and close the editor' },
      { keys: ['ctrl', 's'], does: 'save a png and close the editor' },
      { keys: ['esc'], does: 'close without exporting' },
    ],
    numbers: [
      ['idle memory', '~2 mb'],
      ['idle cpu', '0 %'],
      ['ready after start', '~27 ms'],
      ['hotkey → screen captured', '~32 ms'],
      ['hotkey → overlay on screen', '~61 ms'],
      ['kadr.exe', '~0.4 mb'],
    ],
    privacy: 'kadr works fully offline: no network access, no telemetry, no update checks, no logs of what you capture. screenshots on the clipboard are marked not to be uploaded to the windows cloud clipboard.',
    install: [
      'download kadr-0.1.2-setup.exe from releases and run it.',
      'it installs for you only, with no administrator rights.',
      'portable use works too: copy kadr.exe anywhere and run it.',
    ],
    limits: [
      'tested on windows 11 only',
      'multiple monitors and mixed scaling are not verified',
      'hdr displays are not verified',
    ],
  },
  {
    slug: 'ryad',
    name: 'ryad',
    line: 'a small editor that keeps your drafts between launches.',
    lead: 'press ctrl+n, write, close the window. open ryad again and the text is there, with the caret where you left it.',
    version: '0.1.0',
    repo: 'https://github.com/lezneve/ryad',
    releases: 'https://github.com/lezneve/ryad/releases',
    file: 'ryad-0.1.0-setup.exe',
    does: [
      { title: 'drafts without files', text: 'a new tab needs no name and no save. what you type is kept within a second of pausing, and comes back after you close ryad.' },
      { title: 'your files change only when you say so', text: 'edits to an open file come back as a local copy; the file on disk stays as it was until ctrl+s. if another program changed it meanwhile, ryad asks first.' },
      { title: 'plain text, kept as it was', text: 'utf-8 with or without bom, utf-16, windows-1251 on request. line breaks and the final line break are written back the way they came.' },
      { title: 'markdown preview', text: 'at the right of .md files, in your light or dark theme. drag the bar to resize.' },
    ],
    keys: [
      { keys: ['ctrl', 'n'], does: 'new draft' },
      { keys: ['ctrl', 'o'], does: 'open files, several at once' },
      { keys: ['ctrl', 's'], does: 'save; a draft asks for a name' },
      { keys: ['ctrl', 'shift', 't'], does: 'bring back the last closed tab' },
      { keys: ['alt', 'z'], does: 'wrap lines in this tab (display only)' },
      { keys: ['ctrl', 'shift', 'm'], does: 'markdown preview for this tab' },
      { keys: ['ctrl', 'f'], does: 'find' },
      { keys: ['ctrl', 'g'], does: 'go to line' },
    ],
    numbers: [
      ['start → ready to type', '~82 ms'],
      ['idle memory', '~2.7 mb'],
      ['idle cpu', '0 %'],
      ['open a 1 mb log', '~0.12 s'],
      ['open a 50 mb log', '~4.2 s'],
      ['ryad.exe', '~0.6 mb'],
    ],
    privacy: 'ryad works offline: no network, no account, no telemetry, no update checks. unsaved text lives in %LOCALAPPDATA%\ryad\session as plain utf-8 files, and stays there until you remove it.',
    install: [
      'ryad-0.1.0-setup.exe installs for you only, with no administrator rights.',
      'an optional switch replaces windows notepad for your account; one click in settings makes ryad the default.',
      'portable: copy ryad.exe anywhere and run it.',
    ],
    limits: [
      'the largest file ryad opens is 64 mb',
      'binary files are not opened',
      'numbers come from one machine; they are not guarantees',
    ],
  },
];

export const byslug = (s: string) => projects.find((p) => p.slug === s)!;
