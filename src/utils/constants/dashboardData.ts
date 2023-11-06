import { ICONS } from "../../assets";
import { COLOR_LAVENDAR, COLOR_LIGHT_GREEN, COLOR_LIGHT_ORANGE, COLOR_LIGHT_PINK, COLOR_LIGHT_PURPLE, COLOR_LIGHT_YELLOW } from "../colors/colors";

export const tilesData = [
  {
    id:1,
    text : 'Calender',
    color : COLOR_LIGHT_PINK,
    image : ICONS.CALENDAR,
  },
  {
    id:2,
    text : 'Attendance',
    color : COLOR_LAVENDAR,
    image : ICONS.ATTENDANCE,
  },
  {
    id:3,
    text : 'General Insights',
    color : COLOR_LIGHT_GREEN,
    image : ICONS.INSIGHTS,
  },
  {
    id:4,
    text : 'Announcements',
    color : COLOR_LIGHT_ORANGE,
    image : ICONS.ANNOUNCEMENTS,
  },{
    id:5,
    text : 'Messages',
    color : COLOR_LIGHT_PURPLE,
    image : ICONS.MESSAGES,
  },
  {
    id:6,
    text : 'Entry/Dispersal',
    color : COLOR_LIGHT_YELLOW,
    image : ICONS.ENTRY,
  }
]