import { Todo } from '../types/types';

const serverUrl = 'http://localhost:8000';

export const fetchTodoList = async (): Promise<Todo[] | null> => {
	try {
		await new Promise((resolve) => setTimeout(resolve, 2500));

		const res = await fetch(`${serverUrl}/todo-list`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			cache: 'no-store',
		});

		if (!res.ok) {
			throw new Error('something went wrong on server');
		}

		const todoList: Todo[] = await res.json();
		return todoList;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const createTodo = async (title: string) => {
	const newTodo = {
		id: Math.random(),
		title,
		progress: 'incomplete',
	};

	try {
		const res = await fetch(`${serverUrl}/todo-list`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newTodo),
		});

		if (!res.ok) {
			throw new Error('Fail to create');
		}

		return res.json();
	} catch (error) {
		console.log(error);
		throw new Error('Fail to create');
	}
};
