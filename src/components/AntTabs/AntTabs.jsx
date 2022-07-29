import { Tabs } from 'antd';
import TabsSection from '../TabsSection/TabsSection';
import './style.scss';

import firstTabImage from '../../assets/svg/firstTabImage.svg';
import secondTabImage from '../../assets/svg/secondTabImage.svg';
import thirdTabImage from '../../assets/svg/thirdTabImage.svg';
import fourthTabImage from '../../assets/svg/fourthTabImage.svg';
import fifthTabImage from '../../assets/svg/fifthTabImage.svg';

const { TabPane } = Tabs;

const tabsConfig = {
  create: {
    firstFloorTitle: 'all your creative tasks',
    firstFloorSubTitle: 'simplified with AI.',
    secondFloorText:
      'Get content ideas, generate captions that respects brand’s tone of voice, design and plan your publications all in one place',
    thirdFloorText: ['Feedly', 'Canva', 'Copy.ai', 'Hootsuite'],
    imageSrc: firstTabImage,
    id: 1,
  },
  manage: {
    firstFloorTitle: 'transparency over all the',
    firstFloorSubTitle: 'on autopilot.',
    secondFloorText:
      'Eliminate the busywork and focus on what matters with hundreds of Automations. Automatically assign tasks, post comments, update statuses, and sync with other tools.',
    thirdFloorText: ['UiPath', 'Zapier', 'Airtable'],
    imageSrc: secondTabImage,
    id: 2,
  },
  automate: {
    firstFloorTitle: 'your entire workflow',
    firstFloorSubTitle: 'work ahead of you.',
    secondFloorText:
      'Plan, track, and manage all your work with project management that flexes to your teams needs.',
    thirdFloorText: ['Asana', 'Monday'],
    imageSrc: thirdTabImage,
    id: 3,
  },
  chat: {
    firstFloorTitle: 'one single chat',
    firstFloorSubTitle: 'to rule them all.',
    secondFloorText:
      'Work smarter as a team with real-time chat. All your client-facing conversations are automatically bridged to Whatsapp',
    thirdFloorText: ['Slack', 'MS Teams', 'Whatsapp'],
    imageSrc: fourthTabImage,
    id: 4,
  },
  delegate: {
    firstFloorTitle: 'find the right teammates to ',
    firstFloorSubTitle: 'get things done.',
    secondFloorText:
      'Access the largest network of marketing professional to delegate your tasks and automatically orchestrate payment across teams and clients',
    thirdFloorText: ['Upwork', 'Malt', 'Fiverr'],
    imageSrc: fifthTabImage,
    id: 4,
  },
};

const tabsArrHelper = ['create', 'manage', 'automate', 'chat', 'delegate'];

const AntTabs = () => (
  <Tabs defaultActiveKey='1'>
    {tabsArrHelper.map((item) => {
      return (
        <TabPane tab={item} key={item}>
          <TabsSection {...tabsConfig[item]} />
        </TabPane>
      );
    })}
  </Tabs>
);

export default AntTabs;
