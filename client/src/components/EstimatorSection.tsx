import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, Zap, TrendingUp, DollarSign, Clock, Sparkles } from "lucide-react";

export default function EstimatorSection() {
  const [teamSize, setTeamSize] = useState(25);
  const [hoursPerWeek, setHoursPerWeek] = useState(15);
  const [solutionType, setSolutionType] = useState<"crm" | "erp" | "ai">("ai");

  // Multipliers based on solution type
  const multipliers = {
    crm: { efficiency: 35, savingsRate: 45, roi: 3.2 },
    erp: { efficiency: 48, savingsRate: 55, roi: 4.1 },
    ai: { efficiency: 62, savingsRate: 70, roi: 5.4 },
  };

  const currentMult = multipliers[solutionType];

  // Calculations
  const totalWeeklyManualHours = teamSize * hoursPerWeek;
  const annualHoursSaved = Math.round(totalWeeklyManualHours * 52 * (currentMult.savingsRate / 100));
  const estimatedCostSaved = Math.round(annualHoursSaved * 45); // Avg $45/hr rate
  const roiValue = currentMult.roi.toFixed(1);

  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-b from-white via-[#FAF7FF] to-white">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C3AED]/5 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 mb-6">
            <Calculator size={14} className="text-[#7C3AED]" />
            <span className="text-sm font-medium text-[#7C3AED]">Interactive ROI Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[#1a1035] mb-4">
            Calculate Your <span className="gradient-text">Growth Impact</span>
          </h2>
          <p className="text-lg text-[#5a5a7a] max-w-2xl mx-auto">
            Adjust the controls to estimate annual time savings, cost reduction, and projected return on investment.
          </p>
        </motion.div>

        {/* Main Estimator Card */}
        <div className="grid lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 border border-gray-100 shadow-xl shadow-purple-50/50">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-8">
            {/* Solution Type Selection */}
            <div>
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#7C3AED] mb-3 block">
                1. Select Solution Focus
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: "ai", label: "AI Engine", icon: Sparkles },
                  { id: "crm", label: "CRM System", icon: TrendingUp },
                  { id: "erp", label: "ERP Software", icon: Zap },
                ].map((type) => {
                  const Icon = type.icon;
                  const isSel = solutionType === type.id;
                  return (
                    <button
                      key={type.id}
                      onClick={() => setSolutionType(type.id as any)}
                      className={`p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                        isSel
                          ? "bg-[#7C3AED] text-white border-[#7C3AED] shadow-md shadow-[#7C3AED]/20"
                          : "bg-gray-50 border-gray-100 text-[#5a5a7a] hover:border-purple-200"
                      }`}
                    >
                      <Icon size={16} />
                      <span>{type.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Team Size Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#5a5a7a]">
                  2. Team Size
                </label>
                <span className="font-mono text-sm font-bold text-[#7C3AED] bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
                  {teamSize} Members
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="250"
                step="5"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#7C3AED]"
              />
              <div className="flex justify-between text-[11px] font-mono text-[#8b8ba0] mt-1">
                <span>5 members</span>
                <span>250 members</span>
              </div>
            </div>

            {/* Manual Hours Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#5a5a7a]">
                  3. Manual Hours / Employee / Week
                </label>
                <span className="font-mono text-sm font-bold text-[#2563EB] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                  {hoursPerWeek} Hours
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="35"
                step="1"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#2563EB]"
              />
              <div className="flex justify-between text-[11px] font-mono text-[#8b8ba0] mt-1">
                <span>5 hrs/wk</span>
                <span>35 hrs/wk</span>
              </div>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0F0A1F] to-[#1a1035] rounded-2xl p-6 sm:p-8 text-white space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-mono text-white/50">ESTIMATED ANNUAL IMPACT</span>
              <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                {currentMult.efficiency}% Efficiency Lift
              </span>
            </div>

            <div className="space-y-4">
              {/* Cost Savings */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <DollarSign size={20} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-white/40">Est. Annual Savings</div>
                  <div className="font-mono text-2xl font-bold text-white">
                    ${estimatedCostSaved.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Hours Saved */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-white/40">Annual Hours Reclaimed</div>
                  <div className="font-mono text-2xl font-bold text-white">
                    {annualHoursSaved.toLocaleString()} hrs
                  </div>
                </div>
              </div>

              {/* ROI Multiplier */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-white/40">Projected ROI Multiplier</div>
                  <div className="font-mono text-2xl font-bold text-blue-400">
                    {roiValue}x Return
                  </div>
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="btn-primary w-full py-3.5 rounded-xl font-semibold text-sm text-center flex items-center justify-center gap-2"
            >
              <span>Get Tailored Proposal</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
