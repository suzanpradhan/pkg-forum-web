import PostActions from "@/app/(commonComponents)/PostActions";
import DetailBox from "@/app/(commonComponents)/PostProfile";
export default function CommentComp() {
  return (
    <div className="mt-8">
      <DetailBox />
      <p className="text-[#D2D2D2] text-base mb-4 font-satoshi mt-2 ml-8">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words.
      </p>
      <div className="-mt-4 ml-8">
        <PostActions />
      </div>
    </div>
  );
}
