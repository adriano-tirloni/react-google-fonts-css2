import { useEffect, useState } from "react";
import { assembleCommon } from 'google-fonts-css2'

const buildLink = (families, display) => {
  if (typeof document === 'undefined') return

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = assembleCommon(families, display)

  return link
}

const GoogleFontsCss2Loader = ({families, family, styles, display = 'swap' }) => {
  const [link, setLink] = useState(buildLink(families || [{family, styles}], display));

  useEffect(() => {
      if (typeof document === 'undefined') return
      
      document.head.appendChild(link);

      return () => document.head.removeChild(link);
  }, [link]);

  useEffect(() => {
      setLink(buildLink(families || [{family, styles}], display));
  }, [families, family, styles, display]);

  return null;
};


export default GoogleFontsCss2Loader