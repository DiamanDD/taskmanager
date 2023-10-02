import styles from '../Body.module.css'
import { ModalWindow } from '../../ModalWindow/ModalWindow'
import { EditTask } from '../../Header/components/EditTask/EditTask'
import { useState } from 'react'
import { Button } from 'antd'

export const TaskWrapper = (props) => {
  const { task, setTask } = props
  const [isVisible, setIsVisible] = useState(false)
  const onClick = () => {
    setIsVisible(true)
  }
  const deleteMessage = (id) => {
    setTask((prevstate) => {
      const newArray = [...prevstate]
      const index = prevstate.findIndex((el) => el.id === task.id)
      newArray.splice(index, 1)
      return newArray
    })
  }
  return (
    <>
      <div
        className={styles.task}
        key={task.id}
        style={{ background: task.color }}
      >
        <div>
          <span>{task.text}</span> <span>{task.category}</span>{' '}
          <span>{task.levelImportance} </span>
          <span>{task.date}</span>
        </div>

        <div className={styles.btnContainer}>
          <Button type="primary" size={'small'} onClick={onClick}>
            Редактировать
          </Button>
          <Button
            type="primary"
            danger
            size={'small'}
            onClick={() => deleteMessage(task.id)}
          >
            Удалить
          </Button>
        </div>
      </div>
      {isVisible && (
        <ModalWindow setIsVisible={setIsVisible}>
          <EditTask {...{ task, setTask }} />
        </ModalWindow>
      )}
    </>
  )
}