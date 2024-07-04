<script lang="ts">
	import type { ActionData } from './$types';
	
	const {form}: {form: ActionData} = $props()
</script>

<div>Form action: {form?.action}</div>
