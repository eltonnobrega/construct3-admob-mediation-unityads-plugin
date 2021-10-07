"use strict";

{
    const C3 = self.C3;

    C3.Plugins.admob_mediation_unityads.Instance = class SingleGlobalInstance extends C3.SDKInstanceBase
    {
        constructor(inst, properties)
        {
            super(inst);
        }

        Release()
        {
            super.Release();
        }

        SaveToJson()
        {
            return {};
        }

        LoadFromJson(o)
        {}
    };
}