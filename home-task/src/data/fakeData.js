const fakeData = {
    tasks: {
        "task1": { id: "task1", title: 'Take the dog out for a walk', assignedTo: []},
        "task2": { id: "task2", title: 'Do the grocery shopping', assignedTo: [] },
        'task3': { id: "task3", title: 'Do Laundry', assignedTo: []},
        "task4": { id: "task4", title: 'Cook daily meals', assignedTo: [] },
        "task5": { id: "task5", title: 'Vaccuum the house', assignedTo: []}
    },
    columns: {
        "column1": {
            id: "column1",
            title: "To Do",
            taskIds: ["task1", "task2", "task3", "task4", "task5"]
        },
        "column2": {
            id: "column2",
            title: "In progress",
            taskIds: []
        },
        "column3": {
            id: "column3",
            title: "Done",
            taskIds: []
        }

    },
    columnOrder: ["column1", "column2", "column3"],
    members: { "mom": 100 ,  "dad": 100 ,  "child": 100 }
}

export default fakeData;