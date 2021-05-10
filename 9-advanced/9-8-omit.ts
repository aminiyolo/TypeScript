{
  type Video = {
    id: string;
    description: string;
    url: string;
    data: string;
  };

  type VideoMetadata = Omit<Video, "description" | "data">;

  function getVideo(id: string): Video {
    return {
      id,
      description: "video",
      url: "https//...",
      data: "data/....",
    };

    function getVideoMetadata(id: string): VideoMetadata {
      return {
        id,
        url: "https//...",
      };
    }
  }
}
