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
      <Button variant="secondary" disabled onClick={() => console.log('CLICK!')}>
        disabled
      </Button>
      <Button variant="secondary" onClick={() => console.log('CLICK!')}>
        Click me
      </Button>
      <Button variant="outlined" onClick={() => console.log('CLICK!')}>
        Click me
      </Button>
    </div>
  )
}
export default Home
