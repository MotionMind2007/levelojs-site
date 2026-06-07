import './content.css';
import CodeBlock from '../../../documents/components/codeBlock/codeBlock.jsx';

const code = `import { state, head } from 'levelojs';

head({ title: 'Todo List — Levelo JS' });

export default function TodoList() {
  const [todos, setTodos] = state([]);

  const addTodo = () => {
    const input = document.getElementById('todo-input');
    const val = input ? input.value.trim() : '';
    if (!val) return;
    setTodos([...todos(), { text: val, done: false }]);
    if (input) input.value = '';
  };

  const toggleTodo = (i) => {
    setTodos(todos().map((todo, idx) =>
      idx === i ? { ...todo, done: !todo.done } : todo
    ));
  };

  const removeTodo = (i) => {
    setTodos(todos().filter((_, idx) => idx !== i));
  };

  return (
    <div style={{ padding: '1.5rem', maxWidth: '400px' }}>
      <h2 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem' }}>
        Todo List
      </h2>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
        <input
          id="todo-input"
          type="text"
          placeholder="Add a task..."
          style={{
            flex: '1',
            padding: '0.4rem 0.8rem',
            borderRadius: '6px',
            border: '1px solid #e5e3dc',
            fontSize: '0.88rem',
            outline: 'none',
          }}
        />
        <button
          onClick={addTodo}
          style={{
            padding: '0.4rem 1rem',
            borderRadius: '6px',
            border: 'none',
            background: '#5b4fff',
            color: 'white',
            fontWeight: '600',
            cursor: 'pointer',
          }}
        >Add</button>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {todos().map((todo, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '0.6rem 0.8rem',
              borderRadius: '8px',
              border: '1px solid #e5e3dc',
              background: todo.done ? '#f4f3ef' : '#ffffff',
            }}
          >
            <input
              type="checkbox"
              checked={todo.done}
              onClick={() => toggleTodo(i)}
              style={{ cursor: 'pointer', width: '16px', height: '16px' }}
            />
            <span style={{
              flex: '1',
              fontSize: '0.88rem',
              color: todo.done ? '#b0aebe' : '#2a2835',
              textDecoration: todo.done ? 'line-through' : 'none',
            }}>{todo.text}</span>
            <button
              onClick={() => removeTodo(i)}
              style={{
                padding: '0.2rem 0.6rem',
                borderRadius: '5px',
                border: '1px solid #e5e3dc',
                background: 'transparent',
                color: '#7c7a8e',
                cursor: 'pointer',
                fontSize: '0.75rem',
              }}
            >✕</button>
          </div>
        ))}
      </div>
    </div>
  )
}`;

import { state } from 'levelojs';

export default function TodoList() {
  const [todos, setTodos] = state([]);

  const addTodo = () => {
    const input = document.getElementById('todo-input');
    const val = input ? input.value.trim() : '';
    if (!val) return;
    setTodos([...todos(), { text: val, done: false }]);
    if (input) input.value = '';
  };

  const toggleTodo = (i) => {
    setTodos(todos().map((todo, idx) =>
      idx === i ? { ...todo, done: !todo.done } : todo
    ));
  };

  const removeTodo = (i) => {
    setTodos(todos().filter((_, idx) => idx !== i));
  };

  return (
    <section class="exSection" id="todo">
      <div class="exBadge">Real World</div>
      <h2 class="exH2">Todo List</h2>
      <p class="exDesc">
        A classic todo app using <code class="exInlineCode">state()</code> —
        add, complete, and remove tasks. Shows how to manage array state in Levelo JS.
      </p>

      <div class="exGrid">
        <CodeBlock filename="pages/todo.jsx" code={code} />

        <div class="exPreview">
          <div class="exPreviewHeader">
            <span class="exPreviewLabel">Preview</span>
            <span class="exPreviewBadge">● Live</span>
          </div>
          <div class="exPreviewBody">
            <h2 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#0f0e17', marginBottom: '1rem' }}>
              Todo List
            </h2>

            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem' }}>
              <input
                id="todo-input"
                type="text"
                placeholder="Add a task..."
                style={{
                  flex: '1',
                  padding: '0.4rem 0.8rem',
                  borderRadius: '6px',
                  border: '1px solid #e5e3dc',
                  fontSize: '0.88rem',
                  outline: 'none',
                }}
              />
              <button
                onClick={addTodo}
                style={{
                  padding: '0.4rem 1rem',
                  borderRadius: '6px',
                  border: 'none',
                  background: '#5b4fff',
                  color: 'white',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '0.85rem',
                }}
              >Add</button>
            </div>

            {todos().length === 0 ? (
              <p style={{ fontSize: '0.85rem', color: '#b0aebe', textAlign: 'center', padding: '1rem 0' }}>
                No tasks yet. Add one above!
              </p>
            ) : null}

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {todos().map((todo, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.6rem 0.8rem',
                    borderRadius: '8px',
                    border: '1px solid #e5e3dc',
                    background: todo.done ? '#f4f3ef' : '#ffffff',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onClick={() => toggleTodo(i)}
                    style={{ cursor: 'pointer', width: '16px', height: '16px' }}
                  />
                  <span style={{
                    flex: '1',
                    fontSize: '0.88rem',
                    color: todo.done ? '#b0aebe' : '#2a2835',
                    textDecoration: todo.done ? 'line-through' : 'none',
                  }}>{todo.text}</span>
                  <button
                    onClick={() => removeTodo(i)}
                    style={{
                      padding: '0.2rem 0.6rem',
                      borderRadius: '5px',
                      border: '1px solid #e5e3dc',
                      background: 'transparent',
                      color: '#7c7a8e',
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                    }}
                  >✕</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p class="exNote">
        Use <code class="exInlineCode">document.getElementById()</code> to read
        uncontrolled input values directly from the DOM.
        Always spread arrays when updating state —
        <code class="exInlineCode">[...todos(), newItem]</code>.
      </p>
    </section>
  )
}