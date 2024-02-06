import styles from './Header.module.css'
import Logo from '../assets/Logo.svg'
import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
// import { ChangeEvent, FormEvent, useState } from 'react';

// interface Props {
//   onAddTask: (taskTitle: string) => void
// }

interface Props {
  onAddTask: (tasktitle: string) => void;
}

export function Header ({ onAddTask }: Props) {
  const [title, setTitle] = useState("")

  function handleSubmit(event: FormEvent) {
  event.preventDefault() // padrao de formularios no react

  onAddTask(title);
  setTitle('');
}

  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setTitle(event.target.value)
}

function handleNewCommentInvalid(event: InvalidEvent<HTMLInputElement>) {
  event.target.setCustomValidity('Este campo é obrigatório');
}

  // function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
  //   setTitle(event.target.value)
  // } 
  return (
    <header className={styles.header}>
      <img src={Logo} />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input 
          placeholder='Adicione uma nova tarefa'
          onChange={onChangeTitle}
          value={title}
          onInvalid={handleNewCommentInvalid}
          required /* lugar onde fica o valor do placeholder */ />
        <button>
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
    </header>

  );
}