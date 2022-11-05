<script>
    import { onMount, onDestroy } from "svelte";
    import { browser } from "$app/environment";
    import scrollama from "scrollama";

    if (browser) {
        onMount(() => {
            const tocNode = document.querySelector("nav.table-of-contents");
            if (tocNode) {
                document.querySelector(".right-sidebar > DIV").innerHTML = "<div><h2>Sur cette page</h2></div>";
                document
                    .querySelector(".right-sidebar > DIV > DIV")
                    .appendChild(document.querySelector("nav.table-of-contents"));

                const scroller = scrollama();
                scroller
                    .setup({
                        step: "main .header-anchor",
                        offset: "0.2"
                    })
                    .onStepEnter((response) => {
                        document.querySelectorAll(".right-sidebar A").forEach((e) => {
                            e.classList.remove("active");
                        });
                        const itemToActivate = document.querySelector(
                            `.right-sidebar A[href="${response.element.hash}"]`
                        );
                        if (itemToActivate) {
                            itemToActivate.classList.add("active");
                        }
                    });
            }
        });
        onDestroy(() => {
            const rightSidebarDivDiv = document.querySelector(".right-sidebar > DIV > DIV");
            if (rightSidebarDivDiv) {
                rightSidebarDivDiv.remove();
            }
        });
    }

    export let data;
</script>

<h1>{data.frontmatter?.title ?? "No title"}</h1>

<dl>
    <dt>Publié le :&nbsp;</dt>
    <dd>{data.frontmatter?.created_at ?? "-"}</dd>
</dl>

{@html data.body}
