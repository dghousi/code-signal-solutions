// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }

function removeKFromList(head, k) {

    if (head == null || head == undefined) {
        return head;   
    } else if(head.value == k) {   head = head.next;}
      
    n = head;

    while (n != null && n.next != null || n != undefined && n.next != undefined ) {
        if (n.next.value == k) {
            n.next = n.next.next
        } 

        else {
            n = n.next  
        }
    }

    if (n != null && n.value == k) {
        head = head.next
    }
    
    return head;
}

/* Call method like this */
removeKFromList([3, 1, 2, 3, 4, 5], 3);