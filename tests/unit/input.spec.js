import { mount } from '@vue/test-utils'
import App from '../../src/App.vue'

describe('App', () => {
    // Checks the App for components
    it('has components', () => {
      expect(typeof App.components).toBe('object')
    })
})