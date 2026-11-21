import React, { useState } from 'react';
import Palette from '../../theme/palette';

import { CONTACT_EMAIL } from '../../config/AppConfig';
import jacketHero from '../../assets/videos/ilgow-loop.mp4';
import trailer16x9 from '../../assets/videos/trailer/16x9.mp4';
import topspot1x1 from '../../assets/videos/topspot/1x1.mp4';
import topspot16x9 from '../../assets/videos/topspot/16x9.mp4';
import trailerThumbnail from '../../assets/images/trailer-thumbnail.png';
import subtractShape from '../../assets/images/subtract.png';
import vestNoCircle from '../../assets/images/iglow-vest-nocircle.png';
import controller from '../../assets/images/controller.png';
import appMockup from '../../assets/images/app-mockup.png';
import mountain from '../../assets/images/mountain.png';
import duoHelmetVest from '../../assets/images/iglow-duo-helmet-vest.jpg';
import helmet3Views from '../../assets/images/iglow-helmet-3-views.jpg';
import helmetCutout from '../../assets/images/iglow-helmet-cutout.png';

import { Box, Container, Typography, Button } from '@mui/material';

import Navbar from '../../components/Navbar/Navbar';
import EmptySpace from '../../components/EmptySpace/EmptySpace';
import IllustratedParagraph from '../../components/IllustratedParagraph/IllustratedParagraph';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import SpecsSection from '../../components/SpecsSection/SpecsSection';
import Banner from '../../components/Banner/Banner';
import IdCard from '../../components/IdCard/IdCard';
import FAQSection from '../../components/FAQSection/FAQSection';
import FormContact from '../../components/FormContact/FormContact';
import Footer from '../../components/Footer/Footer';
import NoisyContainer from '../../components/NoisyContainer/NoisyContainer';
import Countdown from '../../components/Countdown/Countdown';

const LANGUAGES = [
  { code: 'fr', name: 'FR', flag: '🇫🇷' },
  { code: 'de', name: 'DE', flag: '🇩🇪' },
  { code: 'it', name: 'IT', flag: '🇮🇹' },
  { code: 'en', name: 'EN', flag: '🇬🇧' },
  { code: 'es', name: 'ES', flag: '🇪🇸' },
  { code: 'nl', name: 'NL', flag: '🇳🇱' },
  { code: 'pt', name: 'PT', flag: '🇵🇹' },
  { code: 'hi', name: 'HI', flag: '🇮🇳' },
  { code: 'ar', name: 'AR', flag: '🇸🇦' },
  { code: 'ru', name: 'RU', flag: '🇷🇺' },
];

const CONTENT = {
  fr: {
    heroPrefix: 'Offrez ou offrez-vous',
    heroHighlight: 'le Duo Parfait',
    heroSuffix: 'gilet + casque IGLOW',
    heroButton: 'Cliquez ici pour payer et réserver votre duo',
    watchNowMain: 'REGARDEZ MAINTENANT',
    watchNowSub: 'Pour être visible comme une voiture',
    watchSub: 'Le gilet connecté avec clignotants et feux de freinage',
    reserveAction: 'RÉSERVEZ',
    reserveNowWord: 'MAINTENANT',
    reserveDuoText: 'Votre Duo Casque + Gilet',
    exclusive: 'EXCLUSIF',
    duoSpecial: 'OFFRE DUO SPÉCIALE',
    insteadOfLabel: 'au lieu de',
    duoSpecialDesc:
      "Offre spéciale Black Friday & lancement Kickstarter : le Duo Casque + Gilet IGLOW",
    newPricePrefix: 'PAYÉ SEULEMENT',
    discountLinePrefix: 'Économie immédiate de',
    clickToReserve: 'Cliquez pour réserver et faire partie du succès.',
    kickstarterButton: 'IGLOW sur Kickstarter',
    kickstarterCaption: 'Votre Duo IGLOW',
    kickstarterCaptionSub: 'Casque + Gilet',
    secureSpot: 'Réservez votre place',
    secureSpotSub: "dès aujourd'hui !",
    whatIsOvertitle: "QU'EST-CE QUE IGLOW ?",
    whatIsHtml:
      'Le Duo Casque et Gilet <span style="color:#E30613">IGLOW</span><br/><span style="color:#E30613">Une visibilité à 360°</span><br/>Grâce à des <span style="color:#E30613">clignotants</span> et <span style="color:#E30613">feux de freinage</span><br/>Comme une voiture, contrôlés par une <span style="color:#E30613">télécommande sur le guidon</span>.',
    safetyOvertitle: 'sécurité',
    safetyTitle: 'Gilet et Casque Connectés Haute Visibilité',
    safetyText:
      "Doté d'indicateurs LED de pointe, le gilet offre une meilleure visibilité, particulièrement dans des conditions de faible luminosité. Son design épuré et ergonomique garantit à la fois confort et facilité d'utilisation, même avec un sac à dos. Le casque complète votre sécurité avec les mêmes fonctions de signalisation, en plus d'une lumière frontale très puissante.",
    flexOvertitle: 'Flexibilité',
    flexTitle: 'La Télécommande Intelligente',
    flexText:
      "Gardez les yeux sur la route tout en contrôlant votre sécurité avec la télécommande iGlow, une visibilité sans effort, au bout des doigts.",
    appOvertitle: 'APPLICATION',
    appTitle: 'GlowSafe : Votre Compagnon de Sécurité Routière',
    appText:
      "GlowSafe est votre application mobile incontournable pour chercher des itinéraires et synchroniser les indicateurs du Smart Vest. Trouvez facilement votre chemin et contrôlez les clignotants du gilet pour une visibilité renforcée.",
    specsOvertitle: 'Pour les passionnés',
    specsTitlePrefix: 'Découvrez les',
    specsHighlight: 'caractéristiques',
    swissOvertitle: 'Conçu en Suisse',
    swissHighlight: 'Qualité suisse',
    swissTitle: 'et sécurité inégalée.',
    swissParagraph:
      "Le Smart Vest est l'aboutissement de plus de 3 ans de recherche et d'ingénierie suisses. Nous nous engageons à offrir à nos clients une qualité inégalée et le respect des normes de sécurité. Tous les composants électroniques et tissus techniques intelligents sont entièrement développés par des entreprises suisses, renforçant encore notre engagement envers le savoir-faire et l'innovation suisses.",
    aboutOvertitle: 'À propos de nous',
    aboutTitlePrefix: "Découvrez l'équipe",
    aboutHighlight: 'derrière IGLOW®',
    faqOvertitle: 'F. A. Q.',
    faqTitlePrefix: 'Laissez-nous',
    faqHighlight: 'vous éclairer !',
    contactOvertitle: 'Contact',
    contactTitlePrefix: "Besoin d'aide ?",
    contactHighlight: 'Nous sommes là pour vous !',
    contactParagraph:
      "Une question ou un intérêt pour un partenariat ? Nous serions ravis de vous entendre ! Contactez notre équipe en remplissant le formulaire ci-dessous, et nous vous répondrons dans les plus brefs délais !",
    switzerlandWord: 'Suisse',
  },
  de: {
    heroPrefix: 'Verschenken Sie oder gönnen Sie sich',
    heroHighlight: 'das perfekte Duo',
    heroSuffix: 'Weste + Helm IGLOW',
    heroButton: 'Hier klicken, um jetzt zu bezahlen und Ihr Duo zu reservieren',
    watchNowMain: 'JETZT ANSEHEN',
    watchNowSub: 'Um sichtbar zu sein wie ein Auto',
    watchSub: 'Die Smart Weste mit Blinkern + Bremslichtern',
    reserveAction: 'RESERVIEREN',
    reserveNowWord: 'JETZT',
    reserveDuoText: 'Ihr Duo Helm + Weste',
    exclusive: 'EXKLUSIV',
    duoSpecial: 'DUO SPEZIAL',
    insteadOfLabel: 'statt',
    duoSpecialDesc:
      'Black Friday & Kickstarter-Launch-Spezial: das IGLOW Helm + Weste Duo',
    newPricePrefix: 'NUR BEZAHLT',
    discountLinePrefix: 'Sofortige Ersparnis von',
    clickToReserve: 'Klicken Sie, um zu reservieren und Teil des Erfolgs zu sein.',
    kickstarterButton: 'IGLOW auf Kickstarter',
    kickstarterCaption: 'Ihr IGLOW Duo',
    kickstarterCaptionSub: 'Helm + Weste',
    secureSpot: 'Sichern Sie sich Ihren Platz',
    secureSpotSub: 'noch heute!',
    whatIsOvertitle: 'WAS IST IGLOW ?',
    whatIsHtml:
      'Das Duo Helm & Weste <span style="color:#E30613">IGLOW</span><br/><span style="color:#E30613">360°-Sichtbarkeit</span><br/>Mit <span style="color:#E30613">Blinkern</span> und <span style="color:#E30613">Bremslichtern</span><br/>Wie ein Auto, gesteuert durch eine <span style="color:#E30613">Fernbedienung am Lenker</span>.',
    safetyOvertitle: 'Sicherheit',
    safetyTitle: 'Hochsichtbare Smart Weste & Helm',
    safetyText:
      'Mit modernsten LED-Anzeigen bietet die Weste eine verbesserte Sichtbarkeit, besonders bei schlechten Lichtverhältnissen. Ihr schlankes und ergonomisches Design garantiert sowohl Komfort als auch Benutzerfreundlichkeit, selbst wenn Sie einen Rucksack tragen. Der Helm ergänzt Ihre Sicherheit mit denselben Signalfunktionen und zusätzlich einem sehr starken Frontlicht.',
    flexOvertitle: 'Flexibilität',
    flexTitle: 'Die intelligente Fernbedienung',
    flexText:
      'Behalten Sie den Blick auf die Straße, während Sie Ihre Sicherheit mit der iGlow-Fernbedienung kontrollieren – mühelose Sichtbarkeit auf Knopfdruck.',
    appOvertitle: 'ANWENDUNG',
    appTitle: 'GlowSafe: Ihr Begleiter für Verkehrssicherheit',
    appText:
      'GlowSafe ist Ihre mobile App für die Routensuche und die Synchronisierung der Smart-Weste-Anzeigen. Finden Sie mühelos Ihren Weg und steuern Sie die Blinker der Weste für mehr Sichtbarkeit.',
    specsOvertitle: 'Für die Technikfans',
    specsTitlePrefix: 'Entdecken Sie die',
    specsHighlight: 'technischen Daten',
    swissOvertitle: 'Entwickelt in der Schweiz',
    swissHighlight: 'Schweizer Qualität',
    swissTitle: 'und unübertroffene Sicherheit.',
    swissParagraph:
      'Die Smart Weste ist das Ergebnis von über 3 Jahren Schweizer Forschung und Entwicklung. Wir verpflichten uns, unseren Kunden unvergleichliche Qualität und die Einhaltung von Sicherheitsstandards zu bieten. Alle elektronischen Komponenten und intelligenten technischen Stoffe werden vollständig von Schweizer Unternehmen entwickelt, was unser Engagement für Schweizer Handwerkskunst und Innovation weiter festigt.',
    aboutOvertitle: 'Über uns',
    aboutTitlePrefix: 'Entdecken Sie das Team',
    aboutHighlight: 'hinter IGLOW®',
    faqOvertitle: 'F. A. Q.',
    faqTitlePrefix: 'Lassen Sie uns',
    faqHighlight: 'Sie aufklären!',
    contactOvertitle: 'Kontakt',
    contactTitlePrefix: 'Brauchen Sie Hilfe?',
    contactHighlight: 'Wir sind für Sie da!',
    contactParagraph:
      'Haben Sie eine Frage oder Interesse an einer Partnerschaft? Wir würden uns freuen, von Ihnen zu hören! Kontaktieren Sie unser Team über das untenstehende Formular, und wir melden uns so schnell wie möglich bei Ihnen!',
    switzerlandWord: 'Schweiz',
  },
  it: {
    heroPrefix: 'Regala o regalati',
    heroHighlight: 'il Duo Perfetto',
    heroSuffix: 'gilet + casco IGLOW',
    heroButton: 'Clicca qui ora per pagare e prenotare il tuo duo',
    watchNowMain: 'GUARDA ORA',
    watchNowSub: "Per essere visibile come un'auto",
    watchSub: 'Il gilet smart con frecce + luci di stop',
    reserveAction: 'PRENOTA',
    reserveNowWord: 'ORA',
    reserveDuoText: 'Il tuo Duo Casco + Gilet',
    exclusive: 'ESCLUSIVO',
    duoSpecial: 'OFFERTA DUO SPECIALE',
    insteadOfLabel: 'invece di',
    duoSpecialDesc:
      'Offerta speciale Black Friday e lancio Kickstarter: il Duo Casco + Gilet IGLOW',
    newPricePrefix: 'PAGATO SOLO',
    discountLinePrefix: 'Risparmio immediato di',
    clickToReserve: 'Clicca per prenotare e far parte del successo.',
    kickstarterButton: 'IGLOW su Kickstarter',
    kickstarterCaption: 'Il tuo Duo IGLOW',
    kickstarterCaptionSub: 'Casco + Gilet',
    secureSpot: 'Assicurati il tuo posto',
    secureSpotSub: 'subito!',
    whatIsOvertitle: "COS'È IGLOW ?",
    whatIsHtml:
      'Il Duo Casco e Gilet <span style="color:#E30613">IGLOW</span><br/><span style="color:#E30613">Una visibilità a 360°</span><br/>Grazie a <span style="color:#E30613">frecce</span> e <span style="color:#E30613">luci di stop</span><br/>Come un\'auto, controllato da un <span style="color:#E30613">telecomando sul manubrio</span>.',
    safetyOvertitle: 'sicurezza',
    safetyTitle: 'Gilet e Casco Smart ad Alta Visibilità',
    safetyText:
      "Dotato di indicatori LED all'avanguardia, il gilet offre una visibilità migliorata, particolarmente in condizioni di scarsa luminosità. Il suo design snello ed ergonomico garantisce comfort e facilità d'uso, anche indossando uno zaino. Il casco completa la tua sicurezza con le stesse funzioni di segnalazione, con in più una luce frontale molto potente.",
    flexOvertitle: 'Flessibilità',
    flexTitle: 'Il Telecomando Intelligente',
    flexText:
      'Tieni gli occhi sulla strada mentre controlli la tua sicurezza con il telecomando iGlow – visibilità senza sforzo, a portata di mano.',
    appOvertitle: 'APPLICAZIONE',
    appTitle: 'GlowSafe: Il Tuo Compagno di Sicurezza Stradale',
    appText:
      'GlowSafe è la tua app mobile di riferimento per cercare percorsi e sincronizzare gli indicatori dello Smart Vest. Trova facilmente la tua strada e controlla le frecce del gilet per una maggiore visibilità.',
    specsOvertitle: 'Per gli appassionati',
    specsTitlePrefix: 'Scopri le',
    specsHighlight: 'caratteristiche tecniche',
    swissOvertitle: 'Progettato in Svizzera',
    swissHighlight: 'Qualità svizzera',
    swissTitle: 'e sicurezza senza pari.',
    swissParagraph:
      "Lo Smart Vest è il risultato di oltre 3 anni di ricerca e ingegneria svizzera. Ci impegniamo a offrire ai nostri clienti una qualità senza pari e il rispetto degli standard di sicurezza. Tutti i componenti elettronici e i tessuti tecnici intelligenti sono interamente sviluppati da aziende svizzere, rafforzando ulteriormente il nostro impegno verso l'artigianato e l'innovazione svizzeri.",
    aboutOvertitle: 'Chi siamo',
    aboutTitlePrefix: 'Scopri il team',
    aboutHighlight: 'dietro IGLOW®',
    faqOvertitle: 'F. A. Q.',
    faqTitlePrefix: 'Lascia che',
    faqHighlight: 'ti illuminiamo!',
    contactOvertitle: 'Contatto',
    contactTitlePrefix: 'Hai bisogno di aiuto?',
    contactHighlight: 'Siamo qui per te!',
    contactParagraph:
      'Hai una domanda o sei interessato a una partnership? Ci farebbe piacere sentirti! Contatta il nostro team compilando il modulo qui sotto, e ti risponderemo il prima possibile!',
    switzerlandWord: 'Svizzera',
  },
  en: {
    heroPrefix: 'Gift it or treat yourself to',
    heroHighlight: 'the Perfect Duo',
    heroSuffix: 'vest + helmet IGLOW',
    heroButton: 'Click here now to pay and reserve your duo',
    watchNowMain: 'Watch NOW',
    watchNowSub: 'To be visible like a car',
    watchSub: 'The Smart Vest with Turn signals + Brake lights',
    reserveAction: 'RESERVE',
    reserveNowWord: 'NOW',
    reserveDuoText: 'Your Duo Helmet + Vest',
    exclusive: 'EXCLUSIVE',
    duoSpecial: 'DUO SPECIAL',
    insteadOfLabel: 'instead of',
    duoSpecialDesc:
      'Black Friday & Kickstarter launch special: the IGLOW Helmet + Vest Duo',
    newPricePrefix: 'PAID ONLY',
    discountLinePrefix: 'Instant savings of',
    clickToReserve: 'Click to reserve and be part of the success.',
    kickstarterButton: 'IGLOW on Kickstarter',
    kickstarterCaption: 'Your IGLOW Duo',
    kickstarterCaptionSub: 'Helmet + Vest',
    secureSpot: 'Secure your spot',
    secureSpotSub: 'today!',
    whatIsOvertitle: 'WHAT IS IGLOW ?',
    whatIsHtml:
      'The Duo Helmet & Vest <span style="color:#E30613">IGLOW</span><br/><span style="color:#E30613">360° visibility</span><br/>Thanks to <span style="color:#E30613">turn signals</span> and <span style="color:#E30613">brake lights</span><br/>Like a car, controlled by a <span style="color:#E30613">handlebar remote</span>.',
    safetyOvertitle: 'safety',
    safetyTitle: 'High Visibility Smart Vest & Helmet',
    safetyText:
      'Featuring state-of-the-art LED indicators, the vest offers improved visibility, particularly in low-light conditions. Its streamlined and ergonomic design guarantees both comfort and user-friendliness, even when you carry a backpack. The helmet completes your safety with the same signaling functions, plus a very powerful front light.',
    flexOvertitle: 'Flexibility',
    flexTitle: 'The Smart Remote',
    flexText:
      'Keep your eyes on the road while controlling your safety with the iGlow remote – effortless visibility at your fingertips.',
    appOvertitle: 'APPLICATION',
    appTitle: 'GlowSafe: Your Road Safety Companion',
    appText:
      "GlowSafe is your go-to mobile app for searching routes and synchronizing Smart Vest's indicators. Effortlessly find your way and seamlessly control the vest's blinkers for enhanced visibility.",
    specsOvertitle: 'For the nerds',
    specsTitlePrefix: 'Exploring the',
    specsHighlight: 'specs',
    swissOvertitle: 'Engineered in Switzerland',
    swissHighlight: 'Swiss quality',
    swissTitle: 'and unmatched safety.',
    swissParagraph:
      'The Smart Vest is the culmination of over 3 years of Swiss research and engineering. We are dedicated to offering our customers unparalleled quality and adherence to safety standards. All electronic components and intelligent technical fabrics are entirely developed by Swiss companies, further solidifying our commitment to Swiss craftsmanship and innovation.',
    aboutOvertitle: 'About us',
    aboutTitlePrefix: 'Discover the team',
    aboutHighlight: 'behind IGLOW®',
    faqOvertitle: 'F. A. Q.',
    faqTitlePrefix: 'Let us',
    faqHighlight: 'enlighten you!',
    contactOvertitle: 'Contact',
    contactTitlePrefix: 'Need help ?',
    contactHighlight: 'We are here for you !',
    contactParagraph:
      "Have a question or interested in a partnership? We'd love to hear from you ! Contact our team by filling out the form below, and we'll get back to you as soon as possible !",
    switzerlandWord: 'Switzerland',
  },
  es: {
    heroPrefix: 'Regala o regálate',
    heroHighlight: 'el Duo Perfecto',
    heroSuffix: 'chaleco + casco IGLOW',
    heroButton: 'Haz clic aquí ahora para pagar y reservar tu duo',
    watchNowMain: 'MIRA AHORA',
    watchNowSub: 'Para ser visible como un coche',
    watchSub: 'El chaleco inteligente con intermitentes + luces de freno',
    reserveAction: 'RESERVA',
    reserveNowWord: 'AHORA',
    reserveDuoText: 'Tu Duo Casco + Chaleco',
    exclusive: 'EXCLUSIVO',
    duoSpecial: 'DUO ESPECIAL',
    insteadOfLabel: 'en lugar de',
    duoSpecialDesc:
      'Especial de lanzamiento de Black Friday y Kickstarter: el Duo Casco + Chaleco IGLOW',
    newPricePrefix: 'PAGADO SOLO',
    discountLinePrefix: 'Ahorro inmediato de',
    clickToReserve: 'Haz clic para reservar y ser parte del éxito.',
    kickstarterButton: 'IGLOW en Kickstarter',
    kickstarterCaption: 'Tu Duo IGLOW',
    kickstarterCaptionSub: 'Casco + Chaleco',
    secureSpot: '¡Asegura tu lugar',
    secureSpotSub: 'hoy!',
    whatIsOvertitle: '¿QUÉ ES IGLOW ?',
    whatIsHtml:
      'El Duo Casco y Chaleco <span style="color:#E30613">IGLOW</span><br/><span style="color:#E30613">Visibilidad de 360°</span><br/>Gracias a <span style="color:#E30613">intermitentes</span> y <span style="color:#E30613">luces de freno</span><br/>Como un coche, controlado por un <span style="color:#E30613">mando en el manillar</span>.',
    safetyOvertitle: 'seguridad',
    safetyTitle: 'Chaleco y Casco Inteligentes de Alta Visibilidad',
    safetyText:
      'Con indicadores LED de última generación, el chaleco ofrece una mejor visibilidad, especialmente en condiciones de poca luz. Su diseño aerodinámico y ergonómico garantiza comodidad y facilidad de uso, incluso llevando una mochila. El casco completa tu seguridad con las mismas funciones de señalización, además de una luz frontal muy potente.',
    flexOvertitle: 'Flexibilidad',
    flexTitle: 'El Mando Inteligente',
    flexText:
      'Mantén los ojos en la carretera mientras controlas tu seguridad con el mando iGlow: visibilidad sin esfuerzo al alcance de tu mano.',
    appOvertitle: 'APLICACIÓN',
    appTitle: 'GlowSafe: Tu Compañero de Seguridad Vial',
    appText:
      'GlowSafe es tu aplicación móvil de referencia para buscar rutas y sincronizar los indicadores del Smart Vest. Encuentra fácilmente tu camino y controla los intermitentes del chaleco para una mayor visibilidad.',
    specsOvertitle: 'Para los curiosos',
    specsTitlePrefix: 'Descubre las',
    specsHighlight: 'especificaciones',
    swissOvertitle: 'Diseñado en Suiza',
    swissHighlight: 'Calidad suiza',
    swissTitle: 'y seguridad inigualable.',
    swissParagraph:
      'El Smart Vest es el resultado de más de 3 años de investigación e ingeniería suiza. Estamos comprometidos a ofrecer a nuestros clientes una calidad inigualable y el cumplimiento de los estándares de seguridad. Todos los componentes electrónicos y tejidos técnicos inteligentes son desarrollados íntegramente por empresas suizas, reforzando aún más nuestro compromiso con la artesanía y la innovación suizas.',
    aboutOvertitle: 'Sobre nosotros',
    aboutTitlePrefix: 'Descubre el equipo',
    aboutHighlight: 'detrás de IGLOW®',
    faqOvertitle: 'F. A. Q.',
    faqTitlePrefix: 'Déjanos',
    faqHighlight: '¡aclararte todo!',
    contactOvertitle: 'Contacto',
    contactTitlePrefix: '¿Necesitas ayuda?',
    contactHighlight: '¡Estamos aquí para ti!',
    contactParagraph:
      '¿Tienes una pregunta o interés en una asociación? ¡Nos encantaría saber de ti! Contacta a nuestro equipo completando el formulario a continuación, y te responderemos lo antes posible.',
    switzerlandWord: 'Suiza',
  },
  nl: {
    heroPrefix: 'Geef cadeau of trakteer uzelf op',
    heroHighlight: 'de Perfecte Duo',
    heroSuffix: 'vest + helm IGLOW',
    heroButton: 'Klik hier om nu te betalen en uw duo te reserveren',
    watchNowMain: 'KIJK NU',
    watchNowSub: 'Om zichtbaar te zijn als een auto',
    watchSub: 'Het Smart Vest met richtingaanwijzers + remlichten',
    reserveAction: 'RESERVEER',
    reserveNowWord: 'NU',
    reserveDuoText: 'Uw Duo Helm + Vest',
    exclusive: 'EXCLUSIEF',
    duoSpecial: 'DUO SPECIAL',
    insteadOfLabel: 'in plaats van',
    duoSpecialDesc:
      'Black Friday & Kickstarter-lancering special: de IGLOW Helm + Vest Duo',
    newPricePrefix: 'SLECHTS BETAALD',
    discountLinePrefix: 'Directe besparing van',
    clickToReserve: 'Klik om te reserveren en deel uit te maken van het succes.',
    kickstarterButton: 'IGLOW op Kickstarter',
    kickstarterCaption: 'Uw IGLOW Duo',
    kickstarterCaptionSub: 'Helm + Vest',
    secureSpot: 'Verzeker u van uw plek',
    secureSpotSub: 'vandaag nog!',
    whatIsOvertitle: 'WAT IS IGLOW ?',
    whatIsHtml:
      'De Duo Helm & Vest <span style="color:#E30613">IGLOW</span><br/><span style="color:#E30613">360° zichtbaarheid</span><br/>Dankzij <span style="color:#E30613">richtingaanwijzers</span> en <span style="color:#E30613">remlichten</span><br/>Zoals een auto, bestuurd door een <span style="color:#E30613">afstandsbediening aan het stuur</span>.',
    safetyOvertitle: 'veiligheid',
    safetyTitle: 'Smart Vest & Helm met Hoge Zichtbaarheid',
    safetyText:
      'Met geavanceerde LED-indicatoren biedt het vest verbeterde zichtbaarheid, vooral bij weinig licht. Het gestroomlijnde en ergonomische ontwerp garandeert zowel comfort als gebruiksgemak, zelfs met een rugzak. De helm vervolledigt uw veiligheid met dezelfde signaalfuncties, met daarbij een zeer krachtig voorlicht.',
    flexOvertitle: 'Flexibiliteit',
    flexTitle: 'De Slimme Afstandsbediening',
    flexText:
      'Houd uw ogen op de weg terwijl u uw veiligheid beheert met de iGlow-afstandsbediening – moeiteloze zichtbaarheid binnen handbereik.',
    appOvertitle: 'APPLICATIE',
    appTitle: 'GlowSafe: Uw Verkeersveiligheidsmetgezel',
    appText:
      'GlowSafe is uw go-to mobiele app voor het zoeken van routes en het synchroniseren van de indicatoren van het Smart Vest. Vind moeiteloos uw weg en bedien de richtingaanwijzers van het vest voor verbeterde zichtbaarheid.',
    specsOvertitle: 'Voor de techneuten',
    specsTitlePrefix: 'Ontdek de',
    specsHighlight: 'specificaties',
    swissOvertitle: 'Ontworpen in Zwitserland',
    swissHighlight: 'Zwitserse kwaliteit',
    swissTitle: 'en ongeëvenaarde veiligheid.',
    swissParagraph:
      'Het Smart Vest is het resultaat van meer dan 3 jaar Zwitsers onderzoek en engineering. Wij zetten ons in om onze klanten ongeëvenaarde kwaliteit en naleving van veiligheidsnormen te bieden. Alle elektronische componenten en slimme technische stoffen worden volledig ontwikkeld door Zwitserse bedrijven, wat ons engagement voor Zwitsers vakmanschap en innovatie verder versterkt.',
    aboutOvertitle: 'Over ons',
    aboutTitlePrefix: 'Ontdek het team',
    aboutHighlight: 'achter IGLOW®',
    faqOvertitle: 'F. A. Q.',
    faqTitlePrefix: 'Laat ons',
    faqHighlight: 'u inlichten!',
    contactOvertitle: 'Contact',
    contactTitlePrefix: 'Hulp nodig?',
    contactHighlight: 'Wij staan voor u klaar!',
    contactParagraph:
      'Heeft u een vraag of interesse in een samenwerking? We horen graag van u! Neem contact op met ons team door onderstaand formulier in te vullen, en we nemen zo snel mogelijk contact met u op!',
    switzerlandWord: 'Zwitserland',
  },
  pt: {
    heroPrefix: 'Presenteie ou presenteie-se com',
    heroHighlight: 'o Duo Perfeito',
    heroSuffix: 'colete + capacete IGLOW',
    heroButton: 'Clique aqui agora para pagar e reservar o seu duo',
    watchNowMain: 'ASSISTA AGORA',
    watchNowSub: 'Para ser visível como um carro',
    watchSub: 'O Colete Inteligente com Setas + Luzes de Freio',
    reserveAction: 'RESERVE',
    reserveNowWord: 'AGORA',
    reserveDuoText: 'Seu Duo Capacete + Colete',
    exclusive: 'EXCLUSIVO',
    duoSpecial: 'DUO ESPECIAL',
    insteadOfLabel: 'em vez de',
    duoSpecialDesc:
      'Especial de lançamento Black Friday & Kickstarter: o Duo Capacete + Colete IGLOW',
    newPricePrefix: 'PAGO APENAS',
    discountLinePrefix: 'Economia imediata de',
    clickToReserve: 'Clique para reservar e fazer parte do sucesso.',
    kickstarterButton: 'IGLOW no Kickstarter',
    kickstarterCaption: 'Seu Duo IGLOW',
    kickstarterCaptionSub: 'Capacete + Colete',
    secureSpot: 'Garanta o seu lugar',
    secureSpotSub: 'já!',
    whatIsOvertitle: 'O QUE É O IGLOW ?',
    whatIsHtml:
      'O Duo Capacete e Colete <span style="color:#E30613">IGLOW</span><br/><span style="color:#E30613">Visibilidade de 360°</span><br/>Graças a <span style="color:#E30613">setas</span> e <span style="color:#E30613">luzes de freio</span><br/>Como um carro, controlado por um <span style="color:#E30613">controle no guidão</span>.',
    safetyOvertitle: 'segurança',
    safetyTitle: 'Colete e Capacete Inteligentes de Alta Visibilidade',
    safetyText:
      'Com indicadores LED de última geração, o colete oferece visibilidade aprimorada, especialmente em condições de pouca luz. Seu design aerodinâmico e ergonômico garante conforto e facilidade de uso, mesmo com uma mochila. O capacete completa a sua segurança com as mesmas funções de sinalização, além de uma luz frontal muito potente.',
    flexOvertitle: 'Flexibilidade',
    flexTitle: 'O Controle Inteligente',
    flexText:
      'Mantenha os olhos na estrada enquanto controla sua segurança com o controle iGlow – visibilidade sem esforço na palma da mão.',
    appOvertitle: 'APLICATIVO',
    appTitle: 'GlowSafe: Seu Companheiro de Segurança Viária',
    appText:
      'GlowSafe é seu aplicativo móvel para buscar rotas e sincronizar os indicadores do Smart Vest. Encontre facilmente o seu caminho e controle as setas do colete para maior visibilidade.',
    specsOvertitle: 'Para os curiosos',
    specsTitlePrefix: 'Explore as',
    specsHighlight: 'especificações',
    swissOvertitle: 'Desenvolvido na Suíça',
    swissHighlight: 'Qualidade suíça',
    swissTitle: 'e segurança incomparável.',
    swissParagraph:
      'O Smart Vest é o resultado de mais de 3 anos de pesquisa e engenharia suíças. Estamos comprometidos em oferecer aos nossos clientes qualidade incomparável e conformidade com os padrões de segurança. Todos os componentes eletrônicos e tecidos técnicos inteligentes são totalmente desenvolvidos por empresas suíças, reforçando ainda mais o nosso compromisso com a qualidade artesanal e a inovação suíças.',
    aboutOvertitle: 'Sobre nós',
    aboutTitlePrefix: 'Conheça a equipe',
    aboutHighlight: 'por trás da IGLOW®',
    faqOvertitle: 'F. A. Q.',
    faqTitlePrefix: 'Deixe-nos',
    faqHighlight: 'esclarecer tudo!',
    contactOvertitle: 'Contato',
    contactTitlePrefix: 'Precisa de ajuda?',
    contactHighlight: 'Estamos aqui para você!',
    contactParagraph:
      'Tem alguma dúvida ou interesse em uma parceria? Adoraríamos ouvir você! Entre em contato com nossa equipe preenchendo o formulário abaixo, e responderemos o mais rápido possível!',
    switzerlandWord: 'Suíça',
  },
  hi: {
    heroPrefix: 'उपहार दें या खुद को दें',
    heroHighlight: 'परफेक्ट डुओ',
    heroSuffix: 'वेस्ट + हेलमेट IGLOW',
    heroButton: 'अभी भुगतान करने और अपना डुओ आरक्षित करने के लिए यहां क्लिक करें',
    watchNowMain: 'अभी देखें',
    watchNowSub: 'कार की तरह दिखाई देने के लिए',
    watchSub: 'टर्न सिग्नल + ब्रेक लाइट के साथ स्मार्ट वेस्ट',
    reserveAction: 'आरक्षित करें',
    reserveNowWord: 'अभी',
    reserveDuoText: 'आपका डुओ हेलमेट + जैकेट',
    exclusive: 'एक्सक्लूसिव',
    duoSpecial: 'डुओ स्पेशल',
    insteadOfLabel: 'के बजाय',
    duoSpecialDesc:
      'ब्लैक फ्राइडे और किकस्टार्टर लॉन्च स्पेशल: IGLOW हेलमेट + जैकेट डुओ',
    newPricePrefix: 'सिर्फ भुगतान',
    discountLinePrefix: 'तत्काल बचत',
    clickToReserve: 'आरक्षित करने और सफलता का हिस्सा बनने के लिए क्लिक करें।',
    kickstarterButton: 'Kickstarter पर IGLOW',
    kickstarterCaption: 'आपका IGLOW डुओ',
    kickstarterCaptionSub: 'हेलमेट + वेस्ट',
    secureSpot: 'अपनी जगह सुरक्षित करें',
    secureSpotSub: 'आज ही!',
    whatIsOvertitle: 'IGLOW क्या है ?',
    whatIsHtml:
      'डुओ हेलमेट और वेस्ट <span style="color:#E30613">IGLOW</span><br/><span style="color:#E30613">360° दृश्यता</span><br/><span style="color:#E30613">टर्न सिग्नल</span> और <span style="color:#E30613">ब्रेक लाइट</span> की बदौलत<br/>कार की तरह, एक <span style="color:#E30613">हैंडलबार रिमोट</span> द्वारा नियंत्रित।',
    safetyOvertitle: 'सुरक्षा',
    safetyTitle: 'हाई विज़िबिलिटी स्मार्ट वेस्ट और हेलमेट',
    safetyText:
      'अत्याधुनिक LED संकेतकों के साथ, यह जैकेट बेहतर दृश्यता प्रदान करती है, विशेष रूप से कम रोशनी की स्थिति में। इसका सुव्यवस्थित और एर्गोनोमिक डिज़ाइन आराम और उपयोग में आसानी दोनों की गारंटी देता है, यहां तक कि बैकपैक के साथ भी। हेलमेट समान सिग्नलिंग फ़ंक्शन के साथ आपकी सुरक्षा को पूरा करता है, साथ ही एक बहुत शक्तिशाली फ्रंट लाइट भी देता है।',
    flexOvertitle: 'फ्लेक्सिबिलिटी',
    flexTitle: 'स्मार्ट रिमोट',
    flexText:
      'iGlow रिमोट के साथ अपनी सुरक्षा को नियंत्रित करते हुए अपनी नज़रें सड़क पर रखें – बिना किसी मेहनत के दृश्यता, आपकी उंगलियों पर।',
    appOvertitle: 'एप्लिकेशन',
    appTitle: 'GlowSafe: आपका रोड सेफ्टी साथी',
    appText:
      'GlowSafe मार्ग खोजने और Smart Vest के संकेतकों को सिंक्रनाइज़ करने के लिए आपका पसंदीदा मोबाइल ऐप है। आसानी से अपना रास्ता खोजें और बेहतर दृश्यता के लिए जैकेट के टर्न सिग्नल को नियंत्रित करें।',
    specsOvertitle: 'टेक प्रेमियों के लिए',
    specsTitlePrefix: 'जानें',
    specsHighlight: 'स्पेसिफिकेशन',
    swissOvertitle: 'स्विट्ज़रलैंड में इंजीनियर्ड',
    swissHighlight: 'स्विस गुणवत्ता',
    swissTitle: 'और बेजोड़ सुरक्षा।',
    swissParagraph:
      'Smart Vest 3 वर्षों से अधिक के स्विस शोध और इंजीनियरिंग का परिणाम है। हम अपने ग्राहकों को बेजोड़ गुणवत्ता और सुरक्षा मानकों का पालन प्रदान करने के लिए प्रतिबद्ध हैं। सभी इलेक्ट्रॉनिक घटक और इंटेलिजेंट तकनीकी कपड़े पूरी तरह से स्विस कंपनियों द्वारा विकसित किए गए हैं, जो स्विस शिल्प कौशल और नवाचार के प्रति हमारी प्रतिबद्धता को और मजबूत करता है।',
    aboutOvertitle: 'हमारे बारे में',
    aboutTitlePrefix: 'टीम से मिलें',
    aboutHighlight: 'IGLOW® के पीछे',
    faqOvertitle: 'सामान्य प्रश्न',
    faqTitlePrefix: 'हमें आपको',
    faqHighlight: 'जानकारी देने दें!',
    contactOvertitle: 'संपर्क करें',
    contactTitlePrefix: 'मदद चाहिए?',
    contactHighlight: 'हम आपके लिए यहां हैं!',
    contactParagraph:
      'कोई सवाल है या साझेदारी में रुचि है? हमें आपसे सुनना अच्छा लगेगा! नीचे दिया गया फॉर्म भरकर हमारी टीम से संपर्क करें, और हम जल्द से जल्द आपसे संपर्क करेंगे!',
    switzerlandWord: 'स्विट्ज़रलैंड',
  },
  ar: {
    heroPrefix: 'أهدِ أو أهدِ نفسك',
    heroHighlight: 'الثنائي المثالي',
    heroSuffix: 'سترة + خوذة IGLOW',
    heroButton: 'انقر هنا الآن للدفع وحجز ثنائيك',
    watchNowMain: 'شاهد الآن',
    watchNowSub: 'لتكون مرئياً مثل السيارة',
    watchSub: 'السترة الذكية مع إشارات الانعطاف ومصابيح الفرامل',
    reserveAction: 'احجز',
    reserveNowWord: 'الآن',
    reserveDuoText: 'ثنائيك خوذة + سترة',
    exclusive: 'حصري',
    duoSpecial: 'عرض الثنائي الخاص',
    insteadOfLabel: 'بدلاً من',
    duoSpecialDesc:
      'عرض إطلاق بلاك فرايدي وكيك ستارتر الخاص: ثنائي الخوذة والسترة IGLOW',
    newPricePrefix: 'مدفوع فقط',
    discountLinePrefix: 'توفير فوري قدره',
    clickToReserve: 'انقر للحجز وكن جزءاً من النجاح.',
    kickstarterButton: 'IGLOW على Kickstarter',
    kickstarterCaption: 'ثنائي IGLOW الخاص بك',
    kickstarterCaptionSub: 'خوذة + سترة',
    secureSpot: 'احجز مكانك',
    secureSpotSub: 'اليوم!',
    whatIsOvertitle: 'ما هو IGLOW ؟',
    whatIsHtml:
      'دو خوذة وسترة <span style="color:#E30613">IGLOW</span><br/><span style="color:#E30613">رؤية 360°</span><br/>بفضل <span style="color:#E30613">إشارات الانعطاف</span> و<span style="color:#E30613">مصابيح الفرامل</span><br/>مثل السيارة، يتم التحكم فيها بواسطة <span style="color:#E30613">جهاز تحكم على المقود</span>.',
    safetyOvertitle: 'السلامة',
    safetyTitle: 'سترة وخوذة ذكية عالية الوضوح',
    safetyText:
      'بفضل مؤشرات LED المتطورة، توفر السترة رؤية محسّنة، خاصة في ظروف الإضاءة المنخفضة. يضمن تصميمها الانسيابي والمريح الراحة وسهولة الاستخدام، حتى عند ارتداء حقيبة ظهر. تُكمل الخوذة أمانك بنفس وظائف الإشارة، مع إضافة ضوء أمامي قوي جدًا.',
    flexOvertitle: 'المرونة',
    flexTitle: 'جهاز التحكم الذكي',
    flexText:
      'حافظ على عينيك على الطريق أثناء التحكم في سلامتك باستخدام جهاز تحكم iGlow - رؤية سهلة في متناول يدك.',
    appOvertitle: 'التطبيق',
    appTitle: 'GlowSafe: رفيقك لسلامة الطريق',
    appText:
      'GlowSafe هو تطبيقك المفضل للبحث عن المسارات ومزامنة مؤشرات Smart Vest. اعثر على طريقك بسهولة وتحكم في إشارات انعطاف السترة لرؤية أفضل.',
    specsOvertitle: 'لعشاق التقنية',
    specsTitlePrefix: 'اكتشف',
    specsHighlight: 'المواصفات',
    swissOvertitle: 'مصمم في سويسرا',
    swissHighlight: 'جودة سويسرية',
    swissTitle: 'وسلامة لا مثيل لها.',
    swissParagraph:
      'السترة الذكية هي نتاج أكثر من 3 سنوات من البحث والهندسة السويسرية. نحن ملتزمون بتقديم جودة لا مثيل لها والالتزام بمعايير السلامة لعملائنا. جميع المكونات الإلكترونية والأقمشة التقنية الذكية تم تطويرها بالكامل من قبل شركات سويسرية، مما يعزز التزامنا بالحرفية السويسرية والابتكار.',
    aboutOvertitle: 'من نحن',
    aboutTitlePrefix: 'تعرف على الفريق',
    aboutHighlight: 'وراء IGLOW®',
    faqOvertitle: 'الأسئلة الشائعة',
    faqTitlePrefix: 'دعنا',
    faqHighlight: 'نوضح لك!',
    contactOvertitle: 'اتصل بنا',
    contactTitlePrefix: 'تحتاج مساعدة؟',
    contactHighlight: 'نحن هنا من أجلك!',
    contactParagraph:
      'لديك سؤال أو مهتم بشراكة؟ يسعدنا أن نسمع منك! تواصل مع فريقنا عن طريق ملء النموذج أدناه، وسنرد عليك في أقرب وقت ممكن!',
    switzerlandWord: 'سويسرا',
  },
  ru: {
    heroPrefix: 'Подарите или побалуйте себя',
    heroHighlight: 'идеальным дуо',
    heroSuffix: 'жилет + шлем IGLOW',
    heroButton:
      'Нажмите здесь, чтобы оплатить и зарезервировать свой дуо-комплект',
    watchNowMain: 'СМОТРЕТЬ СЕЙЧАС',
    watchNowSub: 'Быть заметным, как автомобиль',
    watchSub: 'Умный жилет с поворотниками и стоп-сигналами',
    reserveAction: 'ЗАБРОНИРУЙТЕ',
    reserveNowWord: 'СЕЙЧАС',
    reserveDuoText: 'Ваш Дуо шлем + жилет',
    exclusive: 'ЭКСКЛЮЗИВ',
    duoSpecial: 'СПЕЦИАЛЬНЫЙ ДУО',
    insteadOfLabel: 'вместо',
    duoSpecialDesc:
      'Специальное предложение Black Friday и запуска Kickstarter: дуо-комплект шлем + жилет IGLOW',
    newPricePrefix: 'ОПЛАЧЕНО ВСЕГО',
    discountLinePrefix: 'Мгновенная экономия',
    clickToReserve: 'Нажмите, чтобы забронировать и стать частью успеха.',
    kickstarterButton: 'IGLOW на Kickstarter',
    kickstarterCaption: 'Ваш дуо-комплект IGLOW',
    kickstarterCaptionSub: 'Шлем + Жилет',
    secureSpot: 'Забронируйте своё место',
    secureSpotSub: 'уже сегодня!',
    whatIsOvertitle: 'ЧТО ТАКОЕ IGLOW ?',
    whatIsHtml:
      'Дуо Шлем и Жилет <span style="color:#E30613">IGLOW</span><br/><span style="color:#E30613">360° видимость</span><br/>Благодаря <span style="color:#E30613">поворотникам</span> и <span style="color:#E30613">стоп-сигналам</span><br/>Как у автомобиля, управляемыми <span style="color:#E30613">пультом на руле</span>.',
    safetyOvertitle: 'безопасность',
    safetyTitle: 'Умный жилет и шлем повышенной видимости',
    safetyText:
      'Благодаря современным светодиодным индикаторам жилет обеспечивает улучшенную видимость, особенно в условиях низкой освещённости. Его обтекаемый и эргономичный дизайн гарантирует комфорт и удобство использования, даже с рюкзаком. Шлем дополняет вашу безопасность теми же функциями сигнализации, а также очень мощной передней фарой.',
    flexOvertitle: 'Гибкость',
    flexTitle: 'Умный пульт',
    flexText:
      'Держите взгляд на дороге, контролируя свою безопасность с помощью пульта iGlow – видимость без усилий, на кончиках пальцев.',
    appOvertitle: 'ПРИЛОЖЕНИЕ',
    appTitle: 'GlowSafe: Ваш спутник безопасности на дороге',
    appText:
      'GlowSafe — это ваше мобильное приложение для поиска маршрутов и синхронизации индикаторов Smart Vest. Легко находите свой путь и управляйте поворотниками жилета для повышенной видимости.',
    specsOvertitle: 'Для любителей техники',
    specsTitlePrefix: 'Изучите',
    specsHighlight: 'характеристики',
    swissOvertitle: 'Разработано в Швейцарии',
    swissHighlight: 'Швейцарское качество',
    swissTitle: 'и непревзойдённая безопасность.',
    swissParagraph:
      'Smart Vest — результат более чем 3 лет швейцарских исследований и разработок. Мы стремимся предложить нашим клиентам непревзойдённое качество и соответствие стандартам безопасности. Все электронные компоненты и умные технические ткани полностью разработаны швейцарскими компаниями, что ещё больше укрепляет нашу приверженность швейцарскому мастерству и инновациям.',
    aboutOvertitle: 'О нас',
    aboutTitlePrefix: 'Познакомьтесь с командой',
    aboutHighlight: 'за IGLOW®',
    faqOvertitle: 'Часто задаваемые вопросы',
    faqTitlePrefix: 'Позвольте нам',
    faqHighlight: 'всё объяснить!',
    contactOvertitle: 'Контакты',
    contactTitlePrefix: 'Нужна помощь?',
    contactHighlight: 'Мы здесь для вас!',
    contactParagraph:
      'Есть вопрос или интерес к партнёрству? Мы будем рады услышать вас! Свяжитесь с нашей командой, заполнив форму ниже, и мы ответим вам как можно скорее!',
    switzerlandWord: 'Швейцария',
  },
};

function LanguageSwitcher({ currentLang, onChange }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '6px',
        justifyContent: 'center',
        backgroundColor: '#08080C',
        py: 1,
        minHeight: '40px',
        alignItems: 'center',
      }}
    >
      {LANGUAGES.map((lang) => (
        <Box
          key={lang.code}
          component='button'
          onClick={() => onChange(lang.code)}
          sx={{
            cursor: 'pointer',
            border: lang.code === currentLang ? '2px solid #E30613' : '2px solid transparent',
            borderRadius: '8px',
            background: lang.code === currentLang ? '#1a1a1f' : 'transparent',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '13px',
            padding: '4px 8px',
          }}
        >
          <span style={{ marginRight: 4 }}>{lang.flag}</span>
          {lang.name}
        </Box>
      ))}
    </Box>
  );
}

function Landing() {
  const [currentLang, setCurrentLang] = useState('fr');
  const t = CONTENT[currentLang];

  return (
    <Box overflow='hidden' dir={currentLang === 'ar' ? 'rtl' : 'ltr'}>
      <LanguageSwitcher currentLang={currentLang} onChange={setCurrentLang} />
      <Navbar topOffset='64px' />
      <HeroSection t={t} />
      <WhatIsSection t={t} />
      <SocialSection t={t} />
      <ContactSection t={t} />
      <Footer />
    </Box>
  );
}

function HeroSection({ t }) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#08080C',
      }}
    >
      <NoisyContainer>
        <Box
          sx={{
            width: '100%',
            marginBottom: '60px',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            paddingTop: { xs: '30px', sm: 'calc(60px-10vw)', xl: 0 },
          }}
        >
          <Box
            sx={{
              height: '100%',
              width: '100%',
              position: 'relative',
            }}
          >
            <Box
              sx={{
                height: '100px',
                width: '100%',
                position: 'absolute',
                top: 0,
                background: 'linear-gradient(180deg, #08080C, transparent)',
              }}
            />
            {/* Vidéos temporairement désactivées - fichiers manquants */}
            <Box
              component='video'
              src={topspot1x1}
              sx={{
                width: '100vw',
                display: { xs: 'inline', sm: 'inline', md: 'none' },
              }}
              alt='teaser'
              autoPlay
              loop
              muted
              playsInline
            />
            <Box
              component='video'
              src={topspot16x9}
              sx={{
                width: '100vw',
                display: { xs: 'none', sm: 'none', md: 'inline' },
              }}
              alt='teaser'
              autoPlay
              loop
              muted
              playsInline
            />
            <Box
              sx={{
                height: '100px',
                width: '100%',
                position: 'relative',
                top: '-100px',
                background: 'linear-gradient(0deg, #08080C, transparent)',
              }}
            />
          </Box>
        </Box>
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pt: {
              xs: '60vh',
              sm: '80vh',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              zIndex: '20',
            }}
            maxWidth='770px'
          >
            <Typography variant='h1'>
              {t.heroPrefix}{' '}
              <Typography component='span' variant='h1' color='primary'>
                {t.heroHighlight}
              </Typography>
              {t.heroSuffix ? ` ${t.heroSuffix}` : ''}
            </Typography>
            <EmptySpace under='h1' />
          </Box>
          <EmptySpace under='h2' />

          <CountdownSection t={t} />
          {/* Bouton après le GIF */}
          <Button
            variant='contained'
            color='primary'
            href='/reserve'
            size='large'
            sx={{
              marginBottom: 10,
              backgroundColor: '#FF2200',
              transition: 'transform 0.15s ease, box-shadow 0.15s ease',
              '&:hover': {
                backgroundColor: '#FF2200',
                transform: 'scale(1.08) translateY(-3px)',
                boxShadow:
                  '0 0 6px rgba(255,255,255,0.9), 0 0 16px rgba(255,80,0,1), 0 0 34px rgba(255,20,0,0.95), 0 0 65px rgba(255,0,0,0.8), 0 0 105px rgba(255,20,0,0.55)',
              },
              '&:active': {
                transform: 'scale(0.96) translateY(3px)',
                boxShadow: 'none',
              },
            }}
          >
            {t.heroButton}
          </Button>
        </Container>
        <img
          src={subtractShape}
          style={{
            width: '100%',
            zIndex: 1,
            opacity: 0,
          }}
          alt='substract shape'
        />
      </NoisyContainer>

      <img
        src={subtractShape}
        style={{
          position: 'absolute',
          bottom: '0',
          width: '100%',
          zIndex: 1,
        }}
        alt='substract shape'
      />
    </Box>
  );
}

function WhatIsSection({ t }) {
  const { NIGHT, STATE_GREY, RED } = Palette();
  return (
    <Box backgroundColor='white' color={NIGHT} overflow='hidden'>
      <Container sx={{ width: '100%', pt: 4 }}>
        <Box sx={{ textAlign: 'center', mb: 4 }}>
          <Typography variant='h6' sx={{ color: STATE_GREY, mb: 2 }}>
            {t.whatIsOvertitle}
          </Typography>
          <Typography
            variant='h1'
            component='div'
            sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 'bold' }}
            dangerouslySetInnerHTML={{ __html: t.whatIsHtml }}
          />
        </Box>
        <EmptySpace under='h2' />
        <Box sx={{ position: 'relative' }}>
          <IllustratedParagraph
            overtitle={t.safetyOvertitle}
            title={t.safetyTitle}
            text={t.safetyText}
            imgSrc={vestNoCircle}
            imgTopSrc={helmetCutout}
            circleColor={RED}
            imgMaxWidth='380px'
            textMaxWidth='346px'
          />
        </Box>
        <EmptySpace />
        <IllustratedParagraph
          reverse
          overtitle={t.flexOvertitle}
          title={t.flexTitle}
          text={t.flexText}
          imgSrc={controller}
        />
        <EmptySpace />
        <IllustratedParagraph
          overtitle={t.appOvertitle}
          title={t.appTitle}
          text={t.appText}
          imgSrc={appMockup}
        />
      </Container>
      <Banner variant='black' />
      <Container>
        <EmptySpace />
        <SectionTitle
          overtitle={t.specsOvertitle}
          title={t.specsTitlePrefix}
          highlight={t.specsHighlight}
        />
        <EmptySpace under='h2' />
        <SpecsSection />
        <EmptySpace />
        <SectionTitle
          overtitle={t.swissOvertitle}
          highlight={t.swissHighlight}
          title={t.swissTitle}
          reverse
        />
        <EmptySpace under='h2' />
        <Typography color={STATE_GREY} textAlign='center'>
          {t.swissParagraph}
        </Typography>
      </Container>
      <Box component='img' src={mountain} width='101%' />
      <EmptySpace />
    </Box>
  );
}

function SocialSection({ t }) {
  return (
    <NoisyContainer>
      <Banner top='min(-17vw, -120px)' />
      <Container
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <SectionTitle
          overtitle={t.aboutOvertitle}
          title={t.aboutTitlePrefix}
          highlight={t.aboutHighlight}
        />
        <EmptySpace under='h2' />
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'min(10vw, 80px)',
            justifyContent: 'center',
          }}
        >
          <IdCard src='fabrice.png' name='Fabrice' role='Founder' />
          <IdCard src='alena.png' name='Alena' role='Sewing queen' />
          <IdCard src='mateo.png' name='Mateo' role='Lead Developer' />
          <IdCard src='lucas.png' name='Lucas' role='Electronic Engineer' />
          <IdCard src='maxime.png' name='Maxime' role='Lead Brand Designer' />
          <IdCard
            src='jean-baptiste.png'
            name='Jean-Baptiste'
            role='Videographer'
          />
          <IdCard src='sam.png' name='Sam' role='Digital Media Specialist' />
        </Box>
        <EmptySpace />
      </Container>
    </NoisyContainer>
  );
}

function ContactSection({ t }) {
  const { NIGHT, STATE_GREY } = Palette();

  return (
    <Box backgroundColor='white' color={NIGHT} overflow='hidden'>
      <Container>
        <EmptySpace />
        <SectionTitle
          overtitle={t.faqOvertitle}
          title={t.faqTitlePrefix}
          highlight={t.faqHighlight}
        />
        <EmptySpace under='h2' />
        <FAQSection />
        <EmptySpace />
        <SectionTitle
          overtitle={t.contactOvertitle}
          title={t.contactTitlePrefix}
          highlight={t.contactHighlight}
        />
        <EmptySpace under='h2' />
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'column', md: 'row' },
            gap: 10,
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',
              gap: 8,
              pb: { xs: 0, sm: 0, md: 10 },
            }}
          >
            <Typography color={STATE_GREY} variant='body1'>
              {t.contactParagraph}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <Typography variant='h3'>IGLOW® {t.switzerlandWord}</Typography>
              <Typography variant='body1'>
                Iglow, BP590,
                <br />
                1001 Lausanne,
                <br />
                {t.switzerlandWord}
              </Typography>
              <Typography
                component='a'
                href={'mailto:' + CONTACT_EMAIL}
                color={NIGHT}
              >
                {CONTACT_EMAIL}
              </Typography>
            </Box>
          </Box>
          <FormContact />
        </Box>
      </Container>
      <EmptySpace />
    </Box>
  );
}

function CountdownSection({ t }) {
  const { RED } = Palette();

  return (
    <NoisyContainer>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: 8,
          pb: 15,
          overflow: 'visible',
        }}
      >
        {/* Vidéo trailer - Interverti avec le GIF du gilet */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '770px',
            mb: 4,
            width: '100%',
          }}
        >
          {/* Texte au-dessus de la vidéo */}
          <Typography
            variant='h3'
            sx={{
              color: 'white',
              mb: 1,
              textAlign: 'center',
              fontWeight: 'bold',
              zIndex: 10,
            }}
          >
            {t.watchNowMain}
            <br />
            {t.watchNowSub}
          </Typography>
          <Typography
            variant='h4'
            sx={{
              color: 'white',
              mb: 3,
              textAlign: 'center',
              fontWeight: 'normal',
              zIndex: 10,
            }}
          >
            {t.watchSub}
          </Typography>

          {/* Placeholder pour la vidéo trailer */}
          <video
            controls
            style={{ width: '100%', borderRadius: 30, zIndex: '2' }}
            poster={trailerThumbnail}
          >
            <source src={trailer16x9} />
          </video>
        </Box>

        <Countdown />

        <Button
          variant='contained'
          color='primary'
          href='/reserve'
          size='large'
          sx={{
            marginY: 3,
            backgroundColor: '#FF2200',
            transition: 'transform 0.15s ease, box-shadow 0.15s ease',
            '&:hover': {
              backgroundColor: '#FF2200',
              transform: 'scale(1.08) translateY(-3px)',
              boxShadow:
                '0 0 6px rgba(255,255,255,0.9), 0 0 16px rgba(255,80,0,1), 0 0 34px rgba(255,20,0,0.95), 0 0 65px rgba(255,0,0,0.8), 0 0 105px rgba(255,20,0,0.55)',
            },
            '&:active': {
              transform: 'scale(0.96) translateY(3px)',
              boxShadow: 'none',
            },
          }}
        >
          {t.heroButton}
        </Button>
        <Box
          sx={{
            textAlign: 'center',
            mb: 4,
            maxWidth: '800px',
            width: '100%',
            zIndex: 10,
            position: 'relative',
            overflow: 'visible',
          }}
        >
          <Typography variant='body1' sx={{ color: 'white', fontWeight: 'bold' }}>
            {t.reserveAction}
          </Typography>
          <Typography variant='body1' sx={{ color: RED, fontWeight: 'bold' }}>
            {t.reserveNowWord}
          </Typography>
          <Typography variant='body1' sx={{ mb: 1 }}>
            <Typography component='span' sx={{ color: 'white' }}>
              {t.reserveDuoText}
            </Typography>{' '}
            <Typography
              component='span'
              sx={{ color: RED, fontWeight: 'bold' }}
            >
              IGLOW
            </Typography>
          </Typography>
          <Typography
            sx={{ color: RED, fontWeight: 'bold', fontSize: '1.1rem', mt: 2 }}
          >
            {t.exclusive}
          </Typography>
          <Typography
            sx={{
              color: 'white',
              fontWeight: 900,
              fontSize: '3.5rem',
              lineHeight: 1,
            }}
          >
            BLACK
          </Typography>
          <Typography
            sx={{
              color: RED,
              fontWeight: 900,
              fontSize: '3.5rem',
              lineHeight: 1,
              mb: 2,
            }}
          >
            FRIDAY
          </Typography>

          <Typography sx={{ color: RED, fontWeight: 'bold', mb: 2 }}>
            {t.duoSpecial}
          </Typography>

          <Typography
            sx={{
              color: 'white',
              fontWeight: 900,
              fontSize: '2rem',
            }}
          >
            {t.insteadOfLabel} CHF 199.-
          </Typography>
          <Typography
            sx={{ color: 'white', fontWeight: 900, fontSize: '2rem' }}
          >
            {t.newPricePrefix}
          </Typography>
          <Typography
            sx={{
              color: RED,
              fontWeight: 900,
              fontSize: '3.5rem',
              lineHeight: 1,
              mt: 1,
              mb: 3,
            }}
          >
            CHF 99.-
          </Typography>
          <Typography
            sx={{ color: '#00FF00', fontWeight: 900, fontSize: '1.6rem' }}
          >
            {t.discountLinePrefix}
            <br />
            CHF 100.-
          </Typography>
        </Box>

        <Typography
          variant='body1'
          fontWeight='bold'
          sx={{ mb: 3, textAlign: 'center' }}
        >
          {t.secureSpot}
          <br />
          {t.secureSpotSub}
        </Typography>

        <Button
          variant='contained'
          color='primary'
          size='large'
          href='https://www.kickstarter.com/projects/iglowswiss/iglow-the-smart-bike-jacket-be-seen-be-safe'
          target='_blank'
          sx={{
            backgroundColor: '#05CE78',
            marginBottom: 3,
            textAlign: 'center',
            transition: 'transform 0.15s ease, box-shadow 0.15s ease',
            '&:hover': {
              backgroundColor: '#05CE78',
              transform: 'scale(1.08) translateY(-3px)',
              boxShadow:
                '0 0 10px rgba(5,206,120,0.95), 0 0 25px rgba(5,206,120,0.85), 0 0 50px rgba(5,206,120,0.65), 0 0 90px rgba(5,206,120,0.45)',
            },
            '&:active': {
              transform: 'scale(0.96) translateY(3px)',
              boxShadow: 'none',
            },
          }}
        >
          {t.kickstarterButton}
        </Button>

        <Box
          component='img'
          src={duoHelmetVest}
          alt='iGlow Smart Helmet and Vest Duo'
          sx={{
            display: 'block',
            width: '100%',
            maxWidth: '500px',
            borderRadius: '15px',
            mt: 1,
          }}
        />
        <Typography
          variant='body1'
          sx={{ color: 'white', fontWeight: 'bold', mt: 2, mb: 4, textAlign: 'center' }}
        >
          {t.kickstarterCaption}
          <br />
          {t.kickstarterCaptionSub}
        </Typography>

        <Box
          component='img'
          src={helmet3Views}
          alt='iGlow Smart Helmet - 3 views'
          sx={{
            display: 'block',
            width: '100%',
            maxWidth: '500px',
            borderRadius: '15px',
            mb: 4,
          }}
        />

        <video
          src={jacketHero}
          style={{
            width: '70vw',
            maxWidth: '500px',
            marginTop: '60px',
            marginBottom: '40px',
            position: 'relative',
            left: '10px',
          }}
          alt='jacket'
          autoPlay
          loop
          muted
          playsInline
        />
      </Container>
    </NoisyContainer>
  );
}

export default Landing;
