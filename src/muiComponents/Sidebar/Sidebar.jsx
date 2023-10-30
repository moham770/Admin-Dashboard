import {
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  Avatar,
  ListItemText,
  styled,
  Typography,
  Tooltip,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useTheme } from "@mui/material/styles";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MuiDrawer from "@mui/material/Drawer";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import LiveHelpOutlinedIcon from "@mui/icons-material/LiveHelpOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import { grey } from "@mui/material/colors";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import logo from "../../assets/WhatsApp Image 2023-10-09 at 03.07.48_b0a049f2.jpg"

const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Sidebar = ({ handleDrawerClose, open, DrawerHeader }) => {
  const theme = useTheme();
  const { pathname } = useLocation();

  const Array1 = [
    {
      text: "Dashboard",
      icon: (
        <HomeOutlinedIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
          }}
        />
      ),
      path: "/",
    },
    {
      text: "Manage Team",
      icon: (
        <GroupOutlinedIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
          }}
        />
      ),
      path: "/team",
    },
    {
      text: "Contacts information",
      icon: (
        <ContactsOutlinedIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
          }}
        />
      ),
      path: "/contacts",
    },
    {
      text: "Invoices Balances",
      icon: (
        <ReceiptOutlinedIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
          }}
        />
      ),
      path: "/invoices",
    },
  ];

  const Array2 = [
    {
      text: "profile Form",
      icon: (
        <Person2OutlinedIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
          }}
        />
      ),
      path: "/form",
    },
    {
      text: "calendar",
      icon: (
        <CalendarMonthOutlinedIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
          }}
        />
      ),
      path: "/calender",
    },
    {
      text: "FAQ Page",
      icon: (
        <LiveHelpOutlinedIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
          }}
        />
      ),
      path: "/faq",
    },
  ];

  const Array3 = [
    {
      text: "Bar Chart",
      icon: (
        <BarChartOutlinedIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
          }}
        />
      ),
      path: "/barchart",
    },
    {
      text: "Pie Chart",
      icon: (
        <PieChartOutlinedIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
          }}
        />
      ),
      path: "/piechart",
    },
    {
      text: "Line Chart",
      icon: (
        <TimelineOutlinedIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
          }}
        />
      ),
      path: "/linechart",
    },
    {
      text: "Geography Chart",
      icon: (
        <MapOutlinedIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center",
          }}
        />
      ),
      path: "/geography",
    },
  ];

  const navigate = useNavigate();
  return (
    <>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        <Avatar
          alt="Mohamed Ayman"
          src={logo}
          sx={{
            my: 1,
            width: open ? "77px" : "40px",
            height: open ? "77px" : "40px",
            transition: "0.25s",
            mx: "auto",
          }}
        />
        <Typography
          align="center"
          fontSize={open ? 15 : 0}
          sx={{ transition: "0.25s" }}>
          Mohamed Ayman
        </Typography>
        <Typography
          fontWeight="bold"
          mb={1}
          color={theme.palette.info.main}
          align="center"
          fontSize={open ? 15 : 0}
          sx={{ transition: "0.25s" }}>
          Admin
        </Typography>

        <Divider />
        <List>
          {Array1.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
              <Tooltip  placement="right" title={open ?"" :item.text}>
                <ListItemButton
                  onClick={() => {
                    navigate(item.path);
                  }}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    bgcolor:
                      pathname === item.path
                        ? theme.palette.mode === "dark"
                          ? grey[800]
                          : grey[400]
                        : null,
                    "&:hover": {
                      bgcolor:
                        pathname === item.path
                          ? theme.palette.mode === "dark"
                            ? grey[800]
                            : grey[400]
                          : theme.palette.mode === "light"
                          ? grey[300]
                          : grey[900],
                    },
                  }}>
                  {item.icon}

                  <ListItemText
                    primary={item.text}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </Tooltip>
            </ListItem>
          ))}
        </List>
        <Divider />

        <List>
          {Array2.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
              <Tooltip  placement="right" title={open ?"" :item.text}>
                <ListItemButton
                  onClick={() => {
                    navigate(item.path);
                  }}
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    bgcolor:
                      pathname === item.path
                        ? theme.palette.mode === "dark"
                          ? grey[800]
                          : grey[400]
                        : null,
                    "&:hover": {
                      bgcolor:
                        pathname === item.path
                          ? theme.palette.mode === "dark"
                            ? grey[800]
                            : grey[400]
                          : theme.palette.mode === "light"
                          ? grey[300]
                          : grey[900],
                    },
                  }}>
                  {item.icon}

                  <ListItemText
                    primary={item.text}
                    sx={{ opacity: open ? 1 : 0 }}
                  />
                </ListItemButton>
              </Tooltip>
            </ListItem>
          ))}
        </List>

        <Divider />
        <List>
          {Array3.map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>

              <Tooltip placement="right" title={open ?"" :item.text}>

  <ListItemButton
                onClick={() => {
                  navigate(item.path);
                }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  bgcolor:
                    pathname === item.path
                      ? theme.palette.mode === "dark"
                        ? grey[800]
                        : grey[400]
                      : null,
                  "&:hover": {
                    bgcolor:
                      pathname === item.path
                        ? theme.palette.mode === "dark"
                          ? grey[800]
                          : grey[400]
                        : theme.palette.mode === "light"
                        ? grey[300]
                        : grey[900],
                  },
                }}>
                {item.icon}

                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>

              </Tooltip>
            
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
