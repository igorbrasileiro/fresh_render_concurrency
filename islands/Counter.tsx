import type { Signal } from "@preact/signals";
import { Button } from "../components/Button.tsx";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface CounterProps {
  count: Signal<number>;
}

export default function Counter(props: CounterProps) {
  if (IS_BROWSER && window.location.href.includes(props.site)) {
    window.location.reload();
  }

  return (
    <div class="flex gap-8 py-6">
      {props.site}
      <Button onClick={() => props.count.value -= 1}>-1</Button>
      <p class="text-3xl">{props.count}</p>
      <Button onClick={() => props.count.value += 1}>+1</Button>
    </div>
  );
}
