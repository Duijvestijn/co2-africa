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
];

export function getPost(slug: string): Post | undefined {
  return posts.find(p => p.slug === slug);
}
