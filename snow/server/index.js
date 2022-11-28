
import * as alt from "alt-server";
import * as chat from "chat";



alt.on('playerConnect', (player) => {
  player.setWeather(13 );

});