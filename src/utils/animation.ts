export const fadeIn = (x: number, y: number, delay = 0, duration = 0.9, opacity = 0) => {
  return {
    hidden: { y, x, opacity },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        delay,
        duration,
      },
    },
  }
}
