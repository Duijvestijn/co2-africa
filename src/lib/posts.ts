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
];

export function getPost(slug: string): Post | undefined {
  return posts.find(p => p.slug === slug);
}
