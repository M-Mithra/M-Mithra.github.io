// All visible text lives here. Edit a string and the page updates everywhere it is used.

const S1_SA = ['वक्रतुण्ड महाकाय कोटिसूर्य समप्रभ ।', 'निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥'];
const S2_SA = ['देवदेव महादेव नीलग्रीव सदाशिव ।', 'भावनातीत भूतेश भीमनाथ नमोऽस्तु ते ॥'];
const S3_SA = ['सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके ।', 'शरण्ये त्र्यम्बके गौरि नारायणी नमोऽस्तु ते ॥'];
export const SHLOKAS = {
en: { s1: { line1: S1_SA[0], line2: S1_SA[1] }, s2: { line1: S2_SA[0], line2: S2_SA[1] }, s3: { line1: S3_SA[0], line2: S3_SA[1] } },
hi: { s1: { line1: S1_SA[0], line2: S1_SA[1] }, s2: { line1: S2_SA[0], line2: S2_SA[1] }, s3: { line1: S3_SA[0], line2: S3_SA[1] } },
te: {
s1: { line1: 'వక్రతుండ మహాకాయ కోటిసూర్య సమప్రభ ।', line2: 'నిర్విఘ్నం కురు మే దేవ సర్వకార్యేషు సర్వదా ॥' },
s2: { line1: 'దేవదేవ మహాదేవ నీలగ్రీవ సదాశివ ।', line2: 'భావనాతీత భూతేశ భీమనాథ నమోఽస్తు తే ॥' },
s3: { line1: 'సర్వమంగళ మాంగళ్యే శివే సర్వార్థ సాధికే ।', line2: 'శరణ్యే త్ర్యంబకే గౌరి నారాయణీ నమోఽస్తు తే ॥' }
}
};

export const T = {
en: {
lang: 'en', skip: 'Skip to content', brand: 'M. A. Rama Murthy',
navAbout: 'Parichaya', navLearning: 'Learning', navTemple: 'Kshetram', navPujas: 'Pujas', navGallery: 'Gallery',
cta: 'Request a puja', festCta: 'Take part', ctaSecondary: 'See past pujas',
name1: 'Medavarapu Viswamithra', name2: 'Atchutha Rama Murthy',
heroLine: 'From a purohit family of Sri Manikyamba Sametha Sri Bheemeswara Swamy Temple, Draksharamam. Learning puja, path and Smartham since childhood.',
aboutTitle: 'Rooted in tradition, practised with discipline',
aboutP1: 'My father is a purohit, and what I learned from my late maternal grandfather in childhood remains my foundation. I do puja and parayanam at home regularly, and perform abhishekam and puja at the temple, both for myself and on behalf of others. Through college, I also led pujas for students and families.',
eduLabel: 'Education', eduOrg: 'IIT Kharagpur', eduLines: ['B.Tech, E&ECE', 'M.Tech, Vision and Intelligent Systems'], eduMeta: 'Dual degree · 2021-2026',
expLabel: 'Experience', expOrg: 'BlackRock', expRole: 'Analyst', expMeta: 'Gurugram · June 2026 - Present',
learnTitle: 'Learned at home, from family and elders',
vedaBadges: ['Rigveda · Vaidika Shakha', 'Rigveda in daily practice', 'Karyakramas in both Rigveda and Yajurveda'],
teachers: [
{ tag: 'From the age of six', title: 'My late maternal grandfather', name: 'Kurumeti Nagasurya Brahmanna garu', body: 'My first guru. From him I learned Ganapati Puja, stotras and Tarabalam.' },
{ tag: 'Family tradition', title: 'My father', name: 'Medavarapu Srinivasa Chintamani garu', body: 'A purohit at Draksharamam. I learned puja vidhi from him by going along to his karyakramas, watching closely how each one is done.' }
],
scholars: {
tag: 'From Vedic scholars', title: 'Suktas & mantras', body: 'Learned under Vedic scholars:',
items: ['Sandhyavandanam', 'Ganapati Suktam', 'Ganapati Atharvashirsham', 'Saraswati Suktam', 'Medha Suktam', 'Vishnu Suktam', 'Durga Suktam', 'Sri Suktam', 'Purusha Suktam', 'Navagraha Mantras', 'Manyu Suktam', 'Rudra Namakam', 'Chamakam', 'Mahanyasam', 'Maha Mantrapushpam']
},
templeKicker: 'Our kshetram', templeName: 'Sri Manikyamba Sametha Sri Bheemeswara Swamy Temple', templeSub: 'Draksharamam, Andhra Pradesh',
badge1: '12th of the 18 Shakti Peethas', badge2: 'One of the Pancharama Kshetras', badge3: '5 generations of service',
templeBody: 'Here Lord Bheemeswara and Devi Manikyamba reside together. For five generations my family has served this temple, and a member of our family serves as its Aalaya Pradhana Purohit.',
templeLabels: ['Draksharamam temple', 'Sri Bheemeswara Swamy', 'Sri Manikyamba Ammavaru'],
heroAlt: 'Performing a puja in a sunlit courtyard', portraitAlt: 'Rama Murthy in a traditional pancha and kanduva at the temple',
currentTitle: 'Currently learning',
currentItems: [
{ title: 'Smartham', body: 'The rites and procedures of the Smarta tradition, in greater depth.' },
{ title: 'Jyotishyam', body: 'Muhurthams, tarabalam and reading jathakams.' }
],
summaryTitle: 'Have a question? Just ask.',
summaryBody: 'Whether it is a muhurtham for an occasion, tarabalam for a day, or jathakam matching for a marriage, or any doubt about a puja, feel free to reach out.',
summaryTopics: ['Muhurthams', 'Tarabalam', 'Jathakam matching for marriage'],
onlineTitle: 'Online pujas, too', onlineBody: 'Depending on the puja and your requirement, I can also perform it online, wherever you are.', pujasTitle: 'Pujas I perform',
pujas: [
{ title: 'Vinayaka Puja', body: 'So every auspicious beginning proceeds without obstacles.' },
{ title: 'Ganapati Homam', body: 'Homam to Sri Mahaganapati before major undertakings, to clear the way ahead.' },
{ title: 'Lakshmi Puja', body: 'For prosperity, Deepavali and Varalakshmi Vratam.' },
{ title: 'Kumkuma Puja', body: 'Kumkumarchana for Devi, together with Gowri Puja, for saubhagyam and family well-being.' },
{ title: 'Abhishekam', body: 'Abhishekam for the deity, at home or at the temple.' },
{ title: 'Shankusthapana', body: 'Foundation-stone ceremony for a new building.' },
{ title: 'Grihapravesham', body: 'Housewarming, to enter a new home auspiciously.' },
{ title: 'Satyanarayana Vratam', body: 'For family well-being and auspicious occasions.' }
],
galleryTitle: 'Pujas through the years',
memories: [
{ title: 'Vinayaka Chavithi, IIT Kharagpur', role: 'Performed the Ganapati Puja for the students\u2019 Telugu Cultural Association.' },
{ title: 'Draksharamam Temple', role: 'Every visit home: darshanam, abhishekam, kumkuma puja and japam.' }
],
photo: '[PHOTO]', yearPlaceholder: '[YEAR]',
guestsTitle: 'With revered personalities',
guests: [
{ name: 'Dr. Garikipati Narasimha Rao garu', when: 'March 2024 · IIT Kharagpur' },
{ name: 'Brahmasri Samavedam Shanmukha Sarma garu', when: 'September 2025 · IIT Kharagpur' },
{ name: 'Sri Tridandi Srimannarayana Ramanuja Chinna Jeeyar Swami', when: 'March 2026 · IIT Kharagpur' }
],
contactBody: 'Available on festival days and weekends, and for karyakramams on other days too. Reach out on the email or phone below to check the schedule, and for details on puja samagri, duration and more.',
email: 'Email me', whatsapp: 'WhatsApp',
footer: 'ॐ शान्तिः शान्तिः शान्तिः · © 2026 M. A. Rama Murthy'
},
te: {
lang: 'te', skip: 'విషయానికి వెళ్ళండి', brand: 'ఎం. ఎ. రామ మూర్తి',
navAbout: 'పరిచయం', navLearning: 'విద్య', navTemple: 'క్షేత్రం', navPujas: 'పూజలు', navGallery: 'జ్ఞాపకాలు',
cta: 'పూజకు సంప్రదించండి', festCta: 'పాల్గొనండి', ctaSecondary: 'జరిపిన కార్యక్రమములు',
name1: 'మేడవరపు విశ్వామిత్ర', name2: 'అచ్యుత రామమూర్తి',
heroLine: 'ద్రాక్షారామం శ్రీ మాణిక్యాంబా సమేత శ్రీ భీమేశ్వర స్వామి వారి ఆలయ పురోహిత కుటుంబం మాది. చిన్ననాటి నుండే పూజ, పారాయణం, స్మార్తం నేర్చుకుంటూ వస్తున్నాను.',
aboutTitle: 'ఇంటి నుండి నేర్చిన విద్య, నిత్యం సాగే ఉపాసన',
aboutP1: 'మా నాన్నగారు పురోహితులు. చిన్నతనం నుండి మా తాతగారి (అమ్మ నాన్నగారు) దగ్గర నేర్చుకున్న విద్యే నాకు పునాది. ఇంట్లో నిత్యం పూజ, పారాయణం చేసుకుంటాను. ఆలయంలో నా తరఫునే కాకుండా ఇతరులకు కూడా అభిషేకములు, పూజలు చేస్తుంటాను. కళాశాల రోజుల్లోనూ విద్యార్థులతో కలిసి ఎన్నో కార్యక్రమములు నిర్వహించాను.',
eduLabel: 'విద్యార్హత', eduOrg: 'ఐఐటీ ఖరగ్‌పూర్', eduLines: ['బి.టెక్, ఎలక్ట్రానిక్స్', 'ఎం.టెక్, కంప్యూటర్ విజన్ & ఆర్టిఫిషియల్ ఇంటెలిజెన్స్'], eduMeta: 'డ్యూయల్ డిగ్రీ · 2021-2026',
expLabel: 'ఉద్యోగం', expOrg: 'బ్లాక్‌రాక్', expRole: 'అనలిస్ట్', expMeta: 'గురుగ్రామ్ · జూన్ 2026 - ప్రస్తుతం',
learnTitle: 'నేర్పిన పెద్దలు',
vedaBadges: ['ఋగ్వేదం · వైదిక శాఖ', 'నిత్యాభ్యాసం ఋగ్వేదం', 'ఋగ్వేద, యజుర్వేద కార్యక్రమాలు రెండూ'],
teachers: [
{ tag: 'ఆరేళ్ళ ప్రాయం నుండి', title: 'కీ.శే. మా తాతగారు', name: 'కురుమేటి నాగసూర్య బ్రహ్మన్న గారు', body: 'అమ్మ వైపు తాతగారు. నాకు చిన్నప్పటి నుండి గణపతి పూజ, స్తోత్రాలు, తారాబలం అన్నీ వారే నేర్పించారు.' },
{ tag: 'ఇంటి సంప్రదాయం', title: 'మా నాన్నగారు', name: 'మేడవరపు శ్రీనివాస చింతామణి గారు', body: 'ద్రాక్షారామంలో పురోహితులు. వారితో పాటు కార్యక్రమాలకు వెళ్తూ, ఏ కార్యక్రమము ఎలా జరిపించాలో దగ్గరుండి చూసి పూజా విధానం నేర్చుకున్నాను.' }
],
scholars: {
tag: 'వేద పండితుల వద్ద', title: 'సూక్తాలు, మంత్రాలు', body: 'వేద పండితుల వద్ద అభ్యసించినవి:',
items: ['సంధ్యావందనం', 'గణపతి సూక్తం', 'గణపతి అథర్వశీర్షం', 'సరస్వతీ సూక్తం', 'మేధా సూక్తం', 'విష్ణు సూక్తం', 'దుర్గా సూక్తం', 'శ్రీ సూక్తం', 'పురుష సూక్తం', 'నవగ్రహ మంత్రాలు', 'మన్యు సూక్తం', 'రుద్ర నమకం', 'చమకం', 'మహన్యాసం', 'మహామంత్రపుష్పం']
},
templeKicker: 'మా క్షేత్రం', templeName: 'శ్రీ మాణిక్యాంబా సమేత శ్రీ భీమేశ్వర స్వామి వారి ఆలయం', templeSub: 'ద్రాక్షారామం, ఆంధ్రప్రదేశ్',
badge1: 'అష్టాదశ శక్తిపీఠాల్లో పన్నెండవది', badge2: 'పంచారామాల్లో ఒకటి', badge3: 'ఐదు తరాల సేవ',
templeBody: 'దక్షారామంగా ప్రసిద్ధమైన ఈ క్షేత్రంలో స్వామివారు శ్రీ భీమేశ్వరునిగా, అమ్మవారు శ్రీ మాణిక్యాంబగా కొలువై ఉన్నారు. ఐదు తరాలుగా మా కుటుంబం ఈ ఆలయ సేవలో ఉంది. ఆలయ ప్రధాన పురోహితులుగా మా కుటుంబ సభ్యులే వ్యవహరిస్తున్నారు.',
templeLabels: ['ద్రాక్షారామ ఆలయం', 'శ్రీ భీమేశ్వర స్వామి వారు', 'శ్రీ మాణిక్యాంబ అమ్మవారు'],
heroAlt: 'ఎండ పడుతున్న ప్రాంగణంలో పూజ చేస్తూ', portraitAlt: 'ఆలయ ప్రాంగణంలో పంచె, కండువాతో రామ మూర్తి',
currentTitle: 'ఇప్పుడు నేర్చుకుంటున్నవి',
currentItems: [
{ title: 'స్మార్తం', body: 'స్మార్త సంప్రదాయంలోని కర్మలు, విధి విధానాలు మరింత లోతుగా.' },
{ title: 'జ్యోతిష్యం', body: 'ముహూర్తాలు, తారాబలం, జాతక పరిశీలన.' }
],
summaryTitle: 'సందేహం ఉంటే అడగండి',
summaryBody: 'శుభకార్యానికి ముహూర్తం కావాలన్నా, ఆనాటి తారాబలం చూడాలన్నా, పెళ్ళికి జాతకాల పొంతన కుదురుతుందో లేదో తెలుసుకోవాలన్నా, ఏ పూజ గురించి సందేహం ఉన్నా నిస్సంకోచంగా సంప్రదించండి.',
summaryTopics: ['ముహూర్తాలు', 'తారాబలం', 'వివాహ జాతక పొంతన'],
onlineTitle: 'ఆన్‌లైన్‌లో కూడా పూజలు', onlineBody: 'మీ అవసరాన్ని, కార్యక్రమాన్ని బట్టి ఆన్‌లైన్‌లో కూడా పూజలు జరిపించగలను, మీరు ఎక్కడ ఉన్నా సరే.', pujasTitle: 'నేను చేసే పూజలు',
pujas: [
{ title: 'వినాయక పూజ', body: 'ఏ శుభకార్యమైనా విఘ్నాలు లేకుండా మొదలవ్వాలని.' },
{ title: 'గణపతి హోమం', body: 'పెద్ద కార్యం తలపెట్టే ముందు, ఆటంకాలు తొలగిపోవాలని మహాగణపతికి హోమం.' },
{ title: 'లక్ష్మీ పూజ', body: 'ఇంట సిరిసంపదలు నిలవాలని: దీపావళి, వరలక్ష్మీ వ్రతం.' },
{ title: 'కుంకుమ పూజ', body: 'గౌరీ పూజతో కలిపి అమ్మవారికి కుంకుమార్చన, సౌభాగ్యం మరియు కుటుంబ క్షేమం కోసం.' },
{ title: 'అభిషేకం', body: 'ఇంట్లో గానీ, ఆలయంలో గానీ స్వామివారికి అభిషేకం.' },
{ title: 'శంకుస్థాపన', body: 'కొత్త నిర్మాణానికి శుభారంభం.' },
{ title: 'గృహప్రవేశం', body: 'కొత్త ఇంటిలో శుభంగా అడుగుపెట్టేందుకు.' },
{ title: 'సత్యనారాయణ వ్రతం', body: 'కుటుంబ శ్రేయస్సు కోసం, శుభ సందర్భాల్లో.' }
],
galleryTitle: 'నేను నిర్వహించిన కార్యక్రమములు',
memories: [
{ title: 'వినాయక చవితి, ఐఐటీ ఖరగ్‌పూర్', role: 'విద్యార్థుల తెలుగు సాంస్కృతిక సంఘం తరఫున గణపతి పూజ నిర్వహించాను.' },
{ title: 'ద్రాక్షారామ ఆలయం', role: 'ఇంటికి వెళ్ళిన ప్రతిసారీ: స్వామి దర్శనం, అభిషేకం, అమ్మవారికి కుంకుమ పూజ, జపం.' }
],
photo: '[ఫోటో]', yearPlaceholder: '[సంవత్సరం]',
guestsTitle: 'మహనీయుల సన్నిధిలో',
guests: [
{ name: 'డా. గరికిపాటి నరసింహారావు గారు', when: 'మార్చి 2024 · ఐఐటీ ఖరగ్‌పూర్' },
{ name: 'బ్రహ్మశ్రీ సామవేదం షణ్ముఖ శర్మ గారు', when: 'సెప్టెంబర్ 2025 · ఐఐటీ ఖరగ్‌పూర్' },
{ name: 'శ్రీ త్రిదండి శ్రీమన్నారాయణ రామానుజ చిన్నజీయర్ స్వామి వారు', when: 'మార్చి 2026 · ఐఐటీ ఖరగ్‌పూర్' }
],
contactBody: 'పండుగ రోజుల్లో, వారాంతాల్లో అందుబాటులో ఉంటాను. ఇతర రోజుల్లో కూడా కార్యక్రమాలకు వీలుంటుంది. తేదీల లభ్యత, పూజా సామగ్రి, సమయం వంటి వివరాల కోసం కింద ఇచ్చిన ఈమెయిల్ లేదా ఫోన్ ద్వారా సంప్రదించండి.',
email: 'ఈమెయిల్ చేయండి', whatsapp: 'వాట్సాప్',
footer: 'ఓం శాంతిః శాంతిః శాంతిః · © 2026 ఎం. ఎ. రామ మూర్తి'
},
hi: {
lang: 'hi', skip: 'मुख्य सामग्री पर जाएँ', brand: 'एम. ए. राम मूर्ति',
navAbout: 'परिचय', navLearning: 'विद्या', navTemple: 'क्षेत्र', navPujas: 'पूजाएँ', navGallery: 'स्मृतियाँ',
cta: 'पूजा के लिए संपर्क करें', festCta: 'भाग लें', ctaSecondary: 'संपन्न पूजाएँ',
name1: 'मेडवरपु विश्वामित्र', name2: 'अच्युत राममूर्ति',
heroLine: 'द्राक्षारामम् के श्री माणिक्याम्बा समेत श्री भीमेश्वर स्वामी मंदिर से जुड़ा पुरोहित परिवार। बचपन से ही पूजा, पाठ और स्मार्त कर्म जीवन का हिस्सा रहे हैं।',
aboutTitle: 'घर से मिली विद्या, जीवन भर की उपासना',
aboutP1: 'मेरे पिताजी पुरोहित हैं। बचपन से स्वर्गीय नानाजी से मिली शिक्षा ही मेरी नींव है। घर पर नित्य पूजा और पाठ होता है, और मंदिर में अपने लिए ही नहीं, दूसरों के लिए भी अभिषेक और पूजा संपन्न कराना मेरे लिए सौभाग्य की बात है। कॉलेज के दिनों में भी साथियों के साथ अनेक पूजाएँ कीं।',
eduLabel: 'शिक्षा', eduOrg: 'आईआईटी खड़गपुर', eduLines: ['बी.टेक, इलेक्ट्रॉनिक्स', 'एम.टेक, कंप्यूटर विज़न व आर्टिफ़िशियल इंटेलिजेंस'], eduMeta: 'डुअल डिग्री · 2021-2026',
expLabel: 'अनुभव', expOrg: 'ब्लैकरॉक', expRole: 'एनालिस्ट', expMeta: 'गुरुग्राम · जून 2026 - वर्तमान',
learnTitle: 'जिनसे सीखा',
vedaBadges: ['ऋग्वेद · वैदिक शाखा', 'नित्य अभ्यास: ऋग्वेद', 'ऋग्वेद और यजुर्वेद, दोनों के कार्यक्रम'],
teachers: [
{ tag: 'छह वर्ष की आयु से', title: 'स्वर्गीय नानाजी', name: 'कुरुमेटि नागसूर्य ब्रह्मन्ना जी', body: 'मेरे पहले गुरु। गणपति पूजा, स्तोत्र और ताराबल उन्हीं से सीखे।' },
{ tag: 'घर की परंपरा', title: 'पिताजी', name: 'मेडवरपु श्रीनिवास चिंतामणि जी', body: 'द्राक्षारामम् में पुरोहित। उनके साथ कार्यक्रमों में जाकर, हर कार्य कैसे संपन्न होता है यह पास से देखते हुए पूजा-विधि सीखी।' }
],
scholars: {
tag: 'वेद विद्वानों से', title: 'सूक्त और मंत्र', body: 'वेद विद्वानों के सान्निध्य में सीखे:',
items: ['संध्यावंदन', 'गणपति सूक्त', 'गणपति अथर्वशीर्ष', 'सरस्वती सूक्त', 'मेधा सूक्त', 'विष्णु सूक्त', 'दुर्गा सूक्त', 'श्री सूक्त', 'पुरुष सूक्त', 'नवग्रह मंत्र', 'मन्यु सूक्त', 'रुद्र नमक', 'चमक', 'महन्यास', 'महामंत्रपुष्प']
},
templeKicker: 'हमारा क्षेत्र', templeName: 'श्री माणिक्याम्बा समेत श्री भीमेश्वर स्वामी मंदिर', templeSub: 'द्राक्षारामम्, आंध्र प्रदेश',
badge1: 'अष्टादश शक्तिपीठों में बारहवाँ', badge2: 'पंचाराम क्षेत्रों में से एक', badge3: 'पाँच पीढ़ियों की सेवा',
templeBody: 'प्राचीन दक्षारामम् में भगवान श्री भीमेश्वर और देवी श्री माणिक्याम्बा विराजमान हैं। पाँच पीढ़ियों से हमारा परिवार इस मंदिर की सेवा में है, और मंदिर के प्रधान पुरोहित का दायित्व हमारे परिवार के सदस्य ही निभा रहे हैं।',
templeLabels: ['द्राक्षारामम् मंदिर', 'श्री भीमेश्वर स्वामी', 'श्री माणिक्याम्बा देवी'],
heroAlt: 'धूप भरे आँगन में पूजा करते हुए', portraitAlt: 'मंदिर प्रांगण में पारंपरिक वेशभूषा में राम मूर्ति',
currentTitle: 'इन दिनों का अध्ययन',
currentItems: [
{ title: 'स्मार्त', body: 'स्मार्त परंपरा के कर्म और विधि-विधान, और गहराई से।' },
{ title: 'ज्योतिष', body: 'मुहूर्त, ताराबल और जातक-विचार।' }
],
summaryTitle: 'कोई प्रश्न हो तो निःसंकोच पूछें',
summaryBody: 'किसी शुभ कार्य का मुहूर्त निकालना हो, किसी दिन का ताराबल देखना हो, विवाह के लिए कुंडली मिलान करवाना हो, या किसी पूजा को लेकर कोई शंका हो, तो बेझिझक संपर्क करें।',
summaryTopics: ['मुहूर्त', 'ताराबल', 'विवाह हेतु कुंडली मिलान'],
onlineTitle: 'ऑनलाइन पूजा भी', onlineBody: 'पूजा के स्वरूप और आपकी आवश्यकता के अनुसार ऑनलाइन भी संपन्न कराई जा सकती है, आप कहीं भी हों।', pujasTitle: 'संपन्न कराई जाने वाली पूजाएँ',
pujas: [
{ title: 'विनायक पूजा', body: 'हर शुभ कार्य का निर्विघ्न आरंभ।' },
{ title: 'गणपति होम', body: 'किसी बड़े कार्य से पहले, मार्ग की बाधाएँ दूर करने हेतु महागणपति होम।' },
{ title: 'लक्ष्मी पूजा', body: 'घर में सुख-समृद्धि के लिए: दीपावली, वरलक्ष्मी व्रत।' },
{ title: 'कुमकुम पूजा', body: 'गौरी पूजा सहित देवी का कुमकुमार्चन, सौभाग्य और परिवार के कल्याण के लिए।' },
{ title: 'अभिषेक', body: 'भगवान का अभिषेक, घर पर या मंदिर में।' },
{ title: 'शंकुस्थापना', body: 'नए निर्माण का शुभारंभ।' },
{ title: 'गृहप्रवेश', body: 'नए घर में मंगलमय प्रवेश।' },
{ title: 'सत्यनारायण व्रत', body: 'परिवार के कल्याण और शुभ अवसरों के लिए।' }
],
galleryTitle: 'वर्षों की यात्रा',
memories: [
{ title: 'विनायक चतुर्थी, आईआईटी खड़गपुर', role: 'छात्रों के तेलुगु सांस्कृतिक संघ के लिए गणपति पूजा संपन्न कराई।' },
{ title: 'द्राक्षारामम् मंदिर', role: 'हर बार घर लौटने पर: दर्शन, अभिषेक, कुमकुम पूजा और जप।' }
],
photo: '[फ़ोटो]', yearPlaceholder: '[वर्ष]',
guestsTitle: 'महानुभावों के सान्निध्य में',
guests: [
{ name: 'डॉ. गरिकिपाटि नरसिंह राव जी', when: 'मार्च 2024 · आईआईटी खड़गपुर' },
{ name: 'ब्रह्मश्री सामवेदम् षण्मुख शर्मा जी', when: 'सितंबर 2025 · आईआईटी खड़गपुर' },
{ name: 'श्री त्रिदंडी श्रीमन्नारायण रामानुज चिन्न जीयर स्वामी जी', when: 'मार्च 2026 · आईआईटी खड़गपुर' }
],
contactBody: 'त्योहारों और सप्ताहांत पर उपलब्ध; अन्य दिनों में भी कार्यक्रम संभव हैं। समय-सारणी, पूजा सामग्री, अवधि आदि की जानकारी के लिए नीचे दिए ईमेल या फ़ोन पर संपर्क करें।',
email: 'ईमेल करें', whatsapp: 'व्हाट्सऐप',
footer: 'ॐ शान्तिः शान्तिः शान्तिः · © 2026 एम. ए. राम मूर्ति'
}
};

// Festival banner: add or edit entries here. It shows from `showFrom` until `end`, then moves to the next one.
export const FESTIVALS = [
{
start: '2026-10-11', end: '2026-10-20', showFrom: '2026-09-21',
en: { title: 'Devi Sharannavaratrulu', dates: 'Ashveeyuja Shuddha Padyami (11 Oct 2026) to Vijaya Dashami (20 Oct 2026)', message: 'Kumkuma Puja for Manikyamba Ammavaru will be performed on all ten days. If you would like to take part, contact me using the details below.' },
te: { title: 'దేవీ శరన్నవరాత్రులు', dates: 'ఆశ్వీయుజ శుద్ధ పాడ్యమి (11 అక్టోబర్ 2026) నుండి విజయదశమి (20 అక్టోబర్ 2026) వరకు', message: 'పది రోజులు మాణిక్యాంబ అమ్మవారికి కుంకుమ పూజ చేయబడును. ఆసక్తి గలవారు కింద ఇచ్చిన వివరాల ద్వారా సంప్రదించగలరు.' },
hi: { title: 'देवी शरन्नवरात्रि', dates: 'आश्वीयुज शुक्ल प्रतिपदा (11 अक्टूबर 2026) से विजयादशमी (20 अक्टूबर 2026) तक', message: 'दसों दिन माता माणिक्यांबा की कुमकुम पूजा संपन्न की जाएगी। इच्छुक भक्त नीचे दिए विवरण पर संपर्क करें।' }
},
{
start: '2026-11-08', end: '2026-11-08', showFrom: '2026-10-21',
en: { title: 'Deepavali', dates: 'Sunday, 8 Nov 2026', message: 'Deepavali Lakshmi Puja, at your home or online. If interested, contact me using the details below.' },
te: { title: 'దీపావళి', dates: '8 నవంబర్ 2026, ఆదివారం', message: 'దీపావళి లక్ష్మీ పూజ ఇంటి వద్ద గానీ, ఆన్‌లైన్‌లో గానీ చేయబడును. ఆసక్తి గలవారు కింద ఇచ్చిన వివరాల ద్వారా సంప్రదించగలరు.' },
hi: { title: 'दीपावली', dates: 'रविवार, 8 नवंबर 2026', message: 'दीपावली लक्ष्मी पूजा घर पर या ऑनलाइन संपन्न की जाएगी। इच्छुक भक्त नीचे दिए विवरण पर संपर्क करें।' }
}
];
export const FEST_UI = {
en: { kicker: 'Festival update', soon: (n) => (n === 1 ? 'Begins tomorrow' : 'Begins in ' + n + ' days'), today: 'Today', day: (k, n) => 'Day ' + k + ' of ' + n },
te: { kicker: 'పండుగ విశేషం', soon: (n) => (n === 1 ? 'రేపే ప్రారంభం' : 'ఇంకా ' + n + ' రోజుల్లో ప్రారంభం'), today: 'ఈరోజే', day: (k, n) => n + ' రోజుల్లో ' + k + 'వ రోజు' },
hi: { kicker: 'पर्व सूचना', soon: (n) => (n === 1 ? 'कल से आरंभ' : n + ' दिन में आरंभ'), today: 'आज', day: (k, n) => n + ' में से ' + k + 'वाँ दिन' }
};

export const CONTACT = {
  email: 'ramamurthy.medavarapu@gmail.com',
  phoneHref: 'tel:+919502221701',
  phoneLabel: '+91 95022 21701',
  whatsapp: 'https://wa.me/919502221701'
};

export const LANGS = [
  { code: 'te', label: 'తెలుగు', ariaLabel: 'Telugu' },
  { code: 'hi', label: 'हिंदी', ariaLabel: 'Hindi' },
  { code: 'en', label: 'EN', ariaLabel: 'English' }
];
