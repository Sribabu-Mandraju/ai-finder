import Card from "../shared/Card";
import sysImg from "../../assets/sys.png";
const System = () => {
  return (
    <>
      <div className="text-white text-4xl my-12 text-center" id="System">
        System Operation
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full px-6 py-10 ">
        <Card>
          <img src={sysImg} className="w-[97%]  h-full object-cover" alt="" />
        </Card>
      </div>
    </>
  );
};

export default System;
