import React from 'react';
import { SafeAreaView } from 'react-native';
import { SvgXml } from 'react-native-svg'

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <SvgXml width={200} height={400} xml={xml} />
    </SafeAreaView>
  );
}

export default App;

const xml = `
<?xml version="1.0" encoding="utf-8"?>
  <!-- Generator: Adobe Illustrator 26.5.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
  <svg version="1.1" id="Lager_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
  <style type="text/css">
    .st0{fill:#D6A5C0;}
  </style>
  <g>
    <circle style="fill:#D6A5C0;" cx="10" cy="0" r="20" />
    <circle class="st0" cx="20" cy="50" r="20" />
  </g>
</svg>
`