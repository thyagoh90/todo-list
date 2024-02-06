import { CheckCircle, Trash } from 'phosphor-react'
import styles from './List.module.css'
import { ITask } from '../App'
// import { ITask } from '../App'

// interface Props {
//   task: ITask;
//   onDelete: (taskId: string) => void;
//   onComplete: (taskId: string) => void;
// }

interface Props {
  task: ITask;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function List({ task, onDelete, onComplete }: Props) {

  return (
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
       {task.isCompleted ? <CheckCircle size={20} /> : <div/>}

      </button>
      <p className={task.isCompleted ? styles.textCompleted : "" }>{task.title}</p>
      <button onClick={() => onDelete(task.id)} // eh necessario adicioar uma arrow function no onClick pq o valor do objeto nao eh do mesmo tipo do onClick. entao chamamos a funcao com () => passando o onDelete junto com o paramaetro .id a ser deletado
      className={styles.deleteButton} >
        <Trash size={20} />
      </button>
    </div>
  )
}