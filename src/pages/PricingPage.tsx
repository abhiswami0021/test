// components/PricingCalculator.jsx
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 Pricing assumptions used (per user's "use your price"):
 Generative AI: 4000
 Cloud Services: 3000
 Web Development: 2500
 App Development: 6000
 CMS & Ecommerce: 2000
 Digital Marketing: 500
 Designing: 300
 Hire Developers: 20 (hourly)
*/

const BASE_PRICES = {
  "Generative AI": 4000,
  "Cloud Services": 3000,
  "Web Development": 2500,
  "App Development": 6000,
  "CMS & Ecommerce": 2000,
  "Digital Marketing": 500,
  "Designing": 300,
  "Hire Developers": 20 // hourly base
};

const SERVICE_OPTIONS = [
  "Generative AI",
  "Cloud Services",
  "Web Development",
  "App Development",
  "CMS & Ecommerce",
  "Digital Marketing",
  "Designing",
  "Hire Developers",
];

const cardVariants = {
  enter: { x: 50, opacity: 0 },
  center: { x: 0, opacity: 1 },
  exit: { x: -50, opacity: 0 },
};

const ProgressBar = ({ step, max }) => {
  const pct = Math.round((step / (max - 1)) * 100);
  return (
    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
      <div
        className="h-2 bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400"
        style={{ width: `${pct}%`, transition: "width 400ms ease" }}
      />
    </div>
  );
};

const PricingPage = () => {
  const steps = [
    "Service",
    "Details",
    "Complexity",
    "Contact",
    "Estimate"
  ];
  const [step, setStep] = useState(0);

  // Form state
  const [service, setService] = useState("Web Development");
  const [webPages, setWebPages] = useState(5);
  const [integrations, setIntegrations] = useState(1);
  const [platforms, setPlatforms] = useState({ web: true, ios: false, android: false });
  const [features, setFeatures] = useState({
    auth: true,
    payments: false,
    adminPanel: false,
    api: false,
  });
  const [complexity, setComplexity] = useState("Standard"); // Basic / Standard / Advanced
  const [timelineRush, setTimelineRush] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [devHours, setDevHours] = useState(80); // for Hire Developers

  // Helpers
  const isHireDev = service === "Hire Developers";

  const priceEstimate = useMemo(() => {
    // returns { basic, standard, premium } objects with min and max
    const base = BASE_PRICES[service] || 2000;

    // base modifications
    let subtotal = 0;
    if (isHireDev) {
      // hourly * hours range
      const hourly = base;
      const basic = hourly * Math.round(devHours * 0.6);
      const standard = hourly * Math.round(devHours);
      const premium = hourly * Math.round(devHours * 1.5);
      return {
        basic: { min: Math.round(basic * 0.9), max: Math.round(basic * 1.1) },
        standard: { min: Math.round(standard * 0.9), max: Math.round(standard * 1.15) },
        premium: { min: Math.round(premium * 0.95), max: Math.round(premium * 1.2) },
      };
    }

    // Non-hire-dev services:
    subtotal += base;

    // pages for web / cms
    if (service === "Web Development" || service === "CMS & Ecommerce") {
      subtotal += Math.max(0, webPages - 1) * 150; // extra pages cost
    }

    // Integrations
    subtotal += integrations * 400;

    // Platforms multiplier (app has platform additions)
    if (service === "App Development") {
      const selectedPlatforms = ["ios", "android"].filter(k => platforms[k]).length;
      // base assumes one platform; add 40% of base for each additional platform
      if (selectedPlatforms > 1) {
        subtotal += base * 0.4 * (selectedPlatforms - 1);
      }
    }

    // Feature toggles
    if (features.auth) subtotal += 600;
    if (features.payments) subtotal += 900;
    if (features.adminPanel) subtotal += 1200;
    if (features.api) subtotal += 800;

    // Complexity multiplier
    const complexityMultiplier = complexity === "Basic" ? 0.9 : complexity === "Advanced" ? 1.5 : 1.0;
    subtotal *= complexityMultiplier;

    // Timeline rush
    if (timelineRush) subtotal *= 1.25;

    // Now produce tiers around subtotal
    // Basic: 0.85 - 1.05, Standard: 0.95 - 1.25, Premium: 1.2 - 1.6
    const basicMin = Math.round(subtotal * 0.85);
    const basicMax = Math.round(subtotal * 1.05);
    const stdMin = Math.round(subtotal * 0.95);
    const stdMax = Math.round(subtotal * 1.25);
    const premMin = Math.round(subtotal * 1.2);
    const premMax = Math.round(subtotal * 1.6);

    return {
      basic: { min: basicMin, max: basicMax },
      standard: { min: stdMin, max: stdMax },
      premium: { min: premMin, max: premMax },
    };
  }, [
    service,
    webPages,
    integrations,
    platforms,
    features,
    complexity,
    timelineRush,
    devHours,
    isHireDev,
  ]);

  const showNext = () => {
    if (step === 3) {
      // require email at step 3 (contact)
      if (!email || !/\S+@\S+\.\S+/.test(email)) {
        alert("Please enter a valid email to continue.");
        return;
      }
    }
    setStep((s) => Math.min(s + 1, steps.length - 1));
  };
  const showPrev = () => setStep((s) => Math.max(s - 1, 0));

  const toggleFeature = (k) => setFeatures(f => ({ ...f, [k]: !f[k] }));
  const togglePlatform = (k) => setPlatforms(p => ({ ...p, [k]: !p[k] }));

  const sendQuote = () => {
    // stub: hook this to your backend/email service
    const payload = {
      companyName,
      email,
      service,
      details: {
        webPages,
        integrations,
        platforms,
        features,
        complexity,
        timelineRush,
        devHours,
      },
      estimate: priceEstimate
    };
    console.log("Send quote payload:", payload);
    alert("Quote request sent! (console has payload). Wire sendQuote() to your backend.");
  };

  return (
    <div className="pt-20">
      {/* Header / Hero - same theme as user */}
      <div className={`relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">📐 Instant Project Estimator</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Answer a few quick questions, enter your email, and get a reliable price range — built with the same theme.
            </p>
            <div className="mt-8 max-w-xl mx-auto">
              <ProgressBar step={step} max={steps.length} />
            </div>
          </div>
        </div>
      </div>

      {/* Card */}
      <div className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl shadow-xl p-8">
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-semibold text-gray-800">{steps[step]}</h2>
              <p className="text-sm text-gray-500 mt-1">Step {step + 1} of {steps.length}</p>
            </div>

            <div className="min-h-[260px]">
              <AnimatePresence exitBeforeEnter>
                {step === 0 && (
                  <motion.div
                    key="step-service"
                    variants={cardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35 }}
                    className=""
                  >
                    <p className="text-sm text-gray-600 mb-4">Choose a service category</p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {SERVICE_OPTIONS.map((s) => (
                        <button
                          key={s}
                          onClick={() => { setService(s); setStep(1); }}
                          className={`text-left p-3 rounded-xl border ${
                            service === s ? "border-transparent shadow-lg" : "border-gray-200"
                          } hover:scale-[1.02] transition transform bg-gradient-to-b ${service === s ? "from-indigo-600 to-pink-600 text-white" : "from-white to-gray-50 text-gray-800"}`}
                        >
                          <div className="font-semibold">{s}</div>
                          <div className="text-xs mt-1 text-gray-500">
                            {s === "Hire Developers" ? `${BASE_PRICES[s]}/hr` : `Starting from $${BASE_PRICES[s]}`}
                          </div>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div
                    key="step-details"
                    variants={cardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35 }}
                    className=""
                  >
                    <p className="text-sm text-gray-600 mb-4">Tell us about the project</p>

                    {/* Dynamic fields */}
                    {isHireDev ? (
                      <div className="space-y-4">
                        <label className="text-sm text-gray-700">Estimated developer hours</label>
                        <input
                          type="range"
                          min={10}
                          max={800}
                          value={devHours}
                          onChange={(e) => setDevHours(Number(e.target.value))}
                          className="w-full"
                        />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>10h</span>
                          <span>{devHours}h</span>
                          <span>800h</span>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {(service === "Web Development" || service === "CMS & Ecommerce") && (
                          <>
                            <label className="text-sm text-gray-700">Number of pages</label>
                            <input
                              type="number"
                              min={1}
                              value={webPages}
                              onChange={(e) => setWebPages(Number(e.target.value))}
                              className="w-28 px-3 py-2 border rounded-md"
                            />
                          </>
                        )}

                        {service === "App Development" && (
                          <>
                            <label className="text-sm text-gray-700">Platforms</label>
                            <div className="flex gap-2">
                              <button onClick={() => togglePlatform("ios")} className={`px-3 py-2 rounded-md ${platforms.ios ? "bg-indigo-600 text-white" : "bg-gray-100"}`}>iOS</button>
                              <button onClick={() => togglePlatform("android")} className={`px-3 py-2 rounded-md ${platforms.android ? "bg-indigo-600 text-white" : "bg-gray-100"}`}>Android</button>
                              <button onClick={() => togglePlatform("web")} className={`px-3 py-2 rounded-md ${platforms.web ? "bg-indigo-600 text-white" : "bg-gray-100"}`}>Web</button>
                            </div>
                          </>
                        )}

                        <label className="text-sm text-gray-700">Integrations (APIs, 3rd party)</label>
                        <input
                          type="range"
                          min={0}
                          max={10}
                          value={integrations}
                          onChange={(e) => setIntegrations(Number(e.target.value))}
                          className="w-full"
                        />
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>0</span>
                          <span>{integrations}</span>
                          <span>10</span>
                        </div>

                        <label className="text-sm text-gray-700">Features</label>
                        <div className="grid grid-cols-2 gap-2">
                          <button onClick={() => toggleFeature("auth")} className={`p-2 rounded-md ${features.auth ? "bg-indigo-600 text-white" : "bg-gray-100"}`}>Authentication</button>
                          <button onClick={() => toggleFeature("payments")} className={`p-2 rounded-md ${features.payments ? "bg-indigo-600 text-white" : "bg-gray-100"}`}>Payments</button>
                          <button onClick={() => toggleFeature("adminPanel")} className={`p-2 rounded-md ${features.adminPanel ? "bg-indigo-600 text-white" : "bg-gray-100"}`}>Admin Panel</button>
                          <button onClick={() => toggleFeature("api")} className={`p-2 rounded-md ${features.api ? "bg-indigo-600 text-white" : "bg-gray-100"}`}>Custom API</button>
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step-complexity"
                    variants={cardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35 }}
                  >
                    <p className="text-sm text-gray-600 mb-4">Project complexity & timeline</p>
                    <div className="flex gap-2 mb-4">
                      {["Basic", "Standard", "Advanced"].map((c) => (
                        <button
                          key={c}
                          onClick={() => setComplexity(c)}
                          className={`px-4 py-2 rounded-md ${complexity === c ? "bg-gradient-to-r from-indigo-600 to-pink-500 text-white" : "bg-gray-100"}`}
                        >
                          {c}
                        </button>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <input id="rush" type="checkbox" checked={timelineRush} onChange={() => setTimelineRush(v => !v)} className="h-4 w-4" />
                      <label htmlFor="rush" className="text-sm text-gray-700">Rush delivery (adds ~25%)</label>
                    </div>

                    <p className="mt-4 text-xs text-gray-500">Choosing complexity and rush helps us give a realistic range.</p>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step-contact"
                    variants={cardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35 }}
                  >
                    <p className="text-sm text-gray-600 mb-4">Contact details</p>
                    <div className="space-y-3">
                      <input
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="Company (optional)"
                        className="w-full px-3 py-2 border rounded-md"
                      />
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email (required)"
                        className="w-full px-3 py-2 border rounded-md"
                      />
                      <p className="text-xs text-gray-500">We require email to send a detailed PDF quote (we won't spam).</p>
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step-estimate"
                    variants={cardVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.35 }}
                    className=""
                  >
                    <p className="text-sm text-gray-600 mb-4">Estimated price range</p>

                    <div className="grid grid-cols-1 gap-4">
                      {/* Basic */}
                      <div className="p-4 rounded-xl border bg-white">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-sm text-gray-500">Basic</div>
                            <div className="text-xl font-semibold text-gray-800">${priceEstimate.basic.min.toLocaleString()} — ${priceEstimate.basic.max.toLocaleString()}</div>
                          </div>
                          <div className="text-xs text-gray-400">Good for MVP / small scope</div>
                        </div>
                      </div>

                      {/* Standard */}
                      <div className="p-4 rounded-xl border bg-white">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-sm text-gray-500">Standard</div>
                            <div className="text-xl font-semibold text-gray-800">${priceEstimate.standard.min.toLocaleString()} — ${priceEstimate.standard.max.toLocaleString()}</div>
                          </div>
                          <div className="text-xs text-gray-400">Well-rounded product</div>
                        </div>
                      </div>

                      {/* Premium */}
                      <div className="p-4 rounded-xl border bg-white">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-sm text-gray-500">Premium</div>
                            <div className="text-xl font-semibold text-gray-800">${priceEstimate.premium.min.toLocaleString()} — ${priceEstimate.premium.max.toLocaleString()}</div>
                          </div>
                          <div className="text-xs text-gray-400">Enterprise-grade, long-term</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex gap-3">
                      <button onClick={sendQuote} className="px-5 py-3 rounded-md bg-gradient-to-r from-indigo-600 to-pink-500 text-white shadow">
                        Send detailed quote
                      </button>
                      <button onClick={() => alert("Download PDF stub — implement server-side generation")} className="px-4 py-3 rounded-md border">Download PDF</button>
                    </div>

                    <p className="mt-4 text-xs text-gray-500">Estimates are indicative. We'll provide a final proposal after discussion.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="mt-6 flex justify-between items-center">
              <div>
                {step > 0 && (
                  <button onClick={showPrev} className="px-4 py-2 rounded-md border mr-2">Back</button>
                )}
              </div>

              <div className="flex items-center gap-3">
                {step < steps.length - 1 ? (
                  <button onClick={showNext} className="px-5 py-3 rounded-md bg-gradient-to-r from-indigo-600 to-pink-500 text-white shadow">
                    {step === 0 ? "Start" : "Next"}
                  </button>
                ) : (
                  <button onClick={() => { setStep(0); }} className="px-4 py-2 rounded-md border">Start over</button>
                )}
              </div>
            </div>

            {/* Small footer */}
            <div className="mt-4 text-xs text-gray-400">
              <strong>Note:</strong> This calculator gives a quick range. For an accurate quote we’ll need a short discovery call.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
