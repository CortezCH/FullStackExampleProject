export interface ToDo{
    id: number;
    assignedTo: number;
    name: string;
    description: string;
    hoursNeeded: number;
    isCompleted: boolean;
}

// Converts JSON strings to/from your types
export class ConvertToDo {
    public static toToDo(json: string): ToDo {
        return JSON.parse(json);
    }

    public static toDotoJson(value: ToDo): string {
        return JSON.stringify(value);
    }
}