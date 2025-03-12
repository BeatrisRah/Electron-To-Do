export default function TaskItem() {
    return (
        <li className="py-4">
            <div className="flex items-center">
                <input
                    id="todo1"
                    name="todo1"
                    type="checkbox"
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                />
                <label htmlFor="todo1" className="ml-3 block text-gray-900">
                    <span className="text-lg font-medium">Finish project proposal</span>
                    <span className="text-sm font-light text-gray-500">
                        Due on 4/1/23
                    </span>
                </label>
            </div>
        </li>
    );
}