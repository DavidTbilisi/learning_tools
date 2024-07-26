    function sleep(ms = 1000) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    let a = "აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ"

    async function linearSearch() {
        const items = document.querySelectorAll('.step1 .linear li');
        for (let i = 0; i < items.length; i++) {
            items[i].classList.add('current');
            await sleep();
            if (items[i].classList.contains('target')) {
                break;
            }
            items[i].classList.remove('current');
        }
    }

    async function binarySearch() {
        const items = document.querySelectorAll('.step1 .binary li');
        let left = 0;
        let right = items.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            console.log( mid,a[mid] );
            items[mid].classList.add('current');
            await sleep();
            if (items[mid].classList.contains('target')) {
                break;
            } else {
                items[mid].classList.remove('current');
                if (mid < 16) {  // Assuming target is 'პ', change condition accordingly
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
    }

    // Call the search functions when needed
    // Example:
    // linearSearch();
    // binarySearch();
