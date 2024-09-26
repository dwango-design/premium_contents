/**
 * selectorで指定した要素がinViewした時にcallbackを実行する
 * @param {string | NodeList} selector
 * @param {(arg: Element) => void} callback
 * @param {{threshold?: number, isOnce?: boolean}} options
 */
export default function inView(selector, callback, options) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                options.isOnce && observer.unobserve(entry.target);
                callback(entry.target);
            }
        })
    }, {
        root: null,
        rootMargin: '-10px',
        threshold: options.threshold
    });

    (typeof selector === 'string' ? document.querySelectorAll(selector) : selector)
        .forEach(element => observer.observe(element));
}
