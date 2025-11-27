import express from "express";
import {message} from '../controllers/chatbot.message.js';

const Router =  express.Router();

Router.post("/message", message)

export default Router;