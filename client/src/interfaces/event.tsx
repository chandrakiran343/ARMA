import { Attendance } from "./attendance";
import { Faculty, Forum } from "./user";

type Status =
  | "AWAITING BUDGET APPROVAL"
  | "REQUESTED BUDGET CHANGES"
  | "BUDGET CHANGES UPDATED"
  | "BUDGET REJECTED"
  | "AWAITING SAC APPROVAL"
  | "REQUESTED CHANGES BY SAC"
  | "SAC CHANGES UPDATED"
  | "APPROVED"
  | "REJECTED"
  | "COMPLETED";

export interface Equipment{
  name:string;
  totalCount :number;
  facultyIncharge: Faculty
}

export interface Hall{
  name:string;
  block:string;
  hallInfo:string;
  capacity:number;
}

type TimeSlot = "Morning" | "Afternoon"
interface EventHalls {
  date:Date;
  timeSlot:TimeSlot,
  hall:Hall
  
}
export interface Event {
  name: string;
  description: string;
  forumID: string | Forum;
  attendanceDocID?: string | Attendance;
  eventStatus: Status | "COMPLETE";
  hasBudget?: boolean;
  budgetStatus?: Status;
  eventDates?: Date[];
  eventProposalDocPath?: string;
  equipment : Equipment[];
  halls : EventHalls[];
  budgetDocPath?: string;
  reportDocPath?: string;
  mediaFilePaths?: string[];
  FOComments?: string;
  SACComments?: string;
}
