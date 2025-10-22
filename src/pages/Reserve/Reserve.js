import React, { useState } from 'react';
import './Reserve.css';

const Reserve = () => {
  const [currentLang, setCurrentLang] = useState('fr');
  const [reservationCounter] = useState(167);

  // Language content object
  const content = {
    fr: {
      tagline: "RÉSERVEZ DÈS AUJOURD'HUI VOTRE",
      title: 'Smart Bike Jacket',
      highlight: 'IGLOW',
      reserveButtons: [
        {
          currency: 'CHF',
          price: '1',
          flag: '🇨🇭',
          text: 'Réserver',
          priceId: 'price_1SGkg7ClH97ISv2ltpMYi4DE',
        },
        {
          currency: 'EUR',
          price: '1',
          flag: '🇪🇺',
          text: 'Réserver',
          priceId: 'price_1SGkt9ClH97ISv2l2BPtn3ke',
        },
        {
          currency: 'USD',
          price: '1',
          flag: '🌍',
          text: 'Réserver',
          priceId: 'price_1SGkweClH97ISv2lbwx0YlrE',
        },
      ],
      swissBadge: 'SWISS MADE SMART JACKET',
      launchDate: 'LE 18 NOVEMBRE 2025',
      launchText: 'Ouverture des ventes',
      socialProof: 'cyclistes ont déjà réservé leur gilet IGLOW',
      benefits: [
        {
          title: 'Accès Prioritaire',
          description: 'Super Early Bird à CHF 155.- au lieu de CHF 259.-',
        },
        {
          title: 'Économisez CHF 104.-',
          description:
            'Prix le plus bas jamais proposé pour ce niveau de technologie',
        },
        {
          title: 'Livraison Prioritaire',
          description: 'Soyez parmi les premiers à recevoir votre gilet IGLOW',
        },
      ],
    },
    en: {
      tagline: 'RESERVE YOUR',
      title: 'Smart Bike Jacket',
      highlight: 'IGLOW',
      reserveButtons: [
        {
          currency: 'CHF',
          price: '1',
          flag: '🇨🇭',
          text: 'Reserve',
          priceId: 'price_1SGkg7ClH97ISv2ltpMYi4DE',
        },
        {
          currency: 'EUR',
          price: '1',
          flag: '🇪🇺',
          text: 'Reserve',
          priceId: 'price_1SGkt9ClH97ISv2l2BPtn3ke',
        },
        {
          currency: 'USD',
          price: '1',
          flag: '🌍',
          text: 'Reserve',
          priceId: 'price_1SGkweClH97ISv2lbwx0YlrE',
        },
      ],
      swissBadge: 'SWISS MADE SMART JACKET',
      launchDate: 'NOVEMBER 18, 2025',
      launchText: 'Sales Opening',
      socialProof: 'cyclists have already reserved their IGLOW jacket',
      benefits: [
        {
          title: 'Priority Access',
          description: 'Super Early Bird at CHF 155.- instead of CHF 259.-',
        },
        {
          title: 'Save CHF 104.-',
          description: 'Lowest price ever offered for this level of technology',
        },
        {
          title: 'Priority Delivery',
          description: 'Be among the first to receive your IGLOW jacket',
        },
      ],
    },
    de: {
      tagline: 'RESERVIEREN SIE JETZT IHRE',
      title: 'Smart Bike Jacket',
      highlight: 'IGLOW',
      reserveButtons: [
        {
          currency: 'CHF',
          price: '1',
          flag: '🇨🇭',
          text: 'Reservieren',
          priceId: 'price_1SGkg7ClH97ISv2ltpMYi4DE',
        },
        {
          currency: 'EUR',
          price: '1',
          flag: '🇪🇺',
          text: 'Reservieren',
          priceId: 'price_1SGkt9ClH97ISv2l2BPtn3ke',
        },
        {
          currency: 'USD',
          price: '1',
          flag: '🌍',
          text: 'Reservieren',
          priceId: 'price_1SGkweClH97ISv2lbwx0YlrE',
        },
      ],
      swissBadge: 'SWISS MADE SMART JACKET',
      launchDate: '18. NOVEMBER 2025',
      launchText: 'Verkaufsstart',
      socialProof: 'Radfahrer haben bereits ihre IGLOW-Jacke reserviert',
      benefits: [
        {
          title: 'Prioritätszugang',
          description: 'Super Early Bird für CHF 155.- statt CHF 259.-',
        },
        {
          title: 'Sparen Sie CHF 104.-',
          description: 'Niedrigster Preis für diese Technologiestufe',
        },
        {
          title: 'Prioritätslieferung',
          description:
            'Gehören Sie zu den Ersten, die Ihre IGLOW-Jacke erhalten',
        },
      ],
    },
    es: {
      tagline: 'RESERVE HOY SU',
      title: 'Smart Bike Jacket',
      highlight: 'IGLOW',
      reserveButtons: [
        {
          currency: 'CHF',
          price: '1',
          flag: '🇨🇭',
          text: 'Reservar',
          priceId: 'price_1SGkg7ClH97ISv2ltpMYi4DE',
        },
        {
          currency: 'EUR',
          price: '1',
          flag: '🇪🇺',
          text: 'Reservar',
          priceId: 'price_1SGkt9ClH97ISv2l2BPtn3ke',
        },
        {
          currency: 'USD',
          price: '1',
          flag: '🌍',
          text: 'Reservar',
          priceId: 'price_1SGkweClH97ISv2lbwx0YlrE',
        },
      ],
      swissBadge: 'SWISS MADE SMART JACKET',
      launchDate: '18 DE NOVIEMBRE DE 2025',
      launchText: 'Apertura de ventas',
      socialProof: 'ciclistas ya han reservado su chaqueta IGLOW',
      benefits: [
        {
          title: 'Acceso Prioritario',
          description: 'Super Early Bird a CHF 155.- en lugar de CHF 259.-',
        },
        {
          title: 'Ahorre CHF 104.-',
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
      title: 'Smart Bike Jacket',
      highlight: 'IGLOW',
      reserveButtons: [
        {
          currency: 'CHF',
          price: '1',
          flag: '🇨🇭',
          text: 'Reserveren',
          priceId: 'price_1SGkg7ClH97ISv2ltpMYi4DE',
        },
        {
          currency: 'EUR',
          price: '1',
          flag: '🇪🇺',
          text: 'Reserveren',
          priceId: 'price_1SGkt9ClH97ISv2l2BPtn3ke',
        },
        {
          currency: 'USD',
          price: '1',
          flag: '🌍',
          text: 'Reserveren',
          priceId: 'price_1SGkweClH97ISv2lbwx0YlrE',
        },
      ],
      swissBadge: 'SWISS MADE SMART JACKET',
      launchDate: '18 NOVEMBER 2025',
      launchText: 'Verkoop opening',
      socialProof: 'fietsers hebben al hun IGLOW-jas gereserveerd',
      benefits: [
        {
          title: 'Prioriteitstoegang',
          description:
            'Super Early Bird voor CHF 155.- in plaats van CHF 259.-',
        },
        {
          title: 'Bespaar CHF 104.-',
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
      title: 'Smart Bike Jacket',
      highlight: 'IGLOW',
      reserveButtons: [
        {
          currency: 'CHF',
          price: '1',
          flag: '🇨🇭',
          text: 'Reservar',
          priceId: 'price_1SGkg7ClH97ISv2ltpMYi4DE',
        },
        {
          currency: 'EUR',
          price: '1',
          flag: '🇪🇺',
          text: 'Reservar',
          priceId: 'price_1SGkt9ClH97ISv2l2BPtn3ke',
        },
        {
          currency: 'USD',
          price: '1',
          flag: '🌍',
          text: 'Reservar',
          priceId: 'price_1SGkweClH97ISv2lbwx0YlrE',
        },
      ],
      swissBadge: 'SWISS MADE SMART JACKET',
      launchDate: '18 DE NOVEMBRO DE 2025',
      launchText: 'Abertura de vendas',
      socialProof: 'ciclistas já reservaram sua jaqueta IGLOW',
      benefits: [
        {
          title: 'Acesso Prioritário',
          description: 'Super Early Bird por CHF 155.- em vez de CHF 259.-',
        },
        {
          title: 'Economize CHF 104.-',
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
      title: 'Smart Bike Jacket',
      highlight: 'IGLOW',
      reserveButtons: [
        {
          currency: 'CHF',
          price: '1',
          flag: '🇨🇭',
          text: 'रिजर्व करें',
          priceId: 'price_1SGkg7ClH97ISv2ltpMYi4DE',
        },
        {
          currency: 'EUR',
          price: '1',
          flag: '🇪🇺',
          text: 'रिजर्व करें',
          priceId: 'price_1SGkt9ClH97ISv2l2BPtn3ke',
        },
        {
          currency: 'USD',
          price: '1',
          flag: '🌍',
          text: 'रिजर्व करें',
          priceId: 'price_1SGkweClH97ISv2lbwx0YlrE',
        },
      ],
      swissBadge: 'SWISS MADE SMART JACKET',
      launchDate: '18 नवंबर 2025',
      launchText: 'बिक्री शुरुआत',
      socialProof: 'साइकिल चालकों ने पहले ही अपनी IGLOW जैकेट आरक्षित कर ली है',
      benefits: [
        {
          title: 'प्राथमिकता पहुंच',
          description: 'सुपर अर्ली बर्ड CHF 155.- में CHF 259.- के बजाय',
        },
        {
          title: 'CHF 104.- बचाएं',
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
      title: 'Smart Bike Jacket',
      highlight: 'IGLOW',
      reserveButtons: [
        {
          currency: 'CHF',
          price: '1',
          flag: '🇨🇭',
          text: 'احجز',
          priceId: 'price_1SGkg7ClH97ISv2ltpMYi4DE',
        },
        {
          currency: 'EUR',
          price: '1',
          flag: '🇪🇺',
          text: 'احجز',
          priceId: 'price_1SGkt9ClH97ISv2l2BPtn3ke',
        },
        {
          currency: 'USD',
          price: '1',
          flag: '🌍',
          text: 'احجز',
          priceId: 'price_1SGkweClH97ISv2lbwx0YlrE',
        },
      ],
      swissBadge: 'SWISS MADE SMART JACKET',
      launchDate: '18 نوفمبر 2025',
      launchText: 'افتتاح المبيعات',
      socialProof: 'راكبي الدراجات قد حجزوا بالفعل سترة IGLOW الخاصة بهم',
      benefits: [
        {
          title: 'وصول مفضل',
          description: 'سوبر إيرلي بيرد بـ CHF 155.- بدلاً من CHF 259.-',
        },
        {
          title: 'وفر CHF 104.-',
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
      title: 'Smart Bike Jacket',
      highlight: 'IGLOW',
      reserveButtons: [
        {
          currency: 'CHF',
          price: '1',
          flag: '🇨🇭',
          text: 'Забронировать',
          priceId: 'price_1SGkg7ClH97ISv2ltpMYi4DE',
        },
        {
          currency: 'EUR',
          price: '1',
          flag: '🇪🇺',
          text: 'Забронировать',
          priceId: 'price_1SGkt9ClH97ISv2l2BPtn3ke',
        },
        {
          currency: 'USD',
          price: '1',
          flag: '🌍',
          text: 'Забронировать',
          priceId: 'price_1SGkweClH97ISv2lbwx0YlrE',
        },
      ],
      swissBadge: 'SWISS MADE SMART JACKET',
      launchDate: '18 НОЯБРЯ 2025',
      launchText: 'Начало продаж',
      socialProof: 'велосипедистов уже забронировали свою куртку IGLOW',
      benefits: [
        {
          title: 'Приоритетный доступ',
          description: 'Супер ранняя птица за CHF 155.- вместо CHF 259.-',
        },
        {
          title: 'Сэкономьте CHF 104.-',
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
    { code: 'en', name: 'EN', flagClass: 'flag-en' },
    { code: 'de', name: 'DE', flagClass: 'flag-de' },
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
        'https://buy.stripe.com/6oUdR86eC78F04M3QlgQE02', // CHF
      price_1SGkt9ClH97ISv2l2BPtn3ke:
        'https://buy.stripe.com/8x29ASfPc64B2cUcmRgQE01', // EUR
      price_1SGkweClH97ISv2lbwx0YlrE:
        'https://buy.stripe.com/fZu00igTg9gN04Mfz3gQE00', // USD
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
            <span className='highlight'>{currentContent.highlight}</span>
          </h1>
          <img
            src='https://i.imgur.com/H7slDFY.gif'
            alt='iGlow Smart Jacket'
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
              textAlign: 'center',
              margin: '40px 0',
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'nowrap',
              gap: '5px',
              overflowX: 'auto',
            }}
          >
            {currentContent.reserveButtons.map((button, index) => (
              <button
                key={index}
                onClick={() => redirectToStripe(button.priceId)}
                className={`btn ${
                  index === 0
                    ? 'btn-primary'
                    : index === 1
                    ? 'btn-secondary'
                    : 'btn-tertiary'
                }`}
              >
                <span className='flag-emoji' style={{ fontSize: '1.5em' }}>
                  {button.flag}
                </span>
                {button.text}
                <br />
                <span style={{ fontWeight: '900', fontSize: '1.2em' }}>
                  {button.price} {button.currency}
                </span>
              </button>
            ))}
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
            {currentContent.launchText}
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
          <div className='social-proof'>
            <p>
              <strong
                id='reservation-counter'
                style={{
                  display: 'block',
                  fontSize: '60px',
                  lineHeight: '1',
                  marginBottom: '10px',
                }}
              >
                {reservationCounter}
              </strong>
              {currentContent.socialProof}
            </p>
          </div>

          <div className='benefits'>
            {currentContent.benefits.map((benefit, index) => (
              <div key={index} className='benefit'>
                <div className='benefit-icon'>{renderIglowIcon()}</div>
                <h3>{benefit.title}</h3>
                {benefit.description.includes(
                  'Super Early Bird at CHF 155.-'
                ) ? (
                  <p
                    style={{ fontSize: '2.5rem', fontWeight: 'bold' }}
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
          <p>&copy; 2025 iGlow. All rights reserved.</p>
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
