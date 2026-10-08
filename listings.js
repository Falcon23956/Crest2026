/* ============================================================
   CRESTVISTA – LISTINGS  (this is the only file you edit)
   To add a listing: copy one block from { to }, paste it after the
   last one (comma between blocks), then change the details.
   To remove one: delete its block. Keep every quote " and comma , as shown.
   category: Plot, Apartment, House, Commercial  |  purpose: For sale or To let
   subtype: e.g. Maisonette, Bungalow, Townhouse, Office, Shop (optional)
   placeholder:true marks example listings (not shown on the site) - delete those blocks before going live.
   features: short list of highlights  |  nearby: distances to landmarks
   ============================================================ */
window.SITE = {
  whatsapp: "254758625209",
  phones: ["0758 625 209"],
  email: "info@crestvistaproperties.co.ke",
  address: "Lonak Business Center, Kasarani, Nairobi",
  onBehalfOf: ""      // e.g. "on behalf of ABC Company Ltd" (leave "" to hide)
};
window.LISTINGS = [
  { id:"muthaiga-3br", category:"Apartment", subtype:"Apartment", purpose:"For sale", featured:true,
    title:"3 bedroom apartment, Muthaiga Square",
    location:"Muthaiga Square, Nairobi",
    price:15000000, status:"Available", size:"", beds:3, baths:0,
    title_type:"", terms:"70% first payment; balance in instalments within 6 months, no interest",
    features:["Self contained","Open-plan kitchen","Separate kitchen store","Laundry area","Private entrance","Balcony with city views","Suitable as a home or an office"],
    nearby:[],
    description:"A bright 3 bedroom self-contained apartment with an open-plan kitchen, separate kitchen store and laundry area. It has a private entrance, so it works well as a home or an office. Flexible payment: 70% first payment, with the balance paid in instalments within 6 months at no interest.",
    map:"", images:["photos/muthaiga-1.jpg","photos/muthaiga-2.jpg","photos/muthaiga-3.jpg"], videos:[] },
  { id:"konza-50x100", category:"Plot", purpose:"For sale", featured:true,
    title:"Prime 50 × 100 plots, off Mombasa Road, Konza",
    location:"Konza, Machakos County (off Lake Energies Petrol Station)",
    price:0, status:"Available", size:"50 × 100 ft", beds:0, baths:0,
    title_type:"", terms:"Call for price and payment terms",
    nearby:["400 m from Mombasa Road","800 m from Konza Technopolis Gate A"],
    description:"Excellent location in a high-growth area. Just 400m from Mombasa Road, off Lake Energies Petrol Station, and about 800m from Konza Technopolis Gate A. Great for residential development or investment, with strong potential for future appreciation. Easily accessible and surrounded by ongoing development. Secure your plot before further development drives up values.",
    map:"", images:["photos/konza-50x100-1.jpg","photos/konza-50x100-2.jpg","photos/konza-50x100-3.jpg"], videos:[] },
  { id:"buena-vista-gardens", category:"Plot", purpose:"For sale", featured:true,
    title:"50 × 100 plots at Buena Vista Gardens, Konza",
    location:"Buena Vista Gardens, Konza, Machakos County",
    price:380000, status:"Available", size:"50 × 100 ft", beds:0, baths:0,
    title_type:"", terms:"Call for payment terms",
    nearby:["3 km from Konza Technopolis Gate B"],
    description:"Some people will wait for Konza to fully develop. Others are buying before prices catch up. At Buena Vista Gardens, just 3 kilometres from Konza Technopolis Gate B, a 50 by 100 plot is going for only KES 380,000.",
    map:"", images:["photos/buenavista-1.jpg","photos/buenavista-2.jpg","photos/buenavista-3.jpg"], videos:[] },
  { placeholder:true, id:"s-maisonette", category:"House", subtype:"Maisonette", purpose:"For sale",
    title:"4 bedroom maisonette", location:"Thindigua, Kiambu",
    price:18500000, status:"Available", size:"250 sqm", beds:4, baths:3,
    title_type:"Freehold", terms:"Mortgage or cash",
    features:["Gated estate", "DSQ", "Fitted kitchen", "Garden", "Ample parking"],
    nearby:["1.5 km from Thindigua shopping centre", "3 km from Kiambu Road", "20 min to Muthaiga"],
    description:"Well-kept home in a quiet, secure neighbourhood with good road access. Contact us for details and to arrange a viewing.",
    map:"", images:[], videos:[] },
  { placeholder:true, id:"s-apt-let", category:"Apartment", subtype:"Apartment", purpose:"To let",
    title:"2 bedroom apartment", location:"Kasarani, Nairobi",
    price:45000, status:"Available", size:"95 sqm", beds:2, baths:2,
    title_type:"", terms:"1 month deposit + 1 month rent",
    features:["Balcony", "Backup water", "Secure parking", "Fibre ready"],
    nearby:["500 m from Thika Road", "1 km from Kasarani Stadium"],
    description:"Bright, well-kept apartment with secure parking and good road access. Contact us for details and to arrange a viewing.",
    map:"", images:[], videos:[] },
  { placeholder:true, id:"s-bungalow", category:"House", subtype:"Bungalow", purpose:"For sale",
    title:"3 bedroom bungalow", location:"Syokimau, Machakos County",
    price:9500000, status:"Available", size:"150 sqm", beds:3, baths:2,
    title_type:"Freehold", terms:"Cash or mortgage",
    features:["Gated community", "Water and power", "Tarmac road"],
    nearby:["2 km from Syokimau SGR station", "4 km from Mombasa Road"],
    description:"Well-kept home in a quiet, secure neighbourhood with good road access. Contact us for details and to arrange a viewing.",
    map:"", images:[], videos:[] },
  { placeholder:true, id:"s-office", category:"Commercial", subtype:"Office space", purpose:"To let",
    title:"Office space, 120 sqm", location:"Westlands, Nairobi",
    price:180000, status:"Available", size:"120 sqm", beds:0, baths:2,
    title_type:"", terms:"Lease, minimum 1 year",
    features:["Open plan", "Lift access", "Backup generator", "Parking"],
    nearby:["300 m from Waiyaki Way", "Walking distance to Sarit Centre"],
    description:"Open-plan office space in a well-located building with parking. Contact us for details and to arrange a viewing.",
    map:"", images:[], videos:[] },
];
