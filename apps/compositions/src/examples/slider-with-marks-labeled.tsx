import { For, Stack, Text, VStack } from "@chakra-ui/react"
import { Slider } from "compositions/ui/slider"

export const SliderWithMarksLabeled = () => {
  return (
    <Stack gap="4">
      <For each={["sm", "md", "lg"]}>
        {(size) => (
          <VStack key={size} align="flex-start">
            <Slider
              key={size}
              size={size}
              width="200px"
              colorPalette="pink"
              defaultValue={[40]}
              marks={[
                { value: 0, label: "0%" },
                { value: 50, label: "50%" },
                { value: 100, label: "100%" },
              ]}
            />
            <Text mt="4">size = {size}</Text>
          </VStack>
        )}
      </For>
    </Stack>
  )
}
