<script lang="ts">
  import { Button } from "@alchemind/ui/components/ui/button";
  import { Input } from "@alchemind/ui/components/ui/input";
  import { invoke } from "@tauri-apps/api/core";

  let name = $state("");
  let greetMsg = $state("");

  async function greet(event: Event) {
    event.preventDefault();
    // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
    greetMsg = await invoke("greet", { name });
  }
</script>

<main class="container m-auto">
  <h1 class="text-3xl underline my-5">Welcome to Alchemind</h1>

  <form class="flex flex-row gap-5" onsubmit={greet}>
    <Input id="greet-input" class="max-w-sm" placeholder="Enter a name..." bind:value={name} />
    <Button type="submit">Greet</Button>
  </form>
  <p>{greetMsg}</p>
</main>
