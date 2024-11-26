import { Slider } from "compositions/ui/slider"

export const SliderVertical = () => {
  return (
    <Slider
      height="200px"
      orientation="vertical"
      defaultValue={[40]}
      marks={[0, 25, 50, 75, 100]}
    />
  )
}
