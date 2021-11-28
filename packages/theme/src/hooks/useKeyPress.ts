import { useKeyboardEvent } from '@react-hookz/web'

export function useKeyPress(key: string, callback: () => void) {
  useKeyboardEvent(
    true,
    (e) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      e.key === key && callback()
    },
    [],
    {
      eventOptions: {
        passive: true
      }
    }
  )
}
