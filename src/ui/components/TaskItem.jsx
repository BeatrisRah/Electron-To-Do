export default function TaskItem({data, onDelete}) {
    
    
    async function handleClick(id){
        const newTasks = await window.electron.deleteTask(id);        
        onDelete(newTasks)
    }

    return (
        <li className="py-4 flex justify-between">
            <div className="flex items-center">
                <input
                    id="todo1"
                    name="todo1"
                    type="checkbox"
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                />
                <label htmlFor="todo1" className="ml-3 block text-gray-900">
                    <span className="text-lg font-medium">{data.text}</span>
                    
                </label>
                
            </div>
            <div className="inline-flex self-end rounded-md shadow-sm gap-1">
                <button onClick={() => handleClick(data.id)} className="bg-red-500 text-white px-3 py-1 rounded-md text-xs md:text-sm">Delete</button>
            </div>
        </li>
    );
}