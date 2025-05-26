import { MdDashboard } from "react-icons/md";
import { RiArrowUpDownLine } from "react-icons/ri";
import { IoCalendar,IoCall } from "react-icons/io5";
import { FaRegCalendarPlus } from "react-icons/fa";
import { ImStatsBars } from "react-icons/im";
import { BsChatDotsFill } from "react-icons/bs";
export const generalBtn = [
  { id: 1, label: 'Dashboard', icon: MdDashboard, active: true },
  { id: 2, label: 'History', icon: RiArrowUpDownLine, active: false },
  { id: 3, label: 'Calender', icon: IoCalendar, active: false },
  { id: 4, label: 'Appointments', icon: FaRegCalendarPlus, active: false },
  { id: 5, label: 'Statistics', icon: ImStatsBars, active: false },
];
export const toolsBtn = [
    { id: 1, label: 'Chat', icon: BsChatDotsFill, active: false },
  { id: 2, label: 'Support', icon: IoCall, active: false },
]
