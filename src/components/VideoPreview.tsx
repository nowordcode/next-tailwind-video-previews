import Image from "next/image";
import { ClockIcon, EyeIcon, PlayIcon } from "lucide-react";
import { Video } from "@/interfaces";
import { compact } from "@/utils/numberFormat";

type Props = {
  video: Video;
};

const VideoPreview = ({ video }: Props) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative rounded-lg overflow-hidden mb-2 ">
        <Image
          width="360"
          height="202"
          alt=""
          src={video.thumbnailUrl}
          className="w-full"
        />
        <div className="absolute w-full h-full left-0 top-0 opacity-40 bg-black hidden group-hover:flex items-center justify-center">
          <PlayIcon size={32} />
        </div>

        <div className="absolute bottom-2 right-2 bg-slate-900 text-xs px-1 rounded shadow">
          {video.duration}
        </div>

        <div className="absolute bottom-2 left-2 bg-slate-900 text-xs px-1 rounded shadow">
          {video.allowedAge}+
        </div>
      </div>

      <h3 className="mb-2 mt-0 text-lg font-bold leading-tight text-primary">
        {video.title}
      </h3>

      <div className="flex gap-3">
        <div>
          <AuthorAvatar authorName={video.authorName} />
        </div>

        <div className="">
          <div className="mb-1 mt-0 text-xs leading-tight text-primary">
            {video.authorName}
          </div>

          <div className="mb-1 mt-0 text-xs leading-tight text-primary flex gap-4 opacity-50">
            <span className="flex items-center gap-1">
              <EyeIcon size={12} />
              <span>
                {compact(video.viewsCount)}{" "}
                {video.viewsCount === 1 ? "view" : "views"}
              </span>
            </span>

            <span className="flex items-center gap-1">
              <ClockIcon size={12} />
              <span>{video.uploadedAt}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

type AuthorAvatarProps = {
  authorName: string;
};

const AuthorAvatar = ({ authorName }: AuthorAvatarProps) => {
  return (
    <div className="flex w-8 h-8 items-center justify-center rounded-full capitalize text-slate-900 bg-zinc-200 shadow">
      {authorName[0]}
    </div>
  );
};

export default VideoPreview;
