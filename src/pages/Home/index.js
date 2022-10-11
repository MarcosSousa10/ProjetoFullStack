import './styles.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Home() {
    return (
      <div  className="home">
        <div className='sub-home'>
          <div className='left'>
            <h1>Task List</h1>
            <p>junte-se a mais de meuio milha de usuarios e gerencie </p>
            <div>
              <input type="text" placeholder='Titulo' />
             <textarea  placeholder='Descrição'></textarea>
             <DatePicker selected={null} onChange={null} />
             <button>Salvar</button>
            </div>
          </div>
          <ul className='right'>
            <li>
              <div>
                <h2>Titulo</h2>
                <h3>22/04/2021</h3>
                <h3>Essa e uma descrição de tarefa</h3>
              </div>
            </li>
          </ul>
        </div>
        
      </div>
    );
  }
  
  export default Home;
  