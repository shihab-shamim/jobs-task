import Card from "./Card";


const Column = ({title,color}) => {
    const tasks=[1,2,3,4,5,6,7,8,9,10,11]
    return (
        <div className="column w-3/4">
       <div className="flex items-center justify-between">
       <div className="flex gap-2 items-center bg-[#F2F4F7] p-4">
        <div className={`w-4 h-4  ${color} rounded-l-full`}>

        </div>
       <h2 className="text-[14px] font-bold text-gray-500">{title}</h2>
       </div>
       <p className="px-2  bg-slate-300 rounded-sm">0</p>
       </div>
        {/* <h2>hello</h2> */}
        <div className="task-list">
          {/* {tasks.map((task, index) => (
            <Card key={index} task={task} />
          ))} */}
         <div className="mt-8">
         {
            tasks.map(task=><Card key={task}></Card>)
          }
         </div>
        </div>
      </div>
    );
};

export default Column;