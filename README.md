# REACT Google Fonts CSS2

React component for using https://github.com/adriano-tirloni/google-fonts-css2, refer to it for more information.

- SSR Ready
- This is a very simple component, it will append a stylesheet link on document head.
- Only `weight` and `italic` variations are avaliable, soon all variations (eg.: `width`) will be avaliable.

- It **doesn't** verify if the Font Family name or styles are correct, some font allow ranges, others don't have italic, check https://fonts.google.com to get correct information. The component only generates the correct URL structure for api request.
    
## Installing and usage:

```bash 
yarn add react-google-fonts-css2
```

```javascript
import GoogleFontsCss2Loader from  'react-google-fonts-css2'

// Loading one font
  <GoogleFontsCss2Loader family='Quicksand' styles={[300, 400]} /> 


//Loading multiple fonts
  <GoogleFontsCss2Loader families={[
    {
      family: 'Quicksand',
      styles: [300, 400, '500italic']
    },
    {
      family: "Cabin",      // Family Name
      styles: [
        "600..700",         // Range, if family supports it.
        "100..200italic",   // Range with italic
        "300italic",        // Weight with italic
        "regular",          // Shortcut to 400
        "italic",           // Shortcut to 400 Italic
        "500",              // Regular with Weight
        444                 // Regular Weight for variable font
      ]
    }
  ]} /> 


```
