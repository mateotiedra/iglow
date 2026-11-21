import React, { useState } from 'react';
import './Reserve.css';
import duoHelmetVest from '../../assets/images/iglow-duo-helmet-vest.jpg';

const Reserve = () => {
  const [currentLang, setCurrentLang] = useState('fr');
  const [reservationCounter] = useState(167);

  // Language content object
  const content = {
    fr: {
      tagline: "RÉSERVEZ DÈS AUJOURD'HUI VOTRE",
      title: 'Duo Casque et Gilet',
      highlight: 'IGLOW',
      beSeen: 'pour être vu !',
      payOnlyPrefix: 'Un prix 🎁 de',
      payOnlySuffix: 'le DUO',
      reserveButtons: [
        {
          currency: 'CHF',
          price: 'SEULEMENT 99.-',
          flag: '🇨🇭',
          text: 'Réserver',
          priceId: 'price_1SGkg7ClH97ISv2ltpMYi4DE',
        },
        {
          currency: 'EUR',
          price: 'SEULEMENT 99.-',
          flag: '🇪🇺',
          text: 'Réserver',
          priceId: 'price_1SGkt9ClH97ISv2l2BPtn3ke',
        },
        {
          currency: 'USD',
          price: 'SEULEMENT 99.-',
          flag: '🌍',
          text: 'Réserver',
          priceId: 'price_1SGkweClH97ISv2lbwx0YlrE',
        },
      ],
      swissBadge: 'SWISS MADE SMART VEST',
      insteadOfPrefix: 'au lieu de',
      insteadOfSuffix: '',
      youSave: 'Vous économisez CHF 100.-',
      launchDate: 'LE 27 NOVEMBRE 2026',
      launchTextPrefix: 'Ouverture des ventes',
      blackWord: 'Black',
      fridayWord: 'Friday',
      launchTextSuffix: '',
      socialProof: 'cyclistes ont déjà réservé leur gilet IGLOW',
      benefits: [
        {
          title: 'BLACK FRIDAY',
          description: 'Votre Duo CASQUE + GILET IGLOW<br/>pour seulement <span style="color:#E30613; font-weight:900;">CHF 99.-</span><br/>au lieu de CHF 199.-<br/>soit un énorme rabais de<br/><span style="color:#28a745; font-weight:900; font-size:1.3em;">CHF 100.-</span>',
        },
        {
          title: '-50% de réduction',
          description:
            'Prix le plus bas jamais proposé pour ce niveau de technologie',
        },
        {
          title: 'Livraison Prioritaire',
          description: 'Soyez parmi les premiers à recevoir votre gilet IGLOW',
        },
      ],
    },
    de: {
      tagline: 'RESERVIEREN SIE JETZT IHRE',
      title: 'Helm- und Westen-Duo',
      highlight: 'IGLOW',
      beSeen: 'um gesehen zu werden!',
      payOnlyPrefix: 'Ein 🎁 Preis von',
      payOnlySuffix: 'für das DUO',
      reserveButtons: [
        {
          currency: 'CHF',
          price: 'NUR 99.-',
          flag: '🇨🇭',
          text: 'Reservieren',
          priceId: 'price_1SGkg7ClH97ISv2ltpMYi4DE',
        },
        {
          currency: 'EUR',
          price: 'NUR 99.-',
          flag: '🇪🇺',
          text: 'Reservieren',
          priceId: 'price_1SGkt9ClH97ISv2l2BPtn3ke',
        },
        {
          currency: 'USD',
          price: 'NUR 99.-',
          flag: '🌍',
          text: 'Reservieren',
          priceId: 'price_1SGkweClH97ISv2lbwx0YlrE',
        },
      ],
      swissBadge: 'SWISS MADE SMART VEST',
      insteadOfPrefix: 'statt',
      insteadOfSuffix: '',
      youSave: 'Sie sparen CHF 100.-',
      launchDate: '27. NOVEMBER 2026',
      launchTextPrefix: '',
      blackWord: 'Black',
      fridayWord: 'Friday',
      launchTextSuffix: 'Verkaufsstart',
      socialProof: 'Radfahrer haben bereits ihre IGLOW-Jacke reserviert',
      benefits: [
        {
          title: 'BLACK FRIDAY',
          description: 'Ihr Duo HELM + WESTE IGLOW<br/>für nur <span style="color:#E30613; font-weight:900;">CHF 99.-</span><br/>statt CHF 199.-<br/>ein riesiger Rabatt von<br/><span style="color:#28a745; font-weight:900; font-size:1.3em;">CHF 100.-</span>',
        },
        {
          title: '-50% Rabatt',
          description: 'Niedrigster Preis für diese Technologiestufe',
        },
        {
          title: 'Prioritätslieferung',
          description:
            'Gehören Sie zu den Ersten, die Ihre IGLOW-Jacke erhalten',
        },
      ],
    },
    it: {
      tagline: 'PRENOTA FIN DA OGGI IL TUO',
      title: 'Duo Casco e Gilet',
      highlight: 'IGLOW',
      beSeen: 'per essere visti!',
      payOnlyPrefix: 'Un prezzo 🎁 di',
      payOnlySuffix: 'per il DUO',
      reserveButtons: [
        {
          currency: 'CHF',
          price: 'SOLO 99.-',
          flag: '🇨🇭',
          text: 'Prenota',
          priceId: 'price_1SGkg7ClH97ISv2ltpMYi4DE',
        },
        {
          currency: 'EUR',
          price: 'SOLO 99.-',
          flag: '🇪🇺',
          text: 'Prenota',
          priceId: 'price_1SGkt9ClH97ISv2l2BPtn3ke',
        },
        {
          currency: 'USD',
          price: 'SOLO 99.-',
          flag: '🌍',
          text: 'Prenota',
          priceId: 'price_1SGkweClH97ISv2lbwx0YlrE',
        },
      ],
      swissBadge: 'SWISS MADE SMART VEST',
      insteadOfPrefix: 'invece di',
      insteadOfSuffix: '',
      youSave: 'Risparmi CHF 100.-',
      launchDate: '27 NOVEMBRE 2026',
      launchTextPrefix: 'Apertura delle vendite',
      blackWord: 'Black',
      fridayWord: 'Friday',
      launchTextSuffix: '',
      socialProof: 'ciclisti hanno già prenotato il loro gilet IGLOW',
      benefits: [
        {
          title: 'BLACK FRIDAY',
          description: 'Il tuo Duo CASCO + GILET IGLOW<br/>per soli <span style="color:#E30613; font-weight:900;">CHF 99.-</span><br/>invece di CHF 199.-<br/>ovvero un enorme sconto di<br/><span style="color:#28a745; font-weight:900; font-size:1.3em;">CHF 100.-</span>',
        },
        {
          title: '-50% di sconto',
          description:
            'Il prezzo più basso mai proposto per questo livello di tecnologia',
        },
        {
          title: 'Consegna Prioritaria',
          description: 'Sii tra i primi a ricevere il tuo gilet IGLOW',
        },
      ],
    },
    en: {
      tagline: 'RESERVE YOUR',
      title: 'Helmet and Vest Duo',
      highlight: 'IGLOW',
      beSeen: 'to be seen!',
      payOnlyPrefix: 'A 🎁 price of',
      payOnlySuffix: 'for the DUO',
      reserveButtons: [
        {
          currency: 'CHF',
          price: 'ONLY 99.-',
          flag: '🇨🇭',
          text: 'Reserve',
          priceId: 'price_1SGkg7ClH97ISv2ltpMYi4DE',
        },
        {
          currency: 'EUR',
          price: 'ONLY 99.-',
          flag: '🇪🇺',
          text: 'Reserve',
          priceId: 'price_1SGkt9ClH97ISv2l2BPtn3ke',
        },
        {
          currency: 'USD',
          price: 'ONLY 99.-',
          flag: '🌍',
          text: 'Reserve',
          priceId: 'price_1SGkweClH97ISv2lbwx0YlrE',
        },
      ],
      swissBadge: 'SWISS MADE SMART VEST',
      insteadOfPrefix: 'instead of',
      insteadOfSuffix: '',
      youSave: 'You save CHF 100.-',
      launchDate: 'NOVEMBER 27, 2026',
      launchTextPrefix: '',
      blackWord: 'Black',
      fridayWord: 'Friday',
      launchTextSuffix: 'Sales Opening',
      socialProof: 'cyclists have already reserved their IGLOW vest',
      benefits: [
        {
          title: 'BLACK FRIDAY',
          description: 'Your Duo HELMET + VEST IGLOW<br/>for only <span style="color:#E30613; font-weight:900;">CHF 99.-</span><br/>instead of CHF 199.-<br/>a huge discount of<br/><span style="color:#28a745; font-weight:900; font-size:1.3em;">CHF 100.-</span>',
        },
        {
          title: '+50% OFF',
          description: 'Lowest price ever offered for this level of technology',
        },
        {
          title: 'Priority Delivery',
          description: 'Be among the first to receive your IGLOW vest',
        },
      ],
    },
    es: {
      tagline: 'RESERVE HOY SU',
      title: 'Dúo Casco y Chaleco',
      highlight: 'IGLOW',
      beSeen: '¡para ser visto!',
      payOnlyPrefix: 'Un precio 🎁 de',
      payOnlySuffix: 'para el DUO',
      reserveButtons: [
        {
          currency: 'CHF',
          price: 'SOLO 99.-',
          flag: '🇨🇭',
          text: 'Reservar',
          priceId: 'price_1SGkg7ClH97ISv2ltpMYi4DE',
        },
        {
          currency: 'EUR',
          price: 'SOLO 99.-',
          flag: '🇪🇺',
          text: 'Reservar',
          priceId: 'price_1SGkt9ClH97ISv2l2BPtn3ke',
        },
        {
          currency: 'USD',
          price: 'SOLO 99.-',
          flag: '🌍',
          text: 'Reservar',
          priceId: 'price_1SGkweClH97ISv2lbwx0YlrE',
        },
      ],
      swissBadge: 'SWISS MADE SMART VEST',
      insteadOfPrefix: 'en lugar de',
      insteadOfSuffix: '',
      youSave: 'Ahorras CHF 100.-',
      launchDate: '27 DE NOVIEMBRE DE 2026',
      launchTextPrefix: '',
      blackWord: 'Black',
      fridayWord: 'Friday',
      launchTextSuffix: 'Apertura de ventas',
      socialProof: 'ciclistas ya han reservado su chaqueta IGLOW',
      benefits: [
        {
          title: 'BLACK FRIDAY',
          description: 'Tu Duo CASCO + CHALECO IGLOW<br/>por solo <span style="color:#E30613; font-weight:900;">CHF 99.-</span><br/>en lugar de CHF 199.-<br/>un enorme descuento de<br/><span style="color:#28a745; font-weight:900; font-size:1.3em;">CHF 100.-</span>',
        },
        {
          title: '-50% de descuento',
          description: 'Precio más bajo ofrecido para este nivel de tecnología',
        },
        {
          title: 'Entrega Prioritaria',
          description: 'Sea de los primeros en recibir su chaqueta IGLOW',
        },
      ],
    },
    nl: {
      tagline: 'RESERVEER NU UW',
      title: 'Helm- en Vestduo',
      highlight: 'IGLOW',
      beSeen: 'om gezien te worden!',
      payOnlyPrefix: 'Een 🎁 prijs van',
      payOnlySuffix: 'voor de DUO',
      reserveButtons: [
        {
          currency: 'CHF',
          price: 'SLECHTS 99.-',
          flag: '🇨🇭',
          text: 'Reserveren',
          priceId: 'price_1SGkg7ClH97ISv2ltpMYi4DE',
        },
        {
          currency: 'EUR',
          price: 'SLECHTS 99.-',
          flag: '🇪🇺',
          text: 'Reserveren',
          priceId: 'price_1SGkt9ClH97ISv2l2BPtn3ke',
        },
        {
          currency: 'USD',
          price: 'SLECHTS 99.-',
          flag: '🌍',
          text: 'Reserveren',
          priceId: 'price_1SGkweClH97ISv2lbwx0YlrE',
        },
      ],
      swissBadge: 'SWISS MADE SMART VEST',
      insteadOfPrefix: 'in plaats van',
      insteadOfSuffix: '',
      youSave: 'U bespaart CHF 100.-',
      launchDate: '27 NOVEMBER 2026',
      launchTextPrefix: '',
      blackWord: 'Black',
      fridayWord: 'Friday',
      launchTextSuffix: 'Verkoop opening',
      socialProof: 'fietsers hebben al hun IGLOW-jas gereserveerd',
      benefits: [
        {
          title: 'BLACK FRIDAY',
          description: 'Uw Duo HELM + VEST IGLOW<br/>voor slechts <span style="color:#E30613; font-weight:900;">CHF 99.-</span><br/>in plaats van CHF 199.-<br/>een enorme korting van<br/><span style="color:#28a745; font-weight:900; font-size:1.3em;">CHF 100.-</span>',
        },
        {
          title: '-50% korting',
          description:
            'Laagste prijs ooit aangeboden voor dit technologieniveau',
        },
        {
          title: 'Prioriteitslevering',
          description: 'Wees een van de eersten die uw IGLOW-jas ontvangt',
        },
      ],
    },
    pt: {
      tagline: 'RESERVE HOJE SUA',
      title: 'Duo Capacete e Colete',
      highlight: 'IGLOW',
      beSeen: 'para ser visto!',
      payOnlyPrefix: 'Um preço 🎁 de',
      payOnlySuffix: 'para o DUO',
      reserveButtons: [
        {
          currency: 'CHF',
          price: 'APENAS 99.-',
          flag: '🇨🇭',
          text: 'Reservar',
          priceId: 'price_1SGkg7ClH97ISv2ltpMYi4DE',
        },
        {
          currency: 'EUR',
          price: 'APENAS 99.-',
          flag: '🇪🇺',
          text: 'Reservar',
          priceId: 'price_1SGkt9ClH97ISv2l2BPtn3ke',
        },
        {
          currency: 'USD',
          price: 'APENAS 99.-',
          flag: '🌍',
          text: 'Reservar',
          priceId: 'price_1SGkweClH97ISv2lbwx0YlrE',
        },
      ],
      swissBadge: 'SWISS MADE SMART VEST',
      insteadOfPrefix: 'em vez de',
      insteadOfSuffix: '',
      youSave: 'Você economiza CHF 100.-',
      launchDate: '27 DE NOVEMBRO DE 2026',
      launchTextPrefix: '',
      blackWord: 'Black',
      fridayWord: 'Friday',
      launchTextSuffix: 'Abertura de vendas',
      socialProof: 'ciclistas já reservaram sua jaqueta IGLOW',
      benefits: [
        {
          title: 'BLACK FRIDAY',
          description: 'Seu Duo CAPACETE + COLETE IGLOW<br/>por apenas <span style="color:#E30613; font-weight:900;">CHF 99.-</span><br/>em vez de CHF 199.-<br/>um enorme desconto de<br/><span style="color:#28a745; font-weight:900; font-size:1.3em;">CHF 100.-</span>',
        },
        {
          title: '-50% de desconto',
          description:
            'Preço mais baixo já oferecido para este nível de tecnologia',
        },
        {
          title: 'Entrega Prioritária',
          description: 'Esteja entre os primeiros a receber sua jaqueta IGLOW',
        },
      ],
    },
    hi: {
      tagline: 'आज ही अपना रिजर्व करें',
      title: 'हेलमेट और जैकेट डुओ',
      highlight: 'IGLOW',
      beSeen: 'दिखने के लिए!',
      payOnlyPrefix: 'DUO के लिए',
      payOnlySuffix: 'का 🎁 जैसा दाम',
      reserveButtons: [
        {
          currency: 'CHF',
          price: 'केवल 99.-',
          flag: '🇨🇭',
          text: 'रिजर्व करें',
          priceId: 'price_1SGkg7ClH97ISv2ltpMYi4DE',
        },
        {
          currency: 'EUR',
          price: 'केवल 99.-',
          flag: '🇪🇺',
          text: 'रिजर्व करें',
          priceId: 'price_1SGkt9ClH97ISv2l2BPtn3ke',
        },
        {
          currency: 'USD',
          price: 'केवल 99.-',
          flag: '🌍',
          text: 'रिजर्व करें',
          priceId: 'price_1SGkweClH97ISv2lbwx0YlrE',
        },
      ],
      swissBadge: 'SWISS MADE SMART VEST',
      insteadOfPrefix: '',
      insteadOfSuffix: 'के बजाय',
      youSave: 'आप CHF 100.- बचाते हैं',
      launchDate: '27 नवंबर 2026',
      launchTextPrefix: '',
      blackWord: 'Black',
      fridayWord: 'Friday',
      launchTextSuffix: 'बिक्री शुरुआत',
      socialProof: 'साइकिल चालकों ने पहले ही अपनी IGLOW जैकेट आरक्षित कर ली है',
      benefits: [
        {
          title: 'BLACK FRIDAY',
          description: 'आपका डुओ हेलमेट + जैकेट IGLOW<br/>सिर्फ <span style="color:#E30613; font-weight:900;">CHF 99.-</span> में<br/>CHF 199.- के बजाय<br/>यानी<br/><span style="color:#28a745; font-weight:900; font-size:1.3em;">CHF 100.-</span> की जबरदस्त छूट',
        },
        {
          title: '-50% छूट',
          description: 'इस प्रौद्योगिकी स्तर के लिए सबसे कम कीमत',
        },
        {
          title: 'प्राथमिकता डिलीवरी',
          description:
            'अपनी IGLOW जैकेट प्राप्त करने वाले पहले लोगों में शामिल हों',
        },
      ],
    },
    ar: {
      tagline: 'احجز اليوم',
      title: 'ثنائي الخوذة والسترة',
      highlight: 'IGLOW',
      beSeen: 'لتكون مرئياً!',
      payOnlyPrefix: 'سعر 🎁 بـ',
      payOnlySuffix: 'للـ DUO',
      reserveButtons: [
        {
          currency: 'CHF',
          price: 'فقط 99.-',
          flag: '🇨🇭',
          text: 'احجز',
          priceId: 'price_1SGkg7ClH97ISv2ltpMYi4DE',
        },
        {
          currency: 'EUR',
          price: 'فقط 99.-',
          flag: '🇪🇺',
          text: 'احجز',
          priceId: 'price_1SGkt9ClH97ISv2l2BPtn3ke',
        },
        {
          currency: 'USD',
          price: 'فقط 99.-',
          flag: '🌍',
          text: 'احجز',
          priceId: 'price_1SGkweClH97ISv2lbwx0YlrE',
        },
      ],
      swissBadge: 'SWISS MADE SMART VEST',
      insteadOfPrefix: 'بدلاً من',
      insteadOfSuffix: '',
      youSave: 'توفر CHF 100.-',
      launchDate: '27 نوفمبر 2026',
      launchTextPrefix: '',
      blackWord: 'Black',
      fridayWord: 'Friday',
      launchTextSuffix: 'افتتاح المبيعات',
      socialProof: 'راكبي الدراجات قد حجزوا بالفعل سترة IGLOW الخاصة بهم',
      benefits: [
        {
          title: 'BLACK FRIDAY',
          description: 'ثنائيك خوذة + سترة IGLOW<br/>بـ <span style="color:#E30613; font-weight:900;">CHF 99.-</span> فقط<br/>بدلاً من CHF 199.-<br/>أي خصم ضخم قدره<br/><span style="color:#28a745; font-weight:900; font-size:1.3em;">CHF 100.-</span>',
        },
        {
          title: '-50% خصم',
          description: 'أقل سعر يتم تقديمه لهذا المستوى من التكنولوجيا',
        },
        {
          title: 'تسليم مفضل',
          description: 'كن من أوائل من يتلقون سترة IGLOW الخاصة بك',
        },
      ],
    },
    ru: {
      tagline: 'ЗАБРОНИРУЙТЕ СЕГОДНЯ',
      title: 'Дуо шлем и жилет',
      highlight: 'IGLOW',
      beSeen: 'чтобы быть заметным!',
      payOnlyPrefix: '🎁 цена',
      payOnlySuffix: 'за DUO',
      reserveButtons: [
        {
          currency: 'CHF',
          price: 'ТОЛЬКО 99.-',
          flag: '🇨🇭',
          text: 'Забронировать',
          priceId: 'price_1SGkg7ClH97ISv2ltpMYi4DE',
        },
        {
          currency: 'EUR',
          price: 'ТОЛЬКО 99.-',
          flag: '🇪🇺',
          text: 'Забронировать',
          priceId: 'price_1SGkt9ClH97ISv2l2BPtn3ke',
        },
        {
          currency: 'USD',
          price: 'ТОЛЬКО 99.-',
          flag: '🌍',
          text: 'Забронировать',
          priceId: 'price_1SGkweClH97ISv2lbwx0YlrE',
        },
      ],
      swissBadge: 'SWISS MADE SMART VEST',
      insteadOfPrefix: 'вместо',
      insteadOfSuffix: '',
      youSave: 'Вы экономите CHF 100.-',
      launchDate: '27 НОЯБРЯ 2026',
      launchTextPrefix: '',
      blackWord: 'Black',
      fridayWord: 'Friday',
      launchTextSuffix: 'Начало продаж',
      socialProof: 'велосипедистов уже забронировали свою куртку IGLOW',
      benefits: [
        {
          title: 'BLACK FRIDAY',
          description: 'Ваш Дуо ШЛЕМ + ЖИЛЕТ IGLOW<br/>всего за <span style="color:#E30613; font-weight:900;">CHF 99.-</span><br/>вместо CHF 199.-<br/>то есть огромная скидка<br/><span style="color:#28a745; font-weight:900; font-size:1.3em;">CHF 100.-</span>',
        },
        {
          title: '-50% скидка',
          description: 'Самая низкая цена для этого уровня технологии',
        },
        {
          title: 'Приоритетная доставка',
          description: 'Будьте среди первых, кто получит свою куртку IGLOW',
        },
      ],
    },
  };

  const languages = [
    { code: 'fr', name: 'FR', flagClass: 'flag-fr' },
    { code: 'de', name: 'DE', flagClass: 'flag-de' },
    { code: 'it', name: 'IT', flagClass: 'flag-it' },
    { code: 'en', name: 'EN', flagClass: 'flag-en' },
    { code: 'es', name: 'ES', flagClass: 'flag-es' },
    { code: 'nl', name: 'NL', flagClass: 'flag-nl' },
    { code: 'pt', name: 'PT', flagClass: 'flag-pt' },
    { code: 'hi', name: 'HI', flagClass: 'flag-hi' },
    { code: 'ar', name: 'AR', flagClass: 'flag-ar' },
    { code: 'ru', name: 'RU', flagClass: 'flag-ru' },
  ];

  const redirectToStripe = (priceId) => {
    // Build success and cancel URLs with language parameter
    const baseUrl = window.location.origin;
    const successUrl = `${baseUrl}/result?lang=${currentLang}&type=success`;
    const cancelUrl = `${baseUrl}/result?lang=${currentLang}&type=cancel`;

    // Map price IDs to Stripe Buy Button checkout URLs
    const stripeCheckoutUrls = {
      price_1SGkg7ClH97ISv2ltpMYi4DE:
        'https://buy.stripe.com/5kQ9AS7iG2SpeZGdqVgQE03', // CHF 99.-
      price_1SGkt9ClH97ISv2l2BPtn3ke:
        'https://buy.stripe.com/dRm28qeL8boVaJqcmRgQE04', // EUR 99.-
      price_1SGkweClH97ISv2lbwx0YlrE:
        'https://buy.stripe.com/28E4gyeL8eB7aJq0E9gQE05', // USD 99.-
    };

    const checkoutUrl = stripeCheckoutUrls[priceId];

    if (!checkoutUrl) {
      console.error('Invalid price ID:', priceId);
      return;
    }

    // Redirect to Stripe Checkout with success and cancel URLs
    window.location.href = `${checkoutUrl}?success_url=${encodeURIComponent(
      successUrl
    )}&cancel_url=${encodeURIComponent(cancelUrl)}`;
  };

  const handleSetLang = (lang) => {
    setCurrentLang(lang);
  };

  const renderLedCircle = (size = 'default') => {
    const dotCount = 8;
    const dots = [];
    for (let i = 0; i < dotCount; i++) {
      dots.push(<span key={i} className='led-dot'></span>);
    }
    return (
      <span
        className={`led-circle ${size === 'mini' ? 'led-circle-mini' : ''}`}
      >
        {dots}
      </span>
    );
  };

  const renderIglowIcon = () => {
    const dotCount = 8;
    const dots = [];
    for (let i = 0; i < dotCount; i++) {
      dots.push(<span key={i} className='mini-dot'></span>);
    }
    return <div className='iglow-icon'>{dots}</div>;
  };

  const currentContent = content[currentLang] || content.fr;

  return (
    <div className='reserve-page'>
      {/* Header */}
      <header>
        <div className='header-content'>
          <div className='lang-switcher'>
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`lang-btn ${
                  currentLang === lang.code ? 'active' : ''
                }`}
                onClick={() => handleSetLang(lang.code)}
                data-flag={lang.code}
              >
                <span className={`flag-icon ${lang.flagClass}`}>
                  {lang.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className='hero'>
        <div className='container'>
          <div className='hero-logo'>
            <img
              src='https://i.imgur.com/ADUy96s.png'
              alt='iGlow Logo'
              style={{
                maxWidth: '450px',
                height: 'auto',
                margin: '0 auto 60px',
                display: 'block',
              }}
            />
          </div>
          <p className='tagline' style={{ fontSize: '36px' }}>
            {currentContent.tagline}
          </p>
          <h1>
            {currentContent.title}{' '}
            <span className='highlight'>{currentContent.highlight}</span>{' '}
            {currentContent.beSeen}
          </h1>
          <p
            style={{
              color: '#fff',
              fontSize: '28px',
              fontWeight: 'bold',
              margin: '0 0 20px',
            }}
          >
            {currentContent.payOnlyPrefix}{' '}
            <span style={{ color: '#E30613' }}>CHF 99.-</span>{' '}
            {currentContent.payOnlySuffix}
          </p>
          <img
            src={duoHelmetVest}
            alt='iGlow Smart Helmet and Vest Duo'
            className='vest-image'
            style={{
              display: 'block',
              margin: '60px auto',
              maxWidth: '700px',
              width: '100%',
              borderRadius: '15px',
            }}
          />
          <div
            className='reserve-buttons-container'
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '15px',
              margin: '40px 0',
            }}
          >
            {(() => {
              const button = currentContent.reserveButtons[0];
              const [priceWord, priceNumber] = button.price.split(' ');
              return (
                <button
                  onClick={() => redirectToStripe(button.priceId)}
                  className='btn btn-primary'
                >
                  <span className='flag-emoji' style={{ fontSize: '1.5em' }}>
                    {button.flag}
                  </span>
                  <span style={{ fontWeight: '900', fontSize: '1.3em' }}>
                    {button.text}
                  </span>
                  <br />
                  <span style={{ fontWeight: '700' }}>{priceWord}</span>{' '}
                  <span style={{ fontWeight: '900', fontSize: '1.8em' }}>
                    {priceNumber}
                  </span>{' '}
                  <span style={{ fontWeight: '900', fontSize: '1.2em' }}>
                    {button.currency}
                  </span>
                </button>
              );
            })()}
            <span style={{ color: '#fff', fontSize: '1.3em' }}>
              {currentContent.insteadOfPrefix}{' '}
              <span className='price-struck' style={{ fontSize: '1.2em' }}>
                CHF 199.-
              </span>{' '}
              {currentContent.insteadOfSuffix}
            </span>
            <span
              style={{
                color: '#28a745',
                fontWeight: '900',
                fontSize: '2em',
              }}
            >
              {currentContent.youSave}
            </span>
          </div>
          <div className='swiss-badge'>
            <div className='swiss-flag'></div>
            <span>{currentContent.swissBadge}</span>
          </div>
        </div>
      </section>

      {/* Scrolling Banner */}
      <section className='scrolling-banner'>
        <div className='banner-content'>
          {[...Array(24)].map((_, index) => {
            const texts = ['be safe', 'be seen', 'be visible'];
            const text = texts[index % 3];
            return (
              <span key={index} className='banner-item'>
                {text}
                {renderLedCircle()}
              </span>
            );
          })}
        </div>
      </section>

      {/* Countdown Section */}
      <section className='countdown'>
        <div className='container'>
          <h2>
            {currentContent.launchTextPrefix && (
              <>
                {currentContent.launchTextPrefix}
                <br />
              </>
            )}
            <span style={{ color: '#000', fontSize: '1.7em' }}>
              {currentContent.blackWord}
            </span>{' '}
            <span style={{ color: '#fff', fontSize: '1.7em' }}>
              {currentContent.fridayWord}
            </span>
            {currentContent.launchTextSuffix && (
              <>
                <br />
                {currentContent.launchTextSuffix}
              </>
            )}
            <br />
            <span className='date-frame'>{currentContent.launchDate}</span>
            <br />
            <a
              href='https://iglow.swiss'
              target='_blank'
              rel='noopener noreferrer'
              className='platform iglow-black'
              style={{ display: 'inline-block', textDecoration: 'none' }}
            >
              IGLOW.SWISS
            </a>
            {' & '}
            <a
              href='https://www.kickstarter.com/projects/iglowswiss/iglow-the-smart-bike-jacket-be-seen-be-safe'
              target='_blank'
              rel='noopener noreferrer'
              className='platform kickstarter-green'
              style={{ display: 'inline-block', textDecoration: 'none' }}
            >
              KICKSTARTER.COM
            </a>
          </h2>
        </div>
      </section>

      {/* Reserve Section */}
      <section className='reserve-section'>
        <div className='container'>
          <div className='benefits'>
            {currentContent.benefits.map((benefit, index) => (
              <div key={index} className='benefit'>
                <div className='benefit-icon'>{renderIglowIcon()}</div>
                <h3 style={index === 1 ? { color: '#E30613' } : undefined}>
                  {benefit.title}
                </h3>
                {index === 0 ? (
                  <p
                    style={{ fontSize: '1.6rem', color: '#0a0a0a' }}
                    dangerouslySetInnerHTML={{ __html: benefit.description }}
                  ></p>
                ) : (
                  <p
                    dangerouslySetInnerHTML={{ __html: benefit.description }}
                  ></p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className='container'>
          <p>&copy; 2026 iGlow. All rights reserved.</p>
          <p>
            <a href='/legal-notices'>Legal Notices</a> |
            <a href='/privacy-policy'>Privacy Policy</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Reserve;
