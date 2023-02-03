{
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

  // 기존에 타입에서 내가 원하는 부분만 가져다가 사용하고 싶을 때 pick을 사용한다.
  /*
    type Pick<T, K extends keyof T> = {
        [P in K]: T[P];
    };

    이런식으로 되어있다.... 
  */

  type VideoMetadata = Pick<Video, "id" | "title">;

  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id,
      title: "title",
    };
  }
}
