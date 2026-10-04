// src/components/SymptomSelector.jsx
// Symptom selection with search and chips

import { useState, useEffect } from "react";
import { Search, Plus } from "lucide-react";
import API from "../api/axios";

export default function SymptomSelector({ selected, setSelected }) {
  const [symptoms, setSymptoms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // Symptom risk levels (Common → Moderate → Serious)
  const symptomRisk = {
    // COMMON
    "fatigue": 1, "headache": 1, "itching": 1, "skin rash": 1,
    "cough": 1, "runny nose": 1, "sneezing": 1, "sore throat": 1,
    "mild fever": 1, "nausea": 1, "vomiting": 1, "diarrhoea": 1,
    "constipation": 1, "indigestion": 1, "acidity": 1, "loss of appetite": 1,
    "anxiety": 1, "mood swings": 1, "irritability": 1, "blackheads": 1,
    "pus filled pimples": 1, "scurring": 1, "blister": 1,
    "red sore around nose": 1, "yellow crust ooze": 1, "watering from eyes": 1,
    "redness of eyes": 1, "sinus pressure": 1, "congestion": 1,
    "throat irritation": 1, "phlegm": 1, "patches in throat": 1,
    "continuous sneezing": 1, "loss of smell": 1, "malaise": 1,
    "muscle pain": 1, "back pain": 1, "neck pain": 1, "knee pain": 1,
    "joint pain": 1, "hip joint pain": 1, "painful walking": 1,
    "swelling joints": 1, "movement stiffness": 1, "stiff neck": 1,
    "cramps": 1, "bruising": 1,

    // MODERATE
    "high fever": 2, "chills": 2, "shivering": 2, "sweating": 2,
    "dark urine": 2, "yellow urine": 2, "yellowish skin": 2,
    "yellowing of eyes": 2, "abdominal pain": 2, "belly pain": 2,
    "stomach pain": 2, "chest pain": 2, "breathlessness": 2,
    "palpitations": 2, "fast heart rate": 2, "dizziness": 2,
    "loss of balance": 2, "unsteadiness": 2, "spinning movements": 2,
    "blurred and distorted vision": 2, "visual disturbances": 2,
    "pain behind the eyes": 2, "red spots over body": 2, "skin peeling": 2,
    "silver like dusting": 2, "small dents in nails": 2,
    "inflammatory nails": 2, "brittle nails": 2, "swelling of stomach": 2,
    "distention of abdomen": 2, "passage of gases": 2, "internal itching": 2,
    "irritation in anus": 2, "pain in anal region": 2,
    "pain during bowel movements": 2, "bloody stool": 2,
    "bladder discomfort": 2, "burning micturition": 2,
    "continuous feel of urine": 2, "foul smell of urine": 2, "polyuria": 2,
    "spotting urination": 2, "swollen legs": 2, "swollen extremeties": 2,
    "swollen blood vessels": 2, "prominent veins on calf": 2,
    "puffy face and eyes": 2, "enlarged thyroid": 2, "weight gain": 2,
    "weight loss": 2, "excessive hunger": 2, "increased appetite": 2,
    "irregular sugar level": 2, "obesity": 2, "cold hands and feets": 2,
    "drying and tingling lips": 2, "muscle weakness": 2, "muscle wasting": 2,
    "lack of concentration": 2, "restlessness": 2, "depression": 2,
    "lethargy": 2, "dehydration": 2, "sunken eyes": 2, "swelled lymph nodes": 2,

    // SERIOUS
    "coma": 3, "altered sensorium": 3, "slurred speech": 3,
    "weakness of one body side": 3, "weakness in limbs": 3,
    "blood in sputum": 3, "rusty sputum": 3, "mucoid sputum": 3,
    "stomach bleeding": 3, "acute liver failure": 3, "fluid overload": 3,
    "receiving blood transfusion": 3, "receiving unsterile injections": 3,
    "extra marital contacts": 3, "history of alcohol consumption": 3,
    "family history": 3, "toxic look (typhos)": 3, "ulcers on tongue": 3,
    "nodal skin eruptions": 3,
  };

  // Sort symptoms by risk level
  const sortedSymptoms = [...symptoms].sort((a, b) => {
    const aRisk = symptomRisk[a.toLowerCase()] || 2;
    const bRisk = symptomRisk[b.toLowerCase()] || 2;
    if (aRisk !== bRisk) return aRisk - bRisk;
    return a.localeCompare(b);
  });

  // Fetch all symptoms from backend on mount
  useEffect(() => {
    const fetchSymptoms = async () => {
      try {
        const response = await API.get("/symptoms");
        setSymptoms(response.data.symptoms);
      } catch (err) {
        console.error("Failed to fetch symptoms:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSymptoms();
  }, []);

  // Toggle symptom selection
  const toggleSymptom = (symptom) => {
    if (selected.includes(symptom)) {
      setSelected(selected.filter((s) => s !== symptom));
    } else {
      setSelected([...selected, symptom]);
    }
  };

    const filtered = sortedSymptoms.filter((s) =>
    s.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <p className="text-gray-500">Loading symptoms...</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
          <span className="text-purple-500">✨</span>
          Enter Your Symptoms
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Select the symptoms you're experiencing or search for them.
        </p>
      </div>

      {/* Search box */}
      <div className="relative mb-4">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          placeholder="Search symptoms (e.g., fever, cough, headache...)"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white transition-all"
        />
      </div>

      {/* Selected symptoms chips */}
      {selected.length > 0 && (
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-2">
            Selected ({selected.length}):
          </p>
          <div className="flex flex-wrap gap-2">
            {selected.map((sym) => (
              <button
                key={sym}
                onClick={() => toggleSymptom(sym)}
                className="px-3 py-1.5 bg-purple-500 text-white rounded-full text-sm flex items-center gap-1.5 hover:bg-purple-600 transition-colors"
              >
                {sym}
                <span className="text-xs">✕</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Symptom chips grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4 max-h-[600px] overflow-y-auto">
        {filtered.map((sym) => {
          const isSelected = selected.includes(sym);
          return (
            <button
              key={sym}
              onClick={() => toggleSymptom(sym)}
              className={`px-3 py-2 rounded-xl text-sm text-left transition-all ${
                isSelected
                  ? "bg-purple-100 border-2 border-purple-500 text-purple-700 font-medium"
                  : "bg-gray-50 border-2 border-transparent text-gray-700 hover:bg-gray-100"
              }`}
            >
              {sym}
            </button>
          );
        })}
      </div>

      
    </div>
  );
}