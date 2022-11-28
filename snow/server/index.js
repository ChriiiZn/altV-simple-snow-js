import { on } from "alt-server";

on('playerConnect', (player) => {
  player.setWeather(13);
});
