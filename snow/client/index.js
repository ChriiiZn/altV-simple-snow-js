import * as game from "natives";

// Wetter Physik Anfang
  game.setForcePedFootstepsTracks(true);
  game.useParticleFxAsset("core_snow");
  game.setForceVehicleTrails(true)
  game.requestScriptAudioBank("ICE_FOOTSTEPS", false, 0)
  game.requestScriptAudioBank("SNOW_FOOTSTEPS", false, 0)
  game.requestNamedPtfxAsset("core_snow");
// Wetter Physik Ende

