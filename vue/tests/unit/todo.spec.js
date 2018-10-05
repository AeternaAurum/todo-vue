import { shallowMount } from '@vue/test-utils'
import { Todo } from '@/components/Todo.vue'

describe('Todo.vue', () => {
  it('renders props.title when passed', () => {
    const title = 'test title'
    const wrapper = shallowMount(Todo, {
      propsData: title
    })
    expect(wrapper.text()).toMatch(title)
  })
})