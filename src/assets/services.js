import portraitImage from '../images/solo.jpg';
import groupImage from '../images/groupRandom.jpeg';
import eventImage from '../images/event.jpeg';
import productImage from '../images/ride.jpeg';
import othersImage from '../images/train.jpeg';
import extrasImage from '../images/ladywaiting.jpeg';

export const services = [
  {
    name: 'Portrait Photography',
    img: portraitImage,
    text: [
      'Basic Package: - Includes 1-hour session, 25+ edited digital images.',
      'Standard Package: - Includes 2-hour session, 35+ edited digital images',
      'Premium Package: - Includes 3-hour session, 50+ edited digital images',
    ],
  },
  {
    name: 'Family Photography / Group',
    img: groupImage,
    text: [
      'Basic Package: - Includes 1-hour session, 30+ edited digital images.',
      'Standard Package: - Includes 2-hour session, 40+ edited digital images',
      'Premium Package:  - Includes 3-hour session, 60+ edited digital images',
    ],
  },
  {
    name: 'Event Photography',
    img: eventImage,
    text: [
      'Basic Package: - Includes 1-hour session, 40+ edited digital images.',
      'Standard Package: - Includes 2-hour session, 60+ edited digital images',
      'Premium Package: - Includes 3-hour session, 80+ edited digital images',
    ],
  },
  {
    name: 'Product Photography',
    img: productImage,
    text: [
      'Basic Package: - Includes 1-hour session, 10+ edited digital images.',
      'Standard Package: Includes 2-hour session, 20+ edited digital images',
      'Premium Package: - Includes 3-hour session, 30+ edited digital images',
    ],
  },
  {
    name: 'Others',
    img: othersImage,
    text: [
      'Please note that prices may vary depending on location, additional services requested, and any special requirements. Contact us for a personalized quote tailored to your specific needs.',
      'Zoom consultation on location, costume and logistics available',
    ],
  },
  {
    name: 'Extras',
    img: extrasImage,
    text: [
      'Additional Hour of Coverage: Extend your session beyond the standard package duration for an additional fee.',
      'Additional Edited Images: Request more edited digital images beyond the package limit.',
    ],
  },
];
