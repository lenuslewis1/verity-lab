import serviceFuels from "@/assets/service-fuels.jpg";
import serviceLubricants from "@/assets/service-lubricants.jpg";
import serviceWater from "@/assets/service-water.jpg";
import serviceRefinery from "@/assets/service-refinery.jpg";
import serviceMarine from "@/assets/service-marine.jpg";
import aboutDetail from "@/assets/about-detail.jpg";

export type Category = "Fuels" | "Lubricants" | "Water" | "Specialty";
export type Status = "Routine" | "Expedited" | "Witnessed" | "On request";

export interface Service {
  slug: string;
  name: string;
  matrix: string;            // sample type / matrix
  category: Category;
  status: Status;            // turnaround tier
  methods: string[];         // ASTM / IP / ISO codes
  turnaround: string;
  sample_volume: string;
  accreditation: string;
  deliverable: string;
  tagline: string;
  description: string[];
  parameters: string[];      // what we measure
  image: string;
}

export const services: Service[] = [
  {
    slug: "marine-bunker-fuel",
    name: "Marine Bunker Fuel",
    matrix: "HFO / VLSFO / MGO",
    category: "Fuels",
    status: "Expedited",
    methods: ["ISO 8217", "ASTM D4294", "ASTM D445", "IP 570"],
    turnaround: "24 – 48 hours",
    sample_volume: "1 L sealed bunker sample",
    accreditation: "ISO 17025 scope · IMO 2020 compliant",
    deliverable: "Bunker Quality Report (BDR-grade)",
    tagline: "Defensible bunker analysis for shipowners, charterers and P&I clubs.",
    description: [
      "Full ISO 8217 characterisation of marine residual and distillate fuels delivered at the bunker barge or terminal. Reports are issued in a format accepted by major P&I clubs and recognised in commercial disputes.",
      "Sulphur, viscosity, density, water, sediment, flash point, CCAI and trace metals are determined to ASTM and IP reference methods. Witnessed sampling is available on request.",
    ],
    parameters: [
      "Sulphur content (ASTM D4294 / D2622)",
      "Kinematic viscosity at 50 °C (ASTM D445)",
      "Density at 15 °C (ISO 12185)",
      "Water by distillation (ASTM D95)",
      "Total sediment (ISO 10307)",
      "Flash point, Pensky-Martens (ASTM D93)",
      "CCAI calculation",
      "Trace metals: V, Na, Al+Si, Fe, Ni, Ca, Zn, P",
    ],
    image: serviceMarine,
  },
  {
    slug: "diesel-gasoline-quality",
    name: "Automotive Diesel & Gasoline",
    matrix: "Diesel · Gasoline · Biofuels",
    category: "Fuels",
    status: "Routine",
    methods: ["ASTM D975", "ASTM D4814", "EN 590", "EN 228"],
    turnaround: "48 – 72 hours",
    sample_volume: "1 L sealed sample",
    accreditation: "ISO 17025 scope",
    deliverable: "Certificate of Analysis",
    tagline: "Full road-fuel specification testing for fleets, retailers and regulators.",
    description: [
      "Comprehensive characterisation of road diesel and gasoline against EN 590, EN 228, ASTM D975 and ASTM D4814. Used by fleet operators settling supplier disputes, by retailers verifying tanker deliveries, and by regulators auditing pump quality.",
    ],
    parameters: [
      "Cetane index / number",
      "Research and Motor Octane Number",
      "Distillation profile (ASTM D86)",
      "Sulphur, lead and oxygenates",
      "FAME content in diesel",
      "Cold flow: CFPP, cloud point, pour point",
      "Vapour pressure, copper corrosion",
    ],
    image: serviceFuels,
  },
  {
    slug: "jet-fuel-jet-a1",
    name: "Jet A-1 / Aviation Kerosene",
    matrix: "Jet A-1 · JP-8",
    category: "Fuels",
    status: "Witnessed",
    methods: ["ASTM D1655", "DEF STAN 91-091", "IP 540"],
    turnaround: "48 hours",
    sample_volume: "4 L epoxy-lined tin",
    accreditation: "ISO 17025 · AFQRJOS aligned",
    deliverable: "Recertification Test Report",
    tagline: "Recertification and release testing of aviation kerosene.",
    description: [
      "Release and recertification of Jet A-1 against ASTM D1655 and DEF STAN 91-091, including the AFQRJOS check-list parameters required for joint into-plane operations.",
    ],
    parameters: [
      "Appearance, particulates, free water (MicroSep)",
      "Density, distillation, flash point",
      "Freezing point (ASTM D2386)",
      "Smoke point and naphthalenes",
      "Existent gum, thermal stability (JFTOT)",
      "Electrical conductivity",
      "FAME contamination (IP 585)",
    ],
    image: serviceFuels,
  },
  {
    slug: "lubricant-condition-monitoring",
    name: "Used Oil Condition Monitoring",
    matrix: "Engine, gearbox, hydraulic, turbine oils",
    category: "Lubricants",
    status: "Routine",
    methods: ["ASTM D7414", "ASTM D5185", "ASTM D445", "ASTM D6304"],
    turnaround: "5 working days",
    sample_volume: "120 mL in supplied bottle",
    accreditation: "ISO 17025 scope",
    deliverable: "Diagnostic report with severity flag",
    tagline: "Predictive maintenance through trended oil analysis.",
    description: [
      "Routine used-oil analysis for fleets, gensets, marine engines and industrial gearboxes. Each sample is trended against equipment history; severity is flagged Normal, Caution or Critical with a written interpretation by a Tribology analyst.",
    ],
    parameters: [
      "Wear metals by ICP (D5185)",
      "Viscosity at 40 °C and 100 °C",
      "Water content, Karl Fischer (D6304)",
      "TBN / TAN, oxidation, nitration (FT-IR)",
      "Soot, sulphation",
      "Particle count, ISO 4406 cleanliness",
      "Fuel dilution",
    ],
    image: serviceLubricants,
  },
  {
    slug: "new-lubricant-qualification",
    name: "New Lubricant Qualification",
    matrix: "Base oils · finished lubricants",
    category: "Lubricants",
    status: "Routine",
    methods: ["ASTM D2270", "ASTM D2783", "ASTM D2272", "IP 226"],
    turnaround: "7 – 10 working days",
    sample_volume: "1 L",
    accreditation: "ISO 17025 scope",
    deliverable: "Specification compliance report",
    tagline: "Batch release and qualification of finished lubricants against OEM specifications.",
    description: [
      "Specification testing for lubricant blenders, importers and OEMs. Confirms compliance with API, ACEA, JASO and OEM specifications before release to market.",
    ],
    parameters: [
      "Viscosity index (D2270)",
      "Four-ball wear and EP (D4172, D2783)",
      "Oxidation stability, RPVOT (D2272)",
      "Foaming tendency (D892)",
      "Demulsibility, copper corrosion",
      "Total Base Number (D2896)",
    ],
    image: serviceLubricants,
  },
  {
    slug: "potable-water-analysis",
    name: "Potable Water Analysis",
    matrix: "Drinking water · borehole · municipal",
    category: "Water",
    status: "Routine",
    methods: ["ISO 5667", "ASTM D1129", "WHO GDWQ"],
    turnaround: "5 – 7 working days",
    sample_volume: "1 L + 100 mL for microbiology",
    accreditation: "ISO 17025 scope",
    deliverable: "Potability statement & full panel report",
    tagline: "Full-panel drinking water testing against WHO and Ghana Standards.",
    description: [
      "Physico-chemical and microbiological analysis of drinking water against the WHO Guidelines for Drinking-Water Quality and Ghana Standard GS 175. Reports include a clear potability statement and parameter-by-parameter comparison to limits.",
    ],
    parameters: [
      "pH, conductivity, turbidity, TDS",
      "Total and faecal coliforms, E. coli",
      "Heavy metals by ICP-MS",
      "Nitrate, nitrite, fluoride, chloride",
      "Total hardness, alkalinity",
      "Free and total chlorine residual",
    ],
    image: serviceWater,
  },
  {
    slug: "industrial-process-water",
    name: "Boiler & Cooling Water",
    matrix: "Boiler · cooling tower · process",
    category: "Water",
    status: "Expedited",
    methods: ["ASTM D1066", "ASTM D3370", "ASTM D596"],
    turnaround: "48 – 72 hours",
    sample_volume: "1 L per loop",
    accreditation: "ISO 17025 scope",
    deliverable: "Loop-by-loop chemistry report",
    tagline: "Corrosion, scaling and biofouling diagnostics for plant operators.",
    description: [
      "Routine and troubleshooting analysis of boiler feedwater, condensate, cooling tower and process water. Findings are interpreted against ASME and manufacturer guidelines, with dosing recommendations from our process chemists.",
    ],
    parameters: [
      "Conductivity, pH, silica",
      "M and P alkalinity",
      "Phosphate, sulphite, hydrazine",
      "Iron, copper, hardness",
      "Chloride, Langelier index",
      "Microbiological load (HPC, SRB)",
    ],
    image: serviceWater,
  },
  {
    slug: "wastewater-effluent",
    name: "Wastewater & Effluent",
    matrix: "Industrial effluent · produced water",
    category: "Water",
    status: "Routine",
    methods: ["APHA 5210", "ISO 6060", "ASTM D1252"],
    turnaround: "5 – 7 working days",
    sample_volume: "2 L (1 L preserved)",
    accreditation: "ISO 17025 · EPA reporting compatible",
    deliverable: "EPA-format compliance report",
    tagline: "Discharge compliance testing for refineries, mines and process plants.",
    description: [
      "Discharge monitoring and compliance reporting against Ghana EPA effluent limits. Sampling and chain-of-custody documentation supplied on request.",
    ],
    parameters: [
      "BOD5, COD, TOC",
      "Total suspended and dissolved solids",
      "Oil and grease (gravimetric)",
      "Heavy metals by ICP",
      "Phenols, cyanide, sulphide",
      "Nutrients: N, P species",
    ],
    image: serviceWater,
  },
  {
    slug: "uop-refinery-streams",
    name: "Refinery Stream Characterisation",
    matrix: "Crude · intermediate · finished streams",
    category: "Specialty",
    status: "On request",
    methods: ["UOP 269", "UOP 391", "UOP 938", "ASTM D2892"],
    turnaround: "10 – 14 working days",
    sample_volume: "Project-dependent",
    accreditation: "ISO 17025 · UOP-method qualified",
    deliverable: "Stream characterisation dossier",
    tagline: "UOP-method analysis for refiners, traders and cargo inspectors.",
    description: [
      "Detailed crude assay and intermediate stream characterisation by UOP and ASTM methods. Used by refinery process engineers for slate optimisation, by traders for cargo valuation, and by inspectors for arbitration.",
    ],
    parameters: [
      "True boiling point distillation (D2892)",
      "Nitrogen, mercaptan sulphur (UOP)",
      "Bromine number / index",
      "Aromatics by HPLC",
      "Trace metals: Ni, V, Fe",
      "Salt content, asphaltenes, MCRT",
    ],
    image: serviceRefinery,
  },
];

export const properties = services; // legacy alias
export const getServiceBySlug = (slug?: string) => services.find((s) => s.slug === slug);
export const getPropertyBySlug = getServiceBySlug; // legacy alias
