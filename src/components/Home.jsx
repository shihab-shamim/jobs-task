import Column from "./Column";
import "./../../src/app.css";



const Home = () => {
    return (
        <div>
          
          <div className="flex flex-auto flex-nowrap overflow-x-scroll w-[90%] mx-auto mt-28"          >
      <Column title="Incomplete" color='bg-[#D21010]'  />
      <Column title="To Do"  color='bg-[#00B5FF]'/>
      
      <Column title="Doing"  color='bg-[#FFE700]'/>
      <Column title="Under Review"  />
      <Column title="Completed"  />
      <Column title="Overdue"  />
    </div>
        </div>
    );
};

export default Home;