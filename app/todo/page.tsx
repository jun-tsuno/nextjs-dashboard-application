import { Suspense } from 'react';
import TodoList from '../ui/todo/todo-list';
import AddTodoForm from '../ui/todo/add-todo-form';

const TodoListPage = () => {
	return (
		<>
			<h1 className='mt-20 mb-4 text-center font-bold text-2xl'>Todo List</h1>
			<p className='text-center mb-10'>
				fetch todo list from json-server after few seconds...
			</p>
			<AddTodoForm />

			<Suspense fallback={<div className='text-center'>Loading...</div>}>
				<TodoList />
			</Suspense>
		</>
	);
};

export default TodoListPage;
