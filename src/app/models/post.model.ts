export interface Post {
    id: string;
    postedOn: string;
    isScheduledPost: boolean;
    publishOnDate: Date;
    publishOnTime: string; //added //added 1st May //<!-- 12th may 2023 --> date to string
    title: string;
    postType: string;
    postContentText: string;
    postAttachmentURL: string;
    postStatus: string;
    userName:string;
    socialNetworkType: string;
}