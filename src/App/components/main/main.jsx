import React, { useState } from "react";
import styles from "./main.module.scss";
import icon from "../../assets/main/Active Container.png";
import { nanoid } from "@reduxjs/toolkit";
import { dateСonverter } from "../../utils/dateСonverter";

const tasks = [
    {
        id: 1,
        date: "28.05.2023",
        cipherTask: "Шифр задачи",
        cipherProject: "48/21 -",
        task: "Прозвонить Копьева",
        status: "Выполнена",
        responsible: "Иванов В.А.",
        reassign: "Свердлова А. И.",
        priority: 2,
        comment: "Комментарий",
        planTime: "00:15:00",
        factTime: "00:00:14",
        start: "01/01/0001 00:00:00",
        completed: "01/24/2023 10:23:17"
    },
    {
        id: 2,
        date: "27.05.2023",
        cipherTask: "Шифр задачи",
        cipherProject: "48/21 -",
        task: "Прозвонить Копьева",
        status: "На паузе",
        responsible: "Иванов В.А.",
        reassign: "Свердлова А. И.",
        priority: 2,
        comment: "Комментарий",
        planTime: "00:15:00",
        factTime: "00:00:14",
        start: "01/01/0001 00:00:00",
        completed: "01/24/2023 10:23:17"
    },
    {
        id: 3,
        date: "27.05.2023",
        cipherTask: "Шифр задачи",
        cipherProject: "48/21 -",
        task: "Прозвонить Копьева",
        status: "В работе",
        responsible: "Иванов В.А.",
        reassign: "Свердлова А. И.",
        priority: "Вне очереди",
        comment: "Комментарий",
        planTime: "00:15:00",
        factTime: "00:00:14",
        start: "01/01/0001 00:00:00",
        completed: "01/24/2023 10:23:17"
    },
    {
        id: 4,
        date: "28.05.2023",
        cipherTask: "Шифр задачи",
        cipherProject: "48/21 -",
        task: "Прозвонить Копьева",
        status: "Выполнена",
        responsible: "Иванов В.А.",
        reassign: "Свердлова А. И.",
        priority: 2,
        comment: "Комментарий",
        planTime: "00:15:00",
        factTime: "00:00:14",
        start: "01/01/0001 00:00:00",
        completed: "01/24/2023 10:23:17"
    },
    {
        id: 5,
        date: "27.05.2023",
        cipherTask: "Шифр задачи",
        cipherProject: "48/21 -",
        task: "Прозвонить Копьева",
        status: "Выполнена",
        responsible: "Иванов В.А.",
        reassign: "Свердлова А. И.",
        priority: 2,
        comment: "Комментарий",
        planTime: "00:15:00",
        factTime: "00:00:14",
        start: "01/01/0001 00:00:00",
        completed: "01/24/2023 10:23:17"
    },
    {
        id: 6,
        date: "31.05.2023",
        cipherTask: "Шифр задачи",
        cipherProject: "48/21 -",
        task: "Прозвонить Копьева",
        status: "Выполнена",
        responsible: "Иванов В.А.",
        reassign: "Свердлова А. И.",
        priority: 2,
        comment: "Комментарий",
        planTime: "00:15:00",
        factTime: "00:00:14",
        start: "01/01/0001 00:00:00",
        completed: "01/24/2023 10:23:17"
    },
    {
        id: 7,
        date: "31.05.2023",
        cipherTask: "Шифр задачи",
        cipherProject: "48/21 -",
        task: "Прозвонить Копьева",
        status: "Выполнена",
        responsible: "Иванов В.А.",
        reassign: "Свердлова А. И.",
        priority: 2,
        comment: "Комментарий",
        planTime: "00:15:00",
        factTime: "00:00:14",
        start: "01/01/0001 00:00:00",
        completed: "01/24/2023 10:23:17"
    },
    {
        id: 8,
        date: "31.05.2023",
        cipherTask: "Шифр задачи",
        cipherProject: "48/21 -",
        task: "Прозвонить Копьева",
        status: "Выполнена",
        responsible: "Иванов В.А.",
        reassign: "Свердлова А. И.",
        priority: 2,
        comment: "Комментарий",
        planTime: "00:15:00",
        factTime: "00:00:14",
        start: "01/01/0001 00:00:00",
        completed: "01/24/2023 10:23:17"
    },
    {
        id: 9,
        date: "27.05.2023",
        cipherTask: "Шифр задачи",
        cipherProject: "48/21 -",
        task: "Прозвонить Копьева",
        status: "Выполнена",
        responsible: "Иванов В.А.",
        reassign: "Свердлова А. И.",
        priority: 2,
        comment: "Комментарий",
        planTime: "00:15:00",
        factTime: "00:00:14",
        start: "01/01/0001 00:00:00",
        completed: "01/24/2023 10:23:17"
    },
    {
        id: 10,
        date: "31.05.2023",
        cipherTask: "Шифр задачи",
        cipherProject: "48/21 -",
        task: "Прозвонить Копьева",
        status: "Выполнена",
        responsible: "Иванов В.А.",
        reassign: "Свердлова А. И.",
        priority: 2,
        comment: "Комментарий",
        planTime: "00:15:00",
        factTime: "00:00:14",
        start: "01/01/0001 00:00:00",
        completed: "01/24/2023 10:23:17"
    },
    {
        id: 11,
        date: "31.05.2023",
        cipherTask: "Шифр задачи",
        cipherProject: "48/21 -",
        task: "Прозвонить Копьева",
        status: "Выполнена",
        responsible: "Иванов В.А.",
        reassign: "Свердлова А. И.",
        priority: 2,
        comment: "Комментарий",
        planTime: "00:15:00",
        factTime: "00:00:14",
        start: "01/01/0001 00:00:00",
        completed: "01/24/2023 10:23:17"
    }
];

const Main = () => {
    const [filter, setFilter] = useState("null");
    const [data, setData] = useState(tasks);
    console.log(data);
    const handleChange = ({ target }) => {
        const newData = tasks.findIndex(
            (item) => item.id.toString() === target.id
        );
        const tasksNew = [...tasks, (tasks[newData].status = target.value)];

        setData(tasksNew);
    };

    console.log(dateСonverter("25.05.2023"));
    const handleClick = () => {
        setFilter("done");
    };
    const handleClickToday = () => {
        setFilter("today");
    };
    const handleClickFuture = () => {
        setFilter("tomorrow");
    };

    return (
        <section className={styles.mainWrapper}>
            <div className={styles.mainContentLeft}>
                <img src={icon} alt="progressContainer" />
            </div>
            <div className={styles.mainContentRight}>
                {" "}
                <h1>Задачи</h1>
                <div className={styles.table}>
                    <div className={styles.tableTitle}>
                        <div>Дата</div>
                        <div>Шифр задачи</div>
                        <div>Шифр проекта</div>
                        <div>Задача</div>
                        <div>Статус</div>
                        <div>Ответственный</div>
                        <div>Переназначить</div>
                        <div>Приоритет</div>
                        <div>Комментарий</div>
                        <div>План время</div>
                        <div>Факт время</div>
                        <div>Начал</div>

                        <div>Завершил</div>
                    </div>
                    <div className={styles.tableСompletedTasks}>
                        <div>
                            <button onClick={handleClick}>
                                Выполненные задачи
                            </button>
                        </div>
                    </div>
                    <div className={styles.tableTasksForToday}>
                        <div>
                            <button onClick={handleClickToday}>
                                Задачи на сегодня
                            </button>
                        </div>
                    </div>

                    {tasks.map((task) => (
                        <div
                            key={nanoid()}
                            className={
                                filter === "null"
                                    ? styles.none
                                    : filter === "done" &&
                                      task.status === "Выполнена"
                                    ? styles.open
                                    : filter === "today" &&
                                      dateСonverter(task.date) === "today"
                                    ? styles.open
                                    : filter === "tomorrow" &&
                                      dateСonverter(task.date) === "tomorrow"
                                    ? styles.open
                                    : styles.hidden
                            }
                        >
                            <div
                                className={
                                    task.status === "Выполнена" ||
                                    task.status === "На паузе"
                                        ? styles.tableTask
                                        : styles.tableTaskDone
                                }
                            >
                                <div>{task.date}</div>
                                <div>{task.cipherTask}</div>
                                <div>{task.cipherProject}</div>
                                <div>{task.task}</div>
                                <div>
                                    <select
                                        onChange={handleChange}
                                        name={task.id}
                                        id={task.id}
                                        value={task.status}
                                        className={
                                            task.status === "На паузе"
                                                ? styles.selected
                                                : ""
                                        }
                                    >
                                        <option
                                            key={"Выполнена"}
                                            className={styles.option}
                                            value="Выполнена"
                                        >
                                            Выполнена
                                        </option>
                                        <option
                                            key={"В работе"}
                                            className={styles.option}
                                            value="В работе"
                                        >
                                            {" "}
                                            В работе
                                        </option>
                                        <option
                                            key={"На паузе"}
                                            className={styles.option}
                                            value="На паузе"
                                        >
                                            {" "}
                                            На паузе
                                        </option>
                                    </select>
                                </div>
                                <div>{task.responsible}</div>
                                <div>{task.reassign}</div>
                                <div>{task.priority}</div>
                                <div>{task.comment}</div>
                                <div>{task.planTime}</div>
                                <div>{task.factTime}</div>
                                <div>{task.start}</div>
                                <div>{task.completed}</div>
                            </div>
                        </div>
                    ))}

                    <div className={styles.tableUpcomingTasks}>
                        <div>
                            <button onClick={handleClickFuture}>
                                Предстоящие задачи
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;
