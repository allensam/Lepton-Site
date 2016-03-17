/**
 *
 * @precondition loading.svg is shown in css while editor is hidden.
 * @param id
 */
export function Loading(id) {
    let e = id.querySelector('.loading');
    e.style.display = "none";
    id.style.display = "block";
}