import { Time } from "@angular/common";

export interface UserPost {
    id: string;
    isScheduledPost: boolean;
    postType: string;
    postContentText: string;
    postAttachmentURL: string;
    postStatus: string;
    userName: string;
    socialNetworkType: string;
}