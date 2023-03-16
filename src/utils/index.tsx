import { ChangeEvent, useRef } from 'react'

export function useDebounce<T>(
  fn: (...args: ChangeEvent<T>[]) => void,
  delay: number,
) {
  const timeoutRef = useRef(0)

  function debounceFn(...args: ChangeEvent<T>[]) {
    window.clearTimeout(timeoutRef.current)

    timeoutRef.current = window.setTimeout(() => {
      fn(...args)
    }, delay)
  }

  return debounceFn
}
