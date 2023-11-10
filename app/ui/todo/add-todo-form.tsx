'use client';
import { createTodo } from '@/app/lib/api';
import { FormEvent, useState } from 'react';

const AddTodoForm = () => {
	const [title, setTitle] = useState('');

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!title) return alert('Title required!!');

		try {
			const todo = await createTodo(title);

			alert(`Created: ${todo.title}`);
			setTitle('');
			return;
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className='mb-8 flex items-center gap-4 justify-center'
			>
				<label htmlFor='todo-title-input'>Title</label>
				<input
					id='todo-title-input'
					type='text'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				/>

				<button
					type='submit'
					className='bg-emerald-300 hover:brightness-95 px-6 py-2'
				>
					Create
				</button>
			</form>
		</>
	);
};

export default AddTodoForm;
