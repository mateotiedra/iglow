import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Result.css';

const Result = () => {
  const [currentLang, setCurrentLang] = useState('fr');

  useEffect(() => {
    // Get language from URL or browser
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');

    if (
      urlLang &&
      ['fr', 'en', 'de', 'es', 'nl', 'pt', 'hi', 'ar', 'ru'].includes(urlLang)
    ) {
      setCurrentLang(urlLang);
    } else {
      const browserLang = navigator.language || navigator.userLanguage;
      const langCode = browserLang.split('-')[0];

      if (
        ['fr', 'en', 'de', 'es', 'nl', 'pt', 'hi', 'ar', 'ru'].includes(
          langCode
        )
      ) {
        setCurrentLang(langCode);
      }
    }

    // Increment reservation counter
    try {
      let count = parseInt(localStorage.getItem('iglow-reservations')) || 167;
      count++;
      localStorage.setItem('iglow-reservations', count);
      console.log(`🎯 Paiement réussi ! Compteur: ${count} réservations`);
    } catch (error) {
      console.error('❌ Erreur compteur:', error);
    }

    // Update page title
    document.title = 'iGlow - Réservation Confirmée ✅';
  }, []);

  const content = {
    fr: {
      title: 'Félicitations !',
      message:
        'Votre réservation pour le <span style="color:#E30613; font-weight:bold;">Smart Bike Vest IGLOW</span> a été confirmée avec succès ! Bienvenue dans l\'aventure de la mobilité intelligente.',
      confirmedTitle: 'RÉSERVATION CONFIRMÉE',
      confirmedItems: [
        'Paiement de 1.- traité avec succès',
        'Email de confirmation envoyé',
        'Accès prioritaire sécurisé pour le 18 novembre 2025',
        'Super Early Bird à <span style="color:#fff; font-weight:bold; font-size:1.2em;">CHF</span> <span style="color:#E30613; font-weight:bold; font-size:1.2em;">155.-</span> (au lieu de <span style="color:#fff; position:relative; display:inline-block;">CHF<span style="position:absolute; top:0; left:15px; width:55px; height:100%; background:linear-gradient(to bottom right, transparent 46%, #E30613 48%, #E30613 52%, transparent 54%); pointer-events:none;"></span> 259.-</span>)',
        'Économie garantie de <span style="color:#fff; font-weight:bold; font-size:1.2em;">CHF</span> <span style="color:#E30613; font-weight:bold; font-size:1.2em;">104.-</span>',
      ],
      nextStepsTitle: '👀 Prochaines Étapes',
      nextStepsItems: [
        'Surveillance de votre boîte email pour les mises à jour',
        'Accès exclusif au lancement Kickstarter',
        'Livraison prioritaire',
        'Support client dédié',
      ],
      backHome: "Retour à l'Accueil",
      contactUs: 'Nous Contacter',
      showIcon: false,
    },
    en: {
      title: 'Congratulations!',
      message:
        'Your reservation for the <span style="color:#E30613; font-weight:bold;">Smart Bike Vest IGLOW</span> has been successfully confirmed! Welcome to the smart mobility adventure.',
      confirmedTitle: 'RESERVATION CONFIRMED',
      confirmedItems: [
        'Payment of 1.- processed successfully',
        'Confirmation email sent',
        'Priority access secured for November 18, 2025',
        'Super Early Bird at <span style="color:#fff; font-weight:bold; font-size:1.2em;">CHF</span> <span style="color:#E30613; font-weight:bold; font-size:1.2em;">155.-</span> (instead of <span style="color:#fff; position:relative; display:inline-block;">CHF<span style="position:absolute; top:0; left:15px; width:55px; height:100%; background:linear-gradient(to bottom right, transparent 46%, #E30613 48%, #E30613 52%, transparent 54%); pointer-events:none;"></span> 259.-</span>)',
        'Guaranteed savings of <span style="color:#fff; font-weight:bold; font-size:1.2em;">CHF</span> <span style="color:#E30613; font-weight:bold; font-size:1.2em;">104.-</span>',
      ],
      nextStepsTitle: '👀 Next Steps',
      nextStepsItems: [
        'Monitor your inbox for updates',
        'Exclusive access to Kickstarter launch',
        'Priority delivery',
        'Dedicated customer support',
      ],
      backHome: 'Back to Home',
      contactUs: 'Contact Us',
      showIcon: true,
    },
    de: {
      title: 'Herzlichen Glückwunsch!',
      message:
        'Ihre Reservierung für die <span style="color:#E30613; font-weight:bold;">Smart Bike Vest IGLOW</span> wurde erfolgreich bestätigt! Willkommen im Abenteuer der intelligenten Mobilität.',
      confirmedTitle: 'RESERVIERUNG BESTÄTIGT',
      confirmedItems: [
        'Zahlung von 1.- erfolgreich verarbeitet',
        'Bestätigungs-E-Mail gesendet',
        'Prioritätszugang für den 18. November 2025 gesichert',
        'Super Early Bird für <span style="color:#fff; font-weight:bold; font-size:1.2em;">CHF</span> <span style="color:#E30613; font-weight:bold; font-size:1.2em;">155.-</span> (statt <span style="color:#fff; position:relative; display:inline-block;">CHF<span style="position:absolute; top:0; left:15px; width:55px; height:100%; background:linear-gradient(to bottom right, transparent 46%, #E30613 48%, #E30613 52%, transparent 54%); pointer-events:none;"></span> 259.-</span>)',
        'Garantierte Ersparnis von <span style="color:#fff; font-weight:bold; font-size:1.2em;">CHF</span> <span style="color:#E30613; font-weight:bold; font-size:1.2em;">104.-</span>',
      ],
      nextStepsTitle: '👀 Nächste Schritte',
      nextStepsItems: [
        'Überwachen Sie Ihren Posteingang für Updates',
        'Exklusiver Zugang zum Kickstarter-Launch',
        'Prioritätslieferung',
        'Dedizierter Kundensupport',
      ],
      backHome: 'Zurück zur Startseite',
      contactUs: 'Kontaktieren Sie uns',
      showIcon: true,
    },
    es: {
      title: '¡Felicitaciones!',
      message:
        'Su reserva para la <span style="color:#E30613; font-weight:bold;">Smart Bike Vest IGLOW</span> ha sido confirmada con éxito! Bienvenido a la aventura de la movilidad inteligente.',
      confirmedTitle: 'RESERVA CONFIRMADA',
      confirmedItems: [
        'Pago de 1.- procesado con éxito',
        'Email de confirmación enviado',
        'Acceso prioritario asegurado para el 18 de noviembre de 2025',
        'Super Early Bird a <span style="color:#fff; font-weight:bold; font-size:1.2em;">CHF</span> <span style="color:#E30613; font-weight:bold; font-size:1.2em;">155.-</span> (en lugar de <span style="color:#fff; position:relative; display:inline-block;">CHF<span style="position:absolute; top:0; left:15px; width:55px; height:100%; background:linear-gradient(to bottom right, transparent 46%, #E30613 48%, #E30613 52%, transparent 54%); pointer-events:none;"></span> 259.-</span>)',
        'Ahorro garantizado de <span style="color:#fff; font-weight:bold; font-size:1.2em;">CHF</span> <span style="color:#E30613; font-weight:bold; font-size:1.2em;">104.-</span>',
      ],
      nextStepsTitle: '👀 Próximos Pasos',
      nextStepsItems: [
        'Monitoree su bandeja de entrada para actualizaciones',
        'Acceso exclusivo al lanzamiento de Kickstarter',
        'Entrega prioritaria',
        'Soporte al cliente dedicado',
      ],
      backHome: 'Volver al Inicio',
      contactUs: 'Contáctanos',
      showIcon: true,
    },
    nl: {
      title: 'Gefeliciteerd!',
      message:
        'Uw reservering voor de <span style="color:#E30613; font-weight:bold;">Smart Bike Vest IGLOW</span> is succesvol bevestigd! Welkom bij het slimme mobiliteitsavontuur.',
      confirmedTitle: 'RESERVERING BEVESTIGD',
      confirmedItems: [
        'Betaling van 1.- succesvol verwerkt',
        'Bevestigingsemail verzonden',
        'Prioriteitstoegang beveiligd voor 18 november 2025',
        'Super Early Bird voor <span style="color:#fff; font-weight:bold; font-size:1.2em;">CHF</span> <span style="color:#E30613; font-weight:bold; font-size:1.2em;">155.-</span> (in plaats van <span style="color:#fff; position:relative; display:inline-block;">CHF<span style="position:absolute; top:0; left:15px; width:55px; height:100%; background:linear-gradient(to bottom right, transparent 46%, #E30613 48%, #E30613 52%, transparent 54%); pointer-events:none;"></span> 259.-</span>)',
        'Gegarandeerde besparing van <span style="color:#fff; font-weight:bold; font-size:1.2em;">CHF</span> <span style="color:#E30613; font-weight:bold; font-size:1.2em;">104.-</span>',
      ],
      nextStepsTitle: '👀 Volgende Stappen',
      nextStepsItems: [
        'Houd uw inbox in de gaten voor updates',
        'Exclusieve toegang tot Kickstarter-lancering',
        'Prioriteitslevering',
        'Toegewijde klantenondersteuning',
      ],
      backHome: 'Terug naar Home',
      contactUs: 'Contacteer Ons',
      showIcon: true,
    },
    pt: {
      title: 'Parabéns!',
      message:
        'Sua reserva para o <span style="color:#E30613; font-weight:bold;">Smart Bike Vest IGLOW</span> foi confirmada com sucesso! Bem-vindo à aventura da mobilidade inteligente.',
      confirmedTitle: 'RESERVA CONFIRMADA',
      confirmedItems: [
        'Pagamento de 1.- processado com sucesso',
        'E-mail de confirmação enviado',
        'Acesso prioritário garantido para 18 de novembro de 2025',
        'Super Early Bird por <span style="color:#fff; font-weight:bold; font-size:1.2em;">CHF</span> <span style="color:#E30613; font-weight:bold; font-size:1.2em;">155.-</span> (em vez de <span style="color:#fff; position:relative; display:inline-block;">CHF<span style="position:absolute; top:0; left:15px; width:55px; height:100%; background:linear-gradient(to bottom right, transparent 46%, #E30613 48%, #E30613 52%, transparent 54%); pointer-events:none;"></span> 259.-</span>)',
        'Economia garantida de <span style="color:#fff; font-weight:bold; font-size:1.2em;">CHF</span> <span style="color:#E30613; font-weight:bold; font-size:1.2em;">104.-</span>',
      ],
      nextStepsTitle: '👀 Próximos Passos',
      nextStepsItems: [
        'Monitore sua caixa de entrada para atualizações',
        'Acesso exclusivo ao lançamento do Kickstarter',
        'Entrega prioritária',
        'Suporte ao cliente dedicado',
      ],
      backHome: 'Voltar ao Início',
      contactUs: 'Entre em Contato',
      showIcon: true,
    },
    hi: {
      title: 'बधाई हो!',
      message:
        '<span style="color:#E30613; font-weight:bold;">Smart Bike Vest IGLOW</span> के लिए आपका आरक्षण सफलतापूर्वक पुष्ट हो गया है! स्मार्ट मोबिलिटी एडवेंचर में आपका स्वागत है।',
      confirmedTitle: 'आरक्षण पुष्ट',
      confirmedItems: [
        '1.- का भुगतान सफलतापूर्वक संसाधित',
        'पुष्टिकरण ईमेल भेजा गया',
        '18 नवंबर 2025 के लिए प्राथमिकता पहुंच सुरक्षित',
        'सुपर अर्ली बर्ड <span style="color:#fff; font-weight:bold; font-size:1.2em;">CHF</span> <span style="color:#E30613; font-weight:bold; font-size:1.2em;">155.-</span> में (<span style="color:#fff; position:relative; display:inline-block;">CHF<span style="position:absolute; top:0; left:15px; width:55px; height:100%; background:linear-gradient(to bottom right, transparent 46%, #E30613 48%, #E30613 52%, transparent 54%); pointer-events:none;"></span> 259.-</span> के बजाय)',
        '<span style="color:#fff; font-weight:bold; font-size:1.2em;">CHF</span> <span style="color:#E30613; font-weight:bold; font-size:1.2em;">104.-</span> की गारंटीशुदा बचत',
      ],
      nextStepsTitle: '👀 अगले कदम',
      nextStepsItems: [
        'अपडेट के लिए अपने इनबॉक्स की निगरानी करें',
        'किकस्टार्टर लॉन्च तक विशेष पहुंच',
        'प्राथमिकता डिलीवरी',
        'समर्पित ग्राहक सहायता',
      ],
      backHome: 'होम पर वापस जाएं',
      contactUs: 'हमसे संपर्क करें',
      showIcon: true,
    },
    ar: {
      title: 'تهانينا!',
      message:
        'تم تأكيد حجزك لـ <span style="color:#E30613; font-weight:bold;">Smart Bike Vest IGLOW</span> بنجاح! مرحباً بك في مغامرة التنقل الذكي.',
      confirmedTitle: 'تم تأكيد الحجز',
      confirmedItems: [
        'تمت معالجة الدفع 1.- بنجاح',
        'تم إرسال بريد إلكتروني للتأكيد',
        'تم تأمين الوصول المفضل لـ 18 نوفمبر 2025',
        'سوبر إيرلي بيرد بـ <span style="color:#fff; font-weight:bold; font-size:1.2em;">CHF</span> <span style="color:#E30613; font-weight:bold; font-size:1.2em;">155.-</span> (بدلاً من <span style="color:#fff; position:relative; display:inline-block;">CHF<span style="position:absolute; top:0; left:15px; width:55px; height:100%; background:linear-gradient(to bottom right, transparent 46%, #E30613 48%, #E30613 52%, transparent 54%); pointer-events:none;"></span> 259.-</span>)',
        'توفير مضمون قدره <span style="color:#fff; font-weight:bold; font-size:1.2em;">CHF</span> <span style="color:#E30613; font-weight:bold; font-size:1.2em;">104.-</span>',
      ],
      nextStepsTitle: '👀 الخطوات التالية',
      nextStepsItems: [
        'راقب صندوق الوارد للحصول على التحديثات',
        'وصول حصري لإطلاق كيك ستارتر',
        'تسليم مفضل',
        'دعم عملاء مخصص',
      ],
      backHome: 'العودة للرئيسية',
      contactUs: 'اتصل بنا',
      showIcon: true,
    },
    ru: {
      title: 'Поздравляем!',
      message:
        'Ваше бронирование <span style="color:#E30613; font-weight:bold;">Smart Bike Vest IGLOW</span> успешно подтверждено! Добро пожаловать в приключение умной мобильности.',
      confirmedTitle: 'БРОНИРОВАНИЕ ПОДТВЕРЖДЕНО',
      confirmedItems: [
        'Платеж 1.- успешно обработан',
        'Электронное письмо с подтверждением отправлено',
        'Приоритетный доступ обеспечен на 18 ноября 2025',
        'Супер ранняя птица за <span style="color:#fff; font-weight:bold; font-size:1.2em;">CHF</span> <span style="color:#E30613; font-weight:bold; font-size:1.2em;">155.-</span> (вместо <span style="color:#fff; position:relative; display:inline-block;">CHF<span style="position:absolute; top:0; left:15px; width:55px; height:100%; background:linear-gradient(to bottom right, transparent 46%, #E30613 48%, #E30613 52%, transparent 54%); pointer-events:none;"></span> 259.-</span>)',
        'Гарантированная экономия <span style="color:#fff; font-weight:bold; font-size:1.2em;">CHF</span> <span style="color:#E30613; font-weight:bold; font-size:1.2em;">104.-</span>',
      ],
      nextStepsTitle: '👀 Следующие Шаги',
      nextStepsItems: [
        'Следите за своей почтой для получения обновлений',
        'Эксклюзивный доступ к запуску Kickstarter',
        'Приоритетная доставка',
        'Выделенная поддержка клиентов',
      ],
      backHome: 'Вернуться на Главную',
      contactUs: 'Связаться с Нами',
      showIcon: true,
    },
  };

  const currentContent = content[currentLang] || content.fr;

  return (
    <div className='result-page'>
      <header className='result-header'>
        <div className='result-header-content'>
          <img
            src='https://i.imgur.com/ADUy96s.png'
            alt='iGlow Logo'
            className='result-logo'
          />
        </div>
      </header>

      <section className='result-section fade-in'>
        <div
          className='result-container'
          dir={currentLang === 'ar' ? 'rtl' : 'ltr'}
        >
          {currentContent.showIcon && <div className='result-icon'>🤝</div>}

          <h1 className='result-title success-title'>{currentContent.title}</h1>

          <p
            className='result-message'
            dangerouslySetInnerHTML={{ __html: currentContent.message }}
          />

          <div className='result-details'>
            <h3 style={{ textAlign: 'center' }}>
              <span style={{ color: '#28a745', fontWeight: 900 }}>
                {currentContent.confirmedTitle}
              </span>{' '}
              <span style={{ color: '#28a745', fontSize: '1.2em' }}>✓</span>
            </h3>
            <ul>
              {currentContent.confirmedItems.map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
              ))}
            </ul>
          </div>

          <div className='result-details info-details'>
            <h3 style={{ textAlign: 'center', color: '#28a745' }}>
              {currentContent.nextStepsTitle}
            </h3>
            <ul>
              {currentContent.nextStepsItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className='result-observatory'>🔭</div>

          <div className='swiss-badge'>
            <div className='swiss-flag'></div>
            <span>SWISS MADE SMART VEST</span>
          </div>

          <div className='result-actions'>
            <Link to='/' className='btn btn-primary'>
              {currentContent.backHome}
            </Link>
            <a href='mailto:contact@iglow.swiss' className='btn btn-secondary'>
              {currentContent.contactUs}
            </a>
          </div>
        </div>
      </section>

      <footer className='result-footer'>
        <div className='container'>
          <p
            style={{ fontSize: '32px', fontWeight: 700, marginBottom: '30px' }}
          >
            iGlow® - Swiss Made Smart Vest
          </p>
          <p style={{ fontSize: '24px', marginBottom: '20px' }}>
            © 2025 iGlow Switzerland. Tous droits réservés.
          </p>
          <p style={{ fontSize: '24px', marginBottom: '20px' }}>
            Contact :{' '}
            <a href='mailto:contact@iglow.swiss'>contact@iglow.swiss</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Result;
