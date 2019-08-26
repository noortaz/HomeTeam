const fakeData = {
    tasks: {
        "task1": { id: "task1", title: 'Take the dog out for a walk',},
        "task2": { id: "task2", title: 'Do the grocery shopping' },
        'task3': { id: "task3", title: 'Do Laundry', },
        "task4": { id: "task4", title: 'Cook daily meals', },
        "task5": { id: "task5", title: 'Vaccuum the house', },
        "task6": { id: "task6", title: 'Wash the dishes', },
        "task7": { id: "task7", title: 'Take the garbage out', },
    },
    columns: {
        "column1": {
            id: "column1",
            title: "To Do",
            taskIds: ["task1", "task2", "task3", "task4", "task5", "task6", "task7"]
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
    columnOrder: ["column1", "column2", "column3"]
}

export default fakeData;