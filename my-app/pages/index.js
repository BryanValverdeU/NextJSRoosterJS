import * as roosterjsReact  from 'roosterjs-react';
import * as roosterjs  from 'roosterjs';
import { initializeIcons } from '@fluentui/react/lib/Icons';

const editorStyle = {
  border: 'solid 1px black', width: '100%', height: '600px'
}
export default function Home() { 
  let ribbonPlugin = roosterjsReact.createRibbonPlugin();
  let plugins = [
      new roosterjs.ContentEdit(),
      new roosterjs.HyperLink(url => 'Ctrl+Click to follow the link:' + url),
      new roosterjs.Paste(),
      new roosterjs.ImageEdit(),
      new roosterjs.CutPasteListChain(),
      new roosterjs.TableResize(),
      new roosterjs.CustomReplace(),
      new roosterjs.TableCellSelection(),
      ribbonPlugin,
  ];
  let options = {
      plugins: plugins,
      experimentalFeatures: [
          'ConvertSingleImageBody',
          'TableAlignment',
          'AdaptiveHandlesResizer',
          'ListItemAlignment',
          'PendingStyleBasedFormat',
      ],
      getDarkColor: roosterjs.getDarkColor,
      defaultFormat: {
        textColor:'black',
      }
  };
  let buttons = roosterjsReact.getButtons();

  initializeIcons(/* optional base url */);

  return (
    <>
      <roosterjsReact.Ribbon buttons={buttons} plugin={ribbonPlugin} />
      <roosterjsReact.Rooster className="editor" {...options} style={editorStyle}/>
    </>  
  )
}
