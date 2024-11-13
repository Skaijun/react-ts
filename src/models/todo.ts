class Todo {
  id: string;
  text: string;
  isCompleted: boolean;

  constructor(text: string) {
    this.text = text;
    this.id = new Date().toISOString();
    this.isCompleted = false;
  }
}

export default Todo;
