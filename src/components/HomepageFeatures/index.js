import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Getting A Proof of Vibe',
    Svg: require('@site/static/img/gettingvibe-docusarus.svg').default,
    description: (
      <>
        Tapin with a vibe check to get approved by the tastemakers to get the Proof of Vibe badge, to get a Vibee role in the DAO.
      </>
    ),
  },
  {
    title: 'Becoming A Tastemaker',
    Svg: require('@site/static/img/tastemaker-docusarus.svg').default,
    description: (
      <>
        Earn for curating events and bringing quality vibees onboard. Learn how to apply and how the DAO approves you into the DAO.
      </>
    ),
  },
  {
    title: 'How to Submit Proposals',
    Svg: require('@site/static/img/proposals-docusarus.svg').default,
    description: (
      <>
        Submit Proposals for events, funding and decide the future of the Vibe DAO.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
