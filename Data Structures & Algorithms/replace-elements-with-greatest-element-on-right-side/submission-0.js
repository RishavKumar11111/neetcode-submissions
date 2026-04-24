class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        // for (let i = 0; i < arr.length; i++) {
        //     let k = 0;
        //     for (let j = i + 1; j < arr.length; j++) {
        //         k = arr[j] > k ? arr[j] : k;
        //     }
        //     arr[i] = i === arr.length - 1 ? -1 : k;
        // }
        // return arr;

        let rightMax = -1;
        for (let i = arr.length - 1; i >= 0; i--) {
            const currentVal = arr[i];
            arr[i] = rightMax;
            rightMax = Math.max(rightMax, currentVal);
        }
        return arr;
    }
}
