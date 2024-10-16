import Comment from "../../(components)/Comment";
import Layout from "../../layout";

export default function ProfileComment() {
  return (
    <div className=" -ml-10 -mt-4">
      <div className="mt-4 -ml-4">
        <Comment />
        <hr className="border-gray-500 -ml-[19px] -mr-[74px] mt-6" />
      </div>
      <div className="mt-4 -ml-4">
        <Comment /> 
        <hr className="border-gray-500 -ml-[19px] -mr-[74px] mt-6" />
      </div>
    </div>
  );
}
