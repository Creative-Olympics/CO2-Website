<script>
    import { onMount } from "svelte";

    /** @type {string} */
    export let query;
    /** @type {MediaQueryList} */
    let mql;
    /** @type {((this: MediaQueryList, ev: MediaQueryListEvent) => any) | null} */
    let mqlListener;
    
    let wasMounted = false;
    let matches = false;

    onMount(() => {
        wasMounted = true;
        return () => {
            removeActiveListener();
        };
    });

    $: {
        if (wasMounted) {
            removeActiveListener();
            addNewListener(query);
        }
    }

    /**
	 * @param {string} query
	 */
    function addNewListener(query) {
        mql = window.matchMedia(query);
        mqlListener = (/** @type {{ matches: boolean; }} */ v) => matches = v.matches;
        mql.addListener(mqlListener);
        matches = mql.matches;
    }

    function removeActiveListener() {
        if (mql && mqlListener) {
            mql.removeListener(mqlListener);
        }
    }
</script>

<slot {matches} />