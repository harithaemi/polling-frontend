// src/socket.js
import { io } from "socket.io-client";

const socket = io("https://polling-backend-xr61.onrender.com");

export default socket;
