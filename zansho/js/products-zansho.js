/**
 * 📦 ZANSHO WHOLESALE & DISTRIBUTION - Product Data (ULTRA PERFORMANCE EDITION)
 * 📁 Path: /js/products-zansho.js
 */
(function () {
'use strict';

// 🎛️ CONFIGURATION
const CONFIG = {
  // ⚠️ Paste your Google Apps Script /exec URL after deploying Code.gs
  SHEETS_API_URL: "https://script.google.com/macros/s/AKfycby9kOKoD1_gnhLFsomqg6gyulWE7VtP4OMyvEhI5kKjIGVPIbSEbjyV57Enuiwq0O51lQ/exec",
  basePath: "",
  imageDir: "images/products",
  fallbackImage: "https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=800&q=80",
  businessName: "Zansho Wholesale & Distribution",
  businessLogo: "images/zansho-logo.png",
  CACHE_KEY: "zansho_products_cache_v1",
  CACHE_TTL: 10 * 60 * 1000,
  // ⚠️ TODO: REPLACE with Zansho's real WhatsApp number (country code, no +)
  WHATSAPP_NUMBER: "27000000000",
  resolveImage: function (src) {
    if (!src) return CONFIG.fallbackImage;
    if (/^https?:\/\//.test(src)) return src;
    if (src.indexOf('/') === 0 || src.indexOf(CONFIG.basePath) === 0) return src;
    return CONFIG.basePath + CONFIG.imageDir + "/" + src;
  }
};
window.ZANSHO_CONFIG = CONFIG;

// Compact product factory: P(id,name,price,category,desc,moq,rrp,colours,badge,active,imageUrl)
function P(id,name,price,cat,desc,moq,rrp,colours,badge,active,imageUrl){
  return { id:id, name:name, price:price, category:cat, niche:"wholesale", location:"south-africa",
    description:desc, moq:moq||1, rrp:rrp||"", colours:colours||"", badge:badge||"",
    image: imageUrl || (CONFIG.imageDir+"/"+id+".webp"), popupImages:[],
    businessName:CONFIG.businessName, businessLogo:CONFIG.businessLogo,
    whatsappNumber:CONFIG.WHATSAPP_NUMBER, active:active!==false };
}

// 📦 STATIC FALLBACK CATALOGUE (from Stock Price List 15)
const FALLBACK_PRODUCTS = [
// ── CHARGERS & CABLES ──
P("aspor-100mm-c-usb-a","Aspor 100mm C-Type to USB-A Cable",21,"Chargers","Compact charging cable for power banks, car chargers and desk charging where space is tight.",18,"R50–R60","White","💰 Value",true,"https://user16425.na.imgto.link/zansho/20260821/image.avif"),
P("aspor-100mm-lightning","Aspor 100mm Lightning to USB-A Cable",24,"Chargers","Compact charging cable for power banks and travel kits with iPhone/iPad devices.",18,"R50–R60","White",true,"https://user16425.na.imgto.link/zansho/20260821/image-1.avif"),
P("mobimart-usb-c-to-c","Mobimart Android USB-C to C Cable",26,"Chargers","Charging and data transfer for Android smartphones and USB-C devices.",18,"R55–R65","White, Blue","",false,"https://images.unsplash.com/photo-1541140597334-5911438991a0?auto=format&fit=crop&w=800&q=80"),
P("genlink-lightning-to-c","Genlink iPhone Lightning to C-Type Cable",27,"Chargers","Fast charging iPhone/iPad from USB-C power sources and laptops.",18,"R55–R65","White","",false,"https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=800&q=80"),
P("itech-1m-usb-c-cable","iTech 1m USB-C Cable (Fast Charge)",28,"Chargers","Fast-charging & data sync for Android phones, tablets, Nintendo Switch, USB-C laptops.",18,"R65–R70","Black",true,"https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80"),
P("itech-1m-lightning-c","iTech 1m Lightning USB-C Cable (Fast Charge)",29,"Chargers","Fast charging & sync for iPhone and iPad with Lightning port via USB-C PD.",18,"R65–R70","White",true,"https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"),
P("aspor-a173-type-c","Aspor A173 Type-C Fast Data Cable",26,"Chargers","Everyday charging and data transfer for USB-C smartphones and accessories.",18,"R50–R60","White",true,"https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80"),
P("itech-2m-lightning-c","iTech 2m Lightning USB-C Cable",36,"Chargers","Extra-length fast charging & sync for iPhone/iPad, ideal for bedside or desk use.",12,"R70–R80","White",true,"https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=800&q=80"),
P("aspor-a818-charger","Aspor A818 USB Charger",44,"Chargers","2.4A fast charging output, includes USB to Type-C cable, intelligent safety protection.",12,"R70–R80","White",true,"https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80"),
P("aspor-a811-dual-adapter","Aspor A811 Dual USB Adapter",58,"Chargers","Dual USB ports for charging multiple devices, 2.4A output with IQ intelligent charging.",12,"R80–R90","Black",true,"https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80"),
P("35w-usb-c-adapter","35W USB-C Adapter",58,"Chargers","Fast wall charging for Android and iPhone devices, supports PD/QC fast-charge protocols.",12,"R90–R100","White",true,"https://images.unsplash.com/photo-1622445268465-84024680922c?auto=format&fit=crop&w=800&q=80"),
P("25w-usb-c-adapter","25W USB-C Superfast Adapter",48,"Chargers","Superfast wall charging for smartphones and tablets supporting PD/QC.",12,"R85–R95","White",true,"https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80"),
P("65w-trio-power-adapter","65W Trio Power Adapter",86,"Chargers","Two USB-C ports (65W-25W) and one USB-A port (15W) for laptops, tablets and smartphones.",9,"R140–R160","Black","⭐ Premium",true,"https://images.unsplash.com/photo-1622445268465-84024680922c?auto=format&fit=crop&w=800&q=80"),
P("45w-usb-c-pd-adapter","45W USB-C Power Delivery Adapter",69,"Chargers","Super Fast Charging 2.0 and PPS for smartphones, tablets and laptops via single USB-C port.",9,"R120–R140","Black",true,"https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80"),
P("itech-25w-usb-c-kit","iTech USB-C 25W Fast Charger Kit",76,"Chargers","Complete fast-charging kit (plug + cable) for USB-C smartphones and tablets.",12,"R150–R160","White",true,"https://images.unsplash.com/photo-1585338107529-13afc5f02586?auto=format&fit=crop&w=800&q=80"),
P("itech-25w-lightning-kit","iTech Lightning to USB-C 25W Fast Charger Kit",77,"Chargers","Complete fast-charging kit (plug + cable) for iPhone/iPad.",12,"R150–R160","White",true,"https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"),
P("65w-trio-charger-kit","65W Trio Fast Charger with USB-C to C Cables",111,"Chargers","Multi-device fast charging bundle for households needing charger plus cables in one box.",9,"R170–R200","Black",true,"https://images.unsplash.com/photo-1622445268465-84024680922c?auto=format&fit=crop&w=800&q=80"),
P("itech-magsafe-charger","iTech MagSafe Magnetic Charger",94,"Chargers","Snap-on magnetic charging for compatible smartphones (MagSafe-style attach).",9,"R170–R180","White",true,"https://images.unsplash.com/photo-1622445268465-84024680922c?auto=format&fit=crop&w=800&q=80"),
P("c27-charging-station","C27 Wireless Magnetic Charging Station",248,"Chargers","Simultaneous charging station for phone, earbuds and smartwatch on one dock.",6,"R450–R550","Black","⭐ Premium",true,"https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=800&q=80"),
P("uk-cg01-car-charger","Fast Charging USB-A Car Charger (UK-CG01)",43,"Chargers","On-the-go power delivery with intelligent negotiation to maximise speed and protect batteries.",10,"R70–R80","Blue/Black","💰 Value",true,"https://images.unsplash.com/photo-1541140597334-5911438991a0?auto=format&fit=crop&w=800&q=80"),
P("uk-cg06-car-charger","45W Dual-Port Fast Car Charger (UK-CG06)",64,"Chargers","Dual-port fast charger designed to fit flush into a car cigarette lighter socket.",8,"R180–R200","Black",true,"https://images.unsplash.com/photo-1541140597334-5911438991a0?auto=format&fit=crop&w=800&q=80"),
P("aspor-a931-car-charger","Aspor A931 Dual USB-A Port Car Charger",76,"Chargers","Durable dual-USB car charger with smart IQ adaptive technology and LED indicator.",6,"R150–R160","Grey",true,"https://images.unsplash.com/photo-1541140597334-5911438991a0?auto=format&fit=crop&w=800&q=80"),
P("itech-dual-car-charger","iTech Super Fast Dual Car Charger with USB-C Cable",92,"Chargers","45W USB-C port + 15W USB-A port, 60W max combined output.",6,"R180–R200","Black",true,"https://images.unsplash.com/photo-1541140597334-5911438991a0?auto=format&fit=crop&w=800&q=80"),
P("15w-car-mount-charger","15W Wireless Car Mount Magnetic Charger",98,"Chargers","Qi-standard charger securing your smartphone to the vehicle air vent.",6,"R180–R230","Black/White",true,"https://images.unsplash.com/photo-1616348436168-de43ad0db179?auto=format&fit=crop&w=800&q=80"),
// ── EARPHONES & HEADPHONES ──
P("itech-wired-c-earpods","iTech Wired C-Type Earpods",48,"Earphones & Headphones","Everyday wired audio and calls for USB-C Android smartphones.",10,"R130–R160","White",true,"https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80"),
P("vojo-earpod-sleeves","VOJO Anti-slip Earpods Sleeves",25,"Earphones & Headphones","Anti-slip grip accessory that fits over TWS earbuds to prevent fall-out during activity.",12,"R50–R60","Blue/Green/Pink",true,"https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80"),
P("iphone-wired-earpods","iPhone Wired EarPods",88,"Earphones & Headphones","Plug-&-play wired earpods for Lightning-port iPhone/iPad, no charging needed.",8,"R140–R160","White",true,"https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80"),
P("aspor-usb-c-earpods","Aspor USB-C Wired EarPods (iPhone 15+/Android)",65,"Earphones & Headphones","Wired listening and calls for USB-C smartphones without battery dependency.",8,"R120–R140","White",true,"https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80"),
P("itech-propods-tws","iTech ProPods TWS Earpods",68,"Earphones & Headphones","Wireless calls, music and media playback with charging case for commuting/gym.",10,"R150–R160","White/Black/Blue","🔥 Hot Seller",true,"https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80"),
P("hifi-sport-earphones","HiFi Stereo Sport Earphones",78,"Earphones & Headphones","Sweat-resistant wireless audio for running, gym and sport activities.",10,"R160–R170","White/Black/Blue",true,"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"),
P("f9-5-tws-earbuds","F9-5 TWS Wireless Earbuds",78,"Earphones & Headphones","Compact TWS earbuds with display charging case, reliable wireless audio.",10,"R160–R170","White/Blue",true,"https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80"),
P("m90-pro-earbuds","M90 Pro Earbuds",88,"Earphones & Headphones","True wireless in-ear earbuds for music and hands-free calling with ergonomic case.",8,"R180–R200","Black",true,"https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80"),
P("aspor-smart-earpuds","Aspor Stereo Smart Earpuds",188,"Earphones & Headphones","Smart TWS earbuds with touch controls, stereo sound for music, calls and workouts.",6,"R360–R380","Black",true,"https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80"),
P("aspor-ear-clip","Aspor Ear-Clip Earbuds",268,"Earphones & Headphones","Open-ear clip earbuds, secure comfortable fit with ambient awareness for outdoors.",4,"R400–R450","Black/Grey","⭐ Premium",true,"https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80"),
P("airpods-pro-1","AirPods Pro 1st Generation",177,"Earphones & Headphones","Wireless calls and music with active noise cancelling plus wireless charging case.",6,"R380–R450","White","🔥 Hot Seller",true,"https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80"),
P("aspor-airpods-2","Aspor AirPods 2 2nd Generation",181,"Earphones & Headphones","Everyday wireless music and calling with compact wireless charging case.",6,"R380–R450","White",true,"https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=80"),
P("true-buds-anc-pro","True Buds ANC Pro",232,"Earphones & Headphones","True wireless in-ear earbuds with wireless charging case for active daily use.",6,"R360–R400","Black/Grey",true,"https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80"),
P("mz300-bass-headphones","MZ300 Bass Wireless Headphones",168,"Earphones & Headphones","Bass-enhanced wireless listening for music and movies at home or on the move.",6,"R300–R350","Grey/Black/Brown",true,"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"),
P("p9-pro-headphones","P9 Pro Wireless Headphones",94,"Earphones & Headphones","Foldable wireless audio for music, calls and entertainment, fits all head sizes.",8,"R190–R240","White/Black/Pink","💰 Value",true,"https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80"),
P("sivia-si14-headphones","Sivia Si.14 Wireless Headphones",166,"Earphones & Headphones","Extended Bluetooth bass listening, calls and media with padded over-ear comfort.",6,"R250–R300","Black/Navy",true,"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"),
P("p47-headphones","P47 Wireless Headphones",83,"Earphones & Headphones","Over-ear wireless Bluetooth headphones for home, travel and daily commuting.",8,"R160–R180","White/Black/Blue","💰 Value",true,"https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80"),
P("sounddesigner-m100","SoundDesigner M100 Headphones",134,"Earphones & Headphones","Wired and wireless music and calls with a fashion-forward everyday design.",8,"R230–R260","Pink/Blue/Black",true,"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"),
P("vowm-pro-headset","VOWM PRO Wireless Bass Headset",197,"Earphones & Headphones","Wireless bass headset with mic - hands-free calls, gaming and music in one.",6,"R300–R350","Brown/Grey/Pink",true,"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"),
P("misde-a3-headset","MISDE A3 Gaming Headset",158,"Earphones & Headphones","Gaming audio and voice chat with clear positional sound for console and PC gamers.",6,"R280–R330","Red/Blue/Black",true,"https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=800&q=80"),
// ── ELECTRONICS & GADGETS ──
P("5m-led-striplights","5m LED Striplights",78,"Electronics & Gadgets","Multi-colour remote-control ambient lighting for rooms, gaming setups and décor.",12,"R150–R160","Multi",true,"https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"),
P("nova-lint-remover","NOVA Rechargeable Lint Remover",78,"Electronics & Gadgets","Rechargeable fabric shaver for lint, bobbles and pilling from clothing and upholstery.",8,"R130–R150","White/Black/Blue",true,"https://images.unsplash.com/photo-1585832770485-e68a5fcfad52?auto=format&fit=crop&w=800&q=80"),
P("dt500-trimmer","DT500 Mini Rechargeable Hair Trimmer",74,"Electronics & Gadgets","Rechargeable hair/beard trimmer for grooming and detail trimming at home.",6,"R150–R180","Gold/Silver",true,"https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=800&q=80"),
P("dt508-clipper","DT508-MINI Electric Hair Clipper",88,"Electronics & Gadgets","Electric hair clipper set for salon-style home haircuts and beard grooming.",6,"R160–R180","Black/Blue/Green",true,"https://images.unsplash.com/photo-1621607512214-68297480165e?auto=format&fit=crop&w=800&q=80"),
P("y68-smartwatch","Y68 Fitness Smartwatch",89,"Electronics & Gadgets","Fitness tracker with step counting, heart-rate style tracking and notifications.",8,"R180–R200","Black","💰 Value",true,"https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80"),
P("hw22-pro-smartwatch","HW22 Pro Smartwatch",97,"Electronics & Gadgets","Activity tracking, call-style notifications and everyday all-day wear.",8,"R200–R250","Black",true,"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"),
P("v8-smartwatch","V8 Bluetooth Touch Smart Watch",143,"Electronics & Gadgets","Touchscreen Bluetooth smartwatch with notifications, activity tracking and menu control.",6,"R250–R300","Black",true,"https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80"),
P("series-11-smartwatch","Series 11 SmartWatch",157,"Electronics & Gadgets","Sleek lifestyle smartwatch with notifications and activity tracking on the wrist.",6,"R300–R350","Black",true,"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"),
P("mini-vlogging-kit","Mini Vlogging Kit",97,"Electronics & Gadgets","Vlogging accessory kit (tripod/light/mic mount) for smartphone content creation.",8,"R180–R230","Black",true,"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80"),
P("lavalier-microphone","Android/iPhone Lavalier Microphone",118,"Electronics & Gadgets","Clip-on lavalier mic with clear audio for vlogging, interviews and presentations.",8,"R200–R250","Black",true,"https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=800&q=80"),
P("cy01-smart-sunglasses","CY01 Smart Sunglasses",899,"Electronics & Gadgets","1080p HD video AI smart glasses with Bluetooth voice control and real-time translation.",3,"R1500–R1800","Black","⭐ Premium",true,"https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80"),
P("v03-t8-smart-glasses","V03-T8 Series Smart Glasses",1197,"Electronics & Gadgets","8MP HD camera, 1080p video recording, AI real-time translation and voice assistants.",3,"R1700–R2300","Black","⭐ Premium",true,"https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=800&q=80"),
P("ultra-slim-mouse","Ultra-Slim Wireless Mouse",76,"Electronics & Gadgets","2.4GHz wireless optical mouse for laptops, desktops and home office work.",10,"R130–R150","White/Black",true,"https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80"),
P("k03-keyboard-mouse","K-03 Wireless Keyboard & Mouse Combo",187,"Electronics & Gadgets","2.4GHz plug-and-play wireless keyboard and mouse set for office, study and home.",6,"R360–R400","Black/White",true,"https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80"),
P("ds4-controller","DoubleShock 4 Wireless Controller",209,"Electronics & Gadgets","Wireless gameplay control for PlayStation-compatible and PC gaming setups.",6,"R380–R440","Grey/Military/Blue",true,"https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80"),
P("microworld-controller","MicroWorld Wireless Controller",199,"Electronics & Gadgets","Bluetooth PS4-compatible gamepad with six-axis motion sensing.",6,"R380–R440","Black/Blue/Military",true,"https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80"),
P("jite-kd208b-controller","Jite KD-208B Double Shock Twin USB Controller",138,"Electronics & Gadgets","Entry-level budget gamepad with dual-vibration motors for casual PC gaming.",6,"R250–R300","Black",true,"https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80"),
P("x360-controller","X-360 Controller (PS3/PC/Android)",218,"Electronics & Gadgets","Standard wired USB connection - zero latency, zero battery hassle during matches.",4,"R400–R500","Multi-colour",true,"https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80"),
P("bsp-d3-controller","BSP-D3 Wireless Mobile Gaming Controller",222,"Electronics & Gadgets","Wireless all-in-one gameplay control supporting iOS, Android and PC.",6,"R380–R450","Black",true,"https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80"),
P("sf3500-retro-console","SF3500 Retro Gaming Console",698,"Electronics & Gadgets","Ergonomic wing-style controller console running 14+ classic emulators, plug-and-play.",3,"R960–R1100","Grey","⭐ Premium",true,"https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"),
P("dobe-ps4-dock","Dobe Dual Charging Dock (PS4)",178,"Electronics & Gadgets","Space-saving dual controller charging dock, connects to console or any USB port.",6,"R270–R350","Black",true,"https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=800&q=80"),
P("kinvale-20k-fast-powerbank","KinVale 20,000mAh Fast Charging Power Bank",178,"Electronics & Gadgets","Fast multi-device charging with dual USB-A ports and a Type-C port (3 devices at once).",6,"R300–R400","White","🔥 Hot Seller",true,"https://images.unsplash.com/photo-1609592424089-9a0082987b7a?auto=format&fit=crop&w=800&q=80"),
P("sivia-powerbank","Sivia 1000mAh Power Bank",175,"Electronics & Gadgets","Emergency portable lithium power bank top-up charging for smartphones on the go.",6,"R350–R400","White",true,"https://images.unsplash.com/photo-1609592424089-9a0082987b7a?auto=format&fit=crop&w=800&q=80"),
P("buku-22w-powerbank","Buku 22.5W Superfast Power Bank",199,"Electronics & Gadgets","Compact/pocket-size power bank for rapid top-up charging of multiple smartphones.",6,"R400–R500","Black",true,"https://images.unsplash.com/photo-1609592424089-9a0082987b7a?auto=format&fit=crop&w=800&q=80"),
P("kinvale-10k-wireless-powerbank","KinVale 10,000mAh Wireless Power Bank",268,"Electronics & Gadgets","Cable-free top-ups for Qi-enabled smartphones anywhere, ideal for travel and desk use.",6,"R300–R400","Black/White","",false,"https://images.unsplash.com/photo-1609592424089-9a0082987b7a?auto=format&fit=crop&w=800&q=80"),
P("kinvale-22w-superfast","KinVale 22.5W Superfast Power Bank",247,"Electronics & Gadgets","High-capacity power bank with superfast output for multi-charge of phones and tablets.",6,"R450–R500","Black",true,"https://images.unsplash.com/photo-1609592424089-9a0082987b7a?auto=format&fit=crop&w=800&q=80"),
P("kinvale-20k-powerbank","KinVale 20,000mAh Power Bank",220,"Electronics & Gadgets","Multiple full smartphone charges for extended travel, camping or load-shedding backup.",6,"R450–R500","Black/White",true,"https://images.unsplash.com/photo-1609592424089-9a0082987b7a?auto=format&fit=crop&w=800&q=80"),
P("aspor-10k-wireless-powerbank","Aspor 10,000mAh Fast Wireless Power Bank",287,"Electronics & Gadgets","Fast charging power bank with quick cable-free charging & two USB-C cables included.",6,"R600–R700","Black","⭐ Premium",true,"https://images.unsplash.com/photo-1609592424089-9a0082987b7a?auto=format&fit=crop&w=800&q=80"),
P("amplify-bt-speaker","Amplify Bluetooth Speaker",187,"Electronics & Gadgets","Portable Bluetooth speaker with punchy wireless sound for home, outdoor and travel.",6,"R280–R330","Black",true,"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80"),
P("bivoob-af22-speaker","Bivoob AF22 Music Speaker",196,"Electronics & Gadgets","Bluetooth handheld music speaker, loud portable sound for parties and outdoors.",6,"R280–R330","Black",true,"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80"),
P("amplify-portable-speaker","Amplify Portable Wireless Speaker",237,"Electronics & Gadgets","Compact travel-friendly wireless speaker for music on the move.",6,"R400–R500","Black",true,"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80"),
P("boombox-900","BoomBox 900 Sound Speaker",178,"Electronics & Gadgets","Loud carry-on wireless music playback for gatherings, parties and outdoor events.",6,"R300–R400","Black",true,"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80"),
P("tg415-speaker","T&G TG415 Wireless Speaker",220,"Electronics & Gadgets","Crisp bass portable Bluetooth audio for home, travel and outdoor listening.",6,"R400–R450","Black/Grey/Blue",true,"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80"),
P("nesty-goodbass-soundbar","Nesty GoodBass Mini Soundbar",268,"Electronics & Gadgets","Mini/desktop-length enhanced audio for TVs, laptops, gaming and desktop setups.",6,"R500–R600","Black",true,"https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80"),
P("nesty-lf247-soundbar","Nesty LF247 Mini Soundbar",170,"Electronics & Gadgets","Compact mini soundbar with richer sound for TV, movies and everyday media.",6,"R300–R350","Black",true,"https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80"),
P("nesty-fk219-soundbar","Nesty FK219 Mini Soundbar",170,"Electronics & Gadgets","Mini soundbar with boosted audio clarity and ambience light for TV and gaming.",6,"R300–R350","Black",true,"https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80"),
P("universal-45w-laptop-charger","Universal 45W USB-C Laptop Charger",185,"Electronics & Gadgets","USB-C PD fast charging for ultrabooks, laptops, tablets and supported phones.",6,"R300–R400","Black",true,"https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80"),
P("lenovo-laptop-charger","Lenovo Universal USB-C Laptop Charger",208,"Electronics & Gadgets","65W USB-C universal laptop charger, PD fast charging for Lenovo & other USB-C laptops.",5,"R350–R400","Black",true,"https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=800&q=80"),
// ── HOMEWARE & LIFESTYLE ──
P("pocket-hot-water-bottle","Pocket-In Hot Water Bottles",78,"Homeware & Lifestyle","Fabric-covered hot water bottle with built-in pockets for warmth and comfort.",8,"R130–R150","Grey/Brown/Pink",true,"https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"),
P("hot-water-bottle","Hot Water Bottles",64,"Homeware & Lifestyle","Standard size soft-cover hot water bottle for everyday warmth on chilly evenings.",8,"R110–R130","Multi",true,"https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"),
P("teddy-bear-slippers","Teddy Bear Slippers",144,"Homeware & Lifestyle","Plush teddy slippers, cosy indoor comfort footwear - perfect for home wear and gifting.",6,"R200–R250","Black/Pink/Multi","",false,"https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=800&q=80"),
P("mea-culpa-beanie","Mea Culpa Knitted Beanie",36,"Homeware & Lifestyle","One-size head warmth for winter outdoor and everyday style wear.",15,"R60–R70","Multi","💰 Value",true,"https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?auto=format&fit=crop&w=800&q=80"),
P("3d-skull-ice-mould","3D Skull Ice Mould",64,"Homeware & Lifestyle","Novelty skull ice cubes for cocktails, parties and home entertaining.",12,"R110–R130","White/Black/Blue",true,"https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"),
P("polka-dot-umbrella","Polka-Dot Umbrella",66,"Homeware & Lifestyle","Compact folding umbrella for rain protection and hot summer days, commuting and travel.",12,"R110–R130","White/Black/Blue",true,"https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=800&q=80"),
P("shekind-tote-bag","SHEKind Tote Bag",54,"Homeware & Lifestyle","Everyday fabric tote for shopping, work essentials, campus and casual outings.",12,"R100–R120","Brown/Grey/Pink",true,"https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80"),
P("fluffy-pillows","Fluffy Pillows",78,"Homeware & Lifestyle","Soft fluffy pillows for home comfort and décor.",12,"R110–R130","Pink/Blue/Black","",false,"https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80")
];

// 🌐 State
let PRODUCTS = [], PRODUCTS_MAP = new Map(), isLoading = false, loadError = null, lastRawSnapshot = null;

function getCachedProducts(){
  try{
    const c = localStorage.getItem(CONFIG.CACHE_KEY); if(!c) return null;
    const d = JSON.parse(c);
    if(Date.now() - d.timestamp > CONFIG.CACHE_TTL){ localStorage.removeItem(CONFIG.CACHE_KEY); return null; }
    return d.products;
  }catch(e){ return null; }
}
function setCachedProducts(p){ try{ localStorage.setItem(CONFIG.CACHE_KEY, JSON.stringify({products:p, timestamp:Date.now()})); }catch(e){} }

function slugify(s){ return (s||"").toString().toLowerCase().trim().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,""); }

async function fetchProducts(forceRefresh){
  if(isLoading){ return new Promise(res=>{ const t=setInterval(()=>{ if(!isLoading){ clearInterval(t); res(PRODUCTS);} },50); }); }
  isLoading = true;
  try{
    if(!forceRefresh){
      const cached = getCachedProducts();
      if(cached && cached.length){ processProducts(cached); isLoading=false; setTimeout(backgroundRefresh,100); return PRODUCTS; }
    }
    if(!CONFIG.SHEETS_API_URL){ processProducts(FALLBACK_PRODUCTS); isLoading=false; return PRODUCTS; }
    const url = CONFIG.SHEETS_API_URL + (CONFIG.SHEETS_API_URL.includes('?')?'&':'?') + 't=' + Date.now() + '&format=json';
    const response = await fetch(url,{cache:'no-cache'});
    if(!response.ok) throw new Error('HTTP '+response.status);
    const data = await response.json();
    const arr = Array.isArray(data) ? data : (data.products || []);
    processProducts(arr); setCachedProducts(arr);
    console.log('✅ Zansho products loaded from Google Sheets');
  }catch(err){
    console.warn('⚠️ API failed, using fallback:', err.message);
    loadError = err; processProducts(FALLBACK_PRODUCTS);
  }
  isLoading = false; return PRODUCTS;
}

async function backgroundRefresh(){
  if(!CONFIG.SHEETS_API_URL) return;
  try{
    const url = CONFIG.SHEETS_API_URL + (CONFIG.SHEETS_API_URL.includes('?')?'&':'?') + 't=' + Date.now() + '&bg=1&format=json';
    const response = await fetch(url,{cache:'no-cache'});
    const data = await response.json();
    const arr = Array.isArray(data) ? data : (data.products || []);
    if(!arr) return;
    const snap = JSON.stringify(arr);
    if(lastRawSnapshot === null) lastRawSnapshot = JSON.stringify(window.ZANSHO_PRODUCTS || []);
    if(snap === lastRawSnapshot) return;
    lastRawSnapshot = snap;
    processProducts(arr); setCachedProducts(arr);
    if(typeof window.renderDynamicCategories === 'function') window.renderDynamicCategories();
  }catch(e){}
}

function processProducts(raw){
  PRODUCTS = raw.filter(p => (p.name||'').toString().trim().length > 0 && (p.id||'').toString().trim().length > 0).map(product=>{
    const processed = {
      id:(product.id||"").toString().trim(),
      name:(product.name||"").toString().trim(),
      price:parseFloat(product.price)||0,
      category:(product.category||"Uncategorized").toString().trim(),
      niche:(product.niche||"wholesale").toString().trim(),
      location:(product.location||"south-africa").toString().trim(),
      description:(product.description||"").toString().trim(),
      badge:(product.badge||"").toString().trim(),
      moq:parseInt(product.moq)||1,
      rrp:(product.rrp||"").toString().trim(),
      colours:(product.colours||"").toString().trim(),
      image:CONFIG.resolveImage(product.image),
      popupImages:[],
      businessName:(product.businessname||product.businessName||CONFIG.businessName),
      businessLogo:CONFIG.businessLogo,
      whatsappNumber:(product.whatsappnumber||product.whatsappNumber||CONFIG.WHATSAPP_NUMBER),
      active:!(product.active===false||product.active==='FALSE'||product.active==='false'),
      categorySlug:slugify(product.category||"uncategorized"),
      nicheSlug:slugify(product.niche||"wholesale"),
      locationSlug:slugify(product.location||"south-africa")
    };
    PRODUCTS_MAP.set(processed.id, processed);
    return processed;
  });
  window.ZANSHO_PRODUCTS = PRODUCTS;
  window.ZANSHO_DATA = PRODUCTS;
  return PRODUCTS;
}

function hydrateWhatsAppLinks(){
  document.querySelectorAll('a[data-wa]').forEach(a=>{
    const msg = a.getAttribute('data-wa-msg') || "Hi Zansho! I'd like to enquire about your wholesale products.";
    a.href = 'https://wa.me/' + CONFIG.WHATSAPP_NUMBER + '?text=' + encodeURIComponent(msg);
    a.target = '_blank'; a.rel = 'noopener';
  });
}

// 🛠️ Public API
window.ZanshoProducts = {
  getAll: ()=>PRODUCTS,
  getById: id=>PRODUCTS_MAP.get(id),
  getByCategory: slug=>PRODUCTS.filter(p=>p.categorySlug===slugify(slug)),
  refresh: ()=>fetchProducts(true),
  getStatus: ()=>({loaded:PRODUCTS.length>0,count:PRODUCTS.length,error:loadError?loadError.message:null,loading:isLoading})
};

// 🚀 INIT
(async function init(){
  const inline = window.ZANSHO_PRODUCTS;
  if(Array.isArray(inline) && inline.length){
    processProducts(inline); setCachedProducts(inline); isLoading=false;
    document.dispatchEvent(new CustomEvent('zansho:products:loaded',{detail:{products:PRODUCTS}}));
    setTimeout(backgroundRefresh,1500);
  } else {
    await fetchProducts();
    document.dispatchEvent(new CustomEvent('zansho:products:loaded',{detail:{products:PRODUCTS}}));
  }
  if(document.readyState==='loading'){ document.addEventListener('DOMContentLoaded',hydrateWhatsAppLinks); } else { hydrateWhatsAppLinks(); }
  console.log(`📦 Zansho Wholesale: ${PRODUCTS.length} products ready`);
})();

// ========== SEO SCHEMA ==========
function generateProductSchema(){
  if(!PRODUCTS.length) return;
  const list = {
    "@context":"https://schema.org","@type":"ItemList","name":"Zansho Wholesale Catalogue",
    "numberOfItems":PRODUCTS.length,
    "itemListElement":PRODUCTS.map((p,i)=>({
      "@type":"ListItem","position":i+1,
      "item":{"@type":"Product","name":p.name,"description":p.description,"sku":p.id,
        "brand":{"@type":"Brand","name":"Zansho Wholesale & Distribution"},
        "offers":{"@type":"Offer","priceCurrency":"ZAR","price":p.price.toFixed(2),
          "availability":p.active?"https://schema.org/InStock":"https://schema.org/OutOfStock",
          "seller":{"@type":"Organization","name":"Zansho Wholesale & Distribution"}}}
    }))
  };
  let el = document.getElementById('zanshoProductSchema');
  if(!el){ el=document.createElement('script'); el.type='application/ld+json'; el.id='zanshoProductSchema'; document.head.appendChild(el); }
  el.textContent = JSON.stringify(list);
}
document.addEventListener('zansho:products:loaded',()=>setTimeout(generateProductSchema,500));
})();