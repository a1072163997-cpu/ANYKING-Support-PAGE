import{
c as H,j as e,r as d,u as P,L as z
}
from"./index-SnmwPgx3.js";
import{
S as O,A as V
}
from"./SiteLayout-BOFz-gxU.js";
import{
c as W,B as U
}
from"./button-a973ZYPG.js";
import{
c as u
}
from"./utils-CKl3u0Qr.js";
import{
S as Z
}
from"./search-pTRloydc.js";
import{
S as G
}
from"./shield-alert-Czr8Fvz0.js";
import{
A as q
}
from"./arrow-up-right-Ccwi4Ccd.js";
import"./package-check-DpOTnzNK.js";
import"./clsx-B-dksMZM.js";
const $=[["rect",{
width:"18",height:"12",x:"3",y:"4",rx:"2",ry:"2",key:"1qhy41"
}
],["line",{
x1:"2",x2:"22",y1:"20",y2:"20",key:"ni3hll"
}
]],j=H("laptop-minimal",$);
const Y=[["path",{
d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"
}
],["path",{
d:"m2 22 3-3",key:"19mgm9"
}
],["path",{
d:"M7.5 13.5 10 11",key:"7xgeeb"
}
],["path",{
d:"M10.5 16.5 13 14",key:"10btkg"
}
],["path",{
d:"m18 3-4 4h6l-4 4",key:"16psg9"
}
]],T=H("plug-zap",Y);
const Q=[["circle",{
cx:"10",cy:"7",r:"1",key:"dypaad"
}
],["circle",{
cx:"4",cy:"20",r:"1",key:"22iqad"
}
],["path",{
d:"M4.7 19.3 19 5",key:"1enqfc"
}
],["path",{
d:"m21 3-3 1 2 2Z",key:"d3ov82"
}
],["path",{
d:"M9.26 7.68 5 12l2 5",key:"1esawj"
}
],["path",{
d:"m10 14 5 2 3.5-3.5",key:"v8oal5"
}
],["path",{
d:"m18 12 1-1 1 1-1 1Z",key:"1bh22v"
}
]],L=H("usb",Q),J=W("inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{
variants:{
variant:{
default:"border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",outline:"text-foreground"
}

}
,defaultVariants:{
variant:"default"
}

}
);
function x({
className:t,variant:s,...o
}
){
return e.jsx("div",{
className:u(J({
variant:s
}
),t),...o
}
)
}
const f=d.forwardRef(({
className:t,...s
}
,o)=>e.jsx("div",{
ref:o,className:u("rounded-xl border bg-card text-card-foreground shadow",t),...s
}
));
f.displayName="Card";
const w=d.forwardRef(({
className:t,...s
}
,o)=>e.jsx("div",{
ref:o,className:u("flex flex-col space-y-1.5 p-6",t),...s
}
));
w.displayName="CardHeader";
const k=d.forwardRef(({
className:t,...s
}
,o)=>e.jsx("div",{
ref:o,className:u("font-semibold leading-none tracking-tight",t),...s
}
));
k.displayName="CardTitle";
const D=d.forwardRef(({
className:t,...s
}
,o)=>e.jsx("div",{
ref:o,className:u("text-sm text-muted-foreground",t),...s
}
));
D.displayName="CardDescription";
const g=d.forwardRef(({
className:t,...s
}
,o)=>e.jsx("div",{
ref:o,className:u("p-6 pt-0",t),...s
}
));
g.displayName="CardContent";
const ee=d.forwardRef(({
className:t,...s
}
,o)=>e.jsx("div",{
ref:o,className:u("flex items-center p-6 pt-0",t),...s
}
));
ee.displayName="CardFooter";
const R=d.forwardRef(({
className:t,type:s,...o
}
,l)=>e.jsx("input",{
type:s,className:u("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",t),ref:l,...o
}
));
R.displayName="Input";
const K=d.forwardRef(({
className:t,...s
}
,o)=>e.jsx("div",{
className:"relative w-full overflow-auto",children:e.jsx("table",{
ref:o,className:u("w-full caption-bottom text-sm",t),...s
}
)
}
));
K.displayName="Table";
const F=d.forwardRef(({
className:t,...s
}
,o)=>e.jsx("thead",{
ref:o,className:u("[&_tr]:border-b",t),...s
}
));
F.displayName="TableHeader";
const E=d.forwardRef(({
className:t,...s
}
,o)=>e.jsx("tbody",{
ref:o,className:u("[&_tr:last-child]:border-0",t),...s
}
));
E.displayName="TableBody";
const oe=d.forwardRef(({
className:t,...s
}
,o)=>e.jsx("tfoot",{
ref:o,className:u("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",t),...s
}
));
oe.displayName="TableFooter";
const C=d.forwardRef(({
className:t,...s
}
,o)=>e.jsx("tr",{
ref:o,className:u("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",t),...s
}
));
C.displayName="TableRow";
const y=d.forwardRef(({
className:t,...s
}
,o)=>e.jsx("th",{
ref:o,className:u("h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",t),...s
}
));
y.displayName="TableHead";
const S=d.forwardRef(({
className:t,...s
}
,o)=>e.jsx("td",{
ref:o,className:u("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",t),...s
}
));
S.displayName="TableCell";
const te=d.forwardRef(({
className:t,...s
}
,o)=>e.jsx("caption",{
ref:o,className:u("mt-4 text-sm text-muted-foreground",t),...s
}
));
te.displayName="TableCaption";
const se=[{
brand:"Apple",early:"2015-2017 mostly Mini DisplayPort / Thunderbolt 2 transition models",middle:"2018-2020 USB-C / Thunderbolt 3 becomes the norm",recent:"2021-2026 USB-C / Thunderbolt 4 / 5 is standard",adapter:"Older laptops usually need MiniDP or HDMI;
 newer ones often work with one full-featured USB-C cable"
}
,{
brand:"Dell",early:"2015-2017 HDMI + Mini DP were common;
 USB-C started to spread",middle:"2018-2020 XPS / Latitude moved mostly to USB-C",recent:"2021-2026 USB-C / Thunderbolt is standard",adapter:"Older models often need HDMI or MiniDP;
 newer ones usually connect directly"
}
,{
brand:"Lenovo",early:"2015-2017 ThinkPad often used HDMI + Mini DP",middle:"2018-2020 USB-C spread quickly",recent:"2021-2026 USB-C / Thunderbolt / HDMI all coexist",adapter:"Older ThinkPad models often need HDMI or DP adapters"
}
,{
brand:"HP",early:"2015-2017 HDMI was more common, USB-C was still rare",middle:"2018-2020 Spectre / EliteBook adopted USB-C widely",recent:"2021-2026 USB-C + HDMI combinations are stable",adapter:"Older laptops usually start with HDMI;
 some business models also need a power cable"
}
,{
brand:"ASUS",early:"2015-2017 HDMI, USB-A, and some Mini DP were common",middle:"2018-2020 ZenBook / ROG moved gradually to USB-C",recent:"2021-2026 USB-C / Thunderbolt and HDMI often coexist",adapter:"Creator and gaming models vary a lot, so the exact model matters"
}
,{
brand:"Acer",early:"2015-2017 mainly HDMI",middle:"2018-2020 Swift / Predator models started moving toward USB-C",recent:"2021-2026 direct USB-C connection is much more common",adapter:"Older models often use HDMI;
 newer ones are more likely to use USB-C"
}
,{
brand:"Microsoft Surface",early:"2015-2017 Surface Connect + some MiniDP",middle:"2018-2020 still centered on Surface Connect",recent:"2021-2026 USB-C is more common, but some models still need adapters",adapter:"Surface Connect adapters are the key item"
}
,{
brand:"Huawei / Honor",early:"2015-2017 mostly HDMI / USB-A",middle:"2018-2020 MateBook models started adopting USB-C",recent:"2021-2026 USB-C / Thunderbolt is more consistent",adapter:"Slim models often work directly over USB-C;
 older ones should check HDMI"
}
,{
brand:"Samsung",early:"2015-2017 mixed ports, with HDMI common",middle:"2018-2020 Galaxy Book models gradually shifted to USB-C",recent:"2021-2026 USB-C is the main option",adapter:"Older models should check HDMI;
 newer ones often connect directly"
}
,{
brand:"LG / Xiaomi / Razer",early:"2015-2017 port layouts varied a lot",middle:"2018-2020 thin-and-light models moved toward USB-C",recent:"2021-2026 USB-C / Thunderbolt / HDMI are mixed together",adapter:"Identify the exact model first, then choose the cable"
}
],re=[{
brand:"Apple",commonPorts:"2015-2017 Mini DisplayPort / Thunderbolt 2;
 2018+ USB-C / Thunderbolt",directPath:"MacBook Air / Pro 2018+ usually direct-connect with USB-C",fallbackPath:"2015-2017 models often need HDMI conversion or H5 DisplayLink"
}
,{
brand:"Dell",commonPorts:"XPS and Latitude often USB-C;
 Inspiron often mixes HDMI and USB-A",directPath:"XPS / modern Latitude usually direct-connect with USB-C",fallbackPath:"Inspiron / older business models often need HDMI or H5 DisplayLink"
}
,{
brand:"Lenovo",commonPorts:"ThinkPad often USB-C + HDMI;
 IdeaPad often HDMI first",directPath:"ThinkPad X1 / Yoga / newer T and E models often direct-connect",fallbackPath:"IdeaPad and older ThinkPad models often need HDMI or H5 DisplayLink"
}
,{
brand:"HP",commonPorts:"Spectre / EliteBook / Envy / Pavilion often mix USB-C and HDMI",directPath:"Spectre and EliteBook are most likely to direct-connect",fallbackPath:"Pavilion / ProBook / older Envy often need HDMI or H5 DisplayLink"
}
,{
brand:"ASUS",commonPorts:"ZenBook / ROG / VivoBook vary a lot between USB-C, HDMI, and USB-A",directPath:"ZenBook and many ROG / creator models often direct-connect",fallbackPath:"Older VivoBook and budget models often need HDMI or H5 DisplayLink"
}
,{
brand:"Acer",commonPorts:"Swift / Nitro newer models often USB-C;
 Aspire often HDMI-first",directPath:"Swift and newer Nitro models often direct-connect",fallbackPath:"Aspire and older budget models often need HDMI or H5 DisplayLink"
}
,{
brand:"Microsoft Surface",commonPorts:"Surface Connect plus USB-C on newer models;
 older ones may use MiniDP",directPath:"Surface Laptop 3 / Pro 7 and newer often support USB-C direct",fallbackPath:"Surface Laptop 1 / 2 and older models often need Surface or MiniDP adapters first"
}
,{
brand:"Samsung",commonPorts:"Galaxy Book models mostly USB-C with HDMI on many configs",directPath:"Galaxy Book Flex / Pro / Book4 families often direct-connect",fallbackPath:"Older Samsung laptops may need HDMI or a special adapter path"
}
,{
brand:"LG / Razer",commonPorts:"LG gram usually USB-C + HDMI;
 Razer Blade often USB-C / Thunderbolt + HDMI",directPath:"Modern LG gram and Razer Blade models often direct-connect",fallbackPath:"Older ultrabooks or limited-output configurations may need H5 DisplayLink"
}
],ae=[{
id:"macbook-air-m1-m3",brand:"Apple",family:"MacBook Air M1 / M2 / M3",aliases:["macbook air m1","macbook air m2","macbook air m3","air m1","air m2","air m3","macbook air 2020","macbook air 2021","macbook air 2022","macbook air 2023","macbook air 2024","macbook air 2025","苹果笔记本 air m1","苹果笔记本 air m2","苹果笔记本 air m3"],yearRange:[2020,2026],connection:"USB-C / Thunderbolt direct",cable:"Full-featured USB-C cable (with DP Alt Mode)",cableKey:"usb-c-to-c",fitLabel:"High",confidenceLabel:"High",notes:["If your display supports USB-C video input, one cable is usually enough.","If you want power delivery and display output together, choose a full-featured USB-C cable."]
}
,{
id:"macbook-pro-2016-2019",brand:"Apple",family:"MacBook Pro 2016 - 2019",aliases:["macbook pro","mbp","pro 2016","pro 2017","pro 2018","pro 2019"],yearRange:[2016,2019],connection:"USB-C / Thunderbolt 3 direct",cable:"Full-featured USB-C cable",cableKey:"usb-c-to-c",fitLabel:"High",confidenceLabel:"Strong",notes:["This generation is mostly USB-C already.","If you use a dock, you can also connect the display through the dock."]
}
,{
id:"macbook-air-retina-2018-2019",brand:"Apple",family:"MacBook Air Retina 2018 / 2019",aliases:["macbook air 2018","macbook air 2019","air retina","macbook air retina"],yearRange:[2018,2019],connection:"USB-C / Thunderbolt 3 direct",cable:"Full-featured USB-C cable",cableKey:"usb-c-to-c",fitLabel:"High",confidenceLabel:"High",notes:["This is the first mainstream Air generation that moved into USB-C territory.","Use USB-C to USB-C if the laptop port supports video output."]
}
,{
id:"macbook-legacy",brand:"Apple",family:"MacBook Pro / Air 2015-2017",aliases:["macbook 2015","macbook 2016","macbook 2017","macbook pro 2015","macbook air 2015","macbook air 2016","macbook air 2017","mini displayport","thunderbolt 2"],yearRange:[2015,2017],connection:"Mini DisplayPort / Thunderbolt 2, usually no USB-C video output",cable:"H5 DisplayLink Adapter",cableKey:"h5-hdmi-adapter",fitLabel:"Medium",confidenceLabel:"Strong",notes:["These older laptops should not be judged as USB-C direct-connect devices.","Install the H5 DisplayLink driver before connecting the adapter."]
}
,{
id:"dell-xps",brand:"Dell",family:"XPS 13 / 15 / 17",aliases:["dell xps","xps 13","xps 15","xps 17"],yearRange:[2018,2026],connection:"USB-C / Thunderbolt direct",cable:"Full-featured USB-C cable",cableKey:"usb-c-to-c",fitLabel:"High",confidenceLabel:"High",notes:["Recent XPS models are almost always USB-C.","If you want to charge and display at the same time, choose a cable that supports both video and power delivery."]
}
,{
id:"dell-latitude-modern",brand:"Dell",family:"Dell Latitude 5000 / 7000 series 2021-2026",aliases:["dell latitude","latitude 5420","latitude 5430","latitude 7420","latitude 7430"],yearRange:[2021,2026],connection:"Usually USB-C / Thunderbolt direct, with HDMI available on many business models",cable:"Video-capable USB-C cable first;
 H5 DisplayLink Adapter if native video is unavailable",cableKey:"usb-c-to-c",fitLabel:"Medium-high",confidenceLabel:"Strong",notes:["Recent Latitude models commonly support USB-C display output, but exact business configurations can vary.","If a company-issued laptop blocks or lacks USB-C video, confirm whether H5 DisplayLink is permitted by corporate policy."]
}
,{
id:"dell-precision-modern",brand:"Dell",family:"Dell Precision 5000 / 7000 series 2020-2026",aliases:["dell precision","precision 5570","precision 5680","precision 7780"],yearRange:[2020,2026],connection:"USB-C / Thunderbolt direct on most mobile workstations",cable:"Full-featured USB-C cable",cableKey:"usb-c-to-c",fitLabel:"High",confidenceLabel:"Strong",notes:["Precision machines usually include strong video-capable USB-C support.","If a dock or corporate policy changes port behavior, verify the approved DisplayLink workflow."]
}
,{
id:"dell-inspiron-older",brand:"Dell",family:"Dell Inspiron 13 / 15 / 5000 series 2015-2020",aliases:["dell inspiron","inspiron 15","inspiron 5000","inspiron 3000"],yearRange:[2015,2020],connection:"Often HDMI + USB-A, with USB-C missing or data-only on many models",cable:"H5 DisplayLink Adapter",cableKey:"h5-hdmi-adapter",fitLabel:"Medium",confidenceLabel:"Brand-level",notes:["This is a common support case: HDMI can carry video, while USB-A/USB-C may only provide power or data.","If native video output is insufficient, use the H5 DisplayLink adapter and driver."]
}
,{
id:"lenovo-thinkpad-x1",brand:"Lenovo",family:"ThinkPad X1 Carbon / X1 Yoga",aliases:["thinkpad x1 carbon","x1 carbon","x1 yoga","联想 thinkpad"],yearRange:[2018,2026],connection:"USB-C / Thunderbolt direct",cable:"Full-featured USB-C cable",cableKey:"usb-c-to-c",fitLabel:"High",confidenceLabel:"High",notes:["There is a high chance this will work directly over USB-C video output.","Some office models still need confirmation that the USB-C port supports video."]
}
,{
id:"lenovo-thinkpad-t14",brand:"Lenovo",family:"ThinkPad T14 / T14s / T16",aliases:["thinkpad t14","thinkpad t14s","thinkpad t16","t14 gen 1","t14 gen 2","t14 gen 3","t14 gen 4"],yearRange:[2020,2026],connection:"USB-C / Thunderbolt direct",cable:"Full-featured USB-C cable",cableKey:"usb-c-to-c",fitLabel:"High",confidenceLabel:"Strong",notes:["Modern ThinkPad T-series machines usually support video over USB-C.","If a corporate build disables video over USB-C, verify whether H5 DisplayLink is permitted."]
}
,{
id:"lenovo-thinkpad-t",brand:"Lenovo",family:"ThinkPad T / E / L series",aliases:["thinkpad t","thinkpad e","thinkpad l","联想 t 系列","联想 e 系列"],yearRange:[2015,2026],connection:"May be HDMI or USB-C direct, depending on model",cable:"USB-C direct if the Type-C port supports DisplayPort;
 otherwise verify H5 DisplayLink",cableKey:"h5-hdmi-adapter",fitLabel:"Medium",confidenceLabel:"Brand-level",notes:["These series vary too much to judge by brand alone.","Older models more often use HDMI, while newer ones are more likely to use USB-C with DisplayPort."]
}
,{
id:"lenovo-yoga-modern",brand:"Lenovo",family:"Lenovo Yoga / Slim / IdeaPad Pro 2020-2026",aliases:["lenovo yoga","yoga 7","yoga 7i","yoga 9i","lenovo slim","ideapad pro"],yearRange:[2020,2026],connection:"Usually USB-C direct on Yoga / Slim models;
 IdeaPad configurations vary",cable:"Video-capable USB-C cable if the port supports DisplayPort;
 otherwise H5 DisplayLink Adapter",cableKey:"usb-c-to-c",fitLabel:"Medium-high",confidenceLabel:"Brand-level",notes:["Yoga and Slim models are more likely to support USB-C video than entry-level IdeaPad models.","If the exact Type-C port supports data only, verify the HDMI or H5 DisplayLink path."]
}
,{
id:"lenovo-ideapad-older",brand:"Lenovo",family:"Lenovo IdeaPad 3 / 5 2016-2020",aliases:["lenovo ideapad","ideapad 3","ideapad 5","ideapad 330","ideapad 520"],yearRange:[2016,2020],connection:"Often HDMI + USB-A;
 USB-C video support is inconsistent",cable:"H5 DisplayLink Adapter",cableKey:"h5-hdmi-adapter",fitLabel:"Medium",confidenceLabel:"Brand-level",notes:["Older IdeaPad models are common HDMI fallback cases.","If USB-C direct does not show an image, verify HDMI or H5 DisplayLink support."]
}
,{
id:"hp-spectre-elitebook",brand:"HP",family:"Spectre / EliteBook",aliases:["hp spectre","elitebook","惠普 spectre"],yearRange:[2018,2026],connection:"USB-C / Thunderbolt direct",cable:"Full-featured USB-C cable",cableKey:"usb-c-to-c",fitLabel:"High",confidenceLabel:"High",notes:["Most high-end thin-and-light models are well suited to direct display connection.","Older business laptops may still be HDMI-only."]
}
,{
id:"hp-omen-victus",brand:"HP",family:"OMEN / Victus gaming laptops",aliases:["hp omen","victus","omen 16","victus 15","victus 16"],yearRange:[2020,2026],connection:"Usually USB-C plus HDMI, but exact video support depends on the model",cable:"Video-capable USB-C first;
 HDMI or H5 DisplayLink if USB-C is data-only",cableKey:"usb-c-to-c",fitLabel:"Medium-high",confidenceLabel:"Brand-level",notes:["Gaming laptops often have both HDMI and USB-C, but the USB-C port still needs video support.","If USB-C does not carry video, the HDMI path is the safer fallback."]
}
,{
id:"hp-pavilion-envy-older",brand:"HP",family:"HP Pavilion / Envy 2015-2020",aliases:["hp pavilion","hp envy","pavilion 15","envy x360"],yearRange:[2015,2020],connection:"Often HDMI + USB-A;
 some USB-C ports may not support display output",cable:"H5 DisplayLink Adapter",cableKey:"h5-hdmi-adapter",fitLabel:"Medium",confidenceLabel:"Brand-level",notes:["Many Pavilion and older Envy configurations include HDMI but not full USB-C video output.","H5 DisplayLink is the fallback when native video-output paths are insufficient."]
}
,{
id:"hp-probook-older",brand:"HP",family:"HP ProBook / older business laptops 2015-2020",aliases:["hp probook","probook 430","probook 440","probook 450"],yearRange:[2015,2020],connection:"Often HDMI for video;
 USB-C support varies by generation",cable:"H5 DisplayLink Adapter",cableKey:"h5-hdmi-adapter",fitLabel:"Medium",confidenceLabel:"Brand-level",notes:["Older business laptops often have HDMI even when USB-C video support is limited.","Use H5 DisplayLink when native connection cannot provide the required display path."]
}
,{
id:"surface-laptop-pro",brand:"Microsoft",family:"Surface Laptop / Surface Pro",aliases:["surface laptop","surface pro","surface book"],yearRange:[2017,2026],connection:"Surface Connect or USB-C",cable:"USB-C direct on newer Surface models;
 H5 DisplayLink path for limited-output models",cableKey:"h5-hdmi-adapter",fitLabel:"Medium-high",confidenceLabel:"Strong",notes:["For Surface, the key factor is the generation and port layout, not just the brand.","USB-C versions are easier;
 verify the exact external-display limit before selecting H5 DisplayLink."]
}
,{
id:"surface-laptop-1-2",brand:"Microsoft",family:"Surface Laptop 1 / 2",aliases:["surface laptop 1","surface laptop 2","surface laptop go","surface pro 6"],yearRange:[2017,2019],connection:"Surface Connect with limited video ports;
 older models often rely on MiniDP or special adapters",cable:"H5 DisplayLink Adapter after confirming Surface driver support",cableKey:"h5-hdmi-adapter",fitLabel:"Medium",confidenceLabel:"Strong",notes:["These are common support cases because they are not simple USB-C direct-connect machines.","Confirm that the Surface model and operating system support the H5 DisplayLink driver."]
}
,{
id:"asus-zenbook-rog",brand:"ASUS",family:"ZenBook / ROG",aliases:["asus zenbook","zenbook","rog","华硕 zenbook"],yearRange:[2019,2026],connection:"USB-C / Thunderbolt or HDMI",cable:"Full-featured USB-C cable, or HDMI adapter cable",cableKey:"usb-c-to-c",fitLabel:"High",confidenceLabel:"Strong",notes:["Creator and gaming models vary a lot, so the full model matters.","If the USB-C port does not support video, HDMI is the safer choice."]
}
,{
id:"asus-zenbook-creator",brand:"ASUS",family:"ZenBook / ExpertBook / creator models",aliases:["asus zenbook pro","zenbook s","expertbook","proart","vivobook pro"],yearRange:[2019,2026],connection:"USB-C / Thunderbolt or HDMI depending on model",cable:"Video-capable USB-C first;
 HDMI or H5 DisplayLink when native output is insufficient",cableKey:"usb-c-to-c",fitLabel:"Medium-high",confidenceLabel:"Brand-level",notes:["ASUS creator laptops often work directly when the USB-C port supports DisplayPort Alt Mode.","If native display paths are insufficient, H5 DisplayLink is the fallback."]
}
,{
id:"asus-vivobook-older",brand:"ASUS",family:"ASUS VivoBook 14 / 15 2016-2020",aliases:["asus vivobook","vivobook 15","vivobook 14"],yearRange:[2016,2020],connection:"Often HDMI + USB-A;
 USB-C may be data-only on budget models",cable:"H5 DisplayLink Adapter",cableKey:"h5-hdmi-adapter",fitLabel:"Medium",confidenceLabel:"Brand-level",notes:["Many budget VivoBook models have USB-C ports that are not display-capable.","H5 DisplayLink is the safer support recommendation when native video output is insufficient."]
}
,{
id:"huawei-matebook-magicbook",brand:"Huawei / Honor",family:"MateBook X Pro / MagicBook",aliases:["matebook x pro","magicbook","华为笔记本","荣耀笔记本"],yearRange:[2018,2026],connection:"USB-C direct is the main path",cable:"Full-featured USB-C cable",cableKey:"usb-c-to-c",fitLabel:"High",confidenceLabel:"Strong",notes:["Slim laptops usually work well with direct connection.","Older or entry-level models should check whether USB-C supports video output."]
}
,{
id:"acer-swift-modern",brand:"Acer",family:"Acer Swift / Swift Go 2020-2026",aliases:["acer swift","swift 3","swift 5","swift go"],yearRange:[2020,2026],connection:"USB-C direct on many thin-and-light models",cable:"Full-featured USB-C cable",cableKey:"usb-c-to-c",fitLabel:"High",confidenceLabel:"Strong",notes:["Swift models are more likely to support USB-C video than entry-level Aspire machines.","If the USB-C port is data-only, verify HDMI or H5 DisplayLink."]
}
,{
id:"acer-nitro-modern",brand:"Acer",family:"Acer Nitro / Predator 2020-2026",aliases:["acer nitro","nitro 5","nitro 16","predator"],yearRange:[2020,2026],connection:"HDMI plus USB-C on many gaming models",cable:"USB-C to USB-C if the port supports video;
 otherwise HDMI or H5 DisplayLink",cableKey:"usb-c-to-c",fitLabel:"Medium-high",confidenceLabel:"Brand-level",notes:["Gaming models often support external displays, but the exact port capability still matters.","If USB-C does not expose video, verify HDMI or H5 DisplayLink."]
}
,{
id:"samsung-galaxy-book",brand:"Samsung",family:"Galaxy Book",aliases:["galaxy book","samsung book","三星笔记本"],yearRange:[2018,2026],connection:"USB-C direct is the main path",cable:"Full-featured USB-C cable",cableKey:"usb-c-to-c",fitLabel:"High",confidenceLabel:"Strong",notes:["Newer Galaxy Book models are better suited to USB-C.","For older models, it helps to confirm the exact year."]
}
,{
id:"lg-gram-modern",brand:"LG",family:"LG gram 2019-2026",aliases:["lg gram","gram 14","gram 16","gram 17"],yearRange:[2019,2026],connection:"USB-C direct on most recent gram models, with HDMI often present as well",cable:"Full-featured USB-C cable",cableKey:"usb-c-to-c",fitLabel:"High",confidenceLabel:"Strong",notes:["LG gram laptops are usually good candidates for direct USB-C display output.","If the exact model is older or entry-level, HDMI remains the fallback path."]
}
,{
id:"razer-blade-modern",brand:"Razer",family:"Razer Blade 15 / 16",aliases:["razer blade","blade 15","blade 16"],yearRange:[2020,2026],connection:"USB-C / Thunderbolt and HDMI are common on Blade models",cable:"Video-capable USB-C first;
 HDMI or H5 DisplayLink when native output is insufficient",cableKey:"usb-c-to-c",fitLabel:"High",confidenceLabel:"Strong",notes:["Most modern Blade laptops are strong direct-connect candidates.","When in doubt, the HDMI fallback is still the safer support path."]
}
];
function N(t){
return t.toLowerCase().replace(/[^\p{
L
}
\p{
N
}
]+/gu," ").trim().replace(/\s+/g," ")
}
const ne=[{
id:1,brand:"Acer",model:"Aspire 3 A315-24P",generation:"2023-2024 AMD",ports:"USB-C 3.2 Gen2 DisplayPort over USB-C + HDMI",status:"条件适配/需确认SKU",risk:"中",sourceUrl:"https://www.acer.com/us-en/laptops/aspire/aspire-3-amd/pdp/NX.KJBAA.001"
}
,{
id:2,brand:"Acer",model:"Aspire 3 A315-59",generation:"2022-2024",ports:"HDMI;
 USB-C is missing or data-only depending on SKU",status:"不适配原生直连",risk:"高",sourceUrl:"https://www.acer.com/us-en/laptops/aspire/aspire-3-intel"
}
,{
id:3,brand:"Acer",model:"Aspire 5 A515-57G-58R7",generation:"2022-2023 Intel",ports:"Thunderbolt 4 + HDMI",status:"原生直连",risk:"中",sourceUrl:"https://www.acer.com/us-en/laptops/aspire/aspire-5-intel/pdp/NX.K9TAA.001"
}
,{
id:4,brand:"Acer",model:"Aspire 5 A515-58M",generation:"2023-2024",ports:"TB4/USB-C DP+HDMI",status:"原生直连",risk:"低",sourceUrl:"https://www.acer.com/us-en/laptops/aspire/aspire-5-intel"
}
,{
id:5,brand:"Acer",model:"Chromebook Plus 514 / 515",generation:"2023-2025",ports:"USB-C video + HDMI, depending on SKU",status:"条件适配/需确认SKU",risk:"中",sourceUrl:"https://support.google.com/chromebook/answer/1060909?hl=en"
}
,{
id:6,brand:"Acer",model:"Chromebook Spin 714 CP714-2WN",generation:"2023-2024",ports:"2x Thunderbolt 4 USB-C + HDMI",status:"条件适配/需确认SKU",risk:"中",sourceUrl:"https://www.acer.com/us-en/chromebooks/acer-chromebook-spin-714-cp714-2wn"
}
,{
id:7,brand:"Acer",model:"Nitro 5 AN515-58 / Nitro V 16 ANV16-41",generation:"2022-2024",ports:"USB-C DP/TB4+HDMI",status:"原生直连",risk:"中",sourceUrl:"https://www.acer.com/us-en/laptops/nitro"
}
,{
id:8,brand:"Acer",model:"Nitro V 15 ANV15-51",generation:"2023-2024",ports:"HDMI + Thunderbolt/USB-C DisplayPort, depending on SKU",status:"条件适配/需确认SKU",risk:"中",sourceUrl:"https://store.acer.com/en-us/nitro-v-15-gaming-laptop-anv15-51-59mt"
}
,{
id:9,brand:"Acer",model:"Predator Helios Neo 16 PHN16-71",generation:"2023-2024",ports:"USB-C Thunderbolt 4 DisplayPort over USB-C + HDMI",status:"原生直连",risk:"低",sourceUrl:"https://www.acer.com/us-en/predator/laptops/helios/helios-neo-16/pdp/NH.QLUAA.001"
}
,{
id:10,brand:"Acer",model:"Swift Go 14",generation:"2024-2025",ports:"2x USB Type-C Thunderbolt 4/USB4 + HDMI 2.1",status:"条件适配/需确认SKU",risk:"中",sourceUrl:"https://www.acer.com/us-en/laptops/swift/swift-go"
}
,{
id:11,brand:"Acer",model:"Swift Go 14 SFG14-73 / SFG14-74",generation:"2024-2025",ports:"2×TB4/USB4+HDMI 2.1",status:"原生直连",risk:"低",sourceUrl:"https://www.acer.com/us-en/laptops/swift/swift-go"
}
,{
id:12,brand:"Acer",model:"Swift X 14 SFX14-72G",generation:"2024",ports:"2×TB4+HDMI",status:"原生直连",risk:"低",sourceUrl:"https://www.acer.com/us-en/laptops/swift/swift-x-14"
}
,{
id:13,brand:"Alienware",model:"m16 R2 / m18 R2 / x16 R2",generation:"2024",ports:"TB4/USB-C DP+HDMI 2.1",status:"原生直连",risk:"低",sourceUrl:"https://www.dell.com/en-us/shop/dell-laptops-and-2-in-1-pcs/scr/laptops/alienware/appref=37878"
}
,{
id:14,brand:"Apple",model:"MacBook Air 13/15 M3",generation:"2024 M3",ports:"2x Thunderbolt / USB4",status:"需DisplayLink",risk:"高",sourceUrl:"https://support.apple.com/en-us/117373"
}
,{
id:15,brand:"Apple",model:"MacBook Air 13/15 M4",generation:"2025 M4",ports:"2x Thunderbolt 4 / USB-C",status:"原生直连",risk:"低",sourceUrl:"https://support.apple.com/en-us/122212"
}
,{
id:16,brand:"Apple",model:"MacBook Air 13/15 M5",generation:"2026 M5",ports:"2×Thunderbolt 4/USB-C",status:"原生直连",risk:"低",sourceUrl:"https://support.apple.com/en-us/122212"
}
,{
id:17,brand:"Apple",model:"MacBook Air M1/M2",generation:"2020-2023",ports:"2x Thunderbolt / USB4",status:"需DisplayLink",risk:"高",sourceUrl:"https://support.apple.com/en-us/111883 | https://support.apple.com/en-us/111867"
}
,{
id:18,brand:"Apple",model:"MacBook Neo",generation:"2026 A18 Pro",ports:"Left USB-C supports DisplayPort 1.4;
 right USB-C is USB 2 data/charging only",status:"需DisplayLink",risk:"高",sourceUrl:"https://support.apple.com/en-us/126473 | https://support.apple.com/en-us/126322"
}
,{
id:19,brand:"Apple",model:"MacBook Pro 13 M1/M2",generation:"2020/2022",ports:"2x Thunderbolt / USB4",status:"需DisplayLink",risk:"高",sourceUrl:"https://support.apple.com/en-us/111893 | https://support.apple.com/en-us/111869"
}
,{
id:20,brand:"Apple",model:"MacBook Pro 14 M4",generation:"2024 基础 M4",ports:"Thunderbolt 4 + HDMI",status:"原生直连",risk:"低",sourceUrl:"https://support.apple.com/en-us/121552"
}
,{
id:21,brand:"Apple",model:"MacBook Pro 14 M5",generation:"2025/2026 M5",ports:"Multiple Thunderbolt 4 ports + HDMI",status:"原生直连",risk:"低",sourceUrl:"https://www.apple.com/macbook-pro/specs/"
}
,{
id:22,brand:"Apple",model:"MacBook Pro 14/16 M5 Pro/Max",generation:"2026 M5 Pro/Max",ports:"Multiple Thunderbolt 5 ports + HDMI",status:"原生直连",risk:"低",sourceUrl:"https://www.apple.com/macbook-pro/specs/"
}
,{
id:23,brand:"Apple",model:"MacBook Pro 14/16 Pro or Max",generation:"M1/M2/M3/M4 Pro/Max",ports:"Multiple Thunderbolt/USB4 ports + HDMI",status:"原生直连",risk:"低",sourceUrl:"https://support.apple.com/en-us/101571"
}
,{
id:24,brand:"ASUS",model:"Chromebook Plus CX34",generation:"CX3402",ports:"2×USB-C DP+HDMI",status:"条件适配/需确认SKU",risk:"中",sourceUrl:"https://www.asus.com/us/laptops/for-home/chromebook/asus-chromebook-plus-cx34-cx3402/techspec/"
}
,{
id:25,brand:"ASUS",model:"TUF Gaming A15 2023",generation:"FA507 2023",ports:"HDMI 2.1 + USB-C DisplayPort;
 some SKUs also include a data-only USB-C port",status:"条件适配/需确认SKU",risk:"中",sourceUrl:"https://www.asus.com/us/laptops/for-gaming/tuf-gaming/asus-tuf-gaming-a15-2023/techspec/"
}
,{
id:26,brand:"ASUS",model:"TUF Gaming A15 2024",generation:"FA507/2024",ports:"HDMI 2.1 FRL + USB-C DP + USB4 DP",status:"原生直连",risk:"低",sourceUrl:"https://www.asus.com/laptops/for-gaming/tuf-gaming/asus-tuf-gaming-a15-2024/techspec/"
}
,{
id:27,brand:"ASUS",model:"TUF Gaming F15 FX507 / A16 FA617",generation:"2022-2024",ports:"USB-C DP+HDMI",status:"原生直连",risk:"中",sourceUrl:"https://www.asus.com/us/laptops/for-gaming/tuf-gaming/"
}
,{
id:28,brand:"ASUS",model:"Vivobook 15 X1502",generation:"2022-2024",ports:"HDMI + data-only USB-C on most SKUs",status:"不适配原生直连",risk:"高",sourceUrl:"https://www.asus.com/us/laptops/for-home/vivobook/asus-vivobook-15-x1502/techspec/"
}
,{
id:29,brand:"ASUS",model:"Vivobook 15 X1504",generation:"X1504VA/VAP 等",ports:"HDMI 1.4 + USB-C data 5Gbps/PD only",status:"不适配原生直连",risk:"高",sourceUrl:"https://www.asus.com/laptops/for-home/vivobook/asus-vivobook-15-x1504/techspec/"
}
,{
id:30,brand:"ASUS",model:"Vivobook 16 X1605",generation:"2023-2025",ports:"USB-C capability varies by SKU + HDMI",status:"条件适配/需确认SKU",risk:"中",sourceUrl:"https://www.asus.com/us/laptops/for-home/vivobook/asus-vivobook-16-x1605/techspec/"
}
,{
id:31,brand:"ASUS",model:"Vivobook 16X K3605",generation:"2023-2024",ports:"USB-C DisplayPort+HDMI",status:"原生直连",risk:"低",sourceUrl:"https://www.asus.com/us/laptops/for-home/vivobook/asus-vivobook-16x-k3605/techspec/"
}
,{
id:32,brand:"ASUS",model:"Vivobook S 14 OLED S5406",generation:"2024",ports:"Typically Thunderbolt/USB-C + HDMI;
 verify the exact SKU",status:"原生直连",risk:"中",sourceUrl:"https://www.asus.com/us/laptops/for-home/vivobook/asus-vivobook-s-14-oled-s5406/techspec/"
}
,{
id:33,brand:"ASUS",model:"Vivobook S 15 S5507 Snapdragon",generation:"2024",ports:"2×USB4+HDMI",status:"原生直连",risk:"低",sourceUrl:"https://www.asus.com/us/laptops/for-home/vivobook/asus-vivobook-s-15-s5507/techspec/"
}
,{
id:34,brand:"ASUS",model:"Zenbook 14 OLED UX3402",generation:"2022-2023",ports:"2×TB4+HDMI",status:"原生直连",risk:"低",sourceUrl:"https://www.asus.com/us/laptops/for-home/zenbook/zenbook-14-oled-ux3402/techspec/"
}
,{
id:35,brand:"ASUS",model:"Zenbook 14 OLED UX3405",generation:"2024",ports:"2x Thunderbolt 4 + HDMI 2.1 TMDS",status:"原生直连",risk:"低",sourceUrl:"https://www.asus.com/us/laptops/for-home/zenbook/asus-zenbook-14-ux3405/"
}
,{
id:36,brand:"ASUS",model:"Zenbook S 13 OLED UX5304",generation:"2023-2024",ports:"2×TB4+HDMI",status:"原生直连",risk:"低",sourceUrl:"https://www.asus.com/us/laptops/for-home/zenbook/asus-zenbook-s-13-oled-ux5304/techspec/"
}
,{
id:37,brand:"ASUS",model:"Zenbook S 14 UX5406 / S 16 UM5606",generation:"2024-2025",ports:"2x Thunderbolt 4 or USB4 video outputs + HDMI",status:"原生直连",risk:"低",sourceUrl:"https://www.asus.com/us/laptops/for-home/zenbook/"
}
,{
id:38,brand:"ASUS ROG",model:"ROG Strix G16/G18 2023-2025",generation:"G614/G814等",ports:"USB-C DP/USB4+HDMI 2.1",status:"原生直连",risk:"低",sourceUrl:"https://rog.asus.com/us/laptops/rog-strix/"
}
,{
id:39,brand:"ASUS ROG",model:"ROG Zephyrus G14 2024",generation:"GA403 2024",ports:"USB-C/USB4 video + HDMI",status:"原生直连",risk:"中",sourceUrl:"https://rog.asus.com/us/laptops/rog-zephyrus/rog-zephyrus-g14-2024/spec/"
}
,{
id:40,brand:"ASUS ROG",model:"ROG Zephyrus G14 2025",generation:"GA403W/2025",ports:"USB4 Type-C DP 2.1 + USB-C DP 2.1 + HDMI 2.1",status:"原生直连",risk:"低",sourceUrl:"https://rog.asus.com/laptops/rog-zephyrus/rog-zephyrus-g14-2025/"
}
,{
id:41,brand:"Dell",model:"G15 5530 / G16 7630",generation:"2023",ports:"USB-C DP+HDMI 2.1",status:"原生直连",risk:"低",sourceUrl:"https://www.dell.com/support/home/en-us/product-support/product/g-series-15-5530-laptop/docs"
}
,{
id:42,brand:"Dell",model:"Inspiron 14 5430 / 5440",generation:"2023-2024",ports:"USB-C DP Alt Mode+HDMI",status:"原生直连",risk:"低",sourceUrl:"https://www.dell.com/support/home/en-us/product-support/product/inspiron-14-5440-laptop/docs"
}
,{
id:43,brand:"Dell",model:"Inspiron 14 5445 AMD",generation:"2024",ports:"USB-C DP Alt Mode+HDMI",status:"原生直连",risk:"低",sourceUrl:"https://www.dell.com/support/home/en-us/product-support/product/inspiron-14-5445-laptop/docs"
}
,{
id:44,brand:"Dell",model:"Inspiron 14 7440 2-in-1",generation:"2024",ports:"USB-C/Thunderbolt 4 video + HDMI",status:"原生直连",risk:"低",sourceUrl:"https://www.dell.com/support/home/en-us/product-support/product/inspiron-14-7440-2-in-1-laptop/docs"
}
,{
id:45,brand:"Dell",model:"Inspiron 15 3520",generation:"2022-2024",ports:"HDMI;
 most configurations do not include video-capable USB-C",status:"不适配原生直连",risk:"高",sourceUrl:"https://www.dell.com/support/home/en-us/product-support/product/inspiron-15-3520-laptop/docs"
}
,{
id:46,brand:"Dell",model:"Inspiron 15 3525",generation:"2022-2023",ports:"HDMI + data-only USB-C, depending on configuration",status:"不适配原生直连",risk:"高",sourceUrl:"https://www.dell.com/support/home/en-us/product-support/product/inspiron-15-3525-laptop/docs"
}
,{
id:47,brand:"Dell",model:"Inspiron 15 3530 aluminum chassis or dGPU",generation:"2023-2024 铝合金/独显",ports:"HDMI 1.4 + USB-C with DisplayPort Alt Mode 1.4/PD",status:"原生直连",risk:"中",sourceUrl:"https://www.dell.com/support/manuals/en-us/inspiron-15-3530-laptop/inspiron_3530_rpl_om/external-ports-and-slots?guid=guid-b8f739cc-a41e-4ac9-b3f8-ff6d9c6d8c19&lang=en-us"
}
,{
id:48,brand:"Dell",model:"Inspiron 15 3530 plastic chassis",generation:"2023-2024 塑料机身",ports:"HDMI 1.4 + data-only USB-C",status:"不适配原生直连",risk:"高",sourceUrl:"https://www.dell.com/support/manuals/en-us/inspiron-15-3530-laptop/inspiron_3530_rpl_om/external-ports-and-slots?guid=guid-b8f739cc-a41e-4ac9-b3f8-ff6d9c6d8c19&lang=en-us"
}
,{
id:49,brand:"Dell",model:"Inspiron 16 5640",generation:"2024",ports:"HDMI + USB-C with DisplayPort 1.4 and PD",status:"原生直连",risk:"中",sourceUrl:"https://www.dell.com/support/manuals/en-us/inspiron-16-5640-laptop/inspiron-16-5640-owners-manual/left?guid=guid-19665a62-fe79-46eb-ab09-b7727efe350a&lang=en-us"
}
,{
id:50,brand:"Dell",model:"Latitude 3440 / 3540",generation:"2023",ports:"USB-C DP Alt Mode+HDMI",status:"原生直连",risk:"低",sourceUrl:"https://www.dell.com/support/home/en-us/product-support/product/latitude-14-3440-laptop/docs"
}
,{
id:51,brand:"Dell",model:"Latitude 5440 / 5540",generation:"2023",ports:"2×TB4/USB-C DP+HDMI",status:"原生直连",risk:"低",sourceUrl:"https://www.dell.com/support/home/en-us/product-support/product/latitude-14-5440-laptop/docs"
}
,{
id:52,brand:"Dell",model:"Latitude 5450",generation:"2024",ports:"2x Thunderbolt 4 with DP Alt Mode/USB4/PD + HDMI 2.1 TMDS",status:"原生直连",risk:"低",sourceUrl:"https://www.dell.com/support/manuals/en-us/latitude-14-5450-laptop/latitude-5450-owners-manual/external-ports-and-slots?guid=guid-1fc91ef3-b5a3-4c62-9229-cbe8084bfd5f&lang=en-us"
}
,{
id:53,brand:"Dell",model:"Latitude 7350",generation:"2024",ports:"HDMI 2.1 TMDS + 2x Thunderbolt 4 with DP Alt Mode/USB4/PD",status:"条件适配/需确认SKU",risk:"中",sourceUrl:"https://www.dell.com/support/manuals/en-us/latitude-13-7350-2-in-1-laptop/lati_7350_om/left?guid=guid-3f3df451-132b-4630-bf3f-ab9d1493d2ca&lang=en-us"
}
,{
id:54,brand:"Dell",model:"Latitude 7450",generation:"2024",ports:"HDMI 2.1 + 2x Thunderbolt 4 with DP Alt Mode/USB4/PD",status:"原生直连",risk:"低",sourceUrl:"https://www.dell.com/support/manuals/en-us/latitude-14-7450-2-in-1-laptop/latitude_7450_om/external-ports?guid=guid-59d886cf-841a-403f-afd2-6f462f9a4b1f&lang=en-us"
}
,{
id:55,brand:"Dell",model:"Precision 5690",generation:"2024",ports:"USB-C DP Alt Mode + 2x Thunderbolt 4 + HDMI 2.1",status:"原生直连",risk:"低",sourceUrl:"https://www.dell.com/support/manuals/en-us/precision-16-5690-laptop/precision-5690_owners_manual/external-ports-and-slots?guid=guid-b8f739cc-a41e-4ac9-b3f8-ff6d9c6d8c19&lang=en-us"
}
,{
id:56,brand:"Dell",model:"XPS 13 9340",generation:"2024",ports:"2x Thunderbolt 4",status:"原生直连",risk:"低",sourceUrl:"https://www.dell.com/support/manuals/en-us/xps-13-9340-laptop/xps-13-9340_external_display_guide/connect-external-displays?guid=guid-346aa5de-7f73-4c2f-9267-4a83eff367c7&lang=en-us"
}
,{
id:57,brand:"Dell",model:"XPS 13 Plus 9320",generation:"2022-2023",ports:"2×Thunderbolt 4/DP",status:"原生直连",risk:"低",sourceUrl:"https://www.dell.com/support/home/en-us/product-support/product/xps-13-9320-laptop/docs"
}
,{
id:58,brand:"Dell",model:"XPS 14 9440",generation:"2024",ports:"3x Thunderbolt 4 USB-C with Power Delivery and DisplayPort",status:"原生直连",risk:"低",sourceUrl:"https://www.dell.com/support/manuals/en-us/xps-14-9440-laptop/xps-14-9440-owners-manual/external-ports-and-slots?guid=guid-b8f739cc-a41e-4ac9-b3f8-ff6d9c6d8c19&lang=en-us"
}
,{
id:59,brand:"Dell",model:"XPS 15 9520 / 9530",generation:"2022-2023",ports:"2×TB4+1×USB-C DP",status:"原生直连",risk:"低",sourceUrl:"https://www.dell.com/support/home/en-us/product-support/product/xps-15-9530-laptop/docs"
}
,{
id:60,brand:"Dell",model:"XPS 16 9640",generation:"2024",ports:"Multiple Thunderbolt/USB-C video outputs",status:"原生直连",risk:"低",sourceUrl:"https://www.dell.com/support/manuals/en-us/xps-16-9640-laptop/xps-16-9640-external-display-connection-guide/modes-of-connection?guid=guid-df1a78f5-ae44-41ca-840d-0017e9f08103&lang=en-us"
}
,{
id:61,brand:"Dell",model:"XPS 17 9720 / 9730",generation:"2022-2023",ports:"4×Thunderbolt 4/DP",status:"原生直连",risk:"低",sourceUrl:"https://www.dell.com/support/home/en-us/product-support/product/xps-17-9730-laptop/docs"
}
,{
id:62,brand:"Framework",model:"Framework Laptop 13 AMD Ryzen 7040",generation:"2023-2024",ports:"4 expansion-card slots;
 USB-C/HDMI/DisplayPort paths depend on installed cards",status:"条件适配/需确认SKU",risk:"中",sourceUrl:"https://knowledgebase.frame.work/expansion-card-functionality-on-framework-laptop-13-amd-ryzen-7040-series-SkrVx7gAh"
}
,{
id:63,brand:"Framework",model:"Framework Laptop 16",generation:"2024-2025",ports:"Expansion-card slots;
 USB-C/DisplayPort/HDMI paths are user-configured",status:"条件适配/需确认SKU",risk:"中",sourceUrl:"https://knowledgebase.frame.work/framework_laptop_16_expansion_card_slot_functionality-rkUjGm7cn"
}
,{
id:64,brand:"Google",model:"Pixelbook Go",generation:"2019-2022存量",ports:"2x USB-C video outputs",status:"条件适配/需确认SKU",risk:"中",sourceUrl:"https://support.google.com/pixelbook/answer/9134069?hl=en"
}
,{
id:65,brand:"HP",model:"EliteBook 640/645/650/655 G10-G11",generation:"2023-2024",ports:"USB-C/TB4 DP+HDMI",status:"原生直连",risk:"低",sourceUrl:"https://support.hp.com/us-en"
}
,{
id:66,brand:"HP",model:"EliteBook 840 G11",generation:"2024",ports:"Thunderbolt 4 USB-C with DisplayPort + HDMI 2.1",status:"原生直连",risk:"低",sourceUrl:"https://h20195.www2.hp.com/v2/GetPDF.aspx/c08903294.pdf"
}
,{
id:67,brand:"HP",model:"EliteBook 860 G11",generation:"2024",ports:"2x Thunderbolt 4 USB-C with PD/DisplayPort 1.4 + HDMI 2.1",status:"原生直连",risk:"低",sourceUrl:"https://support.hp.com/us-en/document/ish_10275641-10283932-16"
}
,{
id:68,brand:"HP",model:"EliteBook 865 G11",generation:"2024 AMD",ports:"Thunderbolt/USB-C DP + HDMI",status:"原生直连",risk:"低",sourceUrl:"https://h20195.www2.hp.com/v2/GetDocument.aspx?docname=c08893142"
}
,{
id:69,brand:"HP",model:"ENVY x360 16-ac / 16-ad",generation:"2024-2025",ports:"USB-C with DisplayPort + HDMI",status:"条件适配/需确认SKU",risk:"中",sourceUrl:"https://kaas.hpcloud.hp.com/pdf-public/pdf_9915122_en-US-1.pdf"
}
,{
id:70,brand:"HP",model:"HP 250 G10",generation:"2023-2024",ports:"HDMI + USB-C data-only",status:"不适配原生直连",risk:"高",sourceUrl:"https://h20195.www2.hp.com/v2/GetDocument.aspx?docname=c08479496"
}
,{
id:71,brand:"HP",model:"HP 250 G9",generation:"2022-2023",ports:"HDMI 1.4b + USB-C data transfer only",status:"不适配原生直连",risk:"高",sourceUrl:"https://c-data.co.il/images/uploaded/HP%20250%20G9%20Notebook%20PC.pdf"
}
,{
id:72,brand:"HP",model:"HP 255 G10",generation:"2023-2024",ports:"HDMI + USB-C data-only",status:"不适配原生直连",risk:"高",sourceUrl:"https://h20195.www2.hp.com/v2/GetDocument.aspx?docname=c08479497"
}
,{
id:73,brand:"HP",model:"HP 255 G8",generation:"2021-2022",ports:"HDMI 1.4b + 5Gbps data-only USB-C",status:"不适配原生直连",risk:"高",sourceUrl:"https://www.amd.com/content/dam/amd/en/documents/where-to-buy/partner-tech-docs/data-sheets/hp-255-g8-notebook-pc.pdf"
}
,{
id:74,brand:"HP",model:"HP Laptop 14-dq / 14-fq",generation:"2020-2024",ports:"HDMI + data-only USB-C;
 some configurations have no USB-C",status:"不适配原生直连",risk:"高",sourceUrl:"https://support.hp.com/us-en"
}
,{
id:75,brand:"HP",model:"HP Laptop 15-dy / 15-ef",generation:"2020-2024",ports:"HDMI + data-only USB-C, depending on SKU",status:"不适配原生直连",risk:"高",sourceUrl:"https://support.hp.com/us-en"
}
,{
id:76,brand:"HP",model:"HP Laptop 15-fd0005dx / 15-fd0056ne",generation:"2023-2025",ports:"HDMI 1.4b + USB-C 5Gbps data-only",status:"不适配原生直连",risk:"高",sourceUrl:"https://files.bbystatic.com/MbwCF0c%2Bbbdnhe9J1hXijA%3D%3D/15fbdf62-193e-4e79-8f7e-d69e8c4c5059"
}
,{
id:77,brand:"HP",model:"HP Laptop 17-cn / 17-cp",generation:"2021-2024",ports:"HDMI + data-only USB-C, depending on SKU",status:"不适配原生直连",risk:"高",sourceUrl:"https://support.hp.com/us-en"
}
,{
id:78,brand:"HP",model:"OMEN 16-ap0000 / 16-ap0053dx",generation:"2025-2026",ports:"USB-C with PD/DisplayPort 1.4 + HDMI 2.1",status:"原生直连",risk:"低",sourceUrl:"https://support.hp.com/us-en/document/ish_12049662-12049760-16"
}
,{
id:79,brand:"HP",model:"OmniBook Ultra Flip 14-fh",generation:"2024-2025",ports:"3x USB-C/Thunderbolt 4 video outputs",status:"原生直连",risk:"低",sourceUrl:"https://www.hp.com/us-en/laptops-and-2-in-1s/omnibook-ultra-flip-14-ai-pc.html"
}
,{
id:80,brand:"HP",model:"Pavilion Plus 14-ew / 14-ey",generation:"2023-2024",ports:"USB-C DP/Thunderbolt+HDMI",status:"原生直连",risk:"低",sourceUrl:"https://www.hp.com/us-en/shop/vwa/laptops/brand%3DOmniBook-7"
}
,{
id:81,brand:"HP",model:"Pavilion x360 14-ek0033dx",generation:"2022-2023",ports:"USB-C 10Gbps with PD/DisplayPort 1.4 + HDMI 2.1",status:"原生直连",risk:"中",sourceUrl:"https://support.hp.com/us-en/document/ish_6412388-6412432-16"
}
,{
id:82,brand:"HP",model:"ProBook 440 G11",generation:"2024",ports:"2x USB-C 20Gbps with PD/DisplayPort 1.4 + HDMI 2.1",status:"原生直连",risk:"低",sourceUrl:"https://h20195.www2.hp.com/v2/GetPDF.aspx/c08953480.pdf"
}
,{
id:83,brand:"HP",model:"ProBook 450 G10 / 455 G10",generation:"2023",ports:"USB-C DP Alt Mode+HDMI",status:"原生直连",risk:"低",sourceUrl:"https://support.hp.com/us-en"
}
,{
id:84,brand:"HP",model:"Spectre x360 14-eu / 16-aa",generation:"2024",ports:"2x Thunderbolt 4/USB-C DisplayPort;
 16-inch model also includes HDMI",status:"原生直连",risk:"低",sourceUrl:"https://support.hp.com/us-en/document/ish_9596435-9596485-16"
}
,{
id:85,brand:"HP",model:"Victus 15-fa / 15-fb",generation:"2022-2025",ports:"USB-C DisplayPort+HDMI",status:"原生直连",risk:"低",sourceUrl:"https://support.hp.com/us-en"
}
,{
id:86,brand:"HP",model:"Victus 16-r / 16-s",generation:"2023-2025",ports:"USB-C DisplayPort+HDMI 2.1",status:"原生直连",risk:"低",sourceUrl:"https://support.hp.com/us-en"
}
,{
id:87,brand:"HP",model:"ZBook Firefly 14 G11",generation:"2024",ports:"Thunderbolt/USB-C DisplayPort + HDMI",status:"原生直连",risk:"低",sourceUrl:"https://h20195.www2.hp.com/v2/GetDocument.aspx?docname=c08923221"
}
,{
id:88,brand:"HP",model:"ZBook Firefly 16 G11",generation:"2024",ports:"2x Thunderbolt 4 with DisplayPort 1.4 + HDMI 2.1",status:"原生直连",risk:"低",sourceUrl:"https://fulfilment.gem.gov.in/contract/slafds?fileDownloadPath=SLA_UPLOAD_PATH%2F2024%2FSep%2FGEM_2024_B_5437883%2FCLM0010%2FATCsumit_5e0c9123-f435-418e-8e871727246868356_Indraj1%40work.pdf"
}
,{
id:89,brand:"HP",model:"ZBook Power G10 / G11",generation:"2023-2024",ports:"TB4/USB-C DP+HDMI",status:"原生直连",risk:"低",sourceUrl:"https://support.hp.com/us-en"
}
,{
id:90,brand:"Lenovo",model:"IdeaPad 1 15AMN7",generation:"2023-2026",ports:"HDMI + USB-C data transfer only",status:"不适配原生直连",risk:"高",sourceUrl:"https://psref.lenovo.com/syspool/Sys/PDF/IdeaPad/IdeaPad_1_15AMN7/IdeaPad_1_15AMN7_Spec.PDF"
}
,{
id:91,brand:"Lenovo",model:"IdeaPad 1 15IAU7",generation:"2022-2024",ports:"HDMI+USB-C data-only",status:"不适配原生直连",risk:"高",sourceUrl:"https://psref.lenovo.com/Product/IdeaPad/IdeaPad_1_15IAU7"
}
,{
id:92,brand:"Lenovo",model:"IdeaPad 3 14ITL6 / 15ITL6",generation:"2021-2023",ports:"HDMI+USB-C data-only",status:"不适配原生直连",risk:"高",sourceUrl:"https://psref.lenovo.com/Product/IdeaPad/IdeaPad_3_15ITL6"
}
,{
id:93,brand:"Lenovo",model:"IdeaPad 3 15ALC6",generation:"82KU",ports:"HDMI 1.4b + USB-C data transfer only",status:"不适配原生直连",risk:"高",sourceUrl:"https://psref.lenovo.com/syspool/Sys/PDF/IdeaPad/IdeaPad_3_15ALC6/IdeaPad_3_15ALC6_Spec.html"
}
,{
id:94,brand:"Lenovo",model:"IdeaPad Flex 5 / 5i 14-16 2023-2024",generation:"多MTM",ports:"USB-C DisplayPort + HDMI on most configurations",status:"条件适配/需确认SKU",risk:"中",sourceUrl:"https://psref.lenovo.com/"
}
,{
id:95,brand:"Lenovo",model:"IdeaPad Slim 3 15IRU8",generation:"2023-2026",ports:"USB-C DP 1.2 + HDMI",status:"原生直连",risk:"中",sourceUrl:"https://psref.lenovo.com/syspool/Sys/PDF/IdeaPad/IdeaPad_Slim_3_15IRU8/IdeaPad_Slim_3_15IRU8_Spec.pdf"
}
,{
id:96,brand:"Lenovo",model:"IdeaPad Slim 5 / 5i 14-16 2023-2025",generation:"多MTM",ports:"USB-C DisplayPort + HDMI on most configurations",status:"条件适配/需确认SKU",risk:"中",sourceUrl:"https://psref.lenovo.com/"
}
,{
id:97,brand:"Lenovo",model:"Legion 5 16IRX9",generation:"2024/2025",ports:"HDMI + USB-C DisplayPort",status:"原生直连",risk:"低",sourceUrl:"https://psref.lenovo.com/syspool/Sys/PDF/Legion/Legion_5_16IRX9/Legion_5_16IRX9_Spec.PDF"
}
,{
id:98,brand:"Lenovo",model:"Legion 7 16IRX9",generation:"2024",ports:"HDMI + Thunderbolt/USB-C",status:"原生直连",risk:"低",sourceUrl:"https://psref.lenovo.com/syspool/Sys/PDF/Legion/Legion_7_16IRX9/Legion_7_16IRX9_Spec.PDF"
}
,{
id:99,brand:"Lenovo",model:"Legion Pro 5 16IRX8",generation:"2023",ports:"HDMI + USB-C DisplayPort",status:"原生直连",risk:"低",sourceUrl:"https://psref.lenovo.com/syspool/Sys/PDF/Legion/Legion_Pro_5_16IRX8/Legion_Pro_5_16IRX8_Spec.PDF"
}
,{
id:100,brand:"Lenovo",model:"Legion Slim 5 16APH8 / 16IRH8",generation:"2023",ports:"USB-C DP+HDMI 2.1",status:"原生直连",risk:"低",sourceUrl:"https://psref.lenovo.com/Product/Legion/Legion_Slim_5_16APH8"
}
,{
id:101,brand:"Lenovo",model:"LOQ 15IRH8 / 15APH8 / 15IAX9",generation:"2023-2024",ports:"USB-C DisplayPort+HDMI",status:"原生直连",risk:"低",sourceUrl:"https://psref.lenovo.com/Product/LOQ/LOQ_15IRH8"
}
,{
id:102,brand:"Lenovo",model:"ThinkPad E14 Gen 5 / Gen 6",generation:"2023-2024",ports:"USB-C DP/TB4+HDMI",status:"原生直连",risk:"低",sourceUrl:"https://psref.lenovo.com/Product/ThinkPad/ThinkPad_E14_Gen_5_Intel"
}
,{
id:103,brand:"Lenovo",model:"ThinkPad E16 Gen 1 Intel",generation:"2023",ports:"HDMI + USB-C + Thunderbolt",status:"原生直连",risk:"低",sourceUrl:"https://psref.lenovo.com/syspool/Sys/PDF/ThinkPad/ThinkPad_E16_Gen_1_Intel/ThinkPad_E16_Gen_1_Intel_Spec.PDF"
}
,{
id:104,brand:"Lenovo",model:"ThinkPad E16 Gen 2 Intel",generation:"2024",ports:"HDMI + USB-C + Thunderbolt",status:"原生直连",risk:"低",sourceUrl:"https://psref.lenovo.com/syspool/Sys/PDF/ThinkPad/ThinkPad_E16_Gen_2_Intel/ThinkPad_E16_Gen_2_Intel_Spec.pdf"
}
,{
id:105,brand:"Lenovo",model:"ThinkPad E16 Gen 3 Intel",generation:"2025",ports:"HDMI + USB-C/Thunderbolt",status:"原生直连",risk:"低",sourceUrl:"https://psref.lenovo.com/syspool/Sys/PDF/ThinkPad/ThinkPad_E16_Gen_3_Intel/ThinkPad_E16_Gen_3_Intel_Spec.PDF"
}
,{
id:106,brand:"Lenovo",model:"ThinkPad L14 Gen 4 / Gen 5",generation:"2023-2024",ports:"USB-C DP/TB4/USB4+HDMI",status:"原生直连",risk:"低",sourceUrl:"https://psref.lenovo.com/Product/ThinkPad/ThinkPad_L14_Gen_5_Intel"
}
,{
id:107,brand:"Lenovo",model:"ThinkPad P14s Gen 5 AMD",generation:"2024",ports:"2x Thunderbolt 4 + HDMI",status:"原生直连",risk:"低",sourceUrl:"https://psref.lenovo.com/syspool/Sys/PDF/ThinkPad/ThinkPad_P14s_Gen_5_AMD/ThinkPad_P14s_Gen_5_AMD_Spec.pdf"
}
,{
id:108,brand:"Lenovo",model:"ThinkPad P14s Gen 5 Intel",generation:"2024",ports:"Thunderbolt 4 + HDMI",status:"原生直连",risk:"低",sourceUrl:"https://psref.lenovo.com/syspool/Sys/PDF/ThinkPad/ThinkPad_P14s_Gen_5_Intel/ThinkPad_P14s_Gen_5_Intel_Spec.pdf"
}
,{
id:109,brand:"Lenovo",model:"ThinkPad T14 Gen 4 Intel / AMD",generation:"2023",ports:"USB-C/TB4/USB4+HDMI",status:"原生直连",risk:"低",sourceUrl:"https://psref.lenovo.com/Product/ThinkPad/ThinkPad_T14_Gen_4_Intel"
}
,{
id:110,brand:"Lenovo",model:"ThinkPad T14 Gen 5 AMD",generation:"2024-2026",ports:"HDMI + documented USB4/Thunderbolt display output",status:"原生直连",risk:"低",sourceUrl:"https://psref.lenovo.com/syspool/Sys/PDF/ThinkPad/ThinkPad_T14_Gen_5_AMD/ThinkPad_T14_Gen_5_AMD_Spec.pdf"
}
,{
id:111,brand:"Lenovo",model:"ThinkPad T14 Gen 5 Intel",generation:"2024",ports:"HDMI + Thunderbolt",status:"原生直连",risk:"低",sourceUrl:"https://psref.lenovo.com/syspool/Sys/PDF/ThinkPad/ThinkPad_T14_Gen_5_Intel/ThinkPad_T14_Gen_5_Intel_Spec.pdf"
}
,{
id:112,brand:"Lenovo",model:"ThinkPad T16 Gen 2 Intel / AMD",generation:"2023",ports:"USB-C/TB4/USB4+HDMI",status:"原生直连",risk:"低",sourceUrl:"https://psref.lenovo.com/Product/ThinkPad/ThinkPad_T16_Gen_2_Intel"
}
,{
id:113,brand:"Lenovo",model:"ThinkPad X1 Carbon Gen 10 / 11",generation:"2022-2023",ports:"2×TB4+HDMI",status:"原生直连",risk:"低",sourceUrl:"https://psref.lenovo.com/Product/ThinkPad/ThinkPad_X1_Carbon_Gen_11"
}
,{
id:114,brand:"Lenovo",model:"ThinkPad X1 Carbon Gen 12",generation:"2024",ports:"HDMI + Thunderbolt",status:"原生直连",risk:"低",sourceUrl:"https://psref.lenovo.com/syspool/Sys/PDF/ThinkPad/ThinkPad_X1_Carbon_Gen_12/ThinkPad_X1_Carbon_Gen_12_Spec.pdf"
}
,{
id:115,brand:"Lenovo",model:"ThinkPad X1 Carbon Gen 13",generation:"2025",ports:"HDMI + Thunderbolt",status:"原生直连",risk:"低",sourceUrl:"https://psref.lenovo.com/syspool/Sys/PDF/ThinkPad/ThinkPad_X1_Carbon_Gen_13/ThinkPad_X1_Carbon_Gen_13_Spec.pdf"
}
,{
id:116,brand:"Lenovo",model:"Yoga 7 / 7i 14-16 2023-2025",generation:"14ARP8/14IML9等",ports:"USB-C DP/USB4+HDMI",status:"原生直连",risk:"中",sourceUrl:"https://psref.lenovo.com/"
}
,{
id:117,brand:"Lenovo",model:"Yoga 9i 2-in-1 14IMH9",generation:"2024",ports:"2×TB4+USB-C DP",status:"原生直连",risk:"低",sourceUrl:"https://psref.lenovo.com/Product/Yoga/Yoga_9_2_in_1_14IMH9"
}
,{
id:118,brand:"LG",model:"LG gram 14/16/17 2023-2025",generation:"14Z90R/16Z90R/17Z90R等",ports:"2×TB4/USB-C DP+HDMI",status:"原生直连",risk:"低",sourceUrl:"https://www.lg.com/us/laptops"
}
,{
id:119,brand:"LG",model:"LG gram 16",generation:"2024 16Z90S",ports:"2x USB4 Gen3x2 Type-C with PD/DisplayPort/Thunderbolt 4 + HDMI 4K@60",status:"原生直连",risk:"低",sourceUrl:"https://media.us.lg.com/asset/c0eb9e21-a5e3-46e2-aeff-50d12d66d342/16Z90S-V-Series-gram-Spec-Sheet.pdf"
}
,{
id:120,brand:"LG",model:"LG gram Pro 16/17",generation:"2024",ports:"2x USB4 Type-C with PD/DisplayPort/Thunderbolt 4 + HDMI",status:"原生直连",risk:"低",sourceUrl:"https://www.lg.com/global/newsroom/news/media-entertainment-solution/lg-gram-pro-boasts-ultra-slim-light-weight-design-and-powerful-performance-with-ai/"
}
,{
id:121,brand:"Microsoft",model:"Surface Laptop 5",generation:"2022",ports:"1x Thunderbolt 4/USB-C + Surface Connect;
 no HDMI",status:"需扩展坞",risk:"中",sourceUrl:"https://support.microsoft.com/en-us/surface/external-display/supported-external-display-surface-laptop"
}
,{
id:122,brand:"Microsoft",model:"Surface Laptop 6 for Business 13.5-inch",generation:'2024 13.5"',ports:"1x USB4/Thunderbolt 4 video output + Surface Connect",status:"需扩展坞",risk:"中",sourceUrl:"https://www.microsoft.com/content/dam/microsoft/final/en-us/microsoft-product-and-services/surface/surface-business-home/MSFT-Microsoft-Surface-Laptop-6-Fact-Sheet-ROW.pdf"
}
,{
id:123,brand:"Microsoft",model:"Surface Laptop 6 for Business 15-inch",generation:'2024 15"',ports:"2x USB4/Thunderbolt 4 video outputs + Surface Connect",status:"原生直连",risk:"低",sourceUrl:"https://www.microsoft.com/content/dam/microsoft/final/en-us/microsoft-product-and-services/surface/surface-business-home/MSFT-Microsoft-Surface-Laptop-6-Fact-Sheet-ROW.pdf"
}
,{
id:124,brand:"Microsoft",model:"Surface Laptop 7 / 8",generation:"USB4 / TB4",ports:"2x USB4/Thunderbolt 4 USB-C;
 no HDMI",status:"原生直连",risk:"中",sourceUrl:"https://support.microsoft.com/en-us/surface/external-display/supported-external-display-surface-laptop"
}
,{
id:125,brand:"Microsoft",model:"Surface Laptop Go 3",generation:"2023",ports:"1x USB-C video output + Surface Connect",status:"需扩展坞",risk:"中",sourceUrl:"https://support.microsoft.com/en-us/surface/models/surface-laptop-go-3-features"
}
,{
id:126,brand:"Microsoft",model:"Surface Laptop Studio 2",generation:"2023",ports:"2x USB4/Thunderbolt 4 video outputs",status:"原生直连",risk:"低",sourceUrl:"https://support.microsoft.com/en-us/surface/external-display/supported-external-display-resolution-and-refresh-rates-for-surface"
}
,{
id:127,brand:"Microsoft",model:"Surface Pro 10 for Business",generation:"2024",ports:"2x USB4/Thunderbolt 4",status:"原生直连",risk:"中",sourceUrl:"https://support.microsoft.com/en-us/surface/external-display/supported-external-display-surface-pro"
}
,{
id:128,brand:"Microsoft",model:"Surface Pro 11",generation:"Snapdragon / Intel",ports:"2x USB4/Thunderbolt 4 USB-C, depending on version",status:"原生直连",risk:"中",sourceUrl:"https://support.microsoft.com/en-us/surface/external-display/supported-external-display-surface-pro"
}
,{
id:129,brand:"MSI",model:"Katana 15 B13V / Cyborg 15 A13V",generation:"2023-2024",ports:"USB-C DisplayPort+HDMI",status:"原生直连",risk:"低",sourceUrl:"https://www.msi.com/Laptop/Products"
}
,{
id:130,brand:"MSI",model:"Modern 14/15 B12-B13系列",generation:"B12M/B13M等",ports:"HDMI + USB-C capability varies by SKU",status:"条件适配/需确认SKU",risk:"中",sourceUrl:"https://www.msi.com/Business-Productivity/Products"
}
,{
id:131,brand:"MSI",model:"Prestige 16 AI Evo B1M",generation:"2024",ports:"2x Thunderbolt 4 with DisplayPort/PD + HDMI 2.1",status:"原生直连",risk:"低",sourceUrl:"https://www.msi.com/Business-Productivity/Prestige-16-AI-Evo-B1MX/Specification"
}
,{
id:132,brand:"MSI",model:"Raider GE78 HX 13V/14V",generation:"2023-2024",ports:"Thunderbolt 4 DP + USB-C DP + HDMI 2.1",status:"原生直连",risk:"低",sourceUrl:"https://www.msi.com/Laptop/Raider-GE78-HX-13VX/Specification"
}
,{
id:133,brand:"Razer",model:"Blade 14",generation:"2025",ports:"2x USB4 Type-C + HDMI 2.1",status:"原生直连",risk:"低",sourceUrl:"https://mysupport.razer.com/app/answers/detail/a_id/15088/~/razer-blade-14%E2%80%9D-%282025%29-%7C-rz09-0530x-support-%26-faqs"
}
,{
id:134,brand:"Razer",model:"Blade 16",generation:"2024",ports:"Thunderbolt 4 USB-C + USB-C + HDMI 2.1",status:"原生直连",risk:"低",sourceUrl:"https://www.razer.com/gaming-laptops/razer-blade-16-2024"
}
,{
id:135,brand:"Razer",model:"Blade 18",generation:"2024/2025",ports:"Thunderbolt/USB-C + HDMI 2.1",status:"原生直连",risk:"低",sourceUrl:"https://mysupport.razer.com/app/answers/detail/a_id/14072/~/razer-blade-18-%282024%29-%7C-rz09-0509x-support-%26-faqs"
}
,{
id:136,brand:"Samsung",model:"Galaxy Book3 Pro / Pro 360 / Ultra",generation:"2023",ports:"2×TB4+HDMI",status:"原生直连",risk:"低",sourceUrl:"https://www.samsung.com/us/computing/galaxy-books/"
}
,{
id:137,brand:"Samsung",model:"Galaxy Book4 Edge 15.6/16",generation:"Snapdragon X",ports:"2x USB4 + HDMI 2.1",status:"原生直连",risk:"低",sourceUrl:"https://www.samsung.com/us/computing/galaxy-books/galaxy-book4-edge/"
}
,{
id:138,brand:"Samsung",model:"Galaxy Book4 Pro / Pro 360",generation:"2024",ports:"2x Thunderbolt 4 + HDMI",status:"原生直连",risk:"低",sourceUrl:"https://image-us.samsung.com/SamsungUS/business/computing/04042024/B2B_GB4_Portfolio_Flyer_V1_2.26.24.pdf"
}
,{
id:139,brand:"Samsung",model:"Galaxy Book4 Ultra",generation:"2024",ports:"2x Thunderbolt 4 + HDMI",status:"原生直连",risk:"低",sourceUrl:"https://www.samsung.com/us/computing/galaxy-books/galaxy-book4-ultra/"
}
,{
id:140,brand:"Samsung",model:"Galaxy Book4 基础款",generation:"2024",ports:"HDMI + USB-C;
 DisplayPort support must be confirmed by SKU",status:"证据不足/待验证",risk:"中",sourceUrl:"https://image-us.samsung.com/SamsungUS/business/computing/04042024/B2B_GB4_Portfolio_Flyer_V1_2.26.24.pdf"
}
,{
id:141,brand:"Samsung",model:"Galaxy Book5 Pro / Pro 360",generation:"2025",ports:"2×TB4+HDMI",status:"原生直连",risk:"低",sourceUrl:"https://www.samsung.com/us/computing/galaxy-books/"
}
],_={
total:141
}
,ie={
原生直连:{
label:"Native direct connection",recommendation:"Use two independent video outputs: two video-capable USB-C ports, or one video-capable USB-C port plus HDMI-to-Type-C.",accessory:"The included signal cables are sufficient;
 add 5V/2A power if brightness or stability is low.",tone:"success"
}
,"条件适配/需确认SKU":{
label:"Conditional — verify exact SKU",recommendation:"The series contains different port configurations. Confirm the full SKU, part number, or MTM and send clear port photos before purchase.",accessory:"Cable or adapter requirements depend on the verified SKU.",tone:"warning"
}
,需DisplayLink:{
label:"H5 DisplayLink required",recommendation:"This laptop does not provide two native external-display paths. Use the H5 DisplayLink adapter and install its DisplayLink driver.",accessory:"H5 DisplayLink adapter or a compatible DisplayLink dock/USB graphics adapter.",tone:"danger"
}
,需扩展坞:{
label:"Compatible dock required",recommendation:"The computer supports two external displays but does not expose two suitable physical video paths for direct dual-side-screen connection.",accessory:"A compatible dual-display Thunderbolt/USB4 dock and the required video cables.",tone:"warning"
}
,不适配原生直连:{
label:"Not compatible with native dual-screen connection",recommendation:"Native connection can drive only one extender side screen. Use H5 DisplayLink for two independent side screens.",accessory:"H5 DisplayLink adapter or a compatible DisplayLink dock/USB graphics adapter.",tone:"danger"
}
,"证据不足/待验证":{
label:"Evidence insufficient — verify before purchase",recommendation:"Official material does not clearly confirm two independent video outputs. Do not promise compatibility without the full SKU and port evidence.",accessory:"To be confirmed after model and port verification.",tone:"neutral"
}

}
;
function v(t){
return t.toLowerCase().replace(/[^a-z0-9]+/g," ").trim()
}
function le(t,s=8){
const o=v(t);
if(o.length<2)return[];
const l=o.split(/\s+/).filter(Boolean);
return ne.map(r=>{
const m=v(r.model),i=v(`${
r.brand
}
 ${
r.model
}
`),p=v(`${
r.brand
}
 ${
r.model
}
 ${
r.generation
}
 ${
r.ports
}
`);
if(!l.every(n=>p.includes(n)))return{
record:r,score:0
}
;
let c=l.reduce((n,h)=>m===h?n+24:m.includes(h)?n+12:i.includes(h)?n+8:n+3,0);
return m===o||i===o?c+=100:(m.includes(o)||i.includes(o))&&(c+=40),{
record:r,score:c
}

}
).filter(r=>r.score>0).sort((r,m)=>m.score-r.score||r.record.id-m.record.id).slice(0,s).map(r=>r.record)
}
const de="/assets/anyking-cable-guide-VsGKTGaC.png",ce={
success:"border-emerald-200 bg-emerald-50 text-emerald-800",warning:"border-amber-200 bg-amber-50 text-amber-800",danger:"border-red-200 bg-red-50 text-red-800",neutral:"border-slate-200 bg-slate-50 text-slate-700"
}
,pe={
低:"Low risk",中:"Medium risk",高:"High risk"
}
,X=[{
key:"usb-a-to-c",name:"USB-A to USB-C",badge:"Power / helper cable",note:"Use this only as a helper path for power or data. Standard USB-A does not carry display video by itself.",connector:"usb-a-to-c"
}
,{
key:"usb-c-to-c",name:"USB-C to USB-C",badge:"Best direct connection",note:"Use this when the laptop USB-C port supports DisplayPort Alt Mode, USB4, or Thunderbolt video output.",connector:"usb-c-to-c"
}
,{
key:"hdmi-to-type-c",name:"HDMI to Type-C",badge:"HDMI fallback",note:"Use this for laptops with HDMI output when USB-C video support is missing or unclear.",connector:"hdmi-to-type-c"
}
,{
key:"h5-hdmi-adapter",name:"H5 DisplayLink Adapter",badge:"Limited-display expansion",note:"Use this with the DisplayLink driver when the laptop cannot provide enough independent native video outputs.",connector:"h5-hdmi-adapter"
}
];
function A({
connector:t
}
){
return t==="usb-a-to-c"?e.jsxs("svg",{
viewBox:"0 0 320 180",className:"h-full w-full",role:"img","aria-hidden":"true",children:[e.jsx("path",{
d:"M86 62 v52 c0 42 148 42 148 0 V80",fill:"none",stroke:"#8f9499",strokeWidth:"10",strokeLinecap:"round"
}
),e.jsx("rect",{
x:"56",y:"28",width:"60",height:"50",rx:"5",fill:"#9da1a5"
}
),e.jsx("rect",{
x:"61",y:"8",width:"50",height:"24",rx:"3",fill:"#f4f5f6",stroke:"#8f9499",strokeWidth:"5"
}
),e.jsx("rect",{
x:"78",y:"18",width:"9",height:"9",fill:"#8f9499"
}
),e.jsx("rect",{
x:"96",y:"18",width:"9",height:"9",fill:"#8f9499"
}
),e.jsx("rect",{
x:"216",y:"65",width:"36",height:"58",rx:"6",fill:"#9da1a5"
}
),e.jsx("rect",{
x:"223",y:"47",width:"22",height:"20",rx:"2",fill:"#f4f5f6",stroke:"#8f9499",strokeWidth:"5"
}
)]
}
):t==="hdmi-to-type-c"?e.jsxs("svg",{
viewBox:"0 0 320 180",className:"h-full w-full",role:"img","aria-hidden":"true",children:[e.jsx("path",{
d:"M92 70 v44 c0 42 136 42 136 0 V84",fill:"none",stroke:"#8f9499",strokeWidth:"10",strokeLinecap:"round"
}
),e.jsx("rect",{
x:"60",y:"20",width:"64",height:"64",rx:"8",fill:"#9da1a5"
}
),e.jsx("rect",{
x:"73",y:"10",width:"38",height:"18",rx:"3",fill:"#f4f5f6",stroke:"#8f9499",strokeWidth:"5"
}
),e.jsx("rect",{
x:"78",y:"52",width:"28",height:"5",rx:"2",fill:"#f4f5f6"
}
),e.jsx("rect",{
x:"78",y:"64",width:"28",height:"5",rx:"2",fill:"#f4f5f6"
}
),e.jsx("rect",{
x:"210",y:"70",width:"36",height:"56",rx:"6",fill:"#9da1a5"
}
),e.jsx("rect",{
x:"217",y:"52",width:"22",height:"20",rx:"2",fill:"#f4f5f6",stroke:"#8f9499",strokeWidth:"5"
}
)]
}
):t==="h5-hdmi-adapter"?e.jsxs("svg",{
viewBox:"0 0 320 180",className:"h-full w-full",role:"img","aria-hidden":"true",children:[e.jsx("path",{
d:"M102 88 v34 c0 34 116 34 116 0 V92",fill:"none",stroke:"#8f9499",strokeWidth:"10",strokeLinecap:"round"
}
),e.jsx("rect",{
x:"69",y:"34",width:"66",height:"78",rx:"10",fill:"#9da1a5"
}
),e.jsx("path",{
d:"M84 54 h36 v13 l-6 7 H90 l-6 -7 Z",fill:"#f4f5f6",stroke:"#676b70",strokeWidth:"4"
}
),e.jsx("rect",{
x:"91",y:"83",width:"22",height:"4",rx:"2",fill:"#676b70"
}
),e.jsx("rect",{
x:"91",y:"94",width:"22",height:"4",rx:"2",fill:"#676b70"
}
),e.jsx("rect",{
x:"202",y:"78",width:"36",height:"54",rx:"6",fill:"#9da1a5"
}
),e.jsx("rect",{
x:"209",y:"60",width:"22",height:"20",rx:"2",fill:"#f4f5f6",stroke:"#8f9499",strokeWidth:"5"
}
)]
}
):e.jsxs("svg",{
viewBox:"0 0 320 180",className:"h-full w-full",role:"img","aria-hidden":"true",children:[e.jsx("path",{
d:"M92 64 v54 c0 40 136 40 136 0 V64",fill:"none",stroke:"#8f9499",strokeWidth:"10",strokeLinecap:"round"
}
),e.jsx("rect",{
x:"74",y:"48",width:"36",height:"58",rx:"6",fill:"#9da1a5"
}
),e.jsx("rect",{
x:"81",y:"30",width:"22",height:"20",rx:"2",fill:"#f4f5f6",stroke:"#8f9499",strokeWidth:"5"
}
),e.jsx("rect",{
x:"210",y:"48",width:"36",height:"58",rx:"6",fill:"#9da1a5"
}
),e.jsx("rect",{
x:"217",y:"30",width:"22",height:"20",rx:"2",fill:"#f4f5f6",stroke:"#8f9499",strokeWidth:"5"
}
)]
}
)
}
function ue(t){
if(t)return X.find(s=>s.key===t)
}
function me(t){
return t.split(/\s*\|\s*|\s+(?=https?:\/\/)/)[0]
}
function he(t){
if(t.status==="需DisplayLink"||t.status==="不适配原生直连")return"h5-hdmi-adapter";
if(t.status==="原生直连")return t.ports.includes("HDMI")?"hdmi-to-type-c":"usb-c-to-c"
}
function be({
record:t
}
){
const{
lang:s
}
=P(),o=s==="ja",l=ie[t.status],r=me(t.sourceUrl);
return e.jsxs("article",{
className:"rounded-2xl border border-border/70 bg-white p-5 shadow-sm",children:[e.jsxs("div",{
className:"flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between",children:[e.jsxs("div",{
children:[e.jsxs("p",{
className:"text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground",children:[t.brand," · ",t.generation]
}
),e.jsx("h3",{
className:"mt-2 text-xl font-bold",children:t.model
}
)]
}
),e.jsx("span",{
className:`inline-flex w-fit rounded-full border px-3 py-1 text-xs font-bold ${
ce[l.tone]
}
`,children:l.label
}
)]
}
),e.jsxs("dl",{
className:"mt-5 grid gap-4 text-sm md:grid-cols-2",children:[e.jsxs("div",{
children:[e.jsx("dt",{
className:"font-semibold",children:o?"確認済みポート":"Documented ports"
}
),e.jsx("dd",{
className:"mt-1 leading-6 text-muted-foreground",children:t.ports
}
)]
}
),e.jsxs("div",{
children:[e.jsx("dt",{
className:"font-semibold",children:o?"判定リスク":"Assessment risk"
}
),e.jsx("dd",{
className:"mt-1 leading-6 text-muted-foreground",children:pe[t.risk]
}
)]
}
),e.jsxs("div",{
className:"md:col-span-2",children:[e.jsx("dt",{
className:"font-semibold",children:o?"S10 Pro／P7 推奨構成":"S10 Pro / P7 recommendation"
}
),e.jsx("dd",{
className:"mt-1 leading-6 text-muted-foreground",children:l.recommendation
}
)]
}
),e.jsxs("div",{
className:"md:col-span-2",children:[e.jsx("dt",{
className:"font-semibold",children:o?"ケーブル・アクセサリー":"Cable or accessory"
}
),e.jsx("dd",{
className:"mt-1 leading-6 text-muted-foreground",children:l.accessory
}
)]
}
)]
}
),r&&e.jsxs("a",{
href:r,target:"_blank",rel:"noopener noreferrer",className:"mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-primary underline-offset-4 hover:underline",children:[o?"公式仕様を確認":"View official evidence",e.jsx(q,{
className:"h-3.5 w-3.5"
}
)]
}
)]
}
)
}
function fe({
profile:t
}
){
const{
lang:s
}
=P(),o=s==="ja",l=o?[{
title:"1. 完全な型番またはSKUを確認",body:"Windowsでは Win＋R を押して msinfo32 と入力し、「システムモデル」を確認します。MacではAppleメニューから「このMacについて」を開き、モデル、年式、チップを確認してください。本体底面ラベル、注文ページ、SKU、部品番号、Lenovo MTMも確認します。"
}
,{
title:"2. 3画面同時表示の上限を確認",body:"ノートPCまたはGPUの公式仕様で、内蔵画面を表示したまま外部2画面へ出力できるか確認します。外部1画面のみの対応ではS10 Pro／P7の左右両画面を使用できません。"
}
,{
title:"3. 独立した映像出力を数える",body:"映像対応USB-C／Thunderboltが2系統、または映像対応USB-C 1系統とHDMIがあるか確認します。USB-Cの形状、充電、SS、5Gbps、データ、USB4の表記だけでは2系統の映像出力を保証しません。"
}
,{
title:"4. 条件に合う接続方法を選ぶ",body:"独立出力が2系統なら直接接続、外部1画面のみならH5 DisplayLinkとドライバーを使用します。GPUは2画面対応でも適切なポートがない場合は、対応Thunderbolt／USB4ドックを使用してください。"
}
]:[{
title:"1. Find the complete model or SKU",body:"Windows: press Win + R, enter msinfo32, and copy System Model. Mac: open Apple menu → About This Mac and record the model, year, and chip. Also check the bottom label, order page, SKU, part number, or Lenovo MTM."
}
,{
title:"2. Confirm the three-display limit",body:"In the official laptop or GPU specification, verify that the internal laptop screen can stay on together with two external displays. Support for one external display is not enough for both S10 Pro or P7 side screens."
}
,{
title:"3. Count independent video paths",body:"Look for two video-capable USB-C/Thunderbolt outputs, or one video-capable USB-C output plus HDMI. USB-C shape, charging, SS, 5Gbps, data, or USB4 wording alone does not prove two independent display outputs."
}
,{
title:"4. Choose the matching connection result",body:"Two independent paths: native direct connection. Only one native external display: use H5 DisplayLink and its driver. GPU supports two displays but suitable ports are missing: use a compatible Thunderbolt/USB4 dock. If the specification is unclear, do not promise compatibility yet."
}
];
return e.jsxs("div",{
className:"space-y-5",children:[e.jsxs("div",{
className:"flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950",children:[e.jsx(G,{
className:"mt-0.5 h-5 w-5 shrink-0"
}
),e.jsxs("div",{
children:[e.jsx("p",{
className:"font-bold",children:o?"確認済みデータがありません—次の4ステップで確認してください":"No verified record found — check it with these four steps"
}
),e.jsx("p",{
className:"mt-1",children:o?"USB-C端子の形状だけで判断しないでください。公式仕様とポート情報を確認し、左右2画面を使用できるか判定します。":"Do not judge by the USB-C connector alone. Follow the official specification and port evidence below to determine whether both side screens can work."
}
)]
}
)]
}
),t&&e.jsxs("div",{
className:"rounded-xl border border-border/60 bg-muted/30 p-4",children:[e.jsx("p",{
className:"text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground",children:o?"シリーズ参考情報—最終判定ではありません":"Preliminary family reference — not a final verdict"
}
),e.jsx("p",{
className:"mt-2 font-bold",children:t.family
}
),e.jsx("p",{
className:"mt-2 text-sm leading-6 text-muted-foreground",children:o?`一般的な接続：${
t.connection
}
。代表的なケーブル：${
t.cable
}
。購入前に正確なSKUと外部2画面対応をご確認ください。`:`Common connection: ${
t.connection
}
. Typical cable reference: ${
t.cable
}
. Confirm the exact SKU and two-display capability before purchase.`
}
)]
}
),e.jsx("ol",{
className:"grid gap-4 md:grid-cols-2",children:l.map(r=>e.jsxs("li",{
className:"rounded-xl border border-border/60 bg-white p-5",children:[e.jsx("h3",{
className:"font-bold",children:r.title
}
),e.jsx("p",{
className:"mt-2 text-sm leading-7 text-muted-foreground",children:r.body
}
)]
}
,r.title))
}
),e.jsxs("div",{
className:"rounded-xl border border-primary/25 bg-primary/5 p-5",children:[e.jsx("h3",{
className:"font-bold",children:o?"判断できない場合は、次の情報をサポートへお送りください":"Still unsure? Send these details to support"
}
),e.jsx("p",{
className:"mt-2 text-sm leading-7 text-muted-foreground",children:o?"完全な型番／SKUまたはMTM、CPU／GPU、OS、ノートPC左右側面の鮮明な写真、公式仕様ページのリンクをお送りください。S10 Pro／P7の接続方法を確認します。":"Full model/SKU or MTM, CPU/GPU, operating system, clear photos of both laptop sides, and the official specification link. We can then confirm the S10 Pro / P7 connection path."
}
),e.jsxs("div",{
className:"mt-4 flex flex-wrap gap-3",children:[e.jsx(U,{
asChild:!0,size:"sm",className:"rounded-full",children:e.jsx("a",{
href:"mailto:service@anykingscreen.com?subject=S10%20Pro%20%2F%20P7%20Compatibility%20Check",children:o?"互換性情報をメールで送る":"Email compatibility details"
}
)
}
),e.jsx(U,{
asChild:!0,size:"sm",variant:"outline",className:"rounded-full",children:e.jsx("a",{
href:"#cable-guide",children:o?"ケーブルガイドを見る":"Review the cable guide"
}
)
}
)]
}
)]
}
)]
}
)
}
function ge(t){
const s=t.match(/(19|20)\d{
2
}
/);
return s?Number(s[0]):null
}
function xe(t,s){
return new RegExp(`(^|\\s)${
s.replace(/\s+/g,"\\s+")
}
(\\s|$)`).test(t)
}
function ye(t){
const s=N(t);
if(!s)return{
profile:null,label:"Waiting",summary:"Enter the full laptop model or SKU to check whether it can drive both side screens on an S10 Pro or P7."
}
;
const o=ge(s);
let l=null,r=0;
for(const i of ae){
const p=[i.family,...i.aliases].map(N);
let c=0;
for(const n of p)s===n&&(c+=12),s.includes(n)&&(c+=8),n.includes(s)&&s.length>=8&&(c+=3);
o!==null&&o>=i.yearRange[0]&&o<=i.yearRange[1]&&(c+=4),o!==null&&(o<i.yearRange[0]||o>i.yearRange[1])&&(c-=6),c>r&&(r=c,l=i)
}
if(!l||r<6){
const i=["apple","macbook","dell","lenovo","thinkpad","hp","acer","asus","surface","microsoft","huawei","honor","samsung"].some(p=>xe(s,p));
return{
profile:null,label:i?"Needs more detail":"No exact match",summary:i?"This brand is supported, but the series or year is missing. Add the full model, for example “Dell Inspiron 15 2019” or “Lenovo Yoga 7i 2022”.":"Add the brand, year, or full model name, for example “MacBook Pro 14 2023”."
}

}
const m=l.confidenceLabel==="High"?"High match":l.confidenceLabel==="Strong"?"Strong match":"Brand-level match";
return{
profile:l,label:m,summary:"This is a brand- or family-level reference only. It is not enough to verify two independent side screens;
 add the exact model, SKU, part number, or MTM for a final S10 Pro / P7 assessment."
}

}
function Se(){
const{
lang:t
}
=P(),s=t==="ja",[o,l]=d.useState("Detecting"),[r,m]=d.useState("Detecting"),[i,p]=d.useState("Detecting"),[c,n]=d.useState("Not available");
return d.useEffect(()=>{
const h=navigator.userAgent,b=navigator.platform||"",B=/Edg\//.test(h)?"Edge":/Chrome\//.test(h)?"Chrome":/Safari\//.test(h)?"Safari":/Firefox\//.test(h)?"Firefox":"Unknown browser",M=/Mac/.test(b)||/Mac OS/.test(h)?"macOS":/Win/.test(b)||/Windows/.test(h)?"Windows":/Linux/.test(b)?"Linux":"Unknown OS";
l(M),m(B),p(`${
window.screen.width
}
 × ${
window.screen.height
}
`);
const a=navigator.userAgentData;
a?.getHighEntropyValues?a.getHighEntropyValues(["model","platform","platformVersion"]).then(I=>{
I.model?n(I.model):n("Browser does not expose the exact model")
}
):n("Browser does not expose the exact model")
}
,[]),e.jsxs(f,{
className:"border-border/70 bg-card/80 backdrop-blur",children:[e.jsxs(w,{
children:[e.jsx(D,{
children:s?"現在のデバイス":"Current device"
}
),e.jsx(k,{
className:"text-xl",children:s?"自動検出情報":"Auto-detected info"
}
)]
}
),e.jsxs(g,{
className:"space-y-4",children:[e.jsxs("dl",{
className:"grid gap-3 text-sm",children:[e.jsxs("div",{
className:"rounded-lg border border-border/60 bg-muted/30 p-3",children:[e.jsx("dt",{
className:"text-muted-foreground text-xs uppercase tracking-[0.16em]",children:"OS"
}
),e.jsx("dd",{
className:"mt-1 font-medium",children:o
}
)]
}
),e.jsxs("div",{
className:"rounded-lg border border-border/60 bg-muted/30 p-3",children:[e.jsx("dt",{
className:"text-muted-foreground text-xs uppercase tracking-[0.16em]",children:s?"ブラウザ":"Browser"
}
),e.jsx("dd",{
className:"mt-1 font-medium",children:r
}
)]
}
),e.jsxs("div",{
className:"rounded-lg border border-border/60 bg-muted/30 p-3",children:[e.jsx("dt",{
className:"text-muted-foreground text-xs uppercase tracking-[0.16em]",children:s?"画面":"Screen"
}
),e.jsx("dd",{
className:"mt-1 font-medium",children:i
}
)]
}
),e.jsxs("div",{
className:"rounded-lg border border-border/60 bg-muted/30 p-3",children:[e.jsx("dt",{
className:"text-muted-foreground text-xs uppercase tracking-[0.16em]",children:s?"モデル":"Model"
}
),e.jsx("dd",{
className:"mt-1 font-medium",children:c
}
)]
}
)]
}
),e.jsx("p",{
className:"text-sm leading-6 text-muted-foreground",children:s?"ブラウザからノートPCの正確な型番を直接取得することはできないため、デバイス環境を自動検出し、入力された型番と組み合わせて確認します。":"Browsers usually cannot read the exact laptop model directly, so we only auto-detect the device environment and combine it with your input."
}
)]
}
)]
}
)
}
function He(){
const{
t,lang:s
}
=P(),o=s==="ja",[l,r]=d.useState(""),m=l.trim(),i=d.useMemo(()=>le(m),[m]),p=i.length>0,c=m.length>=2&&!p,n=d.useMemo(()=>ye(l),[l]),h=i.length===1?he(i[0]):void 0,b=ue(h),B=p?i.length===1?i[0].model:o?`${
i.length
}
件の確認済みバリエーション`:`${
i.length
}
 verified variants found`:c?o?"確認済みデータベースに型番が見つかりません":"Model not found in the verified database":n.profile?n.profile.family:o?"型番を入力してください":"Start by entering a model",M=p?o?"この確認結果はS10 ProとP7の両方に適用されます。どちらもノートPC画面を表示したまま、左右2画面へ独立して出力する必要があります。":"This verified assessment applies to both S10 Pro and P7 because each product must run two independent side screens while the laptop screen stays on.":c?o?"入力された型番について確認済みの判定を出せませんでした。以下の手順でS10 Pro／P7の正しい接続方法をご確認ください。":"We could not issue a verified verdict for this input. Use the guided checks below to determine the correct S10 Pro / P7 connection path.":o?"ノートPCの完全な型番またはSKUを入力すると、S10 Pro／P7の左右2画面を使用できるか確認できます。":n.summary;
return e.jsxs(O,{
children:[e.jsx("section",{
className:"mx-auto max-w-7xl px-5 lg:px-10 pt-12 pb-8",children:e.jsxs("div",{
className:"grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start",children:[e.jsxs("div",{
className:"space-y-5",children:[e.jsx(x,{
variant:"secondary",className:"w-fit rounded-full px-3 py-1",children:o?`S10 Pro／P7 互換性チェック・確認済み ${
_.total
}
件`:`S10 Pro / P7 checker · ${
_.total
}
 verified records`
}
),e.jsxs("div",{
className:"space-y-3",children:[e.jsx("h1",{
className:"max-w-3xl text-4xl font-bold tracking-tight md:text-6xl",children:o?"ノートPCの型番を入力して、左右2画面の互換性を確認。":"Enter your laptop model to check both extender screens."
}
),e.jsx("p",{
className:"max-w-2xl text-lg text-muted-foreground leading-8",children:o?"ノートPC画面を表示したまま、S10 ProまたはP7の左右2画面へ独立して出力できるかを確認します。直接接続、H5 DisplayLink、ドック、または正確なSKU確認のどれが必要かをご案内します。":"We check whether the laptop can keep its internal screen on while independently driving both side screens on an S10 Pro or P7. The result will identify native connection, H5 DisplayLink, dock, or exact-SKU verification requirements."
}
)]
}
),e.jsxs("div",{
className:"flex flex-col gap-3 rounded-2xl border border-border/70 bg-card p-4 shadow-sm sm:flex-row",children:[e.jsxs("div",{
className:"relative flex-1",children:[e.jsx(Z,{
className:"pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
}
),e.jsx(R,{
value:l,onChange:a=>r(a.target.value),placeholder:o?"例：MacBook Air M2 / Inspiron 15 3530 / 21KC...":"For example: MacBook Air M2 / Inspiron 15 3530 / 21KC...",className:"h-12 rounded-xl pl-9 text-base"
}
)]
}
),e.jsx(U,{
type:"button",size:"lg",className:"h-12 rounded-xl px-6",onClick:()=>r(l.trim()),children:o?"今すぐ確認":"Match now"
}
)]
}
),e.jsx("div",{
className:"flex flex-wrap gap-2",children:["MacBook Air M2","Dell Inspiron 15 3530","Surface Laptop 6","ThinkPad X1 Carbon Gen 12","HP EliteBook 840 G11","Acer Aspire 5 A515-58M"].map(a=>e.jsx(U,{
type:"button",variant:"outline",size:"sm",className:"rounded-full",onClick:()=>r(a),children:a
}
,a))
}
)]
}
),e.jsx(Se,{

}
)]
}
)
}
),e.jsxs("section",{
className:"mx-auto grid max-w-7xl gap-6 px-5 pb-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-10",children:[e.jsxs(f,{
className:"border-border/70 bg-card/80 backdrop-blur",children:[e.jsxs(w,{
children:[e.jsx(D,{
children:o?"確認結果":"Match result"
}
),e.jsxs("div",{
className:"flex flex-wrap items-center gap-3",children:[e.jsx(k,{
className:"text-2xl md:text-3xl",children:B
}
),e.jsx(x,{
variant:p||n.profile?"default":"secondary",children:p?o?"確認済みモデルデータ":"Verified model data":c?o?"手動確認が必要":"Self-check required":n.label
}
)]
}
)]
}
),e.jsxs(g,{
className:"space-y-6",children:[e.jsx("p",{
className:"max-w-2xl text-muted-foreground leading-7",children:M
}
),p?e.jsxs("div",{
className:"space-y-4",children:[i.length>1&&e.jsxs("div",{
className:"flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950",children:[e.jsx(G,{
className:"mt-0.5 h-5 w-5 shrink-0"
}
),e.jsx("p",{
children:o?"同じモデル名に複数のハードウェア構成があります。ケーブルを選ぶ前に、世代、筐体、SKU、部品番号、MTMを照合してください。":"This model name has multiple hardware variants. Match the generation, chassis, SKU, part number, or MTM before choosing a cable."
}
)]
}
),i.map(a=>e.jsx(be,{
record:a
}
,a.id))]
}
):c?e.jsx(fe,{
profile:n.profile
}
):e.jsxs("div",{
className:"grid gap-3 md:grid-cols-3",children:[e.jsxs("div",{
className:"rounded-xl border border-border/60 bg-muted/30 p-4",children:[e.jsx("p",{
className:"text-xs uppercase tracking-[0.16em] text-muted-foreground",children:o?"接続方式":"Connection"
}
),e.jsx("p",{
className:"mt-2 text-sm font-semibold leading-6",children:n.profile?n.profile.connection:o?"確認待ち":"Pending"
}
)]
}
),e.jsxs("div",{
className:"rounded-xl border border-border/60 bg-muted/30 p-4",children:[e.jsx("p",{
className:"text-xs uppercase tracking-[0.16em] text-muted-foreground",children:o?"推奨ケーブル":"Recommended cable"
}
),e.jsx("p",{
className:"mt-2 text-sm font-semibold leading-6",children:n.profile?n.profile.cable:o?"確認待ち":"Pending"
}
)]
}
),e.jsxs("div",{
className:"rounded-xl border border-border/60 bg-muted/30 p-4",children:[e.jsx("p",{
className:"text-xs uppercase tracking-[0.16em] text-muted-foreground",children:o?"一致レベル":"Match level"
}
),e.jsx("p",{
className:"mt-2 text-sm font-semibold leading-6",children:n.profile?n.profile.confidenceLabel:o?"不明":"Unknown"
}
)]
}
)]
}
),!c&&e.jsxs("div",{
className:"rounded-2xl border border-border/60 bg-muted/20 p-5",children:[e.jsx("h3",{
className:"mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground",children:o?"注意事項":"Notes"
}
),e.jsx("ul",{
className:"space-y-3 text-sm leading-7 text-foreground/80",children:p?e.jsxs(e.Fragment,{
children:[e.jsxs("li",{
className:"flex gap-3",children:[e.jsx(j,{
className:"mt-1 h-4 w-4 shrink-0 text-primary"
}
),e.jsx("span",{
children:"The assessment assumes the laptop screen stays on while both side screens on the S10 Pro or P7 run as independent extended displays."
}
)]
}
),e.jsxs("li",{
className:"flex gap-3",children:[e.jsx(L,{
className:"mt-1 h-4 w-4 shrink-0 text-primary"
}
),e.jsx("span",{
children:"“Official-spec supported” is not the same as per-device testing. Regional SKU, BIOS, cables, drivers, and power can still affect the final result."
}
)]
}
)]
}
):n.profile?n.profile.notes.map(a=>e.jsxs("li",{
className:"flex gap-3",children:[e.jsx(L,{
className:"mt-1 h-4 w-4 shrink-0 text-primary"
}
),e.jsx("span",{
children:a
}
)]
}
,a)):e.jsxs(e.Fragment,{
children:[e.jsxs("li",{
className:"flex gap-3",children:[e.jsx(j,{
className:"mt-1 h-4 w-4 shrink-0 text-primary"
}
),e.jsx("span",{
children:"Try a full model or SKU, for example “Dell Inspiron 15 3530” or “21KC”."
}
)]
}
),e.jsxs("li",{
className:"flex gap-3",children:[e.jsx(T,{
className:"mt-1 h-4 w-4 shrink-0 text-primary"
}
),e.jsx("span",{
children:"You can also click one of the popular models above to see the output format."
}
)]
}
)]
}
)
}
)]
}
),!c&&e.jsx("div",{
className:"rounded-2xl border border-primary/25 bg-primary/5 p-5",children:e.jsxs("div",{
className:"grid gap-4 sm:grid-cols-[180px_1fr] sm:items-center",children:[e.jsx("div",{
className:"rounded-xl border border-border/60 bg-white p-3",children:b?e.jsx(A,{
connector:b.connector
}
):e.jsx("div",{
className:"flex aspect-[16/9] items-center justify-center text-muted-foreground",children:e.jsx(T,{
className:"h-10 w-10"
}
)
}
)
}
),e.jsxs("div",{
className:"space-y-2",children:[e.jsx(x,{
className:"rounded-full px-3 py-1",children:b?b.badge:p?"Variant-specific connection":"No cable selected yet"
}
),e.jsx("h3",{
className:"text-xl font-semibold",children:b?b.name:p?"Follow the exact result above":"Enter a full laptop model"
}
),e.jsx("p",{
className:"text-sm leading-6 text-muted-foreground",children:b?b.note:p?"The matched variants require different cables or accessories, so confirm the exact SKU before connecting both side screens.":"After the page recognizes the model, this area highlights the exact cable image shoppers should recognize."
}
)]
}
)]
}
)
}
)]
}
)]
}
),e.jsxs(f,{
className:"border-border/70 bg-card/80 backdrop-blur",children:[e.jsxs(w,{
children:[e.jsx(D,{
children:t.grid.title
}
),e.jsx(k,{
className:"text-2xl",children:o?"最適なモニター接続方法":"How our monitors connect best"
}
)]
}
),e.jsxs(g,{
className:"space-y-4",children:[e.jsxs("div",{
className:"rounded-xl border border-border/60 bg-muted/30 p-4",children:[e.jsx("p",{
className:"text-xs uppercase tracking-[0.16em] text-muted-foreground",children:"Primary option"
}
),e.jsx("p",{
className:"mt-2 text-sm leading-6",children:"A full-featured USB-C cable. If the laptop supports video output, this is usually the most reliable direct connection."
}
)]
}
),e.jsxs("div",{
className:"rounded-xl border border-border/60 bg-muted/30 p-4",children:[e.jsx("p",{
className:"text-xs uppercase tracking-[0.16em] text-muted-foreground",children:"H5 DisplayLink support case"
}
),e.jsx("p",{
className:"mt-2 text-sm leading-6",children:"If the laptop cannot provide enough independent native video outputs, the H5 DisplayLink Adapter and driver can add the required display path."
}
)]
}
),e.jsxs("div",{
className:"rounded-xl border border-border/60 bg-muted/30 p-4",children:[e.jsx("p",{
className:"text-xs uppercase tracking-[0.16em] text-muted-foreground",children:o?"ご注意":"Reminder"
}
),e.jsx("p",{
className:"mt-2 text-sm leading-6",children:"Automatic detection in the browser usually cannot get the exact model, so the final decision still depends on the full model the user enters."
}
)]
}
),e.jsx(U,{
asChild:!0,className:"w-full rounded-xl",children:e.jsxs(z,{
to:"/products",children:["View products ",e.jsx(V,{
className:"h-4 w-4"
}
)]
}
)
}
)]
}
)]
}
)]
}
),e.jsxs("section",{
id:"cable-guide",className:"mx-auto max-w-7xl scroll-mt-24 px-5 pb-8 lg:px-10",children:[e.jsxs("div",{
className:"mb-4 flex flex-wrap items-end justify-between gap-4",children:[e.jsxs("div",{
children:[e.jsx("p",{
className:"text-xs uppercase tracking-[0.3em] text-primary mb-2",children:"— Cable guide"
}
),e.jsx("h2",{
className:"text-3xl font-bold md:text-4xl",children:o?"名前だけでなく、ケーブル形状で確認":"Show the cable, not just the name"
}
)]
}
),e.jsx("p",{
className:"max-w-2xl text-sm text-muted-foreground leading-6",children:"These visual cards help shoppers recognize the connector shape right away, so they know which cable to grab before they buy."
}
)]
}
),e.jsx("div",{
className:"mb-5 overflow-hidden rounded-xl border border-border/70 bg-white",children:e.jsx("img",{
src:de,alt:"USB-A to USB-C, USB-C to USB-C, HDMI to Type-C, and H5 DisplayLink Adapter cable guide",className:"w-full object-cover"
}
)
}
),e.jsx("div",{
className:"grid gap-4 md:grid-cols-2 xl:grid-cols-4",children:X.map(a=>e.jsxs(f,{
className:"overflow-hidden border-border/70 bg-card/90 shadow-sm",children:[e.jsx("div",{
className:"border-b border-border/60 bg-white p-4",children:e.jsx("div",{
className:"rounded-xl border border-border/60 bg-white p-3",children:e.jsx(A,{
connector:a.connector
}
)
}
)
}
),e.jsxs(g,{
className:"space-y-3 p-4",children:[e.jsxs("div",{
className:"space-y-1",children:[e.jsx(x,{
variant:"secondary",className:"rounded-full px-3 py-1",children:a.badge
}
),e.jsx(k,{
className:"text-lg",children:a.name
}
)]
}
),e.jsx("p",{
className:"text-sm leading-6 text-muted-foreground",children:a.note
}
)]
}
)]
}
,a.name))
}
)]
}
),e.jsxs("section",{
className:"mx-auto max-w-7xl px-5 pb-10 lg:px-10",children:[e.jsxs("div",{
className:"mb-4 flex flex-wrap items-end justify-between gap-4",children:[e.jsxs("div",{
children:[e.jsx("p",{
className:"text-xs uppercase tracking-[0.3em] text-primary mb-2",children:"— Brand interface reference"
}
),e.jsx("h2",{
className:"text-3xl font-bold md:text-4xl",children:"Common ports by brand, before you type the model"
}
)]
}
),e.jsx("p",{
className:"max-w-2xl text-sm text-muted-foreground leading-6",children:"This is the quick mental map support teams use: which brands are usually USB-C direct, and which ones may require HDMI or H5 DisplayLink."
}
)]
}
),e.jsx("div",{
className:"grid gap-4 md:grid-cols-2 xl:grid-cols-3",children:re.map(a=>e.jsxs(f,{
className:"border-border/70 bg-card/85 shadow-sm",children:[e.jsxs(w,{
className:"space-y-2",children:[e.jsx(x,{
variant:"secondary",className:"w-fit rounded-full px-3 py-1",children:a.brand
}
),e.jsx(k,{
className:"text-xl",children:a.commonPorts
}
)]
}
),e.jsxs(g,{
className:"space-y-4 text-sm leading-6 text-muted-foreground",children:[e.jsxs("div",{
children:[e.jsx("p",{
className:"text-xs uppercase tracking-[0.16em] text-foreground/70",children:"Direct path"
}
),e.jsx("p",{
className:"mt-1",children:a.directPath
}
)]
}
),e.jsxs("div",{
children:[e.jsx("p",{
className:"text-xs uppercase tracking-[0.16em] text-foreground/70",children:"Fallback path"
}
),e.jsx("p",{
className:"mt-1",children:a.fallbackPath
}
)]
}
)]
}
)]
}
,a.brand))
}
)]
}
),e.jsxs("section",{
className:"mx-auto max-w-7xl px-5 pb-24 lg:px-10",children:[e.jsxs("div",{
className:"mb-6 flex flex-wrap items-end justify-between gap-4",children:[e.jsxs("div",{
children:[e.jsx("p",{
className:"text-xs uppercase tracking-[0.3em] text-primary mb-2",children:"— Interface trends over the last decade"
}
),e.jsx("h2",{
className:"text-3xl font-bold md:text-4xl",children:"Start with brand, then narrow by year"
}
)]
}
),e.jsx("p",{
className:"max-w-xl text-sm text-muted-foreground leading-6",children:"This table is a quick filter for users who only know the brand and rough year. The final answer still depends on the exact model."
}
)]
}
),e.jsx(f,{
className:"border-border/70 bg-card/80 backdrop-blur",children:e.jsx(g,{
className:"p-0",children:e.jsxs(K,{
children:[e.jsx(F,{
children:e.jsxs(C,{
children:[e.jsx(y,{
className:"min-w-[140px]",children:o?"ブランド":"Brand"
}
),e.jsx(y,{
className:"min-w-[220px]",children:"2015 - 2017"
}
),e.jsx(y,{
className:"min-w-[220px]",children:"2018 - 2020"
}
),e.jsx(y,{
className:"min-w-[220px]",children:"2021 - 2026"
}
),e.jsx(y,{
className:"min-w-[220px]",children:o?"一般的な接続":"Common fit"
}
)]
}
)
}
),e.jsx(E,{
children:se.map(a=>e.jsxs(C,{
children:[e.jsx(S,{
className:"font-semibold align-top",children:a.brand
}
),e.jsx(S,{
className:"align-top leading-6 text-muted-foreground",children:a.early
}
),e.jsx(S,{
className:"align-top leading-6 text-muted-foreground",children:a.middle
}
),e.jsx(S,{
className:"align-top leading-6 text-muted-foreground",children:a.recent
}
),e.jsx(S,{
className:"align-top leading-6 text-muted-foreground",children:e.jsx(x,{
variant:"outline",className:"rounded-full px-3 py-1 text-xs font-medium",children:a.adapter
}
)
}
)]
}
,a.brand))
}
)]
}
)
}
)
}
)]
}
)]
}
)
}
export{
He as component
}
;

