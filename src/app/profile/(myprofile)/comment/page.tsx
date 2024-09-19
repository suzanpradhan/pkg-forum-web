import Comment from "../../(components)/Comment";
import Layout from "../../layout";

export default function ProfileComment() {
  return (
    <div className=" -ml-10">
      <div className="mt-1">
        <Comment />
      </div>
      <div className="mt-4">
        <Comment /> 
      </div>
    </div>
  );
}
