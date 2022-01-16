import {ThemeContextConsumer} from './../../context/ThemeContext';
import a from './../App/app.module.css';
  
function ThemedButton(props) {
    return (
      <ThemeContextConsumer>
        {context => (
          <button onClick={context.toggleTheme} className={a.button}>
            Тема
          </button>
        )}
      </ThemeContextConsumer>
    );
  }


export default ThemedButton;