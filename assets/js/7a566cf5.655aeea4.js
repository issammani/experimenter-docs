(self.webpackChunkexperimenter_docs=self.webpackChunkexperimenter_docs||[]).push([[4450],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return c}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(t),c=r,g=m["".concat(s,".").concat(c)]||m[c]||d[c]||a;return t?i.createElement(g,o(o({ref:n},u),{},{components:t})):i.createElement(g,o({ref:n},u))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9603:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var i=t(2122),r=t(9756),a=(t(7294),t(3905)),o={id:"getting-started-for-android-engineers",title:"Getting Started for Android Engineers",slug:"getting-started-for-android-engineers"},l="Introduction",s={unversionedId:"getting-started/engineers/getting-started-for-android-engineers",id:"getting-started/engineers/getting-started-for-android-engineers",isDocsHomePage:!1,title:"Getting Started for Android Engineers",description:"Nimbus is an experimentation platform from Mozilla.",source:"@site/docs/getting-started/engineers/android-integration.md",sourceDirName:"getting-started/engineers",slug:"/getting-started/engineers/getting-started-for-android-engineers",permalink:"/getting-started/engineers/getting-started-for-android-engineers",editUrl:"https://github.com/mozilla/experimenter-docs/edit/main/docs/getting-started/engineers/android-integration.md",tags:[],version:"current",frontMatter:{id:"getting-started-for-android-engineers",title:"Getting Started for Android Engineers",slug:"getting-started-for-android-engineers"},sidebar:"sidebar",previous:{title:"Validating Experiments",permalink:"/validating-experiments"},next:{title:"Getting started with implementation",permalink:"/getting-started/engineers/for-engineers"}},p=[{value:"Building with the Nimbus FML gradle plugin",id:"building-with-the-nimbus-fml-gradle-plugin",children:[]},{value:"<code>NimbusBuilder</code> configuration",id:"nimbusbuilder-configuration",children:[{value:"Getting errors out of <code>Nimbus</code>",id:"getting-errors-out-of-nimbus",children:[]},{value:"Connecting the <code>NimbusApi</code> to FML generated code",id:"connecting-the-nimbusapi-to-fml-generated-code",children:[]},{value:"Handling First Run experiments",id:"handling-first-run-experiments",children:[]},{value:"Using the experiments preview collection",id:"using-the-experiments-preview-collection",children:[]}]},{value:"A complete <code>NimbusBuilder</code> example",id:"a-complete-nimbusbuilder-example",children:[]}],u={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Nimbus is an experimentation platform from Mozilla."),(0,a.kt)("p",null,"This document shows you how to set up the Nimbus SDK with a new Android app. It assumes that your app is already using the Glean SDK and Android Components."),(0,a.kt)("h1",{id:"building-with-nimbus"},"Building with Nimbus"),(0,a.kt)("p",null,"Nimbus is distributed through bundled Rust code as part of Mozilla's Application Services ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mozilla/application-services/blob/main/docs/design/megazords.md"},'"Megazord"'),"."),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"app/build.gradle"),", in the ",(0,a.kt)("inlineCode",{parentName:"p"},"dependencies")," block, include the ",(0,a.kt)("inlineCode",{parentName:"p"},"implementation")," line for Nimbus:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gradle"},'dependencies {\n    \u2026\n    implementation "org.mozilla.appservices:nimbus:${Versions.mozilla_appservices}"\n    \u2026\n}\n')),(0,a.kt)("h2",{id:"building-with-the-nimbus-fml-gradle-plugin"},"Building with the Nimbus FML gradle plugin"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/fml-spec"},"Feature Manifest Language")," provides type-safe access to configuration coming out of the Nimbus SDK, and is used to configure your application features, by\ngenerating Kotlin from a Feature Manifest."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"tooling-nimbus-gradle")," plugin manages the download of the tooling, the generating of the Kotlin code, and is configured by gradle."),(0,a.kt)("p",null,"In your top-level ",(0,a.kt)("inlineCode",{parentName:"p"},"build.gradle"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gradle"},'buildscript {\n    dependencies {\n        classpath "org.mozilla.appservices:tooling-nimbus-gradle:${Versions.mozilla_appservices}"\n    }\n}\n')),(0,a.kt)("p",null,"and in ",(0,a.kt)("inlineCode",{parentName:"p"},"app/build.gradle"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-gradle"},'apply plugin: "org.mozilla.appservices.nimbus-gradle-plugin"\n\nnimbus {\n    // The path to the Nimbus feature manifest file\n    manifestFile = "nimbus.fml.yaml"\n\n    // Map from the variant name to the channel as experimenter and nimbus understand it.\n    // If nimbus\'s channels were accurately set up well for this project, then this\n    // shouldn\'t be needed.\n    channels = [\n            debug: "debug",\n            nightly: "nightly",\n            beta: "beta",\n            release: "release",\n    ]\n    \n    // This is generated by the FML and should be checked into git.\n    // It will be fetched by Experimenter (the Nimbus experiment website)\n    // and used to inform experiment configuration.\n    //\n    // *NOTE*: This value is optional, and is not necessary when Nimbus is being used\n    // as part of a library.\n    experimenterManifest = ".experimenter.yaml"\n    \n    // This is an optional value, and updates the plugin to use a copy of application\n    // services. The path should be relative to the root project directory.\n    // *NOTE*: This example will not work for all projects, but should work for Fenix, Focus, and Android Components\n    applicationServicesDir = gradle.hasProperty(\'localProperties.autoPublish.application-services.dir\') \n        ? gradle.getProperty(\'localProperties.autoPublish.application-services.dir\') : null\n}\n')),(0,a.kt)("p",null,"In this case, it should generate a file named in the ",(0,a.kt)("inlineCode",{parentName:"p"},"nimbus.fml.yaml")," file. In the case of Fenix, this is called ",(0,a.kt)("inlineCode",{parentName:"p"},"FxNimbus"),"."),(0,a.kt)("h1",{id:"the-start-up-sequence"},"The start-up sequence"),(0,a.kt)("p",null,"Before using Nimbus in your Android app, you need to start it."),(0,a.kt)("p",null,"The Nimbus SDK is a configuration store, making configuration available to the any thread, and \u2014 to a first approximation\u2014 to be immutable within the same session of the app."),(0,a.kt)("p",null,"For this reason, we want to be starting the Nimbus SDK as close to the beginning of the start of the app as possible."),(0,a.kt)("p",null,"In Firefox for Android and Focus for Android, this is done at the beginning of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Application#onCreate()")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MyApplication: Application() {\n\n    lateinit var nimbus: NimbusApi\n\n    override fun onCreate() {\n        beginNimbusSetup()\n\n\n        // do the rest of the set up here.\n\n        finishNimbusSetup()\n    }\n\n    fun beginNimbusSetup() {\n        Megazord.init()\n\n        nimbus = createNimbus(this, NIMBUS_REMOTE_SETTINGS_ENDPOINT)\n    }\n\n    fun finishNimbusSetup() {\n        nimbus.fetchExperiments()\n    }\n\n    fun createNimbus(context: Context, urlString: String): NimbusApi {\n        val isAppFirstRun = context.settings().isFirstRun\n        val customTargetingAttibutes = JSONObject().apply {\n            // Put any custom attributes you want to use to segment an audience on to\n            // target your experiments.\n            put("is_first_run", isAppFirstRun)\n        }\n\n        val appInfo = NimbusAppInfo(\n            appName = "my-app-name",\n            channel = BuildConfig.BUILD_TYPE,\n            customTargetingAttributes = customTargetingAttributes\n        )\n\n        // Use the Nimbus builder to build a NimbusApi object.\n        return NimbusBuilder(context).apply {\n            url = urlString\n            errorReporter = { message, e ->\n                Logger.error("Nimbus error: $message", e)\n            }\n\n        }.build(appInfo)\n    }\n}\n')),(0,a.kt)("p",null,"Notes:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Megazord.init()")," is called before ",(0,a.kt)("inlineCode",{parentName:"li"},"createNimbus()"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"createNimbus")," uses a ",(0,a.kt)("inlineCode",{parentName:"li"},"NimbusBuilder")," to create the Nimbus object."),(0,a.kt)("li",{parentName:"ol"},"We build a ",(0,a.kt)("inlineCode",{parentName:"li"},"JSONObject")," of custom targeting attributes."),(0,a.kt)("li",{parentName:"ol"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"nimbus.fetchExperiments()")," method is called sometime at or after the app has started.")),(0,a.kt)("h2",{id:"nimbusbuilder-configuration"},(0,a.kt)("inlineCode",{parentName:"h2"},"NimbusBuilder")," configuration"),(0,a.kt)("h3",{id:"getting-errors-out-of-nimbus"},"Getting errors out of ",(0,a.kt)("inlineCode",{parentName:"h3"},"Nimbus")),(0,a.kt)("p",null,"By design, Nimbus is deliberately unobtrusive; if it fails then it should not crash, but continue as if not enrolled in any experiments."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"errorReporter")," callback is there to connect ",(0,a.kt)("inlineCode",{parentName:"p"},"Nimbus")," to any error reporting framework in the rest of the app."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'        return NimbusBuilder(context).apply {\n            //\xa0\u2026\n            errorReporter = { message, e ->\n                Logger.error("Nimbus error: $message", e)\n            }\n            // \u2026\n        }.build(appInfo)\n')),(0,a.kt)("h3",{id:"connecting-the-nimbusapi-to-fml-generated-code"},"Connecting the ",(0,a.kt)("inlineCode",{parentName:"h3"},"NimbusApi")," to FML generated code"),(0,a.kt)("p",null,"The FML generated code has a runtime dependency on the ",(0,a.kt)("inlineCode",{parentName:"p"},"NimbusApi"),"."),(0,a.kt)("p",null,"Two callbacks can be provided to the ",(0,a.kt)("inlineCode",{parentName:"p"},"NimbusBuilder"),", one to connect the ",(0,a.kt)("inlineCode",{parentName:"p"},"NimbusApi")," object when it is created,\nand one to clear the caching in the generated code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"        // Use the Nimbus builder to build a NimbusApi object.\n        return NimbusBuilder(context).apply {\n            // \u2026\n            // Connect FxNimbus to the Nimbus SDK.\n            onCreateCallback = { nimbus ->\n                FxNimbus.initialize { nimbus }\n            }\n            onApplyCallback = {\n                FxNimbus.invalidateCachedValues()\n            }\n            // \u2026\n        }.build(appInfo)\n")),(0,a.kt)("p",null,"Note:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"onApplyCallback")," is a syntactic sugar for"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"nimbus.register(object : NimbusInterface.Observer {\n    // do after every applyPendingExperiments()\n    onApplyCallback(nimbus)\n})\n")),(0,a.kt)("p",null,"However, ",(0,a.kt)("inlineCode",{parentName:"p"},"onApplyCallback")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"NimbusBuilder")," is guaranteed to be executed on the first ",(0,a.kt)("inlineCode",{parentName:"p"},"applyPendingExperiments()"),", i.e. on every startup."),(0,a.kt)("h3",{id:"handling-first-run-experiments"},"Handling First Run experiments"),(0,a.kt)("p",null,"Since ",(0,a.kt)("inlineCode",{parentName:"p"},"fetchExperiments")," from the remote settings URL is slow, and we wish to be able have access to the Nimbus experimental configuration as early in start up as possible, Nimbus downloads and caches the experiment recipes on the ",(0,a.kt)("inlineCode",{parentName:"p"},"n"),"th run of the app and only applies them and makes them available to the app at the beginning of the ",(0,a.kt)("em",{parentName:"p"},"next")," i.e. the ",(0,a.kt)("inlineCode",{parentName:"p"},"(n + 1)"),"th run of the app."),(0,a.kt)("p",null,"Astute readers will notice that when ",(0,a.kt)("inlineCode",{parentName:"p"},"n = 0"),", i.e. the very first time the app is run, there are no experiment recipes downloaded. If Remote Settings experiment recipes JSON payload is available as a ",(0,a.kt)("inlineCode",{parentName:"p"},"raw/")," resource, it can be loaded in at first run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"        // Use the Nimbus builder to build a NimbusApi object.\n        return NimbusBuilder(context).apply {\n            // \u2026\n            isFirstRun = isAppFirstRun\n            initialExperiments = R.raw.initial_experiments\n            timeoutLoadingExperiment = TIME_OUT_LOADING_EXPERIMENT_FROM_DISK_MS // defaults to 200 (ms)\n            // \u2026\n        }.build(appInfo)\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"initial_experiments.json")," file can be downloaded, either as part of the build, or in an automated/timed job. e.g. this is the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/mozilla-mobile/fenix/blob/main/.github/workflows/fenix-update-nimbus-experiments.yml"},"Github Action workflow used by Fenix"),"."),(0,a.kt)("h3",{id:"using-the-experiments-preview-collection"},"Using the experiments preview collection"),(0,a.kt)("p",null,"The preview collection is a staging area for new experiments to be tested on the device. This should be toggleable via the UI, but should trigger a restart."),(0,a.kt)("p",null,"Adding the ",(0,a.kt)("inlineCode",{parentName:"p"},"usePreviewCollection")," flag allows the builder to configure a ",(0,a.kt)("inlineCode",{parentName:"p"},"NimbusApi")," object connected to the experiment recipes in the preview collection."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"        // Use the Nimbus builder to build a NimbusApi object.\n        return NimbusBuilder(context).apply {\n            // \u2026\n            usePreviewCollection = context.settings().nimbusUsePreview\n            // \u2026\n        }.build(appInfo)\n")),(0,a.kt)("h2",{id:"a-complete-nimbusbuilder-example"},"A complete ",(0,a.kt)("inlineCode",{parentName:"h2"},"NimbusBuilder")," example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'    return NimbusBuilder(context).apply {\n        url = urlString\n        errorReporter = { message, e ->\n            Logger.error("Nimbus error: $message", e)\n        }\n        initialExperiments = R.raw.initial_experiments\n        usePreviewCollection = context.settings().nimbusUsePreview\n        isFirstRun = isAppFirstRun\n        onCreateCallback = { nimbus ->\n            FxNimbus.initialize { nimbus }\n        }\n        onApplyCallback = {\n            FxNimbus.invalidateCachedValues()\n        }\n    }.build(appInfo)\n')))}d.isMDXComponent=!0}}]);