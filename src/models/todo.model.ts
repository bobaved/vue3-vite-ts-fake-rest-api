export class Todo {
  constructor(
    public userId: Number,
    public id: Number,
    public title: String,
    public completed: Boolean,
  ) {}
}