"use server";

import { Video } from "@/interfaces";

export default async function getVideos(): Promise<Video[]> {
  return [
    {
      id: "1",
      title: "Something is on the table",
      duration: "59:06",
      thumbnailUrl: "/thumbs/thumb_1.png",
      authorName: "John Doe",
      uploadedAt: "1 day ago",
      viewsCount: 1258,
      allowedAge: 12,
    },
    {
      id: "2",
      title: "Very beautiful architecture",
      duration: "12:24",
      thumbnailUrl: "/thumbs/thumb_2.png",
      authorName: "Some One",
      uploadedAt: "5 days ago",
      viewsCount: 77,
      allowedAge: 16,
    },
    {
      id: "3",
      title: "Take a look at what grows at out pond!",
      duration: "35:02",
      thumbnailUrl: "/thumbs/thumb_3.png",
      authorName: "Anonimous User",
      uploadedAt: "1 hour ago",
      viewsCount: 0,
      allowedAge: 6,
    },
    {
      id: "4",
      title: "Life at modern cities",
      duration: "5:24",
      thumbnailUrl: "/thumbs/thumb_4.png",
      authorName: "Famous User",
      uploadedAt: "2 days ago",
      viewsCount: 1000200,
      allowedAge: 16,
    },
    {
      id: "5",
      title: "Perfect geometry shapes are all around us nowadays",
      duration: "12:24",
      thumbnailUrl: "/thumbs/thumb_5.png",
      authorName: "Jane Doe",
      uploadedAt: "1 month ago",
      viewsCount: 50123,
      allowedAge: 16,
    },
    {
      id: "6",
      title: "Sunset timelapse 4K | No Commentary",
      duration: "46:24",
      thumbnailUrl: "/thumbs/thumb_6.png",
      authorName: "Mary Jane",
      uploadedAt: "10 days ago",
      viewsCount: 333,
      allowedAge: 6,
    },
  ];
}
