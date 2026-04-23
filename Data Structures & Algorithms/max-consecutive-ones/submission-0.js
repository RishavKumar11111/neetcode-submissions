class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        // let count = 0, consecutiveCount = 0;
        // for (let i = 0; i < nums.length; i++) {
        //     if (nums[i] === 0) {
        //         count = 0;
        //     } else {
        //         count++;
        //     }
        //     if (count > consecutiveCount) consecutiveCount = count;
        // }
        // return consecutiveCount;

        let res = 0, cnt = 0;
        for (const num of nums) {
            cnt = num === 1 ? cnt + 1 : 0;
            res = Math.max(res, cnt);
        }
        return res;
    }
}
