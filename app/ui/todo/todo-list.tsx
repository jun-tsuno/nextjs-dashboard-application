import { fetchTodoList } from '@/app/lib/api';

const TodoList = async () => {
	const todoList = await fetchTodoList();

	if (!todoList) {
		return <div className='text-center'>Fail to fetch data...</div>;
	}

	return (
		<>
			{todoList.length > 0 ? (
				<ul className='w-[90%] mx-auto max-w-[300px]'>
					{todoList.map((todo, i) => (
						<li key={i + 1}>
							<p>
								{i + 1} / {todo.title} / {todo.progress}
							</p>
						</li>
					))}
				</ul>
			) : (
				<div className='text-center'>No todo</div>
			)}
		</>
	);
};

export default TodoList;
