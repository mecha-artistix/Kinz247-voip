import AccountingIcon from "./icons/AccountingIcon";
import AdminIcon from "./icons/AdminIcon";
import AgentsIcon from "./icons/AgentsIcon";
import BillingIcon from "./icons/BillingIcon";
import CarrierIcon from "./icons/CarrierIcon";
import LogoutIcon from "./icons/LogoutIcon";
import ReportingIcon from "./icons/ReportingIcon";
import RoutingIcon from "./icons/RoutingIcon";

const size = 40;
export const navigation = [
  {
    name: "Accounting",
    icon: <AccountingIcon size={size} />,
    link: "#Accounting",
    children: [
      {
        name: "Account Dashboard",
        link: "#",
      },
      {
        name: "Account Rate Deck",
        link: "#",
      },
      {
        name: "Account Hosts",
        link: "#",
      },
      {
        name: "Suspend Limits",
        link: "#",
      },
      {
        name: "Input Value",
        link: "#",
      },
    ],
  },
  {
    name: "Carriers",
    icon: <CarrierIcon size={size} />,
    link: "#Carriers",
  },
  {
    name: "Routing",
    icon: <RoutingIcon size={size} />,
    link: "#Routing",
  },
  {
    name: "Agents",
    icon: <AgentsIcon size={size} />,
    link: "#Agents",
  },
  {
    name: "Billing",
    icon: <BillingIcon size={size} />,
    link: "#Billing",
  },
  {
    name: "Reporting",
    icon: <ReportingIcon size={size} />,
    link: "#Reporting",
  },
  {
    name: "Admin",
    icon: <AdminIcon size={size} />,
    link: "#Admin",
  },
  {
    name: "Logout",
    icon: <LogoutIcon size={size} />,
    link: "#Logout",
  },
];
