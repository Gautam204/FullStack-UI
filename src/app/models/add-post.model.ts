export interface AddPostRequest {
    //name: string | undefined;  // <!-- 03rd may 2023 -->
    isScheduledPost: boolean | undefined;
    //publishOnDate: string | undefined; //removed
    publishOnTime: string | undefined; //added //added 1st May
    title: string | undefined;
    postType: string | undefined;
    postContentText: string | undefined;
    postAttachmentURL: string | undefined;
    postStatus: string | undefined;
    userName:string | undefined;
    socialNetworkType: string | undefined;
}