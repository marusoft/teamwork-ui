import React from "react";
import { Home, Dashboard, LibraryBooks, People, CardGiftcard } from "@material-ui/icons/";


export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <Home />,
    cName: "sidebar-text"
  },
  {
    title: "Dashboard",
    path: "/profile",
    icon: <Dashboard />,
    cName: "sidebar-text"
  },
  {
    title: "User",
    path: "/user",
    icon: <People />,
    cName: "sidebar-text"
  },
  {
    title: "Article",
    path: "/article",
    icon: <LibraryBooks />,
    cName: "sidebar-text"
  },
  {
    title: "Gif",
    path: "/gif",
    icon: <CardGiftcard />,
    cName: "sidebar-text"
  },
]