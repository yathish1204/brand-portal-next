import IMAGES from "./images";
import { MdDashboardCustomize } from "react-icons/md";
import { TbIcons } from "react-icons/tb";
import { IoIosImages } from "react-icons/io";
import { TbChartInfographic } from "react-icons/tb";
import { FaRegFilePdf } from "react-icons/fa";
import { PiFilePpt } from "react-icons/pi";

export const tabs = [
  {
    title: "All",
    href: "/all",
    src: IMAGES.All,
    icon: <MdDashboardCustomize />,
    bgColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    textColor: "",
    iconColor: "",
  },
  {
    title: "Icons",
    href: "/icons",
    src: IMAGES.Icon,
    icon: <TbIcons />,
    bgColor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    textColor: "",
    iconColor: "",
  },
  {
    title: "Images",
    href: "/images",
    src: IMAGES.Images,
    icon: <IoIosImages />,
    bgColor: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    textColor: "",
    iconColor: "",
  },
  {
    title: "Infographics",
    href: "/infographics",
    src: IMAGES.Infographics,
    icon: <TbChartInfographic />,
    bgColor: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    textColor: "",
    iconColor: "",
  },
  {
    title: "PPT",
    href: "/ppt",
    src: IMAGES.PPT,
    icon: <PiFilePpt />,
    bgColor: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    textColor: "",
    iconColor: "",
  },
  {
    title: "PDF",
    href: "/pdf",
    src: IMAGES.PDF,
    icon: <FaRegFilePdf />,
    bgColor: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    textColor: "",
    iconColor: "",
  },
];
