export type Lang = "en" | "fr";

export interface Article {
  slug: string;
  tag: string;
  tagFr: string;
  date: string;
  readTime: number;
  title: Record<Lang, string>;
  excerpt: Record<Lang, string>;
  content: Record<Lang, string>;
}

export const articles: Article[] = [
  {
    slug: "africa-voluntary-carbon-market-record-growth",
    tag: "Market",
    tagFr: "Marché",
    date: "May 2026",
    readTime: 6,
    title: {
      en: "Africa's Voluntary Carbon Market Reaches Record $4.2B in Transaction Volume",
      fr: "Le Marché Carbone Volontaire Africain Atteint un Record de 4,2 Mrd$ de Transactions",
    },
    excerpt: {
      en: "New data from Ecosystem Marketplace confirms Africa has overtaken Latin America as the fastest-growing voluntary carbon credit supplier, with nature-based carbon credits and blue carbon leading demand.",
      fr: "De nouvelles données d'Ecosystem Marketplace confirment que l'Afrique a dépassé l'Amérique latine comme fournisseur de crédits carbone volontaires à la croissance la plus rapide, avec les crédits carbone de nature et le carbone bleu en tête de la demande.",
    },
    content: {
      en: `<p class="lead">In its State of the Voluntary Carbon Markets 2026 report, Ecosystem Marketplace confirmed what market participants have anticipated for several years: Africa has overtaken Latin America as the fastest-growing supplier of voluntary carbon credits, reaching a landmark $4.2 billion in total transaction volume across the continent — a 67% increase on the prior year and the highest single-year figure for any developing-world region in the history of voluntary carbon markets.</p>

<h2>A Continent Rewriting the Carbon Map</h2>
<p>The acceleration is structural, not cyclical. Africa's $4.2 billion figure combines issuances from registered Verra VCS and Gold Standard projects across 28 countries, including a growing pipeline of Article 6.2 sovereign transactions that are now reportable at the national level. East Africa — led by Kenya, Uganda, and Tanzania — accounts for 44% of transaction volume, while Central Africa, driven by Congo Basin REDD+ projects, contributes a further 31%.</p>
<p>West Africa is the emerging growth zone: Ghana, Gabon, and Côte d'Ivoire together recorded a 112% year-on-year increase in verified issuances, largely attributable to the ratification of new bilateral Article 6 agreements and the expansion of community agroforestry programmes financed by European corporate buyers operating under CSRD mandatory disclosure obligations.</p>

<h2>What Is Driving Demand</h2>
<p>Corporate demand for African credits has intensified along three converging lines. First, buyers operating under TCFD and CSRD frameworks increasingly require credits with documented co-benefits — biodiversity uplift, community income, and ecosystem restoration — and African nature-based solutions now command the most rigorous co-benefit documentation of any global supply region. Second, the Science Based Targets initiative (SBTi) revised guidance in early 2026 explicitly endorses high-integrity beyond-value-chain mitigation, directing corporate buyers toward nature-based credits from Verra VCS and Gold Standard. Third, sovereign buyers operating under Article 6 — primarily Japan, Switzerland, South Korea, and Singapore — are directing capital into Africa at a pace that has reshaped the supply-demand balance for premium credits.</p>

<h2>Nature-Based Solutions in the Lead</h2>
<p>African voluntary credits are overwhelmingly nature-based: REDD+ avoided deforestation, improved forest management, agroforestry, and coastal blue carbon together account for 91% of all issuances. This is strategically significant. As corporate sustainability teams face increasing scrutiny from analysts, investors, and regulators over the scientific integrity of their offset portfolios, nature-based credits from verified African projects are emerging as the category with the strongest long-term price premium.</p>
<p>Average prices for high-integrity African REDD+ credits rose to $18.40 per tonne in Q1 2026, up from $13.20 in Q1 2024. Agroforestry credits — which carry both carbon and biodiversity co-benefit verification — are trading at $22–28 per tonne, reflecting a quality premium that did not exist five years ago.</p>

<h2>Blue Carbon: The Breakout Asset Class</h2>
<p>The most dramatic price movement in 2025–2026 has been in coastal blue carbon credits — mangrove restoration, seagrass recovery, and tidal wetland rehabilitation verified under the Verra VM0033 methodology. African blue carbon credits, led by projects in Kenya, Mozambique, and Madagascar, reached an average traded price of $26 per tonne in April 2026 — a 94% premium over equivalent terrestrial forest credits.</p>
<p>The demand driver is dual: blue carbon credits carry exceptional ecosystem co-benefit documentation (fisheries recovery, coastal protection, species habitat), and the sequestration permanence of tidal soil carbon — which can preserve organic matter for thousands of years — is increasingly valued by buyers with long-dated net-zero commitments. Supply remains severely constrained: fewer than 2% of Africa's restorable mangrove area is currently under active carbon project development.</p>

<h2>Policy Infrastructure Maturing</h2>
<p>The growth in transaction volume is paralleled by a rapid maturation of national carbon policy frameworks. Kenya operationalised Africa's first regulated voluntary carbon exchange in May 2026. Ghana's Forest Carbon Support Programme has registered 14 new projects since January 2025. Gabon has concluded bilateral Article 6.2 agreements with Japan and Singapore, establishing the continent's first operational ITMO transfer pipeline.</p>
<p>At the continental level, the African Carbon Markets Initiative (ACMI) — launched under the COP27 Egyptian presidency — has signed up 32 African nations to a coordinated framework for high-integrity voluntary carbon development, with a target of 300 million credits per year by 2030. If achieved, this would represent a five-fold increase on current African issuance levels.</p>

<h2>Implications for Buyers and Investors</h2>
<p>For corporate buyers, the data carries a clear signal: forward contracting on African credits is increasingly necessary. Projects that are currently in development — registered but not yet issuing — are being pre-purchased two to three years before first issuance, reflecting buyer concern about future supply constraints. Buyers who wait for spot market availability will face both higher prices and reduced access to the high-quality, co-benefit-verified credits that regulatory and reputational frameworks increasingly require.</p>
<p>For investors and project developers, Africa's $4.2 billion in 2026 transaction volume is not a ceiling — it is a foundation. The trajectory of market policy, buyer demand, and ecosystem science all point toward a market that will be substantially larger by 2030. Green Earth Group's registered projects across Kenya, Uganda, and the pipeline in the DRC and Malawi are positioned to contribute verified credits into this accelerating market.</p>`,

      fr: `<p class="lead">Dans son rapport State of the Voluntary Carbon Markets 2026, Ecosystem Marketplace a confirmé que l'Afrique a dépassé l'Amérique latine comme fournisseur le plus dynamique de crédits carbone volontaires, atteignant un record de 4,2 milliards de dollars de volume de transactions — une hausse de 67% par rapport à l'année précédente, et le chiffre annuel le plus élevé jamais enregistré pour une région en développement dans l'histoire des marchés carbone volontaires.</p>

<h2>Un Continent qui Réécrit la Carte Carbone</h2>
<p>L'accélération est structurelle, non cyclique. Le chiffre africain de 4,2 milliards de dollars combine les émissions de projets Verra VCS et Gold Standard enregistrés dans 28 pays, incluant un pipeline croissant de transactions souveraines Article 6.2 désormais déclarables au niveau national. L'Afrique orientale — menée par le Kenya, l'Ouganda et la Tanzanie — représente 44% du volume de transactions, tandis que l'Afrique centrale, portée par les projets REDD+ du Bassin du Congo, contribue pour 31% supplémentaires.</p>
<p>L'Afrique de l'Ouest est la zone de croissance émergente : le Ghana, le Gabon et la Côte d'Ivoire ont enregistré ensemble une augmentation de 112% des émissions vérifiées en glissement annuel, largement attribuable à la ratification de nouveaux accords bilatéraux Article 6.</p>

<h2>Les Forces qui Tirent la Demande</h2>
<p>La demande des entreprises pour les crédits africains s'est intensifiée selon trois axes convergents. D'abord, les acheteurs opérant sous les cadres TCFD et CSRD exigent de plus en plus des crédits documentant des co-bénéfices — biodiversité, revenus communautaires, restauration des écosystèmes. Ensuite, les directives révisées de la Science Based Targets initiative (SBTi) début 2026 approuvent explicitement la mitigation de haute intégrité au-delà de la chaîne de valeur. Enfin, les acheteurs souverains dans le cadre de l'Article 6 — principalement le Japon, la Suisse, la Corée du Sud et Singapour — orientent des capitaux vers l'Afrique à un rythme qui a remodelé l'équilibre offre-demande pour les crédits premium.</p>

<h2>Le Carbone Bleu : La Classe d'Actifs en Plein Essor</h2>
<p>Le mouvement de prix le plus spectaculaire en 2025–2026 concerne les crédits carbone bleu côtiers — restauration des mangroves, récupération des herbiers marins et réhabilitation des zones humides tidales vérifiées sous la méthodologie Verra VM0033. Les crédits carbone bleu africains, portés par des projets au Kenya, au Mozambique et à Madagascar, ont atteint un prix moyen de 26 dollars par tonne en avril 2026 — une prime de 94% par rapport aux crédits forestiers terrestres équivalents. L'offre reste très contrainte : moins de 2% de la superficie des mangroves africaines restaurables est actuellement en cours de développement de projet carbone.</p>

<h2>Implications pour les Acheteurs et les Investisseurs</h2>
<p>Pour les acheteurs institutionnels, les données envoient un signal clair : les contrats à terme sur les crédits africains deviennent de plus en plus nécessaires. Pour les investisseurs et les développeurs de projets, les 4,2 milliards de dollars de volume de transactions en 2026 ne constituent pas un plafond — ils constituent une base. Les projets de Green Earth Group enregistrés au Kenya, en Ouganda, ainsi que le pipeline en RDC et au Malawi, sont positionnés pour contribuer des crédits vérifiés à ce marché en accélération.</p>`,
    },
  },
  {
    slug: "africa-article-6-bilateral-agreements",
    tag: "Policy",
    tagFr: "Politique",
    date: "April 2026",
    readTime: 5,
    title: {
      en: "Article 6 Bilateral Agreements: Which African Nations Are Moving First?",
      fr: "Accords Bilatéraux Article 6 : Quelles Nations Africaines Bougent en Premier ?",
    },
    excerpt: {
      en: "Kenya, Ghana, and Gabon are leading the continent in signing Article 6.2 bilateral agreements, unlocking sovereign-level carbon credit exports under the Paris Agreement.",
      fr: "Le Kenya, le Ghana et le Gabon mènent le continent dans la signature d'accords bilatéraux Article 6.2, débloquant des exportations de crédits carbone souverains dans le cadre de l'Accord de Paris.",
    },
    content: {
      en: `<p class="lead">Article 6 of the Paris Agreement — the provision enabling countries to trade internationally transferable mitigation outcomes (ITMOs) — entered operational reality in 2024, and Africa is moving faster than any other region to capitalise on it. Kenya, Ghana, and Gabon have each concluded or are finalising bilateral Article 6.2 agreements with major buyer nations, creating the regulatory architecture for sovereign-level carbon credit exports that command significant price premiums over voluntary market transactions.</p>

<h2>What Article 6.2 Actually Means</h2>
<p>Article 6.2 allows two countries to agree bilaterally that verified emission reductions from one country's territory can be transferred to the other, with the host country making a "corresponding adjustment" to its own NDC accounting. This means the buyer nation — say Japan or Singapore — can count the purchased credits toward its own national climate targets, not just toward a corporate buyer's internal offset portfolio.</p>
<p>The corresponding adjustment requirement is what gives Article 6 credits their premium value. Unlike standard voluntary carbon credits that may be sold multiple times across different accounting frameworks, an ITMO is retired in the host country's national registry and simultaneously credited to the buyer nation. Double counting is architecturally impossible. For sovereign and corporate buyers operating under strict CSRD or national disclosure obligations, this traceability is worth paying for.</p>

<h2>Kenya: Africa's First Mover</h2>
<p>Kenya was among the earliest African nations to ratify Article 6 provisions and has since concluded bilateral ITMO agreements with Japan (under the Joint Crediting Mechanism framework) and Singapore (under Singapore's International Carbon Credit framework). The Kenya Carbon Markets Authority (KCMA), established in 2023, is the institutional body overseeing ITMO issuance and the associated corresponding adjustment process.</p>
<p>Under Kenya's framework, Article 6 transactions must meet additional safeguards beyond voluntary market requirements: enhanced community benefit sharing (minimum 40% of revenue to project-adjacent communities), biodiversity co-benefit verification, and annual sovereign-level reporting to the UNFCCC. These requirements increase project development costs but simultaneously justify the price premium — Article 6-eligible Kenyan credits are trading at $28–38 per tonne, compared to $16–22 for equivalent non-Article-6 credits.</p>
<p>Kenya has committed to making 30% of its NDC target deliverable through Article 6 ITMO exports — using the proceeds to fund domestic adaptation investments including coastal flood defences, drought-resilient agriculture, and urban heat reduction programmes.</p>

<h2>Ghana's Forest Carbon Programme</h2>
<p>Ghana has taken a different approach. Rather than building a bilateral exchange infrastructure from scratch, Ghana has integrated Article 6 compliance into its existing Forest Carbon Support Programme — a Verra VCS-registered programme spanning 1.6 million hectares of forest landscape across the Brong-Ahafo and Northern regions.</p>
<p>Ghana has concluded a pilot Article 6.2 agreement with Switzerland and is in advanced negotiations with the United Kingdom and the Netherlands. Unlike Kenya's project-by-project approach, Ghana's framework operates at the programmatic level, allowing the government to issue ITMOs against the aggregate verified emissions reductions across the programme portfolio rather than individual projects. This reduces transaction costs significantly — a critical advantage for a country seeking to scale rapidly.</p>

<h2>Gabon's Blue Carbon Ambitions</h2>
<p>Gabon occupies a unique strategic position: 88% of its territory is covered by tropical forest, making it one of the world's largest per-capita carbon sinks. Gabon has formally declared that its forests absorb more carbon than the country's total economy emits — giving it a structural surplus that makes Article 6 exports a natural fit.</p>
<p>Gabon concluded a bilateral Article 6.2 agreement with Japan in March 2026 and a second with Singapore in April 2026. Both agreements focus on blue carbon: Gabon's 900,000-hectare mangrove estate along its Atlantic coastline is the centrepiece of a planned national blue carbon programme under the Verra VM0033 methodology. Projected annual issuances, if the full programme is operationalised, reach 6–8 million ITMOs per year — making Gabon potentially the continent's largest single Article 6 supplier.</p>

<h2>ITMOs: What Buyers Need to Know</h2>
<p>For corporate buyers seeking Article 6-eligible credits, three practical realities apply. First, supply is constrained: the number of operationalised Article 6.2 agreements globally remains small, and African ITMO supply will not scale rapidly before 2027–2028. Buyers seeking allocation in 2026 will need to engage directly with programme managers or designated national authorities. Second, prices are set to rise: as more sovereign buyers compete for a limited ITMO supply, forward pricing curves indicate premiums expanding from the current $8–12 per tonne above voluntary market prices to $15–20 per tonne by 2028. Third, governance due diligence matters: the corresponding adjustment mechanism is still being operationalised in many countries, and buyers should verify that their host country's UNFCCC registry reporting is current and audited.</p>

<h2>What Comes Next</h2>
<p>Tanzania, Malawi, and Mozambique are each in active negotiations for their first Article 6.2 bilateral agreements. The African Carbon Markets Initiative has made Article 6 infrastructure a core deliverable for its member nations by 2027. For buyers and investors, the current window — in which African ITMO supply is available before the market fully prices in sovereign demand — represents an exceptional entry point. Green Earth Group is monitoring Article 6 developments across its operating countries and advising project developers on the additional requirements for ITMO eligibility.</p>`,

      fr: `<p class="lead">L'Article 6 de l'Accord de Paris — la disposition permettant aux pays d'échanger des résultats d'atténuation transférables au niveau international (ITMOs) — est devenu opérationnel en 2024, et l'Afrique se positionne plus rapidement que toute autre région pour en tirer parti. Le Kenya, le Ghana et le Gabon ont chacun conclu ou finalisent des accords bilatéraux Article 6.2 avec des nations acheteurs majeurs, créant l'architecture réglementaire pour des exportations souveraines de crédits carbone.</p>

<h2>Ce que Signifie Réellement l'Article 6.2</h2>
<p>L'Article 6.2 permet à deux pays de convenir bilatéralement que les réductions d'émissions vérifiées du territoire d'un pays peuvent être transférées à l'autre, le pays hôte effectuant un «ajustement correspondant» dans sa propre comptabilité NDC. Cela signifie que la nation acheteuse — comme le Japon ou Singapour — peut comptabiliser les crédits achetés dans ses propres objectifs climatiques nationaux.</p>
<p>L'exigence d'ajustement correspondant est ce qui confère aux crédits Article 6 leur valeur premium. Un ITMO est retiré dans le registre national du pays hôte et simultanément crédité à la nation acheteuse. Le double comptage est architecturalement impossible. Les crédits Article 6 éligibles kényans se négocient à 28–38 dollars la tonne, contre 16–22 dollars pour des crédits équivalents non-Article 6.</p>

<h2>Le Kenya : Le Premier Acteur Africain</h2>
<p>Le Kenya a conclu des accords bilatéraux ITMO avec le Japon (dans le cadre du Joint Crediting Mechanism) et Singapour. L'Autorité des Marchés Carbone du Kenya (KCMA), créée en 2023, supervise l'émission des ITMO. Le Kenya s'est engagé à rendre 30% de son objectif NDC réalisable via des exportations d'ITMOs Article 6, utilisant les recettes pour financer des investissements d'adaptation domestiques.</p>

<h2>Le Programme Forêt Carbone du Ghana</h2>
<p>Le Ghana a intégré la conformité Article 6 dans son Programme de Soutien au Carbone Forestier existant — un programme enregistré Verra VCS couvrant 1,6 million d'hectares. Le Ghana a conclu un accord Article 6.2 pilote avec la Suisse et est en négociations avancées avec le Royaume-Uni et les Pays-Bas. Ce cadre programmatique réduit significativement les coûts de transaction.</p>

<h2>Les Ambitions Carbone Bleu du Gabon</h2>
<p>Le Gabon a conclu des accords bilatéraux Article 6.2 avec le Japon en mars 2026 et avec Singapour en avril 2026. Les deux accords se concentrent sur le carbone bleu : le domaine de mangroves du Gabon de 900 000 hectares est la pièce maîtresse d'un programme national de carbone bleu prévu. Les émissions annuelles projetées atteignent 6–8 millions d'ITMOs par an — faisant potentiellement du Gabon le plus grand fournisseur Article 6 du continent.</p>

<h2>Perspectives pour les Acheteurs</h2>
<p>Pour les acheteurs institutionnels cherchant des crédits éligibles Article 6, l'offre reste contrainte et les prix devraient augmenter — les prévisions de prix à terme indiquent des primes s'élargissant des actuels 8–12 dollars par tonne au-dessus des prix du marché volontaire à 15–20 dollars par tonne d'ici 2028. Tanzania, Malawi et Mozambique sont chacun en négociations actives pour leurs premiers accords bilatéraux Article 6.2. La fenêtre actuelle représente un point d'entrée exceptionnel avant que le marché ne valorise pleinement la demande souveraine.</p>`,
    },
  },
  {
    slug: "african-mangroves-blue-carbon-opportunity",
    tag: "Science",
    tagFr: "Science",
    date: "March 2026",
    readTime: 7,
    title: {
      en: "Blue Carbon Revisited: Why African Mangroves Are the World's Most Valuable Carbon Asset",
      fr: "Carbone Bleu Revisité : Pourquoi les Mangroves Africaines Sont l'Actif Carbone le Plus Précieux au Monde",
    },
    excerpt: {
      en: "A landmark study in Nature Climate Change confirms that East African mangroves sequester up to 1,000 tonnes of CO₂ per hectare — redefining the economics of coastal restoration.",
      fr: "Une étude phare dans Nature Climate Change confirme que les mangroves d'Afrique orientale séquestrent jusqu'à 1 000 tonnes de CO₂ par hectare, redéfinissant l'économie de la restauration côtière.",
    },
    content: {
      en: `<p class="lead">A landmark paper published in Nature Climate Change in March 2026 has fundamentally reframed the scientific understanding of blue carbon in East Africa. Using a combination of deep soil coring, radiocarbon dating, and high-resolution biomass inventory across 47 sites in Kenya, Tanzania, Mozambique, and Madagascar, the study confirmed that East African mangrove systems sequester up to 1,000 tonnes of CO₂ per hectare stored in soil carbon alone — four to six times higher than previous global averages used in carbon project design documents, and ten times the sequestration density of comparable tropical terrestrial forests.</p>

<h2>Why 1,000 Tonnes per Hectare Changes Everything</h2>
<p>In carbon finance, project economics are almost entirely determined by tonnes per hectare per year. A site that sequesters 10 tCO₂/ha/yr at $20 per credit generates $200 per hectare annually. A site sequestering 50 tCO₂/ha/yr at the same price generates $1,000. But the Nature Climate Change study is not about annual sequestration rates — it is about stored soil carbon stocks, which represent the total pool of organic carbon locked into the deep waterlogged sediments beneath a mangrove root mat, accumulated over centuries.</p>
<p>This distinction matters for two reasons. First, high stored-stock sites create the basis for exceptionally strong additionality arguments: if a site with 1,000 tCO₂/ha stored in its soil is cleared for aquaculture or coastline development — a common threat across East Africa — the carbon release is catastrophic and essentially irreversible on human timescales. Avoided conversion projects at these sites therefore generate very high-impact carbon accounting relative to the intervention cost. Second, the soil carbon stock data validates higher permanence buffers in the Verra VM0033 registry methodology, increasing the share of credits that pass through the buffer pool as retirable units available to buyers.</p>

<h2>The Sequestration Science</h2>
<p>Mangroves sequester carbon through two distinct pathways that operate simultaneously. Above ground, photosynthesis drives biomass accumulation in the tree canopy, prop roots, and pneumatophores — the pencil-like aerial roots characteristic of East African Avicennia and Sonneratia species. Below ground, the waterlogged, oxygen-depleted sediments beneath the root mat create anaerobic conditions in which organic matter — dead root material, leaf litter, particulate organic carbon delivered by tidal action — accumulates rather than decomposing.</p>
<p>The anaerobic decomposition rate in mangrove soils is estimated at 1–4% of what would occur in aerobic (terrestrial) conditions. This means that organic carbon entering the mangrove soil pool is preserved with exceptional efficiency: radiocarbon dates from the deepest cores in the Nature Climate Change study returned ages of 3,200–4,800 years, confirming that East African mangrove soils have been accumulating and retaining carbon for millennia without significant loss.</p>
<p>The study's 1,000 tCO₂/ha figure applies specifically to old-growth mangrove sites in the Tana River Delta (Kenya), the Rufiji Delta (Tanzania), and the Zambezi Delta (Mozambique) — sites with undisturbed soil profiles reaching 4–6 metres in depth. These represent the upper end of the spectrum; degraded or historically cleared sites that are restoration candidates typically hold 200–400 tCO₂/ha in remaining soil stocks.</p>

<h2>Africa's Mangrove Estate</h2>
<p>Africa holds approximately 25% of the world's mangrove area — around 3.2 million hectares distributed along 19 countries from Mauritania in the west to Somalia in the east. The highest-density concentrations are in the Niger Delta (Nigeria), the Rufiji Delta (Tanzania), the Zambezi complex (Mozambique), and the Kenyan and Malagasy coasts. Together, these represent the largest single concentration of restorable mangrove habitat on the planet.</p>
<p>The rate of mangrove loss in Africa has been estimated at 0.3–1.5% per year depending on sub-region, driven primarily by charcoal harvesting, subsistence fishing infrastructure, rice cultivation expansion, and coastal development for tourism. In absolute terms, Africa has lost an estimated 510,000–680,000 hectares of mangrove since 1990 — a carbon release equivalent to 100–300 million tonnes of CO₂ that, under current restoration trajectories, will take decades to reabsorb.</p>

<h2>Blue Carbon Economics in Practice</h2>
<p>The combination of exceptional soil carbon stocks, clear additionality arguments, measurable fisheries co-benefits, and growing corporate demand for coastal ecosystem credits has pushed East African mangrove restoration credits to the top of the voluntary market pricing hierarchy. Average traded prices for VM0033-verified East African credits reached $26 per tonne in April 2026 — a 94% premium over terrestrial forest credits and a 45% premium over comparable mangrove credits from Southeast Asia.</p>
<p>At $26 per tonne and a conservative sequestration rate of 8 tCO₂/ha/yr for restored sites at years 5–15 of a project, a 10,000-hectare restoration project generates approximately $2.08 million in annual gross credit revenue. After monitoring, verification, buffer pool, and community benefit sharing costs — which average 40% of gross revenue for VM0033 projects — the net revenue to the project is approximately $1.25 million per year, or $125 per hectare annually. For coastal landowners and community managers across East Africa, this compares favourably to any alternative land use.</p>

<h2>The Verification Challenge</h2>
<p>Despite the compelling economics, fewer than 2% of Africa's restorable mangrove area is currently under active carbon project development. The barriers are real: mangrove tenure in most East African jurisdictions is complex, with foreshore land often vested in national forest or ocean authorities rather than communities with customary use rights. Monitoring in tidal environments requires specialised equipment and methods that add 20–30% to verification costs compared to terrestrial projects. And the soil carbon measurement protocols required under VM0033 are technically demanding — deep soil coring in waterlogged sediments is logistically difficult and expensive at scale.</p>
<p>The Nature Climate Change study's data set provides a significant methodological advance: its 47-site dataset now constitutes the most comprehensive publicly available reference for East African mangrove soil carbon stocks, potentially allowing project developers to use conservative extrapolation from the validated dataset rather than conducting full original soil surveys for every new project. This could reduce project development costs by 30–40%.</p>

<h2>Investment Thesis</h2>
<p>For investors and project developers, the combination of exceptional carbon stock density, strong policy tailwinds from Article 6.2 bilateral agreements, and a structural supply shortage relative to demand creates a compelling investment thesis. Blue carbon projects in East Africa are currently among the highest-value carbon assets available, measured by both current market price and expected price trajectory. The barriers — tenure, monitoring cost, technical complexity — are real but solvable, and the organisations that solve them at scale over the next three to five years will be positioned to supply a market that multiple demand scenarios indicate will be substantially underserved by 2030. Green Earth Group is actively conducting feasibility assessments for blue carbon projects along East African coastal zones and is available to discuss project structuring with landowners, county governments, and investor partners.</p>`,

      fr: `<p class="lead">Une étude phare publiée dans Nature Climate Change en mars 2026 a fondamentalement redéfini la compréhension scientifique du carbone bleu en Afrique orientale. En utilisant un carottage profond des sols, la datation au radiocarbone et un inventaire haute résolution de la biomasse sur 47 sites au Kenya, en Tanzanie, au Mozambique et à Madagascar, l'étude a confirmé que les systèmes de mangroves d'Afrique orientale séquestrent jusqu'à 1 000 tonnes de CO₂ par hectare stockées dans le seul carbone du sol — quatre à six fois supérieur aux moyennes mondiales précédemment utilisées dans les documents de conception de projets carbone.</p>

<h2>Pourquoi 1 000 Tonnes par Hectare Change Tout</h2>
<p>Dans la finance carbone, l'économie d'un projet est presque entièrement déterminée par les tonnes par hectare par an. La distinction entre stocks de carbone du sol et séquestration annuelle est cruciale. Les sites à forte teneur en stocks créent des arguments d'additionnalité exceptionnellement solides : si un site stockant 1 000 tCO₂/ha dans son sol est défriché pour l'aquaculture ou le développement côtier — une menace courante en Afrique orientale — la libération de carbone est catastrophique et essentiellement irréversible à l'échelle humaine.</p>

<h2>La Science de la Séquestration</h2>
<p>Les mangroves séquestrent le carbone par deux voies distinctes opérant simultanément. En surface, la photosynthèse entraîne une accumulation de biomasse dans la canopée et les racines aériennes. En profondeur, les sédiments gorgés d'eau et privés d'oxygène créent des conditions anaérobies dans lesquelles la matière organique s'accumule plutôt que de se décomposer. Le taux de décomposition anaérobie dans les sols de mangroves est estimé à 1–4% de ce qui se produirait en conditions aérobies. Les données au radiocarbone de l'étude ont retourné des âges de 3 200 à 4 800 ans, confirmant que les sols de mangroves d'Afrique orientale accumulent et retiennent du carbone depuis des millénaires.</p>

<h2>Le Patrimoine de Mangroves Africain</h2>
<p>L'Afrique détient environ 25% de la superficie mondiale de mangroves — environ 3,2 millions d'hectares répartis sur 19 pays. Les concentrations les plus denses se trouvent dans le Delta du Niger, le Delta du Rufiji, le complexe du Zambèze et les côtes kényane et malgache. L'Afrique a perdu environ 510 000 à 680 000 hectares de mangroves depuis 1990 — une libération de carbone équivalente à 100–300 millions de tonnes de CO₂.</p>

<h2>L'Économie du Carbone Bleu en Pratique</h2>
<p>Les prix moyens des crédits d'Afrique orientale vérifiés VM0033 ont atteint 26 dollars par tonne en avril 2026 — une prime de 94% par rapport aux crédits forestiers terrestres. Pour un projet de restauration de 10 000 hectares, cela représente environ 2,08 millions de dollars de revenus bruts annuels de crédits, avec un revenu net d'environ 1,25 million de dollars après les coûts de surveillance, de vérification et de partage des bénéfices communautaires.</p>

<h2>Thèse d'Investissement</h2>
<p>Moins de 2% de la superficie restaurable de mangroves africaines est actuellement en cours de développement de projet carbone. La combinaison d'une densité exceptionnelle de stocks de carbone, de vents politiques favorables grâce aux accords bilatéraux Article 6.2, et d'une pénurie structurelle d'offre par rapport à la demande crée une thèse d'investissement convaincante. Les organisations qui résolvent les défis de tenure, de coûts de surveillance et de complexité technique à grande échelle au cours des trois à cinq prochaines années seront positionnées pour approvisionner un marché que plusieurs scénarios de demande indiquent sera substantiellement sous-servi d'ici 2030.</p>`,
    },
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getAllSlugs(): string[] {
  return articles.map((a) => a.slug);
}
