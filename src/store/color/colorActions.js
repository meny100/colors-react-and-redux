import { RED, GREEN, BLUE } from "./colorTypes";

export const changeRed = value => ({
    type: RED,
    payload: { value }
    
  });
export const changeGreen = value => ({
    type: GREEN,
    payload: { value }
  });
export const changeBlue = value => ({
    type: BLUE,
    payload: { value }
  });