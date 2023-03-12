import { on } from 'alt-client'
import { useSnowFootVfxWhenUnsheltered, useSnowWheelVfxWhenUnsheltered, useParticleFxAsset, requestScriptAudioBank, requestNamedPtfxAsset } from "natives";

on("connectionComplete", () => {
  //  --- Weather physic start ---
  useSnowFootVfxWhenUnsheltered(true);
  useParticleFxAsset("core_snow");
  useSnowWheelVfxWhenUnsheltered(true)
  requestScriptAudioBank("ICE_FOOTSTEPS", false, 0)
  requestScriptAudioBank("SNOW_FOOTSTEPS", false, 0)
  requestNamedPtfxAsset("core_snow");
   // --- Weather physic end ---
});

