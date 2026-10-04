// backend/data/diseaseInfo.js
// Description, precautions, and awareness for all 41 diseases

const diseaseInfo = {
  "Fungal infection": {
    description:
      "Fungal infections are common skin conditions caused by fungi. They affect the skin, nails, and hair, causing itching, rashes, and discomfort.",
    precautions: [
      "Keep skin clean and dry, especially in skin folds and feet",
      "Do not share towels, socks, or shoes",
      "Wear loose, breathable cotton clothing",
      "Wash clothes and bedding in hot water regularly",
      "Avoid using steroid creams without a doctor's advice",
    ],
    awareness: [
      "Fungal infections are contagious and spread through direct contact",
      "Maintain good personal hygiene to prevent recurrence",
      "See a dermatologist if not improving within 2 weeks",
    ],
  },

  "Allergy": {
    description:
      "Allergies are immune system reactions to substances like pollen, dust, certain foods, or medications. Symptoms range from sneezing to severe reactions.",
    precautions: [
      "Identify and avoid known triggers",
      "Keep a symptom diary to spot patterns",
      "Keep bedding and living spaces dust-free",
      "Shower after outdoor exposure to remove pollen",
      "Keep antihistamines available if prescribed",
    ],
    awareness: [
      "Allergies can develop at any age",
      "Severe reactions (anaphylaxis) need immediate emergency care",
      "Consult an allergist for recurring symptoms",
    ],
  },

  "GERD": {
    description:
      "Gastroesophageal reflux disease (GERD) occurs when stomach acid frequently flows back into the esophagus, causing heartburn and irritation.",
    precautions: [
      "Avoid lying down within 2-3 hours after eating",
      "Limit alcohol, smoking, and spicy or fatty foods",
      "Eat smaller, more frequent meals",
      "Raise the head of your bed by 6-8 inches",
      "Maintain a healthy weight",
    ],
    awareness: [
      "Occasional heartburn is normal; frequent episodes may indicate GERD",
      "Chronic GERD can damage the esophagus if untreated",
      "See a doctor if symptoms occur more than twice a week",
    ],
  },

  "Chronic cholestasis": {
    description:
      "Chronic cholestasis is a condition where bile flow from the liver is reduced or blocked, leading to liver damage and jaundice over time.",
    precautions: [
      "Avoid alcohol completely",
      "Stay up to date with hepatitis A and B vaccinations",
      "Choose a low-fat, balanced diet",
      "Avoid unnecessary medications that stress the liver",
      "Stay well hydrated",
    ],
    awareness: [
      "Cholestasis can be caused by liver disease, medications, or pregnancy",
      "Early detection prevents permanent liver damage",
      "Regular liver function tests are recommended",
    ],
  },

  "Drug Reaction": {
    description:
      "Drug reactions are adverse responses of the body to medications, ranging from mild rashes to severe allergic reactions.",
    precautions: [
      "Keep a list of medicines and known allergies",
      "Read labels carefully and inform doctors about past reactions",
      "Avoid re-taking any medicine that caused a reaction",
      "Do not start new medicines without medical advice",
      "Keep skin cool and moisturised if irritated",
    ],
    awareness: [
      "Reactions can occur even to medicines taken safely before",
      "Severe reactions need immediate emergency care",
      "Report suspected reactions to your doctor",
    ],
  },

  "Peptic ulcer diseae": {
    description:
      "Peptic ulcers are open sores that develop on the inner lining of the stomach or upper intestine, often caused by H. pylori bacteria or NSAID use.",
    precautions: [
      "Avoid long-term unsupervised NSAID use",
      "Avoid smoking and heavy alcohol consumption",
      "Eat regular meals; limit spicy food and caffeine",
      "Manage stress with sleep and relaxation",
      "Complete prescribed treatment fully",
    ],
    awareness: [
      "H. pylori infection is a common cause and can be treated",
      "Untreated ulcers can bleed and become dangerous",
      "Seek care for black stools or vomiting blood",
    ],
  },

  AIDS: {
    description:
      "AIDS (Acquired Immune Deficiency Syndrome) is the late stage of HIV infection, where the immune system is severely damaged and unable to fight infections.",
    precautions: [
      "Practice safe sex and use protection consistently",
      "Never share needles or syringes",
      "Get tested regularly and encourage partners to test",
      "Take HIV medications (ART) as prescribed if positive",
      "Avoid smoking and heavy alcohol",
    ],
    awareness: [
      "HIV is manageable with lifelong antiretroviral therapy",
      "Early treatment leads to near-normal life expectancy",
      "HIV cannot be spread by hugging, sharing food, or mosquito bites",
    ],
  },

  Diabetes: {
    description:
      "Diabetes is a chronic condition where the body cannot properly regulate blood sugar, leading to high glucose levels and complications over time.",
    precautions: [
      "Monitor blood sugar regularly",
      "Limit sugary drinks and refined carbohydrates",
      "Exercise at least 150 minutes per week",
      "Maintain a healthy weight",
      "Get yearly eye, foot, and kidney checkups",
    ],
    awareness: [
      "Type 2 diabetes can often be prevented with lifestyle changes",
      "Uncontrolled diabetes damages organs silently",
      "Regular HbA1c tests track long-term control",
    ],
  },

  Gastroenteritis: {
    description:
      "Gastroenteritis (stomach flu) is inflammation of the stomach and intestines, usually caused by viral or bacterial infections, leading to diarrhea and vomiting.",
    precautions: [
      "Wash hands with soap frequently",
      "Drink safe, boiled or filtered water",
      "Eat freshly cooked food; avoid raw or street food",
      "Drink oral rehydration solution if dehydrated",
      "Do not share utensils while sick",
    ],
    awareness: [
      "Most cases resolve in 2-3 days with rest and fluids",
      "Severe dehydration requires medical attention",
      "Young children and elderly are at higher risk",
    ],
  },

  "Bronchial Asthma": {
    description:
      "Bronchial asthma is a chronic condition where airways narrow and swell, causing breathing difficulty, wheezing, and coughing.",
    precautions: [
      "Avoid known triggers (smoke, dust, cold air, strong smells)",
      "Keep prescribed inhalers within reach at all times",
      "Keep flu vaccinations up to date",
      "Follow a written asthma action plan",
      "Do regular gentle breathing exercises",
    ],
    awareness: [
      "Asthma can be controlled but not cured",
      "Regular checkups help maintain good control",
      "Emergency care is needed if breathing becomes very difficult",
    ],
  },

  Hypertension: {
    description:
      "Hypertension (high blood pressure) is a common condition where the force of blood against artery walls is consistently too high, increasing risk of heart disease and stroke.",
    precautions: [
      "Check blood pressure regularly",
      "Reduce salt intake to less than 5g per day",
      "Avoid tobacco and limit alcohol",
      "Exercise regularly and maintain healthy weight",
      "Follow a DASH-style diet rich in vegetables and fruits",
    ],
    awareness: [
      "Hypertension often has no symptoms — regular checks are vital",
      "Lifestyle changes can prevent or control it",
      "Untreated hypertension damages heart, brain, and kidneys",
    ],
  },

  Migraine: {
    description:
      "Migraine is a neurological condition causing intense, recurring headaches often accompanied by nausea and sensitivity to light and sound.",
    precautions: [
      "Identify and avoid triggers (stress, certain foods, poor sleep)",
      "Keep a headache diary",
      "Maintain regular sleep and meal times",
      "Stay well hydrated",
      "Rest in a quiet, dark room during attacks",
    ],
    awareness: [
      "Migraines are more common in women",
      "Frequent migraines need medical evaluation",
      "Sudden 'worst ever' headache is an emergency",
    ],
  },

  "Cervical spondylosis": {
    description:
      "Cervical spondylosis is age-related wear and tear of the spinal discs in the neck, causing pain, stiffness, and sometimes nerve symptoms.",
    precautions: [
      "Maintain good posture at screens and while driving",
      "Avoid heavy lifting that strains the neck",
      "Take regular breaks from sitting",
      "Use a supportive pillow",
      "Do gentle neck stretches daily",
    ],
    awareness: [
      "Common in people over 40",
      "Most cases improve with physiotherapy",
      "Numbness or weakness in arms needs prompt medical attention",
    ],
  },

  "Paralysis (brain hemorrhage)": {
    description:
      "Brain hemorrhage is bleeding inside the brain, often causing sudden paralysis, weakness, or loss of consciousness. It is a medical emergency.",
    precautions: [
      "Control blood pressure, cholesterol, and blood sugar",
      "Do not smoke; limit alcohol",
      "Heart-healthy diet and regular exercise",
      "Avoid head injuries; wear helmets when appropriate",
    ],
    awareness: [
      "Sudden weakness, face droop, or speech difficulty is an emergency",
      "Immediate hospital care saves lives",
      "Rehabilitation after recovery is essential",
    ],
  },

  Jaundice: {
    description:
      "Jaundice is yellowing of the skin and eyes due to high bilirubin, often a sign of liver, bile duct, or blood disorders.",
    precautions: [
      "Avoid alcohol completely",
      "Drink safe water and maintain food hygiene",
      "Get hepatitis A and B vaccinations",
      "Rest and eat light, low-fat meals",
      "Avoid unprescribed medicines and herbal remedies",
    ],
    awareness: [
      "Jaundice is a symptom, not a disease — the cause must be found",
      "Newborn jaundice is common and usually harmless",
      "Adult jaundice often signals liver problems",
    ],
  },

  Malaria: {
    description:
      "Malaria is a mosquito-borne disease caused by Plasmodium parasites, leading to fever, chills, and flu-like symptoms.",
    precautions: [
      "Use mosquito nets and repellents",
      "Remove standing water around the home",
      "Wear long sleeves at dusk and dawn",
      "Take preventive medicine when travelling to risk areas",
      "Seek testing for any unexplained fever",
    ],
    awareness: [
      "Malaria is preventable and curable",
      "Delay in treatment can be fatal",
      "Endemic in many tropical regions including parts of India",
    ],
  },

  "Chicken pox": {
    description:
      "Chickenpox is a highly contagious viral infection causing an itchy rash with small blisters, fever, and tiredness.",
    precautions: [
      "Vaccination protects against chickenpox",
      "Avoid contact with pregnant women, newborns, and immunocompromised",
      "Stay home until all blisters have crusted",
      "Keep nails short; do not scratch",
      "Take cool baths and wear loose clothing",
    ],
    awareness: [
      "More severe in adults than children",
      "Rare but serious complications can occur",
      "Virus stays dormant and can reactivate as shingles later",
    ],
  },

  Dengue: {
    description:
      "Dengue is a mosquito-borne viral infection causing high fever, severe headache, joint pain, and rash. Severe cases can cause bleeding and shock.",
    precautions: [
      "Remove standing water from containers",
      "Use mosquito nets and repellents",
      "Wear long-sleeved clothing",
      "Avoid aspirin and ibuprofen unless advised by a doctor",
      "Get daily platelet monitoring if infected",
    ],
    awareness: [
      "There is no specific treatment — supportive care is key",
      "Severe dengue is a medical emergency",
      "Common in India during and after monsoon",
    ],
  },

  Typhoid: {
    description:
      "Typhoid is a bacterial infection spread through contaminated food and water, causing prolonged fever, weakness, and abdominal pain.",
    precautions: [
      "Get typhoid vaccination",
      "Drink boiled or filtered water",
      "Wash hands thoroughly before eating",
      "Eat well-cooked, freshly prepared food",
      "Avoid preparing food for others when infected",
    ],
    awareness: [
      "Complete the full antibiotic course",
      "Untreated typhoid can cause intestinal bleeding",
      "Common in areas with poor sanitation",
    ],
  },

  "hepatitis A": {
    description:
      "Hepatitis A is a viral liver infection spread through contaminated food and water, causing jaundice, fatigue, and nausea.",
    precautions: [
      "Get hepatitis A vaccination",
      "Drink safe water; avoid ice from unknown sources",
      "Wash hands before eating and after toilet use",
      "Eat well-cooked food; avoid raw shellfish",
      "Avoid sharing utensils with infected persons",
    ],
    awareness: [
      "Usually self-limiting but can be severe",
      "Prevention through hygiene and vaccine is highly effective",
      "Rarely causes chronic liver disease",
    ],
  },

  "Hepatitis B": {
    description:
      "Hepatitis B is a viral infection affecting the liver, spread through blood, semen, and other body fluids. It can become chronic.",
    precautions: [
      "Get hepatitis B vaccination (3 doses)",
      "Practice safe sex; use condoms",
      "Never share needles, razors, or toothbrushes",
      "Ensure sterile equipment for tattoos/piercings",
      "Get screened if pregnant",
    ],
    awareness: [
      "Chronic hepatitis B can lead to cirrhosis and liver cancer",
      "Manageable with antiviral medications",
      "Mothers can pass it to newborns — vaccination at birth prevents this",
    ],
  },

  "Hepatitis C": {
    description:
      "Hepatitis C is a viral infection spread mainly through blood contact, often leading to chronic liver disease.",
    precautions: [
      "Never share needles or drug equipment",
      "Avoid sharing razors, toothbrushes, or nail clippers",
      "Ensure sterile equipment for tattoos and piercings",
      "Practice safe sex",
      "Get tested if at risk",
    ],
    awareness: [
      "Modern antiviral treatment cures over 95% of cases",
      "Often has no symptoms for years",
      "Early detection prevents liver damage",
    ],
  },

  "Hepatitis D": {
    description:
      "Hepatitis D is a serious liver infection that only occurs in people already infected with hepatitis B, making it more severe.",
    precautions: [
      "Get hepatitis B vaccination (protects against D too)",
      "Avoid contact with infected blood",
      "Do not share needles",
      "Avoid alcohol completely",
      "Regular liver monitoring if infected",
    ],
    awareness: [
      "Hepatitis D cannot exist without hepatitis B",
      "Prevention of hepatitis B prevents hepatitis D",
      "Can rapidly progress to liver failure",
    ],
  },

  "Hepatitis E": {
    description:
      "Hepatitis E is a waterborne viral liver infection, common in areas with poor sanitation. It is especially dangerous in pregnancy.",
    precautions: [
      "Drink boiled or purified water",
      "Maintain food and hand hygiene",
      "Avoid raw or undercooked meat",
      "Avoid travel to outbreak areas if pregnant",
      "Rest and light diet during recovery",
    ],
    awareness: [
      "Usually self-limiting in healthy people",
      "High mortality in pregnant women (up to 25%)",
      "Preventable through clean water and sanitation",
    ],
  },

  "Alcoholic hepatitis": {
    description:
      "Alcoholic hepatitis is liver inflammation caused by heavy alcohol consumption, leading to jaundice, fever, and liver failure in severe cases.",
    precautions: [
      "Stop alcohol consumption completely",
      "Eat a nutritious diet rich in protein and vitamins",
      "Get medical support for alcohol withdrawal",
      "Attend regular liver function monitoring",
      "Avoid all liver-stressing medications",
    ],
    awareness: [
      "Continued drinking can be fatal",
      "Liver can partially recover with abstinence",
      "Counselling and support groups help sustain sobriety",
    ],
  },

  Tuberculosis: {
    description:
      "Tuberculosis (TB) is a bacterial infection primarily affecting the lungs, spread through the air when an infected person coughs or sneezes.",
    precautions: [
      "Complete the full 6-9 month treatment course",
      "Cover mouth when coughing; ventilate rooms",
      "Wear masks in high-risk settings",
      "Screen close contacts",
      "Maintain nutritious diet and rest",
    ],
    awareness: [
      "TB is curable with proper treatment",
      "Incomplete treatment leads to drug-resistant TB",
      "BCG vaccine protects children from severe forms",
    ],
  },

  "Common Cold": {
    description:
      "The common cold is a mild viral infection of the nose and throat, causing runny nose, sneezing, and mild fever.",
    precautions: [
      "Wash hands often with soap",
      "Avoid close contact with sick people",
      "Do not share utensils or towels",
      "Rest and drink warm fluids",
      "Use steam inhalation for congestion",
    ],
    awareness: [
      "Usually self-limiting within 7-10 days",
      "Antibiotics do not help viral colds",
      "See a doctor if symptoms last over 10 days",
    ],
  },

  Pneumonia: {
    description:
      "Pneumonia is an infection that inflames air sacs in one or both lungs, which may fill with fluid, causing difficulty breathing.",
    precautions: [
      "Get pneumococcal and flu vaccinations",
      "Do not smoke; avoid secondhand smoke",
      "Wash hands frequently",
      "Maintain good nutrition and hydration",
      "Seek prompt care for persistent cough with fever",
    ],
    awareness: [
      "More serious in young children and elderly",
      "Can be bacterial, viral, or fungal",
      "Chest X-ray confirms diagnosis",
    ],
  },

  "Dimorphic hemmorhoids(piles)": {
    description:
      "Piles (hemorrhoids) are swollen veins in the lower rectum and anus, causing pain, itching, and sometimes bleeding during bowel movements.",
    precautions: [
      "Eat a high-fibre diet to prevent constipation",
      "Drink plenty of water",
      "Avoid straining or sitting long on the toilet",
      "Take warm sitz baths for relief",
      "Exercise regularly to improve circulation",
    ],
    awareness: [
      "Common during pregnancy and with aging",
      "Most cases improve with lifestyle changes",
      "Persistent bleeding needs medical evaluation",
    ],
  },

  "Heart attack": {
    description:
      "A heart attack (myocardial infarction) occurs when blood flow to part of the heart is blocked, damaging heart muscle. It is a medical emergency.",
    precautions: [
      "Know your blood pressure, cholesterol, and sugar numbers",
      "Do not smoke; limit alcohol",
      "Eat a heart-healthy diet low in saturated fats",
      "Exercise regularly and maintain healthy weight",
      "Manage stress and get enough sleep",
    ],
    awareness: [
      "Chest pain, pressure, or pain spreading to arm/jaw is an EMERGENCY",
      "Call emergency services immediately — every minute counts",
      "Aspirin can help if advised by emergency services",
    ],
  },

  "Varicose veins": {
    description:
      "Varicose veins are enlarged, twisted veins, usually in the legs, caused by weakened vein walls and valves. They can cause pain and swelling.",
    precautions: [
      "Avoid standing or sitting for very long periods",
      "Elevate legs when resting",
      "Maintain a healthy weight",
      "Exercise regularly (walking, swimming)",
      "Consider compression stockings if advised",
    ],
    awareness: [
      "More common in women and with aging",
      "Can lead to ulcers if untreated",
      "Sudden painful swelling needs urgent evaluation",
    ],
  },

  Hypothyroidism: {
    description:
      "Hypothyroidism is an underactive thyroid gland producing too little thyroid hormone, causing fatigue, weight gain, and cold intolerance.",
    precautions: [
      "Ensure adequate iodine intake",
      "Take prescribed thyroid medication consistently",
      "Get regular TSH blood tests",
      "Maintain balanced diet, exercise, and sleep",
      "Get screened if there is a family history",
    ],
    awareness: [
      "Common in women over 40",
      "Symptoms develop slowly and are often missed",
      "Treatable with daily medication",
    ],
  },

  Hyperthyroidism: {
    description:
      "Hyperthyroidism is an overactive thyroid producing excess hormone, causing weight loss, rapid heartbeat, and anxiety.",
    precautions: [
      "Avoid excess iodine supplements",
      "Limit caffeine and stimulants",
      "Take prescribed medications regularly",
      "Rest and manage stress",
      "Avoid smoking",
    ],
    awareness: [
      "Can cause heart problems if untreated",
      "Regular thyroid function tests are needed",
      "Racing heartbeat with fever is a medical emergency",
    ],
  },

  Hypoglycemia: {
    description:
      "Hypoglycemia is abnormally low blood sugar, causing shakiness, confusion, and in severe cases, loss of consciousness.",
    precautions: [
      "Do not skip meals; eat at regular intervals",
      "Carry a fast sugar source (glucose tablets, juice)",
      "If diabetic, follow the medicine and meal plan strictly",
      "Limit alcohol on an empty stomach",
      "Wear a medical ID if prone to episodes",
    ],
    awareness: [
      "Common in people on insulin or diabetes medication",
      "Recognising early symptoms saves lives",
      "Confusion or seizures require emergency care",
    ],
  },

  Osteoarthristis: {
    description:
      "Osteoarthritis is a degenerative joint disease where cartilage wears down, causing pain, stiffness, and reduced movement.",
    precautions: [
      "Maintain a healthy weight to reduce joint load",
      "Protect joints; avoid repetitive overuse",
      "Do low-impact exercise (walking, swimming)",
      "Use warm compresses for stiffness",
      "Consider physiotherapy",
    ],
    awareness: [
      "Common with aging, but not inevitable",
      "Exercise actually helps — rest worsens it",
      "Joint replacement is an option for severe cases",
    ],
  },

  Arthritis: {
    description:
      "Arthritis refers to joint inflammation causing pain, swelling, and stiffness. It includes several types like rheumatoid arthritis and osteoarthritis.",
    precautions: [
      "Maintain a healthy weight",
      "Stay physically active with low-impact exercise",
      "Protect joints from injury",
      "Eat an anti-inflammatory diet rich in omega-3",
      "Follow prescribed medications regularly",
    ],
    awareness: [
      "Early treatment prevents joint damage",
      "Rheumatoid arthritis is autoimmune and needs specialist care",
      "Regular monitoring of disease activity is important",
    ],
  },

  "(vertigo) Paroymsal  Positional Vertigo": {
    description:
      "Benign paroxysmal positional vertigo (BPPV) causes brief episodes of dizziness triggered by specific head movements, due to displaced crystals in the inner ear.",
    precautions: [
      "Rise slowly from bed",
      "Avoid sudden head movements",
      "Sleep with head slightly raised",
      "Avoid driving or climbing during dizzy spells",
      "Stay well hydrated",
    ],
    awareness: [
      "Not dangerous, but increases fall risk",
      "Positional manoeuvres (like Epley) can cure it",
      "Sudden weakness, speech problems need urgent care",
    ],
  },

  Acne: {
    description:
      "Acne is a common skin condition where hair follicles become clogged with oil and dead skin cells, causing pimples, blackheads, and cysts.",
    precautions: [
      "Wash face gently twice daily",
      "Do not squeeze or pick pimples",
      "Use non-comedogenic products",
      "Keep hair and phones/pillowcases clean",
      "Limit very sugary or oily food",
    ],
    awareness: [
      "Common in teenagers and young adults",
      "Hormonal changes influence acne",
      "See a dermatologist if scarring or no improvement",
    ],
  },

  "Urinary tract infection": {
    description:
      "Urinary tract infection (UTI) is an infection in any part of the urinary system, commonly the bladder, causing burning urination and frequent urges.",
    precautions: [
      "Drink plenty of water",
      "Do not hold urine for long periods",
      "Wipe front to back after using toilet",
      "Urinate after sexual intercourse",
      "Wear breathable cotton underwear",
    ],
    awareness: [
      "More common in women",
      "Fever with back pain suggests kidney involvement — seek urgent care",
      "Complete the full antibiotic course",
    ],
  },

  Psoriasis: {
    description:
      "Psoriasis is a chronic autoimmune condition causing rapid skin cell buildup, leading to thick, scaly patches on the skin.",
    precautions: [
      "Moisturise skin daily",
      "Avoid skin injury and infections",
      "Manage stress; avoid smoking",
      "Short sunlight exposure may help",
      "Follow prescribed treatments regularly",
    ],
    awareness: [
      "Not contagious",
      "Can be linked with joint problems (psoriatic arthritis)",
      "Triggers include stress, infections, and certain medicines",
    ],
  },

  Impetigo: {
    description:
      "Impetigo is a highly contagious bacterial skin infection causing red sores, usually around the nose and mouth, common in children.",
    precautions: [
      "Wash hands frequently",
      "Do not share towels, clothes, or bedding",
      "Keep sores clean and covered",
      "Trim nails and avoid scratching",
      "Wash bedding and clothes in hot water",
    ],
    awareness: [
      "Highly contagious — keep children home until treated",
      "Usually treated with topical or oral antibiotics",
      "Can spread rapidly in schools and daycares",
    ],
  },
};

module.exports = diseaseInfo;