/* eslint react/no-unescaped-entities: 0 */
import T from 'prop-types';

import Heading from '../../components/heading';
import ReportDates from '../../components/report-dates';
import Intro from '../../components/intro';
import Activity from '../../components/activity';
import Competitions from '../../components/competitions';
// import Citations from '../../components/citations';
// import Orders from '../../components/orders';
import Closing from '../../components/closing';
import Footer from '../../components/footer';
// import Link from '../../components/link';

import config from '../../config';
import loadActivityData from '../../src/loadSquadronActivityData';

const reportNumber = 1;
const startDate = '2022-07-01';
const endDate = '2022-07-19';
const submissionDate = '2021-07-20';

/* const citations = [
  'TIE-TC 12',
  'TIE-TC 76',
  'TIE-TC 168',
  'XWA-TC 8',
  'XWA-TC 22',
];

const citationsChange = '+1';

const orders = [{
  name: 'TIE-TC 1',
  id: 1,
  title: 'Capture of Zaarin',
}, {
  name: 'TIE-TC 10',
  id: 10,
  title: 'Battle for the Death Star',
}, {
  name: 'TIE-TC 16',
  id: 16,
  title: 'Dacian Downfall',
}, {
  name: 'TIE-TC 19',
  id: 19,
  title: 'The Tethys Honeymoon',
}, {
  name: 'TIE-TC 30',
  id: 30,
  title: 'Save the Emperors Archives',
}, {
  name: 'TIE-TC 153',
  id: 390,
  title: 'Koph Supremacy Project',
}]; */

// TODO update Comps
const competitions = [{
  id: '3294',
  name: 'Imperial Storm III',
  ends: '2021-07-30',
  units: 'Entire TC',
  notes: 'Imperial Storm is a turn based war-game that pits all three Battlegroups against the others over a map of the planetary systems that we are currently near.',
  highlight: true,
}, {
  id: '3301',
  name: 'Crossword Challenge',
  ends: '2021-09-30',
  units: 'Entire TC',
  notes: 'Alright pilots, strap into your fighters and drink your Bantha milk, it’s time to show off your knowledge with a crossword puzzle.',
  highlight: true,
}, {
  id: '3299',
  name: 'Real Heroes of the Challenge',
  ends: '2021-08-01',
  units: 'ISD-II Challenge',
  notes: 'VA Silwar Naiilo, Challenge COM, invites you to create an NPC for the ships support staff.',
  highlight: true,
}, {
  id: '3297',
  name: 'Guess the pilot',
  ends: '2021-08-30',
  units: 'Entire TC',
  notes: 'Every week you will be presented with five uniforms. You have to guess to which pilot that uniform belongs to.',
  highlight: true,
}, {
  id: '32389',
  name: 'Challenge Championship League',
  ends: '2021-08-08',
  units: 'ISD-II Challenge',
  notes: 'A 3v3 fleet battles league for pilots of the Challenge',
  highlight: true,
}, {
  id: '3271',
  name: 'Inferno Signal Scramble',
  ends: '2022-01-01',
  units: 'ISD-II Challenge',
  notes: 'Fill in the acronyms from random letter combinations; Google Forms link posted to the Challenge Discord channel',
}, {
  id: '3274',
  name: 'The Challenge with Words',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'COL Marenta will generate a word search and post the link.',
}, {
  id: '3266',
  name: 'Trivia Grand Tour: Season Six',
  ends: '2021-07-26',
  units: 'Entire TC',
}, {
  id: '3262',
  name: 'Trivia for the Challenged 2021 - Season 3',
  ends: '2021-07-31',
  units: 'ISD-II Challenge',
},{
  id: '3235',
  name: 'COO\'s Star Wars Challenge Episode VII - 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'Accumulate the most LoCs or LoSs in Squadrons.',
}, {
  id: '3275',
  name: 'MP Ace of the TIE Corps 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'Pilots earn montlh and yearly medals for the most LoCs earned. Squadrons games not eligible.',
}, {
  id: '3276',
  name: 'COOP Ace of the TIE Corps 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'Pilots earn montlh and yearly medals for the most LoSs earned.',
}, {
  id: '3240',
  name: 'SP Ace of the TIE Corps 2021',
  ends: '2021-12-31',
  units: 'Entire TC',
  notes: 'Pilots earn montlh and yearly medals for the most singleplayer missions played.',
}, {
  id: '3154',
  name: 'The TIE Pilot Podcast',
  ends: '2021-12-31',
  units: 'Entire TC',
}];

// TODO add Raven
const ACTIVITY = {
  // Stryker
  12292: {
    communication: '',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },

  // Astin
  1348: {
    communication: '',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },

  // Dathka
  56363: {
    communication: '',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },

  // Von Barricello
  56367: {
    communication: '',
    flightActivity: '',
    otherActivity: '',
  },

  // Atashi
  56229: {
    communication: '',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },

  // Vil Dance
  56364: {
    communication: '',
    flightActivity: '',
    otherActivty: '',
    notes: '',
  },

  // ThunderSpawn
  56368: {
    communication: '',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },

  // Richlet
  4607: {
    communication: '',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },

  // To be filled
  /*?????: {
    communication: '',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },

  // To be filled
  /*?????: {
    communication: '',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },

  // To be filled
  /*?????: {
    communication: '',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },

  // To be filled
  /*?????: {
    communication: '',
    flightActivity: '',
    otherActivity: '',
    notes: '',
  },*/
};

function appendActivityData(activityData, additionalActivityData) {
  return activityData.map((ad) => {
    if (additionalActivityData[ad.PIN]) {
      return { ...ad, ...additionalActivityData[ad.PIN] };
    }

    return ad;
  });
}

export default function Report({ activityData }) {
  if (activityData === null) {
    return 'Loading...';
  }

  const activity = appendActivityData(activityData, ACTIVITY);

  return (
    <>
      <Heading reportNumber={reportNumber} />

      <ReportDates
        startDate={startDate}
        endDate={endDate}
        submissionDate={submissionDate}
      />

      <Intro showUniform>
        <p>
          <em>
         
          Atashi

          </em>
        </p>

        <p>
          ReMob awards are still making their way through the fleet. I'm happy
          to say that out of twelve squadron members, we earned 24 medals -
          each member of Tempest earning the fleet's first Meritorious Unit
          Awards as well as an IS-GW each. The tailors are already working on
          updating our uniforms. Enjoy your well-earned bonus pay.
        </p>

        <p>
          Tempest King of the Mountain has been concluded! 
          With CM Wreckage emerging as the victor. VA Silwar taking 2nd place and CM Honsou taking 3rd.
          Whilst VA Silwar moved on to become COM of the ISDII Challenge and CM Honsou stepped up to CMDR of Tempest, in the wake of the final rounds.
          CM Wreckage decided to take the spoils and depart for Sin Squadron aboard the ISDII Warrior Where I am sure he will make a fine CMDR.
        </p>

      </Intro>

      {/* <Orders missions={orders}>
        <p>
          These are some of the missions we're
          {' close to earning citations on. Check our status on the '}
          <Link href="https://tc.emperorshammer.org/battleboard.php?sqn=45">Squadron Battleboard</Link>.
        </p>
      </Orders> */}

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      {/* <Citations
        citations={citations}
        citationsChange={citationsChange}
      /> */}

      <Closing>
        This is my little play around with creating a monthly report for Raven. Just being a bit obnoxious, really. It probably
        doesn't make sense for me to do this until <strike>I gain enough power to beat CMDR Stryker in a duel to the death and take his command</strike> CMDR Strkyer 
        moves up the command chain, but here we are. For now, I'll just <em>shadow</em> him - get it?! I'm punny!<br/><br/>

        (Cheery sign off!) Until our deamons are nevermore!
      </Closing>

      <Footer />
    </>
  );
}

/* eslint react/forbid-prop-types: 0 */
Report.propTypes = {
  activityData: T.any,
};

Report.defaultProps = {
  activityData: null,
};

export async function getStaticProps() {
  const activityData = await loadActivityData(config.squadronId, startDate, endDate);

  return {
    props: { activityData }, // will be passed to the page component as props
  };
}
