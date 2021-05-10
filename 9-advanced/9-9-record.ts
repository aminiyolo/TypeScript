{
  type VideoInfo = {
    title: string;
  };
  type Video = "action" | "comedy" | "romance";

  const record: Record<Video, VideoInfo> = {
    /**
     * When we use Record, first option which is Video is a key,
     * and second option which is VideoInfo is a value
     *  */
    action: { title: "action" },
    comedy: { title: "comedy" },
    romance: { title: "romance" },
  };
}
