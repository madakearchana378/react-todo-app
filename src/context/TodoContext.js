import React, {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState( ()=> {
    const savedTodos = localStorage.getItem("todos");

    if (savedTodos) {
      return JSON.parse(savedTodos);
    }

    return [];
  });

  useEffect(function () {
    localStorage.setItem(
      "todos",
      JSON.stringify(todos)
    );
  }, [todos]);

  
  function addTodo(title, date, description, priority) {
    if (title.trim() === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      description: description || "",
      date: date || "",
      priority: priority || "Medium",
      status: "Pending",
      completed: false
    };

    setTodos( (oldTodos)=> {
      return [...oldTodos, newTodo];
    });
  }


  function completeTodo(id) {
    setTodos(function (oldTodos) {
      return oldTodos.map( (todo)=> {
        if (todo.id === id) {
          return {
            ...todo,
            status: "Completed",
            completed: true
          };
        }

        return todo;
      });
    });
  }


  function pendingTodo(id) {
    setTodos(function (oldTodos) {
      return oldTodos.map( (todo)=> {
        if (todo.id === id) {
          return {
            ...todo,
            status: "Pending",
            completed: false
          };
        }

        return todo;
      });
    });
  }

  function toggleTodo(id) {
    setTodos( (oldTodos)=> {
      return oldTodos.map( (todo)=> {
        if (todo.id === id) {
          if (todo.status === "Completed") {
            return {
              ...todo,
              status: "Pending",
              completed: false
            };
          }

          return {
            ...todo,
            status: "Completed",
            completed: true
          };
        }

        return todo;
      });
    });
  }

 
  function deleteTodo(id) {
    setTodos( (oldTodos)=> {
      return oldTodos.map( (todo)=> {
        if (todo.id === id) {
          return {
            ...todo,
            status: "Deleted"
          };
        }

        return todo;
      });
    });
  }


  function updateTodo(updatedTodo) {
    setTodos( (oldTodos)=> {
      return oldTodos.map( (todo)=> {
        if (todo.id === updatedTodo.id) {
          return {
            ...todo,
            title: updatedTodo.title,
            description: updatedTodo.description || "",
            date: updatedTodo.date || "",
            priority: updatedTodo.priority || "Medium"
          };
        }

        return todo;
      });
    });
  }

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        completeTodo,
        pendingTodo,
        toggleTodo,
        deleteTodo,
        updateTodo
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export function useTodos() {
  return useContext(TodoContext);
}











