export type PostLang = { title: string; excerpt: string; content: string };
export type Post = { slug: string; date: string; lang: { [key: string]: PostLang } };

export const posts: Post[] = [
  {
    slug: "africa-carbon-markets-overview",
    date: "2025-08-01",
    lang: {
      en: {
        title: "Africa's Carbon Markets: A Continental Overview",
        excerpt: "Africa hosts some of the world's largest voluntary carbon projects. From Congo Basin forests to East African cookstoves, the continent offers unparalleled carbon credit opportunities.",
        content: `<p>Africa's voluntary carbon market has grown dramatically over the past decade, driven by high-quality nature-based projects that offer both climate impact and co-benefits for local communities. The continent is now home to some of the world's most significant forest carbon projects, with the Democratic Republic of Congo's rainforests, Kenya's savanna ecosystems, and Uganda's mountain gorilla habitats all contributing to the global carbon credit supply.</p>
<p>The African Carbon Markets Initiative (ACMI), launched at COP27, has set an ambitious target: 300 million carbon credits annually by 2030, unlocking $6 billion in revenue for African nations and sequestering up to 1.5 billion tonnes of CO2 per year. This represents a transformational opportunity for the continent's economic development while addressing climate change.</p>
<p>Nature-based solutions dominate African carbon markets. Avoided deforestation (REDD+), improved forest management, and blue carbon (mangroves, seagrasses) make up the majority of African credits. Cookstove projects, particularly in East and West Africa, add significant volume with high social co-benefits.</p>
<p>For buyers seeking high-quality carbon credits with strong additionality and biodiversity impact, Africa remains the premier destination globally. Project pipelines continue to grow across all 54 nations.</p>`,
      },
      fr: {
        title: "Les Marchés Carbone Africains: Vue d'Ensemble Continentale",
        excerpt: "L'Afrique abrite certains des plus grands projets volontaires de carbone au monde. Des forêts du Bassin du Congo aux cuisinières d'Afrique de l'Est, le continent offre des opportunités de crédits carbone incomparables.",
        content: `<p>Le marché volontaire du carbone africain a connu une croissance spectaculaire au cours de la dernière décennie, porté par des projets de haute qualité basés sur la nature qui offrent à la fois un impact climatique et des co-bénéfices pour les communautés locales. Le continent abrite désormais certains des projets forestiers carbone les plus importants au monde.</p>
<p>L'Initiative Africaine des Marchés Carbone (ACMI), lancée lors de la COP27, s'est fixé un objectif ambitieux : 300 millions de crédits carbone annuellement d'ici 2030, générant 6 milliards de dollars de revenus pour les nations africaines et séquestrant jusqu'à 1,5 milliard de tonnes de CO2 par an.</p>
<p>Les solutions basées sur la nature dominent les marchés carbone africains. La déforestation évitée (REDD+), la gestion améliorée des forêts et le carbone bleu (mangroves, herbiers marins) constituent la majorité des crédits africains.</p>
<p>Pour les acheteurs recherchant des crédits carbone de haute qualité avec une forte additionnalité et un impact sur la biodiversité, l'Afrique reste la destination de premier choix à l'échelle mondiale.</p>`,
      },
    },
  },
  {
    slug: "nature-based-solutions-africa",
    date: "2025-07-15",
    lang: {
      en: {
        title: "Nature-Based Solutions in Africa: From Savanna to Mangroves",
        excerpt: "Africa's diverse ecosystems — savannas, rainforests, mangroves, and wetlands — offer a vast pipeline of nature-based carbon solutions for global buyers.",
        content: `<p>Africa's ecological diversity is unmatched. From the vast savannas of East Africa to the equatorial rainforests of Central Africa, from the mangrove-lined coasts of West Africa to the wetlands of the Sahel, the continent offers an extraordinary range of ecosystems for nature-based carbon solutions (NbS).</p>
<p>Mangrove carbon has emerged as one of the most valuable NbS categories. African mangroves — found in Senegal, Guinea-Bissau, Madagascar, Kenya, and Mozambique — sequester carbon at rates 5-10 times higher per hectare than terrestrial forests. The conservation and restoration of these coastal ecosystems can generate premium "blue carbon" credits that command prices of $20-50 per tonne.</p>
<p>Savanna carbon projects, predominantly in Southern and East Africa, have developed innovative accounting methodologies. Fire management programs in Namibia, Zimbabwe, and Tanzania reduce methane and nitrous oxide emissions from savanna fires while improving biodiversity. These projects generate credits under the Australian Carbon Credit Unit (ACCU) or voluntary standards.</p>
<p>The pipeline for African NbS credits is substantial and growing. ACMI estimates 1.5 billion additional tonnes of annual sequestration potential from African nature-based projects — representing a multi-decade investment opportunity for climate-focused buyers.</p>`,
      },
      fr: {
        title: "Solutions Basées sur la Nature en Afrique: De la Savane aux Mangroves",
        excerpt: "Les écosystèmes diversifiés d'Afrique — savanes, forêts tropicales, mangroves et zones humides — offrent un vaste pipeline de solutions carbone basées sur la nature.",
        content: `<p>La diversité écologique de l'Afrique est incomparable. Des vastes savanes d'Afrique de l'Est aux forêts équatoriales d'Afrique centrale, des côtes bordées de mangroves d'Afrique de l'Ouest aux zones humides du Sahel, le continent offre une gamme extraordinaire d'écosystèmes pour les solutions carbone basées sur la nature (SbN).</p>
<p>Le carbone des mangroves est devenu l'une des catégories SbN les plus précieuses. Les mangroves africaines — présentes au Sénégal, en Guinée-Bissau, à Madagascar, au Kenya et au Mozambique — séquestrent le carbone à des taux 5 à 10 fois supérieurs par hectare aux forêts terrestres.</p>
<p>Les projets carbone de savane, principalement en Afrique australe et orientale, ont développé des méthodologies comptables innovantes. Les programmes de gestion des feux en Namibie, au Zimbabwe et en Tanzanie réduisent les émissions de méthane et d'oxyde nitreux.</p>
<p>Le pipeline de crédits SbN africains est substantiel et croissant. L'ACMI estime un potentiel de séquestration supplémentaire de 1,5 milliard de tonnes par an — représentant une opportunité d'investissement pluridécennale.</p>`,
      },
    },
  },
  {
    slug: "article-6-africa-leaders",
    date: "2025-06-20",
    lang: {
      en: {
        title: "Article 6 in Africa: Which Countries Are Leading?",
        excerpt: "Several African nations have moved quickly to establish Article 6 frameworks. Here's a ranking of the most advanced jurisdictions for internationally transferred mitigation outcomes.",
        content: `<p>As Article 6 of the Paris Agreement moves from framework to implementation, African nations are positioning themselves to capture the premium that internationally transferred mitigation outcomes (ITMOs) command over regular voluntary credits.</p>
<p>Kenya is widely considered the most advanced. Its bilateral agreement with Switzerland — one of the first operational Article 6.2 agreements globally — provides a template for other African nations. Kenya's Ministry of Environment has streamlined its Letter of Authorization process, making it relatively accessible for project developers.</p>
<p>Ghana has been equally proactive, signing framework agreements with Switzerland and Singapore. Ghana's Article 6 unit within the Environmental Protection Agency has published clear guidelines on the host-country authorization process, providing regulatory certainty that buyers require.</p>
<p>Rwanda and Malawi have signed intent agreements but are still building out implementation frameworks. Senegal and Mozambique are emerging as significant players, particularly for blue carbon and mangrove restoration credits under Article 6.4 (the centralized UNFCCC mechanism).</p>
<p>The race to establish Article 6 credibility is important: projects with host-country authorization can charge a significant premium, typically $15-40 per tonne versus $5-15 for comparable voluntary credits.</p>`,
      },
      fr: {
        title: "L'Article 6 en Afrique: Quels Pays sont en Tête?",
        excerpt: "Plusieurs nations africaines ont rapidement mis en place des cadres d'Article 6. Voici un classement des juridictions les plus avancées pour les résultats d'atténuation transférés internationalement.",
        content: `<p>Alors que l'Article 6 de l'Accord de Paris passe du cadre à la mise en œuvre, les nations africaines se positionnent pour capter la prime que commandent les résultats d'atténuation transférés internationalement (ITMOs) par rapport aux crédits volontaires ordinaires.</p>
<p>Le Kenya est généralement considéré comme le plus avancé. Son accord bilatéral avec la Suisse — l'un des premiers accords opérationnels au monde en vertu de l'Article 6.2 — fournit un modèle pour les autres nations africaines.</p>
<p>Le Ghana a été tout aussi proactif, signant des accords-cadres avec la Suisse et Singapour. Le Rwanda et le Malawi ont signé des accords d'intention mais construisent encore leurs cadres de mise en œuvre.</p>
<p>La course pour établir la crédibilité de l'Article 6 est importante : les projets avec l'autorisation du pays hôte peuvent facturer une prime significative, généralement 15 à 40 dollars par tonne contre 5 à 15 dollars pour des crédits volontaires comparables.</p>`,
      },
    },
  },
  {
    slug: "article-6-east-central-africa",
    date: "2026-08-02",
    lang: {
      en: {
        title: "Article 6 in Africa: How Kenya, Uganda and Cameroon Are Building the Future",
        excerpt: "Three of Africa's most active carbon market countries are charting different paths under Article 6. A comparative guide for buyers, investors and policymakers.",
        content: `<p>Three of Africa's most active carbon market nations — Kenya, Uganda, and Cameroon — are each charting distinct paths under Article 6 of the Paris Agreement. For buyers, investors, and policymakers looking at the East and Central African carbon market as a whole, understanding how these frameworks differ is essential for sourcing strategy, portfolio construction, and regulatory risk management.</p>

<h2>Kenya: The Established Leader</h2>
<p>Kenya is widely recognized as Africa's most advanced Article 6 jurisdiction. Its bilateral agreement with Switzerland, signed in 2021, was among the world's first operational Article 6.2 arrangements, allowing Switzerland to count emission reductions generated in Kenya toward its own nationally determined contribution (NDC). A subsequent agreement with Sweden further expanded Kenya's ITMO partnerships, and negotiations with Japan and other European buyers are ongoing. Kenya's Carbon Markets Bill — currently in parliament — would formalize the domestic legal infrastructure for carbon credit issuance and Article 6 authorization. With over 40 VCS-registered projects already operating, Kenya has both the supply pipeline and the regulatory foundations to become the region's largest Article 6 credit exporter over the next decade.</p>
<p>Two important July 2026 developments shape Kenya's near-term picture. The Article 6.4 Supervisory Body adopted a new methodology for grid-connected renewable electricity — wind and solar can now earn PACM credits, with the prior restriction to small island states removed. This is positive for Kenya's solar and wind sector. Conversely, the cookstoves methodology was sent back for revision, a setback for Kenyan developers in that sector who had been waiting on it. Nigeria finalized its full Article 6 framework at end-2025, with at least three Corsia-tagged cookstoves projects now operational — setting a regional benchmark that illustrates what Kenya's pipeline could look like post-authorization.</p>

<h2>Uganda: High-Quality Pipeline, Maturing Framework</h2>
<p>Uganda combines one of the region's most biodiverse project landscapes with a government strongly committed to carbon finance as a development tool. The Bwindi Impenetrable Forest — a UNESCO World Heritage site sheltering half the world's mountain gorillas — and the vast Albertine Rift wetlands anchor Uganda's carbon project pipeline. The Uganda Carbon Bureau provides regulatory oversight, and the country's Redd+ Investment Programme represents a structured national approach to forest carbon.</p>
<p>Uganda has not yet signed ITMO agreements with buyer countries, placing it approximately 12–24 months behind Kenya in Article 6 readiness. The regulatory trajectory is encouraging, and Uganda's superior biodiversity credentials mean its credits are likely to attract significant premium pricing once Article 6 authorization is in place. Buyers who engage now can often negotiate more favorable project structures than they could post-authorization.</p>

<h2>Cameroon: The Congo Basin Anchor</h2>
<p>Cameroon's Article 6 positioning is anchored in its role within the Congo Basin Forest Partnership — the world's second-largest tropical forest region. With 22 million hectares of moist tropical forest, Cameroon has the largest raw carbon potential of the three countries. The government's REDD+ national strategy is explicitly aligned with Article 6 mechanisms, and bilateral negotiations with France and EU-based buyers are ongoing. Cameroon's National Carbon Registry provides the administrative infrastructure for credit issuance, but Article 6 ITMO transfers are not yet operationalized.</p>

<h2>The Corresponding Adjustment Fee: A Critical Policy Decision</h2>
<p>A warning from outside the region: at a recent climate investment forum, Bhutan presented 36 Article 6 projects totalling 5.08 million tCO2e per year, but developers pushed back sharply on Bhutan's proposed corresponding adjustment (CA) fee of $5–25/tCO2e, arguing it priced projects out of the market. Bhutan acknowledged it may need to revise. Kenya, Uganda, and Cameroon all face the same calibration challenge: the CA fee each country ultimately sets will determine whether its Article 6 pipeline becomes commercially viable. This is the single most important policy variable for each jurisdiction to get right.</p>

<h2>Institutional Confidence is Rising</h2>
<p>A significant signal for the entire region: specialist carbon insurance firm Kita received investment from Tokio Marine Group (Japan) in mid-2026. Kita explicitly cited "several African countries bolstering their carbon credit frameworks in the past 12 months" as the trigger — and is now underwriting political risk for Article 6 and Corsia deals across Africa. When major Japanese insurers start pricing African carbon political risk at scale, it marks a genuine inflection point for institutional confidence in the region.</p>

<h2>What Buyers and Investors Should Take Away</h2>
<p>The three countries complement each other well. Kenya provides near-term Article 6 supply with regulatory clarity. Uganda offers premium biodiversity credits with a clear authorization trajectory. Cameroon provides the scale for buyers who need large forward volumes from one of the world's most significant forest carbon reserves. A diversified portfolio across all three markets reduces regulatory risk, provides vintage spread, and aligns with the growing buyer preference for regional biodiversity narratives rather than single-project exposure.</p>
<p><em>Related reading: For Kenya-specific analysis, visit co2.ke. For the Uganda perspective, visit co2.ug. For Cameroon and Congo Basin detail, visit co2.cm.</em></p>`,
      },
      fr: {
        title: "L'Article 6 en Afrique: Kenya, Ouganda et Cameroun Ouvrent la Voie",
        excerpt: "Trois des marchés carbone les plus actifs d'Afrique empruntent des voies différentes sous l'Article 6. Guide comparatif pour acheteurs, investisseurs et décideurs.",
        content: `<p>Trois des pays africains les plus actifs sur les marchés carbone — le Kenya, l'Ouganda et le Cameroun — empruntent chacun des voies distinctes dans le cadre de l'Article 6 de l'Accord de Paris. Pour les acheteurs, les investisseurs et les décideurs qui s'intéressent au marché carbone d'Afrique de l'Est et centrale dans son ensemble, comprendre ces différences est essentiel pour la stratégie d'approvisionnement, la construction de portefeuille et la gestion du risque réglementaire.</p>

<h2>Le Kenya: Le Leader Établi</h2>
<p>Le Kenya est largement reconnu comme la juridiction africaine la plus avancée en matière d'Article 6. Son accord bilatéral avec la Suisse, signé en 2021, figure parmi les premiers arrangements opérationnels au monde au titre de l'Article 6.2. Un accord similaire avec la Suède a élargi les partenariats ITMO du Kenya, et des négociations avec le Japon et d'autres acheteurs européens sont en cours. Le projet de loi kényan sur les marchés carbone formaliserait l'infrastructure juridique nationale pour l'émission de crédits et l'autorisation dans le cadre de l'Article 6. Avec plus de 40 projets enregistrés sous VCS, le Kenya a à la fois le pipeline d'approvisionnement et les bases réglementaires pour devenir le principal exportateur régional de crédits Article 6.</p>
<p>Deux décisions importantes de juillet 2026 façonnent le paysage à court terme. Le Comité de Supervision de l'Article 6.4 a adopté une nouvelle méthodologie pour l'électricité renouvelable connectée au réseau — l'éolien et le solaire peuvent désormais générer des crédits PACM, la restriction antérieure aux petits États insulaires ayant été levée. En revanche, la méthodologie pour les foyers améliorés a été renvoyée pour révision, une déception pour les développeurs kényans du secteur. Le Nigéria, de son côté, a finalisé son cadre carbone Article 6 complet fin 2025, avec au moins trois projets de foyers taggués Corsia désormais opérationnels.</p>

<h2>L'Ouganda: Pipeline de Haute Qualité, Cadre en Maturation</h2>
<p>L'Ouganda combine l'un des paysages de projets les plus riches en biodiversité de la région avec un gouvernement fortement engagé dans la finance carbone. La Forêt Impénétrable de Bwindi — site du Patrimoine Mondial de l'UNESCO abritant la moitié des gorilles de montagne du monde — et les vastes zones humides du Rift Albertin ancrent le pipeline de projets carbone ougandais. L'Ouganda n'a pas encore signé d'accords ITMO avec des pays acheteurs, le plaçant environ 12 à 24 mois derrière le Kenya. Cependant, les acheteurs qui s'engagent maintenant peuvent souvent négocier des structures de projet plus favorables qu'après l'autorisation formelle.</p>

<h2>Le Cameroun: L'Ancre du Bassin du Congo</h2>
<p>Le positionnement du Cameroun dans le cadre de l'Article 6 est ancré dans son rôle au sein du Partenariat pour les Forêts du Bassin du Congo. Avec 22 millions d'hectares de forêts tropicales humides, le Cameroun dispose du plus grand potentiel carbone brut des trois pays. Sa stratégie nationale REDD+ est explicitement alignée sur les mécanismes de l'Article 6, et des négociations bilatérales avec la France et des acheteurs basés dans l'UE sont en cours. Les transferts ITMO ne sont pas encore pleinement opérationnels, mais le cadre avance rapidement.</p>

<h2>La Taxe d'Ajustement Correspondant: Un Paramètre Critique</h2>
<p>Un enseignement venu d'ailleurs: lors d'un récent forum d'investissement climatique, le Bhoutan a présenté 36 projets Article 6 totalisant 5,08 millions de tCO2e par an, mais les développeurs ont fermement rejeté la fourchette de CA fee proposée de 5 à 25 dollars par tonne, arguant qu'elle rendait les projets non rentables. Le Bhoutan a reconnu devoir peut-être revoir sa position. Le Kenya, l'Ouganda et le Cameroun font tous face à cette même tension: fixer le CA fee au bon niveau est le paramètre politique le plus critique de leur parcours Article 6 respectif.</p>

<h2>La Confiance Institutionnelle Progresse</h2>
<p>Un signal fort pour toute la région: la société de courtage en assurance carbone Kita a reçu un investissement du Groupe Tokio Marine (Japon) à mi-2026. Kita a explicitement cité "plusieurs pays africains ayant renforcé leurs cadres de crédits carbone au cours des 12 derniers mois" comme déclencheur, et assure désormais le risque politique pour les transactions Article 6 et Corsia en Afrique. Quand les grands assureurs japonais commencent à tarifer le risque carbone africain à grande échelle, c'est le signe d'un vrai tournant institutionnel.</p>

<h2>Ce que les Acheteurs et Investisseurs Doivent Retenir</h2>
<p>Les trois pays se complètent bien. Le Kenya offre une offre Article 6 à court terme avec une clarté réglementaire. L'Ouganda propose des crédits biodiversité premium avec une trajectoire d'autorisation claire. Le Cameroun fournit l'échelle pour les acheteurs qui ont besoin de gros volumes futurs. Un portefeuille diversifié sur les trois marchés réduit le risque réglementaire et s'aligne avec la préférence croissante des acheteurs pour les récits régionaux de biodiversité.</p>
<p><em>À lire également: Pour l'analyse spécifique au Kenya, visitez co2.ke. Pour la perspective ougandaise, visitez co2.ug. Pour les détails sur le Cameroun et le Bassin du Congo, visitez co2.cm.</em></p>`,
      },
    },
  },
  {
    slug: "ethiopia-jredd-first-issuance",
    date: "2026-07-17",
    lang: {
      en: {
        title: "Ethiopia Issues First Credits Under World Bank JREDD+ — 14.9 Million Tonnes from Oromia",
        excerpt: "Ethiopia has become the first country to issue carbon credits under the World Bank's ISFL jurisdictional REDD+ standard, with 14.9 million tCO2e from the Oromia region now registered and 12.4 million available for market.",
        content: `<p>Ethiopia has made history in July 2026, becoming the first country to issue carbon credits under the World Bank's Initiative for Sustainable Forest Landscapes (ISFL) — the world's most prominent jurisdictional REDD+ standard. The issuance covers 14.9 million tonnes of CO2 equivalent (tCO2e) from the Oromia region, home to more than 30 million people and over half of Ethiopia's forest cover. Of these, 12.4 million tCO2e are available for market trading.</p>

<h2>What ISFL Is — and Why It Matters</h2>
<p>The ISFL is the World Bank's BioCarbon Fund programme for jurisdictional REDD+ — meaning it operates at a regional government level rather than individual project level. Unlike voluntary project-level credits, ISFL credits represent a government-backed, landscape-scale commitment to forest conservation and community livelihoods. Ethiopia's Oromia ISFL programme has been in development for over a decade, with the World Bank, the Government of Ethiopia, and the Oromia regional government as co-parties.</p>

<p>Countries also developing ISFL projects include Colombia, Indonesia, Mexico, and Zambia — meaning Ethiopia's issuance sets a template for jurisdictional REDD+ delivery across the Global South.</p>

<h2>The Path to Corsia and ART</h2>
<p>For Ethiopia, the issuance opens a potential pathway to the aviation sector's Corsia decarbonisation scheme, and to migration onto ART (Architecture for REDD+ Transactions), the most sought-after JREDD+ standard among institutional buyers. Both pathways would significantly expand buyer access and pricing potential for Oromia's credits.</p>

<p>The milestone is a signal to the entire East African region: jurisdictional forest carbon — not just individual project credits — is becoming a viable asset class. Kenya, Uganda, Tanzania, and the DRC are all watching closely.</p>

<h2>What This Means for Africa's Carbon Markets</h2>
<p>Ethiopia's ISFL issuance represents a maturation of African forest carbon beyond cookstoves and individual REDD+ concessions. It demonstrates that national governments can manage, register, and bring to market landscape-scale credits — a prerequisite for the volumes that airline buyers, sovereign wealth funds, and large corporates actually need. For co2.africa's regional coverage area, it is one of the most consequential carbon market events of 2026.</p>

<p>Related: <a href="/en/blog/article-6-east-central-africa">How Kenya, Uganda and Cameroon Compare on Article 6</a></p>`,
      },
      fr: {
        title: "L'Éthiopie Émet les Premiers Crédits sous JREDD+ de la Banque Mondiale — 14,9 Millions de Tonnes depuis l'Oromia",
        excerpt: "L'Éthiopie est devenue le premier pays à émettre des crédits carbone sous le standard JREDD+ ISFL de la Banque Mondiale — 14,9 millions de tCO2e depuis la région d'Oromia, dont 12,4 millions disponibles pour le marché.",
        content: `<p>En juillet 2026, l'Éthiopie est entrée dans l'histoire en devenant le premier pays à émettre des crédits carbone sous l'Initiative pour des Paysages Forestiers Durables (ISFL) de la Banque Mondiale — le standard JREDD+ juridictionnel le plus prominent au monde. L'émission couvre 14,9 millions de tonnes d'équivalent CO2 (tCO2e) issues de la région d'Oromia, qui abrite plus de 30 millions de personnes et plus de la moitié du couvert forestier éthiopien. Parmi ces crédits, 12,4 millions de tCO2e sont disponibles pour la négociation sur le marché.</p>

<h2>Qu'est-ce que l'ISFL et Pourquoi Est-ce Important</h2>
<p>L'ISFL est le programme BioCarbon Fund de la Banque Mondiale pour le REDD+ juridictionnel — ce qui signifie qu'il opère au niveau des gouvernements régionaux plutôt qu'au niveau des projets individuels. Contrairement aux crédits volontaires de niveau projet, les crédits ISFL représentent un engagement gouvernemental à l'échelle du paysage pour la conservation des forêts et les moyens de subsistance des communautés. Le programme ISFL d'Oromia est en développement depuis plus d'une décennie, avec la Banque Mondiale, le Gouvernement éthiopien et le gouvernement régional d'Oromia comme co-parties.</p>

<p>D'autres pays développent également des projets ISFL, notamment la Colombie, l'Indonésie, le Mexique et la Zambie — ce qui signifie que l'émission éthiopienne établit un modèle pour la livraison JREDD+ juridictionnel dans l'ensemble du Sud global.</p>

<h2>La Voie vers Corsia et ART</h2>
<p>Pour l'Éthiopie, l'émission ouvre une voie potentielle vers le programme Corsia de décarbonisation du secteur aérien, et vers une migration vers ART (Architecture for REDD+ Transactions), le standard JREDD+ le plus recherché par les acheteurs institutionnels. Les deux voies élargiraient considérablement l'accès des acheteurs et le potentiel de prix pour les crédits d'Oromia.</p>

<p>Cette étape est un signal pour toute la région d'Afrique de l'Est : le carbone forestier juridictionnel — pas seulement les crédits de projets individuels — devient une classe d'actifs viable. Le Kenya, l'Ouganda, la Tanzanie et la RDC observent tous attentivement.</p>

<h2>Ce que Cela Signifie pour les Marchés Carbone Africains</h2>
<p>L'émission ISFL de l'Éthiopie représente une maturation du carbone forestier africain au-delà des foyers améliorés et des concessions REDD+ individuelles. Elle démontre que les gouvernements nationaux peuvent gérer, enregistrer et commercialiser des crédits à l'échelle du paysage — un prérequis pour les volumes dont les compagnies aériennes, les fonds souverains et les grandes entreprises ont réellement besoin. Pour la couverture régionale de co2.africa, il s'agit de l'un des événements les plus importants des marchés carbone de 2026.</p>

<p>À lire également: <a href="/fr/blog/article-6-east-central-africa">Comment le Kenya, l'Ouganda et le Cameroun se Comparent sur l'Article 6</a></p>`,
      },
    },
  },
  {
    slug: "drc-lumiere-carbon-registry",
    date: "2026-07-06",
    lang: {
      en: {
        title: "DRC Establishes the Lumière National Carbon Registry — and Why Investors Are Watching",
        excerpt: "The Democratic Republic of Congo has formally created the Lumière National Carbon Registry and a Carbon Market Regulatory Authority, establishing a legal framework for Article 6.2 carbon trading. But a local NGO is raising red flags.",
        content: `<p>The Democratic Republic of Congo — home to the world's second-largest tropical forest and arguably the most consequential country for global REDD+ supply — has formalised its carbon market governance. In June 2026, the DRC's government enacted a law establishing the <strong>Lumière National Carbon Registry</strong> and a <strong>Carbon Market Regulatory Authority</strong> with supervisory and sanctioning powers. The law also sets rules for trading Internationally Transferred Mitigation Outcomes (ITMOs) under Article 6.2 of the Paris Agreement.</p>

<h2>What the Law Creates</h2>
<p>The new framework formally establishes the procedures by which DRC-based carbon projects can obtain government authorisation to transfer credits internationally. Previously, the absence of a legally defined registry and regulatory body had been a persistent obstacle for developers seeking Letters of Authorisation (LoAs) from the Congolese government — a prerequisite for both Corsia insurance coverage and Article 6.2 compliance.</p>

<p>For the 71 active REDD+ concessions covering 17.7 million hectares (as of June 2026), and the 61 carbon projects registered or in the process of registering in DRC, this framework is a potential unlock — provided it is implemented consistently and transparently.</p>

<h2>The Warning Signal</h2>
<p>Not everyone is cheering. A local civil society group, the <strong>Groupe de Travail Climat REDD+ Rénové (GTCRR)</strong>, called for the legislative process to be suspended. Their position note warned that the current draft was developed without adequate consultation with provinces, local communities, indigenous peoples, project developers, or technical partners. GTCRR cautioned that institutional fragmentation and lack of transparency could push investors towards more stable African jurisdictions — and undermine DRC's ability to fund its own NDC and forest protection goals.</p>

<p>Additionally, DRC is targeting November 2026 for publication of its Biennial Transparency Report (BTR) — the UN-linked document that provides the "insurance route" to Corsia market access for most DRC-based projects. Major insurers including Oka have excluded DRC due to existing sanctions, making the BTR the primary path to market for most developers.</p>

<h2>France Steps In</h2>
<p>Separately, France and DRC signed a Memorandum of Understanding in July 2026 to launch the <strong>Z3D programme</strong> (Zero Deforestation and Degradation for Development), financed by the Agence Française de Développement and forming part of France's commitments under the Belém Call for the Forests of the Congo Basin — a declaration launched at COP30.</p>

<p>The DRC story is one of extraordinary potential and real implementation risk. Investors who can navigate both will find a frontier market like no other on the continent.</p>

<p>Related: <a href="/en/blog/redd-plus-east-central-africa">REDD+ Across Borders: Kenya, Uganda and the Congo Basin</a></p>`,
      },
      fr: {
        title: "La RDC Crée le Registre National du Carbone Lumière — et Pourquoi les Investisseurs Regardent de Près",
        excerpt: "La République Démocratique du Congo a formellement établi le Registre National du Carbone Lumière et une Autorité de Régulation du Marché Carbone, créant un cadre légal pour le commerce de crédits carbone sous l'Article 6.2. Mais une ONG locale tire la sonnette d'alarme.",
        content: `<p>La République Démocratique du Congo — qui abrite la deuxième plus grande forêt tropicale au monde et constitue sans doute le pays le plus déterminant pour l'offre mondiale de REDD+ — a formalisé sa gouvernance du marché carbone. En juin 2026, le gouvernement de la RDC a promulgué une loi établissant le <strong>Registre National du Carbone Lumière</strong> et une <strong>Autorité de Régulation du Marché Carbone</strong> dotée de pouvoirs de supervision et de sanction. La loi fixe également des règles pour le commerce des Résultats d'Atténuation Transférés Internationalement (ITMOs) dans le cadre de l'Article 6.2 de l'Accord de Paris.</p>

<h2>Ce que la Loi Crée</h2>
<p>Le nouveau cadre établit formellement les procédures par lesquelles les projets carbone basés en RDC peuvent obtenir l'autorisation gouvernementale pour transférer des crédits à l'international. Auparavant, l'absence d'un registre légalement défini et d'un organe réglementaire avait constitué un obstacle persistant pour les développeurs cherchant des Lettres d'Autorisation (LoA) du gouvernement congolais — un préalable à la fois pour la couverture d'assurance Corsia et pour la conformité avec l'Article 6.2.</p>

<p>Pour les 71 concessions REDD+ actives couvrant 17,7 millions d'hectares (en juin 2026), et les 61 projets carbone enregistrés ou en cours d'enregistrement en RDC, ce cadre représente un potentiel déblocage — à condition qu'il soit mis en œuvre de manière cohérente et transparente.</p>

<h2>Le Signal d'Avertissement</h2>
<p>Tout le monde ne se réjouit pas. Un groupe local de la société civile, le <strong>Groupe de Travail Climat REDD+ Rénové (GTCRR)</strong>, a appelé à la suspension du processus législatif. Leur note de position avertissait que le projet actuel avait été élaboré sans consultation adéquate des provinces, des communautés locales, des peuples autochtones, des développeurs de projets ou des partenaires techniques. Le GTCRR a mis en garde que la fragmentation institutionnelle et le manque de transparence pourraient pousser les investisseurs vers des juridictions africaines plus stables — et compromettre la capacité de la RDC à financer ses propres objectifs de NDC et de protection des forêts.</p>

<p>Par ailleurs, la RDC vise novembre 2026 pour la publication de son Rapport de Transparence Biennal (BTR) — le document lié aux Nations Unies qui constitue la "voie d'assurance" pour l'accès au marché Corsia pour la plupart des projets basés en RDC. Les principaux assureurs, dont Oka, ont exclu la RDC en raison de sanctions existantes, faisant du BTR la principale voie d'accès au marché pour la plupart des développeurs.</p>

<h2>La France Intervient</h2>
<p>Par ailleurs, la France et la RDC ont signé un Mémorandum d'Entente en juillet 2026 pour lancer le <strong>programme Z3D</strong> (Zéro Déforestation et Dégradation pour le Développement), financé par l'Agence Française de Développement et s'inscrivant dans le cadre des engagements de la France dans l'Appel de Belém pour les Forêts du Bassin du Congo — une déclaration lancée lors de la COP30.</p>

<p>L'histoire de la RDC est celle d'un potentiel extraordinaire et d'un risque de mise en œuvre réel. Les investisseurs capables de naviguer entre les deux trouveront un marché frontier comme nulle part ailleurs sur le continent.</p>

<p>À lire également: <a href="/fr/blog/redd-plus-east-central-africa">REDD+ Au-delà des Frontières: Kenya, Ouganda et le Bassin du Congo</a></p>`,
      },
    },
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find(p => p.slug === slug);
}
