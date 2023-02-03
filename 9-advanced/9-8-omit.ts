{
  // omit은 pick과 반대로 원하는 것을 빼는 일을 한다.
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://....",
      data: "dataa...~~~",
    };
  }

  /*
    type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

    keyof any로 받아오기 때문에 기본적으로 Pick과 달리 아무 거나 넣어주어도 상관은 없다. 
  */
  type VideoMetadata = Omit<Video, "url" | "data">;

  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id,
      title: "title",
    };
  }
}
