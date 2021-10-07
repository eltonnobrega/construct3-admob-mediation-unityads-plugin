"use strict";

{
    const SDK = self.SDK;
    const lang = self.lang;

    const PLUGIN_ID = "admob_mediation_unityads";
    const PLUGIN_VERSION = "1.0.0.0";
    const PLUGIN_CATEGORY = "monetisation";

    let app = null;

    const PLUGIN_CLASS = SDK.Plugins.admob_mediation_unityads = class admob_mediation_unityads extends SDK.IPluginBase
    {
        constructor()
        {
            super(PLUGIN_ID);
            SDK.Lang.PushContext("plugins." + PLUGIN_ID.toLowerCase());
            this._info.SetIcon("icon.svg", "image/svg+xml");
            this._info.SetName(lang(".name"));
            this._info.SetDescription(lang(".description"));
            this._info.SetVersion(PLUGIN_VERSION);
            this._info.SetCategory(PLUGIN_CATEGORY);
            this._info.SetAuthor("eltonnobrega");
            this._info.SetHelpUrl(lang(".help-url"));
            this._info.SetIsSingleGlobal(true);
            this._info.SetIsDeprecated(false);
            this._info.SetSupportsEffects(false);
            this._info.SetMustPreDraw(false);
            this._info.SetCanBeBundled(true);

            //Add Cordova Dependency
            this._info.AddCordovaPluginReference(
            {
                id: "cordova_admob_mediation_unityads"
            });

            SDK.Lang.PushContext(".properties");
            this._info.SetProperties([
            ]);
            SDK.Lang.PopContext(); // .properties
            SDK.Lang.PopContext();
        }
    };
    PLUGIN_CLASS.Register(PLUGIN_ID, PLUGIN_CLASS);
}