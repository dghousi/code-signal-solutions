// Return true if l is a palindrome, otherwise return false.

// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

function isListPalindrome(l) {
    if(!l) return true; 
    let current = l;
    let list = [];

    
    while (current) { 
        list.push(current.value);
        current = current.next
    }    
    return list.join("") === list.reverse().join(""); 
}


isListPalindrome([0, 1, 0]);