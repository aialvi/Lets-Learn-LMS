import {
  HomeIcon,
  ClockIcon,
  UserGroupIcon,
  AcademicCapIcon,
  CreditCardIcon,
  DocumentReportIcon,
} from "@heroicons/react/outline";

export const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Courses", href: "#", icon: ClockIcon, current: false },
  { name: "Students", href: "#", icon: UserGroupIcon, current: false },
  { name: "Teachers", href: "#", icon: AcademicCapIcon, current: false },
  { name: "Accounts", href: "#", icon: CreditCardIcon, current: false },
  { name: "Reports", href: "#", icon: DocumentReportIcon, current: false },
];
