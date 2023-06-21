<script>
    import UserInfoModal from '$cmp/modals/UserInfoModal.svelte';
    import { modal } from '$lib/modals';

    export let player = 'TretinV3';
</script>

<button class="group bg-base-content rounded-lg bg-opacity-20 hover:bg-opacity-70 hover:rotate-12 transition duration-500 ease-out flex active:scale-110" data-tip={player} on:click={() => {modal.open($modal, UserInfoModal); console.log('hello')}}>

            <div class="w-20 h-20 m-1 group-hover:-rotate-12 transition duration-500 ease-out tooltip tooltip-bottom" data-tip={player}>
                <img
                    src={`https://mc-heads.net/head/${player}`}
                    alt={player}
                    class="w-20 h-20 m-0"
                />
            </div>
</button>