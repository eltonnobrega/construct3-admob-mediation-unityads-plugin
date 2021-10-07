"use strict";

{
    const SDK = self.SDK;

    const PLUGIN_CLASS = SDK.Plugins.admob_mediation_unityads;

    PLUGIN_CLASS.Instance = class admob_mediation_unityadsInstance extends SDK.IInstanceBase
    {
        constructor(sdkType, inst)
        {
            super(sdkType, inst);
        }
        Release()
        {}
        OnCreate()
        {}
        OnPropertyChanged(id, value)
        {}
        LoadC2Property(name, valueString)
        {
            return false; // not handled
        }
    };
}