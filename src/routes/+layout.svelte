<script lang="ts">
	import Navbar from "../template/navbar.svelte";
   
    import { setLocale } from '$lib/i18n/i18n-svelte.js';
    export let data;
	setLocale(data.locale);

    
    import { LL } from '$lib/i18n/i18n-svelte';
</script>



<div class="wrapper">
    <header>
    
        <Navbar/>
    </header>
    <main>
        <p>
            {$LL.HI({name : 'Svelte'})}
        
        </p>
        <slot/>
    </main>
    <footer>
        <slot name="footer"/>
    </footer>

</div>

<style lang="scss">
    header {
        height: 68px;
        
        box-shadow: 0 0 10px 0 var(--shadow-color);
    }

</style>