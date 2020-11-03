import { mount, createLocalVue } from '@vue/test-utils'
import App from '../../src/App.vue'

const localVue = createLocalVue();

describe('App', () => {
    // Checks the App for component object with components
    it('has components', () => {
      expect(typeof App.components).toBe('object')
    })
})

describe('Mounted App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(App, {
      localVue
    });
  });
});

