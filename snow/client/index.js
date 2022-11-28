import { on } from 'alt-client'
import { setForcePedFootstepsTracks, useParticleFxAsset, requestScriptAudioBank, requestNamedPtfxAsset } from "natives";

on("connectionComplete", () => {
  // Wetter Physik Anfang
  setForcePedFootstepsTracks(true);
  useParticleFxAsset("core_snow");
  setForceVehicleTrails(true)
  requestScriptAudioBank("ICE_FOOTSTEPS", false, 0)
  requestScriptAudioBank("SNOW_FOOTSTEPS", false, 0)
  requestNamedPtfxAsset("core_snow");
  // Wetter Physik Ende
});
