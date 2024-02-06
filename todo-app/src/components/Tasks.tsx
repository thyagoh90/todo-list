// import { ClipboardText } from 'phosphor-react';
// import { ITask } from '../App'
import { ClipboardText } from 'phosphor-react';
import { ITask } from '../App'
import { List } from './List'
import styles from './Tasks.module.css'

// export interface Props {
//   tasks: ITask[];
//   onDelete: (taskId: string) => void;
//   onComplete: (taskId: string) => void;
// }

export interface Props {
  tasks: ITask[];
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function Task ({ tasks, onDelete, onComplete }: Props) {

const tasksQuantity = tasks.length; // funcao utilizada para contar o tamanho do array (.lenght)
const completedTasks = tasks.filter((task) => task.isCompleted).length; // funcao para filtrar as tarefas completadas, usando também o (.lenght)

  return (
  <section className={styles.task}>
    <header className={styles.header}>
      <div>
        <p>Tarefas criadas</p>
        <span>{tasksQuantity}</span>
      </div>
      
      <div>
        <p className={styles.purple}>Concluídas</p>
        <span>{completedTasks} de {tasksQuantity}</span>
      </div>
    </header>

    <div className={styles.list}> 
      {tasks.map((task) => (
        <List key={task.id} task={task} onDelete={onDelete} onComplete={onComplete} /> // funcao para percorrer o array com o .map. eh necessario colocar o task como parametro dentro do list para poder importar em outro arquivo
      ))}
    </div>

    {tasks.length <= 0 && (
      <section className={styles.empty}>  
          <ClipboardText  size={50}/>
          <div>
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
      </section>
    )}
  </section>
  )
};
