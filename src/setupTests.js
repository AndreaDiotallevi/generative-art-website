import '@testing-library/jest-dom/extend-expect';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import artworks from './utils/__mocks__/artworks'
 
Enzyme.configure({ adapter: new Adapter() });

// global.IntersectionObserver = class IntersectionObserver {
//   constructor() {}

//   observe() {
//     return null;
//   }

//   unobserve() {
//     return null;
//   }
// };
