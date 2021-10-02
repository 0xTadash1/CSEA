chrome.omnibox.onInputEntered.addListener((text) => {
  const swords = text.split(/[ 　]/);
  const table = {
    serch: 'https://www.google.com/search?q=%s',
    tr: 'https://translate.google.co.jp/?source=osdd#auto|auto|%s',
    dpl: 'https://www.deepl.com/ja/translator#en/ja/%s',
    im: 'https://www.google.com/search?q=%s&tbm=isch',
    img: 'https://www.google.com/search?q=%s&tbm=isch',
    gh: 'https://github.com/search?q=%s&ref=opensearch',
    arch: 'https://wiki.archlinux.jp/index.php?search=%s',
    archorg: 'https://wiki.archlinux.org/index.php?search=%s'
  };

  let newURL = table['serch'].replace(/%s/g, encodeURIComponent(text));

  if (swords[0] in table) {
    newURL = table[swords[0]].replace(
      /%s/g,
      encodeURIComponent(swords.slice(1).join(' '))
    );
  }

  chrome.tabs.update(undefined, { url: newURL });
});
