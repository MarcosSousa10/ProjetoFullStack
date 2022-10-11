import './styles.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCheck } from 'react-icons/fa';
function Home() {
    return (
      <div  className="home">
        <div className='sub-home'>
          <div className='left'>
            <h1>Task List</h1>
            <p>junte-se a mais de meuio milha de usuarios e gerencie </p>
            <div className='form'>
              <input type="text" placeholder='Titulo' />
             <textarea  placeholder='Descrição'></textarea>
             <DatePicker selected={null} onChange={null} />
             <button className='btn-save'>Salvar</button>
            </div>
          </div>
          <ul className='right'>
            <li>
              <div >
                <h2>Titulo</h2>
                <h3>22/04/2021</h3>
                <h3>Essa e uma descrição de tarefa</h3>
              </div>
              <FaCheck size={22} color="#1a1a1a" />
            </li>
          </ul>
        </div>
        
      </div>
    );
  }
  
  export default Home;
  