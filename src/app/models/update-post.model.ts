export interface UpdatePostRequest {
    isScheduledPost: boolean | undefined;
    // publishOnDate: Date | undefined; // removed
    publishOnTime: string | undefined; //added //added 1st May //<!-- 12th may 2023 --> date to string
    title: string | undefined;
    postType: string | undefined;
    postContentText: string | undefined;
    postAttachmentURL: string | undefined;
    postStatus: string | undefined;
    socialNetworkType: string | undefined;
}