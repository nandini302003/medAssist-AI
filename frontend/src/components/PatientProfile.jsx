// src/components/PatientProfile.jsx
// Patient profile with weight/height to auto-calculate BMI

export default function PatientProfile({ profile, setProfile }) {
  const update = (key, value) => {
    setProfile({ ...profile, [key]: value });
  };

  // Auto-calculate BMI from weight and height
  const calculateBMI = (weight, height) => {
    if (!weight || !height) return null;
    const heightM = height / 100; // cm to meters
    const bmi = weight / (heightM * heightM);
    return parseFloat(bmi.toFixed(1));
  };

  // Get category from BMI
  const getBmiCategory = (bmi) => {
    if (!bmi) return null;
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal";
    if (bmi < 30) return "Overweight";
    return "Obese";
  };

  const bmi = calculateBMI(profile.weight, profile.height);
  const bmiCategory = getBmiCategory(bmi);

  // Sync BMI to profile whenever it changes
  if (bmi !== profile.bmi) {
    // Note: We use setProfile only if changed to avoid infinite loops
    setTimeout(() => update("bmi", bmi), 0);
  }

  // Category colors and messages
  const categoryInfo = {
    Underweight: {
      color: "text-blue-600",
      bg: "bg-blue-50",
      message: "You may need to gain some weight. Consult a doctor.",
    },
    Normal: {
      color: "text-green-600",
      bg: "bg-green-50",
      message: "Great! Your BMI is in the healthy range.",
    },
    Overweight: {
      color: "text-yellow-600",
      bg: "bg-yellow-50",
      message: "Slightly above healthy range. Diet and exercise can help.",
    },
    Obese: {
      color: "text-red-600",
      bg: "bg-red-50",
      message: "Above healthy range. Please consult a doctor.",
    },
  };

  const info = bmiCategory ? categoryInfo[bmiCategory] : null;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm mt-6">
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <span className="text-purple-500">👤</span>
          Patient Profile
          <span className="text-xs font-normal text-gray-400">(optional)</span>
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Add your details for better risk assessment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Age */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Age (years)
          </label>
          <input
            type="number"
            min="1"
            max="120"
            value={profile.age}
            onChange={(e) => {
              const val = e.target.value === "" ? "" : parseInt(e.target.value);
              update("age", val);
            }}
            placeholder="Enter your age"
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
          />
        </div>

        {/* Weight */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Weight (kg)
          </label>
          <input
            type="number"
            min="10"
            max="300"
            step="0.1"
            value={profile.weight}
            onChange={(e) => {
              const val = e.target.value === "" ? "" : parseFloat(e.target.value);
              update("weight", val);
            }}
            placeholder="e.g. 65"
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
          />
        </div>

        {/* Height */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Height (cm)
          </label>
          <input
            type="number"
            min="50"
            max="250"
            value={profile.height}
            onChange={(e) => {
              const val = e.target.value === "" ? "" : parseInt(e.target.value);
              update("height", val);
            }}
            placeholder="e.g. 170"
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
          />
        </div>

        {/* BMI Display (Auto) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            BMI (Auto-calculated)
          </label>
          <div
            className={`w-full px-4 py-2.5 rounded-xl border transition-all ${
              bmi
                ? `${info.bg} border-transparent`
                : "bg-gray-50 border-gray-200"
            }`}
          >
            {bmi ? (
              <div className="flex items-center justify-between">
                <span className={`text-lg font-bold ${info.color}`}>
                  {bmi}
                </span>
                <span className={`text-sm font-semibold ${info.color}`}>
                  {bmiCategory}
                </span>
              </div>
            ) : (
              <span className="text-gray-400">
                Enter weight & height
              </span>
            )}
          </div>
        </div>

        {/* Smoking */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Smoking Status
          </label>
          <select
            value={profile.smoking}
            onChange={(e) => update("smoking", e.target.value)}
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
          >
            <option value="Non-Smoker">Non-Smoker</option>
            <option value="Smoker">Smoker</option>
          </select>
        </div>

        {/* Diabetes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Diabetes Status
          </label>
          <select
            value={profile.diabetes}
            onChange={(e) => update("diabetes", e.target.value)}
            className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
          >
            <option value="No Diabetes">No Diabetes</option>
            <option value="Prediabetes">Prediabetes</option>
            <option value="Diabetes">Diabetes</option>
          </select>
        </div>
      </div>

      {/* BMI Reference Chart */}
      <div className="mt-5 p-4 bg-gray-50 rounded-xl">
        <p className="text-xs font-semibold text-gray-700 mb-2">
          📊 BMI Reference Chart (WHO)
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-gray-600">
              <strong>Underweight:</strong> &lt;18.5
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-gray-600">
              <strong>Normal:</strong> 18.5–24.9
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span className="text-gray-600">
              <strong>Overweight:</strong> 25–29.9
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-gray-600">
              <strong>Obese:</strong> ≥30
            </span>
          </div>
        </div>

        {/* Category-specific message */}
        {info && (
          <div
            className={`mt-3 pt-3 border-t border-gray-200 text-xs ${info.color} font-medium`}
          >
            💡 {info.message}
          </div>
        )}
      </div>
    </div>
  );
}