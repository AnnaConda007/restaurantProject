import 'overlayscrollbars/overlayscrollbars.css';
import { 
    OverlayScrollbars, 
    ScrollbarsHidingPlugin, 
    SizeObserverPlugin, 
    ClickScrollPlugin 
  } from '../overlayscrollbars';

 const scrol = ()=>{
      const myScrollableElement = document.querySelector('.cart__background');
      const options = {
        scrollbars: {
          color: 'red'
        }
      };
      const overlayScrollbarsInstance = OverlayScrollbars(myScrollableElement, options);
      
 }

 export default scrol