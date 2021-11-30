import { css } from '@emotion/react'
import { Button } from 'components/Button/Button'

const Home = () => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 3rem;
      `}
    >
      <Button variant="primary" onClick={() => console.log('CLICK!')}>
        Click me
      </Button>
      <Button variant="secondary" onClick={() => console.log('CLICK!')}>
        click me
      </Button>

      <Button variant="tertiary" onClick={() => console.log('CLICK!')}>
        tertiary
      </Button>
      <Button disabled onClick={() => console.log('CLICK!')}>
        disabled
      </Button>
    </div>
  )
}
export default Home
