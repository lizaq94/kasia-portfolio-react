import React from 'react';
import MainHeaderSection from 'components/organism/MainHeaderSection/MainHeaderSection';
import ViewWrapper from 'components/molecues/ViewWrapper/ViewWrapper';
import { SecondTitle, SecondTitleLowerCase } from 'components/atoms/SecondTitle/SecondTitle';
import BenefitSection from 'components/organism/BenefitSection/BenefitSection';
import PriceCardSection from 'components/organism/PriceCardSection/PriceCardSection';
import ContactForm from 'components/organism/ContactForm/ContactForm';
import Section from 'components/organism/Section/Section';

const HomePage = () => {
  return (
    <>
      <ViewWrapper color={'white'}>
        <MainHeaderSection />
      </ViewWrapper>
      <ViewWrapper color={'lightGrey'}>
        <Section title={'Kiedy warto zdecydować się na\nkampanie reklamową na facebooku?'} isButton={'Dowiedz się więcej'} path={'/offer'}>
          Działania reklamowe w social mediach są w stanie przynieść korzyści każdej firmy na wielu różnych płaszczyznach. Sprawdzą się zarówno w
          sytuacjach wprowadzenia nowego produktu na rynek przez renomowane marki, jak również w przypadku budowania swojej obecności w sieci przez
          nowo-powstałe marki. Każdy moment rozwoju marki jest odpowiedni, aby rozpocząć kampanię reklamową na Facebooku i Instagramie.
        </Section>
        <BenefitSection />
        <SecondTitle>Cennik kampani reklamowych</SecondTitle>
        <PriceCardSection />
      </ViewWrapper>
      <ViewWrapper color={'white'}>
        <SecondTitleLowerCase>
          Nie wiesz, który pakiet wybrać, masz dodatkowe pytania
          <br /> lub chcesz podjąć współpracę? Skontaktuj się ze mną.
        </SecondTitleLowerCase>
        <ContactForm />
      </ViewWrapper>
    </>
  );
};

export default HomePage;
