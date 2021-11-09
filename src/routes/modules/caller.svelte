<script>
import { onMount } from "svelte";


    let root;
    onMount(async()=>{
        root.addEventListener("click", async()=>{
            let resp = fetch("../api/testApi");
            console.log(await resp);
        })
    })
    
</script>


<button bind:this={root}>call api</button>