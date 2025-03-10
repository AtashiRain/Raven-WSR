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

const reportNumber = 12;
const startDate = '2022-06-01';
const endDate = '2022-06-30';
const submissionDate = '2022-07-14';

/*
const citations = [
  'TIE-TC 12',
  'TIE-TC 19'
  'TIE-TC 108',
  'TIE-TC 202',
  'XvT-TC 14',
  'XWA-TC 25',
];

const citationsChange = '-16';

const orders = [{
  name: 'TIE-TC 33',
  id: 33,
  title: 'Strike at Incom',
}, {
  name: 'TIE-TC 67',
  id: 65,
  title: 'The Siege of Maltar',
}, {
  name: 'TIE-TC 77',
  id: 75,
  title: 'Verpine Encounter, Part One',
}];
*/

const competitions = [{
  id: '3412',
  name: 'Raven Squadron Patch',
  ends: '2022-08-31',
  units: 'Entire TC',
  notes: 'GN Stryker invites the TC to design a Patch for the 3rd Infiltrator Squadron, Raven Squadron.',
},{
  id: '3398',
  name: 'Squadrons Feats of Strength I',
  ends: '2022-08-31',
  units: 'Entire TC',
  notes: 'COL Genie lays down the gauntlet to the pilots of the TC. There are EIGHT feats of strength with increasing difficulty (and decreasing sanity for the pilot involved).',
},{
  id: '3361',
  name: 'The Chalquilla Cup II',
  ends: 'Someday',
  units: 'Entire TC',
  notes: 'A 3v3 fleet battle tournament between squadrons, hosted by Genie and Silwar Naiilo.',
},{
  id: '3405',
  name: 'Challenge Against Huttese',
  ends: '2022-07-30',
  units: 'ISDII Challenge',
  notes: 'CM Ryuzokin invites members of the Challenge to Cards Against Humanity. Matches will be on Saturdays at 7 PM Eastern for three weeks.',
},{
  id: '3408',
  name: 'The Great Bounty Hunting Race',
  ends: '2022-08-15',
  units: 'Entire TC',
  notes: 'CM KEBLAOMEGA invites you to take part in this very interesting bounty hunting competition, which has a lot in common with the Great Hunts of old Mandalore.',
},{
  id: '3389',
  name: 'The Challenge with Words',
  ends: '2022-08-31',
  units: 'Entire TC',
  notes: 'Finish the word search as fast as possible.',
},{
  id: '3275',
  name: 'MP Ace of the TIE Corps 2022',
  ends: '2022-12-31',
  units: 'Entire TC',
},{
  id: '3276',
  name: 'COOP Ace of the TIE Corps 2022',
  ends: '2022-12-31',
  units: 'Entire TC',
},{
  id: '3240',
  name: 'SP Ace of the TIE Corps 2022',
  ends: '2022-12-31',
  units: 'Entire TC',
}];

// TODO confirm
const ACTIVITY = {
  // Honsou
  55973: {
    communication: 'Email, Discord',
    flightActivity: 'Squadrons PvP/PvE',
    otherActivity: 'Tempest Squadron Admin, Two top-secret projects, Multiple TC and external competitions',
    notes: '',
  },

  // Akre
  56005: {
    communication: 'Discord',
    flightActivity: 'none',
    otherActivity: 'none',
    notes: '',
  },

  // Kalve
  1968: {
    communication: 'Discord',
    flightActivity: 'Star Conflict PvP/PvE, SP Battles',
    otherActivity: 'EH based projects, Art/Graphics submissions, Reviewed and submitted bug report for new TIE Battle',
    notes: '',
  },

  // Twin
  56184: {
    communication: 'Discord',
    flightActivity: 'none',
    otherActivity: 'ReMob fiction writing',
    notes: '',
  },

  // Snacks
  56017: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP/PvE, SP Missions/Battles, BFII PvP/PvE',
    otherActivity: 'Multiple TC and external competitions, Flight leader activities, Several Battle and Mission review',
    notes: 'Completed and passed SM/5',
  },

  // Kertron
  56309: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvE',
    otherActivty: 'none',
    notes: 'Congratulations on LT promotion',
  },

  // Demps
  12945: {
    communication: 'Discord',
    flightActivity: 'SP Missions',
    otherActivity: 'Multiple TC competitions',
    notes: '',
  },

  // Rich
  4607: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivity: 'Nothing quells the enthusiasm of the Challenge Cheerleader!',
    notes: '',
  },

  // Morg
  55942: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP/PvE, SP Battles',
    otherActivity: 'Multiple TC and external competitions, Flight leader and SQXO activities',
    notes: '',
  },

  // Phalk
  6874: {
    communication: 'Discord',
    flightActivity: 'SP Battles/Missions.',
    otherActivity: 'Multiple TC and external competitions',
    notes: '',
  },

  // Capukki
  56310: {
    communication: 'Discord',
    flightActivity: 'Squadrons PvP',
    otherActivity: 'none',
    notes: 'Congratulations on LT promotion',
  },

  // Newt
  56197: {
    communication: 'Discord, Email',
    flightActivity: 'Squadrons PvP/PvE',
    otherActivity: 'Operation Wholesome lead artist, Numerous artwork/graphics submissions, heavy involvement in the AirLock Podcast and TC D&D campaign',
    notes: '',
  },
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
          "On-board the 'Drunken Admiral' - SoroSuub Personal Luxury Yacht 3000 - Property of SA Kamjin Lap'lamiz"
          <p>
"This is some very good Chalquila Kamjin" Honsou remarked. His tastebuds numbed by the semi-caustic fluid. The aftertaste stronger, almost smokey.
"Yes, I keep a special aged reserve for guests." The Sovereign Protector said through a sly grin. Honsou thought for a moment that he may have made a mistake coming here to ask such intrusive questions but he needed answers.
"Look Honsou, I know why you're here and I can tell you that I picked Tempest because I needed a Deep Strike squadron who could operate against fortified enemies with no support craft being available. There is more at stake here than you know or need to know." Kamjin sat back in the high backed padded chair and closed his eyes... Honsou knew he was reinforcing his mental defences to ensure Honsou didn't try anything subtle with the force.
"Yes Kamjin... that's my Squad... the best the TIE Corps has to offer... but what was so important to take the best away from the main fight?" The impatience must have been obvious as the reply came quickly with a hint of sarcasm.
"When you have to get a secret message to the Fleet Commander in a combat zone you send you best...you don't send the Admiralzon Delivery service." Honsou's ire rose at that...
"Fine... what the hell did you find on that backwater Mav?" Honsou said with a harsher tone. That made Kamjin smile.
"You mean, 'who' found 'Me'..." His smile became wide and Honsou swore he saw the faintest of antagonistic winks.
"With all due respect sir I nearly lost two damn good pilots in that shitshow!" Honsou growled "Two of my best are in the reserves now due to injury..."
"Nearly is not fully. I'll send a bottle of challquila for their speedy recovery." Kamjin replied calmly,  casually dismissing the slight. Honsou snapped, he stood abruptly causing the Sovereign Protector to raise a questioning eyebrow. Curious as to why Honsou would be getting so emotional about this subject. 
"Alright! A challenge... one Sith to another." Honsou said, his voice booming in the confines of the luxury yacht. "I will send you the details of my challenge once I have cleared it with my COM." Honsou's fists balled at his sides.
"I look forward to it Squadron Commander, and I will convene with the Grand Admiral himself to ascertain what, if anything I can tell you IF you should be victorious." Kamjin's tone was as hard as beskar and oozed the confidence of his station. He had chosen his words carefully to remind Honsou of his lowly station by comparison.
</p>  
          As Honsou returned to his personal quarters, back on the ISDII Challenge. He sat down to complete his monthly report. He had gone in search of answers, and returned with even more questions... And some serious training to do.
          </em>
        </p>

        <p>
          Congratulations to LT CapukkiOne and LT Kertron Seven, on your LT promotions.
        </p>

        <p>
          Tempest Squadron have completed all ReMob tasks laid out for the second year running. Again with 100% participation from the squadron Well done everyone!
          Special callout to LT TwinJedi for not giving up when their PC motherboard died. Completing a fiction entry, on a work laptop, as their contribution!
        </p>

      </Intro>

      {/*
      <Orders missions={orders}>
        <p>
          These are three of the missions we're
          {' close to earning citations on. Check our status on the '}
          <Link href="https://tc.emperorshammer.org/battleboard.php?sqn=45">Squadron Battleboard</Link>.
        </p>
      </Orders>
      */}

      <Activity activity={activity} />

      <Competitions competitions={competitions} />

      {/*
      <Citations
        citations={citations}
        citationsChange={citationsChange}
      />
      */}

      <Closing>
        A later than usual monthly report but I was focusing on ReMob and wanted to congratulate every single member of the squadron as soon as it was complete.
        <p>
        This is LC Honsou, CMDR of Tempest Squadron, singing off. "We Are The Storm!"
        </p>
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
