import React, {useState, useEffect} from 'react';
import useToken from './app/useToken'

import List from './utils/List';
import ListItem from './utils/ListItem';

import Pagination from './utils/pagination'

async function getAssignedTasks(token, {page, limit, order, orderMethod}) {
    return fetch(`http://localhost:8080/tasks/assigned?page=${page}&limit=${limit}&order=${order}&orderMethod=${orderMethod}`, {
      method: 'Get',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `${token}`
      },
    //   body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Tasks() {
    const { token } = useToken();
    const [isLoaded, setIsLoaded] = useState(false);
    const [tasks, setTasks] = useState();

    const [currentPage, setCurrentPage] = useState(1);
    const [pageLimit, setPageLimit] = useState(5);
    const [tasksOrder, setTasksOrder] = useState('createdAt');
    const [orderMethod, setOrderMethod] = useState('DESC');
    const [totalTasks, setTotalTasks] = useState(0);


    const getTasks = async () => {
        if (!token) {
            return
        }
        await getAssignedTasks(token, {page:currentPage, limit:pageLimit, order:tasksOrder, orderMethod})
        .then((res) => {
            setTasks(res.tasks);
            setTotalTasks(res.totalTasks);
            setIsLoaded(true);
        }).catch(() => {
            setIsLoaded(true);
        })
    }

    const pageUpdate = (pageNumber) => {
        setCurrentPage(pageNumber)
        getTasks()
    };

    useEffect(() => {
        getTasks();
      }, []);
    if (isLoaded) {
        return (
        <div className=" mx-auto px-4 sm:px-8">
        <div className="py-8">
            <div>
            <h2 className="text-2xl font-semibold leading-tight">Assigned tasks</h2>
            </div>
            <div className="sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden" >
                <List>
                    {tasks.map((task, i) => (
                    <ListItem key={i} task={task} />
                    ))}
                </List>
            </div>
            </div>
            <div className='self-end'>
                <Pagination
                    tasksPerPage={pageLimit}
                    totalTasks={totalTasks}
                    pageUpdate={pageUpdate}
                    currentPage={currentPage}
                />
            </div>
        </div>
        </div>
        );
    } else if (!isLoaded) {
        return <div>Loading...</div>;

    }

}
